/*
  Primeiro desafio do Bootcamp 8
  By: Losangelo Pacífico
*/

const express = require('express');
const server = express();

server.use(express.json());

const projects = [];
let iCountRequest = 0;

//Count eventos
/*function nRequest(req, res, next) {
 iCountRequest++;
  console.log(`Requisições afetuadas: ${iCountRequest}`);
  return next();
}
*/

server.use((req, res, next) => {
  iCountRequest++;
  console.log(`Requisições afetuadas: ${iCountRequest}`);
  return next();
});

//Check exist
function existProjetc(req, res, next) {
  const { id } = req.params;
  console.log(`parametro passado para id: "${parseInt(id)}"`);

  bFound = projects.find(prj => prj.id === parseInt(id));

  if (!bFound) {
    return res.status(400).json({ error: 'Project not found!' });
  }
  return next();
}

//Create project
server.post('/projects', (req, res) => {
  const { id, title } = req.body;
  const project = {
    id,
    title,
    tasks: []
  };
  projects.push(project);
  return res.json(project);
});

//all projetct
server.get('/projects', (req, res) => {
  return res.json(projects);
});

//Get project One expecific
server.get('/projects/:id', existProjetc, (req, res) => {
  const { id } = req.params;
  return res.json(projects[parseInt(id)]);
});

//Modify expecific
server.put('/projects/:id', existProjetc, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(prj => prj.id === parseInt(id));

  project.title = title;

  return res.json(project);
});

//Delete project
server.delete('/projects/:id', existProjetc, (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.find(prj => prj.id === parseInt(id));

  projects.splice(projectIndex, 1);

  return res.send();
});

//create task
server.post('/projects/:id/tasks', existProjetc, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(prj => prj.id === parseInt(id));

  project.tasks.push(title);

  return res.json(project);
});

//Modigy task
server.put('/projects/:id', existProjetc, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(prj => prj.id === parseInt(id));

  project.title = title;

  return res.json(project);
});

server.delete('/projects/:id', existProjetc, (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.find(prj => prj.id === parseInt(id));

  projects.splice(projectIndex, 1);

  return res.send();
});

server.listen(3344);
