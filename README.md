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

### Terça-feira

- usamos os comandos basicos:
show databases ou show dbs
use sua_database
show collections
db.aluna.find()
db.aluna.count()

- filtramos nossas alunas no mongo pela linha de comando usando .find():
AND
OR
IN - que é tipo um OR mas pra um campo só de cada vez, vamos buscar campos dentro de uma lista de valores que queremos achar
Regex (LIKE) - usamos para buscar pedaços da string e não a string completa

- ordenamos nossas alunas usando o .sort() 
- usamos o limit() para trazer somente alguns registros de uma vez, e nao todos
- usamos o pretty() pra deixar a lista lindona
- CRUDão com esses comandos lindos
- usamos insert e insetMany pra criar novas alunas
- $gt (registros maiores que) e $lt (registros menores que)

- para abrir a linha de comando de forma fácil, basta entrar na pasta e digitar cmd no topo e dar enter


### Quarta-Feira

- fizemos o update de dados no mongodb, usando tambem o $set para alterar somente alguns campos
- fizemos o delete de registros no mongo db .remove()
- fizemos o delete do database (tudo!!) com .dropDatabase() - VAMOS EVITAR ESSE COMANDO DOS INFERNOOO >.<
- na linha de comando do mongoDB ele cria automágicamente databases e collections pra gente
- tivemos uma super aula de vida com a maravilhosa Nina Silva
- usamos o mongoimport para importar uma planilha pra dentro do nosso banco de dados

### Quinta-feira
- filter, map, reduce (ver arquivo /node/arrays.js no repo dessa semana)

### Sexta-feira 

Dicas para o Projeto:
- Pra subir o backend: https://www.heroku.com/
- Sites com algumas APIs: https://99apis.com/populares
