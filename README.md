Bootcamp Rocketseat (Desafio 01)
Código do projeto para o desafio do modulo01 do bootcamp rocketseat.

Criando Projeto
Method: POST
URL: http://localhost:3344/projects
Body:
{
"id": 1,
"title": "New Projetc"
}

Editando Projeto
Method: PUT
URL: http://localhost:3344/projects/:id
Body:
{
"title": "Project now Modify"
}

Deletando Projeto
Method: DELETE
URL: http://localhost:3344/projects/:id
Body:
no body

Criando Tasks
Method: POST
URL: http://localhost:3344/projects/:id/tasks
Body:
{
"title": "Nova Tarefa Two"
}

Buscando um Projeto
Method: GET
URL: http://localhost:3344/projects/:id
Body:
no body

Buscando todos os Projetos
Method: GET
URL: http://localhost:3344/projects
Body:
no body
