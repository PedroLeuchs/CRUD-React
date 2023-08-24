const express = require("express");
const server = express();
const cors = require("cors");

server.use(express.json());

server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});
server.use(cors());

const cursos = [
  "FullStack Master",
  "Desenvolvimento de Games",
  "Viver de Youtube",
];

//retorna um curso
server.get("/cursos/:index", (req, res) => {
  const { index } = req.params;

  return res.json(cursos[index]);
});

//retornar todos os cursos
server.get("/cursos", (req, res) => {
  return res.json(cursos);
});

//criar um novo curso
server.post("/cursos", (req, res) => {
  const { name } = req.body;
  cursos.push(name);

  return res.json(cursos);
});

//atualizar o curso
server.put("/cursos/:index", (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  cursos[index] = name;

  return res.json(cursos);
});

server.delete("/cursos/:index", (req, res) => {
  const { index } = req.params;

  cursos.splice(index, 1);

  return res.json({ message: "o curso foi deletado" });
});

server.listen(3001);
