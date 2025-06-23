from flask import Flask, render_template, request, redirect, url_for, jsonify, flash, Response
from werkzeug.utils import secure_filename
from flask_sqlalchemy import SQLAlchemy
import os
import queue

app = Flask(__name__)

# Configuración base de datos
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///serveME_base_de_datos.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Configuración subida archivos
UPLOAD_FOLDER = "static/img"
ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif"}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

app.config['SECRET_KEY'] = 'una_clave_secreta_super_segura_y_aleatoria_para_tu_app_prod'
db = SQLAlchemy(app)

# Cola para notificaciones SSE
cola_notificaciones = queue.Queue()

class Producto(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False, unique=True)
    precio = db.Column(db.Float, nullable=False)
    src = db.Column(db.String(255), nullable=True)
    descripcion = db.Column(db.Text, nullable=True)
    categoria = db.Column(db.String(50), nullable=True)

    def __init__(self, nombre, precio, src, descripcion, categoria):
        self.nombre = nombre
        self.precio = precio
        self.src = src
        self.descripcion = descripcion
        self.categoria = categoria

class Orden(db.Model):
    id_orden = db.Column(db.Integer, primary_key=True)
    producto_id = db.Column(db.Integer, db.ForeignKey('producto.id'), nullable=False)

class Usuario(db.Model):
    id_usuario = db.Column(db.Integer, primary_key=True)
    nombre_usuario = db.Column(db.String(100), nullable=False, unique=True)
    contra_usuario = db.Column(db.String(50), nullable=True)

    def __init__(self, nombre_usuario_param, contrasena_texto_plano):
        self.nombre_usuario = nombre_usuario_param
        self.contra_usuario = contrasena_texto_plano

    def __repr__(self):
        return f'<Usuario {self.nombre_usuario}>'

@app.route('/api/nombres-productos')
def nombres_productos():
    productos = Producto.query.all()
    nombres = [producto.nombre for producto in productos]
    return jsonify(nombres)


@app.route('/api/productos')
def api_productos():
    productos = Producto.query.all()
    return jsonify([{
        "id": p.id,
        "nombre": p.nombre,
        "precio": p.precio,
        "categoria": p.categoria,
        "descripcion": p.descripcion,
        "src": p.src
    } for p in productos])

@app.route('/')
def home():
    Producto.query.all()
    return render_template("index.html")

@app.route('/inicio', methods=["GET"])
def inicio():
    return render_template("ingreso-registro.html")

@app.route('/inicioCorrecto', methods=["POST"])
def inicioCorrecto():
    nombre = request.form.get("usuario-ingresado")
    contra = request.form.get("contraseña-ingresada")

    usuario = Usuario.query.filter_by(nombre_usuario=nombre).first()

    if usuario:
        if usuario.contra_usuario == contra:
            flash('Inicio de sesión exitoso!', 'success')
            return redirect(url_for('formularioCarga'))
        else:
            flash('Contraseña incorrecta. Intenta de nuevo.', 'error')
            return render_template("ingreso-registro.html")
    else:
        flash('Usuario no encontrado. Por favor, verifica tu nombre de usuario.', 'error')
        return render_template("ingreso-registro.html")

@app.route('/form', methods=["GET"])
def formularioCarga():
    return render_template("panel.html")

@app.route('/form/cargaProductos', methods=["POST"])
def cargarProducto():
    nombre = request.form.get("nombre_producto")
    precio = float(request.form.get("precio_estimado"))
    imagen = request.files.get('imagen_referencia')
    descripcion = request.form.get("descripcion_producto")
    categoria = request.form.get("categoria_producto")

    filename = imagen.filename
    ruta_guardado = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    src = "../static/img/" + filename
    imagen.save(ruta_guardado)

    producto_nuevo = Producto(nombre, precio, src, descripcion, categoria)
    db.session.add(producto_nuevo)
    db.session.commit()

    return redirect(url_for('formularioCarga'))

@app.route('/api/modificar-producto', methods=['POST'])
def modificar_producto():
    nombre_original = request.form.get("nombre_original")

    if not nombre_original:
        return jsonify({"success": False, "message": "Nombre original es requerido"}), 400

    producto = Producto.query.filter_by(nombre=nombre_original).first()
    if not producto:
        return jsonify({"success": False, "message": "Producto no encontrado"}), 404

    # No cambiar el nombre:
    # nuevo_nombre = request.form.get("nombre_producto", producto.nombre)

    nuevo_precio = float(request.form.get("precio_estimado", producto.precio))
    nueva_descripcion = request.form.get("descripcion_producto", producto.descripcion)
    nueva_categoria = request.form.get("categoria_producto", producto.categoria)

    # Actualizar campos excepto nombre
    # producto.nombre = nuevo_nombre  # <-- esta línea no va
    producto.precio = nuevo_precio
    producto.descripcion = nueva_descripcion
    producto.categoria = nueva_categoria

    # Revisar si hay imagen nueva
    if 'imagen_referencia' in request.files:
        imagen = request.files['imagen_referencia']
        if imagen and allowed_file(imagen.filename):
            filename = secure_filename(imagen.filename)
            ruta_guardado = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            imagen.save(ruta_guardado)
            producto.src = "../static/img/" + filename
        elif imagen.filename != '':
            return jsonify({"success": False, "message": "Tipo de imagen no permitido"}), 400

    try:
        db.session.commit()
        return jsonify({"success": True, "message": "Producto modificado correctamente"})
    except Exception as e:
        db.session.rollback()
        return jsonify({"success": False, "message": f"Error al modificar producto: {str(e)}"}), 500


@app.route('/api/eliminar-producto', methods=['POST'])
def eliminar_producto():
    data = request.get_json()
    nombre_producto = data.get('nombre')

    if not nombre_producto:
        return jsonify({'error': 'No se especificó el nombre del producto'}), 400

    producto = Producto.query.filter_by(nombre=nombre_producto).first()

    if not producto:
        return jsonify({'error': 'Producto no encontrado'}), 404

    try:
        db.session.delete(producto)
        db.session.commit()
        return jsonify({'status': 'Producto eliminado correctamente'})
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': 'Error al eliminar producto'}), 500

# Endpoint para llamar al mozo: pone mensaje en la cola
@app.route('/llamar-mozo', methods=['POST'])
def llamar_mozo():
    mensaje = '¡Un cliente llamó al mozo!'
    cola_notificaciones.put(mensaje)
    return jsonify({'status': 'ok'}), 200

# Stream SSE que envía mensajes cuando hay llamados al mozo
@app.route('/stream')
def stream():
    def event_stream():
        while True:
            mensaje = cola_notificaciones.get()  # Espera bloqueante hasta que haya mensaje
            yield f"data: {mensaje}\n\n"
    return Response(event_stream(), mimetype='text/event-stream')

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
