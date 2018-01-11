# ingressos-ja

> ingresso-ja

## About the project

### Estrutura dos arquivos .vue:
- Componentes globais ou subcomponentes: CNomeComponente
- Páginas: PNomePagina
- Seções de uma página: SNomeSecao

### Ingressotify
Especialização dos componentes do Vuetify para as necessidades específicas deste projeto. Estrutura de árvore baseada no próprio Vuetify: https://vuetifyjs.com

### SCSS Estruturado utilizando os conceitos de BEM, OOCSS e Namespace. Artigos:
- Modular CSS Part 1: https://zellwk.com/blog/css-architecture-1/
- Modular CSS Part 2: https://zellwk.com/blog/css-architecture-2/
- Modular CSS Part 3: https://zellwk.com/blog/css-architecture-3/

### CSS dentro dos arquivos .vue ou fora?
Neste projeto decidi manter os arquivos de CSS (ou SCSS nesse caso) separado dos arquivos .vue. Desta forma posso aproveitá-los em outros projetos com mais facilidade. Porém considero as duas abordagens boas e com boas vantagens.

### TODOS
- Criar mais páginas (=P)
- Adicionar mais imagens para representar melhor a ideia
- Adicionar título dos eventos nos cards de eventos e nos banners
- Aplicar mais comportamento para a tela inicial
- Gerar versão responsiva (celulares e tablets)
- Adicionar testes unitários para os componentes
- Ativar o slint

## Deploy GitHub Pages (com vue-gh-pages)
- npm run deploy ou yarn deploy

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).