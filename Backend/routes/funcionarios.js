import express from "express";
const router = express.Router();
import { promises as fs } from "fs";

const { readFile, writeFile } = fs;

router.post("/", async (req, res) => {
  try {
    let funcionario = req.body;
    const data = JSON.parse(await readFile(global.fileName));

    funcionario = { ...funcionario };
    data.funcionarios.push(funcionario);

    await writeFile(global.fileName, JSON.stringify(data, null, 2));

    res.send(funcionario);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = JSON.parse(await readFile(global.fileName));

    res.send(data.funcionarios);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

router.put("/:cpf", async (req, res) => {
  try {
    let funcionario = req.body;
    const cpf = req.params.cpf;
    const data = JSON.parse(await readFile(global.fileName));
    const index = data.funcionarios.findIndex((item) => item.Cpf == cpf);

    data.funcionarios[index] = funcionario;

    await writeFile(global.fileName, JSON.stringify(data, null, 2));

    res.send(funcionario);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

router.delete("/:Cpf", async (req, res) => {
  try {
    const data = JSON.parse(await readFile(global.fileName));
    const index = data.funcionarios.findIndex(
      (funcionario) => funcionario.Cpf == req.params.Cpf
    );
    data.funcionarios.splice(index, 1);
    await writeFile(global.fileName, JSON.stringify(data, null, 2));

    res.end();
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

router.get("/Nome/:Nome", async (req, res) => {
  try {
    const data = JSON.parse(await readFile(global.fileName));

    const funcionarioEncontrado = data.funcionarios.find(
      (funcionario) => funcionario.Nome === req.params.Nome
    );
    res.send(funcionarioEncontrado);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

router.get("/Cpf/:Cpf", async (req, res) => {
  try {
    const data = JSON.parse(await readFile(global.fileName));

    const funcionarioEncontrado = data.funcionarios.find(
      (funcionario) => funcionario.Cpf == parseInt(req.params.Cpf)
    );
    res.send(funcionarioEncontrado);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

router.get("/Cargo/:Cargo", async (req, res) => {
  try {
    const data = JSON.parse(await readFile(global.fileName));

    const funcionarioEncontrado = data.funcionarios.filter(
      (funcionario) => funcionario.Cargo === req.params.Cargo
    );
    res.send(funcionarioEncontrado);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

router.get("/DataCad/:Dia/:Mes/:Ano", async (req, res) => {
  try {
    const data = JSON.parse(await readFile(global.fileName));
    req.params.Data =
      req.params.Dia + "/" + req.params.Mes + "/" + req.params.Ano;
    const funcionarioEncontrado = data.funcionarios.filter(
      (funcionario) => funcionario.DataCad === req.params.Data
    );
    res.send(funcionarioEncontrado);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

router.get("/UF/:UfNasc", async (req, res) => {
  try {
    const data = JSON.parse(await readFile(global.fileName));
    const funcionarioEncontrado = data.funcionarios.filter(
      (funcionario) => funcionario.UfNasc === req.params.UfNasc
    );
    const total = { totalUf: funcionarioEncontrado.length };

    funcionarioEncontrado.push(total);

    res.status(200).send(funcionarioEncontrado);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

router.get("/faixaSalarial/:min/:max", async (req, res) => {
  try {
    const data = JSON.parse(await readFile(global.fileName));
    const funcionarioEncontrado = data.funcionarios.filter(
      (funcionario) =>
        funcionario.Salario >= req.params.min &&
        funcionario.Salario <= req.params.max
    );
    res.send(funcionarioEncontrado);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

router.get("/Status/:Status", async (req, res) => {
  try {
    const data = JSON.parse(await readFile(global.fileName));

    const funcionarioEncontrado = data.funcionarios.filter(
      (funcionario) => funcionario.Status === req.params.Status
    );
    res.send(funcionarioEncontrado);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});
export default router;
