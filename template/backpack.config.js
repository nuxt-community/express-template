module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = './server.js'
    return config
  }
}
