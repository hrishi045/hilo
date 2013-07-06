  var hilo          // Public API
    , Dom           // DOM Manipulation Methods
    , select        
    , feature = {}  // Feature Detection
    , hiloAjax      // AJAX Func.
    , createEl      // Create an Element
    , Animation
    , HiloObject
    , Test;

  /**
   * Selects and returns elements based on selector given
   *
   * @method select
   * @private
   * @param String sel selector
   * @param HTMLElement root root element
   * @return NodeList Array of HTMLElements
   */

  select = function (selector, root, e) {
    var rt, sel = selector, tempObj;

    function get (sel, root) {
      var els, c, rt;

      rt = root || document;

      if(sel.split(" ").length === 1 
      && sel.split(">").length === 1
      && sel.split(":").length === 1
      && sel.split("+").length === 1) {
        c = sel.slice(0,1);
        switch(c) {
          case "#":
            els = [rt.getElementById(sel.substr(1,sel.length))];
            break;
          case ".":
            els = rt.getElementsByClassName(sel);
            break;
          case "*":
            els = document.all;
            break;
          case "&":
            els = document.documentElement;
            break;
          default:
            els = rt.getElementsByTagName(sel);
            break;
        }
      } else {
        els = rt.querySelectorAll(sel);
      }

      return els;
    }

    if (typeof root === 'object') {
      rt = root;
    } else if (root === true) {
      tempObj = window.temporaryHiloStorageObject[sel];
      if (tempObj) {
        return tempObj;
      } else {
        if (typeof e === 'object') {
          tempObj = get(sel, e);
        } else {
          tempObj = get(sel);
        }
        
        return tempObj;
      }
    } else {
      rt = document;
    }

    return get(sel, rt);
  };

  /**
   * The Main Class
   *
   * @class hilo
   * @constructor
   * 
   * @param {String|Function|Object|Array|HTMLElement} input MAGICal input
   * @root HTMLElement Where to start searching from
   */

  hilo = function (input, root, e) {
    if (typeof input === 'string') {
      return new Dom(select(input, root, e));
    } else if (typeof input === 'function') { // Function
      document.onreadystatechange = function () {
        if (document.readyState === 'complete') {
          input();
        }
      };
    } else if (input.length) { // DOM Node List / Hilo DOM Object
      return new Dom(input);
    } else { // DOM Node
      input = [input];
      return new Dom(input);
    }
  };

  hilo.version = '1.0.0-pre-dev-beta-2';
