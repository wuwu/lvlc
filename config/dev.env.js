'use strict'

const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: '"http://lvlc.wp"',
  SECRET_TOKEN: '"r5m7jIXdGLaIds9t0D58pFDy"'
})
