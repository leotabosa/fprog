const { formatarDocumentoShell } = require("./formatar-documento-shell.js");

describe("formatar-documento-shell.js", () => {
  it("DEVE realizar impressão do resultado de CPF", () => {
    const log = jest.spyOn(console, "log");
    const args = ["cpf", "11548748005"];
    formatarDocumentoShell(args);
    expect(log).toHaveBeenLastCalledWith(
      "\x1b[1m",
      "== RESULTADO: ",
      `\x1b[32m115.487.480-05\x1b[0m ==\n`
    );
  });

  it("DEVE realizar impressão do resultado de CNPJ", () => {
    const log = jest.spyOn(console, "log");
    const args = ["cnpj", "79209004000134"];
    formatarDocumentoShell(args);
    expect(log).toHaveBeenLastCalledWith(
      "\x1b[1m",
      "== RESULTADO: ",
      `\x1b[32m79.209.004/0001-34\x1b[0m ==\n`
    );
  });
});
