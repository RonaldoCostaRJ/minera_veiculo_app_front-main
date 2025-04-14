# Minera_veículo

Este pequeno projeto faz parte da entrega do MVP da Disciplina **Desenvolvimento Full Stack Básico** 

O objetivo é viabilizar o cadastro de interesses por buscas de modelos de automóveis nos site da OLX.

---

## Utilizando o FrontEnd------------------------------------------------------------------------------------------------
Diversas informações de cadastros adicionais foram colocadas em listas, que são apresentadas contendo: a região da busca, a Categoria, marca e tipo, nome do modelo de automóvel, tipo de cambio, faixas de ano, quilometragem e valores. A partir do preenchimento destas informações o botão 'adicionar, insere estas informações na base de dados. Todas as intenções de buscas são apresentadas em um gride (getlist), e é permitida busca pelo nome de um único modelo de automóvel.

## --------------------------------------------------------------------------------------------------
## Como executar:

## 1-Modo de desenvolvimento:

Basta fazer o download do projeto e abrir o arquivo index.html no seu browser.

## --------------------------------------------------------------------------------------------------

## 2-Utilizando o Docker 

Certifique-se de ter o [Docker](https://docs.docker.com/engine/install/) instalado e em execução em sua máquina.

Navegue até o diretório que contém o Dockerfile no terminal e seus arquivos de aplicação e
Execute **como administrador** o seguinte comando para construir a imagem Docker:

```
$ docker build -t nome_da_sua_imagem .
```

Uma vez criada a imagem, para executar o container basta executar, **como administrador**, seguinte o comando:

```
$ docker run -d -p 8080:80 nome_da_sua_imagem
```

Uma vez executando, para acessar o front-end, basta abrir o [http://localhost:8080/#/](http://localhost:8080/#/) no navegador.


### Alguns comandos úteis do Docker

>**Para verificar se a imagem foi criada** você pode executar o seguinte comando:
>
>```
>$ docker images
>```
>
> Caso queira **remover uma imagem**, basta executar o comando:
>```
>$ docker rmi <IMAGE ID>
>```
>Subistituindo o `IMAGE ID` pelo código da imagem
>
>**Para verificar se o container está em exceução** você pode executar o seguinte comando:
>
>```
>$ docker container ls --all
>```
>
> Caso queira **parar um conatiner**, basta executar o comando:
>```
>$ docker stop <CONTAINER ID>
>```
>Subistituindo o `CONTAINER ID` pelo ID do conatiner
>
>
> Caso queira **destruir um conatiner**, basta executar o comando:
>```
>$ docker rm <CONTAINER ID>
>```
>Para mais comandos, veja a [documentação do docker](https://docs.docker.com/engine/reference/run/).


