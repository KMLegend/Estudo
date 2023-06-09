from flask import Flask, render_template, request
import mysql.connector

db_connection = mysql.connector.connect(
    host='localhost',
    user='root',
    password='12345',
    database='ig'
)


app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def cadastro_usuario():
    if request.method == 'POST':
        
        # Obtenha os dados enviados pelo formulário
        nome = request.form['nome']
        telefone = request.form['telefone']
        endereco = request.form['endereco']
        data_nasc = request.form['data_nasc']
        obs = request.form['obs']

        # Faça o processamento necessário com os dados (por exemplo, salvar em um banco de dados)
        # Insira os dados no banco de dados
        cursor = db_connection.cursor()
        query = "INSERT INTO membros (nome, telefone, endereco, data_nascimento, observacao) VALUES ('{0}', '{1}', '{2}', '{3}', '{4}')".format(nome, telefone, endereco, data_nasc, obs)
        print(query)
        cursor.execute(query)
        db_connection.commit()
        cursor.close()
    return render_template('cadastro.html')

@app.route('/vizualizacao')
def vizu():
    return render_template('tabela.html')

if __name__ == '__main__':
    app.run(debug=True, port = 8050)
    db_connection.close()


# nome, telefone, endereço, data nascimento, e um campo de obs