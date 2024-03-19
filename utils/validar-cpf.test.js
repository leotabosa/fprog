const { validarCpf, ValidarDigito } = require("./validar-cpf");

describe("validar-cpf.js", () => {
  it("DEVE retornar false em caso de CPF nulo ou vazio", () => {
    expect(validarCpf(null)).toBe(false);
    expect(validarCpf("")).toBe(false);
  });

  it("DEVE retornar false em caso de CPF com mais ou menos de 11 dígitos após remoção de dígitos não-numéricos", () => {
    expect(validarCpf("1234567890")).toBe(false);
    expect(validarCpf("123456789012")).toBe(false);

    expect(validarCpf("123.456.789-0")).toBe(false);
    expect(validarCpf("123.4567890")).toBe(false);
  });

  it("DEVE retornar false em caso de CPF zerado", () => {
    expect(validarCpf("00000000000")).toBe(false);
  });

  it("DEVE retornar false em caso de CPF inválido", () => {
    expect(validarCpf("12345678911")).toBe(false);
    expect(validarCpf("12345678901")).toBe(false);
  });

  it("DEVE retornar true em caso de CPF válido", () => {
    // Regras:
    // Para o primeiro dígito verificador:
    // 1. Deve ser realizada a soma dos produtos de cada dígito pela sua posição, de 10 a 2.
    // 2. A soma deve ser multiplicada por 10 e dividida por 11.
    // 3. Caso o resto da divisão seja igual a 10 ou 11, o resultado do dígito automaticamente passará a 0.
    // 4. O resultado deve ser igual ao primeiro dígito verificador.
    // Para o segundo dígito verificador:
    // 1. Deve ser realizada a soma dos produtos de cada dígito pela sua posição, de 11 a 2.
    // 2. A soma deve ser multiplicada por 10 e dividida por 11.
    // 3. Caso o resto da divisão seja igual a 10 ou 11, o resultado do dígito automaticamente passará a 0.
    // 4. O resultado deve ser igual ao segundo dígito verificador.

    expect(validarCpf("115.487.480-05")).toBe(true);
    expect(validarCpf("11548748005")).toBe(true);
  });

  it("ValidarDigito.ehNulo - DEVE retornar true caso o dígito verificador seja nulo", () => {
    const digitoVerificador = ValidarDigito(null, 10);
    expect(digitoVerificador.ehNulo()).toBe(true);
  });

  it("ValidarDigito.validar - DEVE retornar false caso o dígito verificador seja nulo", () => {
    const digitoVerificador = ValidarDigito(null, 10);
    expect(digitoVerificador.validar().verificador).toBe(false);
  });
});
