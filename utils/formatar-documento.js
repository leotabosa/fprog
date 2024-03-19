function formatarDocumento(dados) {
  const { cpf, cnpj } = dados || {};
  if (!cpf && !cnpj) return null;

  // HIGH-ORDER FUNCTION
  function formatar(documento, callback) {
    return callback(documento);
  }

  function substituirDigitosInvalidos(documento) {
    let doc = [];

    const array = documento.split("");

    // LIST COMPREHENSION E FUNÇÃO DE CONTINUAÇÃO
    for (let i = 0; i < array.length; i++) {
      if (isNaN(array[i])) continue;
      doc.push(array[i]);
    }

    return doc.join("");
  }

  function formatarCpf() {
    if (!cpf) return null;
    const copiaCpf = substituirDigitosInvalidos(cpf);

    return `${copiaCpf.slice(0, 3)}.${copiaCpf.slice(3, 6)}.${copiaCpf.slice(
      6,
      9
    )}-${copiaCpf.slice(9, 11)}`;
  }

  function formatarCnpj() {
    if (!cnpj) return null;
    const copiaCnpj = cnpj.replace(/\D/g, "");

    return `${copiaCnpj.slice(0, 2)}.${copiaCnpj.slice(2, 5)}.${copiaCnpj.slice(
      5,
      8
    )}/${copiaCnpj.slice(8, 12)}-${copiaCnpj.slice(12, 14)}`;
  }

  const mascaraDocumento = cpf ? formatarCpf : formatarCnpj;

  return formatar(cpf || cnpj, mascaraDocumento);
}

module.exports = {
  formatarDocumento,
};
