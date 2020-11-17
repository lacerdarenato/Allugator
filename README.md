## Considerações iniciais

Esta aplicação destina-se armazenar dados básico de funcionarios, estes dados serão armazenados em arquivo (funcionarios.json) dentro do diretório backend.
o formato do do arquivo json segue o seguinte padrão.

```json

    {
        "funcionarios": [
            {
                "DataCad": "15/04/2017",
                "Cargo": "Dev Jr",
                "Cpf": 85235708709,
                "Nome": "Aaron Aaberg",
                "UfNasc": "AP",
                "Salario": 8965.3,
                "Status": "ATIVO"
            },
            ...
    }

```

## Montar o app

1. Para executar o projeto é necessário usar o comando `git clone https://github.com/lacerdarenato/Allugator.git` no diretório em deseja instalá-lo.
2. Abra o diretório Backend e execute o comando npm start para iniciar o server.
3. Abra o diretório angular-client e execute o comando npm start para iniciar o client.
   este comando vai ler todas as dependencias contidas no arquivo package.json e instalá-las.
4. O server rodará atravéz da URL [http://localhost:3001/](http://localhost:3001/) que será acessada pelo client.
5. O Client rodará atravéz da URL [http://localhost:4200/](http://localhost:4200/) onde o usuário interagirá com a aplicação.

## Utilização

Na aplicão existem um formuário no final que receberá os dados do funcionário (todos os dados são obrigatórios).
para persistir os dados basta clicar no botão salvar abaixo deste formulário.

> o campo de Data deve ser preenchido obrigatóriamento no formato DIA/MES/ANO <br>

- existem tambem 5 inputs que servem para listar os funcionários filtrados de acordo com o atributo desejado.
- ao lado de cada funcionario filtrado, aparecerão dois botoes para para editar e deletar aquele item da lista.
  ao clicar no botão editar os dados do funcionário serão injetados no formulário para que possão ser editados e depois salvos

## Considerações finais.

- Não consegui implementar testes unitários automatizados, até tenho uma boa ideia de qual suite de testes utilizar, como tipos inválidos de dados inseridos (numeros em nomes por exemplo), valores fora do range de salários ou CPF (numeros negativos por exemplo), valores de ano e mês fora do range. peço desculpas por isso mas realmente não sei como fazê-lo, talvez com um prazo um pouco maior teria avançado um pouco.
- Não fiz a Documentação via Swagger, este é outro item o qual eu nunca lidei e não tenho ideia de como fazê-lo.
- A aplicação contem varios bugs com relação a validação dos dados inseridos, gastei muito mais tempo que eu gostaria montando o client, cheguei a iniciar com react e depois abortei, passando para angular. nisso gastei muito tempo o que impediu de deixar o client com um acabamento mais refinado.

## De qualquer forma e com qualquer resultado, gostaria de agradecer pela oportunidade . []'s
