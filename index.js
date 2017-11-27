'use strict'

const Babel = require('@babel/standalone')
const getProps = require('@compositor/babel-plugin-get-jsx-props')

module.exports = jsx => {
  Babel.registerPlugin('get-jsx-props', getProps)

  const { metadata } = Babel.transform(jsx, {
    plugins: ['get-jsx-props'],
    presets: ['stage-0', 'react']
  })

  return metadata['c8r-props']
}
