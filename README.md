<p align="center"><img width="328px" src="https://nuxtjs.org/logos/nuxt.svg"></p>


# Nuxt.js with Express

> [ExpressJS](http://expressjs.com/) + [Nuxt.js](https://nuxtjs.org) = :zap:

## Live Demo

[https://express.nuxtjs.org](https://express.nuxtjs.org)

## Installation

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

```bash
vue init nuxt-community/express-template <project-name>
cd <project-name> # move to your project
npm install # or yarn install
```

> Make sure to use a version of vue-cli >= 2.1 (vue -V).

## ExpressJS Changes

- There is a  `api` directory with the root of your `api` server.
- The `routes` directory is called `api/routes`.

## Commands

| Command | Description |
|---------|-------------|
| npm run dev | Start ExpressJS server in development with Nuxt.js in dev mode (hot reloading). Listen on [http://localhost:3000](http://localhost:3000). |
| npm run build | Build the nuxt.js web application for production. |
| npm start | Start ExpressJS server in production. |

## Backpack

We use [backpack](https://github.com/palmerhq/backpack) to watch and build the application, so you can use the latest ES6 features (module syntax, async/await, etc.).

## Examples

- [Handling Protected SSR Routes](https://github.com/nuxt/express/blob/master/protected-ssr-api.md)

## Documentation

- [ExpressJS](http://expressjs.com/en/guide/routing.html)
- [Nuxt.js](https://nuxtjs.org/guide/)
- [Vue.js](http://vuejs.org/guide/)

## Licenses

- [ExpressJS license](https://github.com/expressjs/express/blob/master/LICENSE)
- [NuxtJS license](https://github.com/nuxt/nuxt.js/blob/master/LICENSE.md)
- [VueJS license](https://github.com/vuejs/vue/blob/master/LICENSE)
