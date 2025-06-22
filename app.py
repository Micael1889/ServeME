from flask import Flask, render_template, request, redirect, url_for, jsonify,flash
from werkzeug.utils import secure_filename
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)
""" BASE DE DATOS """
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///serveME_base_de_datos.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
""" FIN BASE DE DATOS """
""" SUBA DE ARCHIVOS """
UPLOAD_FOLDER = "static/img"
ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif"}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
""" FIN SUBA DE ARCHIVOS """
app.config['SECRET_KEY'] = 'una_clave_secreta_super_segura_y_aleatoria_para_tu_app_prod'
db = SQLAlchemy(app)

class Producto(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False, unique=True)  # unique para evitar duplicados
    precio = db.Column(db.Float, nullable=False)
    src = db.Column(db.String(255), nullable=True)
    descripcion = db.Column(db.Text, nullable=True)
    categoria = db.Column(db.String(50), nullable=True)

    def __init__(self,nombre,precio,src,descripcion,categoria):
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
        return f'<Usuario {self.nombre}>'
    

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

@app.route('/inicio', methods= ["GET"])
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

@app.route('/form', methods= ["GET"])
def formularioCarga():
    return render_template("panel.html")

@app.route('/form/cargaProductos', methods = ["POST"])
def cargarProducto():
    
    nombre = request.form.get("nombre_producto")
    precio = float(request.form.get("precio_estimado"))
    imagen = request.files.get('imagen_referencia') # También usa .get() para archivos
    descripcion = request.form.get("descripcion_producto")
    categoria = request.form.get("categoria_producto")

    filename = imagen.filename
    ruta_guardado = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    src = "../static/img/" + filename
    imagen.save(ruta_guardado)

    producto_nuevo = Producto(nombre,precio,src,descripcion,categoria)
    db.session.add(producto_nuevo)
    db.session.commit()

    return redirect(url_for('formularioCarga'))

if __name__ == '__main__':
    with app.app_context():
        db.create_all()    
    app.run(debug=True)
