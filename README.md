# Ryan's Remix Awesome Starter

![Author](https://img.shields.io/badge/Author-ryan-orange.svg)
![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Last Commit](https://img.shields.io/github/last-commit/ryan-ahn/npm-remix-starter)

## Features

- [x] ⚙️&nbsp;&nbsp;Small & Fast Bundler (Vite)
- [x] 🗝️&nbsp;&nbsp;Typed Programming (TypeScript)
- [x] 🗄️&nbsp;&nbsp;Database Design (Prisma)
- [x] 📙&nbsp;&nbsp;Strict Codebase (ESLint & Prettier)
- [x] 🧪&nbsp;&nbsp;Component Test Code (Vitest)
- [x] 📊&nbsp;&nbsp;Test Coverage Measurement (Vitest)
- [x] 🧵&nbsp;&nbsp;Built-in Component & Layouts
- [x] ✨&nbsp;&nbsp;Reset Style Setup
- [x] ⚡️&nbsp;&nbsp;Mixin Style Setup
- [x] 📍&nbsp;&nbsp;Absolute Paths
- [x] 📫&nbsp;&nbsp;Page SEO

## Frameworks

- **Bundler** : Vite
- **SSR** : Remix
- **Core** : React
- **Store** : Zustand
- **Test** : Vitest
- **Style** : Emotion

## Code Pattern

- **Static(public)**
- **Root(App)** <br/>
- ⎣&nbsp;**constants** - static resource <br/>
- ⎣&nbsp;**components** - atomic stateless components <br/>
- ⎣&nbsp;**containers** - stateful components <br/>
- ⎣&nbsp;**interface** - interfaces <br/>
- ⎣&nbsp;**layouts** - layouts <br/>
- ⎣&nbsp;**libs** - store, hooks, utils<br/>
- ⎣&nbsp;**routes** - page routes<br/>
- ⎣&nbsp;**styles** - style set<br/>

## Getting Started

### 1) Installation

```shell
npx remix-starter my-project
cd my-project
```

### 2) Run Project

```shell
npm run dev
```

### 3) Run Deploy

```shell
npm run build
```

## Using with Mixin

```javascript
// use mixin
import {
  flexSet,
  boxSet,
  colorSet,
  backgroundSet,
  fontSet,
} from '@styles/mixin';

const Style = styled.div`
  ${theme.flexSet('center', 'center', 'column')};
  ${theme.boxSet('00px', '00px', '00px')};
  ${theme.colorSet('white', 'black')};
  ${theme.backgroundSet('URL', 'contain')};
  ${theme.fontSet(00, 000, 00)};
`;
```
