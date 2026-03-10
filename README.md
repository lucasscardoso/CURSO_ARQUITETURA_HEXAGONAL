# CURSO_ARQUITETURA_HEXAGONAL

## API de Usuários - Arquitetura Hexagonal
Este projeto é uma API REST para gerenciamento de usuários, desenvolvida em TypeScript e Node.js, aplicando os conceitos de Arquitetura Hexagonal (Ports and Adapters) para garantir desacoplamento e facilidade de testes.

### Tecnologias Utilizadas
Linguagem: TypeScript

Framework Web: Express.js

Banco de Dados: PostgreSQL (via pg-promise)

Criptografia: BCrypt (para segurança de senhas)

Arquitetura: Clean Architecture / Hexagonal

## Estrutura do Projeto
O projeto está dividido em camadas para isolar a lógica de negócio da infraestrutura:

- core/usuario/model: Entidades de domínio (regras de negócio puras).

- core/usuario/service: Casos de Uso (Logar, Registrar, Alterar, Buscar).

- externals/db: Implementações de persistência (PostgreSQL e memória).

- externals/api: Adaptadores de entrada (Controllers Express).

- shared: Interfaces globais e DTOs.

## Como Executar
1. Requisitos
- Node.js instalado
- altere o arquivo .env para as suas configs de banco
- execute o comando npm i para instalar as dependencias
- execute o comando npm run dev para executar o projeto

- PostgreSQL rodando localmente ou via Docker
- via docker utilizei a imagem: [Link](https://github.com/docker-library/postgres/blob/6edb0a8c4def40c371514b34aef9037ec82d9110/18/alpine3.23/Dockerfile)

- crie a tabela abaixo no postgress ou banco de sua preferencia:

`create extension if not exists "uuid-ossp`

`create table usuarios(
    id uuid primary key,
    nome varchar(255) not null,
    email varchar(255) not null,
    senha varchar(255) not null
);`

## Rotas da API

| Método | Rota | Descrição |
| :--- | :---: | ---: |
| POST | /api/usuarios/registrarCadastra | Cadastra um novo usuário. |
| GET | /api/usuarios/:email | Busca USUARIO (nome/email). |
| PUT | /api/usuarios/alterar/:email | Atualiza dados de um usuário existente(NOME/EMAIL). |
| DELETE | /api/usuarios/deletar/:email | Deleta Usuario |
| POST | /api/usuarios/login| Autentica um usuário e gera token |

 
