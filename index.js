'use strict'

const babel = require('babel-core')
const getProps = require('@compositor/babel-plugin-get-jsx-props')

module.exports = jsx => {
  const { metadata } = babel.transform(jsx, {
    plugins: [getProps],
    presets: ['stage-0', 'react']
  })

  return metadata['c8r-props']
}
