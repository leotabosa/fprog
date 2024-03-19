const { validarCpfShell } = require("./validar-cpf-shell.js");

describe("validar-cpf-shell.js", () => {
  it("DEVE realizar impressão do resultado VÁLIDO de CPF", () => {
    const log = jest.spyOn(console, "log");
    const args = ["11548748005"];
    validarCpfShell(args);
    expect(log).toHaveBeenLastCalledWith(
      "\x1b[1m",
      "== RESULTADO: ",
      `\x1b[32mVÁLIDO\x1b[0m ==\n`
    );
  });

  it("DEVE realizar impressão do resultado INVÁLIDO de CPF", () => {
    const log = jest.spyOn(console, "log");
    const args = ["11548748006"];
    validarCpfShell(args);
    expect(log).toHaveBeenLastCalledWith(
      "\x1b[1m",
      "== RESULTADO: ",
      `\x1b[31mINVÁLIDO\x1b[0m ==\n`
    );
  });
});
