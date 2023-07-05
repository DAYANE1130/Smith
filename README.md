# Projeto Smith (Casa de ferreiro) 
A aplicação consiste em uma loja de itens medievais, no formato de uma API, utilizando Typescript.

- A arquitetura foi organizada no formato de camadas(Models, Service e Controllers) 
- É possível realizar as operações básicas que se pode fazer em um  banco de dados: Criação, Leitura, Atualização e Exclusão (ou CRUD, para as pessoas mais íntimas stuck_out_tongue_winking_eye - Create, Read, Update e Delete). API obedece o padrão REST
- Possui  endpoints que irão ler e escrever em um banco de dados, utilizando o MySQL.

## Funcionalidades
- Cadastro de usuários.
- Validação de Login.
- Criação e  leitura de itens medievais.
- Leitura de pedidos.


## Requisitos

Certifique-se de ter o Node.js instalado em sua máquina antes de prosseguir.

## Instalação

1. Clone este repositório em seu ambiente local.
2. Navegue até o diretório do projeto e execute o seguinte comando para instalar as dependências:

    ```npm install```

## Endpoints

A seguir estão os principais endpoints disponíveis nesta API:
 - `POST /login`: Realiza Login com autenticação JWT e validação de usuário e senha. 
 - `POST /users`: Cria um usuário
 - `POST /products`: Cria um novo item medieval.
 - `GET /products`: Retorna todos os itens medievais.
 - `GET /orders`: Retorna todas os pedidos ( detalhando usuário e pedidos/pedidos correspondentes).
