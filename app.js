const express = require("express");
const app = express();
const port = 3000;

app.use(require("cors")());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = express.Router();

const { validarCpf } = require("./utils/validar-cpf.js");
const { formatarDocumento } = require("./utils/formatar-documento.js");

router.post("/validar-cpf", async function (req, res, next) {
  try {
    const { cpf } = req.body;

    if (!cpf) {
      throw new Error("CPF não informado");
    }

    if (!validarCpf(cpf)) {
      throw new Error("CPF inválido");
    }

    res.status(200).json({ cpf });
  } catch (err) {
    console.log(err);
    res.status(400).json({ erro: `${err.message}` });
  }
});

router.post("/formatar-cpf-cnpj", async function (req, res, next) {
  try {
    const { cpf, cnpj } = req.body;

    if (!cpf && !cnpj) {
      throw new Error("CPF e CNPJ não informados");
    }

    const documentoFormatado = formatarDocumento({ cpf, cnpj });

    res.status(200).json({ resultado: documentoFormatado });
  } catch (err) {
    console.log(err);
    res.status(400).json({ erro: `${err.message}` });
  }
});

app.use("/", router);

app.listen(port);
console.log("Servidor iniciado!");

module.exports = app;
