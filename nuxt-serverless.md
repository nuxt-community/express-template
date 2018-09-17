# Serverless Nuxt.js

> [Nuxt.js](https://nuxtjs.org) + [ExpressJS](http://expressjs.com/) + [AWS Lambda](https://aws.amazon.com/lambda/) = :fire: :fire: :fire:

* Use `nodejs8.10` runtime on the lambda.
* Setup API Gateway to proxy all requests to the Nuxt lambda. When using claudia.js to deploy, `claudia create --handler lambda.handler --deploy-proxy-api`.
* Custom domain name can be set directly in API Gateway and Route 53.

## `nuxt-start`
Performance can be greatly improved by using `nuxt-start` instead of `nuxt`. This reduces the lambda bundle size, deploy time, and reduces cold-start time in production. Likewise, this setup works interchangably with `nuxt-start-edge` and `nuxt-edge`.

```js
// lambda.js
let awsServerlessExpress = require('aws-serverless-express');
let express              = require('express');
let Nuxt                 = require('nuxt').Nuxt; // or require('nuxt-start').Nuxt;
let nuxtConf             = require('./nuxt.config');

let app = express();

// Initialize Nuxt and use render middleware
let nuxt = new Nuxt(nuxtConf);
app.use(nuxt.render);

// Serve all MIME types
let server = awsServerlessExpress.createServer(app, null, ['*/*']);
exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context);
```

## Tips
* You probably want at least 1024mb of RAM allocated to the function. AWS upgrades the vCPU used at various RAM waypoints.
* If your Nuxt bundle is too large, you may need to deploy to Lambda via S3.
* Disable gzip in Nuxt (`render: {gzip: false}`) and enable on AWS (`API Gateway` => your api => `Settings` => `Content Encoding`).
* Ensure all Binary Media Types are allowed to be served (`API Gateway` => your api => `Settings` => `Binary Media Types`: `*/*`). The lambda will be serving HTML, CSS and JS at the very least.
