<div align="center">
<img alt="Logo" title="#logo" width="1000px" src=".github/logo.jpg"/>
<br/>
<h3>Desafio Mega Hack 03 - VTEX - Time 07 </h3>
</div>

# :pushpin: Sumário

- [Sobre](#about)
- [Documentação](#documentation)
- [Tecnologias Usadas](#technologies-used)
- [Como Utilizar](#how-to-use)
- [Como Contribuir](#how-to-contribute)
- [Licença](#license)

<a id="about"></a>

## :bookmark: Sobre

Nosso objetivo com essa aplicação foi desenvolver uma solução para o desafio apresentado, atendendo as necessidades que foi passada.  

<a id="documentation"></a>

## :books: Documentação
  
Pre Requisites:
Refer to https://hyperledger-fabric.readthedocs.io/en/release-1.4/prereqs.html

Requires versions 8.10 of node and 5.5.1 npm to be installed

This network works on Fabric 1.4.x

To deploy, you must get the machines local ip address.

Run start.sh at the root directory

./start.sh 192.168.x.x

Steps for front end to access

Enroll Admin

curl --header "Content-Type: application/json" --request POST http://localhost:3333/enrollAdmin

Register user

curl --header "Content-Type: application/json" --request POST --data '{"user":"vtex"}' http://localhost:3333/registerUser

{
"user":"vtex"
}

Get Products

Endpoint

localhost:3333/getProducts

{
"user":"vtex",
"platform":"aliexpress"
}

<a id="technologies-used"></a>

## :rocket: Tecnologias Utilizadas

Esse projeto foi desenvolvido utilizando as seguintes tecnologias:

- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript)
- [Node.js](https://nodejs.org/)
- [ReactJS](https://reactjs.org/)

<a id="how-to-use"></a>

## :fire: Como Utilizar

### Pre requisitos

- É **necessario** ter [Node.js](https://nodejs.org/) instalado na sua maquina;
- Também, você **precisa** ter o gerenciador de pacotes [NPM](https://www.npmjs.com/get-npm) ou [Yarn](https://classic.yarnpkg.com/pt-BR/docs/install/);

1.  Faça o clone:

```shell
$ git clone https://github.com/lucasmori/challenge-mega-hack-03.git
```

2. Rodando a aplicação:

```
# Install dependencies
$ yarn

# Start Frontend
$ yarn start
```

<a id="how-to-contribute"></a>

## :recycle: Como Contribuir?

- Faça um fork do repositório;
- Crie uma branch com sua feature: `git checkout -b feature-name`;
- Commit suas alterações: `git commit -m 'feat: My new feature'`;
- Faça o Push da sua branch: `git push origin my-feature`;
- Crie um Pull Request.

<a id="license"></a>

## :memo: Licença

Este projeto esta sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

<!-- Footer -->
<h4 align="center">

Feito com :heart: por 
<a href="https://www.linkedin.com/in/lucas-mori/" target="_blank">Lucas Mori.</a>

</h4>
