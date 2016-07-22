# Animates
Tiny, performant api for easy css3 animations

## installation
```
npm install --save animates
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
[link](https://animates-pwhzhcmedz.now.sh)

## run tests
```
npm test
```

## Want to work on this for your day job?

This project was created by the Engineering team at Qubit. As we use open source libraries, we make our projects public where possible.

We’re currently looking to grow our team, so if you’re a JavaScript engineer and keen on ES2016 React+Redux applications and Node micro services, why not get in touch? Work with like minded engineers in an environment that has fantastic perks, including an annual ski trip, yoga, a competitive foosball league, and copious amounts of yogurt.

Find more details on our Engineering site. Don’t have an up to date CV? Just link us your Github profile! Better yet, send us a pull request that improves this project.`
Contact GitHub API Training Shop Blog About
