
# on-select

  Invoke a callback on user selection. This is a fork of `yields/on-select`.

## Installation

  Install with Duo, Component, or NPM.

    $ npm install on-select

## Example

```js
var onselect = require('on-select');
var unbind = onselect(el, selected);

function selected(e){
  console.log(e);
  unbind();
}
```

## API

#### onselect(el, fn)

  Invoke `fn(e, str)` when a user selects within `el`.

  `str` is the user selected text.

## License

  MIT
