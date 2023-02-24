from flask import Flask, render_template, request, jsonify, redirect, url_for,flash, make_response
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import check_password_hash, generate_password_hash
from flask_login import UserMixin, login_user, logout_user, current_user, login_required, LoginManager
from flask_cors import CORS
from base import *
import folium

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///../base.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = '*#rh*3rh#$y*rhj(&h#'
CORS(app, resources={r"/*": {"origins": "http://127.0.0.1:3000"}})



login_manager = LoginManager()
login_manager.init_app(app)

db = SQLAlchemy(app)


class Produtos(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nomeproduto = db.Column(db.String(20), nullable=False)
    nomefantasia = db.Column(db.String(50), nullable=False)
    valor = db.Column(db.Float, nullable=False)
    descricao = db.Column(db.String(150), nullable=False)
    avaliacao = db.Column(db.Integer, nullable=False)
    disponibilidade = db.Column(db.Integer, nullable=False)
    qtd = db.Column(db.Integer, nullable=False)
    grupo = db.Column(db.Integer, nullable=False)

class Usuario(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    usuario = db.Column(db.String(30), unique=True, nullable=False)
    nome = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), unique=True, nullable=False)
    senha = db.Column(db.String(255), nullable=False)
    is_admin = db.Column(db.String, default=False)
    senha_hash = db.Column(db.String(255), nullable=False)
    def __init__(self, usuario, senha):
        self.usuario = usuario
        self.senha_hash = generate_password_hash(senha)


    def __repr__(self) -> str:
        return '<User %r' % self.usuario
    

    def check_password(self, senha):
        return verificador_hash_mod(self.usuario, self.senha_hash, senha)

with app.app_context():
    db.create_all()

@app.route('/')
def index():
    return render_template('index.html', title="Janela Testes")


class User:
    def __init__(self, id):
        self.id = id
        self.is_authenticated = True

@login_manager.user_loader
def load_user(user_id):
    # Lógica para carregar um usuário com base no ID
    return User(user_id)

@login_manager.request_loader
def load_user_from_request(request):
    # Lógica para carregar um usuário com base nas informações de autenticação fornecidas pelo cliente
    return None

@app.route('/produtos')
def produtos():
    produtos_lista = Produtos.query.all()
    produtos = []
    for item in produtos_lista:
        data = {}
        data['id'] = item.id
        data['nomeproduto'] = item.nomeproduto
        data['nomefantasia'] = item.nomefantasia
        data['valor'] = item.valor
        data['descricao'] = item.descricao
        data['avaliacao'] = item.avaliacao
        data['disponibilidade'] = item.disponibilidade
        data['qtd'] = item.qtd
        data['grupo'] = item.grupo
        produtos.append(data)
    return jsonify({'produtos': produtos})


@app.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('index'))
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        user = Usuario.query.filter_by(usuario=username).first()
        print(user)
        if user and user.check_password(password):
            login_user(user)
            return redirect(url_for('index'))
        else:
            flash('Usuário ou senha inválidos!')
    return render_template('login.html')

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('index'))

@app.route("/mapas")
@login_required
def mapa():
    # Cria um objeto de mapa com base em uma localização e uma escala
    map = folium.Map(location=[-23.5489, -46.6388], zoom_start=13)

    # Adiciona um marcador no mapa
    folium.Marker([-23.5489, -46.6388], tooltip="São Paulo").add_to(map)

    # Renderiza o mapa como um HTML
    map_html = map.get_root().render()

    # Retorna o HTML do mapa
    return render_template("mapa.html", map_html=map_html)

@app.route('/setcookie')
def set_cookie():
    resp = make_response('Cookie definido com sucesso')
    resp.set_cookie('nome_do_cookie', 'valor_do_cookie', max_age=3600)
    return resp


@app.route('/getcookie')
def get_cookie():
    cookie_value = request.cookies.get('nome_do_cookie')
    return f'O valor do cookie é {cookie_value}'


if __name__ == '__main__':
    app.run(debug=True, host='192.168.0.50')
