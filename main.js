// import express from "express";
// import path from "path";
// import cors from "cors";
// import { where } from "sequelize";
// import mysql2 from "mysql2";
// import Cursos from "./db.js";

// const server = express();
// server.use(cors());
// const __dirname = path.resolve();


// server.get("/", async (req, res) => {
//    res.send("seila");
// });

// server.get("/:id", async (req, res) => {
//    let { id } = req.params.id;
//    res.send(await Cursos.findOne({ where: { id: id } }));
// });


// server.listen(3031, function () {
//     console.log("Server is running on port 3031");
//   });


import express from "express";
import cors from "cors";
import Cursos from "./db.js";

const server = express();
server.use(cors());

server.get("/", async (req, res) => {
   res.send("seila");
});

server.get("/:id", async (req, res) => {
   const id = req.params.id; // Corrigido a desestruturação
   const curso = await Cursos.findOne({ where: { id } });

   if (curso) {
     res.send(curso);
   } else {
     res.status(404).send({ error: "Curso não encontrado!" });
   }
});

server.listen(3031, function () {
    console.log("Server is running on port 3031");
});