from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def cadastro_usuario():
    if request.method == 'POST':
        # Obtenha os dados enviados pelo formulário
        nome = request.form['nome']
        email = request.form['email']
        senha = request.form['senha']

        # Faça o processamento necessário com os dados (por exemplo, salvar em um banco de dados)

        return 'Usuário cadastrado com sucesso!'
    return render_template('cadastro.html')

if __name__ == '__main__':
    app.run(debug=True)
