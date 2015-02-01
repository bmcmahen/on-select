
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
 * Invoke `fn(e)` when a user selects within `el`.
 *
 * @param {Element} el
 * @param {Function} fn
 * @return {Function}
 * @api public
 */

module.exports = function(el, fn){
  event.bind(window, 'mouseup', callback);
  event.bind(window, 'touchend', callback);
  event.bind(el, 'keyup', callback);

  function callback(e){
    if (mod(e)) return;
    var id = raf(function(){
      var sel = window.getSelection();
      var str = sel.toString();
      if (str && el.contains(sel.anchorNode)) {
        fn(e, str);
      }
      raf.cancel(id);
    });
  }

  return function(){
    event.unbind(window, 'mouseup', callback);
    event.unbind(window, 'touchend', callback);
    event.unbind(el, 'keyup', callback);
  };
};
