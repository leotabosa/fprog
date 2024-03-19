const { formatarDocumento } = require("./formatar-documento.js");

describe("formatar-documento.js", () => {
  it("DEVE retornar null em caso de CPF e CNPJ nulos ou vazios", () => {
    expect(formatarDocumento({})).toBeNull();
    expect(formatarDocumento({ cpf: null })).toBeNull();
    expect(formatarDocumento({ cnpj: null })).toBeNull();
    expect(formatarDocumento({ cpf: "" })).toBeNull();
    expect(formatarDocumento({ cnpj: "" })).toBeNull();
    expect(formatarDocumento({ cpf: null, cnpj: null })).toBeNull();
    expect(formatarDocumento({ cpf: "", cnpj: "" })).toBeNull();
    expect(formatarDocumento(null)).toBeNull();
  });

  it("DEVE formatar CPF", () => {
    expect(formatarDocumento({ cpf: "11548748005" })).toEqual("115.487.480-05");
    expect(formatarDocumento({ cpf: "115.487.480-05" })).toEqual(
      "115.487.480-05"
    );
    expect(formatarDocumento({ cpf: "115.487.48005" })).toEqual(
      "115.487.480-05"
    );
  });

  it("DEVE formatar CNPJ", () => {
    expect(formatarDocumento({ cnpj: "12345678901234" })).toEqual(
      "12.345.678/9012-34"
    );
    expect(formatarDocumento({ cnpj: "12.345.678/9012-34" })).toEqual(
      "12.345.678/9012-34"
    );
    expect(formatarDocumento({ cnpj: "12.345.678901234" })).toEqual(
      "12.345.678/9012-34"
    );
  });
});
