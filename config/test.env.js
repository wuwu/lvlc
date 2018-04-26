'use strict'

const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  API_URL: '"http://lvlc.wp"',
  SECRET_TOKEN: '"r5m7jIXdGLaIds9t0D58pFDy"'
})
