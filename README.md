# Ryan's Remix Awesome Starter

![Author](https://img.shields.io/badge/Author-ryan-orange.svg)
![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Last Commit](https://img.shields.io/github/last-commit/ryan-ahn/npm-remix-starter)

## Features
- [x] ⚙️&nbsp;&nbsp;Small & Fast Bundler (Vite)
- [x] 🗝️&nbsp;&nbsp;Typed Programming (Typescript)
- [x] 🧩&nbsp;&nbsp;SSR & Page Transition (Remix)
- [x] 🕋&nbsp;&nbsp;Simple Store (Zustand)
- [x] 📙&nbsp;&nbsp;Use Strict Codebase (ESLint & Prettier)
- [x] 🧵&nbsp;&nbsp;Built-in Component & Layout
- [x] ✨&nbsp;&nbsp;Setting Reset Style
- [x] ⚡️&nbsp;&nbsp;Setting Mixin Style
- [x] 📍&nbsp;&nbsp;Absolute Path
- [x] 📱&nbsp;&nbsp;Check Device
- [x] 📫&nbsp;&nbsp;Page SEO
- [ ] 🪄&nbsp;&nbsp;Dark Mode

## Frameworks
- **Bundler** : Vite
- **SSR** : Remix Server
- **Core** : React
- **Store** : Zustand

## Code Pattern
- **Static(public)**
- **Root(App)** <br/>
- ⎣&nbsp;**components** - atomic stateless components <br/>
- ⎣&nbsp;**containers** - stateful components <br/>
- ⎣&nbsp;**constants** - static resource <br/>
- ⎣&nbsp;**interface** - interfaces <br/>
- ⎣&nbsp;**layouts** - layouts <br/>
- ⎣&nbsp;**routes** - page routes<br/>
- ⎣&nbsp;**libs** - store, hooks, utils<br/>
- ⎣&nbsp;**styles** - style set<br/>


## Getting Started
### 1) Installation
```shell
npx nuxt3-starter my-project
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

## Using with Vue3 Script Setup
```vue
<template>
  <h1>{{ title }}</h1>
</template>

<script setup lang="ts">
// use function
const function = () => {console.log('Hello World!')}
// use props
const props = defineProps({title})
</script>
```

## Using with Store
```vue
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import useDataStore from '@store/useDataStore';
// use store
const store = useDataStore();
// use store state
const { data } = storeToRefs(store);
// use store function
store.getData()
</script>
```

## Using with Mixin

```scss
.app {
  // flex set(justify-content, align-items, flex-direction)
  @include flexSet('center', 'center', 'row')

  // box set(width, height, border-radius)
  @include boxSet(00px, 00px, 00px)

  // color set(color, background-color)
  @include colorSet($white, $black)

  // background set(url, object-fit)
  @include backgroundSet('url', 00px)

  // font set(font-size, font-weight, line-height)
  @include fontSet(00px, 000, 00px);

  // ellipsis set(line, line-height)
  @include ellipsisSet(0, 00px)

  // shadow set(length, length, blur, color, opacity)
  @include shadowSet(0, 0, 0, $white, 0.1)
}
```
