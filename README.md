# fprog

### Requisitos

- [Node.js](https://nodejs.org/en) - versão 20 ou superior
- npm ou [Yarn](https://yarnpkg.com/) - versão 1.22

### Funcionalidades

1. Validação de CPF
2. Formatação de CPF
3. Formatação de CNPJ
4. Execução via linha de comando
5. API para consumo das funcionalidades via endpoints

### Execução via linha de comando

##### Validação de CPF

```bash
yarn validar-cpf 42392867004
```

```bash
npm run validar-cpf 42392867004
```

##### Formatação de CPF

```bash
yarn formatar-documento cpf 42392867004
```

```bash
npm run formatar-documento cpf 42392867004
```

##### Formatação de CNPJ

```bash
yarn formatar-documento cnpj 79209004000134
```

```bash
npm run formatar-documento cnpj 79209004000134
```

### API

Inicialização do servidor:

```bash
node app.js
```

O servidor será inicializado em **`http://localhost:3000`**

Rotas disponíveis:

**`/validar-cpf`**
| Payload | Resultado | Status |
|----------------------------|-------------------------------|--------|
| `{ "cpf": "42392867004" }` | `{ "cpf": "423.928.670-04" }` | `200` |
| `{ "cpf": "42392867005" }` | `{ "erro": "CPF inválido" }` | `400` |

**`/formatar-cpf-cnpj`**
| Payload | Resultado | Status |
|--------------------------------|----------------------------------------|--------|
| `{ "cpf": "42392867004" }` | `{ "resultado": "423.928.670-04" }` | `200` |
| `{ "cnpj": "79209004000134" }` | `{ "resultado": "79.209.004/0001-34"}` | `200` |
