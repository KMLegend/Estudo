import logging
import socket

# Configuração do logger
logging.basicConfig(filename='server.log', level=logging.INFO,
                    format='%(asctime)s - %(levelname)s - %(message)s')

# Endereço e porta do servidor
server_address = ('localhost', 8080)

# Cria um socket
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

try:
    # Conecta ao servidor
    sock.connect(server_address)
    logging.info('Conectado ao servidor')

    # Envia dados para o servidor
    data = b'Hello, server!'
    sock.sendall(data)
    logging.info(f'Dados enviados: {data}')

    # Recebe a resposta do servidor
    response = sock.recv(1024)
    logging.info(f'Resposta do servidor: {response.decode()}')

except Exception as e:
    logging.error(f'Ocorreu um erro na conexão com o servidor: {e}')

finally:
    # Fecha a conexão
    sock.close()
    logging.info('Conexão fechada')