# movies-api-dw

Avaliacao Pratica Desenvolvimento de API RESTful com Node.js (Banco Simulado como array)

**Objetivo:** Desenvolver uma API RESTful utilizando Node.js com Express, aplicando operacoes basicas de
CRUD (Create, Read, Update, Delete), utilizando arrays como banco de dados simulado.

**Tema escolhido - 02. Catalogo de Filmes**.

## Executando localmente

1. Clone o projeto ou faça um fork

```bash
git clone https://github.com/1manuelc/movies-api-dw.git
```

2. Instale as dependências

```bash
npm install
```

3. Execute

```bash
npm run dev
```

## Rotas

Também disponíveis no arquivo com [coleção de rotas do Postman](./movies-api.postman_collection.json)

> GET: /api => rota de teste

> GET: /api/movies?_title&year&genre_ => obtém filmes podendo filtrar por título, ano e gênero

> GET: /api/movies/count?_title&year&genre_ => obtém quantidade de filmes podendo filtrar por título, ano e gênero

> GET: /api/movies/_:id_ => obtém um filme por id

> POST: /api/movies => cria um filme

> PATCH: /api/movies/_:id_ => atualiza um filme por id

> DELETE: /api/movies/_:id_ => deleta um filme por id
