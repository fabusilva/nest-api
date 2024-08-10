# Descrição

## Instalação

```bash
$ npm install
```

### Prisma
* Inicialize o Prisma no projeto (necessário apenas na primeira vez que o projeto for clonado):
```bash
$ npx prisma init
```

* Gere os artefatos do Prisma (como os clientes de banco de dados):
```bash
$ npx prisma generate
```

## Variaveis de ambiente

Mude o nome do arquivo `.env.copy` para `.env` e preencha a variavel `DATABASE_URL` com a url do seu banco de dados.

---

## Rodar o projeto

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```

## Documentação da API

### Retorna todos os usuarios

```http
  GET http://localhost:3000/usuario
```

#### Exemplo da resposta
```
[
  {
    "nome": "João da Silva",
    "cpf": "123.456.789-10",
    "idade": 30
  },
  {
    "nome": "Maria Oliveira",
    "cpf": "987.654.321-00",
    "idade": 25
  }
]
```
___

### Cria um novo usuário

```http
  POST http://localhost:3000/usuario
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `nome`      | `string` | **Obrigatório**. Nome do usuario |
| `cpf`      | `string` | **Obrigatório**. CPF do usuario |
| `idade`      | `number` | **Obrigatório**. Idade do usuario |

#### Exemplo corpo da requisição
```
  {
    "nome": "João da Silva",
    "cpf": "123.456.789-10",
    "idade": 30
  }
```

#### Exemplo da resposta
```
  {
    "nome": "João da Silva",
    "cpf": "123.456.789-10",
    "idade": 30
  }
```
___
### Atualiza um usuário

```http
  PATCH http://localhost:3000/usuario/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do usuário a ser atualizado |
| `nome`      | `string` | **Opcional**. Nome do usuario |
| `cpf`      | `string` | **Opcional**. CPF do usuario |
| `idade`      | `number` | **Opcional**. Idade do usuario |

#### Exemplo corpo da requisição
```
  {
    "nome": "João Novo",
    "cpf": "123.456.789-10",
    "idade": 30
  }
```

#### Exemplo da resposta
```
  {
    "nome": "João Novo",
    "cpf": "123.456.789-10",
    "idade": 30
  }
```
___


### Deleta um usuário

```http
  DELETE http://localhost:3000/usuario/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do usuário a ser deletado |

