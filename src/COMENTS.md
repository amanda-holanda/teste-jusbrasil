# Comentários do projeto:

1. Criação do projeto em react: npx create-react-app my-app
2. Criação do repositório remoto no gitHub e link do repo local com o remoto
3. Criação das pastas que serão utilizadas no projeto: components, pages e img.
4. Criação da branch "searchPage" para fazer a página de busca
5. Estruturação inicial e CSS básico do formulario de busca
6. escolha: fazer com que minha API entregue os dados de um arquivo JSON já populado na pasta do projeto.=> npm install json-server => ajuste script "server" no package.json => criação da data/db.json
7. lógica: 
[X] - popular o db
[X] - fazer o fetch
[X] - filtro: filtrar de acordo com o input - lógica de verificar se o valor do input é igual ao do db
[X] - printar os filtrados na tela

- escolha da componetização do campo de busca, da listagem dos processos e do processo.

8. exibicao
- criacao dos componentes process e process list para listagem dos processos na exibicao

10. layout do campo de exibicao
10.1 movimentacao
- criacao do componente movementprocess para listar as movimentacoes

11. primeiro deploy para verificacao de bugs
- bug no link da api

12. refatoração (branch: refactoring)
- debug URL json
- isolar funções: filter, fetch
- apagar app.teste.js
- apagar logo react e subsituir o favicon
- colocar favicon jusbrasil
- retirada console.log
- mudança do nome do componente movementprocess para processMovements
- mudança do nome do componete searchprocess para ProcessSearch
- retirada do campo de busca de tribunal
- adicionar legenda pro formato NNNNNNN-NN.NNNN.N.NN.NNNN

14. responsividade:
-construção mobile first

15. refatoracao das paginas (branch: refactoringPages)
- tive que refatorar o código, pois havia criado só uma página utilizando SPA.
- adicionei na pasta pages a página de display 
- transformei o formulario em simples no Home e apaguei o component searchProcess
- criei o componente SearchForm que contem o formulario do home
- decidi enviar o dado do input do formulario por URL 
- Lógica na página de display: captei esse dado na página de display utilizando o 'window.location.search' e 'URLSearchParams'. depois passei como parametro na funcao loadData e chamei a loadData no componente ProcessList
- criei um link para retornar à página principal no formato de um botão. Gostaria de ter colocado um header com um campo de pesquisa na página de display, mas não havia tempo, já que tiver que fazer essa refatoração um dia antes da entrega.

16. testes unitarios (branch: tests)
- testes: 
- HOME: SearchForm,inputHome, botãoHome.
- DISPLAY: processList, process, processMovements,link de voltar.

a) refatorei o componente searchForm: antes o formulario estava dentro de uma section chamada searchContainer. decidi colocar tudo dentro da tag form para o codigo ficar mais limpo e eu conseguir importar o componente searchForm para fazer o teste dele.

b) criei teste do componente searchForm para verificar se renderiza um formulário com os campos necessários (input e botão). para isso criei um mock simulando os dados. Utilizei o 'getByPlaceholderText' para procurar o input pelo seu texto de placeholder e o 'getByRole' para procurar o bota por sua role de acessibilidade na tela.

c) teste inputForm: criei o componente inputForm no searchForm. Testei se ele renderiza um campo de texto que pode ser preenchido. Utizei o 'toBeInTheDocument()' para validar se está na tela. Utilizei o 'userEvent.type' para passar o elemento que quero digitar e algum valor de texto e o 'toHaveValue' para me assegurar de que o valor está no input. O objetivo é garantir que, ao digitar qualquer informação, o usuário conseguirá alterar o valor do campo na tela.

d) teste botão buscar: criei o componente SearchButon no SearchForm para fazer o seu teste. Testei se ele renderiza um botão corretamente. Para isso utilizei o 'toBeInTheDocument()' para validar se está na tela. Para deixar registrada a estrutura renderizada do componente, utilizei o 'toMatchSnapshot()'.



Obs: divisão de branchs (pagina de busca+layout, lógica da página de busca e do campo de exibicao, layout do campo de exibica + logica do campo de movimentacao, deploy)
