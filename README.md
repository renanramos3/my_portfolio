## Portfólio — React + AOS + CSS Modules

Portfólio pessoal desenvolvido em React com animações suaves usando AOS e estilização com CSS Modules. Exibe seções de Hero, Sobre, Projetos e Contato, com foco em performance, clareza e navegação fluida.

### Tecnologias
- React (Vite ou CRA, conforme setup)
- AOS (Animate On Scroll)
- CSS Modules
- JavaScript (ES202X)

### Recursos
- Animações de entrada com AOS (e.g., `fade-up`, `fade-right`)
- Seções: Hero, Sobre Mim, Projetos e Rodapé
- CSS Modules para escopo de estilos
- Estrutura pronta para deploy (Vercel/Netlify/GitHub Pages)

## Como rodar localmente

Pré-requisitos:
- Node.js LTS
- npm ou yarn

Instalação:
```bash
npm install
# ou
yarn
```

Ambiente de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

Build de produção:
```bash
npm run build
# ou
yarn build
```

Pré-visualização do build:
```bash
npm run preview
# ou
yarn preview
```

## Estrutura (resumo)
- `src/App.jsx`: Composição das seções e inicialização do AOS via `useEffect`.
- `src/components/Hero.jsx`: Seção inicial com CTA de contato.
- `src/components/AboutMe.jsx`: Sobre mim.
- `src/components/Projects.jsx`: Lista de projetos.
- `src/components/NavBar.jsx` e `src/components/Footer.jsx`: Navegação e rodapé.
- `src/components/*.module.css`: Estilos com escopo local.

## AOS (configuração)
A inicialização do AOS ocorre no `App.jsx`, com duração e `once` ativado. Para ajustar animações, use o atributo `data-aos` nos elementos/sections (ex.: `data-aos="fade-up"`).

## Acessibilidade e SEO (dicas)
- Use textos alternativos em imagens.
- Garanta contraste adequado e foco visível.
- Títulos hierárquicos (`h1`, `h2`…) por seção.
- Metatags básicas no `index.html` (title, description, og tags).

## Deploy
- Vercel: importar o repositório e usar build padrão (`npm run build`).
- Netlify: arrastar a pasta `dist` ou conectar repositório.
- GitHub Pages: gerar `dist` e publicar com ação/configuração específica do bundler.

## Contribuição
Sugestões e issues são bem-vindas. Abra uma issue ou um pull request com a proposta.

