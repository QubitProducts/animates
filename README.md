# Animates
A tiny, performant replacement for jquery/animate using css3

## installation
```
npm install animates
```

## usage
```js
// animates(el, css, [opts])

var animates = require('animates')

function fadeOut (el) {
  return animates(el, { opacity: 0 })
}
/*
options:
- speed (ms, defaults to 200)
- delay (ms)
- easing (e.g. 'ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out' etc.)
*/

// cancel animation:
var stop = animates(el, { opacity: 0 })
stop()
```

## demo
```js
npm start
// open http://localhost:1234
```

## run tests
```
npm test
```
