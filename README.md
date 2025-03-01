### Importar Dados
No arquivo App.jsx, importe os dados do arquivo data.js para serem renderizados como um array de objetos. Cada objeto deve representar uma pessoa e conter propriedades como nome, idade e URL da imagem.

### Configurar o Estado
Em seguida, configure os dados como uma variável de estado utilizando o hook useState. Isso permitirá que os dados sejam modificados e as mudanças sejam automaticamente refletidas na interface renderizada.

### Iterar e Renderizar
Exiba o número de itens na lista utilizando a propriedade length da variável de estado. Essa informação pode ser mostrada como texto simples ou dentro de um título ou mensagem.
Para renderizar a lista de pessoas, percorra o array de dados utilizando o método map. 

Para cada item no array:
Renderize um elemento de imagem (Dica: use estilos inline para ajustar a largura).
Exiba o nome e a idade da pessoa como texto.

Criar Componentes
Componente List: Crie um componente List para conter os itens renderizados. Esse componente pode ser simplesmente uma <div> contendo os componentes Person.
Componente Person: Crie um componente Person para exibir as informações de cada pessoa. Esse componente deve receber os dados da pessoa via props e renderizar a imagem, nome e idade.

### Limpar Lista
No arquivo App.jsx, adicione um botão para limpar a lista e implemente a funcionalidade definindo uma função que redefine a variável de estado para um array vazio.

Resumo do Fluxo da Aplicação
Importe os dados no App.jsx.
Configure os dados como uma variável de estado utilizando useState.

Utilize o método map para percorrer o array de dados e renderizar um componente Person para cada pessoa.
Cada Person deve exibir:
Uma imagem (com um style para ajustar a largura).
O nome e a idade da pessoa.
Crie um componente List para conter os itens renderizados.

Adicione um botão para limpar a lista.
Exiba o número de itens na lista utilizando a propriedade length da variável de estado. Isso pode ser mostrado como texto simples ou dentro de um título/mensagem.