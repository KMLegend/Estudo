import socket
import sqlite3

# Endereço e porta do servidor
server_address = ('127.0.0.1', 8080)

# Cria uma conexão com o banco de dados SQLite
conn = sqlite3.connect('C:\\Users\\kevin\\Documents\\Meus Projetos\\Estudo\\BD\\Projeto SLA\\database.db')
cursor = conn.cursor()

# Cria a tabela se não existir
cursor.execute("CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY AUTOINCREMENT, content TEXT)")

# Cria um socket do servidor
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Vincula o socket do servidor ao endereço e porta
server_socket.bind(server_address)

# Define o limite de conexões pendentes
server_socket.listen(1)

print(f"Servidor iniciado em {server_address[0]}:{server_address[1]}")

while True:
    # Aguarda uma conexão
    print("Aguardando conexão...")
    client_socket, client_address = server_socket.accept()
    print(f"Conexão estabelecida com {client_address[0]}:{client_address[1]}")

    try:
        # Recebe dados do cliente
        data = client_socket.recv(1024)
        message = data.decode()
        print(f"Dados recebidos: {message}")

        # Insere a mensagem no banco de dados
        cursor.execute("INSERT INTO messages (content) VALUES (?)", (message,))
        conn.commit()
        print("Mensagem inserida no banco de dados")

        # Envia uma resposta ao cliente
        response = "Mensagem recebida e armazenada no banco de dados"
        client_socket.sendall(response.encode())
        print(f"Resposta enviada: {response}")

    except Exception as e:
        print(f"Ocorreu um erro na comunicação com o cliente: {e}")

    finally:
        # Encerra a conexão com o cliente
        client_socket.close()
        print("Conexão com o cliente encerrada")
