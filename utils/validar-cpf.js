// MONAD
const ValidarDigito = (verificador, posicao) => ({
  verificador,
  posicao,
  ehNulo() {
    return this.verificador === null;
  },
  validar(fn) {
    if (this.ehNulo()) return ValidarDigito(false);

    return ValidarDigito(fn(this.verificador, this.posicao));
  },
});

function validarCpf(cpf) {
  if (!cpf || (typeof cpf !== "string" && typeof cpf !== "number"))
    return false;
  if (cpf === "00000000000") return false;

  const copiaCpf = cpf.replace(/\D/g, "");

  if (copiaCpf.length !== 11) return false;
  const arrayCpf = Array.from(copiaCpf);

  // CLOSURE
  function realizarCalculoDigitoVerificador(posicaoInicial) {
    let soma = 0;
    arrayCpf.slice(0, posicaoInicial - 1).forEach((numero, index) => {
      soma += numero * (posicaoInicial - index);
    });

    return (soma * 10) % 11;
  }

  function validador(digito, posicao) {
    return parseInt(digito) === parseInt(arrayCpf[posicao - 1]);
  }

  // LAMBDA FUNCTION
  const normalizarDigito = (digito) =>
    digito === 10 || digito === 11 ? 0 : digito;

  const primeiroDigitoVerificador = realizarCalculoDigitoVerificador(10);
  const resultadoPrimeiroDigito = normalizarDigito(primeiroDigitoVerificador);
  const validacaoPrimeiroDigito = ValidarDigito(resultadoPrimeiroDigito, 10);
  if (!validacaoPrimeiroDigito.validar(validador).verificador) return false;

  const segundoDigitoVerificador = realizarCalculoDigitoVerificador(11);
  const resultadoSegundoDigito = normalizarDigito(segundoDigitoVerificador);
  const validacaoSegundoDigito = ValidarDigito(resultadoSegundoDigito, 11);
  if (!validacaoSegundoDigito.validar(validador).verificador) return false;

  return true;
}

module.exports = {
  validarCpf,
  ValidarDigito,
};
