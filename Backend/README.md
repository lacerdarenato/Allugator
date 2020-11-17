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

> o campo de Data deve ser preenchido obrigatóriamento no formato dia/mes/ano <br>

- existem tambem 5 inputs que servem para listar os funcionários filtrados de acordo com o atributo desejado.
- ao lado de cada funcionario filtrado, aparecerão dois botoes para para editar e deletar aquele item da lista.
  ao clicar no botão editar os dados do funcionário serão injetados no formulário para que possão ser editados e depois salvos
