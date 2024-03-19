const { validarCpf } = require("./validar-cpf.js");

function validarCpfShell(args) {
  console.log(`\n\nArgumentos recebidos: ${args}`);
  console.log("*** VALIDANDO CPF *** \n");

  const resultado = validarCpf(args[0]);
  const textoResultado = resultado ? "VÁLIDO" : "INVÁLIDO";

  if (resultado)
    console.log(
      "\x1b[1m",
      "== RESULTADO: ",
      `\x1b[32m${textoResultado}\x1b[0m ==\n`
    );
  else
    console.log(
      "\x1b[1m",
      "== RESULTADO: ",
      `\x1b[31m${textoResultado}\x1b[0m ==\n`
    );
}

if (process.env.NODE_ENV !== "test") validarCpfShell(process.argv.slice(2));

module.exports = { validarCpfShell };
