const Nuxt = require('nuxt')
const app = require('express')()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

const
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser')

app.set('port', port)

app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: false}))
    .use(cookieParser())

// Import API Routes
app.use('/api', require('./api/index'))

// Import and Set Nuxt.js options
let config = require('./nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(config)
app.use(nuxt.render)

// Build only in dev mode
if (config.dev) {
  nuxt.build()
  .catch((error) => {
    console.error(error) // eslint-disable-line no-console
    process.exit(1)
  })
}

// Listen the server
app.listen(port, host)
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
