# z-namespacer
[![Build Status](https://travis-ci.org/ZeeCoder/z-namespacer.svg?branch=master)](https://travis-ci.org/ZeeCoder/z-namespacer)
[![npm version](https://badge.fury.io/js/z-namespacer.svg)](http://badge.fury.io/js/z-namespacer)

Namespacer creates namespaced event strings.

Expects the returned namespaced event strings to be used with [jQuery event namespaces](https://api.jquery.com/event.namespace/).

Since it's a CommonJS module, it must be used alongside with [Browserify](http://browserify.org/), or
something similar, like [WebPacker](http://webpack.github.io/).

## Example, explanation

```js
var Namespacer = require('z-namespacer');

// Creating a new object, providing the namespace
var ns = new Namespacer('namespace');

ns.get('click');
// -> 'click.namespace'

ns.get('resize scroll');
// -> 'resize.namespace scroll.namespace'

// Usage example with jQuery
$(window).on(ns.get('resize scroll'), function() {
    // Do something nasty
});

// later on
$(window).off(ns.get('resize scroll'));

```

## License
[MIT](LICENSE)
