const { formatarDocumento } = require("./formatar-documento.js");

function formatarDocumentoShell(args) {
  console.log(`\n\nArgumentos recebidos: ${args.join(", ")}`);
  console.log("*** FORMATANDO DOCUMENTO *** \n");

  const resultado = formatarDocumento({
    [args[0].toLowerCase()]: args[1],
  });

  console.log("\x1b[1m", "== RESULTADO: ", `\x1b[32m${resultado}\x1b[0m ==\n`);
}

if (process.env.NODE_ENV !== "test")
  formatarDocumentoShell(process.argv.slice(2));

module.exports = { formatarDocumentoShell };
