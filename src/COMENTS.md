# Comentários do projeto:

## Índice

* [1. Considerações Gerais](#1-considerações-gerais)

* [2. Resumo](#2-resumo)

* [3. Decisões e modificações](#3-decisões-e-modificações)

* [4. Testes unitários](#4-testes-unitários)

* [5. Implementações futuras](#5-implementações-futuras)

 
***


## 1. Considerações Gerais 

> O projeto foi desenvolvido utilizando HTML, CSS, JavaScript e React.JS. O armazenamento de dados foi feito no arquivo `/db.json` populado na pasta `/public` do projeto.
    
> Para simular a consulta de um número de processo cadastrado válido, escreva o dado `5001682-88.2020.8.13.0671` ou altere apenas o último número dele. Ex: `5001682-88.2020.8.13.0672`, `5001682-88.2020.8.13.0673`.

## 2. Resumo

> Iniciei o projeto fazendo o seu planejamento no GitHub Projects utilizando o método kanban e as metologias ágeis. Defini as minhas tarefas principais: página de busca e página de exibição, e fui dividindo cada uma delas em tarefas menores.

> Fiz toda a configuração inicial do projeto em React, criei o repositório remoto do projeto no GitHub e fiz o link com o repositório local. Criei as principais pastas que iam ser utilizadas no projeto: components (para os componentes) e pages (para as páginas).

> Iniciei a página de busca, criando uma branch chamada "searchPage" para desenvolver nela. Decidi criar uma página principal chamada `Home.js`, onde fui desenvolvendo a lógica para carregar os dados utilizando o `fetch()` e para filtrá-los. Populei o `public/db.json` com alguns dados. Fiz com que o componente da página `Home.js` renderizasse dois componentes: um com o formulário de busca e outro para exibição dos dados. Fiz a estruturação inicial e CSS básico do formulario de busca, e decidi inicialmente que iria ter um input para consultar por número do processo (cnj) e o botão de buscar. 

> Depois de conseguir filtrar os dados a partir dos inputs, parti para a exibição dos dados filtrados na tela. Criei uma nova branch para trabalhar na exibição dos dados, e fui desenvolvendo a lógica. Componentizei a listagem dos processos filtrados e do processo. Fiz o layout do campo de exibição dos dados. Todo o CSS foi desenvolvido de forma mobile first. 

> Após as funcionalidades estarem funcionando, parti para o desenvolvimento dos testes unitários. Nessa etapa, várias refatorações foram feitas para melhoria da leitura e da manutenção do código. Estas foram documentadas abaixo. Após as mudanças necessárias e todos os testes passarem, terminei o CSS do projeto e finalizei o mesmo.
	
## 3. Decisões e modificações

> **Componentização:** com o objetivo de deixar o código limpo, decidi que o projeto teria dois componentes principais que renderizariam as páginas: o `Home.js` (página principal de consulta) e o `Display.js`( página de exibição dos processos). Cada um deles teriam componentes próprios, que organizei na pasta `components`.

> **Pasta routes:** criei um arquivo `index.js` na pasta routes com objetivo de configurar as rotas do projeto.

> **Responsividade/CSS:** as duas páginas são responsivas para dispositivos mobile, tablets e desktops. O desenvolvimento da responsividade foi feito utiliando a estratégia *mobile first*. Iniciei o desenvolvimento do CSS fazendo o seu reset no arquivo de CSS global (`src/index.css`) e fiz a padronização das cores utilizando o `root:` para deixar o código mais limpo. No desenvolvimento do layout utilizei tanto o `display: flex` como o `display: grid`.

> **Botão de voltar na página de exibição:** criei um link em formato de botão para retornar à página principal, com o objetivo de melhorar a usabilidade.

> **Refatoração das funções de filtro `filterData()` e fetch `fetchData()`:**
Essas funções inicialmente ficavam no componente da paǵina de Home.js. Como são funções que não estão diretamente ligadas com o React.js, decidi criar uma pasta chamada `services` e colocá-las lá, com o objetivo de organizar e limpar o código. Além disso, troquei a função `filter()` por `find()`, já que só existe um processo por número de cnj.

> **Refatoração do Componente `<SearchForm />`:** durante o desenvolvimento do teste desse componente, percebi que o componente renderizava uma `<section>` e não um `<form>`. Decidi colocar todo o conteúdo do componente dentro  `<form>` para o código ficar mais limpo, além de eu conseguir importar o componente `<SearchForm />` e testá-lo.

> **Criação dos componentes do formulário `<SearchForm />`:** durante a criação dos testes unitários, decidi criar os componentes do botão (`SearchButton`) e do input do formulário(`InputForm`), para que conseguisse testá-los, além de melhorar a legibilidade do código.
	
## 4. Testes unitários

Criei uma pastas `__tests__` para testar todos os componentes da pasta `components` do projeto. 

### Componente `<SearchForm />`:

> Criei o teste do componente `<SearchForm />` (`searchForm.unit.js`) para verificar se ele renderiza um formulário com os campos necessários (input e botão). Para isso, criei um mock simulando os dados. Utilizei o 'getByPlaceholderText' para procurar o input pelo seu texto de placeholder e o 'getByRole' para procurar o bota por sua role de acessibilidade na tela. Depois, refatorei, apaguei o mock, e criei só uma constante para simular o placeholder e testar o input.

### Componente `<InputForm />`:

> Durante o desenvolvimento, decidi criar o componente `<InputForm />` no `<SearchForm />`. Criei o seu teste (`inputForm.unit.js`) para verificar se ele renderiza um campo de texto que pode ser preenchido. Utizei o 'toBeInTheDocument()' para validar se está na tela. Utilizei o 'userEvent.type' para passar o elemento que quero digitar e algum valor de texto e o 'toHaveValue' para me assegurar de que o valor está no input. O objetivo é garantir que, ao digitar qualquer informação, o usuário conseguirá alterar o valor do campo na tela.

### Componente `<SearchButon />`:

> Durante o desenvolvimento, decidi criar o componente `<SearchButon />` no `<SearchForm />` para fazer o seu teste. Depois, criei o teste (`searchButton.unit.js`) para verificar se ele renderiza um botão corretamente. Para isso utilizei o 'toBeInTheDocument()' para validar se está na tela. Para deixar registrada a estrutura renderizada do componente, utilizei o 'toMatchSnapshot()'.

### Componente `<Process />` :

> Ao iniciar o teste (`Process.unit.js`), percebi que não tinha necessidade mais do componente `ProcessList` no `Display.js`, que antes renderizava uma lista de processos. Refatorei e decidi que a página de exibição iria renderizar somente o componente `<Process />` com as props do objeto filtrado. No desenvolvimento do teste, fiz um mock das informações contidas num processo e testei cada elemento do componente.
	
### Componente `<ProcessMovementList />`: 

> Ao iniciar o teste do componente `<ProcessMovement />`, decidi fazer uma refatoração e criar o componente `<ProcessMovementList />` para melhorar a legibilidade do código. Depois, criei o teste (`ProcessMovementList.unit.js`) para verificar a renderização do seu cabeçalho e o número correto de movimentações. Para isso criei um mock simulando as movimentações de um processo.

### Componente `<ProcessMovement />`:

> Criei o teste (`ProcessMovement.unit.js`) para verificar a renderização do conteúdo correto da movimentação. Para isso chamei o componente `<ProcessMovementList />` e passei por props um mock com os dados de um movimentação e fiz a sua verificação na tela. 	

## 5. Implementações futuras

### Mensagem de erro: 

> Implementaria validações com mensagem de erro quando o dado colocado no input não fosse encontrado no banco de dados ou tivesse num formato incorreto.

### Layout:

> Trabalharia mais no layout para deix-lo mais semelhante ao da empresa.

### Consulta na página de exibição

> Colocaria um campo de busca também na página de exibição.
