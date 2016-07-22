var path = require('path')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var config = require('./webpack.config')

var app = new (require('express'))()
var port = 9001

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, {
  noInfo: true
}))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, function (error) {
  if (error) {
    console.error(error)
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port)
  }
})
