### Como rodar o projeto

📌 Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

- Node.js (versão 18 ou superior)

- Yarn ou npm

- OpenSSL (para gerar certificados SSL)

🛠 Configuração do ambiente

### Clone o repositório:

- git clone https://github.com/seu-usuario/topcon-frontend.git
- cd topcon-frontend

### Instale as dependências:

npm install  # ou yarn install

Gerar as chaves SSL

rodar o projeto localmente com HTTPS é preciso gerar um certificado SSL autoassinado usando OpenSSL:

```
openssl req -x509 -newkey rsa:4096 -keyout localhost-key.pem -out localhost.pem -days 365 -nodes
```
Esse comando criará dois arquivos: localhost.pem (certificado) e localhost-key.pem (chave privada).

Configuração do arquivo .env

Renomeie o arquivo .env.example para .env e preencha com as seguintes informações:

```
API_URL=https://localhost:7150
HTTPS=true
SSL_CRT_FILE=localhost.pem
SSL_KEY_FILE=localhost-key.pem
```

API_URL: Define a URL base da API do backend.

HTTPS: Ativa a comunicação segura com SSL.

SSL_CRT_FILE e SSL_KEY_FILE: Certificados SSL para rodar a aplicação localmente com HTTPS.

Rodar o projeto:

Se estiver usando npm:

npm run dev

A aplicação estará disponível em: http://localhost:3000

🔹 Tecnologias utilizadas

🖥️ Frontend

React (com TypeScript) - Biblioteca para construção da interface do usuário.

Chakra UI - Biblioteca de componentes para estilização.

Axios - Cliente HTTP para comunicação com a API.

