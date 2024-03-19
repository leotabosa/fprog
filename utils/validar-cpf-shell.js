const { validarCpf } = require("./validar-cpf.js");

const args = process.argv.slice(2);

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
