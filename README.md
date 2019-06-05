# N2-intro-banco-de-dados
Semana 9 - Introdução a Banco de Dados

## Objetivo
Nessa semana vamos entender o que é um banco de dados, aprender quais são os principais tipos de bancos de dados (Relacional e Não relacional). Vamos criar nosso primeiro banco de dados em MongoDB, manipulando dados nele pela ferramenta Robo 3T, pela linha de comando e depois no nosso backend em NodeJS.

## Materiais
- [Material de estudo](https://docs.google.com/document/d/17UNEPcgju71FXDFrr-RKt7ZdTRvTLwc_FGpaQVDL6wM/edit?usp=sharing)
- [Guia de instalação](https://docs.google.com/document/d/1N7W0TJ9_PiGCJD6zpT2Bz6H8MZNQq4pTqV8PGpa6xpU/edit?usp=sharing)


## Links úteis
- [Nosso DontPad para compartilhar links ao vivo](http://dontpad.com/lovemongodb)
- [Nosso DontPad para postar dúvidas](http://dontpad.com/socorromongodb)
- [Documentação MongoDB](https://docs.mongodb.com/manual/crud/)


## Recaptulando
### Segunda-feira
- Aprendemos sobre banco de dados SQL (Relacional) e NoSQL (Não Relacional)
- O relacional tem tabelas com linhas e colunas
- O não relacional tem documentos dentro de coleções (collections)
- Instalamos o MongoDB (criamos a pastinha C:/data/db) e o Robo 3T
- Criamos uma conexão com o MongoDB local na porta 27017 (que é a porta padrão do mongodb)
- Criamos um database reprograma, e uma collection chamada aluna
- Inserimos nossa primeira aluna 
- BSON - o mongo transforma nossos documentos em JSON em formato BSON para armazenar de forma comprimida
- Não temos mais o id, temos _id, que é do tipo ObjectId
- Podemos inserir datas no nosso JSON
- CRUD - Create (POST), Retrieve (read) (GET), Update(PUT ou PATCH), Delete (DELETE)
