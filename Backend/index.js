import express from "express";
import funcionariosRouter from "./routes/funcionarios.js";
import { promises as fs } from "fs";

const { readFile, writeFile } = fs;

global.fileName = "funcionarios.json";

const app = express();
const port = 3001;
app.use(express.json());

app.use("/funcionario", funcionariosRouter);

app.listen(port, async () => {
  try {
    await readFile(global.fileName);
    console.log(`API Started on port ${port}`);
  } catch (error) {
    const initialJson = {
      funcionarios: [],
    };
    writeFile(global.fileName, JSON.stringify(initialJson))
      .then(() => {
        console.log(`API Started on port ${port} and file created!`);
      })
      .catch((error) => {
        console.log(error);
      });
  }
});
