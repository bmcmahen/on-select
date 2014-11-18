
/**
 * Dependencies
 */

var mod, event, raf;

try {
  mod = require('bmcmahen-modifier');
  event = require('component-event');
  raf = require('component-raf');
} catch(err) {
  mod = require('modifier');
  event = require('event');
  raf = require('raf');
}

/**
 * Selection
 */

var selection = window.getSelection();

/**
 * Invoke `fn(e)` when a user selects within `el`.
 *
 * @param {Element} el
 * @param {Function} fn
 * @return {Function}
 * @api public
 */

module.exports = function(el, fn){
  event.bind(el, 'mouseup', callback);
  event.bind(el, 'keyup', callback);

  function callback(e){
    if (mod(e)) return;
    var id = raf(function(){
      var str = window.getSelection().toString();
      if (str) fn(e, str);
      raf.cancel(id);
    });
  }

  return function(){
    event.unbind(el, 'mouseup', callback);
    event.unbind(el, 'keyup', callback);
  }
};
