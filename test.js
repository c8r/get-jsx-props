const test = require('ava')
const getJsxProps = require('./')

test('get-jsx-props does something awesome', t => {
  const JSX = "<Stat\n  stat='2.7k'\n  title='Twitter Followers'\n/>"

  const result = getJsxProps(JSX)

  t.snapshot(result)
})
