The moment you start dealing with user session, you'll notice that protected routes will reject nuxt requests when running from the server. This is because when nuxt is ran from the server, the browser cookie is lost. Below is a quick middleware solution to inject the browser's cookie to your ssr axios request.

## install session

`npm install --save express-session`


## create middleware/ssr-cookie.js

```js
import axios from '~plugins/axios'

export default function({isServer, req}) {
  if (isServer) {
    axios.defaults.headers.common.cookie = req.headers.cookie
  }
}
```

## add middleware to nuxt.config.js

```js
router: {
  middleware: ['ssr-cookie']
}
```

