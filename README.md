<p align="center"><img src="https://cloud.githubusercontent.com/assets/904724/22470179/b84f58d8-e7ce-11e6-995b-0933711ca566.png"></p>


# Nuxt.js with Express

> [ExpressJS](http://expressjs.com/) + [Nuxt.js](https://nuxtjs.org) = :zap:

## Installation

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

```bash
vue init nuxt-community/express-template <project-name>
cd <project-name> # move to your project
npm install # or yarn install
```

> Make sure to use a version of vue-cli >= 2.1 (vue -V).

## ExpressJS Changes

- There is a  `server` directory with the root of your `express` server.
- The `routes` directory is called `server/api`.

## Commands

| Command | Description |
|---------|-------------|
| npm run dev | Start ExpressJS server in development with Nuxt.js in dev mode (hot reloading). Listen on [http://localhost:3000](http://localhost:3000). |
| npm run build | Build the nuxt.js web application for production. |
| npm start | Start ExpressJS server in production. |

## Backpack

We use [backpack](https://github.com/palmerhq/backpack) to watch and build the application, so you can use the latest ES6 features (module syntax, async/await, etc.).

## Live Demo

[https://express.nuxtjs.org](https://express.nuxtjs.org)

## Examples

- [Handling Protected SSR Routes](https://github.com/nuxt/express/blob/master/protected-ssr-api.md)

## Documentation

- [ExpressJS](http://expressjs.com/en/guide/routing.html)
- [Nuxt.js](https://nuxtjs.org/guide/)
- [Vue.js](http://vuejs.org/guide/)

## Alternative [Nuxt Express Module](https://github.com/uptownhr/nuxt-express-module)
The module adds express into Nuxt's connect middleware stack using Nuxt's module system. The method will also handle hot reloading with out causing the nuxt build server to restart. 

## Licenses

- [ExpressJS license](https://github.com/expressjs/express/blob/master/LICENSE)
- [NuxtJS license](https://github.com/nuxt/nuxt.js/blob/master/LICENSE.md)
- [VueJS license](https://github.com/vuejs/vue/blob/master/LICENSE)
