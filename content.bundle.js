/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/dompurify/dist/purify.js":
/*!***********************************************!*\
  !*** ./node_modules/dompurify/dist/purify.js ***!
  \***********************************************/
/***/ (function(module) {

/*! @license DOMPurify 2.4.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.4.7/LICENSE */

(function (global, factory) {
   true ? module.exports = factory() :
  0;
})(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var hasOwnProperty = Object.hasOwnProperty,
      setPrototypeOf = Object.setPrototypeOf,
      isFrozen = Object.isFrozen,
      getPrototypeOf = Object.getPrototypeOf,
      getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var freeze = Object.freeze,
      seal = Object.seal,
      create = Object.create; // eslint-disable-line import/no-mutable-exports

  var _ref = typeof Reflect !== 'undefined' && Reflect,
      apply = _ref.apply,
      construct = _ref.construct;

  if (!apply) {
    apply = function apply(fun, thisValue, args) {
      return fun.apply(thisValue, args);
    };
  }

  if (!freeze) {
    freeze = function freeze(x) {
      return x;
    };
  }

  if (!seal) {
    seal = function seal(x) {
      return x;
    };
  }

  if (!construct) {
    construct = function construct(Func, args) {
      return _construct(Func, _toConsumableArray(args));
    };
  }

  var arrayForEach = unapply(Array.prototype.forEach);
  var arrayPop = unapply(Array.prototype.pop);
  var arrayPush = unapply(Array.prototype.push);
  var stringToLowerCase = unapply(String.prototype.toLowerCase);
  var stringToString = unapply(String.prototype.toString);
  var stringMatch = unapply(String.prototype.match);
  var stringReplace = unapply(String.prototype.replace);
  var stringIndexOf = unapply(String.prototype.indexOf);
  var stringTrim = unapply(String.prototype.trim);
  var regExpTest = unapply(RegExp.prototype.test);
  var typeErrorCreate = unconstruct(TypeError);
  function unapply(func) {
    return function (thisArg) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return apply(func, thisArg, args);
    };
  }
  function unconstruct(func) {
    return function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return construct(func, args);
    };
  }
  /* Add properties to a lookup table */

  function addToSet(set, array, transformCaseFunc) {
    var _transformCaseFunc;

    transformCaseFunc = (_transformCaseFunc = transformCaseFunc) !== null && _transformCaseFunc !== void 0 ? _transformCaseFunc : stringToLowerCase;

    if (setPrototypeOf) {
      // Make 'in' and truthy checks like Boolean(set.constructor)
      // independent of any properties defined on Object.prototype.
      // Prevent prototype setters from intercepting set as a this value.
      setPrototypeOf(set, null);
    }

    var l = array.length;

    while (l--) {
      var element = array[l];

      if (typeof element === 'string') {
        var lcElement = transformCaseFunc(element);

        if (lcElement !== element) {
          // Config presets (e.g. tags.js, attrs.js) are immutable.
          if (!isFrozen(array)) {
            array[l] = lcElement;
          }

          element = lcElement;
        }
      }

      set[element] = true;
    }

    return set;
  }
  /* Shallow clone an object */

  function clone(object) {
    var newObject = create(null);
    var property;

    for (property in object) {
      if (apply(hasOwnProperty, object, [property]) === true) {
        newObject[property] = object[property];
      }
    }

    return newObject;
  }
  /* IE10 doesn't support __lookupGetter__ so lets'
   * simulate it. It also automatically checks
   * if the prop is function or getter and behaves
   * accordingly. */

  function lookupGetter(object, prop) {
    while (object !== null) {
      var desc = getOwnPropertyDescriptor(object, prop);

      if (desc) {
        if (desc.get) {
          return unapply(desc.get);
        }

        if (typeof desc.value === 'function') {
          return unapply(desc.value);
        }
      }

      object = getPrototypeOf(object);
    }

    function fallbackValue(element) {
      console.warn('fallback value for', element);
      return null;
    }

    return fallbackValue;
  }

  var html$1 = freeze(['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr']); // SVG

  var svg$1 = freeze(['svg', 'a', 'altglyph', 'altglyphdef', 'altglyphitem', 'animatecolor', 'animatemotion', 'animatetransform', 'circle', 'clippath', 'defs', 'desc', 'ellipse', 'filter', 'font', 'g', 'glyph', 'glyphref', 'hkern', 'image', 'line', 'lineargradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialgradient', 'rect', 'stop', 'style', 'switch', 'symbol', 'text', 'textpath', 'title', 'tref', 'tspan', 'view', 'vkern']);
  var svgFilters = freeze(['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence']); // List of SVG elements that are disallowed by default.
  // We still need to know them so that we can do namespace
  // checks properly in case one wants to add them to
  // allow-list.

  var svgDisallowed = freeze(['animate', 'color-profile', 'cursor', 'discard', 'fedropshadow', 'font-face', 'font-face-format', 'font-face-name', 'font-face-src', 'font-face-uri', 'foreignobject', 'hatch', 'hatchpath', 'mesh', 'meshgradient', 'meshpatch', 'meshrow', 'missing-glyph', 'script', 'set', 'solidcolor', 'unknown', 'use']);
  var mathMl$1 = freeze(['math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mglyph', 'mi', 'mlabeledtr', 'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover']); // Similarly to SVG, we want to know all MathML elements,
  // even those that we disallow by default.

  var mathMlDisallowed = freeze(['maction', 'maligngroup', 'malignmark', 'mlongdiv', 'mscarries', 'mscarry', 'msgroup', 'mstack', 'msline', 'msrow', 'semantics', 'annotation', 'annotation-xml', 'mprescripts', 'none']);
  var text = freeze(['#text']);

  var html = freeze(['accept', 'action', 'align', 'alt', 'autocapitalize', 'autocomplete', 'autopictureinpicture', 'autoplay', 'background', 'bgcolor', 'border', 'capture', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'controls', 'controlslist', 'coords', 'crossorigin', 'datetime', 'decoding', 'default', 'dir', 'disabled', 'disablepictureinpicture', 'disableremoteplayback', 'download', 'draggable', 'enctype', 'enterkeyhint', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'inputmode', 'integrity', 'ismap', 'kind', 'label', 'lang', 'list', 'loading', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'minlength', 'multiple', 'muted', 'name', 'nonce', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'playsinline', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'span', 'srclang', 'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'title', 'translate', 'type', 'usemap', 'valign', 'value', 'width', 'xmlns', 'slot']);
  var svg = freeze(['accent-height', 'accumulate', 'additive', 'alignment-baseline', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'class', 'clip', 'clippathunits', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'filterunits', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'preserveaspectratio', 'primitiveunits', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'specularconstant', 'specularexponent', 'spreadmethod', 'startoffset', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke', 'stroke-width', 'style', 'surfacescale', 'systemlanguage', 'tabindex', 'targetx', 'targety', 'transform', 'transform-origin', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'version', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'wrap', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan']);
  var mathMl = freeze(['accent', 'accentunder', 'align', 'bevelled', 'close', 'columnsalign', 'columnlines', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'encoding', 'fence', 'frame', 'height', 'href', 'id', 'largeop', 'length', 'linethickness', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'supscriptshift', 'symmetric', 'voffset', 'width', 'xmlns']);
  var xml = freeze(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']);

  var MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode

  var ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
  var TMPLIT_EXPR = seal(/\${[\w\W]*}/gm);
  var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/); // eslint-disable-line no-useless-escape

  var ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape

  var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
  );
  var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
  var ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g // eslint-disable-line no-control-regex
  );
  var DOCTYPE_NAME = seal(/^html$/i);

  var getGlobal = function getGlobal() {
    return typeof window === 'undefined' ? null : window;
  };
  /**
   * Creates a no-op policy for internal use only.
   * Don't export this function outside this module!
   * @param {?TrustedTypePolicyFactory} trustedTypes The policy factory.
   * @param {Document} document The document object (to determine policy name suffix)
   * @return {?TrustedTypePolicy} The policy created (or null, if Trusted Types
   * are not supported).
   */


  var _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, document) {
    if (_typeof(trustedTypes) !== 'object' || typeof trustedTypes.createPolicy !== 'function') {
      return null;
    } // Allow the callers to control the unique policy name
    // by adding a data-tt-policy-suffix to the script element with the DOMPurify.
    // Policy creation with duplicate names throws in Trusted Types.


    var suffix = null;
    var ATTR_NAME = 'data-tt-policy-suffix';

    if (document.currentScript && document.currentScript.hasAttribute(ATTR_NAME)) {
      suffix = document.currentScript.getAttribute(ATTR_NAME);
    }

    var policyName = 'dompurify' + (suffix ? '#' + suffix : '');

    try {
      return trustedTypes.createPolicy(policyName, {
        createHTML: function createHTML(html) {
          return html;
        },
        createScriptURL: function createScriptURL(scriptUrl) {
          return scriptUrl;
        }
      });
    } catch (_) {
      // Policy creation failed (most likely another DOMPurify script has
      // already run). Skip creating the policy, as this will only cause errors
      // if TT are enforced.
      console.warn('TrustedTypes policy ' + policyName + ' could not be created.');
      return null;
    }
  };

  function createDOMPurify() {
    var window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();

    var DOMPurify = function DOMPurify(root) {
      return createDOMPurify(root);
    };
    /**
     * Version label, exposed for easier checks
     * if DOMPurify is up to date or not
     */


    DOMPurify.version = '2.4.7';
    /**
     * Array of elements that DOMPurify removed during sanitation.
     * Empty if nothing was removed.
     */

    DOMPurify.removed = [];

    if (!window || !window.document || window.document.nodeType !== 9) {
      // Not running in a browser, provide a factory function
      // so that you can pass your own Window
      DOMPurify.isSupported = false;
      return DOMPurify;
    }

    var originalDocument = window.document;
    var document = window.document;
    var DocumentFragment = window.DocumentFragment,
        HTMLTemplateElement = window.HTMLTemplateElement,
        Node = window.Node,
        Element = window.Element,
        NodeFilter = window.NodeFilter,
        _window$NamedNodeMap = window.NamedNodeMap,
        NamedNodeMap = _window$NamedNodeMap === void 0 ? window.NamedNodeMap || window.MozNamedAttrMap : _window$NamedNodeMap,
        HTMLFormElement = window.HTMLFormElement,
        DOMParser = window.DOMParser,
        trustedTypes = window.trustedTypes;
    var ElementPrototype = Element.prototype;
    var cloneNode = lookupGetter(ElementPrototype, 'cloneNode');
    var getNextSibling = lookupGetter(ElementPrototype, 'nextSibling');
    var getChildNodes = lookupGetter(ElementPrototype, 'childNodes');
    var getParentNode = lookupGetter(ElementPrototype, 'parentNode'); // As per issue #47, the web-components registry is inherited by a
    // new document created via createHTMLDocument. As per the spec
    // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
    // a new empty registry is used when creating a template contents owner
    // document, so we use that as our parent document to ensure nothing
    // is inherited.

    if (typeof HTMLTemplateElement === 'function') {
      var template = document.createElement('template');

      if (template.content && template.content.ownerDocument) {
        document = template.content.ownerDocument;
      }
    }

    var trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, originalDocument);

    var emptyHTML = trustedTypesPolicy ? trustedTypesPolicy.createHTML('') : '';
    var _document = document,
        implementation = _document.implementation,
        createNodeIterator = _document.createNodeIterator,
        createDocumentFragment = _document.createDocumentFragment,
        getElementsByTagName = _document.getElementsByTagName;
    var importNode = originalDocument.importNode;
    var documentMode = {};

    try {
      documentMode = clone(document).documentMode ? document.documentMode : {};
    } catch (_) {}

    var hooks = {};
    /**
     * Expose whether this browser supports running the full DOMPurify.
     */

    DOMPurify.isSupported = typeof getParentNode === 'function' && implementation && implementation.createHTMLDocument !== undefined && documentMode !== 9;
    var MUSTACHE_EXPR$1 = MUSTACHE_EXPR,
        ERB_EXPR$1 = ERB_EXPR,
        TMPLIT_EXPR$1 = TMPLIT_EXPR,
        DATA_ATTR$1 = DATA_ATTR,
        ARIA_ATTR$1 = ARIA_ATTR,
        IS_SCRIPT_OR_DATA$1 = IS_SCRIPT_OR_DATA,
        ATTR_WHITESPACE$1 = ATTR_WHITESPACE;
    var IS_ALLOWED_URI$1 = IS_ALLOWED_URI;
    /**
     * We consider the elements and attributes below to be safe. Ideally
     * don't add any new ones but feel free to remove unwanted ones.
     */

    /* allowed element names */

    var ALLOWED_TAGS = null;
    var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray(html$1), _toConsumableArray(svg$1), _toConsumableArray(svgFilters), _toConsumableArray(mathMl$1), _toConsumableArray(text)));
    /* Allowed attribute names */

    var ALLOWED_ATTR = null;
    var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray(html), _toConsumableArray(svg), _toConsumableArray(mathMl), _toConsumableArray(xml)));
    /*
     * Configure how DOMPUrify should handle custom elements and their attributes as well as customized built-in elements.
     * @property {RegExp|Function|null} tagNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any custom elements)
     * @property {RegExp|Function|null} attributeNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any attributes not on the allow list)
     * @property {boolean} allowCustomizedBuiltInElements allow custom elements derived from built-ins if they pass CUSTOM_ELEMENT_HANDLING.tagNameCheck. Default: `false`.
     */

    var CUSTOM_ELEMENT_HANDLING = Object.seal(Object.create(null, {
      tagNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      attributeNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      allowCustomizedBuiltInElements: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: false
      }
    }));
    /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */

    var FORBID_TAGS = null;
    /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */

    var FORBID_ATTR = null;
    /* Decide if ARIA attributes are okay */

    var ALLOW_ARIA_ATTR = true;
    /* Decide if custom data attributes are okay */

    var ALLOW_DATA_ATTR = true;
    /* Decide if unknown protocols are okay */

    var ALLOW_UNKNOWN_PROTOCOLS = false;
    /* Decide if self-closing tags in attributes are allowed.
     * Usually removed due to a mXSS issue in jQuery 3.0 */

    var ALLOW_SELF_CLOSE_IN_ATTR = true;
    /* Output should be safe for common template engines.
     * This means, DOMPurify removes data attributes, mustaches and ERB
     */

    var SAFE_FOR_TEMPLATES = false;
    /* Decide if document with <html>... should be returned */

    var WHOLE_DOCUMENT = false;
    /* Track whether config is already set on this instance of DOMPurify. */

    var SET_CONFIG = false;
    /* Decide if all elements (e.g. style, script) must be children of
     * document.body. By default, browsers might move them to document.head */

    var FORCE_BODY = false;
    /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html
     * string (or a TrustedHTML object if Trusted Types are supported).
     * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
     */

    var RETURN_DOM = false;
    /* Decide if a DOM `DocumentFragment` should be returned, instead of a html
     * string  (or a TrustedHTML object if Trusted Types are supported) */

    var RETURN_DOM_FRAGMENT = false;
    /* Try to return a Trusted Type object instead of a string, return a string in
     * case Trusted Types are not supported  */

    var RETURN_TRUSTED_TYPE = false;
    /* Output should be free from DOM clobbering attacks?
     * This sanitizes markups named with colliding, clobberable built-in DOM APIs.
     */

    var SANITIZE_DOM = true;
    /* Achieve full DOM Clobbering protection by isolating the namespace of named
     * properties and JS variables, mitigating attacks that abuse the HTML/DOM spec rules.
     *
     * HTML/DOM spec rules that enable DOM Clobbering:
     *   - Named Access on Window (§7.3.3)
     *   - DOM Tree Accessors (§3.1.5)
     *   - Form Element Parent-Child Relations (§4.10.3)
     *   - Iframe srcdoc / Nested WindowProxies (§4.8.5)
     *   - HTMLCollection (§4.2.10.2)
     *
     * Namespace isolation is implemented by prefixing `id` and `name` attributes
     * with a constant string, i.e., `user-content-`
     */

    var SANITIZE_NAMED_PROPS = false;
    var SANITIZE_NAMED_PROPS_PREFIX = 'user-content-';
    /* Keep element content when removing element? */

    var KEEP_CONTENT = true;
    /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
     * of importing it into a new Document and returning a sanitized copy */

    var IN_PLACE = false;
    /* Allow usage of profiles like html, svg and mathMl */

    var USE_PROFILES = {};
    /* Tags to ignore content of when KEEP_CONTENT is true */

    var FORBID_CONTENTS = null;
    var DEFAULT_FORBID_CONTENTS = addToSet({}, ['annotation-xml', 'audio', 'colgroup', 'desc', 'foreignobject', 'head', 'iframe', 'math', 'mi', 'mn', 'mo', 'ms', 'mtext', 'noembed', 'noframes', 'noscript', 'plaintext', 'script', 'style', 'svg', 'template', 'thead', 'title', 'video', 'xmp']);
    /* Tags that are safe for data: URIs */

    var DATA_URI_TAGS = null;
    var DEFAULT_DATA_URI_TAGS = addToSet({}, ['audio', 'video', 'img', 'source', 'image', 'track']);
    /* Attributes safe for values like "javascript:" */

    var URI_SAFE_ATTRIBUTES = null;
    var DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ['alt', 'class', 'for', 'id', 'label', 'name', 'pattern', 'placeholder', 'role', 'summary', 'title', 'value', 'style', 'xmlns']);
    var MATHML_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
    var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
    var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
    /* Document namespace */

    var NAMESPACE = HTML_NAMESPACE;
    var IS_EMPTY_INPUT = false;
    /* Allowed XHTML+XML namespaces */

    var ALLOWED_NAMESPACES = null;
    var DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE], stringToString);
    /* Parsing of strict XHTML documents */

    var PARSER_MEDIA_TYPE;
    var SUPPORTED_PARSER_MEDIA_TYPES = ['application/xhtml+xml', 'text/html'];
    var DEFAULT_PARSER_MEDIA_TYPE = 'text/html';
    var transformCaseFunc;
    /* Keep a reference to config to pass to hooks */

    var CONFIG = null;
    /* Ideally, do not touch anything below this line */

    /* ______________________________________________ */

    var formElement = document.createElement('form');

    var isRegexOrFunction = function isRegexOrFunction(testValue) {
      return testValue instanceof RegExp || testValue instanceof Function;
    };
    /**
     * _parseConfig
     *
     * @param  {Object} cfg optional config literal
     */
    // eslint-disable-next-line complexity


    var _parseConfig = function _parseConfig(cfg) {
      if (CONFIG && CONFIG === cfg) {
        return;
      }
      /* Shield configuration object from tampering */


      if (!cfg || _typeof(cfg) !== 'object') {
        cfg = {};
      }
      /* Shield configuration object from prototype pollution */


      cfg = clone(cfg);
      PARSER_MEDIA_TYPE = // eslint-disable-next-line unicorn/prefer-includes
      SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? PARSER_MEDIA_TYPE = DEFAULT_PARSER_MEDIA_TYPE : PARSER_MEDIA_TYPE = cfg.PARSER_MEDIA_TYPE; // HTML tags and attributes are not case-sensitive, converting to lowercase. Keeping XHTML as is.

      transformCaseFunc = PARSER_MEDIA_TYPE === 'application/xhtml+xml' ? stringToString : stringToLowerCase;
      /* Set configuration parameters */

      ALLOWED_TAGS = 'ALLOWED_TAGS' in cfg ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
      ALLOWED_ATTR = 'ALLOWED_ATTR' in cfg ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
      ALLOWED_NAMESPACES = 'ALLOWED_NAMESPACES' in cfg ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
      URI_SAFE_ATTRIBUTES = 'ADD_URI_SAFE_ATTR' in cfg ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), // eslint-disable-line indent
      cfg.ADD_URI_SAFE_ATTR, // eslint-disable-line indent
      transformCaseFunc // eslint-disable-line indent
      ) // eslint-disable-line indent
      : DEFAULT_URI_SAFE_ATTRIBUTES;
      DATA_URI_TAGS = 'ADD_DATA_URI_TAGS' in cfg ? addToSet(clone(DEFAULT_DATA_URI_TAGS), // eslint-disable-line indent
      cfg.ADD_DATA_URI_TAGS, // eslint-disable-line indent
      transformCaseFunc // eslint-disable-line indent
      ) // eslint-disable-line indent
      : DEFAULT_DATA_URI_TAGS;
      FORBID_CONTENTS = 'FORBID_CONTENTS' in cfg ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
      FORBID_TAGS = 'FORBID_TAGS' in cfg ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : {};
      FORBID_ATTR = 'FORBID_ATTR' in cfg ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : {};
      USE_PROFILES = 'USE_PROFILES' in cfg ? cfg.USE_PROFILES : false;
      ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true

      ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true

      ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false

      ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false; // Default true

      SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false

      WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false

      RETURN_DOM = cfg.RETURN_DOM || false; // Default false

      RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false

      RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false; // Default false

      FORCE_BODY = cfg.FORCE_BODY || false; // Default false

      SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true

      SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false; // Default false

      KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true

      IN_PLACE = cfg.IN_PLACE || false; // Default false

      IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI$1;
      NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
      CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};

      if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
        CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
      }

      if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
        CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
      }

      if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === 'boolean') {
        CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
      }

      if (SAFE_FOR_TEMPLATES) {
        ALLOW_DATA_ATTR = false;
      }

      if (RETURN_DOM_FRAGMENT) {
        RETURN_DOM = true;
      }
      /* Parse profile info */


      if (USE_PROFILES) {
        ALLOWED_TAGS = addToSet({}, _toConsumableArray(text));
        ALLOWED_ATTR = [];

        if (USE_PROFILES.html === true) {
          addToSet(ALLOWED_TAGS, html$1);
          addToSet(ALLOWED_ATTR, html);
        }

        if (USE_PROFILES.svg === true) {
          addToSet(ALLOWED_TAGS, svg$1);
          addToSet(ALLOWED_ATTR, svg);
          addToSet(ALLOWED_ATTR, xml);
        }

        if (USE_PROFILES.svgFilters === true) {
          addToSet(ALLOWED_TAGS, svgFilters);
          addToSet(ALLOWED_ATTR, svg);
          addToSet(ALLOWED_ATTR, xml);
        }

        if (USE_PROFILES.mathMl === true) {
          addToSet(ALLOWED_TAGS, mathMl$1);
          addToSet(ALLOWED_ATTR, mathMl);
          addToSet(ALLOWED_ATTR, xml);
        }
      }
      /* Merge configuration parameters */


      if (cfg.ADD_TAGS) {
        if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
          ALLOWED_TAGS = clone(ALLOWED_TAGS);
        }

        addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
      }

      if (cfg.ADD_ATTR) {
        if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
          ALLOWED_ATTR = clone(ALLOWED_ATTR);
        }

        addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
      }

      if (cfg.ADD_URI_SAFE_ATTR) {
        addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
      }

      if (cfg.FORBID_CONTENTS) {
        if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
          FORBID_CONTENTS = clone(FORBID_CONTENTS);
        }

        addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
      }
      /* Add #text in case KEEP_CONTENT is set to true */


      if (KEEP_CONTENT) {
        ALLOWED_TAGS['#text'] = true;
      }
      /* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */


      if (WHOLE_DOCUMENT) {
        addToSet(ALLOWED_TAGS, ['html', 'head', 'body']);
      }
      /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286, #365 */


      if (ALLOWED_TAGS.table) {
        addToSet(ALLOWED_TAGS, ['tbody']);
        delete FORBID_TAGS.tbody;
      } // Prevent further manipulation of configuration.
      // Not available in IE8, Safari 5, etc.


      if (freeze) {
        freeze(cfg);
      }

      CONFIG = cfg;
    };

    var MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ['mi', 'mo', 'mn', 'ms', 'mtext']);
    var HTML_INTEGRATION_POINTS = addToSet({}, ['foreignobject', 'desc', 'title', 'annotation-xml']); // Certain elements are allowed in both SVG and HTML
    // namespace. We need to specify them explicitly
    // so that they don't get erroneously deleted from
    // HTML namespace.

    var COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ['title', 'style', 'font', 'a', 'script']);
    /* Keep track of all possible SVG and MathML tags
     * so that we can perform the namespace checks
     * correctly. */

    var ALL_SVG_TAGS = addToSet({}, svg$1);
    addToSet(ALL_SVG_TAGS, svgFilters);
    addToSet(ALL_SVG_TAGS, svgDisallowed);
    var ALL_MATHML_TAGS = addToSet({}, mathMl$1);
    addToSet(ALL_MATHML_TAGS, mathMlDisallowed);
    /**
     *
     *
     * @param  {Element} element a DOM element whose namespace is being checked
     * @returns {boolean} Return false if the element has a
     *  namespace that a spec-compliant parser would never
     *  return. Return true otherwise.
     */

    var _checkValidNamespace = function _checkValidNamespace(element) {
      var parent = getParentNode(element); // In JSDOM, if we're inside shadow DOM, then parentNode
      // can be null. We just simulate parent in this case.

      if (!parent || !parent.tagName) {
        parent = {
          namespaceURI: NAMESPACE,
          tagName: 'template'
        };
      }

      var tagName = stringToLowerCase(element.tagName);
      var parentTagName = stringToLowerCase(parent.tagName);

      if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
        return false;
      }

      if (element.namespaceURI === SVG_NAMESPACE) {
        // The only way to switch from HTML namespace to SVG
        // is via <svg>. If it happens via any other tag, then
        // it should be killed.
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === 'svg';
        } // The only way to switch from MathML to SVG is via`
        // svg if parent is either <annotation-xml> or MathML
        // text integration points.


        if (parent.namespaceURI === MATHML_NAMESPACE) {
          return tagName === 'svg' && (parentTagName === 'annotation-xml' || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
        } // We only allow elements that are defined in SVG
        // spec. All others are disallowed in SVG namespace.


        return Boolean(ALL_SVG_TAGS[tagName]);
      }

      if (element.namespaceURI === MATHML_NAMESPACE) {
        // The only way to switch from HTML namespace to MathML
        // is via <math>. If it happens via any other tag, then
        // it should be killed.
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === 'math';
        } // The only way to switch from SVG to MathML is via
        // <math> and HTML integration points


        if (parent.namespaceURI === SVG_NAMESPACE) {
          return tagName === 'math' && HTML_INTEGRATION_POINTS[parentTagName];
        } // We only allow elements that are defined in MathML
        // spec. All others are disallowed in MathML namespace.


        return Boolean(ALL_MATHML_TAGS[tagName]);
      }

      if (element.namespaceURI === HTML_NAMESPACE) {
        // The only way to switch from SVG to HTML is via
        // HTML integration points, and from MathML to HTML
        // is via MathML text integration points
        if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
          return false;
        }

        if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
          return false;
        } // We disallow tags that are specific for MathML
        // or SVG and should never appear in HTML namespace


        return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
      } // For XHTML and XML documents that support custom namespaces


      if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && ALLOWED_NAMESPACES[element.namespaceURI]) {
        return true;
      } // The code should never reach this place (this means
      // that the element somehow got namespace that is not
      // HTML, SVG, MathML or allowed via ALLOWED_NAMESPACES).
      // Return false just in case.


      return false;
    };
    /**
     * _forceRemove
     *
     * @param  {Node} node a DOM node
     */


    var _forceRemove = function _forceRemove(node) {
      arrayPush(DOMPurify.removed, {
        element: node
      });

      try {
        // eslint-disable-next-line unicorn/prefer-dom-node-remove
        node.parentNode.removeChild(node);
      } catch (_) {
        try {
          node.outerHTML = emptyHTML;
        } catch (_) {
          node.remove();
        }
      }
    };
    /**
     * _removeAttribute
     *
     * @param  {String} name an Attribute name
     * @param  {Node} node a DOM node
     */


    var _removeAttribute = function _removeAttribute(name, node) {
      try {
        arrayPush(DOMPurify.removed, {
          attribute: node.getAttributeNode(name),
          from: node
        });
      } catch (_) {
        arrayPush(DOMPurify.removed, {
          attribute: null,
          from: node
        });
      }

      node.removeAttribute(name); // We void attribute values for unremovable "is"" attributes

      if (name === 'is' && !ALLOWED_ATTR[name]) {
        if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
          try {
            _forceRemove(node);
          } catch (_) {}
        } else {
          try {
            node.setAttribute(name, '');
          } catch (_) {}
        }
      }
    };
    /**
     * _initDocument
     *
     * @param  {String} dirty a string of dirty markup
     * @return {Document} a DOM, filled with the dirty markup
     */


    var _initDocument = function _initDocument(dirty) {
      /* Create a HTML document */
      var doc;
      var leadingWhitespace;

      if (FORCE_BODY) {
        dirty = '<remove></remove>' + dirty;
      } else {
        /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */
        var matches = stringMatch(dirty, /^[\r\n\t ]+/);
        leadingWhitespace = matches && matches[0];
      }

      if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && NAMESPACE === HTML_NAMESPACE) {
        // Root of XHTML doc must contain xmlns declaration (see https://www.w3.org/TR/xhtml1/normative.html#strict)
        dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + '</body></html>';
      }

      var dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
      /*
       * Use the DOMParser API by default, fallback later if needs be
       * DOMParser not work for svg when has multiple root element.
       */

      if (NAMESPACE === HTML_NAMESPACE) {
        try {
          doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
        } catch (_) {}
      }
      /* Use createHTMLDocument in case DOMParser is not available */


      if (!doc || !doc.documentElement) {
        doc = implementation.createDocument(NAMESPACE, 'template', null);

        try {
          doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
        } catch (_) {// Syntax error if dirtyPayload is invalid xml
        }
      }

      var body = doc.body || doc.documentElement;

      if (dirty && leadingWhitespace) {
        body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
      }
      /* Work on whole document or just its body */


      if (NAMESPACE === HTML_NAMESPACE) {
        return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? 'html' : 'body')[0];
      }

      return WHOLE_DOCUMENT ? doc.documentElement : body;
    };
    /**
     * _createIterator
     *
     * @param  {Document} root document/fragment to create iterator for
     * @return {Iterator} iterator instance
     */


    var _createIterator = function _createIterator(root) {
      return createNodeIterator.call(root.ownerDocument || root, root, // eslint-disable-next-line no-bitwise
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT, null, false);
    };
    /**
     * _isClobbered
     *
     * @param  {Node} elm element to check for clobbering attacks
     * @return {Boolean} true if clobbered, false if safe
     */


    var _isClobbered = function _isClobbered(elm) {
      return elm instanceof HTMLFormElement && (typeof elm.nodeName !== 'string' || typeof elm.textContent !== 'string' || typeof elm.removeChild !== 'function' || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== 'function' || typeof elm.setAttribute !== 'function' || typeof elm.namespaceURI !== 'string' || typeof elm.insertBefore !== 'function' || typeof elm.hasChildNodes !== 'function');
    };
    /**
     * _isNode
     *
     * @param  {Node} obj object to check whether it's a DOM node
     * @return {Boolean} true is object is a DOM node
     */


    var _isNode = function _isNode(object) {
      return _typeof(Node) === 'object' ? object instanceof Node : object && _typeof(object) === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string';
    };
    /**
     * _executeHook
     * Execute user configurable hooks
     *
     * @param  {String} entryPoint  Name of the hook's entry point
     * @param  {Node} currentNode node to work on with the hook
     * @param  {Object} data additional hook parameters
     */


    var _executeHook = function _executeHook(entryPoint, currentNode, data) {
      if (!hooks[entryPoint]) {
        return;
      }

      arrayForEach(hooks[entryPoint], function (hook) {
        hook.call(DOMPurify, currentNode, data, CONFIG);
      });
    };
    /**
     * _sanitizeElements
     *
     * @protect nodeName
     * @protect textContent
     * @protect removeChild
     *
     * @param   {Node} currentNode to check for permission to exist
     * @return  {Boolean} true if node was killed, false if left alive
     */


    var _sanitizeElements = function _sanitizeElements(currentNode) {
      var content;
      /* Execute a hook if present */

      _executeHook('beforeSanitizeElements', currentNode, null);
      /* Check if element is clobbered or can clobber */


      if (_isClobbered(currentNode)) {
        _forceRemove(currentNode);

        return true;
      }
      /* Check if tagname contains Unicode */


      if (regExpTest(/[\u0080-\uFFFF]/, currentNode.nodeName)) {
        _forceRemove(currentNode);

        return true;
      }
      /* Now let's check the element's type and name */


      var tagName = transformCaseFunc(currentNode.nodeName);
      /* Execute a hook if present */

      _executeHook('uponSanitizeElement', currentNode, {
        tagName: tagName,
        allowedTags: ALLOWED_TAGS
      });
      /* Detect mXSS attempts abusing namespace confusion */


      if (currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && (!_isNode(currentNode.content) || !_isNode(currentNode.content.firstElementChild)) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
        _forceRemove(currentNode);

        return true;
      }
      /* Mitigate a problem with templates inside select */


      if (tagName === 'select' && regExpTest(/<template/i, currentNode.innerHTML)) {
        _forceRemove(currentNode);

        return true;
      }
      /* Remove element if anything forbids its presence */


      if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
        /* Check if we have a custom element to handle */
        if (!FORBID_TAGS[tagName] && _basicCustomElementTest(tagName)) {
          if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) return false;
          if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) return false;
        }
        /* Keep content except for bad-listed elements */


        if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
          var parentNode = getParentNode(currentNode) || currentNode.parentNode;
          var childNodes = getChildNodes(currentNode) || currentNode.childNodes;

          if (childNodes && parentNode) {
            var childCount = childNodes.length;

            for (var i = childCount - 1; i >= 0; --i) {
              parentNode.insertBefore(cloneNode(childNodes[i], true), getNextSibling(currentNode));
            }
          }
        }

        _forceRemove(currentNode);

        return true;
      }
      /* Check whether element has a valid namespace */


      if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
        _forceRemove(currentNode);

        return true;
      }
      /* Make sure that older browsers don't get fallback-tag mXSS */


      if ((tagName === 'noscript' || tagName === 'noembed' || tagName === 'noframes') && regExpTest(/<\/no(script|embed|frames)/i, currentNode.innerHTML)) {
        _forceRemove(currentNode);

        return true;
      }
      /* Sanitize element content to be template-safe */


      if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
        /* Get the element's text content */
        content = currentNode.textContent;
        content = stringReplace(content, MUSTACHE_EXPR$1, ' ');
        content = stringReplace(content, ERB_EXPR$1, ' ');
        content = stringReplace(content, TMPLIT_EXPR$1, ' ');

        if (currentNode.textContent !== content) {
          arrayPush(DOMPurify.removed, {
            element: currentNode.cloneNode()
          });
          currentNode.textContent = content;
        }
      }
      /* Execute a hook if present */


      _executeHook('afterSanitizeElements', currentNode, null);

      return false;
    };
    /**
     * _isValidAttribute
     *
     * @param  {string} lcTag Lowercase tag name of containing element.
     * @param  {string} lcName Lowercase attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid, otherwise false.
     */
    // eslint-disable-next-line complexity


    var _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
      /* Make sure attribute cannot clobber */
      if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in document || value in formElement)) {
        return false;
      }
      /* Allow valid data-* attributes: At least one character after "-"
          (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
          XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
          We don't need to check the value; it's always URI safe. */


      if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR$1, lcName)) ; else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$1, lcName)) ; else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
        if ( // First condition does a very basic check if a) it's basically a valid custom element tagname AND
        // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
        _basicCustomElementTest(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) || // Alternative, second condition checks if it's an `is`-attribute, AND
        // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        lcName === 'is' && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))) ; else {
          return false;
        }
        /* Check value is safe. First, is attr inert? If so, is safe */

      } else if (URI_SAFE_ATTRIBUTES[lcName]) ; else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE$1, ''))) ; else if ((lcName === 'src' || lcName === 'xlink:href' || lcName === 'href') && lcTag !== 'script' && stringIndexOf(value, 'data:') === 0 && DATA_URI_TAGS[lcTag]) ; else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$1, stringReplace(value, ATTR_WHITESPACE$1, ''))) ; else if (value) {
        return false;
      } else ;

      return true;
    };
    /**
     * _basicCustomElementCheck
     * checks if at least one dash is included in tagName, and it's not the first char
     * for more sophisticated checking see https://github.com/sindresorhus/validate-element-name
     * @param {string} tagName name of the tag of the node to sanitize
     */


    var _basicCustomElementTest = function _basicCustomElementTest(tagName) {
      return tagName.indexOf('-') > 0;
    };
    /**
     * _sanitizeAttributes
     *
     * @protect attributes
     * @protect nodeName
     * @protect removeAttribute
     * @protect setAttribute
     *
     * @param  {Node} currentNode to sanitize
     */


    var _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
      var attr;
      var value;
      var lcName;
      var l;
      /* Execute a hook if present */

      _executeHook('beforeSanitizeAttributes', currentNode, null);

      var attributes = currentNode.attributes;
      /* Check if we have attributes; if not we might have a text node */

      if (!attributes) {
        return;
      }

      var hookEvent = {
        attrName: '',
        attrValue: '',
        keepAttr: true,
        allowedAttributes: ALLOWED_ATTR
      };
      l = attributes.length;
      /* Go backwards over all attributes; safely remove bad ones */

      while (l--) {
        attr = attributes[l];
        var _attr = attr,
            name = _attr.name,
            namespaceURI = _attr.namespaceURI;
        value = name === 'value' ? attr.value : stringTrim(attr.value);
        lcName = transformCaseFunc(name);
        /* Execute a hook if present */

        hookEvent.attrName = lcName;
        hookEvent.attrValue = value;
        hookEvent.keepAttr = true;
        hookEvent.forceKeepAttr = undefined; // Allows developers to see this is a property they can set

        _executeHook('uponSanitizeAttribute', currentNode, hookEvent);

        value = hookEvent.attrValue;
        /* Did the hooks approve of the attribute? */

        if (hookEvent.forceKeepAttr) {
          continue;
        }
        /* Remove attribute */


        _removeAttribute(name, currentNode);
        /* Did the hooks approve of the attribute? */


        if (!hookEvent.keepAttr) {
          continue;
        }
        /* Work around a security issue in jQuery 3.0 */


        if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
          _removeAttribute(name, currentNode);

          continue;
        }
        /* Sanitize attribute content to be template-safe */


        if (SAFE_FOR_TEMPLATES) {
          value = stringReplace(value, MUSTACHE_EXPR$1, ' ');
          value = stringReplace(value, ERB_EXPR$1, ' ');
          value = stringReplace(value, TMPLIT_EXPR$1, ' ');
        }
        /* Is `value` valid for this attribute? */


        var lcTag = transformCaseFunc(currentNode.nodeName);

        if (!_isValidAttribute(lcTag, lcName, value)) {
          continue;
        }
        /* Full DOM Clobbering protection via namespace isolation,
         * Prefix id and name attributes with `user-content-`
         */


        if (SANITIZE_NAMED_PROPS && (lcName === 'id' || lcName === 'name')) {
          // Remove the attribute with this value
          _removeAttribute(name, currentNode); // Prefix the value and later re-create the attribute with the sanitized value


          value = SANITIZE_NAMED_PROPS_PREFIX + value;
        }
        /* Handle attributes that require Trusted Types */


        if (trustedTypesPolicy && _typeof(trustedTypes) === 'object' && typeof trustedTypes.getAttributeType === 'function') {
          if (namespaceURI) ; else {
            switch (trustedTypes.getAttributeType(lcTag, lcName)) {
              case 'TrustedHTML':
                {
                  value = trustedTypesPolicy.createHTML(value);
                  break;
                }

              case 'TrustedScriptURL':
                {
                  value = trustedTypesPolicy.createScriptURL(value);
                  break;
                }
            }
          }
        }
        /* Handle invalid data-* attribute set by try-catching it */


        try {
          if (namespaceURI) {
            currentNode.setAttributeNS(namespaceURI, name, value);
          } else {
            /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */
            currentNode.setAttribute(name, value);
          }

          arrayPop(DOMPurify.removed);
        } catch (_) {}
      }
      /* Execute a hook if present */


      _executeHook('afterSanitizeAttributes', currentNode, null);
    };
    /**
     * _sanitizeShadowDOM
     *
     * @param  {DocumentFragment} fragment to iterate over recursively
     */


    var _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
      var shadowNode;

      var shadowIterator = _createIterator(fragment);
      /* Execute a hook if present */


      _executeHook('beforeSanitizeShadowDOM', fragment, null);

      while (shadowNode = shadowIterator.nextNode()) {
        /* Execute a hook if present */
        _executeHook('uponSanitizeShadowNode', shadowNode, null);
        /* Sanitize tags and elements */


        if (_sanitizeElements(shadowNode)) {
          continue;
        }
        /* Deep shadow DOM detected */


        if (shadowNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(shadowNode.content);
        }
        /* Check attributes, sanitize if necessary */


        _sanitizeAttributes(shadowNode);
      }
      /* Execute a hook if present */


      _executeHook('afterSanitizeShadowDOM', fragment, null);
    };
    /**
     * Sanitize
     * Public method providing core sanitation functionality
     *
     * @param {String|Node} dirty string or DOM node
     * @param {Object} configuration object
     */
    // eslint-disable-next-line complexity


    DOMPurify.sanitize = function (dirty) {
      var cfg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var body;
      var importedNode;
      var currentNode;
      var oldNode;
      var returnNode;
      /* Make sure we have a string to sanitize.
        DO NOT return early, as this will return the wrong type if
        the user has requested a DOM object rather than a string */

      IS_EMPTY_INPUT = !dirty;

      if (IS_EMPTY_INPUT) {
        dirty = '<!-->';
      }
      /* Stringify, in case dirty is an object */


      if (typeof dirty !== 'string' && !_isNode(dirty)) {
        if (typeof dirty.toString === 'function') {
          dirty = dirty.toString();

          if (typeof dirty !== 'string') {
            throw typeErrorCreate('dirty is not a string, aborting');
          }
        } else {
          throw typeErrorCreate('toString is not a function');
        }
      }
      /* Check we can run. Otherwise fall back or ignore */


      if (!DOMPurify.isSupported) {
        if (_typeof(window.toStaticHTML) === 'object' || typeof window.toStaticHTML === 'function') {
          if (typeof dirty === 'string') {
            return window.toStaticHTML(dirty);
          }

          if (_isNode(dirty)) {
            return window.toStaticHTML(dirty.outerHTML);
          }
        }

        return dirty;
      }
      /* Assign config vars */


      if (!SET_CONFIG) {
        _parseConfig(cfg);
      }
      /* Clean up removed elements */


      DOMPurify.removed = [];
      /* Check if dirty is correctly typed for IN_PLACE */

      if (typeof dirty === 'string') {
        IN_PLACE = false;
      }

      if (IN_PLACE) {
        /* Do some early pre-sanitization to avoid unsafe root nodes */
        if (dirty.nodeName) {
          var tagName = transformCaseFunc(dirty.nodeName);

          if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
            throw typeErrorCreate('root node is forbidden and cannot be sanitized in-place');
          }
        }
      } else if (dirty instanceof Node) {
        /* If dirty is a DOM element, append to an empty document to avoid
           elements being stripped by the parser */
        body = _initDocument('<!---->');
        importedNode = body.ownerDocument.importNode(dirty, true);

        if (importedNode.nodeType === 1 && importedNode.nodeName === 'BODY') {
          /* Node is already a body, use as is */
          body = importedNode;
        } else if (importedNode.nodeName === 'HTML') {
          body = importedNode;
        } else {
          // eslint-disable-next-line unicorn/prefer-dom-node-append
          body.appendChild(importedNode);
        }
      } else {
        /* Exit directly if we have nothing to do */
        if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && // eslint-disable-next-line unicorn/prefer-includes
        dirty.indexOf('<') === -1) {
          return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
        }
        /* Initialize the document to work on */


        body = _initDocument(dirty);
        /* Check we have a DOM node from the data */

        if (!body) {
          return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : '';
        }
      }
      /* Remove first element node (ours) if FORCE_BODY is set */


      if (body && FORCE_BODY) {
        _forceRemove(body.firstChild);
      }
      /* Get node iterator */


      var nodeIterator = _createIterator(IN_PLACE ? dirty : body);
      /* Now start iterating over the created document */


      while (currentNode = nodeIterator.nextNode()) {
        /* Fix IE's strange behavior with manipulated textNodes #89 */
        if (currentNode.nodeType === 3 && currentNode === oldNode) {
          continue;
        }
        /* Sanitize tags and elements */


        if (_sanitizeElements(currentNode)) {
          continue;
        }
        /* Shadow DOM detected, sanitize it */


        if (currentNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(currentNode.content);
        }
        /* Check attributes, sanitize if necessary */


        _sanitizeAttributes(currentNode);

        oldNode = currentNode;
      }

      oldNode = null;
      /* If we sanitized `dirty` in-place, return it. */

      if (IN_PLACE) {
        return dirty;
      }
      /* Return sanitized string or DOM */


      if (RETURN_DOM) {
        if (RETURN_DOM_FRAGMENT) {
          returnNode = createDocumentFragment.call(body.ownerDocument);

          while (body.firstChild) {
            // eslint-disable-next-line unicorn/prefer-dom-node-append
            returnNode.appendChild(body.firstChild);
          }
        } else {
          returnNode = body;
        }

        if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmod) {
          /*
            AdoptNode() is not used because internal state is not reset
            (e.g. the past names map of a HTMLFormElement), this is safe
            in theory but we would rather not risk another attack vector.
            The state that is cloned by importNode() is explicitly defined
            by the specs.
          */
          returnNode = importNode.call(originalDocument, returnNode, true);
        }

        return returnNode;
      }

      var serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
      /* Serialize doctype if allowed */

      if (WHOLE_DOCUMENT && ALLOWED_TAGS['!doctype'] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
        serializedHTML = '<!DOCTYPE ' + body.ownerDocument.doctype.name + '>\n' + serializedHTML;
      }
      /* Sanitize final string template-safe */


      if (SAFE_FOR_TEMPLATES) {
        serializedHTML = stringReplace(serializedHTML, MUSTACHE_EXPR$1, ' ');
        serializedHTML = stringReplace(serializedHTML, ERB_EXPR$1, ' ');
        serializedHTML = stringReplace(serializedHTML, TMPLIT_EXPR$1, ' ');
      }

      return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
    };
    /**
     * Public method to set the configuration once
     * setConfig
     *
     * @param {Object} cfg configuration object
     */


    DOMPurify.setConfig = function (cfg) {
      _parseConfig(cfg);

      SET_CONFIG = true;
    };
    /**
     * Public method to remove the configuration
     * clearConfig
     *
     */


    DOMPurify.clearConfig = function () {
      CONFIG = null;
      SET_CONFIG = false;
    };
    /**
     * Public method to check if an attribute value is valid.
     * Uses last set config, if any. Otherwise, uses config defaults.
     * isValidAttribute
     *
     * @param  {string} tag Tag name of containing element.
     * @param  {string} attr Attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid. Otherwise, returns false.
     */


    DOMPurify.isValidAttribute = function (tag, attr, value) {
      /* Initialize shared config vars if necessary. */
      if (!CONFIG) {
        _parseConfig({});
      }

      var lcTag = transformCaseFunc(tag);
      var lcName = transformCaseFunc(attr);
      return _isValidAttribute(lcTag, lcName, value);
    };
    /**
     * AddHook
     * Public method to add DOMPurify hooks
     *
     * @param {String} entryPoint entry point for the hook to add
     * @param {Function} hookFunction function to execute
     */


    DOMPurify.addHook = function (entryPoint, hookFunction) {
      if (typeof hookFunction !== 'function') {
        return;
      }

      hooks[entryPoint] = hooks[entryPoint] || [];
      arrayPush(hooks[entryPoint], hookFunction);
    };
    /**
     * RemoveHook
     * Public method to remove a DOMPurify hook at a given entryPoint
     * (pops it from the stack of hooks if more are present)
     *
     * @param {String} entryPoint entry point for the hook to remove
     * @return {Function} removed(popped) hook
     */


    DOMPurify.removeHook = function (entryPoint) {
      if (hooks[entryPoint]) {
        return arrayPop(hooks[entryPoint]);
      }
    };
    /**
     * RemoveHooks
     * Public method to remove all DOMPurify hooks at a given entryPoint
     *
     * @param  {String} entryPoint entry point for the hooks to remove
     */


    DOMPurify.removeHooks = function (entryPoint) {
      if (hooks[entryPoint]) {
        hooks[entryPoint] = [];
      }
    };
    /**
     * RemoveAllHooks
     * Public method to remove all DOMPurify hooks
     *
     */


    DOMPurify.removeAllHooks = function () {
      hooks = {};
    };

    return DOMPurify;
  }

  var purify = createDOMPurify();

  return purify;

}));
//# sourceMappingURL=purify.js.map


/***/ }),

/***/ "./node_modules/html-to-md/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/html-to-md/dist/index.js ***!
  \***********************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=45)}([function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(1),o=r(9),i=r(12),a=r(6),c=r(2),u=function(){function t(t,e,r){var n=void 0===r?{}:r,o=n.keepSpace,i=void 0!==o&&o,a=n.prevTagName,c=void 0===a?"":a,u=n.nextTagName,s=void 0===u?"":u,l=n.prevTagStr,p=void 0===l?"":l,f=n.nextTagStr,h=void 0===f?"":f,d=n.parentTag,_=void 0===d?"":d,y=n.isFirstSubTag,v=void 0===y||y,g=n.calcLeading,b=void 0!==g&&g,m=n.leadingSpace,O=void 0===m?"":m,T=n.layer,S=void 0===T?1:T,x=n.noWrap,j=void 0!==x&&x,w=n.match,P=void 0===w?null:w,M=n.indentSpace,C=void 0===M?"":M,N=n.language,E=void 0===N?"":N,L=n.count,k=void 0===L?1:L,A=n.tableColumnCount,V=void 0===A?0:A,W=n.noExtraLine,R=void 0!==W&&W,I=n.inTable,H=void 0!==I&&I;if(this.tagName=e,this.rawStr=t,this.parentTag=_,this.prevTagName=c,this.nextTagName=s,this.prevTagStr=p,this.nextTagStr=h,this.isFirstSubTag=v,this.calcLeading=b,this.leadingSpace=O,this.layer=S,this.noWrap=j,this.match=P,this.indentSpace=C,this.language=E,this.count=k,this.inTable=H,this.tableColumnCount=V,this.noExtraLine=R,this.keepSpace=i,!this.__detectStr__(t,this.tagName))return this.attrs={},void(this.innerHTML="");var q=this.__fetchTagAttrAndInnerHTML__(t),F=q.attr,G=q.innerHTML;this.attrs=F,this.innerHTML=G}return t.prototype.__detectStr__=function(t,e){if("<"!==t[0])return console.error("Not a valid tag, current tag name: ".concat(this.tagName,", tag content: ").concat(t)),!1;for(var r="",n=!1,o=1;o<t.length&&">"!==t[o];o++)!n&&/(\s|\/)/.test(t[o])&&(n=!0),n||(r+=t[o]);return r===e||(console.warn("Tag is not match tagName, tagName in str is "+r+", which tagName passed from parent is "+e),!1)},t.prototype.__fetchTagAttrAndInnerHTML__=function(t){for(var e="",r=1;r<t.length&&">"!==t[r];r++)e+=t[r];for(var o=t.slice(r+1),i="",a=-1,c=o.length-1;c>=0;c--)if((i=o[c]+i).startsWith("</")){i.startsWith("</"+this.tagName+">")&&(a=c);break}-1===a&&(0,n.isSelfClosing)(this.tagName)&&console.warn("There detect a self close tag, which name is:",this.tagName);var u=(0,n.getTagAttributes)(e);return this.tagName&&delete u[this.tagName],{attr:u,innerHTML:o.slice(0,a)}},t.prototype.__onlyLeadingSpace__=function(t){t=t.trim();for(var e=0;e<t.length;e++)if(t[e]!==i.SINGLE)return!1;return!0},t.prototype.__isEmpty__=function(t){return!this.keepSpace&&(""===t&&"td"!==this.tagName||this.calcLeading&&this.__onlyLeadingSpace__(t))},t.prototype.getValidSubTagName=function(t){return t},t.prototype.beforeParse=function(){var t=c.default.get().tagListener;if(t){var e=t(this.tagName,{parentTag:this.parentTag,prevTagName:this.prevTagName,nextTagName:this.nextTagName,isFirstSubTag:this.isFirstSubTag,attrs:this.attrs,innerHTML:this.innerHTML,language:this.language,match:this.match,isSelfClosing:!1}),r=e.attrs,n=e.language,o=e.match;this.attrs=r,"string"===typeof n&&(this.language=n),"undefined"!==typeof o&&(this.match=o)}return""},t.prototype.parseValidSubTag=function(t,e,r){return new((0,n.getTagConstructor)(e))(t,e,r).exec()},t.prototype.parseOnlyString=function(t,e,r){return new o.default(t,e,r).exec()},t.prototype.afterParsed=function(t){return t},t.prototype.slim=function(t){return this.keepSpace?t:t.trim()},t.prototype.beforeMergeSpace=function(t){return t},t.prototype.mergeSpace=function(t,e,r){return this.keepSpace&&"pre"!==this.tagName?t.endsWith("\n")?t:t+r.replace(/\n+/g,"\n"):e+t+r},t.prototype.afterMergeSpace=function(t){return t},t.prototype.beforeReturn=function(t){return t},t.prototype.exec=function(t,e){void 0===t&&(t=""),void 0===e&&(e="");for(var r=this.beforeParse(),o=(0,n.generateGetNextValidTag)(this.innerHTML),i=o(),c=i[0],u=i[1],s=null;""!==u;){var l=o(),p=l[0],f=l[1],h={parentTag:this.tagName,nextTagName:p,nextTagStr:f,prevTagName:s,prevTagStr:r,leadingSpace:this.leadingSpace,layer:this.layer,keepSpace:this.keepSpace,inTable:this.inTable},d=void 0;d=null!=c?this.parseValidSubTag(u,c,h):this.parseOnlyString(u,c,h);var _=this.getValidSubTagName(c);c=p,u=f,null==_&&this.__isEmpty__(d)||(s=_,this.isFirstSubTag=!1,r+=d)}return r=this.afterParsed(r),r=this.slim(r),this.__isEmpty__(r)?"":(r=this.beforeMergeSpace(r),!this.noExtraLine&&(0,a.default)(this.tagName)&&this.prevTagName&&!r.startsWith("\n")&&!(0,a.default)(this.prevTagName)&&this.parentTag&&(t="\n\n"),r=this.mergeSpace(r,t,e),this.noWrap&&!this.keepSpace&&(r=r.replace(/\s+/g," ")),r=this.afterMergeSpace(r),r=this.beforeReturn(r))},t}();e.default=u},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.shouldRenderRawInside=e.isIndependentTag=e.clearComment=e.getLanguage=e.getTableAlign=e.getTagAttributes=e.isSelfClosing=e.generateGetNextValidTag=e.getTagConstructor=e.getRealTagName=e.unescapeStr=e.extraEscape=void 0;var n=r(46);Object.defineProperty(e,"extraEscape",{enumerable:!0,get:function(){return n.extraEscape}}),Object.defineProperty(e,"unescapeStr",{enumerable:!0,get:function(){return n.unescapeStr}});var o=r(47);e.generateGetNextValidTag=o.default;var i=r(48);e.getTagConstructor=i.default;var a=r(11);e.isSelfClosing=a.default;var c=r(51);e.getTagAttributes=c.default;var u=r(52);e.getLanguage=u.default;var s=r(53);e.clearComment=s.default;var l=r(17);e.getRealTagName=l.default;var p=r(6);e.isIndependentTag=p.default;var f=r(54);e.getTableAlign=f.default;var h=r(55);e.shouldRenderRawInside=h.default},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t){var e=void 0===t?{}:t,r=e.skipTags,n=void 0===r?[]:r,o=e.emptyTags,i=void 0===o?[]:o,a=e.ignoreTags,c=void 0===a?[]:a,u=e.aliasTags,s=void 0===u?{}:u,l=e.renderCustomTags,p=void 0===l||l,f=e.tagListener,h=void 0===f?function(t,e){return e}:f;this.options={skipTags:n,emptyTags:i,ignoreTags:c,aliasTags:s,renderCustomTags:p,tagListener:h}}return t.prototype.get=function(){return this.options},t.prototype.clear=function(){this.options={}},t.prototype.set=function(t,e){var r=this;t&&"[object Object]"===Object.prototype.toString.call(t)&&Object.keys(t).forEach(function(n){e?r.options[n]=t[n]:function(t,e,r){if(!(r in t))return void(t[r]=e[r]);var n=Array.isArray(t[r]),o="[object Object]"===Object.prototype.toString.call(t[r]);t[r]=n?t[r].concat(e[r]):o?Object.assign(t[r],e[r]):e[r]}(r.options,t,n)})},t.prototype.reset=function(){this.options=JSON.parse(JSON.stringify(o)),this.options.tagListener=function(t,e){return e}},t}();var o={ignoreTags:["","style","head","!doctype","form","svg","noscript","script","meta"],skipTags:["div","html","body","nav","section","footer","main","aside","article","header"],emptyTags:[],aliasTags:{figure:"p",dl:"p",dd:"p",dt:"p",figcaption:"p"},renderCustomTags:!0},i=new n;i.reset(),e.default=i},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r){void 0===r&&(r="h1");var n=t.call(this,e,r)||this;return n.match="#",n}return n(e,t),e.prototype.beforeMergeSpace=function(t){return this.match+" "+t},e.prototype.exec=function(e,r){return e||(e="\n"),r||(r="\n"),t.prototype.exec.call(this,e,r)},e}(r(0).default);e.default=o},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(1),o=r(2),i=function(){function t(t,e,r){var n=void 0===r?{}:r,o=n.parentTag,i=void 0===o?"":o,a=n.leadingSpace,c=void 0===a?"":a,u=n.layer,s=void 0===u?1:u,l=n.isFirstSubTag,p=void 0!==l&&l,f=n.inTable,h=void 0!==f&&f,d=n.match,_=void 0===d?null:d,y=n.prevTagName,v=void 0===y?"":y,g=n.nextTagName,b=void 0===g?"":g;if(this.tagName=e,this.rawStr=t,this.parentTag=i,this.isFirstSubTag=p,this.prevTagName=v,this.nextTagName=b,this.leadingSpace=c,this.layer=s,this.innerHTML="",this.match=_,this.inTable=h,this.__detectStr__(t,this.tagName)){var m=this.__fetchTagAttr__(t).attr;this.attrs=m}else this.attrs={}}return t.prototype.__detectStr__=function(t,e){if("<"!==t[0])return console.error("Not a valid tag, current tag name: ".concat(this.tagName,", tag content: ").concat(t)),!1;for(var r="",n=!1,o=1;o<t.length&&">"!==t[o];o++)!n&&/(\s|\/)/.test(t[o])&&(n=!0),n||(r+=t[o]);return r===e||(console.warn("Tag is not match tagName, tagName in str is "+r+", which tagName passed from parent is "+e),!1)},t.prototype.__fetchTagAttr__=function(t){for(var e="",r=1;r<t.length&&">"!==t[r];r++)e+=t[r];return{attr:(0,n.getTagAttributes)(e)}},t.prototype.beforeParse=function(){var t=o.default.get().tagListener;if(t){var e=t(this.tagName,{parentTag:this.parentTag,prevTagName:this.prevTagName,nextTagName:this.nextTagName,isFirstSubTag:this.isFirstSubTag,attrs:this.attrs,innerHTML:this.innerHTML,match:this.match,isSelfClosing:!0}),r=e.attrs,n=e.match;this.attrs=r,this.match=n}return""},t.prototype.beforeMergeSpace=function(t){return t},t.prototype.afterMergeSpace=function(t){return t},t.prototype.beforeReturn=function(t){return t},t.prototype.exec=function(t,e){void 0===t&&(t=""),void 0===e&&(e="");var r=this.beforeParse();return r=t+(r=this.beforeMergeSpace(r))+e,r=this.afterMergeSpace(r),r=this.beforeReturn(r)},t}();e.default=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(){}return t.prototype.exec=function(){return""},t}();e.default=n},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(17),o={html:!0,body:!0,p:!0,div:!0,pre:!0,section:!0,blockquote:!0,aside:!0,li:!0,ul:!0,ol:!0,form:!0,hr:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,dl:!0,dd:!0,dt:!0,br:!0};e.default=function(t){if(!t)return!1;var e=(0,n.default)(t);return!!e&&!!o[e]}},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.__EmptySelfClose__=e.__Empty__=void 0;var i=r(0),a=r(4),c=function(t){function e(e,r,n){return void 0===r&&(r="__empty__"),t.call(this,e,r,n)||this}return n(e,t),e.prototype.slim=function(t){return t},e.prototype.parseValidSubTag=function(t,r,n){return new e(t,r,o({},n)).exec()},e.prototype.parseOnlyString=function(t,e,r){return t},e.prototype.exec=function(){return t.prototype.exec.call(this,"","")},e}(i.default);e.__Empty__=c;var u=function(t){function e(e,r){void 0===r&&(r="__emptyselfclose__");var n=t.call(this,e,r)||this;return n.tagName=r,n}return n(e,t),e.prototype.exec=function(){return t.prototype.exec.call(this,"","")},e}(a.default);e.__EmptySelfClose__=u},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0}),e.__SkipSelfClose__=e.__Skip__=void 0;var o=r(0),i=r(4),a=r(1),c=function(t){function e(e,r,n){void 0===r&&(r="__skip__");var o=t.call(this,e,r,n)||this;return o.noNeedWrap=["td","th"],o}return n(e,t),e.prototype.exec=function(){var e=(0,a.isIndependentTag)((0,a.getRealTagName)(this.tagName))&&(!this.parentTag||!this.noNeedWrap.includes(this.parentTag)),r=e?"\n":"",n=e?"\n":"";return t.prototype.exec.call(this,r,n)},e}(o.default);e.__Skip__=c;var u=function(t){function e(e,r,n){return void 0===r&&(r="__skipselfclose__"),t.call(this,e,r,n)||this}return n(e,t),e.prototype.exec=function(){return""},e}(i.default);e.__SkipSelfClose__=u},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(1),o=r(6),i=function(){function t(t,e,r){void 0===e&&(e="__nomatch__");var n=void 0===r?{}:r,o=n.keepSpace,i=void 0!==o&&o,a=n.prevTagName,c=void 0===a?"":a,u=n.nextTagName,s=void 0===u?"":u,l=n.parentTag,p=void 0===l?"":l,f=n.calcLeading,h=void 0!==f&&f,d=n.layer,_=void 0===d?1:d,y=n.leadingSpace,v=void 0===y?"":y,g=n.inTable,b=void 0!==g&&g;this.tagName=e,this.nextTagName=s,this.prevTagName=c,this.parentTag=p,this.keepSpace=i,this.calcLeading=h,this.leadingSpace=v,this.layer=_,this.rawStr=t,this.inTable=b}return t.prototype.slim=function(t){if(this.keepSpace)return t;var e=t.replace(/\s+/g," ");return(0,o.default)(this.prevTagName)&&(e=e.trimLeft()),(0,o.default)(this.nextTagName)&&(e=e.trimRight()),e},t.prototype.beforeReturn=function(t){if(this.keepSpace)return t;if(this.calcLeading)return this.leadingSpace+(0,n.extraEscape)(t);var e=(0,n.extraEscape)(t);return this.inTable&&(e=e.replace(/\|/g,"\\|")),e},t.prototype.exec=function(){var t=this.rawStr;return t=this.slim(t),t=this.beforeReturn(t)},t}();e.default=i},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0}),e.__NoMatchSelfClose__=e.__NoMatch__=void 0;var o=r(0),i=r(4),a=function(t){function e(e,r){return void 0===r&&(r="__nomatch__"),t.call(this,e,r)||this}return n(e,t),e.prototype.beforeMergeSpace=function(t){return"<".concat(this.tagName,">").concat(t,"</").concat(this.tagName,">")},e.prototype.exec=function(){return t.prototype.exec.call(this,"","")},e}(o.default);e.__NoMatch__=a;var c=function(t){function e(e,r){return void 0===r&&(r="__nomatchselfclose__"),t.call(this,e,r)||this}return n(e,t),e.prototype.exec=function(){return"<".concat(this.tagName," />")},e}(i.default);e.__NoMatchSelfClose__=c},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={img:!0,hr:!0,input:!0,br:!0,meta:!0,link:!0,"!doctype":!0,base:!0,col:!0,area:!0,param:!0,object:!0,embed:!0,keygen:!0,source:!0};e.default=function(t){return null!=t&&!!n[t.toLowerCase()]}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.TRIPLE=e.DOUBLE=e.SINGLE=void 0;e.SINGLE="\u2608";e.DOUBLE="\u2608\u2608";e.TRIPLE="\u2608\u2608\u2608"},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r,n){void 0===r&&(r="strong");var o=t.call(this,e,r,n)||this;return o.layer=1,o.match=o.match||"**",o}return n(e,t),e.prototype.beforeMergeSpace=function(t){return this.match+t+this.match},e.prototype.exec=function(e,r){return void 0===e&&(e=""),void 0===r&&(r=""),null!=this.match&&this.prevTagStr&&!this.prevTagStr.endsWith("\\"+this.match[0])&&this.prevTagStr.endsWith(this.match[0])&&(e=" "),t.prototype.exec.call(this,e,r)},e}(r(0).default);e.default=o},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r){void 0===r&&(r="del");var n=t.call(this,e,r)||this;return n.match=n.match||"~~",n}return n(e,t),e.prototype.beforeMergeSpace=function(t){return this.match+t+this.match},e.prototype.exec=function(e,r){return void 0===e&&(e=""),void 0===r&&(r=""),t.prototype.exec.call(this,e,r)},e}(r(0).default);e.default=o},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r,n){void 0===r&&(r="em");var o=t.call(this,e,r,n)||this;return o.match=o.match||"*",o}return n(e,t),e.prototype.beforeMergeSpace=function(t){return this.match+t+this.match},e.prototype.exec=function(e,r){return void 0===e&&(e=""),void 0===r&&(r=""),"strong"===this.parentTag&&this.nextTagStr&&(r=" "),null!=this.match&&this.prevTagStr&&!this.prevTagStr.endsWith("\\"+this.match)&&this.prevTagStr.endsWith(this.match)&&(e=" "),t.prototype.exec.call(this,e,r)},e}(r(0).default);e.default=o},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r,n){void 0===r&&(r="th");var o=t.call(this,e,r,n)||this;return o.tagName=r,o}return n(e,t),e.prototype.beforeMergeSpace=function(t){return t+"|"},e.prototype.parseValidSubTag=function(e,r,n){return"ul"===r||"ol"===r||"table"===r||"pre"===r?e.replace(/([\n\r])/g,""):t.prototype.parseValidSubTag.call(this,e,r,n)},e.prototype.exec=function(e,r){return void 0===e&&(e=""),void 0===r&&(r=""),t.prototype.exec.call(this,e,r)},e}(r(0).default);e.default=o},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(2);e.default=function(t){if(!t)return t;var e=n.default.get().aliasTags;return null!=(null===e||void 0===e?void 0:e[t])?e[t]:t}},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r,n){return void 0===r&&(r="a"),t.call(this,e,r,n)||this}return n(e,t),e.prototype.beforeMergeSpace=function(t){var e=this.attrs,r=e.href,n=e.title,o=r||"";return n?"[".concat(t,"](").concat(o,' "').concat(n,'")'):"[".concat(t,"](").concat(o,")")},e.prototype.parseOnlyString=function(e,r,n){return"tbody"===this.parentTag||"thead"===this.parentTag?e:t.prototype.parseOnlyString.call(this,e,r,n)},e.prototype.exec=function(e,r){return void 0===e&&(e=""),void 0===r&&(r=""),t.prototype.exec.call(this,e,r)},e}(r(0).default);e.default=o},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r,n){return void 0===r&&(r="b"),t.call(this,e,r,n)||this}return n(e,t),e.prototype.exec=function(e,r){return t.prototype.exec.call(this,e,r)},e}(r(13).default);e.default=o},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var i=r(6),a=r(0),c=r(1),u=function(t){function e(e,r,n){void 0===r&&(r="blockquote");var o=t.call(this,e,r,n)||this;return o.match=o.match||">",o.fillPerLine=o.fillPerLine.bind(o),o}return n(e,t),e.prototype.beforeMergeSpace=function(t){if(""===t.trim())return"";var e=this.match+" "+t;return this.calcLeading?this.leadingSpace+e:e},e.prototype.afterMergeSpace=function(t){for(var e=this,r=t.split("\n"),n=r.length-1;n>=0;n--)n<r.length-1&&">"===r[n].trim()&&">"===r[n+1].trim()&&r.splice(n,1);return(r=r.map(function(t){return""===t?"":e.fillPerLine(t)})).join("\n")},e.prototype.beforeReturn=function(t){return t.replace("\n\n","\n")},e.prototype.fillPerLine=function(t){var e=">";if(this.calcLeading&&(e=this.leadingSpace+">"),!t.startsWith(e)){var r=this.match+" "+t;return this.calcLeading?this.leadingSpace+r:r}return t},e.prototype.parseValidSubTag=function(t,e,r){var n;"blockquote"===e?n=new((0,c.getTagConstructor)(e))(t,e,o(o({},r),{calcLeading:this.calcLeading,match:this.match+">",noExtraLine:!0})):n=new((0,c.getTagConstructor)(e))(t,e,o(o({},r),{noExtraLine:!0}));var a=n.exec(),u="";this.calcLeading&&(u=this.leadingSpace);var s=(0,i.default)(r.prevTagName)&&"br"!==r.prevTagName,l=(0,i.default)(r.nextTagName)&&"br"!==r.nextTagName,p=(0,i.default)(e)&&"br"!==e;return this.isFirstSubTag?a.trimLeft().replace(u,""):p?(a=u+this.match+a,s||(a="\n"+a),!l&&r.nextTagStr&&r.nextTagStr.trim()&&(a+=this.match+"\n"),a):s?u+this.match+"\n"+a:a},e.prototype.exec=function(e,r){return void 0===e&&(e="\n"),void 0===r&&(r="\n"),t.prototype.exec.call(this,e,r)},e}(a.default);e.default=u},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r,n){return void 0===r&&(r="b"),t.call(this,e,r,n)||this}return n(e,t),e.prototype.exec=function(t,e){return void 0===e&&(e="\n"),this.inTable?"":"  "+e},e}(r(4).default);e.default=o},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var i=r(0),a=r(1),c=function(t){function e(e,r,n){void 0===r&&(r="code");var o=t.call(this,e,r,n)||this;return o.match=null==o.match?"`":o.match,o.noWrap="`"===o.match,o.layer=1,o}return n(e,t),e.prototype.beforeMergeSpace=function(t){var e,r;return""!==this.match&&"`"!==this.match?(e=this.match+" ",r=" "+this.match):(e=this.match,r=this.match),e+t+r},e.prototype.parseValidSubTag=function(t,e,r){return"pre"===e?new((0,a.getTagConstructor)(e))(t,e,o(o({},r),{language:"",match:""})).exec("","\n"):new((0,a.getTagConstructor)(e))(t,e,o(o({},r),{keepSpace:this.keepSpace,noWrap:this.noWrap})).exec("","")},e.prototype.parseOnlyString=function(t){if(""!==this.match&&t){var e=1;(t.startsWith("`")||t.endsWith("`"))&&(e=2,(t.startsWith("``")||t.endsWith("``"))&&(e=3)),this.match="`".repeat(e)}return(0,a.unescapeStr)(t)},e.prototype.slim=function(t){return this.keepSpace?t:t.trim()},e.prototype.exec=function(e,r){return void 0===e&&(e=""),void 0===r&&(r=""),t.prototype.exec.call(this,e,r)},e}(i.default);e.default=c},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r){void 0===r&&(r="h1");var n=t.call(this,e,r)||this;return n.match="#",n}return n(e,t),e.prototype.exec=function(e,r){return void 0===e&&(e="\n"),void 0===r&&(r="\n"),t.prototype.exec.call(this,e,r)},e}(r(3).default);e.default=o},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r){void 0===r&&(r="h2");var n=t.call(this,e,r)||this;return n.match="##",n}return n(e,t),e.prototype.exec=function(e,r){return void 0===e&&(e="\n"),void 0===r&&(r="\n"),t.prototype.exec.call(this,e,r)},e}(r(3).default);e.default=o},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r){void 0===r&&(r="h3");var n=t.call(this,e,r)||this;return n.match="###",n}return n(e,t),e.prototype.exec=function(e,r){return void 0===e&&(e="\n"),void 0===r&&(r="\n"),t.prototype.exec.call(this,e,r)},e}(r(3).default);e.default=o},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r){void 0===r&&(r="h4");var n=t.call(this,e,r)||this;return n.match="####",n}return n(e,t),e.prototype.exec=function(e,r){return void 0===e&&(e="\n"),void 0===r&&(r="\n"),t.prototype.exec.call(this,e,r)},e}(r(3).default);e.default=o},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r){void 0===r&&(r="h5");var n=t.call(this,e,r)||this;return n.match="#####",n}return n(e,t),e.prototype.exec=function(e,r){return void 0===e&&(e="\n"),void 0===r&&(r="\n"),t.prototype.exec.call(this,e,r)},e}(r(3).default);e.default=o},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r){void 0===r&&(r="h6");var n=t.call(this,e,r)||this;return n.match="######",n}return n(e,t),e.prototype.exec=function(e,r){return void 0===e&&(e="\n"),void 0===r&&(r="\n"),t.prototype.exec.call(this,e,r)},e}(r(3).default);e.default=o},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r,n){void 0===r&&(r="hr");var o=t.call(this,e,r,n)||this;return o.match="---",o}return n(e,t),e.prototype.beforeMergeSpace=function(){return this.leadingSpace+this.match},e.prototype.beforeReturn=function(t){return t.replace(/^(?:\n\s*)/,"\n\n").replace(/(?:\n\s*)$/,"\n\n"),t},e.prototype.exec=function(e,r){return void 0===e&&(e="\n"),void 0===r&&(r="\n"),t.prototype.exec.call(this,e,r)},e}(r(4).default);e.default=o},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r,n){return void 0===r&&(r="i"),t.call(this,e,r,n)||this}return n(e,t),e.prototype.exec=function(e,r){return t.prototype.exec.call(this,e,r)},e}(r(15).default);e.default=o},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r,n){return void 0===r&&(r="img"),t.call(this,e,r,n)||this}return n(e,t),e.prototype.beforeMergeSpace=function(){var t=this.attrs,e=t.src,r=t.alt;return r||(r=""),e||(e=""),"![".concat(r,"](").concat(e,")")},e.prototype.exec=function(e,r){return void 0===e&&(e=""),void 0===r&&(r=""),t.prototype.exec.call(this,e,r)},e}(r(4).default);e.default=o},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r,n){return void 0===r&&(r="input"),t.call(this,e,r,n)||this}return n(e,t),e.prototype.beforeMergeSpace=function(){var t=this.attrs,e=t.type,r=t.checked;return"li"===this.parentTag&&"checkbox"===e?null!=r?"[x] ":"[ ] ":""},e.prototype.exec=function(e,r){return void 0===e&&(e=""),void 0===r&&(r=""),t.prototype.exec.call(this,e,r)},e}(r(4).default);e.default=o},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var i=r(0),a=r(1),c=r(6),u=r(12),s=function(t){function e(e,r,n){void 0===r&&(r="li");var o=t.call(this,e,r,n)||this;return o.match=o.match||"*",o.extraGap="",o}return n(e,t),e.prototype.beforeMergeSpace=function(t){return this.extraGap+this.leadingSpace+this.match+" "+t},e.prototype.__calcNextLeading__=function(){var t,e,r;return 1===(null===(t=this.match)||void 0===t?void 0:t.length)?u.DOUBLE:2===(null===(e=this.match)||void 0===e?void 0:e.length)?u.TRIPLE:3===(null===(r=this.match)||void 0===r?void 0:r.length)?u.DOUBLE:u.TRIPLE+u.DOUBLE},e.prototype.parseValidSubTag=function(t,e,r){var n=(0,a.getTagConstructor)(e),i=this.__calcNextLeading__(),c=new n(t,e,o(o({},r),{calcLeading:!0,leadingSpace:this.leadingSpace+i,layer:this.layer+1})).exec();return"p"===e&&(this.extraGap="\n"),this.isFirstSubTag?c.trimLeft().replace(this.leadingSpace+i,""):c},e.prototype.parseOnlyString=function(e,r,n){var i=!1;(0,c.default)(n.prevTagName)&&(i=!0);var a=this.__calcNextLeading__(),u=t.prototype.parseOnlyString.call(this,e,r,o(o({},n),{calcLeading:i,leadingSpace:this.leadingSpace+a,layer:this.layer+1}));return this.isFirstSubTag?u.replace(this.leadingSpace+a,""):u},e.prototype.beforeReturn=function(e){return t.prototype.beforeReturn.call(this,e)},e.prototype.exec=function(e,r){return void 0===e&&(e="\n"),void 0===r&&(r="\n"),t.prototype.exec.call(this,e,r)},e}(i.default);e.default=s},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var i=r(0),a=r(5),c=r(1),u=r(2),s=function(t){function e(e,r,n){void 0===r&&(r="ol");var o,i=this;i=t.call(this,e,r,n)||this;var a=parseInt(null===(o=null===i||void 0===i?void 0:i.attrs)||void 0===o?void 0:o.start,10);return i.count=isNaN(a)?1:a,i}return n(e,t),e.prototype.__isValidSubTag__=function(t){if(!t)return!1;var e=u.default.get().aliasTags,r=(0,c.getTagConstructor)(t);return"li"===t||"li"==(null===e||void 0===e?void 0:e[t])||r===a.default},e.prototype.getValidSubTagName=function(t){return t&&this.__isValidSubTag__(t)?t:null},e.prototype.parseValidSubTag=function(t,e,r){var n=(0,c.getTagConstructor)(e);if(this.__isValidSubTag__(e)){var i=this.count+".",a=new n(t,e,o(o({},r),{calcLeading:!0,leadingSpace:this.leadingSpace,layer:this.layer,match:i}));return this.count++,a.exec("","\n")}return console.error("Should not have tags except <li> inside ol, current tag is "+e+", current tagStr is"+t),""},e.prototype.parseOnlyString=function(){return""},e.prototype.exec=function(e,r){return void 0===e&&(e="\n"),void 0===r&&(r="\n"),t.prototype.exec.call(this,e,r)},e}(i.default);e.default=s},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r,n){return void 0===r&&(r="p"),t.call(this,e,r,n)||this}return n(e,t),e.prototype.beforeMergeSpace=function(t){return this.calcLeading?this.leadingSpace+t:t},e.prototype.exec=function(e,r){return void 0===e&&(e="\n"),void 0===r&&(r="\n"),this.prevTagName||!this.prevTagStr||this.prevTagStr.endsWith("\n")||(e="\n\n"),this.nextTagName||!this.nextTagStr||this.nextTagStr.startsWith("\n")||(r="\n\n"),t.prototype.exec.call(this,e,r)},e}(r(0).default);e.default=o},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var i=r(0),a=r(7),c=r(1),u=r(12),s=function(t){function e(e,r,n){void 0===r&&(r="pre");var o=t.call(this,e,r,n)||this;return o.indentSpace=u.DOUBLE+u.DOUBLE,o.isIndent=o.innerHTML.includes("```"),o.match=o.isIndent?"":"```",o.language=o.language||(0,c.getLanguage)(e),o.keepSpace=!0,o}return n(e,t),e.prototype.beforeMergeSpace=function(t){var e=this.isIndent||"code"===this.parentTag?"":this.match+this.language+"\n",r="";return t.endsWith("\n")||(r="\n"),e+t+(this.isIndent||"code"===this.parentTag?"":r+this.match)},e.prototype.fillPerLine=function(t){var e="";return this.calcLeading&&(e=this.leadingSpace),this.isIndent?e+this.indentSpace+t:e+t},e.prototype.afterMergeSpace=function(t){var e=this,r=t.split("\n");return(r=r.map(function(t){return""===t?"":e.fillPerLine(t)})).join("\n")},e.prototype.parseValidSubTag=function(t,e,r){if("code"===e)return new((0,c.getTagConstructor)(e))(t,e,o(o({},r),{match:"",language:this.language,keepSpace:!0})).exec("","");return((0,c.isSelfClosing)(e)?new a.__EmptySelfClose__(t,e):new a.__Empty__(t,e,o(o({},r),{keepSpace:!0}))).exec()},e.prototype.parseOnlyString=function(t){return t},e.prototype.slim=function(t){return t},e.prototype.exec=function(e,r){return void 0===e&&(e="\n"),void 0===r&&(r="\n"),t.prototype.exec.call(this,e,r)},e}(i.default);e.default=s},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r){return void 0===r&&(r="s"),t.call(this,e,r)||this}return n(e,t),e.prototype.exec=function(e,r){return t.prototype.exec.call(this,e,r)},e}(r(14).default);e.default=o},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r,n){return void 0===r&&(r="span"),t.call(this,e,r,n)||this}return n(e,t),e.prototype.exec=function(e,r){return void 0===e&&(e=""),void 0===r&&(r=""),t.prototype.exec.call(this,e,r)},e}(r(0).default);e.default=o},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var i=r(0),a=r(1);var c=function(t){function e(e,r,n){void 0===r&&(r="table");var o=t.call(this,e,r,n)||this;return o.exist_thead=!1,o.exist_tbody=!1,o.empty_tbody=!0,o.tableColumnCount=function(t){for(var e="",r=0;r<t.length&&!e.endsWith("</tr>");r++)e+=t[r];return Math.max(e.split("</td>").length-1,e.split("</th>").length-1)}(o.innerHTML),o}return n(e,t),e.prototype.parseValidSubTag=function(t,e,r){return"thead"===e&&(this.exist_thead=!0),"tbody"===e&&(this.exist_tbody=!0,this.empty_tbody=!1),"tr"===e&&(this.empty_tbody=!1),new((0,a.getTagConstructor)(e))(t,e,o(o({},r),{tableColumnCount:this.tableColumnCount,inTable:!0})).exec("","\n")},e.prototype.parseOnlyString=function(){return""},e.prototype.beforeReturn=function(t){if(!this.exist_thead&&!this.exist_tbody&&this.empty_tbody)return"";if(0===this.tableColumnCount)return"";if(!this.exist_tbody){for(var e=(0,a.getTableAlign)(this.innerHTML,this.tableColumnCount),r="|",n=0;n<e.length;n++)r+=e[n];t=this.empty_tbody?t+r+"\n":r+""+t}return this.exist_thead||(t="\n"+"|".repeat(this.tableColumnCount+1)+(t.startsWith("\n")?"":"\n")+t),t},e.prototype.exec=function(e,r){return void 0===e&&(e="\n"),void 0===r&&(r="\n"),t.prototype.exec.call(this,e,r)},e}(i.default);e.default=c},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=r(0),i=r(1),a=function(t){function e(e,r,n){return void 0===r&&(r="tbody"),t.call(this,e,r,n)||this}return n(e,t),e.prototype.beforeMergeSpace=function(t){for(var e=(0,i.getTableAlign)(this.innerHTML,this.tableColumnCount),r="|",n=0;n<e.length;n++)r+=e[n];return r+"\n"+t},e.prototype.parseOnlyString=function(){return""},e.prototype.exec=function(e,r){return void 0===e&&(e=""),void 0===r&&(r=""),t.prototype.exec.call(this,e,r)},e}(o.default);e.default=a},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r,n){return void 0===r&&(r="td"),t.call(this,e,r,n)||this}return n(e,t),e.prototype.parseValidSubTag=function(e,r,n){return"ul"===r||"ol"===r||"table"===r||"pre"===r?e.replace(/([\n\r])/g,""):t.prototype.parseValidSubTag.call(this,e,r,n)},e.prototype.exec=function(e,r){return void 0===e&&(e=""),void 0===r&&(r=""),t.prototype.exec.call(this,e,r)},e}(r(16).default);e.default=o},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,r,n){return void 0===r&&(r="thead"),t.call(this,e,r,n)||this}return n(e,t),e.prototype.exec=function(e,r){return void 0===e&&(e=""),void 0===r&&(r=""),t.prototype.exec.call(this,e,r)},e}(r(0).default);e.default=o},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=r(0),i=r(5),a=r(1),c=r(2),u=function(t){function e(e,r,n){return void 0===r&&(r="tr"),t.call(this,e,r,n)||this}return n(e,t),e.prototype.beforeMergeSpace=function(t){return"|"+t},e.prototype.parseValidSubTag=function(t,e,r){var n=c.default.get().aliasTags,o=(0,a.getTagConstructor)(e);return"td"!==e&&"th"!==e&&"td"!==(null===n||void 0===n?void 0:n[e])&&"th"!==(null===n||void 0===n?void 0:n[e])&&o!==i.default?(console.error("Should not have tags except <td> or <th> inside <tr>, current tag is ".concat(e," have been ignore.")),""):new o(t,e,r).exec("","")},e.prototype.parseOnlyString=function(){return""},e.prototype.exec=function(e,r){return void 0===e&&(e=""),void 0===r&&(r="\n"),t.prototype.exec.call(this,e,r)},e}(o.default);e.default=u},function(t,e,r){"use strict";var n=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var i=r(0),a=r(5),c=r(1),u=r(2).default.get().aliasTags,s=function(t){function e(e,r,n){return void 0===r&&(r="ul"),t.call(this,e,r,n)||this}return n(e,t),e.prototype.__isValidSubTag__=function(t){if(!t)return!1;var e=(0,c.getTagConstructor)(t);return"li"===t||"li"==(null===u||void 0===u?void 0:u[t])||e===a.default},e.prototype.getValidSubTagName=function(t){return t&&this.__isValidSubTag__(t)?t:null},e.prototype.parseValidSubTag=function(t,e,r){var n=(0,c.getTagConstructor)(e);return this.__isValidSubTag__(e)?new n(t,e,o(o({},r),{calcLeading:!0,leadingSpace:this.leadingSpace,layer:this.layer,match:"*"})).exec("","\n"):(console.error("Should not have tags except <li> inside ul, current tag is "+e+", current tagStr is"+t),"")},e.prototype.parseOnlyString=function(){return""},e.prototype.exec=function(e,r){return void 0===e&&(e="\n"),void 0===r&&(r="\n"),t.prototype.exec.call(this,e,r)},e}(i.default);e.default=s},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(1),o=r(2),i=r(9);e.default=function(t,e,r){void 0===r&&(r=!1),o.default.reset(),o.default.set(e,r),t=(t=(t=(0,n.clearComment)(t)).trim()).replace(/(\r\n)/g,"").replace(/&nbsp;/g," ");for(var a=(0,n.generateGetNextValidTag)(t),c="",u=null,s=a(),l=s[0],p=s[1];""!==p;){if(null!=l){var f=new((0,n.getTagConstructor)(l))(p,l,{parentTag:null,prevTagName:u,prevTagStr:c}).exec(),h=(0,n.isIndependentTag)(u);!(0,n.isIndependentTag)(l)||h||c.endsWith("\n")?c+=f:c+="\n"+f}else c=(c+=new i.default(p,l).exec()).replace(/(?:\n\s*)$/,"\n");u=l;var d=a();l=d[0],p=d[1]}return function(t){return t=(t=(t=t.replace(/^\s+/,"")).replace(/\s+$/,"")).replace(/\u2608/g," ")}((0,n.unescapeStr)(c))}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.unescapeStr=e.extraEscape=void 0;var n={},o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#x60;","\u201c":"&ldquo;","\u201d":"&rdquo;"};for(var i in o)n[o[i]]=i;var a=/&(?:amp|lt|gt|quot|#39|#x60|ldquo|rdquo);/g,c=RegExp(a.source),u=[[/\\/g,"\\\\"],[/\*/g,"\\*"],[/^-/g,"\\-"],[/^\+ /g,"\\+ "],[/^(=+)/g,"\\$1"],[/^(#{1,6}) /g,"\\$1 "],[/`/g,"\\`"],[/^~~~/g,"\\~~~"],[/\[/g,"\\["],[/\]/g,"\\]"],[/^>/g,"\\>"],[/_/g,"\\_"],[/^(\d+)\. /g,"$1\\. "]];e.unescapeStr=function(t){return t=t&&c.test(t)?t.replace(a,function(t){return n[t]}):t},e.extraEscape=function(t){return u.reduce(function(t,e){return t.replace(e[0],e[1])},t)}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(11);function o(t,e){for(var r="";e<t.length&&/[a-zA-Z0-9!-]/.test(t[e]);)r+=t[e++];return r.toLowerCase()}e.default=function(t){var e=0;return function(){var r="",i=null,a=0,c=null,u=!1;if(e>=t.length)return[i,r];for(var s=e;s<t.length;s++){if("<"===t[s]&&"/"!==t[s+1]){if(""!==r&&null==i&&!u)return e=s,[i,r];var l=o(t,s+1);null==i&&(i=l),i===l&&a++,(0,n.default)(i)&&(0===--a&&(u=!0),a<0&&console.warn("Tag ".concat(i," is abnormal")))}else if("<"===t[s]&&"/"===t[s+1]){if(null==i){console.warn("Tag is not integrity, current tagStr is ".concat(t.slice(e)));for(var p=s;p<t.length&&">"!==t[p];)p++;s=p;continue}i===(c=o(t,s+2))&&a--,a<=0&&(u=!0)}if(r+=t[s],">"===t[s]&&u)return e=s+1,[i,r];s===t.length-1&&i!==c&&(null!=c&&null!=i&&(r=r.replace("<".concat(i,">"),"").replace("</".concat(c,">"),"")),i=null)}return e=t.length,[i,r]}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(2),o=r(11),i=r(49);e.default=function t(e){var a,c=n.default.get(),u=c.skipTags,s=c.emptyTags,l=c.ignoreTags,p=c.aliasTags,f=c.renderCustomTags,h=(0,o.default)(e);if(null===u||void 0===u?void 0:u.includes(e)){var d=r(8);return h?d.__SkipSelfClose__:d.__Skip__}if(null===s||void 0===s?void 0:s.includes(e)){var _=r(7);return h?_.__EmptySelfClose__:_.__Empty__}if(null===l||void 0===l?void 0:l.includes(e))return r(5).default;if(null!=(null===p||void 0===p?void 0:p[e]))return t(p[e]);var y=e.toLowerCase();if(!0!==f&&!(0,i.default)(y)){if(!1===f||"SKIP"===f)return d=r(8),h?d.__SkipSelfClose__:d.__Skip__;if("EMPTY"===f)return _=r(7),h?_.__EmptySelfClose__:_.__Empty__;if("IGNORE"===f)return r(5).default}try{a=r(50)("./".concat(e)).default}catch(v){a=h?r(10).__NoMatchSelfClose__:r(10).__NoMatch__}return a}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=["!doctype","a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","bgsound","big","blink","blockquote","body","br","button","canvas","caption","center","circle","cite","clipPath","code","col","colgroup","command","content","data","datalist","dd","defs","del","details","dfn","dialog","dir","div","dl","dt","element","ellipse","em","embed","fieldset","figcaption","figure","font","footer","foreignObject","form","frame","frameset","g","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","image","img","input","ins","isindex","kbd","keygen","label","legend","li","line","linearGradient","link","listing","main","map","mark","marquee","mask","math","menu","menuitem","meta","meter","multicol","nav","nextid","nobr","noembed","noframes","noscript","object","ol","optgroup","option","output","p","param","path","pattern","picture","plaintext","polygon","polyline","pre","progress","q","radialGradient","rb","rbc","rect","rp","rt","rtc","ruby","s","samp","script","section","select","shadow","slot","small","source","spacer","span","stop","strike","strong","style","sub","summary","sup","svg","table","tbody","td","template","text","textarea","tfoot","th","thead","time","title","tr","track","tspan","tt","u","ul","var","video","wbr","xmp"];e.default=function(t){return"string"===typeof t&&n.includes(t.toLowerCase())}},function(t,e,r){var n={"./__Heading__":3,"./__Heading__.ts":3,"./__empty__":7,"./__empty__.ts":7,"./__ignore__":5,"./__ignore__.ts":5,"./__nomatch__":10,"./__nomatch__.ts":10,"./__rawString__":9,"./__rawString__.ts":9,"./__skip__":8,"./__skip__.ts":8,"./a":18,"./a.ts":18,"./b":19,"./b.ts":19,"./blockquote":20,"./blockquote.ts":20,"./br":21,"./br.ts":21,"./code":22,"./code.ts":22,"./del":14,"./del.ts":14,"./em":15,"./em.ts":15,"./h1":23,"./h1.ts":23,"./h2":24,"./h2.ts":24,"./h3":25,"./h3.ts":25,"./h4":26,"./h4.ts":26,"./h5":27,"./h5.ts":27,"./h6":28,"./h6.ts":28,"./hr":29,"./hr.ts":29,"./i":30,"./i.ts":30,"./img":31,"./img.ts":31,"./input":32,"./input.ts":32,"./li":33,"./li.ts":33,"./ol":34,"./ol.ts":34,"./p":35,"./p.ts":35,"./pre":36,"./pre.ts":36,"./s":37,"./s.ts":37,"./span":38,"./span.ts":38,"./strong":13,"./strong.ts":13,"./table":39,"./table.ts":39,"./tbody":40,"./tbody.ts":40,"./td":41,"./td.ts":41,"./th":16,"./th.ts":16,"./thead":42,"./thead.ts":42,"./tr":43,"./tr.ts":43,"./ul":44,"./ul.ts":44};function o(t){var e=i(t);return r(e)}function i(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}o.keys=function(){return Object.keys(n)},o.resolve=i,t.exports=o,o.id=50},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){for(var e={},r=!1,n="",o="",i=null,a=0;a<=t.length;a++){if(a===t.length||/\s/.test(t[a])){if(a===t.length||!r){var c=n.trim();"/"===c[c.length-1]&&(c=c.slice(0,c.length-1)),c&&(e[c]=o.trim()),n="",o=""}}else{if(/['"]/.test(t[a])&&(!i||t[a]===i)){(r=!r)&&(i=t[a]);continue}if("="===t[a]&&!r)continue}if(a===t.length)break;r?o+=t[a]:n+=t[a]}return e}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="javascript";e.default=function(t){var e=t.match(/<.*?class=".*?language-([^\s"]*)?.*".*>/);return e?e[1]||"":t.match(/<span.*?hljs-(comment|keyword|number|string|literal|built_in|function|title|bullet).*?<\/span>/)?n:""}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return t.replace(/<!--(?:[\s\S]*?)-->/g,"")}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var r={_default_:"---|",center:":---:|",left:":---|",right:"---:|",start:":---|",end:"---:|"},n=Array(e).fill(r._default_),o=t.match(/<(td|th)(.*?)>/g);return o?n=(n=o.slice(0,e)).map(function(t){var e=t.match(/align\s*=\s*['"]\s*(center|left|right|start|end)/),n=t.match(/text-align\s*:\s*(center|left|right|start|end)/);return e||n?e&&!n?r[e[1]]||r._default_:n?r[n[1]]||r._default_:void 0:r._default_}):n}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=["th","td"]}]).default});

/***/ }),

/***/ "./assets/res/cross.svg":
/*!******************************!*\
  !*** ./assets/res/cross.svg ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyNCAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cG9seWdvbiBwb2ludHM9IjE3LjcsMTYuMiAxMy40LDEyIDE3LjcsNy44IDE2LjIsNi4zIDEyLDEwLjYgNy44LDYuMyA2LjMsNy44IDEwLjYsMTIgNi4zLDE2LjIgNy44LDE3LjcgMTIsMTMuNCAxNi4yLDE3LjcgIi8+Cjwvc3ZnPgo=";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************************!*\
  !*** ./lib/src/content/index.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dompurify */ "./node_modules/dompurify/dist/purify.js");
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var html_to_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-to-md */ "./node_modules/html-to-md/dist/index.js");
/* harmony import */ var html_to_md__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html_to_md__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_res_cross_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/res/cross.svg */ "./assets/res/cross.svg");



let ua = navigator.userAgent;
let browserName = ua.indexOf("Chrome") > -1 ? "Chrome" : "Firefox";
let CORE = browserName === "Chrome" ? chrome : browser;
let contentSelector;
function findContentContainer() {
  let selectedContainer;
  if (contentSelector && document.querySelector(contentSelector)) {
    selectedContainer = document.querySelector(contentSelector);
  } else if (document.head.querySelector("meta[name='articleBody'")) {
    selectedContainer = createContentDivFromMetaTag();
  } else {
    const wordCountOnPage = document.body.innerText.match(/\S+/g).length;
    let paragraphs = document.body.querySelectorAll("p");
    let containerWithMostWords = document.body,
      highestWordCount = 0;
    if (paragraphs.length === 0) {
      paragraphs = document.body.querySelectorAll("div");
    }
    paragraphs.forEach(paragraph => {
      if (paragraph.offsetHeight !== 0) {
        const innerTextWords = paragraph.innerText.match(/\S+/g);
        if (innerTextWords) {
          const wordCount = innerTextWords.length;
          if (wordCount > highestWordCount) {
            highestWordCount = wordCount;
            containerWithMostWords = paragraph;
          }
        }
      }
      if (paragraph.offsetHeight === 0) {
        paragraph.dataset.simpleDelete = true;
      }
    });
    selectedContainer = containerWithMostWords;
    let selectedWordCount = highestWordCount;
    while (selectedWordCount / wordCountOnPage < 0.4 && selectedContainer !== document.body && selectedContainer.parentElement.innerText) {
      selectedContainer = selectedContainer.parentElement;
      selectedWordCount = selectedContainer.innerText.match(/\S+/g).length;
    }
    if (selectedContainer.tagName === "P") {
      selectedContainer = selectedContainer.parentElement;
    }
  }
  return selectedContainer;
}
function extractContent() {
  let selectedContainer = findContentContainer();
  let clonedContainer = selectedContainer.cloneNode(true);
  const anchorTagPattern = /<a\b[^>]*>(.*?)<\/a>/gi;
  clonedContainer.innerHTML = dompurify__WEBPACK_IMPORTED_MODULE_0__.sanitize(clonedContainer.innerHTML.replace(anchorTagPattern, ""));
  const breakPattern = new RegExp("<br/?>[ \r\ns]*<br/?>", "g");
  clonedContainer.innerHTML = dompurify__WEBPACK_IMPORTED_MODULE_0__.sanitize(clonedContainer.innerHTML.replace(breakPattern, "</p><p>"));
  let content = dompurify__WEBPACK_IMPORTED_MODULE_0__.sanitize(clonedContainer.innerHTML);
  content = html_to_md__WEBPACK_IMPORTED_MODULE_1___default()(content);
  return content;
}
function addStylesheet(doc, link, classN) {
  const path = CORE.runtime.getURL(link),
    styleLink = document.createElement("link");
  styleLink.setAttribute("rel", "stylesheet");
  styleLink.setAttribute("type", "text/css");
  styleLink.setAttribute("href", path);
  if (classN) styleLink.className = classN;
  doc.appendChild(styleLink);
  const style = document.createElement("style");
  style.textContent = `
    :host {
      all: initial;
    }
    .summarize-gpt-container * {
     // font-family: sans-serif;
      line-height: normal;
      font-size: 16px;
    }
  `;
  doc.appendChild(style);
}
function copyTextToClipboard(text) {
  var copyButton = document.querySelector("#copy-button");
  navigator.clipboard.writeText(text).then(function () {
    copyButton.textContent = 'Copied';
  }, function () {
    copyButton.textContent = 'Failed';
  });
}
const createElement = ({
  props,
  tag,
  children,
  name
}, elementsObj) => {
  const elemen = document.createElement(tag);
  Object.entries(props).forEach(([key, value]) => {
    if (key === "style") {
      Object.entries(value).forEach(([key2, value2]) => {
        elemen.style[key2] = value2;
      });
    } else {
      elemen[key] = value;
    }
  });
  if (children) {
    children.forEach(x => {
      if (x) {
        const child = createElement(x, elementsObj);
        elemen.appendChild(child);
      }
    });
  }
  if (name && elementsObj) {
    // eslint-disable-next-line no-param-reassign
    elementsObj[name] = elemen;
  }
  return elemen;
};
function createContainer() {
  return createElement({
    tag: "div",
    props: {
      className: "summarize-gpt-container"
    },
    children: [{
      tag: "div",
      props: {
        className: "sumz-min-w-[30%] sumz-max-h-[80%] sumz-max-w-[30%] sumz-fixed sumz-right-4 sumz-top-8 sumz-flex sumz-flex-col sumz-items-center sumz-justify-center sumz-rounded-lg sumz-bg-white sumz-shadow-md"
      },
      children: [
      // heading
      {
        tag: "div",
        props: {
          className: "sumz-flex sumz-h-[40px] sumz-w-full sumz-items-center sumz-justify-between sumz-rounded-t-lg sumz-bg-gray-200 sumz-px-4"
        },
        children: [{
          tag: "div",
          props: {
            id: "summarize__heading-text",
            className: "sumz-text-xxl sumz-font-black sumz-animate-text sumz-bg-gradient-to-r sumz-from-teal-500 sumz-via-purple-500 sumz-to-orange-500 sumz-bg-clip-text sumz-text-transparent"
          }
        }, {
          tag: "img",
          props: {
            id: "summarize__close-button",
            className: "sumz-h-[24px] sumz-w-6 sumz-cursor-pointer sumz-rounded-lg hover:sumz-bg-sky-200",
            src: _assets_res_cross_svg__WEBPACK_IMPORTED_MODULE_2__,
            alt: "close"
          }
        }]
      },
      // divider
      {
        tag: "div",
        props: {
          className: "sumz-w-full sumz-h-1 sumz-bg-gray-300"
        }
      },
      // body
      {
        tag: "div",
        props: {
          className: "sumz-h-full sumz-w-full sumz-overflow-y-auto sumz-px-4 sumz-py-4"
        },
        children: [{
          tag: "div",
          props: {
            id: "summarize__body",
            className: "sumz-text-3-xl sumz-mb-2 sumz-flex sumz-flex-col sumz-whitespace-pre-line sumz-text-gray-700"
          }
        }]
      },
      // divider
      {
        tag: "div",
        props: {
          className: "sumz-w-full sumz-h-1 sumz-bg-gray-200"
        }
      }
      // footer
      ]
    }]
  });
}

async function run() {
  const container = createContainer();
  let root = document.createElement('div');
  root.id = "summarize-root";
  document.body.appendChild(root);
  let shadowRoot = root.attachShadow({
    mode: 'open'
  });

  // Appending the styles to the shadow root
  if (!shadowRoot.querySelector(".summarize-styles")) addStylesheet(shadowRoot, "styles.css", "summarize-styles");
  shadowRoot.appendChild(container);

  // Adding styles to position the root
  root.style.position = 'fixed';
  root.style.zIndex = '9999'; // Make sure it's on top of other elements

  const innerContainerHeading = container.querySelector("#summarize__heading-text");
  innerContainerHeading.innerHTML = '<p>Summarized <a href="https://chat.openai.com/chat" target="_blank" class="sumz-text-sm">by ChatGPT</a></p>';
  const innerContainerBody = container.querySelector("#summarize__body");
  innerContainerBody.innerHTML = '<p>Waiting for ChatGPT response...</p>';
  const closeButton = container.querySelector("#summarize__close-button");
  closeButton.addEventListener("click", function () {
    document.body.removeChild(root);
  });
  let content;
  let selection = window.getSelection();
  if (selection.isCollapsed) {
    content = extractContent();
  } else {
    content = selection.toString();
  }
  const port = CORE.runtime.connect(); //  chrome api 2 retrieve service worker 
  port.onMessage.addListener(function (msg) {
    if (msg.answer) {
      //console.log(msg.answer);
      innerContainerBody.innerHTML = msg.answer;
    } else if (msg.error === "UNAUTHORIZED") {
      innerContainerBody.innerHTML = '<p>Please login at <a href="https://chat.openai.com" target="_blank">chat.openai.com</a></p>';
    } else {
      innerContainerBody.innerHTML = "<p>Failed to load response from ChatGPT</p>";
    }
  });
  port.postMessage({
    content
  });
}
run();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QixnQkFBZ0IsUUFBUTtBQUN4QixnQkFBZ0IsUUFBUTtBQUN4QixnQkFBZ0Is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QUFPLEdBQUdULGNBQWMsQ0FBQyxDQUFDO0VBQzVCLENBQUMsTUFBTTtJQUNMUyxPQUFPLEdBQUdvRCxTQUFTLENBQUNJLFFBQVEsQ0FBQyxDQUFDO0VBQ2hDO0VBRUEsTUFBTUMsSUFBSSxHQUFHL0YsSUFBSSxDQUFDNEMsT0FBTyxDQUFDb0QsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUNwQ0QsSUFBSSxDQUFDRSxTQUFTLENBQUNDLFdBQVcsQ0FBQyxVQUFVQyxHQUFHLEVBQUU7SUFDeEMsSUFBSUEsR0FBRyxDQUFDQyxNQUFNLEVBQUU7TUFDZDtNQUNBZCxrQkFBa0IsQ0FBQ3JELFNBQVMsR0FBR2tFLEdBQUcsQ0FBQ0MsTUFBTTtJQUMzQyxDQUFDLE1BQU0sSUFBSUQsR0FBRyxDQUFDRSxLQUFLLEtBQUssY0FBYyxFQUFFO01BQ3ZDZixrQkFBa0IsQ0FBQ3JELFNBQVMsR0FDMUIsOEZBQThGO0lBQ2xHLENBQUMsTUFBTTtNQUNMcUQsa0JBQWtCLENBQUNyRCxTQUFTLEdBQUcsNkNBQTZDO0lBQzlFO0VBQ0YsQ0FBQyxDQUFDO0VBQ0Y4RCxJQUFJLENBQUNPLFdBQVcsQ0FBQztJQUFFaEU7RUFBUSxDQUFDLENBQUM7QUFDL0I7QUFFQXVDLEdBQUcsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdW1tYXJpemUtZ3B0Ly4vbm9kZV9tb2R1bGVzL2RvbXB1cmlmeS9kaXN0L3B1cmlmeS5qcyIsIndlYnBhY2s6Ly9zdW1tYXJpemUtZ3B0Ly4vbm9kZV9tb2R1bGVzL2h0bWwtdG8tbWQvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdW1tYXJpemUtZ3B0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N1bW1hcml6ZS1ncHQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc3VtbWFyaXplLWdwdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3VtbWFyaXplLWdwdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3N1bW1hcml6ZS1ncHQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zdW1tYXJpemUtZ3B0Ly4vbGliL3NyYy9jb250ZW50L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISBAbGljZW5zZSBET01QdXJpZnkgMi40LjcgfCAoYykgQ3VyZTUzIGFuZCBvdGhlciBjb250cmlidXRvcnMgfCBSZWxlYXNlZCB1bmRlciB0aGUgQXBhY2hlIGxpY2Vuc2UgMi4wIGFuZCBNb3ppbGxhIFB1YmxpYyBMaWNlbnNlIDIuMCB8IGdpdGh1Yi5jb20vY3VyZTUzL0RPTVB1cmlmeS9ibG9iLzIuNC43L0xJQ0VOU0UgKi9cblxuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAoZ2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsVGhpcyA6IGdsb2JhbCB8fCBzZWxmLCBnbG9iYWwuRE9NUHVyaWZ5ID0gZmFjdG9yeSgpKTtcbn0pKHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICAgIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfSwgX3R5cGVvZihvYmopO1xuICB9XG5cbiAgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICAgIG8uX19wcm90b19fID0gcDtcbiAgICAgIHJldHVybiBvO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xuICB9XG5cbiAgZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgICBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlO1xuXG4gICAgdHJ5IHtcbiAgICAgIEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgICBpZiAoX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpKSB7XG4gICAgICBfY29uc3RydWN0ID0gUmVmbGVjdC5jb25zdHJ1Y3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9jb25zdHJ1Y3QgPSBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgICAgICAgdmFyIGEgPSBbbnVsbF07XG4gICAgICAgIGEucHVzaC5hcHBseShhLCBhcmdzKTtcbiAgICAgICAgdmFyIENvbnN0cnVjdG9yID0gRnVuY3Rpb24uYmluZC5hcHBseShQYXJlbnQsIGEpO1xuICAgICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTtcbiAgICAgICAgaWYgKENsYXNzKSBfc2V0UHJvdG90eXBlT2YoaW5zdGFuY2UsIENsYXNzLnByb3RvdHlwZSk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpO1xuICB9XG5cbiAgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG4gIH1cblxuICBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gICAgaWYgKCFvKSByZXR1cm47XG4gICAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gICAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIH1cblxuICBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICAgIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuXG4gICAgcmV0dXJuIGFycjI7XG4gIH1cblxuICBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG4gIH1cblxuICB2YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QuaGFzT3duUHJvcGVydHksXG4gICAgICBzZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZixcbiAgICAgIGlzRnJvemVuID0gT2JqZWN0LmlzRnJvemVuLFxuICAgICAgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YsXG4gICAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICB2YXIgZnJlZXplID0gT2JqZWN0LmZyZWV6ZSxcbiAgICAgIHNlYWwgPSBPYmplY3Quc2VhbCxcbiAgICAgIGNyZWF0ZSA9IE9iamVjdC5jcmVhdGU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0c1xuXG4gIHZhciBfcmVmID0gdHlwZW9mIFJlZmxlY3QgIT09ICd1bmRlZmluZWQnICYmIFJlZmxlY3QsXG4gICAgICBhcHBseSA9IF9yZWYuYXBwbHksXG4gICAgICBjb25zdHJ1Y3QgPSBfcmVmLmNvbnN0cnVjdDtcblxuICBpZiAoIWFwcGx5KSB7XG4gICAgYXBwbHkgPSBmdW5jdGlvbiBhcHBseShmdW4sIHRoaXNWYWx1ZSwgYXJncykge1xuICAgICAgcmV0dXJuIGZ1bi5hcHBseSh0aGlzVmFsdWUsIGFyZ3MpO1xuICAgIH07XG4gIH1cblxuICBpZiAoIWZyZWV6ZSkge1xuICAgIGZyZWV6ZSA9IGZ1bmN0aW9uIGZyZWV6ZSh4KSB7XG4gICAgICByZXR1cm4geDtcbiAgICB9O1xuICB9XG5cbiAgaWYgKCFzZWFsKSB7XG4gICAgc2VhbCA9IGZ1bmN0aW9uIHNlYWwoeCkge1xuICAgICAgcmV0dXJuIHg7XG4gICAgfTtcbiAgfVxuXG4gIGlmICghY29uc3RydWN0KSB7XG4gICAgY29uc3RydWN0ID0gZnVuY3Rpb24gY29uc3RydWN0KEZ1bmMsIGFyZ3MpIHtcbiAgICAgIHJldHVybiBfY29uc3RydWN0KEZ1bmMsIF90b0NvbnN1bWFibGVBcnJheShhcmdzKSk7XG4gICAgfTtcbiAgfVxuXG4gIHZhciBhcnJheUZvckVhY2ggPSB1bmFwcGx5KEFycmF5LnByb3RvdHlwZS5mb3JFYWNoKTtcbiAgdmFyIGFycmF5UG9wID0gdW5hcHBseShBcnJheS5wcm90b3R5cGUucG9wKTtcbiAgdmFyIGFycmF5UHVzaCA9IHVuYXBwbHkoQXJyYXkucHJvdG90eXBlLnB1c2gpO1xuICB2YXIgc3RyaW5nVG9Mb3dlckNhc2UgPSB1bmFwcGx5KFN0cmluZy5wcm90b3R5cGUudG9Mb3dlckNhc2UpO1xuICB2YXIgc3RyaW5nVG9TdHJpbmcgPSB1bmFwcGx5KFN0cmluZy5wcm90b3R5cGUudG9TdHJpbmcpO1xuICB2YXIgc3RyaW5nTWF0Y2ggPSB1bmFwcGx5KFN0cmluZy5wcm90b3R5cGUubWF0Y2gpO1xuICB2YXIgc3RyaW5nUmVwbGFjZSA9IHVuYXBwbHkoU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlKTtcbiAgdmFyIHN0cmluZ0luZGV4T2YgPSB1bmFwcGx5KFN0cmluZy5wcm90b3R5cGUuaW5kZXhPZik7XG4gIHZhciBzdHJpbmdUcmltID0gdW5hcHBseShTdHJpbmcucHJvdG90eXBlLnRyaW0pO1xuICB2YXIgcmVnRXhwVGVzdCA9IHVuYXBwbHkoUmVnRXhwLnByb3RvdHlwZS50ZXN0KTtcbiAgdmFyIHR5cGVFcnJvckNyZWF0ZSA9IHVuY29uc3RydWN0KFR5cGVFcnJvcik7XG4gIGZ1bmN0aW9uIHVuYXBwbHkoZnVuYykge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGhpc0FyZykge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFwcGx5KGZ1bmMsIHRoaXNBcmcsIGFyZ3MpO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gdW5jb25zdHJ1Y3QoZnVuYykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29uc3RydWN0KGZ1bmMsIGFyZ3MpO1xuICAgIH07XG4gIH1cbiAgLyogQWRkIHByb3BlcnRpZXMgdG8gYSBsb29rdXAgdGFibGUgKi9cblxuICBmdW5jdGlvbiBhZGRUb1NldChzZXQsIGFycmF5LCB0cmFuc2Zvcm1DYXNlRnVuYykge1xuICAgIHZhciBfdHJhbnNmb3JtQ2FzZUZ1bmM7XG5cbiAgICB0cmFuc2Zvcm1DYXNlRnVuYyA9IChfdHJhbnNmb3JtQ2FzZUZ1bmMgPSB0cmFuc2Zvcm1DYXNlRnVuYykgIT09IG51bGwgJiYgX3RyYW5zZm9ybUNhc2VGdW5jICE9PSB2b2lkIDAgPyBfdHJhbnNmb3JtQ2FzZUZ1bmMgOiBzdHJpbmdUb0xvd2VyQ2FzZTtcblxuICAgIGlmIChzZXRQcm90b3R5cGVPZikge1xuICAgICAgLy8gTWFrZSAnaW4nIGFuZCB0cnV0aHkgY2hlY2tzIGxpa2UgQm9vbGVhbihzZXQuY29uc3RydWN0b3IpXG4gICAgICAvLyBpbmRlcGVuZGVudCBvZiBhbnkgcHJvcGVydGllcyBkZWZpbmVkIG9uIE9iamVjdC5wcm90b3R5cGUuXG4gICAgICAvLyBQcmV2ZW50IHByb3RvdHlwZSBzZXR0ZXJzIGZyb20gaW50ZXJjZXB0aW5nIHNldCBhcyBhIHRoaXMgdmFsdWUuXG4gICAgICBzZXRQcm90b3R5cGVPZihzZXQsIG51bGwpO1xuICAgIH1cblxuICAgIHZhciBsID0gYXJyYXkubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGwtLSkge1xuICAgICAgdmFyIGVsZW1lbnQgPSBhcnJheVtsXTtcblxuICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgbGNFbGVtZW50ID0gdHJhbnNmb3JtQ2FzZUZ1bmMoZWxlbWVudCk7XG5cbiAgICAgICAgaWYgKGxjRWxlbWVudCAhPT0gZWxlbWVudCkge1xuICAgICAgICAgIC8vIENvbmZpZyBwcmVzZXRzIChlLmcuIHRhZ3MuanMsIGF0dHJzLmpzKSBhcmUgaW1tdXRhYmxlLlxuICAgICAgICAgIGlmICghaXNGcm96ZW4oYXJyYXkpKSB7XG4gICAgICAgICAgICBhcnJheVtsXSA9IGxjRWxlbWVudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlbGVtZW50ID0gbGNFbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNldFtlbGVtZW50XSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNldDtcbiAgfVxuICAvKiBTaGFsbG93IGNsb25lIGFuIG9iamVjdCAqL1xuXG4gIGZ1bmN0aW9uIGNsb25lKG9iamVjdCkge1xuICAgIHZhciBuZXdPYmplY3QgPSBjcmVhdGUobnVsbCk7XG4gICAgdmFyIHByb3BlcnR5O1xuXG4gICAgZm9yIChwcm9wZXJ0eSBpbiBvYmplY3QpIHtcbiAgICAgIGlmIChhcHBseShoYXNPd25Qcm9wZXJ0eSwgb2JqZWN0LCBbcHJvcGVydHldKSA9PT0gdHJ1ZSkge1xuICAgICAgICBuZXdPYmplY3RbcHJvcGVydHldID0gb2JqZWN0W3Byb3BlcnR5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3T2JqZWN0O1xuICB9XG4gIC8qIElFMTAgZG9lc24ndCBzdXBwb3J0IF9fbG9va3VwR2V0dGVyX18gc28gbGV0cydcbiAgICogc2ltdWxhdGUgaXQuIEl0IGFsc28gYXV0b21hdGljYWxseSBjaGVja3NcbiAgICogaWYgdGhlIHByb3AgaXMgZnVuY3Rpb24gb3IgZ2V0dGVyIGFuZCBiZWhhdmVzXG4gICAqIGFjY29yZGluZ2x5LiAqL1xuXG4gIGZ1bmN0aW9uIGxvb2t1cEdldHRlcihvYmplY3QsIHByb3ApIHtcbiAgICB3aGlsZSAob2JqZWN0ICE9PSBudWxsKSB7XG4gICAgICB2YXIgZGVzYyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3ApO1xuXG4gICAgICBpZiAoZGVzYykge1xuICAgICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgICByZXR1cm4gdW5hcHBseShkZXNjLmdldCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGRlc2MudmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gdW5hcHBseShkZXNjLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBvYmplY3QgPSBnZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZhbGxiYWNrVmFsdWUoZWxlbWVudCkge1xuICAgICAgY29uc29sZS53YXJuKCdmYWxsYmFjayB2YWx1ZSBmb3InLCBlbGVtZW50KTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxsYmFja1ZhbHVlO1xuICB9XG5cbiAgdmFyIGh0bWwkMSA9IGZyZWV6ZShbJ2EnLCAnYWJicicsICdhY3JvbnltJywgJ2FkZHJlc3MnLCAnYXJlYScsICdhcnRpY2xlJywgJ2FzaWRlJywgJ2F1ZGlvJywgJ2InLCAnYmRpJywgJ2JkbycsICdiaWcnLCAnYmxpbmsnLCAnYmxvY2txdW90ZScsICdib2R5JywgJ2JyJywgJ2J1dHRvbicsICdjYW52YXMnLCAnY2FwdGlvbicsICdjZW50ZXInLCAnY2l0ZScsICdjb2RlJywgJ2NvbCcsICdjb2xncm91cCcsICdjb250ZW50JywgJ2RhdGEnLCAnZGF0YWxpc3QnLCAnZGQnLCAnZGVjb3JhdG9yJywgJ2RlbCcsICdkZXRhaWxzJywgJ2RmbicsICdkaWFsb2cnLCAnZGlyJywgJ2RpdicsICdkbCcsICdkdCcsICdlbGVtZW50JywgJ2VtJywgJ2ZpZWxkc2V0JywgJ2ZpZ2NhcHRpb24nLCAnZmlndXJlJywgJ2ZvbnQnLCAnZm9vdGVyJywgJ2Zvcm0nLCAnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnLCAnaGVhZCcsICdoZWFkZXInLCAnaGdyb3VwJywgJ2hyJywgJ2h0bWwnLCAnaScsICdpbWcnLCAnaW5wdXQnLCAnaW5zJywgJ2tiZCcsICdsYWJlbCcsICdsZWdlbmQnLCAnbGknLCAnbWFpbicsICdtYXAnLCAnbWFyaycsICdtYXJxdWVlJywgJ21lbnUnLCAnbWVudWl0ZW0nLCAnbWV0ZXInLCAnbmF2JywgJ25vYnInLCAnb2wnLCAnb3B0Z3JvdXAnLCAnb3B0aW9uJywgJ291dHB1dCcsICdwJywgJ3BpY3R1cmUnLCAncHJlJywgJ3Byb2dyZXNzJywgJ3EnLCAncnAnLCAncnQnLCAncnVieScsICdzJywgJ3NhbXAnLCAnc2VjdGlvbicsICdzZWxlY3QnLCAnc2hhZG93JywgJ3NtYWxsJywgJ3NvdXJjZScsICdzcGFjZXInLCAnc3BhbicsICdzdHJpa2UnLCAnc3Ryb25nJywgJ3N0eWxlJywgJ3N1YicsICdzdW1tYXJ5JywgJ3N1cCcsICd0YWJsZScsICd0Ym9keScsICd0ZCcsICd0ZW1wbGF0ZScsICd0ZXh0YXJlYScsICd0Zm9vdCcsICd0aCcsICd0aGVhZCcsICd0aW1lJywgJ3RyJywgJ3RyYWNrJywgJ3R0JywgJ3UnLCAndWwnLCAndmFyJywgJ3ZpZGVvJywgJ3diciddKTsgLy8gU1ZHXG5cbiAgdmFyIHN2ZyQxID0gZnJlZXplKFsnc3ZnJywgJ2EnLCAnYWx0Z2x5cGgnLCAnYWx0Z2x5cGhkZWYnLCAnYWx0Z2x5cGhpdGVtJywgJ2FuaW1hdGVjb2xvcicsICdhbmltYXRlbW90aW9uJywgJ2FuaW1hdGV0cmFuc2Zvcm0nLCAnY2lyY2xlJywgJ2NsaXBwYXRoJywgJ2RlZnMnLCAnZGVzYycsICdlbGxpcHNlJywgJ2ZpbHRlcicsICdmb250JywgJ2cnLCAnZ2x5cGgnLCAnZ2x5cGhyZWYnLCAnaGtlcm4nLCAnaW1hZ2UnLCAnbGluZScsICdsaW5lYXJncmFkaWVudCcsICdtYXJrZXInLCAnbWFzaycsICdtZXRhZGF0YScsICdtcGF0aCcsICdwYXRoJywgJ3BhdHRlcm4nLCAncG9seWdvbicsICdwb2x5bGluZScsICdyYWRpYWxncmFkaWVudCcsICdyZWN0JywgJ3N0b3AnLCAnc3R5bGUnLCAnc3dpdGNoJywgJ3N5bWJvbCcsICd0ZXh0JywgJ3RleHRwYXRoJywgJ3RpdGxlJywgJ3RyZWYnLCAndHNwYW4nLCAndmlldycsICd2a2VybiddKTtcbiAgdmFyIHN2Z0ZpbHRlcnMgPSBmcmVlemUoWydmZUJsZW5kJywgJ2ZlQ29sb3JNYXRyaXgnLCAnZmVDb21wb25lbnRUcmFuc2ZlcicsICdmZUNvbXBvc2l0ZScsICdmZUNvbnZvbHZlTWF0cml4JywgJ2ZlRGlmZnVzZUxpZ2h0aW5nJywgJ2ZlRGlzcGxhY2VtZW50TWFwJywgJ2ZlRGlzdGFudExpZ2h0JywgJ2ZlRmxvb2QnLCAnZmVGdW5jQScsICdmZUZ1bmNCJywgJ2ZlRnVuY0cnLCAnZmVGdW5jUicsICdmZUdhdXNzaWFuQmx1cicsICdmZUltYWdlJywgJ2ZlTWVyZ2UnLCAnZmVNZXJnZU5vZGUnLCAnZmVNb3JwaG9sb2d5JywgJ2ZlT2Zmc2V0JywgJ2ZlUG9pbnRMaWdodCcsICdmZVNwZWN1bGFyTGlnaHRpbmcnLCAnZmVTcG90TGlnaHQnLCAnZmVUaWxlJywgJ2ZlVHVyYnVsZW5jZSddKTsgLy8gTGlzdCBvZiBTVkcgZWxlbWVudHMgdGhhdCBhcmUgZGlzYWxsb3dlZCBieSBkZWZhdWx0LlxuICAvLyBXZSBzdGlsbCBuZWVkIHRvIGtub3cgdGhlbSBzbyB0aGF0IHdlIGNhbiBkbyBuYW1lc3BhY2VcbiAgLy8gY2hlY2tzIHByb3Blcmx5IGluIGNhc2Ugb25lIHdhbnRzIHRvIGFkZCB0aGVtIHRvXG4gIC8vIGFsbG93LWxpc3QuXG5cbiAgdmFyIHN2Z0Rpc2FsbG93ZWQgPSBmcmVlemUoWydhbmltYXRlJywgJ2NvbG9yLXByb2ZpbGUnLCAnY3Vyc29yJywgJ2Rpc2NhcmQnLCAnZmVkcm9wc2hhZG93JywgJ2ZvbnQtZmFjZScsICdmb250LWZhY2UtZm9ybWF0JywgJ2ZvbnQtZmFjZS1uYW1lJywgJ2ZvbnQtZmFjZS1zcmMnLCAnZm9udC1mYWNlLXVyaScsICdmb3JlaWdub2JqZWN0JywgJ2hhdGNoJywgJ2hhdGNocGF0aCcsICdtZXNoJywgJ21lc2hncmFkaWVudCcsICdtZXNocGF0Y2gnLCAnbWVzaHJvdycsICdtaXNzaW5nLWdseXBoJywgJ3NjcmlwdCcsICdzZXQnLCAnc29saWRjb2xvcicsICd1bmtub3duJywgJ3VzZSddKTtcbiAgdmFyIG1hdGhNbCQxID0gZnJlZXplKFsnbWF0aCcsICdtZW5jbG9zZScsICdtZXJyb3InLCAnbWZlbmNlZCcsICdtZnJhYycsICdtZ2x5cGgnLCAnbWknLCAnbWxhYmVsZWR0cicsICdtbXVsdGlzY3JpcHRzJywgJ21uJywgJ21vJywgJ21vdmVyJywgJ21wYWRkZWQnLCAnbXBoYW50b20nLCAnbXJvb3QnLCAnbXJvdycsICdtcycsICdtc3BhY2UnLCAnbXNxcnQnLCAnbXN0eWxlJywgJ21zdWInLCAnbXN1cCcsICdtc3Vic3VwJywgJ210YWJsZScsICdtdGQnLCAnbXRleHQnLCAnbXRyJywgJ211bmRlcicsICdtdW5kZXJvdmVyJ10pOyAvLyBTaW1pbGFybHkgdG8gU1ZHLCB3ZSB3YW50IHRvIGtub3cgYWxsIE1hdGhNTCBlbGVtZW50cyxcbiAgLy8gZXZlbiB0aG9zZSB0aGF0IHdlIGRpc2FsbG93IGJ5IGRlZmF1bHQuXG5cbiAgdmFyIG1hdGhNbERpc2FsbG93ZWQgPSBmcmVlemUoWydtYWN0aW9uJywgJ21hbGlnbmdyb3VwJywgJ21hbGlnbm1hcmsnLCAnbWxvbmdkaXYnLCAnbXNjYXJyaWVzJywgJ21zY2FycnknLCAnbXNncm91cCcsICdtc3RhY2snLCAnbXNsaW5lJywgJ21zcm93JywgJ3NlbWFudGljcycsICdhbm5vdGF0aW9uJywgJ2Fubm90YXRpb24teG1sJywgJ21wcmVzY3JpcHRzJywgJ25vbmUnXSk7XG4gIHZhciB0ZXh0ID0gZnJlZXplKFsnI3RleHQnXSk7XG5cbiAgdmFyIGh0bWwgPSBmcmVlemUoWydhY2NlcHQnLCAnYWN0aW9uJywgJ2FsaWduJywgJ2FsdCcsICdhdXRvY2FwaXRhbGl6ZScsICdhdXRvY29tcGxldGUnLCAnYXV0b3BpY3R1cmVpbnBpY3R1cmUnLCAnYXV0b3BsYXknLCAnYmFja2dyb3VuZCcsICdiZ2NvbG9yJywgJ2JvcmRlcicsICdjYXB0dXJlJywgJ2NlbGxwYWRkaW5nJywgJ2NlbGxzcGFjaW5nJywgJ2NoZWNrZWQnLCAnY2l0ZScsICdjbGFzcycsICdjbGVhcicsICdjb2xvcicsICdjb2xzJywgJ2NvbHNwYW4nLCAnY29udHJvbHMnLCAnY29udHJvbHNsaXN0JywgJ2Nvb3JkcycsICdjcm9zc29yaWdpbicsICdkYXRldGltZScsICdkZWNvZGluZycsICdkZWZhdWx0JywgJ2RpcicsICdkaXNhYmxlZCcsICdkaXNhYmxlcGljdHVyZWlucGljdHVyZScsICdkaXNhYmxlcmVtb3RlcGxheWJhY2snLCAnZG93bmxvYWQnLCAnZHJhZ2dhYmxlJywgJ2VuY3R5cGUnLCAnZW50ZXJrZXloaW50JywgJ2ZhY2UnLCAnZm9yJywgJ2hlYWRlcnMnLCAnaGVpZ2h0JywgJ2hpZGRlbicsICdoaWdoJywgJ2hyZWYnLCAnaHJlZmxhbmcnLCAnaWQnLCAnaW5wdXRtb2RlJywgJ2ludGVncml0eScsICdpc21hcCcsICdraW5kJywgJ2xhYmVsJywgJ2xhbmcnLCAnbGlzdCcsICdsb2FkaW5nJywgJ2xvb3AnLCAnbG93JywgJ21heCcsICdtYXhsZW5ndGgnLCAnbWVkaWEnLCAnbWV0aG9kJywgJ21pbicsICdtaW5sZW5ndGgnLCAnbXVsdGlwbGUnLCAnbXV0ZWQnLCAnbmFtZScsICdub25jZScsICdub3NoYWRlJywgJ25vdmFsaWRhdGUnLCAnbm93cmFwJywgJ29wZW4nLCAnb3B0aW11bScsICdwYXR0ZXJuJywgJ3BsYWNlaG9sZGVyJywgJ3BsYXlzaW5saW5lJywgJ3Bvc3RlcicsICdwcmVsb2FkJywgJ3B1YmRhdGUnLCAncmFkaW9ncm91cCcsICdyZWFkb25seScsICdyZWwnLCAncmVxdWlyZWQnLCAncmV2JywgJ3JldmVyc2VkJywgJ3JvbGUnLCAncm93cycsICdyb3dzcGFuJywgJ3NwZWxsY2hlY2snLCAnc2NvcGUnLCAnc2VsZWN0ZWQnLCAnc2hhcGUnLCAnc2l6ZScsICdzaXplcycsICdzcGFuJywgJ3NyY2xhbmcnLCAnc3RhcnQnLCAnc3JjJywgJ3NyY3NldCcsICdzdGVwJywgJ3N0eWxlJywgJ3N1bW1hcnknLCAndGFiaW5kZXgnLCAndGl0bGUnLCAndHJhbnNsYXRlJywgJ3R5cGUnLCAndXNlbWFwJywgJ3ZhbGlnbicsICd2YWx1ZScsICd3aWR0aCcsICd4bWxucycsICdzbG90J10pO1xuICB2YXIgc3ZnID0gZnJlZXplKFsnYWNjZW50LWhlaWdodCcsICdhY2N1bXVsYXRlJywgJ2FkZGl0aXZlJywgJ2FsaWdubWVudC1iYXNlbGluZScsICdhc2NlbnQnLCAnYXR0cmlidXRlbmFtZScsICdhdHRyaWJ1dGV0eXBlJywgJ2F6aW11dGgnLCAnYmFzZWZyZXF1ZW5jeScsICdiYXNlbGluZS1zaGlmdCcsICdiZWdpbicsICdiaWFzJywgJ2J5JywgJ2NsYXNzJywgJ2NsaXAnLCAnY2xpcHBhdGh1bml0cycsICdjbGlwLXBhdGgnLCAnY2xpcC1ydWxlJywgJ2NvbG9yJywgJ2NvbG9yLWludGVycG9sYXRpb24nLCAnY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzJywgJ2NvbG9yLXByb2ZpbGUnLCAnY29sb3ItcmVuZGVyaW5nJywgJ2N4JywgJ2N5JywgJ2QnLCAnZHgnLCAnZHknLCAnZGlmZnVzZWNvbnN0YW50JywgJ2RpcmVjdGlvbicsICdkaXNwbGF5JywgJ2Rpdmlzb3InLCAnZHVyJywgJ2VkZ2Vtb2RlJywgJ2VsZXZhdGlvbicsICdlbmQnLCAnZmlsbCcsICdmaWxsLW9wYWNpdHknLCAnZmlsbC1ydWxlJywgJ2ZpbHRlcicsICdmaWx0ZXJ1bml0cycsICdmbG9vZC1jb2xvcicsICdmbG9vZC1vcGFjaXR5JywgJ2ZvbnQtZmFtaWx5JywgJ2ZvbnQtc2l6ZScsICdmb250LXNpemUtYWRqdXN0JywgJ2ZvbnQtc3RyZXRjaCcsICdmb250LXN0eWxlJywgJ2ZvbnQtdmFyaWFudCcsICdmb250LXdlaWdodCcsICdmeCcsICdmeScsICdnMScsICdnMicsICdnbHlwaC1uYW1lJywgJ2dseXBocmVmJywgJ2dyYWRpZW50dW5pdHMnLCAnZ3JhZGllbnR0cmFuc2Zvcm0nLCAnaGVpZ2h0JywgJ2hyZWYnLCAnaWQnLCAnaW1hZ2UtcmVuZGVyaW5nJywgJ2luJywgJ2luMicsICdrJywgJ2sxJywgJ2syJywgJ2szJywgJ2s0JywgJ2tlcm5pbmcnLCAna2V5cG9pbnRzJywgJ2tleXNwbGluZXMnLCAna2V5dGltZXMnLCAnbGFuZycsICdsZW5ndGhhZGp1c3QnLCAnbGV0dGVyLXNwYWNpbmcnLCAna2VybmVsbWF0cml4JywgJ2tlcm5lbHVuaXRsZW5ndGgnLCAnbGlnaHRpbmctY29sb3InLCAnbG9jYWwnLCAnbWFya2VyLWVuZCcsICdtYXJrZXItbWlkJywgJ21hcmtlci1zdGFydCcsICdtYXJrZXJoZWlnaHQnLCAnbWFya2VydW5pdHMnLCAnbWFya2Vyd2lkdGgnLCAnbWFza2NvbnRlbnR1bml0cycsICdtYXNrdW5pdHMnLCAnbWF4JywgJ21hc2snLCAnbWVkaWEnLCAnbWV0aG9kJywgJ21vZGUnLCAnbWluJywgJ25hbWUnLCAnbnVtb2N0YXZlcycsICdvZmZzZXQnLCAnb3BlcmF0b3InLCAnb3BhY2l0eScsICdvcmRlcicsICdvcmllbnQnLCAnb3JpZW50YXRpb24nLCAnb3JpZ2luJywgJ292ZXJmbG93JywgJ3BhaW50LW9yZGVyJywgJ3BhdGgnLCAncGF0aGxlbmd0aCcsICdwYXR0ZXJuY29udGVudHVuaXRzJywgJ3BhdHRlcm50cmFuc2Zvcm0nLCAncGF0dGVybnVuaXRzJywgJ3BvaW50cycsICdwcmVzZXJ2ZWFscGhhJywgJ3ByZXNlcnZlYXNwZWN0cmF0aW8nLCAncHJpbWl0aXZldW5pdHMnLCAncicsICdyeCcsICdyeScsICdyYWRpdXMnLCAncmVmeCcsICdyZWZ5JywgJ3JlcGVhdGNvdW50JywgJ3JlcGVhdGR1cicsICdyZXN0YXJ0JywgJ3Jlc3VsdCcsICdyb3RhdGUnLCAnc2NhbGUnLCAnc2VlZCcsICdzaGFwZS1yZW5kZXJpbmcnLCAnc3BlY3VsYXJjb25zdGFudCcsICdzcGVjdWxhcmV4cG9uZW50JywgJ3NwcmVhZG1ldGhvZCcsICdzdGFydG9mZnNldCcsICdzdGRkZXZpYXRpb24nLCAnc3RpdGNodGlsZXMnLCAnc3RvcC1jb2xvcicsICdzdG9wLW9wYWNpdHknLCAnc3Ryb2tlLWRhc2hhcnJheScsICdzdHJva2UtZGFzaG9mZnNldCcsICdzdHJva2UtbGluZWNhcCcsICdzdHJva2UtbGluZWpvaW4nLCAnc3Ryb2tlLW1pdGVybGltaXQnLCAnc3Ryb2tlLW9wYWNpdHknLCAnc3Ryb2tlJywgJ3N0cm9rZS13aWR0aCcsICdzdHlsZScsICdzdXJmYWNlc2NhbGUnLCAnc3lzdGVtbGFuZ3VhZ2UnLCAndGFiaW5kZXgnLCAndGFyZ2V0eCcsICd0YXJnZXR5JywgJ3RyYW5zZm9ybScsICd0cmFuc2Zvcm0tb3JpZ2luJywgJ3RleHQtYW5jaG9yJywgJ3RleHQtZGVjb3JhdGlvbicsICd0ZXh0LXJlbmRlcmluZycsICd0ZXh0bGVuZ3RoJywgJ3R5cGUnLCAndTEnLCAndTInLCAndW5pY29kZScsICd2YWx1ZXMnLCAndmlld2JveCcsICd2aXNpYmlsaXR5JywgJ3ZlcnNpb24nLCAndmVydC1hZHYteScsICd2ZXJ0LW9yaWdpbi14JywgJ3ZlcnQtb3JpZ2luLXknLCAnd2lkdGgnLCAnd29yZC1zcGFjaW5nJywgJ3dyYXAnLCAnd3JpdGluZy1tb2RlJywgJ3hjaGFubmVsc2VsZWN0b3InLCAneWNoYW5uZWxzZWxlY3RvcicsICd4JywgJ3gxJywgJ3gyJywgJ3htbG5zJywgJ3knLCAneTEnLCAneTInLCAneicsICd6b29tYW5kcGFuJ10pO1xuICB2YXIgbWF0aE1sID0gZnJlZXplKFsnYWNjZW50JywgJ2FjY2VudHVuZGVyJywgJ2FsaWduJywgJ2JldmVsbGVkJywgJ2Nsb3NlJywgJ2NvbHVtbnNhbGlnbicsICdjb2x1bW5saW5lcycsICdjb2x1bW5zcGFuJywgJ2Rlbm9tYWxpZ24nLCAnZGVwdGgnLCAnZGlyJywgJ2Rpc3BsYXknLCAnZGlzcGxheXN0eWxlJywgJ2VuY29kaW5nJywgJ2ZlbmNlJywgJ2ZyYW1lJywgJ2hlaWdodCcsICdocmVmJywgJ2lkJywgJ2xhcmdlb3AnLCAnbGVuZ3RoJywgJ2xpbmV0aGlja25lc3MnLCAnbHNwYWNlJywgJ2xxdW90ZScsICdtYXRoYmFja2dyb3VuZCcsICdtYXRoY29sb3InLCAnbWF0aHNpemUnLCAnbWF0aHZhcmlhbnQnLCAnbWF4c2l6ZScsICdtaW5zaXplJywgJ21vdmFibGVsaW1pdHMnLCAnbm90YXRpb24nLCAnbnVtYWxpZ24nLCAnb3BlbicsICdyb3dhbGlnbicsICdyb3dsaW5lcycsICdyb3dzcGFjaW5nJywgJ3Jvd3NwYW4nLCAncnNwYWNlJywgJ3JxdW90ZScsICdzY3JpcHRsZXZlbCcsICdzY3JpcHRtaW5zaXplJywgJ3NjcmlwdHNpemVtdWx0aXBsaWVyJywgJ3NlbGVjdGlvbicsICdzZXBhcmF0b3InLCAnc2VwYXJhdG9ycycsICdzdHJldGNoeScsICdzdWJzY3JpcHRzaGlmdCcsICdzdXBzY3JpcHRzaGlmdCcsICdzeW1tZXRyaWMnLCAndm9mZnNldCcsICd3aWR0aCcsICd4bWxucyddKTtcbiAgdmFyIHhtbCA9IGZyZWV6ZShbJ3hsaW5rOmhyZWYnLCAneG1sOmlkJywgJ3hsaW5rOnRpdGxlJywgJ3htbDpzcGFjZScsICd4bWxuczp4bGluayddKTtcblxuICB2YXIgTVVTVEFDSEVfRVhQUiA9IHNlYWwoL1xce1xce1tcXHdcXFddKnxbXFx3XFxXXSpcXH1cXH0vZ20pOyAvLyBTcGVjaWZ5IHRlbXBsYXRlIGRldGVjdGlvbiByZWdleCBmb3IgU0FGRV9GT1JfVEVNUExBVEVTIG1vZGVcblxuICB2YXIgRVJCX0VYUFIgPSBzZWFsKC88JVtcXHdcXFddKnxbXFx3XFxXXSolPi9nbSk7XG4gIHZhciBUTVBMSVRfRVhQUiA9IHNlYWwoL1xcJHtbXFx3XFxXXSp9L2dtKTtcbiAgdmFyIERBVEFfQVRUUiA9IHNlYWwoL15kYXRhLVtcXC1cXHcuXFx1MDBCNy1cXHVGRkZGXS8pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG5cbiAgdmFyIEFSSUFfQVRUUiA9IHNlYWwoL15hcmlhLVtcXC1cXHddKyQvKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuXG4gIHZhciBJU19BTExPV0VEX1VSSSA9IHNlYWwoL14oPzooPzooPzpmfGh0KXRwcz98bWFpbHRvfHRlbHxjYWxsdG98Y2lkfHhtcHApOnxbXmEtel18W2EteisuXFwtXSsoPzpbXmEteisuXFwtOl18JCkpL2kgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuICApO1xuICB2YXIgSVNfU0NSSVBUX09SX0RBVEEgPSBzZWFsKC9eKD86XFx3K3NjcmlwdHxkYXRhKTovaSk7XG4gIHZhciBBVFRSX1dISVRFU1BBQ0UgPSBzZWFsKC9bXFx1MDAwMC1cXHUwMDIwXFx1MDBBMFxcdTE2ODBcXHUxODBFXFx1MjAwMC1cXHUyMDI5XFx1MjA1RlxcdTMwMDBdL2cgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb250cm9sLXJlZ2V4XG4gICk7XG4gIHZhciBET0NUWVBFX05BTUUgPSBzZWFsKC9eaHRtbCQvaSk7XG5cbiAgdmFyIGdldEdsb2JhbCA9IGZ1bmN0aW9uIGdldEdsb2JhbCgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogd2luZG93O1xuICB9O1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5vLW9wIHBvbGljeSBmb3IgaW50ZXJuYWwgdXNlIG9ubHkuXG4gICAqIERvbid0IGV4cG9ydCB0aGlzIGZ1bmN0aW9uIG91dHNpZGUgdGhpcyBtb2R1bGUhXG4gICAqIEBwYXJhbSB7P1RydXN0ZWRUeXBlUG9saWN5RmFjdG9yeX0gdHJ1c3RlZFR5cGVzIFRoZSBwb2xpY3kgZmFjdG9yeS5cbiAgICogQHBhcmFtIHtEb2N1bWVudH0gZG9jdW1lbnQgVGhlIGRvY3VtZW50IG9iamVjdCAodG8gZGV0ZXJtaW5lIHBvbGljeSBuYW1lIHN1ZmZpeClcbiAgICogQHJldHVybiB7P1RydXN0ZWRUeXBlUG9saWN5fSBUaGUgcG9saWN5IGNyZWF0ZWQgKG9yIG51bGwsIGlmIFRydXN0ZWQgVHlwZXNcbiAgICogYXJlIG5vdCBzdXBwb3J0ZWQpLlxuICAgKi9cblxuXG4gIHZhciBfY3JlYXRlVHJ1c3RlZFR5cGVzUG9saWN5ID0gZnVuY3Rpb24gX2NyZWF0ZVRydXN0ZWRUeXBlc1BvbGljeSh0cnVzdGVkVHlwZXMsIGRvY3VtZW50KSB7XG4gICAgaWYgKF90eXBlb2YodHJ1c3RlZFR5cGVzKSAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIHRydXN0ZWRUeXBlcy5jcmVhdGVQb2xpY3kgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gLy8gQWxsb3cgdGhlIGNhbGxlcnMgdG8gY29udHJvbCB0aGUgdW5pcXVlIHBvbGljeSBuYW1lXG4gICAgLy8gYnkgYWRkaW5nIGEgZGF0YS10dC1wb2xpY3ktc3VmZml4IHRvIHRoZSBzY3JpcHQgZWxlbWVudCB3aXRoIHRoZSBET01QdXJpZnkuXG4gICAgLy8gUG9saWN5IGNyZWF0aW9uIHdpdGggZHVwbGljYXRlIG5hbWVzIHRocm93cyBpbiBUcnVzdGVkIFR5cGVzLlxuXG5cbiAgICB2YXIgc3VmZml4ID0gbnVsbDtcbiAgICB2YXIgQVRUUl9OQU1FID0gJ2RhdGEtdHQtcG9saWN5LXN1ZmZpeCc7XG5cbiAgICBpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0Lmhhc0F0dHJpYnV0ZShBVFRSX05BTUUpKSB7XG4gICAgICBzdWZmaXggPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LmdldEF0dHJpYnV0ZShBVFRSX05BTUUpO1xuICAgIH1cblxuICAgIHZhciBwb2xpY3lOYW1lID0gJ2RvbXB1cmlmeScgKyAoc3VmZml4ID8gJyMnICsgc3VmZml4IDogJycpO1xuXG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB0cnVzdGVkVHlwZXMuY3JlYXRlUG9saWN5KHBvbGljeU5hbWUsIHtcbiAgICAgICAgY3JlYXRlSFRNTDogZnVuY3Rpb24gY3JlYXRlSFRNTChodG1sKSB7XG4gICAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZVNjcmlwdFVSTDogZnVuY3Rpb24gY3JlYXRlU2NyaXB0VVJMKHNjcmlwdFVybCkge1xuICAgICAgICAgIHJldHVybiBzY3JpcHRVcmw7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgIC8vIFBvbGljeSBjcmVhdGlvbiBmYWlsZWQgKG1vc3QgbGlrZWx5IGFub3RoZXIgRE9NUHVyaWZ5IHNjcmlwdCBoYXNcbiAgICAgIC8vIGFscmVhZHkgcnVuKS4gU2tpcCBjcmVhdGluZyB0aGUgcG9saWN5LCBhcyB0aGlzIHdpbGwgb25seSBjYXVzZSBlcnJvcnNcbiAgICAgIC8vIGlmIFRUIGFyZSBlbmZvcmNlZC5cbiAgICAgIGNvbnNvbGUud2FybignVHJ1c3RlZFR5cGVzIHBvbGljeSAnICsgcG9saWN5TmFtZSArICcgY291bGQgbm90IGJlIGNyZWF0ZWQuJyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gY3JlYXRlRE9NUHVyaWZ5KCkge1xuICAgIHZhciB3aW5kb3cgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGdldEdsb2JhbCgpO1xuXG4gICAgdmFyIERPTVB1cmlmeSA9IGZ1bmN0aW9uIERPTVB1cmlmeShyb290KSB7XG4gICAgICByZXR1cm4gY3JlYXRlRE9NUHVyaWZ5KHJvb3QpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVmVyc2lvbiBsYWJlbCwgZXhwb3NlZCBmb3IgZWFzaWVyIGNoZWNrc1xuICAgICAqIGlmIERPTVB1cmlmeSBpcyB1cCB0byBkYXRlIG9yIG5vdFxuICAgICAqL1xuXG5cbiAgICBET01QdXJpZnkudmVyc2lvbiA9ICcyLjQuNyc7XG4gICAgLyoqXG4gICAgICogQXJyYXkgb2YgZWxlbWVudHMgdGhhdCBET01QdXJpZnkgcmVtb3ZlZCBkdXJpbmcgc2FuaXRhdGlvbi5cbiAgICAgKiBFbXB0eSBpZiBub3RoaW5nIHdhcyByZW1vdmVkLlxuICAgICAqL1xuXG4gICAgRE9NUHVyaWZ5LnJlbW92ZWQgPSBbXTtcblxuICAgIGlmICghd2luZG93IHx8ICF3aW5kb3cuZG9jdW1lbnQgfHwgd2luZG93LmRvY3VtZW50Lm5vZGVUeXBlICE9PSA5KSB7XG4gICAgICAvLyBOb3QgcnVubmluZyBpbiBhIGJyb3dzZXIsIHByb3ZpZGUgYSBmYWN0b3J5IGZ1bmN0aW9uXG4gICAgICAvLyBzbyB0aGF0IHlvdSBjYW4gcGFzcyB5b3VyIG93biBXaW5kb3dcbiAgICAgIERPTVB1cmlmeS5pc1N1cHBvcnRlZCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIERPTVB1cmlmeTtcbiAgICB9XG5cbiAgICB2YXIgb3JpZ2luYWxEb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcbiAgICB2YXIgZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQ7XG4gICAgdmFyIERvY3VtZW50RnJhZ21lbnQgPSB3aW5kb3cuRG9jdW1lbnRGcmFnbWVudCxcbiAgICAgICAgSFRNTFRlbXBsYXRlRWxlbWVudCA9IHdpbmRvdy5IVE1MVGVtcGxhdGVFbGVtZW50LFxuICAgICAgICBOb2RlID0gd2luZG93Lk5vZGUsXG4gICAgICAgIEVsZW1lbnQgPSB3aW5kb3cuRWxlbWVudCxcbiAgICAgICAgTm9kZUZpbHRlciA9IHdpbmRvdy5Ob2RlRmlsdGVyLFxuICAgICAgICBfd2luZG93JE5hbWVkTm9kZU1hcCA9IHdpbmRvdy5OYW1lZE5vZGVNYXAsXG4gICAgICAgIE5hbWVkTm9kZU1hcCA9IF93aW5kb3ckTmFtZWROb2RlTWFwID09PSB2b2lkIDAgPyB3aW5kb3cuTmFtZWROb2RlTWFwIHx8IHdpbmRvdy5Nb3pOYW1lZEF0dHJNYXAgOiBfd2luZG93JE5hbWVkTm9kZU1hcCxcbiAgICAgICAgSFRNTEZvcm1FbGVtZW50ID0gd2luZG93LkhUTUxGb3JtRWxlbWVudCxcbiAgICAgICAgRE9NUGFyc2VyID0gd2luZG93LkRPTVBhcnNlcixcbiAgICAgICAgdHJ1c3RlZFR5cGVzID0gd2luZG93LnRydXN0ZWRUeXBlcztcbiAgICB2YXIgRWxlbWVudFByb3RvdHlwZSA9IEVsZW1lbnQucHJvdG90eXBlO1xuICAgIHZhciBjbG9uZU5vZGUgPSBsb29rdXBHZXR0ZXIoRWxlbWVudFByb3RvdHlwZSwgJ2Nsb25lTm9kZScpO1xuICAgIHZhciBnZXROZXh0U2libGluZyA9IGxvb2t1cEdldHRlcihFbGVtZW50UHJvdG90eXBlLCAnbmV4dFNpYmxpbmcnKTtcbiAgICB2YXIgZ2V0Q2hpbGROb2RlcyA9IGxvb2t1cEdldHRlcihFbGVtZW50UHJvdG90eXBlLCAnY2hpbGROb2RlcycpO1xuICAgIHZhciBnZXRQYXJlbnROb2RlID0gbG9va3VwR2V0dGVyKEVsZW1lbnRQcm90b3R5cGUsICdwYXJlbnROb2RlJyk7IC8vIEFzIHBlciBpc3N1ZSAjNDcsIHRoZSB3ZWItY29tcG9uZW50cyByZWdpc3RyeSBpcyBpbmhlcml0ZWQgYnkgYVxuICAgIC8vIG5ldyBkb2N1bWVudCBjcmVhdGVkIHZpYSBjcmVhdGVIVE1MRG9jdW1lbnQuIEFzIHBlciB0aGUgc3BlY1xuICAgIC8vIChodHRwOi8vdzNjLmdpdGh1Yi5pby93ZWJjb21wb25lbnRzL3NwZWMvY3VzdG9tLyNjcmVhdGluZy1hbmQtcGFzc2luZy1yZWdpc3RyaWVzKVxuICAgIC8vIGEgbmV3IGVtcHR5IHJlZ2lzdHJ5IGlzIHVzZWQgd2hlbiBjcmVhdGluZyBhIHRlbXBsYXRlIGNvbnRlbnRzIG93bmVyXG4gICAgLy8gZG9jdW1lbnQsIHNvIHdlIHVzZSB0aGF0IGFzIG91ciBwYXJlbnQgZG9jdW1lbnQgdG8gZW5zdXJlIG5vdGhpbmdcbiAgICAvLyBpcyBpbmhlcml0ZWQuXG5cbiAgICBpZiAodHlwZW9mIEhUTUxUZW1wbGF0ZUVsZW1lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5cbiAgICAgIGlmICh0ZW1wbGF0ZS5jb250ZW50ICYmIHRlbXBsYXRlLmNvbnRlbnQub3duZXJEb2N1bWVudCkge1xuICAgICAgICBkb2N1bWVudCA9IHRlbXBsYXRlLmNvbnRlbnQub3duZXJEb2N1bWVudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgdHJ1c3RlZFR5cGVzUG9saWN5ID0gX2NyZWF0ZVRydXN0ZWRUeXBlc1BvbGljeSh0cnVzdGVkVHlwZXMsIG9yaWdpbmFsRG9jdW1lbnQpO1xuXG4gICAgdmFyIGVtcHR5SFRNTCA9IHRydXN0ZWRUeXBlc1BvbGljeSA/IHRydXN0ZWRUeXBlc1BvbGljeS5jcmVhdGVIVE1MKCcnKSA6ICcnO1xuICAgIHZhciBfZG9jdW1lbnQgPSBkb2N1bWVudCxcbiAgICAgICAgaW1wbGVtZW50YXRpb24gPSBfZG9jdW1lbnQuaW1wbGVtZW50YXRpb24sXG4gICAgICAgIGNyZWF0ZU5vZGVJdGVyYXRvciA9IF9kb2N1bWVudC5jcmVhdGVOb2RlSXRlcmF0b3IsXG4gICAgICAgIGNyZWF0ZURvY3VtZW50RnJhZ21lbnQgPSBfZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCxcbiAgICAgICAgZ2V0RWxlbWVudHNCeVRhZ05hbWUgPSBfZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWU7XG4gICAgdmFyIGltcG9ydE5vZGUgPSBvcmlnaW5hbERvY3VtZW50LmltcG9ydE5vZGU7XG4gICAgdmFyIGRvY3VtZW50TW9kZSA9IHt9O1xuXG4gICAgdHJ5IHtcbiAgICAgIGRvY3VtZW50TW9kZSA9IGNsb25lKGRvY3VtZW50KS5kb2N1bWVudE1vZGUgPyBkb2N1bWVudC5kb2N1bWVudE1vZGUgOiB7fTtcbiAgICB9IGNhdGNoIChfKSB7fVxuXG4gICAgdmFyIGhvb2tzID0ge307XG4gICAgLyoqXG4gICAgICogRXhwb3NlIHdoZXRoZXIgdGhpcyBicm93c2VyIHN1cHBvcnRzIHJ1bm5pbmcgdGhlIGZ1bGwgRE9NUHVyaWZ5LlxuICAgICAqL1xuXG4gICAgRE9NUHVyaWZ5LmlzU3VwcG9ydGVkID0gdHlwZW9mIGdldFBhcmVudE5vZGUgPT09ICdmdW5jdGlvbicgJiYgaW1wbGVtZW50YXRpb24gJiYgaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50ICE9PSB1bmRlZmluZWQgJiYgZG9jdW1lbnRNb2RlICE9PSA5O1xuICAgIHZhciBNVVNUQUNIRV9FWFBSJDEgPSBNVVNUQUNIRV9FWFBSLFxuICAgICAgICBFUkJfRVhQUiQxID0gRVJCX0VYUFIsXG4gICAgICAgIFRNUExJVF9FWFBSJDEgPSBUTVBMSVRfRVhQUixcbiAgICAgICAgREFUQV9BVFRSJDEgPSBEQVRBX0FUVFIsXG4gICAgICAgIEFSSUFfQVRUUiQxID0gQVJJQV9BVFRSLFxuICAgICAgICBJU19TQ1JJUFRfT1JfREFUQSQxID0gSVNfU0NSSVBUX09SX0RBVEEsXG4gICAgICAgIEFUVFJfV0hJVEVTUEFDRSQxID0gQVRUUl9XSElURVNQQUNFO1xuICAgIHZhciBJU19BTExPV0VEX1VSSSQxID0gSVNfQUxMT1dFRF9VUkk7XG4gICAgLyoqXG4gICAgICogV2UgY29uc2lkZXIgdGhlIGVsZW1lbnRzIGFuZCBhdHRyaWJ1dGVzIGJlbG93IHRvIGJlIHNhZmUuIElkZWFsbHlcbiAgICAgKiBkb24ndCBhZGQgYW55IG5ldyBvbmVzIGJ1dCBmZWVsIGZyZWUgdG8gcmVtb3ZlIHVud2FudGVkIG9uZXMuXG4gICAgICovXG5cbiAgICAvKiBhbGxvd2VkIGVsZW1lbnQgbmFtZXMgKi9cblxuICAgIHZhciBBTExPV0VEX1RBR1MgPSBudWxsO1xuICAgIHZhciBERUZBVUxUX0FMTE9XRURfVEFHUyA9IGFkZFRvU2V0KHt9LCBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGh0bWwkMSksIF90b0NvbnN1bWFibGVBcnJheShzdmckMSksIF90b0NvbnN1bWFibGVBcnJheShzdmdGaWx0ZXJzKSwgX3RvQ29uc3VtYWJsZUFycmF5KG1hdGhNbCQxKSwgX3RvQ29uc3VtYWJsZUFycmF5KHRleHQpKSk7XG4gICAgLyogQWxsb3dlZCBhdHRyaWJ1dGUgbmFtZXMgKi9cblxuICAgIHZhciBBTExPV0VEX0FUVFIgPSBudWxsO1xuICAgIHZhciBERUZBVUxUX0FMTE9XRURfQVRUUiA9IGFkZFRvU2V0KHt9LCBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGh0bWwpLCBfdG9Db25zdW1hYmxlQXJyYXkoc3ZnKSwgX3RvQ29uc3VtYWJsZUFycmF5KG1hdGhNbCksIF90b0NvbnN1bWFibGVBcnJheSh4bWwpKSk7XG4gICAgLypcbiAgICAgKiBDb25maWd1cmUgaG93IERPTVBVcmlmeSBzaG91bGQgaGFuZGxlIGN1c3RvbSBlbGVtZW50cyBhbmQgdGhlaXIgYXR0cmlidXRlcyBhcyB3ZWxsIGFzIGN1c3RvbWl6ZWQgYnVpbHQtaW4gZWxlbWVudHMuXG4gICAgICogQHByb3BlcnR5IHtSZWdFeHB8RnVuY3Rpb258bnVsbH0gdGFnTmFtZUNoZWNrIG9uZSBvZiBbbnVsbCwgcmVnZXhQYXR0ZXJuLCBwcmVkaWNhdGVdLiBEZWZhdWx0OiBgbnVsbGAgKGRpc2FsbG93IGFueSBjdXN0b20gZWxlbWVudHMpXG4gICAgICogQHByb3BlcnR5IHtSZWdFeHB8RnVuY3Rpb258bnVsbH0gYXR0cmlidXRlTmFtZUNoZWNrIG9uZSBvZiBbbnVsbCwgcmVnZXhQYXR0ZXJuLCBwcmVkaWNhdGVdLiBEZWZhdWx0OiBgbnVsbGAgKGRpc2FsbG93IGFueSBhdHRyaWJ1dGVzIG5vdCBvbiB0aGUgYWxsb3cgbGlzdClcbiAgICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGFsbG93Q3VzdG9taXplZEJ1aWx0SW5FbGVtZW50cyBhbGxvdyBjdXN0b20gZWxlbWVudHMgZGVyaXZlZCBmcm9tIGJ1aWx0LWlucyBpZiB0aGV5IHBhc3MgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrLiBEZWZhdWx0OiBgZmFsc2VgLlxuICAgICAqL1xuXG4gICAgdmFyIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HID0gT2JqZWN0LnNlYWwoT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgICB0YWdOYW1lQ2hlY2s6IHtcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBudWxsXG4gICAgICB9LFxuICAgICAgYXR0cmlidXRlTmFtZUNoZWNrOiB7XG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgfSxcbiAgICAgIGFsbG93Q3VzdG9taXplZEJ1aWx0SW5FbGVtZW50czoge1xuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9XG4gICAgfSkpO1xuICAgIC8qIEV4cGxpY2l0bHkgZm9yYmlkZGVuIHRhZ3MgKG92ZXJyaWRlcyBBTExPV0VEX1RBR1MvQUREX1RBR1MpICovXG5cbiAgICB2YXIgRk9SQklEX1RBR1MgPSBudWxsO1xuICAgIC8qIEV4cGxpY2l0bHkgZm9yYmlkZGVuIGF0dHJpYnV0ZXMgKG92ZXJyaWRlcyBBTExPV0VEX0FUVFIvQUREX0FUVFIpICovXG5cbiAgICB2YXIgRk9SQklEX0FUVFIgPSBudWxsO1xuICAgIC8qIERlY2lkZSBpZiBBUklBIGF0dHJpYnV0ZXMgYXJlIG9rYXkgKi9cblxuICAgIHZhciBBTExPV19BUklBX0FUVFIgPSB0cnVlO1xuICAgIC8qIERlY2lkZSBpZiBjdXN0b20gZGF0YSBhdHRyaWJ1dGVzIGFyZSBva2F5ICovXG5cbiAgICB2YXIgQUxMT1dfREFUQV9BVFRSID0gdHJ1ZTtcbiAgICAvKiBEZWNpZGUgaWYgdW5rbm93biBwcm90b2NvbHMgYXJlIG9rYXkgKi9cblxuICAgIHZhciBBTExPV19VTktOT1dOX1BST1RPQ09MUyA9IGZhbHNlO1xuICAgIC8qIERlY2lkZSBpZiBzZWxmLWNsb3NpbmcgdGFncyBpbiBhdHRyaWJ1dGVzIGFyZSBhbGxvd2VkLlxuICAgICAqIFVzdWFsbHkgcmVtb3ZlZCBkdWUgdG8gYSBtWFNTIGlzc3VlIGluIGpRdWVyeSAzLjAgKi9cblxuICAgIHZhciBBTExPV19TRUxGX0NMT1NFX0lOX0FUVFIgPSB0cnVlO1xuICAgIC8qIE91dHB1dCBzaG91bGQgYmUgc2FmZSBmb3IgY29tbW9uIHRlbXBsYXRlIGVuZ2luZXMuXG4gICAgICogVGhpcyBtZWFucywgRE9NUHVyaWZ5IHJlbW92ZXMgZGF0YSBhdHRyaWJ1dGVzLCBtdXN0YWNoZXMgYW5kIEVSQlxuICAgICAqL1xuXG4gICAgdmFyIFNBRkVfRk9SX1RFTVBMQVRFUyA9IGZhbHNlO1xuICAgIC8qIERlY2lkZSBpZiBkb2N1bWVudCB3aXRoIDxodG1sPi4uLiBzaG91bGQgYmUgcmV0dXJuZWQgKi9cblxuICAgIHZhciBXSE9MRV9ET0NVTUVOVCA9IGZhbHNlO1xuICAgIC8qIFRyYWNrIHdoZXRoZXIgY29uZmlnIGlzIGFscmVhZHkgc2V0IG9uIHRoaXMgaW5zdGFuY2Ugb2YgRE9NUHVyaWZ5LiAqL1xuXG4gICAgdmFyIFNFVF9DT05GSUcgPSBmYWxzZTtcbiAgICAvKiBEZWNpZGUgaWYgYWxsIGVsZW1lbnRzIChlLmcuIHN0eWxlLCBzY3JpcHQpIG11c3QgYmUgY2hpbGRyZW4gb2ZcbiAgICAgKiBkb2N1bWVudC5ib2R5LiBCeSBkZWZhdWx0LCBicm93c2VycyBtaWdodCBtb3ZlIHRoZW0gdG8gZG9jdW1lbnQuaGVhZCAqL1xuXG4gICAgdmFyIEZPUkNFX0JPRFkgPSBmYWxzZTtcbiAgICAvKiBEZWNpZGUgaWYgYSBET00gYEhUTUxCb2R5RWxlbWVudGAgc2hvdWxkIGJlIHJldHVybmVkLCBpbnN0ZWFkIG9mIGEgaHRtbFxuICAgICAqIHN0cmluZyAob3IgYSBUcnVzdGVkSFRNTCBvYmplY3QgaWYgVHJ1c3RlZCBUeXBlcyBhcmUgc3VwcG9ydGVkKS5cbiAgICAgKiBJZiBgV0hPTEVfRE9DVU1FTlRgIGlzIGVuYWJsZWQgYSBgSFRNTEh0bWxFbGVtZW50YCB3aWxsIGJlIHJldHVybmVkIGluc3RlYWRcbiAgICAgKi9cblxuICAgIHZhciBSRVRVUk5fRE9NID0gZmFsc2U7XG4gICAgLyogRGVjaWRlIGlmIGEgRE9NIGBEb2N1bWVudEZyYWdtZW50YCBzaG91bGQgYmUgcmV0dXJuZWQsIGluc3RlYWQgb2YgYSBodG1sXG4gICAgICogc3RyaW5nICAob3IgYSBUcnVzdGVkSFRNTCBvYmplY3QgaWYgVHJ1c3RlZCBUeXBlcyBhcmUgc3VwcG9ydGVkKSAqL1xuXG4gICAgdmFyIFJFVFVSTl9ET01fRlJBR01FTlQgPSBmYWxzZTtcbiAgICAvKiBUcnkgdG8gcmV0dXJuIGEgVHJ1c3RlZCBUeXBlIG9iamVjdCBpbnN0ZWFkIG9mIGEgc3RyaW5nLCByZXR1cm4gYSBzdHJpbmcgaW5cbiAgICAgKiBjYXNlIFRydXN0ZWQgVHlwZXMgYXJlIG5vdCBzdXBwb3J0ZWQgICovXG5cbiAgICB2YXIgUkVUVVJOX1RSVVNURURfVFlQRSA9IGZhbHNlO1xuICAgIC8qIE91dHB1dCBzaG91bGQgYmUgZnJlZSBmcm9tIERPTSBjbG9iYmVyaW5nIGF0dGFja3M/XG4gICAgICogVGhpcyBzYW5pdGl6ZXMgbWFya3VwcyBuYW1lZCB3aXRoIGNvbGxpZGluZywgY2xvYmJlcmFibGUgYnVpbHQtaW4gRE9NIEFQSXMuXG4gICAgICovXG5cbiAgICB2YXIgU0FOSVRJWkVfRE9NID0gdHJ1ZTtcbiAgICAvKiBBY2hpZXZlIGZ1bGwgRE9NIENsb2JiZXJpbmcgcHJvdGVjdGlvbiBieSBpc29sYXRpbmcgdGhlIG5hbWVzcGFjZSBvZiBuYW1lZFxuICAgICAqIHByb3BlcnRpZXMgYW5kIEpTIHZhcmlhYmxlcywgbWl0aWdhdGluZyBhdHRhY2tzIHRoYXQgYWJ1c2UgdGhlIEhUTUwvRE9NIHNwZWMgcnVsZXMuXG4gICAgICpcbiAgICAgKiBIVE1ML0RPTSBzcGVjIHJ1bGVzIHRoYXQgZW5hYmxlIERPTSBDbG9iYmVyaW5nOlxuICAgICAqICAgLSBOYW1lZCBBY2Nlc3Mgb24gV2luZG93ICjCpzcuMy4zKVxuICAgICAqICAgLSBET00gVHJlZSBBY2Nlc3NvcnMgKMKnMy4xLjUpXG4gICAgICogICAtIEZvcm0gRWxlbWVudCBQYXJlbnQtQ2hpbGQgUmVsYXRpb25zICjCpzQuMTAuMylcbiAgICAgKiAgIC0gSWZyYW1lIHNyY2RvYyAvIE5lc3RlZCBXaW5kb3dQcm94aWVzICjCpzQuOC41KVxuICAgICAqICAgLSBIVE1MQ29sbGVjdGlvbiAowqc0LjIuMTAuMilcbiAgICAgKlxuICAgICAqIE5hbWVzcGFjZSBpc29sYXRpb24gaXMgaW1wbGVtZW50ZWQgYnkgcHJlZml4aW5nIGBpZGAgYW5kIGBuYW1lYCBhdHRyaWJ1dGVzXG4gICAgICogd2l0aCBhIGNvbnN0YW50IHN0cmluZywgaS5lLiwgYHVzZXItY29udGVudC1gXG4gICAgICovXG5cbiAgICB2YXIgU0FOSVRJWkVfTkFNRURfUFJPUFMgPSBmYWxzZTtcbiAgICB2YXIgU0FOSVRJWkVfTkFNRURfUFJPUFNfUFJFRklYID0gJ3VzZXItY29udGVudC0nO1xuICAgIC8qIEtlZXAgZWxlbWVudCBjb250ZW50IHdoZW4gcmVtb3ZpbmcgZWxlbWVudD8gKi9cblxuICAgIHZhciBLRUVQX0NPTlRFTlQgPSB0cnVlO1xuICAgIC8qIElmIGEgYE5vZGVgIGlzIHBhc3NlZCB0byBzYW5pdGl6ZSgpLCB0aGVuIHBlcmZvcm1zIHNhbml0aXphdGlvbiBpbi1wbGFjZSBpbnN0ZWFkXG4gICAgICogb2YgaW1wb3J0aW5nIGl0IGludG8gYSBuZXcgRG9jdW1lbnQgYW5kIHJldHVybmluZyBhIHNhbml0aXplZCBjb3B5ICovXG5cbiAgICB2YXIgSU5fUExBQ0UgPSBmYWxzZTtcbiAgICAvKiBBbGxvdyB1c2FnZSBvZiBwcm9maWxlcyBsaWtlIGh0bWwsIHN2ZyBhbmQgbWF0aE1sICovXG5cbiAgICB2YXIgVVNFX1BST0ZJTEVTID0ge307XG4gICAgLyogVGFncyB0byBpZ25vcmUgY29udGVudCBvZiB3aGVuIEtFRVBfQ09OVEVOVCBpcyB0cnVlICovXG5cbiAgICB2YXIgRk9SQklEX0NPTlRFTlRTID0gbnVsbDtcbiAgICB2YXIgREVGQVVMVF9GT1JCSURfQ09OVEVOVFMgPSBhZGRUb1NldCh7fSwgWydhbm5vdGF0aW9uLXhtbCcsICdhdWRpbycsICdjb2xncm91cCcsICdkZXNjJywgJ2ZvcmVpZ25vYmplY3QnLCAnaGVhZCcsICdpZnJhbWUnLCAnbWF0aCcsICdtaScsICdtbicsICdtbycsICdtcycsICdtdGV4dCcsICdub2VtYmVkJywgJ25vZnJhbWVzJywgJ25vc2NyaXB0JywgJ3BsYWludGV4dCcsICdzY3JpcHQnLCAnc3R5bGUnLCAnc3ZnJywgJ3RlbXBsYXRlJywgJ3RoZWFkJywgJ3RpdGxlJywgJ3ZpZGVvJywgJ3htcCddKTtcbiAgICAvKiBUYWdzIHRoYXQgYXJlIHNhZmUgZm9yIGRhdGE6IFVSSXMgKi9cblxuICAgIHZhciBEQVRBX1VSSV9UQUdTID0gbnVsbDtcbiAgICB2YXIgREVGQVVMVF9EQVRBX1VSSV9UQUdTID0gYWRkVG9TZXQoe30sIFsnYXVkaW8nLCAndmlkZW8nLCAnaW1nJywgJ3NvdXJjZScsICdpbWFnZScsICd0cmFjayddKTtcbiAgICAvKiBBdHRyaWJ1dGVzIHNhZmUgZm9yIHZhbHVlcyBsaWtlIFwiamF2YXNjcmlwdDpcIiAqL1xuXG4gICAgdmFyIFVSSV9TQUZFX0FUVFJJQlVURVMgPSBudWxsO1xuICAgIHZhciBERUZBVUxUX1VSSV9TQUZFX0FUVFJJQlVURVMgPSBhZGRUb1NldCh7fSwgWydhbHQnLCAnY2xhc3MnLCAnZm9yJywgJ2lkJywgJ2xhYmVsJywgJ25hbWUnLCAncGF0dGVybicsICdwbGFjZWhvbGRlcicsICdyb2xlJywgJ3N1bW1hcnknLCAndGl0bGUnLCAndmFsdWUnLCAnc3R5bGUnLCAneG1sbnMnXSk7XG4gICAgdmFyIE1BVEhNTF9OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTCc7XG4gICAgdmFyIFNWR19OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuICAgIHZhciBIVE1MX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJztcbiAgICAvKiBEb2N1bWVudCBuYW1lc3BhY2UgKi9cblxuICAgIHZhciBOQU1FU1BBQ0UgPSBIVE1MX05BTUVTUEFDRTtcbiAgICB2YXIgSVNfRU1QVFlfSU5QVVQgPSBmYWxzZTtcbiAgICAvKiBBbGxvd2VkIFhIVE1MK1hNTCBuYW1lc3BhY2VzICovXG5cbiAgICB2YXIgQUxMT1dFRF9OQU1FU1BBQ0VTID0gbnVsbDtcbiAgICB2YXIgREVGQVVMVF9BTExPV0VEX05BTUVTUEFDRVMgPSBhZGRUb1NldCh7fSwgW01BVEhNTF9OQU1FU1BBQ0UsIFNWR19OQU1FU1BBQ0UsIEhUTUxfTkFNRVNQQUNFXSwgc3RyaW5nVG9TdHJpbmcpO1xuICAgIC8qIFBhcnNpbmcgb2Ygc3RyaWN0IFhIVE1MIGRvY3VtZW50cyAqL1xuXG4gICAgdmFyIFBBUlNFUl9NRURJQV9UWVBFO1xuICAgIHZhciBTVVBQT1JURURfUEFSU0VSX01FRElBX1RZUEVTID0gWydhcHBsaWNhdGlvbi94aHRtbCt4bWwnLCAndGV4dC9odG1sJ107XG4gICAgdmFyIERFRkFVTFRfUEFSU0VSX01FRElBX1RZUEUgPSAndGV4dC9odG1sJztcbiAgICB2YXIgdHJhbnNmb3JtQ2FzZUZ1bmM7XG4gICAgLyogS2VlcCBhIHJlZmVyZW5jZSB0byBjb25maWcgdG8gcGFzcyB0byBob29rcyAqL1xuXG4gICAgdmFyIENPTkZJRyA9IG51bGw7XG4gICAgLyogSWRlYWxseSwgZG8gbm90IHRvdWNoIGFueXRoaW5nIGJlbG93IHRoaXMgbGluZSAqL1xuXG4gICAgLyogX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAqL1xuXG4gICAgdmFyIGZvcm1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXG4gICAgdmFyIGlzUmVnZXhPckZ1bmN0aW9uID0gZnVuY3Rpb24gaXNSZWdleE9yRnVuY3Rpb24odGVzdFZhbHVlKSB7XG4gICAgICByZXR1cm4gdGVzdFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwIHx8IHRlc3RWYWx1ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogX3BhcnNlQ29uZmlnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGNmZyBvcHRpb25hbCBjb25maWcgbGl0ZXJhbFxuICAgICAqL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG5cblxuICAgIHZhciBfcGFyc2VDb25maWcgPSBmdW5jdGlvbiBfcGFyc2VDb25maWcoY2ZnKSB7XG4gICAgICBpZiAoQ09ORklHICYmIENPTkZJRyA9PT0gY2ZnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8qIFNoaWVsZCBjb25maWd1cmF0aW9uIG9iamVjdCBmcm9tIHRhbXBlcmluZyAqL1xuXG5cbiAgICAgIGlmICghY2ZnIHx8IF90eXBlb2YoY2ZnKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgY2ZnID0ge307XG4gICAgICB9XG4gICAgICAvKiBTaGllbGQgY29uZmlndXJhdGlvbiBvYmplY3QgZnJvbSBwcm90b3R5cGUgcG9sbHV0aW9uICovXG5cblxuICAgICAgY2ZnID0gY2xvbmUoY2ZnKTtcbiAgICAgIFBBUlNFUl9NRURJQV9UWVBFID0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLWluY2x1ZGVzXG4gICAgICBTVVBQT1JURURfUEFSU0VSX01FRElBX1RZUEVTLmluZGV4T2YoY2ZnLlBBUlNFUl9NRURJQV9UWVBFKSA9PT0gLTEgPyBQQVJTRVJfTUVESUFfVFlQRSA9IERFRkFVTFRfUEFSU0VSX01FRElBX1RZUEUgOiBQQVJTRVJfTUVESUFfVFlQRSA9IGNmZy5QQVJTRVJfTUVESUFfVFlQRTsgLy8gSFRNTCB0YWdzIGFuZCBhdHRyaWJ1dGVzIGFyZSBub3QgY2FzZS1zZW5zaXRpdmUsIGNvbnZlcnRpbmcgdG8gbG93ZXJjYXNlLiBLZWVwaW5nIFhIVE1MIGFzIGlzLlxuXG4gICAgICB0cmFuc2Zvcm1DYXNlRnVuYyA9IFBBUlNFUl9NRURJQV9UWVBFID09PSAnYXBwbGljYXRpb24veGh0bWwreG1sJyA/IHN0cmluZ1RvU3RyaW5nIDogc3RyaW5nVG9Mb3dlckNhc2U7XG4gICAgICAvKiBTZXQgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzICovXG5cbiAgICAgIEFMTE9XRURfVEFHUyA9ICdBTExPV0VEX1RBR1MnIGluIGNmZyA/IGFkZFRvU2V0KHt9LCBjZmcuQUxMT1dFRF9UQUdTLCB0cmFuc2Zvcm1DYXNlRnVuYykgOiBERUZBVUxUX0FMTE9XRURfVEFHUztcbiAgICAgIEFMTE9XRURfQVRUUiA9ICdBTExPV0VEX0FUVFInIGluIGNmZyA/IGFkZFRvU2V0KHt9LCBjZmcuQUxMT1dFRF9BVFRSLCB0cmFuc2Zvcm1DYXNlRnVuYykgOiBERUZBVUxUX0FMTE9XRURfQVRUUjtcbiAgICAgIEFMTE9XRURfTkFNRVNQQUNFUyA9ICdBTExPV0VEX05BTUVTUEFDRVMnIGluIGNmZyA/IGFkZFRvU2V0KHt9LCBjZmcuQUxMT1dFRF9OQU1FU1BBQ0VTLCBzdHJpbmdUb1N0cmluZykgOiBERUZBVUxUX0FMTE9XRURfTkFNRVNQQUNFUztcbiAgICAgIFVSSV9TQUZFX0FUVFJJQlVURVMgPSAnQUREX1VSSV9TQUZFX0FUVFInIGluIGNmZyA/IGFkZFRvU2V0KGNsb25lKERFRkFVTFRfVVJJX1NBRkVfQVRUUklCVVRFUyksIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW5kZW50XG4gICAgICBjZmcuQUREX1VSSV9TQUZFX0FUVFIsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW5kZW50XG4gICAgICB0cmFuc2Zvcm1DYXNlRnVuYyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGluZGVudFxuICAgICAgKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGluZGVudFxuICAgICAgOiBERUZBVUxUX1VSSV9TQUZFX0FUVFJJQlVURVM7XG4gICAgICBEQVRBX1VSSV9UQUdTID0gJ0FERF9EQVRBX1VSSV9UQUdTJyBpbiBjZmcgPyBhZGRUb1NldChjbG9uZShERUZBVUxUX0RBVEFfVVJJX1RBR1MpLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGluZGVudFxuICAgICAgY2ZnLkFERF9EQVRBX1VSSV9UQUdTLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGluZGVudFxuICAgICAgdHJhbnNmb3JtQ2FzZUZ1bmMgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbmRlbnRcbiAgICAgICkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbmRlbnRcbiAgICAgIDogREVGQVVMVF9EQVRBX1VSSV9UQUdTO1xuICAgICAgRk9SQklEX0NPTlRFTlRTID0gJ0ZPUkJJRF9DT05URU5UUycgaW4gY2ZnID8gYWRkVG9TZXQoe30sIGNmZy5GT1JCSURfQ09OVEVOVFMsIHRyYW5zZm9ybUNhc2VGdW5jKSA6IERFRkFVTFRfRk9SQklEX0NPTlRFTlRTO1xuICAgICAgRk9SQklEX1RBR1MgPSAnRk9SQklEX1RBR1MnIGluIGNmZyA/IGFkZFRvU2V0KHt9LCBjZmcuRk9SQklEX1RBR1MsIHRyYW5zZm9ybUNhc2VGdW5jKSA6IHt9O1xuICAgICAgRk9SQklEX0FUVFIgPSAnRk9SQklEX0FUVFInIGluIGNmZyA/IGFkZFRvU2V0KHt9LCBjZmcuRk9SQklEX0FUVFIsIHRyYW5zZm9ybUNhc2VGdW5jKSA6IHt9O1xuICAgICAgVVNFX1BST0ZJTEVTID0gJ1VTRV9QUk9GSUxFUycgaW4gY2ZnID8gY2ZnLlVTRV9QUk9GSUxFUyA6IGZhbHNlO1xuICAgICAgQUxMT1dfQVJJQV9BVFRSID0gY2ZnLkFMTE9XX0FSSUFfQVRUUiAhPT0gZmFsc2U7IC8vIERlZmF1bHQgdHJ1ZVxuXG4gICAgICBBTExPV19EQVRBX0FUVFIgPSBjZmcuQUxMT1dfREFUQV9BVFRSICE9PSBmYWxzZTsgLy8gRGVmYXVsdCB0cnVlXG5cbiAgICAgIEFMTE9XX1VOS05PV05fUFJPVE9DT0xTID0gY2ZnLkFMTE9XX1VOS05PV05fUFJPVE9DT0xTIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG5cbiAgICAgIEFMTE9XX1NFTEZfQ0xPU0VfSU5fQVRUUiA9IGNmZy5BTExPV19TRUxGX0NMT1NFX0lOX0FUVFIgIT09IGZhbHNlOyAvLyBEZWZhdWx0IHRydWVcblxuICAgICAgU0FGRV9GT1JfVEVNUExBVEVTID0gY2ZnLlNBRkVfRk9SX1RFTVBMQVRFUyB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuXG4gICAgICBXSE9MRV9ET0NVTUVOVCA9IGNmZy5XSE9MRV9ET0NVTUVOVCB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuXG4gICAgICBSRVRVUk5fRE9NID0gY2ZnLlJFVFVSTl9ET00gfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcblxuICAgICAgUkVUVVJOX0RPTV9GUkFHTUVOVCA9IGNmZy5SRVRVUk5fRE9NX0ZSQUdNRU5UIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG5cbiAgICAgIFJFVFVSTl9UUlVTVEVEX1RZUEUgPSBjZmcuUkVUVVJOX1RSVVNURURfVFlQRSB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuXG4gICAgICBGT1JDRV9CT0RZID0gY2ZnLkZPUkNFX0JPRFkgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcblxuICAgICAgU0FOSVRJWkVfRE9NID0gY2ZnLlNBTklUSVpFX0RPTSAhPT0gZmFsc2U7IC8vIERlZmF1bHQgdHJ1ZVxuXG4gICAgICBTQU5JVElaRV9OQU1FRF9QUk9QUyA9IGNmZy5TQU5JVElaRV9OQU1FRF9QUk9QUyB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuXG4gICAgICBLRUVQX0NPTlRFTlQgPSBjZmcuS0VFUF9DT05URU5UICE9PSBmYWxzZTsgLy8gRGVmYXVsdCB0cnVlXG5cbiAgICAgIElOX1BMQUNFID0gY2ZnLklOX1BMQUNFIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG5cbiAgICAgIElTX0FMTE9XRURfVVJJJDEgPSBjZmcuQUxMT1dFRF9VUklfUkVHRVhQIHx8IElTX0FMTE9XRURfVVJJJDE7XG4gICAgICBOQU1FU1BBQ0UgPSBjZmcuTkFNRVNQQUNFIHx8IEhUTUxfTkFNRVNQQUNFO1xuICAgICAgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcgPSBjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcgfHwge307XG5cbiAgICAgIGlmIChjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcgJiYgaXNSZWdleE9yRnVuY3Rpb24oY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjaykpIHtcbiAgICAgICAgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrID0gY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjaztcbiAgICAgIH1cblxuICAgICAgaWYgKGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORyAmJiBpc1JlZ2V4T3JGdW5jdGlvbihjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYXR0cmlidXRlTmFtZUNoZWNrKSkge1xuICAgICAgICBDVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2sgPSBjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYXR0cmlidXRlTmFtZUNoZWNrO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HICYmIHR5cGVvZiBjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYWxsb3dDdXN0b21pemVkQnVpbHRJbkVsZW1lbnRzID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYWxsb3dDdXN0b21pemVkQnVpbHRJbkVsZW1lbnRzID0gY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmFsbG93Q3VzdG9taXplZEJ1aWx0SW5FbGVtZW50cztcbiAgICAgIH1cblxuICAgICAgaWYgKFNBRkVfRk9SX1RFTVBMQVRFUykge1xuICAgICAgICBBTExPV19EQVRBX0FUVFIgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKFJFVFVSTl9ET01fRlJBR01FTlQpIHtcbiAgICAgICAgUkVUVVJOX0RPTSA9IHRydWU7XG4gICAgICB9XG4gICAgICAvKiBQYXJzZSBwcm9maWxlIGluZm8gKi9cblxuXG4gICAgICBpZiAoVVNFX1BST0ZJTEVTKSB7XG4gICAgICAgIEFMTE9XRURfVEFHUyA9IGFkZFRvU2V0KHt9LCBfdG9Db25zdW1hYmxlQXJyYXkodGV4dCkpO1xuICAgICAgICBBTExPV0VEX0FUVFIgPSBbXTtcblxuICAgICAgICBpZiAoVVNFX1BST0ZJTEVTLmh0bWwgPT09IHRydWUpIHtcbiAgICAgICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIGh0bWwkMSk7XG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCBodG1sKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChVU0VfUFJPRklMRVMuc3ZnID09PSB0cnVlKSB7XG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBzdmckMSk7XG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCBzdmcpO1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgeG1sKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChVU0VfUFJPRklMRVMuc3ZnRmlsdGVycyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfVEFHUywgc3ZnRmlsdGVycyk7XG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCBzdmcpO1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgeG1sKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChVU0VfUFJPRklMRVMubWF0aE1sID09PSB0cnVlKSB7XG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBtYXRoTWwkMSk7XG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCBtYXRoTWwpO1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgeG1sKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLyogTWVyZ2UgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzICovXG5cblxuICAgICAgaWYgKGNmZy5BRERfVEFHUykge1xuICAgICAgICBpZiAoQUxMT1dFRF9UQUdTID09PSBERUZBVUxUX0FMTE9XRURfVEFHUykge1xuICAgICAgICAgIEFMTE9XRURfVEFHUyA9IGNsb25lKEFMTE9XRURfVEFHUyk7XG4gICAgICAgIH1cblxuICAgICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIGNmZy5BRERfVEFHUywgdHJhbnNmb3JtQ2FzZUZ1bmMpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2ZnLkFERF9BVFRSKSB7XG4gICAgICAgIGlmIChBTExPV0VEX0FUVFIgPT09IERFRkFVTFRfQUxMT1dFRF9BVFRSKSB7XG4gICAgICAgICAgQUxMT1dFRF9BVFRSID0gY2xvbmUoQUxMT1dFRF9BVFRSKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgY2ZnLkFERF9BVFRSLCB0cmFuc2Zvcm1DYXNlRnVuYyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjZmcuQUREX1VSSV9TQUZFX0FUVFIpIHtcbiAgICAgICAgYWRkVG9TZXQoVVJJX1NBRkVfQVRUUklCVVRFUywgY2ZnLkFERF9VUklfU0FGRV9BVFRSLCB0cmFuc2Zvcm1DYXNlRnVuYyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjZmcuRk9SQklEX0NPTlRFTlRTKSB7XG4gICAgICAgIGlmIChGT1JCSURfQ09OVEVOVFMgPT09IERFRkFVTFRfRk9SQklEX0NPTlRFTlRTKSB7XG4gICAgICAgICAgRk9SQklEX0NPTlRFTlRTID0gY2xvbmUoRk9SQklEX0NPTlRFTlRTKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFkZFRvU2V0KEZPUkJJRF9DT05URU5UUywgY2ZnLkZPUkJJRF9DT05URU5UUywgdHJhbnNmb3JtQ2FzZUZ1bmMpO1xuICAgICAgfVxuICAgICAgLyogQWRkICN0ZXh0IGluIGNhc2UgS0VFUF9DT05URU5UIGlzIHNldCB0byB0cnVlICovXG5cblxuICAgICAgaWYgKEtFRVBfQ09OVEVOVCkge1xuICAgICAgICBBTExPV0VEX1RBR1NbJyN0ZXh0J10gPSB0cnVlO1xuICAgICAgfVxuICAgICAgLyogQWRkIGh0bWwsIGhlYWQgYW5kIGJvZHkgdG8gQUxMT1dFRF9UQUdTIGluIGNhc2UgV0hPTEVfRE9DVU1FTlQgaXMgdHJ1ZSAqL1xuXG5cbiAgICAgIGlmIChXSE9MRV9ET0NVTUVOVCkge1xuICAgICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIFsnaHRtbCcsICdoZWFkJywgJ2JvZHknXSk7XG4gICAgICB9XG4gICAgICAvKiBBZGQgdGJvZHkgdG8gQUxMT1dFRF9UQUdTIGluIGNhc2UgdGFibGVzIGFyZSBwZXJtaXR0ZWQsIHNlZSAjMjg2LCAjMzY1ICovXG5cblxuICAgICAgaWYgKEFMTE9XRURfVEFHUy50YWJsZSkge1xuICAgICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIFsndGJvZHknXSk7XG4gICAgICAgIGRlbGV0ZSBGT1JCSURfVEFHUy50Ym9keTtcbiAgICAgIH0gLy8gUHJldmVudCBmdXJ0aGVyIG1hbmlwdWxhdGlvbiBvZiBjb25maWd1cmF0aW9uLlxuICAgICAgLy8gTm90IGF2YWlsYWJsZSBpbiBJRTgsIFNhZmFyaSA1LCBldGMuXG5cblxuICAgICAgaWYgKGZyZWV6ZSkge1xuICAgICAgICBmcmVlemUoY2ZnKTtcbiAgICAgIH1cblxuICAgICAgQ09ORklHID0gY2ZnO1xuICAgIH07XG5cbiAgICB2YXIgTUFUSE1MX1RFWFRfSU5URUdSQVRJT05fUE9JTlRTID0gYWRkVG9TZXQoe30sIFsnbWknLCAnbW8nLCAnbW4nLCAnbXMnLCAnbXRleHQnXSk7XG4gICAgdmFyIEhUTUxfSU5URUdSQVRJT05fUE9JTlRTID0gYWRkVG9TZXQoe30sIFsnZm9yZWlnbm9iamVjdCcsICdkZXNjJywgJ3RpdGxlJywgJ2Fubm90YXRpb24teG1sJ10pOyAvLyBDZXJ0YWluIGVsZW1lbnRzIGFyZSBhbGxvd2VkIGluIGJvdGggU1ZHIGFuZCBIVE1MXG4gICAgLy8gbmFtZXNwYWNlLiBXZSBuZWVkIHRvIHNwZWNpZnkgdGhlbSBleHBsaWNpdGx5XG4gICAgLy8gc28gdGhhdCB0aGV5IGRvbid0IGdldCBlcnJvbmVvdXNseSBkZWxldGVkIGZyb21cbiAgICAvLyBIVE1MIG5hbWVzcGFjZS5cblxuICAgIHZhciBDT01NT05fU1ZHX0FORF9IVE1MX0VMRU1FTlRTID0gYWRkVG9TZXQoe30sIFsndGl0bGUnLCAnc3R5bGUnLCAnZm9udCcsICdhJywgJ3NjcmlwdCddKTtcbiAgICAvKiBLZWVwIHRyYWNrIG9mIGFsbCBwb3NzaWJsZSBTVkcgYW5kIE1hdGhNTCB0YWdzXG4gICAgICogc28gdGhhdCB3ZSBjYW4gcGVyZm9ybSB0aGUgbmFtZXNwYWNlIGNoZWNrc1xuICAgICAqIGNvcnJlY3RseS4gKi9cblxuICAgIHZhciBBTExfU1ZHX1RBR1MgPSBhZGRUb1NldCh7fSwgc3ZnJDEpO1xuICAgIGFkZFRvU2V0KEFMTF9TVkdfVEFHUywgc3ZnRmlsdGVycyk7XG4gICAgYWRkVG9TZXQoQUxMX1NWR19UQUdTLCBzdmdEaXNhbGxvd2VkKTtcbiAgICB2YXIgQUxMX01BVEhNTF9UQUdTID0gYWRkVG9TZXQoe30sIG1hdGhNbCQxKTtcbiAgICBhZGRUb1NldChBTExfTUFUSE1MX1RBR1MsIG1hdGhNbERpc2FsbG93ZWQpO1xuICAgIC8qKlxuICAgICAqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtFbGVtZW50fSBlbGVtZW50IGEgRE9NIGVsZW1lbnQgd2hvc2UgbmFtZXNwYWNlIGlzIGJlaW5nIGNoZWNrZWRcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJuIGZhbHNlIGlmIHRoZSBlbGVtZW50IGhhcyBhXG4gICAgICogIG5hbWVzcGFjZSB0aGF0IGEgc3BlYy1jb21wbGlhbnQgcGFyc2VyIHdvdWxkIG5ldmVyXG4gICAgICogIHJldHVybi4gUmV0dXJuIHRydWUgb3RoZXJ3aXNlLlxuICAgICAqL1xuXG4gICAgdmFyIF9jaGVja1ZhbGlkTmFtZXNwYWNlID0gZnVuY3Rpb24gX2NoZWNrVmFsaWROYW1lc3BhY2UoZWxlbWVudCkge1xuICAgICAgdmFyIHBhcmVudCA9IGdldFBhcmVudE5vZGUoZWxlbWVudCk7IC8vIEluIEpTRE9NLCBpZiB3ZSdyZSBpbnNpZGUgc2hhZG93IERPTSwgdGhlbiBwYXJlbnROb2RlXG4gICAgICAvLyBjYW4gYmUgbnVsbC4gV2UganVzdCBzaW11bGF0ZSBwYXJlbnQgaW4gdGhpcyBjYXNlLlxuXG4gICAgICBpZiAoIXBhcmVudCB8fCAhcGFyZW50LnRhZ05hbWUpIHtcbiAgICAgICAgcGFyZW50ID0ge1xuICAgICAgICAgIG5hbWVzcGFjZVVSSTogTkFNRVNQQUNFLFxuICAgICAgICAgIHRhZ05hbWU6ICd0ZW1wbGF0ZSdcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgdmFyIHRhZ05hbWUgPSBzdHJpbmdUb0xvd2VyQ2FzZShlbGVtZW50LnRhZ05hbWUpO1xuICAgICAgdmFyIHBhcmVudFRhZ05hbWUgPSBzdHJpbmdUb0xvd2VyQ2FzZShwYXJlbnQudGFnTmFtZSk7XG5cbiAgICAgIGlmICghQUxMT1dFRF9OQU1FU1BBQ0VTW2VsZW1lbnQubmFtZXNwYWNlVVJJXSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbGVtZW50Lm5hbWVzcGFjZVVSSSA9PT0gU1ZHX05BTUVTUEFDRSkge1xuICAgICAgICAvLyBUaGUgb25seSB3YXkgdG8gc3dpdGNoIGZyb20gSFRNTCBuYW1lc3BhY2UgdG8gU1ZHXG4gICAgICAgIC8vIGlzIHZpYSA8c3ZnPi4gSWYgaXQgaGFwcGVucyB2aWEgYW55IG90aGVyIHRhZywgdGhlblxuICAgICAgICAvLyBpdCBzaG91bGQgYmUga2lsbGVkLlxuICAgICAgICBpZiAocGFyZW50Lm5hbWVzcGFjZVVSSSA9PT0gSFRNTF9OQU1FU1BBQ0UpIHtcbiAgICAgICAgICByZXR1cm4gdGFnTmFtZSA9PT0gJ3N2Zyc7XG4gICAgICAgIH0gLy8gVGhlIG9ubHkgd2F5IHRvIHN3aXRjaCBmcm9tIE1hdGhNTCB0byBTVkcgaXMgdmlhYFxuICAgICAgICAvLyBzdmcgaWYgcGFyZW50IGlzIGVpdGhlciA8YW5ub3RhdGlvbi14bWw+IG9yIE1hdGhNTFxuICAgICAgICAvLyB0ZXh0IGludGVncmF0aW9uIHBvaW50cy5cblxuXG4gICAgICAgIGlmIChwYXJlbnQubmFtZXNwYWNlVVJJID09PSBNQVRITUxfTkFNRVNQQUNFKSB7XG4gICAgICAgICAgcmV0dXJuIHRhZ05hbWUgPT09ICdzdmcnICYmIChwYXJlbnRUYWdOYW1lID09PSAnYW5ub3RhdGlvbi14bWwnIHx8IE1BVEhNTF9URVhUX0lOVEVHUkFUSU9OX1BPSU5UU1twYXJlbnRUYWdOYW1lXSk7XG4gICAgICAgIH0gLy8gV2Ugb25seSBhbGxvdyBlbGVtZW50cyB0aGF0IGFyZSBkZWZpbmVkIGluIFNWR1xuICAgICAgICAvLyBzcGVjLiBBbGwgb3RoZXJzIGFyZSBkaXNhbGxvd2VkIGluIFNWRyBuYW1lc3BhY2UuXG5cblxuICAgICAgICByZXR1cm4gQm9vbGVhbihBTExfU1ZHX1RBR1NbdGFnTmFtZV0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxlbWVudC5uYW1lc3BhY2VVUkkgPT09IE1BVEhNTF9OQU1FU1BBQ0UpIHtcbiAgICAgICAgLy8gVGhlIG9ubHkgd2F5IHRvIHN3aXRjaCBmcm9tIEhUTUwgbmFtZXNwYWNlIHRvIE1hdGhNTFxuICAgICAgICAvLyBpcyB2aWEgPG1hdGg+LiBJZiBpdCBoYXBwZW5zIHZpYSBhbnkgb3RoZXIgdGFnLCB0aGVuXG4gICAgICAgIC8vIGl0IHNob3VsZCBiZSBraWxsZWQuXG4gICAgICAgIGlmIChwYXJlbnQubmFtZXNwYWNlVVJJID09PSBIVE1MX05BTUVTUEFDRSkge1xuICAgICAgICAgIHJldHVybiB0YWdOYW1lID09PSAnbWF0aCc7XG4gICAgICAgIH0gLy8gVGhlIG9ubHkgd2F5IHRvIHN3aXRjaCBmcm9tIFNWRyB0byBNYXRoTUwgaXMgdmlhXG4gICAgICAgIC8vIDxtYXRoPiBhbmQgSFRNTCBpbnRlZ3JhdGlvbiBwb2ludHNcblxuXG4gICAgICAgIGlmIChwYXJlbnQubmFtZXNwYWNlVVJJID09PSBTVkdfTkFNRVNQQUNFKSB7XG4gICAgICAgICAgcmV0dXJuIHRhZ05hbWUgPT09ICdtYXRoJyAmJiBIVE1MX0lOVEVHUkFUSU9OX1BPSU5UU1twYXJlbnRUYWdOYW1lXTtcbiAgICAgICAgfSAvLyBXZSBvbmx5IGFsbG93IGVsZW1lbnRzIHRoYXQgYXJlIGRlZmluZWQgaW4gTWF0aE1MXG4gICAgICAgIC8vIHNwZWMuIEFsbCBvdGhlcnMgYXJlIGRpc2FsbG93ZWQgaW4gTWF0aE1MIG5hbWVzcGFjZS5cblxuXG4gICAgICAgIHJldHVybiBCb29sZWFuKEFMTF9NQVRITUxfVEFHU1t0YWdOYW1lXSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbGVtZW50Lm5hbWVzcGFjZVVSSSA9PT0gSFRNTF9OQU1FU1BBQ0UpIHtcbiAgICAgICAgLy8gVGhlIG9ubHkgd2F5IHRvIHN3aXRjaCBmcm9tIFNWRyB0byBIVE1MIGlzIHZpYVxuICAgICAgICAvLyBIVE1MIGludGVncmF0aW9uIHBvaW50cywgYW5kIGZyb20gTWF0aE1MIHRvIEhUTUxcbiAgICAgICAgLy8gaXMgdmlhIE1hdGhNTCB0ZXh0IGludGVncmF0aW9uIHBvaW50c1xuICAgICAgICBpZiAocGFyZW50Lm5hbWVzcGFjZVVSSSA9PT0gU1ZHX05BTUVTUEFDRSAmJiAhSFRNTF9JTlRFR1JBVElPTl9QT0lOVFNbcGFyZW50VGFnTmFtZV0pIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyZW50Lm5hbWVzcGFjZVVSSSA9PT0gTUFUSE1MX05BTUVTUEFDRSAmJiAhTUFUSE1MX1RFWFRfSU5URUdSQVRJT05fUE9JTlRTW3BhcmVudFRhZ05hbWVdKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IC8vIFdlIGRpc2FsbG93IHRhZ3MgdGhhdCBhcmUgc3BlY2lmaWMgZm9yIE1hdGhNTFxuICAgICAgICAvLyBvciBTVkcgYW5kIHNob3VsZCBuZXZlciBhcHBlYXIgaW4gSFRNTCBuYW1lc3BhY2VcblxuXG4gICAgICAgIHJldHVybiAhQUxMX01BVEhNTF9UQUdTW3RhZ05hbWVdICYmIChDT01NT05fU1ZHX0FORF9IVE1MX0VMRU1FTlRTW3RhZ05hbWVdIHx8ICFBTExfU1ZHX1RBR1NbdGFnTmFtZV0pO1xuICAgICAgfSAvLyBGb3IgWEhUTUwgYW5kIFhNTCBkb2N1bWVudHMgdGhhdCBzdXBwb3J0IGN1c3RvbSBuYW1lc3BhY2VzXG5cblxuICAgICAgaWYgKFBBUlNFUl9NRURJQV9UWVBFID09PSAnYXBwbGljYXRpb24veGh0bWwreG1sJyAmJiBBTExPV0VEX05BTUVTUEFDRVNbZWxlbWVudC5uYW1lc3BhY2VVUkldKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSAvLyBUaGUgY29kZSBzaG91bGQgbmV2ZXIgcmVhY2ggdGhpcyBwbGFjZSAodGhpcyBtZWFuc1xuICAgICAgLy8gdGhhdCB0aGUgZWxlbWVudCBzb21laG93IGdvdCBuYW1lc3BhY2UgdGhhdCBpcyBub3RcbiAgICAgIC8vIEhUTUwsIFNWRywgTWF0aE1MIG9yIGFsbG93ZWQgdmlhIEFMTE9XRURfTkFNRVNQQUNFUykuXG4gICAgICAvLyBSZXR1cm4gZmFsc2UganVzdCBpbiBjYXNlLlxuXG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIF9mb3JjZVJlbW92ZVxuICAgICAqXG4gICAgICogQHBhcmFtICB7Tm9kZX0gbm9kZSBhIERPTSBub2RlXG4gICAgICovXG5cblxuICAgIHZhciBfZm9yY2VSZW1vdmUgPSBmdW5jdGlvbiBfZm9yY2VSZW1vdmUobm9kZSkge1xuICAgICAgYXJyYXlQdXNoKERPTVB1cmlmeS5yZW1vdmVkLCB7XG4gICAgICAgIGVsZW1lbnQ6IG5vZGVcbiAgICAgIH0pO1xuXG4gICAgICB0cnkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItZG9tLW5vZGUtcmVtb3ZlXG4gICAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBub2RlLm91dGVySFRNTCA9IGVtcHR5SFRNTDtcbiAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgIG5vZGUucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIF9yZW1vdmVBdHRyaWJ1dGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gbmFtZSBhbiBBdHRyaWJ1dGUgbmFtZVxuICAgICAqIEBwYXJhbSAge05vZGV9IG5vZGUgYSBET00gbm9kZVxuICAgICAqL1xuXG5cbiAgICB2YXIgX3JlbW92ZUF0dHJpYnV0ZSA9IGZ1bmN0aW9uIF9yZW1vdmVBdHRyaWJ1dGUobmFtZSwgbm9kZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXJyYXlQdXNoKERPTVB1cmlmeS5yZW1vdmVkLCB7XG4gICAgICAgICAgYXR0cmlidXRlOiBub2RlLmdldEF0dHJpYnV0ZU5vZGUobmFtZSksXG4gICAgICAgICAgZnJvbTogbm9kZVxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgYXJyYXlQdXNoKERPTVB1cmlmeS5yZW1vdmVkLCB7XG4gICAgICAgICAgYXR0cmlidXRlOiBudWxsLFxuICAgICAgICAgIGZyb206IG5vZGVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKG5hbWUpOyAvLyBXZSB2b2lkIGF0dHJpYnV0ZSB2YWx1ZXMgZm9yIHVucmVtb3ZhYmxlIFwiaXNcIlwiIGF0dHJpYnV0ZXNcblxuICAgICAgaWYgKG5hbWUgPT09ICdpcycgJiYgIUFMTE9XRURfQVRUUltuYW1lXSkge1xuICAgICAgICBpZiAoUkVUVVJOX0RPTSB8fCBSRVRVUk5fRE9NX0ZSQUdNRU5UKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIF9mb3JjZVJlbW92ZShub2RlKTtcbiAgICAgICAgICB9IGNhdGNoIChfKSB7fVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShuYW1lLCAnJyk7XG4gICAgICAgICAgfSBjYXRjaCAoXykge31cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogX2luaXREb2N1bWVudFxuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBkaXJ0eSBhIHN0cmluZyBvZiBkaXJ0eSBtYXJrdXBcbiAgICAgKiBAcmV0dXJuIHtEb2N1bWVudH0gYSBET00sIGZpbGxlZCB3aXRoIHRoZSBkaXJ0eSBtYXJrdXBcbiAgICAgKi9cblxuXG4gICAgdmFyIF9pbml0RG9jdW1lbnQgPSBmdW5jdGlvbiBfaW5pdERvY3VtZW50KGRpcnR5KSB7XG4gICAgICAvKiBDcmVhdGUgYSBIVE1MIGRvY3VtZW50ICovXG4gICAgICB2YXIgZG9jO1xuICAgICAgdmFyIGxlYWRpbmdXaGl0ZXNwYWNlO1xuXG4gICAgICBpZiAoRk9SQ0VfQk9EWSkge1xuICAgICAgICBkaXJ0eSA9ICc8cmVtb3ZlPjwvcmVtb3ZlPicgKyBkaXJ0eTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qIElmIEZPUkNFX0JPRFkgaXNuJ3QgdXNlZCwgbGVhZGluZyB3aGl0ZXNwYWNlIG5lZWRzIHRvIGJlIHByZXNlcnZlZCBtYW51YWxseSAqL1xuICAgICAgICB2YXIgbWF0Y2hlcyA9IHN0cmluZ01hdGNoKGRpcnR5LCAvXltcXHJcXG5cXHQgXSsvKTtcbiAgICAgICAgbGVhZGluZ1doaXRlc3BhY2UgPSBtYXRjaGVzICYmIG1hdGNoZXNbMF07XG4gICAgICB9XG5cbiAgICAgIGlmIChQQVJTRVJfTUVESUFfVFlQRSA9PT0gJ2FwcGxpY2F0aW9uL3hodG1sK3htbCcgJiYgTkFNRVNQQUNFID09PSBIVE1MX05BTUVTUEFDRSkge1xuICAgICAgICAvLyBSb290IG9mIFhIVE1MIGRvYyBtdXN0IGNvbnRhaW4geG1sbnMgZGVjbGFyYXRpb24gKHNlZSBodHRwczovL3d3dy53My5vcmcvVFIveGh0bWwxL25vcm1hdGl2ZS5odG1sI3N0cmljdClcbiAgICAgICAgZGlydHkgPSAnPGh0bWwgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI+PGhlYWQ+PC9oZWFkPjxib2R5PicgKyBkaXJ0eSArICc8L2JvZHk+PC9odG1sPic7XG4gICAgICB9XG5cbiAgICAgIHZhciBkaXJ0eVBheWxvYWQgPSB0cnVzdGVkVHlwZXNQb2xpY3kgPyB0cnVzdGVkVHlwZXNQb2xpY3kuY3JlYXRlSFRNTChkaXJ0eSkgOiBkaXJ0eTtcbiAgICAgIC8qXG4gICAgICAgKiBVc2UgdGhlIERPTVBhcnNlciBBUEkgYnkgZGVmYXVsdCwgZmFsbGJhY2sgbGF0ZXIgaWYgbmVlZHMgYmVcbiAgICAgICAqIERPTVBhcnNlciBub3Qgd29yayBmb3Igc3ZnIHdoZW4gaGFzIG11bHRpcGxlIHJvb3QgZWxlbWVudC5cbiAgICAgICAqL1xuXG4gICAgICBpZiAoTkFNRVNQQUNFID09PSBIVE1MX05BTUVTUEFDRSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoZGlydHlQYXlsb2FkLCBQQVJTRVJfTUVESUFfVFlQRSk7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHt9XG4gICAgICB9XG4gICAgICAvKiBVc2UgY3JlYXRlSFRNTERvY3VtZW50IGluIGNhc2UgRE9NUGFyc2VyIGlzIG5vdCBhdmFpbGFibGUgKi9cblxuXG4gICAgICBpZiAoIWRvYyB8fCAhZG9jLmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICBkb2MgPSBpbXBsZW1lbnRhdGlvbi5jcmVhdGVEb2N1bWVudChOQU1FU1BBQ0UsICd0ZW1wbGF0ZScsIG51bGwpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZG9jLmRvY3VtZW50RWxlbWVudC5pbm5lckhUTUwgPSBJU19FTVBUWV9JTlBVVCA/IGVtcHR5SFRNTCA6IGRpcnR5UGF5bG9hZDtcbiAgICAgICAgfSBjYXRjaCAoXykgey8vIFN5bnRheCBlcnJvciBpZiBkaXJ0eVBheWxvYWQgaXMgaW52YWxpZCB4bWxcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgYm9keSA9IGRvYy5ib2R5IHx8IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICAgIGlmIChkaXJ0eSAmJiBsZWFkaW5nV2hpdGVzcGFjZSkge1xuICAgICAgICBib2R5Lmluc2VydEJlZm9yZShkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShsZWFkaW5nV2hpdGVzcGFjZSksIGJvZHkuY2hpbGROb2Rlc1swXSB8fCBudWxsKTtcbiAgICAgIH1cbiAgICAgIC8qIFdvcmsgb24gd2hvbGUgZG9jdW1lbnQgb3IganVzdCBpdHMgYm9keSAqL1xuXG5cbiAgICAgIGlmIChOQU1FU1BBQ0UgPT09IEhUTUxfTkFNRVNQQUNFKSB7XG4gICAgICAgIHJldHVybiBnZXRFbGVtZW50c0J5VGFnTmFtZS5jYWxsKGRvYywgV0hPTEVfRE9DVU1FTlQgPyAnaHRtbCcgOiAnYm9keScpWzBdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gV0hPTEVfRE9DVU1FTlQgPyBkb2MuZG9jdW1lbnRFbGVtZW50IDogYm9keTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIF9jcmVhdGVJdGVyYXRvclxuICAgICAqXG4gICAgICogQHBhcmFtICB7RG9jdW1lbnR9IHJvb3QgZG9jdW1lbnQvZnJhZ21lbnQgdG8gY3JlYXRlIGl0ZXJhdG9yIGZvclxuICAgICAqIEByZXR1cm4ge0l0ZXJhdG9yfSBpdGVyYXRvciBpbnN0YW5jZVxuICAgICAqL1xuXG5cbiAgICB2YXIgX2NyZWF0ZUl0ZXJhdG9yID0gZnVuY3Rpb24gX2NyZWF0ZUl0ZXJhdG9yKHJvb3QpIHtcbiAgICAgIHJldHVybiBjcmVhdGVOb2RlSXRlcmF0b3IuY2FsbChyb290Lm93bmVyRG9jdW1lbnQgfHwgcm9vdCwgcm9vdCwgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2VcbiAgICAgIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5UIHwgTm9kZUZpbHRlci5TSE9XX0NPTU1FTlQgfCBOb2RlRmlsdGVyLlNIT1dfVEVYVCwgbnVsbCwgZmFsc2UpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogX2lzQ2xvYmJlcmVkXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtOb2RlfSBlbG0gZWxlbWVudCB0byBjaGVjayBmb3IgY2xvYmJlcmluZyBhdHRhY2tzXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBjbG9iYmVyZWQsIGZhbHNlIGlmIHNhZmVcbiAgICAgKi9cblxuXG4gICAgdmFyIF9pc0Nsb2JiZXJlZCA9IGZ1bmN0aW9uIF9pc0Nsb2JiZXJlZChlbG0pIHtcbiAgICAgIHJldHVybiBlbG0gaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQgJiYgKHR5cGVvZiBlbG0ubm9kZU5hbWUgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiBlbG0udGV4dENvbnRlbnQgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiBlbG0ucmVtb3ZlQ2hpbGQgIT09ICdmdW5jdGlvbicgfHwgIShlbG0uYXR0cmlidXRlcyBpbnN0YW5jZW9mIE5hbWVkTm9kZU1hcCkgfHwgdHlwZW9mIGVsbS5yZW1vdmVBdHRyaWJ1dGUgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIGVsbS5zZXRBdHRyaWJ1dGUgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIGVsbS5uYW1lc3BhY2VVUkkgIT09ICdzdHJpbmcnIHx8IHR5cGVvZiBlbG0uaW5zZXJ0QmVmb3JlICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBlbG0uaGFzQ2hpbGROb2RlcyAhPT0gJ2Z1bmN0aW9uJyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBfaXNOb2RlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtOb2RlfSBvYmogb2JqZWN0IHRvIGNoZWNrIHdoZXRoZXIgaXQncyBhIERPTSBub2RlXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpcyBvYmplY3QgaXMgYSBET00gbm9kZVxuICAgICAqL1xuXG5cbiAgICB2YXIgX2lzTm9kZSA9IGZ1bmN0aW9uIF9pc05vZGUob2JqZWN0KSB7XG4gICAgICByZXR1cm4gX3R5cGVvZihOb2RlKSA9PT0gJ29iamVjdCcgPyBvYmplY3QgaW5zdGFuY2VvZiBOb2RlIDogb2JqZWN0ICYmIF90eXBlb2Yob2JqZWN0KSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG9iamVjdC5ub2RlVHlwZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIG9iamVjdC5ub2RlTmFtZSA9PT0gJ3N0cmluZyc7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBfZXhlY3V0ZUhvb2tcbiAgICAgKiBFeGVjdXRlIHVzZXIgY29uZmlndXJhYmxlIGhvb2tzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGVudHJ5UG9pbnQgIE5hbWUgb2YgdGhlIGhvb2sncyBlbnRyeSBwb2ludFxuICAgICAqIEBwYXJhbSAge05vZGV9IGN1cnJlbnROb2RlIG5vZGUgdG8gd29yayBvbiB3aXRoIHRoZSBob29rXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIGFkZGl0aW9uYWwgaG9vayBwYXJhbWV0ZXJzXG4gICAgICovXG5cblxuICAgIHZhciBfZXhlY3V0ZUhvb2sgPSBmdW5jdGlvbiBfZXhlY3V0ZUhvb2soZW50cnlQb2ludCwgY3VycmVudE5vZGUsIGRhdGEpIHtcbiAgICAgIGlmICghaG9va3NbZW50cnlQb2ludF0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcnJheUZvckVhY2goaG9va3NbZW50cnlQb2ludF0sIGZ1bmN0aW9uIChob29rKSB7XG4gICAgICAgIGhvb2suY2FsbChET01QdXJpZnksIGN1cnJlbnROb2RlLCBkYXRhLCBDT05GSUcpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBfc2FuaXRpemVFbGVtZW50c1xuICAgICAqXG4gICAgICogQHByb3RlY3Qgbm9kZU5hbWVcbiAgICAgKiBAcHJvdGVjdCB0ZXh0Q29udGVudFxuICAgICAqIEBwcm90ZWN0IHJlbW92ZUNoaWxkXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7Tm9kZX0gY3VycmVudE5vZGUgdG8gY2hlY2sgZm9yIHBlcm1pc3Npb24gdG8gZXhpc3RcbiAgICAgKiBAcmV0dXJuICB7Qm9vbGVhbn0gdHJ1ZSBpZiBub2RlIHdhcyBraWxsZWQsIGZhbHNlIGlmIGxlZnQgYWxpdmVcbiAgICAgKi9cblxuXG4gICAgdmFyIF9zYW5pdGl6ZUVsZW1lbnRzID0gZnVuY3Rpb24gX3Nhbml0aXplRWxlbWVudHMoY3VycmVudE5vZGUpIHtcbiAgICAgIHZhciBjb250ZW50O1xuICAgICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuXG4gICAgICBfZXhlY3V0ZUhvb2soJ2JlZm9yZVNhbml0aXplRWxlbWVudHMnLCBjdXJyZW50Tm9kZSwgbnVsbCk7XG4gICAgICAvKiBDaGVjayBpZiBlbGVtZW50IGlzIGNsb2JiZXJlZCBvciBjYW4gY2xvYmJlciAqL1xuXG5cbiAgICAgIGlmIChfaXNDbG9iYmVyZWQoY3VycmVudE5vZGUpKSB7XG4gICAgICAgIF9mb3JjZVJlbW92ZShjdXJyZW50Tm9kZSk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICAvKiBDaGVjayBpZiB0YWduYW1lIGNvbnRhaW5zIFVuaWNvZGUgKi9cblxuXG4gICAgICBpZiAocmVnRXhwVGVzdCgvW1xcdTAwODAtXFx1RkZGRl0vLCBjdXJyZW50Tm9kZS5ub2RlTmFtZSkpIHtcbiAgICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8qIE5vdyBsZXQncyBjaGVjayB0aGUgZWxlbWVudCdzIHR5cGUgYW5kIG5hbWUgKi9cblxuXG4gICAgICB2YXIgdGFnTmFtZSA9IHRyYW5zZm9ybUNhc2VGdW5jKGN1cnJlbnROb2RlLm5vZGVOYW1lKTtcbiAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cblxuICAgICAgX2V4ZWN1dGVIb29rKCd1cG9uU2FuaXRpemVFbGVtZW50JywgY3VycmVudE5vZGUsIHtcbiAgICAgICAgdGFnTmFtZTogdGFnTmFtZSxcbiAgICAgICAgYWxsb3dlZFRhZ3M6IEFMTE9XRURfVEFHU1xuICAgICAgfSk7XG4gICAgICAvKiBEZXRlY3QgbVhTUyBhdHRlbXB0cyBhYnVzaW5nIG5hbWVzcGFjZSBjb25mdXNpb24gKi9cblxuXG4gICAgICBpZiAoY3VycmVudE5vZGUuaGFzQ2hpbGROb2RlcygpICYmICFfaXNOb2RlKGN1cnJlbnROb2RlLmZpcnN0RWxlbWVudENoaWxkKSAmJiAoIV9pc05vZGUoY3VycmVudE5vZGUuY29udGVudCkgfHwgIV9pc05vZGUoY3VycmVudE5vZGUuY29udGVudC5maXJzdEVsZW1lbnRDaGlsZCkpICYmIHJlZ0V4cFRlc3QoLzxbL1xcd10vZywgY3VycmVudE5vZGUuaW5uZXJIVE1MKSAmJiByZWdFeHBUZXN0KC88Wy9cXHddL2csIGN1cnJlbnROb2RlLnRleHRDb250ZW50KSkge1xuICAgICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgLyogTWl0aWdhdGUgYSBwcm9ibGVtIHdpdGggdGVtcGxhdGVzIGluc2lkZSBzZWxlY3QgKi9cblxuXG4gICAgICBpZiAodGFnTmFtZSA9PT0gJ3NlbGVjdCcgJiYgcmVnRXhwVGVzdCgvPHRlbXBsYXRlL2ksIGN1cnJlbnROb2RlLmlubmVySFRNTCkpIHtcbiAgICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8qIFJlbW92ZSBlbGVtZW50IGlmIGFueXRoaW5nIGZvcmJpZHMgaXRzIHByZXNlbmNlICovXG5cblxuICAgICAgaWYgKCFBTExPV0VEX1RBR1NbdGFnTmFtZV0gfHwgRk9SQklEX1RBR1NbdGFnTmFtZV0pIHtcbiAgICAgICAgLyogQ2hlY2sgaWYgd2UgaGF2ZSBhIGN1c3RvbSBlbGVtZW50IHRvIGhhbmRsZSAqL1xuICAgICAgICBpZiAoIUZPUkJJRF9UQUdTW3RhZ05hbWVdICYmIF9iYXNpY0N1c3RvbUVsZW1lbnRUZXN0KHRhZ05hbWUpKSB7XG4gICAgICAgICAgaWYgKENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjayBpbnN0YW5jZW9mIFJlZ0V4cCAmJiByZWdFeHBUZXN0KENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjaywgdGFnTmFtZSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICBpZiAoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrIGluc3RhbmNlb2YgRnVuY3Rpb24gJiYgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrKHRhZ05hbWUpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLyogS2VlcCBjb250ZW50IGV4Y2VwdCBmb3IgYmFkLWxpc3RlZCBlbGVtZW50cyAqL1xuXG5cbiAgICAgICAgaWYgKEtFRVBfQ09OVEVOVCAmJiAhRk9SQklEX0NPTlRFTlRTW3RhZ05hbWVdKSB7XG4gICAgICAgICAgdmFyIHBhcmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKGN1cnJlbnROb2RlKSB8fCBjdXJyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgIHZhciBjaGlsZE5vZGVzID0gZ2V0Q2hpbGROb2RlcyhjdXJyZW50Tm9kZSkgfHwgY3VycmVudE5vZGUuY2hpbGROb2RlcztcblxuICAgICAgICAgIGlmIChjaGlsZE5vZGVzICYmIHBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIHZhciBjaGlsZENvdW50ID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBjaGlsZENvdW50IC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY2xvbmVOb2RlKGNoaWxkTm9kZXNbaV0sIHRydWUpLCBnZXROZXh0U2libGluZyhjdXJyZW50Tm9kZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF9mb3JjZVJlbW92ZShjdXJyZW50Tm9kZSk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICAvKiBDaGVjayB3aGV0aGVyIGVsZW1lbnQgaGFzIGEgdmFsaWQgbmFtZXNwYWNlICovXG5cblxuICAgICAgaWYgKGN1cnJlbnROb2RlIGluc3RhbmNlb2YgRWxlbWVudCAmJiAhX2NoZWNrVmFsaWROYW1lc3BhY2UoY3VycmVudE5vZGUpKSB7XG4gICAgICAgIF9mb3JjZVJlbW92ZShjdXJyZW50Tm9kZSk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICAvKiBNYWtlIHN1cmUgdGhhdCBvbGRlciBicm93c2VycyBkb24ndCBnZXQgZmFsbGJhY2stdGFnIG1YU1MgKi9cblxuXG4gICAgICBpZiAoKHRhZ05hbWUgPT09ICdub3NjcmlwdCcgfHwgdGFnTmFtZSA9PT0gJ25vZW1iZWQnIHx8IHRhZ05hbWUgPT09ICdub2ZyYW1lcycpICYmIHJlZ0V4cFRlc3QoLzxcXC9ubyhzY3JpcHR8ZW1iZWR8ZnJhbWVzKS9pLCBjdXJyZW50Tm9kZS5pbm5lckhUTUwpKSB7XG4gICAgICAgIF9mb3JjZVJlbW92ZShjdXJyZW50Tm9kZSk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICAvKiBTYW5pdGl6ZSBlbGVtZW50IGNvbnRlbnQgdG8gYmUgdGVtcGxhdGUtc2FmZSAqL1xuXG5cbiAgICAgIGlmIChTQUZFX0ZPUl9URU1QTEFURVMgJiYgY3VycmVudE5vZGUubm9kZVR5cGUgPT09IDMpIHtcbiAgICAgICAgLyogR2V0IHRoZSBlbGVtZW50J3MgdGV4dCBjb250ZW50ICovXG4gICAgICAgIGNvbnRlbnQgPSBjdXJyZW50Tm9kZS50ZXh0Q29udGVudDtcbiAgICAgICAgY29udGVudCA9IHN0cmluZ1JlcGxhY2UoY29udGVudCwgTVVTVEFDSEVfRVhQUiQxLCAnICcpO1xuICAgICAgICBjb250ZW50ID0gc3RyaW5nUmVwbGFjZShjb250ZW50LCBFUkJfRVhQUiQxLCAnICcpO1xuICAgICAgICBjb250ZW50ID0gc3RyaW5nUmVwbGFjZShjb250ZW50LCBUTVBMSVRfRVhQUiQxLCAnICcpO1xuXG4gICAgICAgIGlmIChjdXJyZW50Tm9kZS50ZXh0Q29udGVudCAhPT0gY29udGVudCkge1xuICAgICAgICAgIGFycmF5UHVzaChET01QdXJpZnkucmVtb3ZlZCwge1xuICAgICAgICAgICAgZWxlbWVudDogY3VycmVudE5vZGUuY2xvbmVOb2RlKClcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjdXJyZW50Tm9kZS50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cblxuXG4gICAgICBfZXhlY3V0ZUhvb2soJ2FmdGVyU2FuaXRpemVFbGVtZW50cycsIGN1cnJlbnROb2RlLCBudWxsKTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogX2lzVmFsaWRBdHRyaWJ1dGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gbGNUYWcgTG93ZXJjYXNlIHRhZyBuYW1lIG9mIGNvbnRhaW5pbmcgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGxjTmFtZSBMb3dlcmNhc2UgYXR0cmlidXRlIG5hbWUuXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSB2YWx1ZSBBdHRyaWJ1dGUgdmFsdWUuXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIGB2YWx1ZWAgaXMgdmFsaWQsIG90aGVyd2lzZSBmYWxzZS5cbiAgICAgKi9cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuXG5cbiAgICB2YXIgX2lzVmFsaWRBdHRyaWJ1dGUgPSBmdW5jdGlvbiBfaXNWYWxpZEF0dHJpYnV0ZShsY1RhZywgbGNOYW1lLCB2YWx1ZSkge1xuICAgICAgLyogTWFrZSBzdXJlIGF0dHJpYnV0ZSBjYW5ub3QgY2xvYmJlciAqL1xuICAgICAgaWYgKFNBTklUSVpFX0RPTSAmJiAobGNOYW1lID09PSAnaWQnIHx8IGxjTmFtZSA9PT0gJ25hbWUnKSAmJiAodmFsdWUgaW4gZG9jdW1lbnQgfHwgdmFsdWUgaW4gZm9ybUVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8qIEFsbG93IHZhbGlkIGRhdGEtKiBhdHRyaWJ1dGVzOiBBdCBsZWFzdCBvbmUgY2hhcmFjdGVyIGFmdGVyIFwiLVwiXG4gICAgICAgICAgKGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2RvbS5odG1sI2VtYmVkZGluZy1jdXN0b20tbm9uLXZpc2libGUtZGF0YS13aXRoLXRoZS1kYXRhLSotYXR0cmlidXRlcylcbiAgICAgICAgICBYTUwtY29tcGF0aWJsZSAoaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW5mcmFzdHJ1Y3R1cmUuaHRtbCN4bWwtY29tcGF0aWJsZSBhbmQgaHR0cDovL3d3dy53My5vcmcvVFIveG1sLyNkMGU4MDQpXG4gICAgICAgICAgV2UgZG9uJ3QgbmVlZCB0byBjaGVjayB0aGUgdmFsdWU7IGl0J3MgYWx3YXlzIFVSSSBzYWZlLiAqL1xuXG5cbiAgICAgIGlmIChBTExPV19EQVRBX0FUVFIgJiYgIUZPUkJJRF9BVFRSW2xjTmFtZV0gJiYgcmVnRXhwVGVzdChEQVRBX0FUVFIkMSwgbGNOYW1lKSkgOyBlbHNlIGlmIChBTExPV19BUklBX0FUVFIgJiYgcmVnRXhwVGVzdChBUklBX0FUVFIkMSwgbGNOYW1lKSkgOyBlbHNlIGlmICghQUxMT1dFRF9BVFRSW2xjTmFtZV0gfHwgRk9SQklEX0FUVFJbbGNOYW1lXSkge1xuICAgICAgICBpZiAoIC8vIEZpcnN0IGNvbmRpdGlvbiBkb2VzIGEgdmVyeSBiYXNpYyBjaGVjayBpZiBhKSBpdCdzIGJhc2ljYWxseSBhIHZhbGlkIGN1c3RvbSBlbGVtZW50IHRhZ25hbWUgQU5EXG4gICAgICAgIC8vIGIpIGlmIHRoZSB0YWdOYW1lIHBhc3NlcyB3aGF0ZXZlciB0aGUgdXNlciBoYXMgY29uZmlndXJlZCBmb3IgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrXG4gICAgICAgIC8vIGFuZCBjKSBpZiB0aGUgYXR0cmlidXRlIG5hbWUgcGFzc2VzIHdoYXRldmVyIHRoZSB1c2VyIGhhcyBjb25maWd1cmVkIGZvciBDVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2tcbiAgICAgICAgX2Jhc2ljQ3VzdG9tRWxlbWVudFRlc3QobGNUYWcpICYmIChDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sgaW5zdGFuY2VvZiBSZWdFeHAgJiYgcmVnRXhwVGVzdChDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2ssIGxjVGFnKSB8fCBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sgaW5zdGFuY2VvZiBGdW5jdGlvbiAmJiBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sobGNUYWcpKSAmJiAoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYXR0cmlidXRlTmFtZUNoZWNrIGluc3RhbmNlb2YgUmVnRXhwICYmIHJlZ0V4cFRlc3QoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYXR0cmlidXRlTmFtZUNoZWNrLCBsY05hbWUpIHx8IENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmF0dHJpYnV0ZU5hbWVDaGVjayBpbnN0YW5jZW9mIEZ1bmN0aW9uICYmIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmF0dHJpYnV0ZU5hbWVDaGVjayhsY05hbWUpKSB8fCAvLyBBbHRlcm5hdGl2ZSwgc2Vjb25kIGNvbmRpdGlvbiBjaGVja3MgaWYgaXQncyBhbiBgaXNgLWF0dHJpYnV0ZSwgQU5EXG4gICAgICAgIC8vIHRoZSB2YWx1ZSBwYXNzZXMgd2hhdGV2ZXIgdGhlIHVzZXIgaGFzIGNvbmZpZ3VyZWQgZm9yIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVja1xuICAgICAgICBsY05hbWUgPT09ICdpcycgJiYgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYWxsb3dDdXN0b21pemVkQnVpbHRJbkVsZW1lbnRzICYmIChDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sgaW5zdGFuY2VvZiBSZWdFeHAgJiYgcmVnRXhwVGVzdChDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2ssIHZhbHVlKSB8fCBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sgaW5zdGFuY2VvZiBGdW5jdGlvbiAmJiBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sodmFsdWUpKSkgOyBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLyogQ2hlY2sgdmFsdWUgaXMgc2FmZS4gRmlyc3QsIGlzIGF0dHIgaW5lcnQ/IElmIHNvLCBpcyBzYWZlICovXG5cbiAgICAgIH0gZWxzZSBpZiAoVVJJX1NBRkVfQVRUUklCVVRFU1tsY05hbWVdKSA7IGVsc2UgaWYgKHJlZ0V4cFRlc3QoSVNfQUxMT1dFRF9VUkkkMSwgc3RyaW5nUmVwbGFjZSh2YWx1ZSwgQVRUUl9XSElURVNQQUNFJDEsICcnKSkpIDsgZWxzZSBpZiAoKGxjTmFtZSA9PT0gJ3NyYycgfHwgbGNOYW1lID09PSAneGxpbms6aHJlZicgfHwgbGNOYW1lID09PSAnaHJlZicpICYmIGxjVGFnICE9PSAnc2NyaXB0JyAmJiBzdHJpbmdJbmRleE9mKHZhbHVlLCAnZGF0YTonKSA9PT0gMCAmJiBEQVRBX1VSSV9UQUdTW2xjVGFnXSkgOyBlbHNlIGlmIChBTExPV19VTktOT1dOX1BST1RPQ09MUyAmJiAhcmVnRXhwVGVzdChJU19TQ1JJUFRfT1JfREFUQSQxLCBzdHJpbmdSZXBsYWNlKHZhbHVlLCBBVFRSX1dISVRFU1BBQ0UkMSwgJycpKSkgOyBlbHNlIGlmICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2UgO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIF9iYXNpY0N1c3RvbUVsZW1lbnRDaGVja1xuICAgICAqIGNoZWNrcyBpZiBhdCBsZWFzdCBvbmUgZGFzaCBpcyBpbmNsdWRlZCBpbiB0YWdOYW1lLCBhbmQgaXQncyBub3QgdGhlIGZpcnN0IGNoYXJcbiAgICAgKiBmb3IgbW9yZSBzb3BoaXN0aWNhdGVkIGNoZWNraW5nIHNlZSBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL3ZhbGlkYXRlLWVsZW1lbnQtbmFtZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0YWdOYW1lIG5hbWUgb2YgdGhlIHRhZyBvZiB0aGUgbm9kZSB0byBzYW5pdGl6ZVxuICAgICAqL1xuXG5cbiAgICB2YXIgX2Jhc2ljQ3VzdG9tRWxlbWVudFRlc3QgPSBmdW5jdGlvbiBfYmFzaWNDdXN0b21FbGVtZW50VGVzdCh0YWdOYW1lKSB7XG4gICAgICByZXR1cm4gdGFnTmFtZS5pbmRleE9mKCctJykgPiAwO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogX3Nhbml0aXplQXR0cmlidXRlc1xuICAgICAqXG4gICAgICogQHByb3RlY3QgYXR0cmlidXRlc1xuICAgICAqIEBwcm90ZWN0IG5vZGVOYW1lXG4gICAgICogQHByb3RlY3QgcmVtb3ZlQXR0cmlidXRlXG4gICAgICogQHByb3RlY3Qgc2V0QXR0cmlidXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtOb2RlfSBjdXJyZW50Tm9kZSB0byBzYW5pdGl6ZVxuICAgICAqL1xuXG5cbiAgICB2YXIgX3Nhbml0aXplQXR0cmlidXRlcyA9IGZ1bmN0aW9uIF9zYW5pdGl6ZUF0dHJpYnV0ZXMoY3VycmVudE5vZGUpIHtcbiAgICAgIHZhciBhdHRyO1xuICAgICAgdmFyIHZhbHVlO1xuICAgICAgdmFyIGxjTmFtZTtcbiAgICAgIHZhciBsO1xuICAgICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuXG4gICAgICBfZXhlY3V0ZUhvb2soJ2JlZm9yZVNhbml0aXplQXR0cmlidXRlcycsIGN1cnJlbnROb2RlLCBudWxsKTtcblxuICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBjdXJyZW50Tm9kZS5hdHRyaWJ1dGVzO1xuICAgICAgLyogQ2hlY2sgaWYgd2UgaGF2ZSBhdHRyaWJ1dGVzOyBpZiBub3Qgd2UgbWlnaHQgaGF2ZSBhIHRleHQgbm9kZSAqL1xuXG4gICAgICBpZiAoIWF0dHJpYnV0ZXMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgaG9va0V2ZW50ID0ge1xuICAgICAgICBhdHRyTmFtZTogJycsXG4gICAgICAgIGF0dHJWYWx1ZTogJycsXG4gICAgICAgIGtlZXBBdHRyOiB0cnVlLFxuICAgICAgICBhbGxvd2VkQXR0cmlidXRlczogQUxMT1dFRF9BVFRSXG4gICAgICB9O1xuICAgICAgbCA9IGF0dHJpYnV0ZXMubGVuZ3RoO1xuICAgICAgLyogR28gYmFja3dhcmRzIG92ZXIgYWxsIGF0dHJpYnV0ZXM7IHNhZmVseSByZW1vdmUgYmFkIG9uZXMgKi9cblxuICAgICAgd2hpbGUgKGwtLSkge1xuICAgICAgICBhdHRyID0gYXR0cmlidXRlc1tsXTtcbiAgICAgICAgdmFyIF9hdHRyID0gYXR0cixcbiAgICAgICAgICAgIG5hbWUgPSBfYXR0ci5uYW1lLFxuICAgICAgICAgICAgbmFtZXNwYWNlVVJJID0gX2F0dHIubmFtZXNwYWNlVVJJO1xuICAgICAgICB2YWx1ZSA9IG5hbWUgPT09ICd2YWx1ZScgPyBhdHRyLnZhbHVlIDogc3RyaW5nVHJpbShhdHRyLnZhbHVlKTtcbiAgICAgICAgbGNOYW1lID0gdHJhbnNmb3JtQ2FzZUZ1bmMobmFtZSk7XG4gICAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cblxuICAgICAgICBob29rRXZlbnQuYXR0ck5hbWUgPSBsY05hbWU7XG4gICAgICAgIGhvb2tFdmVudC5hdHRyVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgaG9va0V2ZW50LmtlZXBBdHRyID0gdHJ1ZTtcbiAgICAgICAgaG9va0V2ZW50LmZvcmNlS2VlcEF0dHIgPSB1bmRlZmluZWQ7IC8vIEFsbG93cyBkZXZlbG9wZXJzIHRvIHNlZSB0aGlzIGlzIGEgcHJvcGVydHkgdGhleSBjYW4gc2V0XG5cbiAgICAgICAgX2V4ZWN1dGVIb29rKCd1cG9uU2FuaXRpemVBdHRyaWJ1dGUnLCBjdXJyZW50Tm9kZSwgaG9va0V2ZW50KTtcblxuICAgICAgICB2YWx1ZSA9IGhvb2tFdmVudC5hdHRyVmFsdWU7XG4gICAgICAgIC8qIERpZCB0aGUgaG9va3MgYXBwcm92ZSBvZiB0aGUgYXR0cmlidXRlPyAqL1xuXG4gICAgICAgIGlmIChob29rRXZlbnQuZm9yY2VLZWVwQXR0cikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIC8qIFJlbW92ZSBhdHRyaWJ1dGUgKi9cblxuXG4gICAgICAgIF9yZW1vdmVBdHRyaWJ1dGUobmFtZSwgY3VycmVudE5vZGUpO1xuICAgICAgICAvKiBEaWQgdGhlIGhvb2tzIGFwcHJvdmUgb2YgdGhlIGF0dHJpYnV0ZT8gKi9cblxuXG4gICAgICAgIGlmICghaG9va0V2ZW50LmtlZXBBdHRyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgLyogV29yayBhcm91bmQgYSBzZWN1cml0eSBpc3N1ZSBpbiBqUXVlcnkgMy4wICovXG5cblxuICAgICAgICBpZiAoIUFMTE9XX1NFTEZfQ0xPU0VfSU5fQVRUUiAmJiByZWdFeHBUZXN0KC9cXC8+L2ksIHZhbHVlKSkge1xuICAgICAgICAgIF9yZW1vdmVBdHRyaWJ1dGUobmFtZSwgY3VycmVudE5vZGUpO1xuXG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgLyogU2FuaXRpemUgYXR0cmlidXRlIGNvbnRlbnQgdG8gYmUgdGVtcGxhdGUtc2FmZSAqL1xuXG5cbiAgICAgICAgaWYgKFNBRkVfRk9SX1RFTVBMQVRFUykge1xuICAgICAgICAgIHZhbHVlID0gc3RyaW5nUmVwbGFjZSh2YWx1ZSwgTVVTVEFDSEVfRVhQUiQxLCAnICcpO1xuICAgICAgICAgIHZhbHVlID0gc3RyaW5nUmVwbGFjZSh2YWx1ZSwgRVJCX0VYUFIkMSwgJyAnKTtcbiAgICAgICAgICB2YWx1ZSA9IHN0cmluZ1JlcGxhY2UodmFsdWUsIFRNUExJVF9FWFBSJDEsICcgJyk7XG4gICAgICAgIH1cbiAgICAgICAgLyogSXMgYHZhbHVlYCB2YWxpZCBmb3IgdGhpcyBhdHRyaWJ1dGU/ICovXG5cblxuICAgICAgICB2YXIgbGNUYWcgPSB0cmFuc2Zvcm1DYXNlRnVuYyhjdXJyZW50Tm9kZS5ub2RlTmFtZSk7XG5cbiAgICAgICAgaWYgKCFfaXNWYWxpZEF0dHJpYnV0ZShsY1RhZywgbGNOYW1lLCB2YWx1ZSkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICAvKiBGdWxsIERPTSBDbG9iYmVyaW5nIHByb3RlY3Rpb24gdmlhIG5hbWVzcGFjZSBpc29sYXRpb24sXG4gICAgICAgICAqIFByZWZpeCBpZCBhbmQgbmFtZSBhdHRyaWJ1dGVzIHdpdGggYHVzZXItY29udGVudC1gXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgaWYgKFNBTklUSVpFX05BTUVEX1BST1BTICYmIChsY05hbWUgPT09ICdpZCcgfHwgbGNOYW1lID09PSAnbmFtZScpKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIHRoZSBhdHRyaWJ1dGUgd2l0aCB0aGlzIHZhbHVlXG4gICAgICAgICAgX3JlbW92ZUF0dHJpYnV0ZShuYW1lLCBjdXJyZW50Tm9kZSk7IC8vIFByZWZpeCB0aGUgdmFsdWUgYW5kIGxhdGVyIHJlLWNyZWF0ZSB0aGUgYXR0cmlidXRlIHdpdGggdGhlIHNhbml0aXplZCB2YWx1ZVxuXG5cbiAgICAgICAgICB2YWx1ZSA9IFNBTklUSVpFX05BTUVEX1BST1BTX1BSRUZJWCArIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIC8qIEhhbmRsZSBhdHRyaWJ1dGVzIHRoYXQgcmVxdWlyZSBUcnVzdGVkIFR5cGVzICovXG5cblxuICAgICAgICBpZiAodHJ1c3RlZFR5cGVzUG9saWN5ICYmIF90eXBlb2YodHJ1c3RlZFR5cGVzKSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHRydXN0ZWRUeXBlcy5nZXRBdHRyaWJ1dGVUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgaWYgKG5hbWVzcGFjZVVSSSkgOyBlbHNlIHtcbiAgICAgICAgICAgIHN3aXRjaCAodHJ1c3RlZFR5cGVzLmdldEF0dHJpYnV0ZVR5cGUobGNUYWcsIGxjTmFtZSkpIHtcbiAgICAgICAgICAgICAgY2FzZSAnVHJ1c3RlZEhUTUwnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlID0gdHJ1c3RlZFR5cGVzUG9saWN5LmNyZWF0ZUhUTUwodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNhc2UgJ1RydXN0ZWRTY3JpcHRVUkwnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlID0gdHJ1c3RlZFR5cGVzUG9saWN5LmNyZWF0ZVNjcmlwdFVSTCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qIEhhbmRsZSBpbnZhbGlkIGRhdGEtKiBhdHRyaWJ1dGUgc2V0IGJ5IHRyeS1jYXRjaGluZyBpdCAqL1xuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAobmFtZXNwYWNlVVJJKSB7XG4gICAgICAgICAgICBjdXJyZW50Tm9kZS5zZXRBdHRyaWJ1dGVOUyhuYW1lc3BhY2VVUkksIG5hbWUsIHZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLyogRmFsbGJhY2sgdG8gc2V0QXR0cmlidXRlKCkgZm9yIGJyb3dzZXItdW5yZWNvZ25pemVkIG5hbWVzcGFjZXMgZS5nLiBcIngtc2NoZW1hXCIuICovXG4gICAgICAgICAgICBjdXJyZW50Tm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFycmF5UG9wKERPTVB1cmlmeS5yZW1vdmVkKTtcbiAgICAgICAgfSBjYXRjaCAoXykge31cbiAgICAgIH1cbiAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cblxuXG4gICAgICBfZXhlY3V0ZUhvb2soJ2FmdGVyU2FuaXRpemVBdHRyaWJ1dGVzJywgY3VycmVudE5vZGUsIG51bGwpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogX3Nhbml0aXplU2hhZG93RE9NXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtEb2N1bWVudEZyYWdtZW50fSBmcmFnbWVudCB0byBpdGVyYXRlIG92ZXIgcmVjdXJzaXZlbHlcbiAgICAgKi9cblxuXG4gICAgdmFyIF9zYW5pdGl6ZVNoYWRvd0RPTSA9IGZ1bmN0aW9uIF9zYW5pdGl6ZVNoYWRvd0RPTShmcmFnbWVudCkge1xuICAgICAgdmFyIHNoYWRvd05vZGU7XG5cbiAgICAgIHZhciBzaGFkb3dJdGVyYXRvciA9IF9jcmVhdGVJdGVyYXRvcihmcmFnbWVudCk7XG4gICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG5cblxuICAgICAgX2V4ZWN1dGVIb29rKCdiZWZvcmVTYW5pdGl6ZVNoYWRvd0RPTScsIGZyYWdtZW50LCBudWxsKTtcblxuICAgICAgd2hpbGUgKHNoYWRvd05vZGUgPSBzaGFkb3dJdGVyYXRvci5uZXh0Tm9kZSgpKSB7XG4gICAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICAgICAgX2V4ZWN1dGVIb29rKCd1cG9uU2FuaXRpemVTaGFkb3dOb2RlJywgc2hhZG93Tm9kZSwgbnVsbCk7XG4gICAgICAgIC8qIFNhbml0aXplIHRhZ3MgYW5kIGVsZW1lbnRzICovXG5cblxuICAgICAgICBpZiAoX3Nhbml0aXplRWxlbWVudHMoc2hhZG93Tm9kZSkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICAvKiBEZWVwIHNoYWRvdyBET00gZGV0ZWN0ZWQgKi9cblxuXG4gICAgICAgIGlmIChzaGFkb3dOb2RlLmNvbnRlbnQgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSB7XG4gICAgICAgICAgX3Nhbml0aXplU2hhZG93RE9NKHNoYWRvd05vZGUuY29udGVudCk7XG4gICAgICAgIH1cbiAgICAgICAgLyogQ2hlY2sgYXR0cmlidXRlcywgc2FuaXRpemUgaWYgbmVjZXNzYXJ5ICovXG5cblxuICAgICAgICBfc2FuaXRpemVBdHRyaWJ1dGVzKHNoYWRvd05vZGUpO1xuICAgICAgfVxuICAgICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuXG5cbiAgICAgIF9leGVjdXRlSG9vaygnYWZ0ZXJTYW5pdGl6ZVNoYWRvd0RPTScsIGZyYWdtZW50LCBudWxsKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNhbml0aXplXG4gICAgICogUHVibGljIG1ldGhvZCBwcm92aWRpbmcgY29yZSBzYW5pdGF0aW9uIGZ1bmN0aW9uYWxpdHlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfE5vZGV9IGRpcnR5IHN0cmluZyBvciBET00gbm9kZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAqL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG5cblxuICAgIERPTVB1cmlmeS5zYW5pdGl6ZSA9IGZ1bmN0aW9uIChkaXJ0eSkge1xuICAgICAgdmFyIGNmZyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICB2YXIgYm9keTtcbiAgICAgIHZhciBpbXBvcnRlZE5vZGU7XG4gICAgICB2YXIgY3VycmVudE5vZGU7XG4gICAgICB2YXIgb2xkTm9kZTtcbiAgICAgIHZhciByZXR1cm5Ob2RlO1xuICAgICAgLyogTWFrZSBzdXJlIHdlIGhhdmUgYSBzdHJpbmcgdG8gc2FuaXRpemUuXG4gICAgICAgIERPIE5PVCByZXR1cm4gZWFybHksIGFzIHRoaXMgd2lsbCByZXR1cm4gdGhlIHdyb25nIHR5cGUgaWZcbiAgICAgICAgdGhlIHVzZXIgaGFzIHJlcXVlc3RlZCBhIERPTSBvYmplY3QgcmF0aGVyIHRoYW4gYSBzdHJpbmcgKi9cblxuICAgICAgSVNfRU1QVFlfSU5QVVQgPSAhZGlydHk7XG5cbiAgICAgIGlmIChJU19FTVBUWV9JTlBVVCkge1xuICAgICAgICBkaXJ0eSA9ICc8IS0tPic7XG4gICAgICB9XG4gICAgICAvKiBTdHJpbmdpZnksIGluIGNhc2UgZGlydHkgaXMgYW4gb2JqZWN0ICovXG5cblxuICAgICAgaWYgKHR5cGVvZiBkaXJ0eSAhPT0gJ3N0cmluZycgJiYgIV9pc05vZGUoZGlydHkpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGlydHkudG9TdHJpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBkaXJ0eSA9IGRpcnR5LnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGRpcnR5ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhyb3cgdHlwZUVycm9yQ3JlYXRlKCdkaXJ0eSBpcyBub3QgYSBzdHJpbmcsIGFib3J0aW5nJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IHR5cGVFcnJvckNyZWF0ZSgndG9TdHJpbmcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLyogQ2hlY2sgd2UgY2FuIHJ1bi4gT3RoZXJ3aXNlIGZhbGwgYmFjayBvciBpZ25vcmUgKi9cblxuXG4gICAgICBpZiAoIURPTVB1cmlmeS5pc1N1cHBvcnRlZCkge1xuICAgICAgICBpZiAoX3R5cGVvZih3aW5kb3cudG9TdGF0aWNIVE1MKSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHdpbmRvdy50b1N0YXRpY0hUTUwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGRpcnR5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy50b1N0YXRpY0hUTUwoZGlydHkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChfaXNOb2RlKGRpcnR5KSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy50b1N0YXRpY0hUTUwoZGlydHkub3V0ZXJIVE1MKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGlydHk7XG4gICAgICB9XG4gICAgICAvKiBBc3NpZ24gY29uZmlnIHZhcnMgKi9cblxuXG4gICAgICBpZiAoIVNFVF9DT05GSUcpIHtcbiAgICAgICAgX3BhcnNlQ29uZmlnKGNmZyk7XG4gICAgICB9XG4gICAgICAvKiBDbGVhbiB1cCByZW1vdmVkIGVsZW1lbnRzICovXG5cblxuICAgICAgRE9NUHVyaWZ5LnJlbW92ZWQgPSBbXTtcbiAgICAgIC8qIENoZWNrIGlmIGRpcnR5IGlzIGNvcnJlY3RseSB0eXBlZCBmb3IgSU5fUExBQ0UgKi9cblxuICAgICAgaWYgKHR5cGVvZiBkaXJ0eSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgSU5fUExBQ0UgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKElOX1BMQUNFKSB7XG4gICAgICAgIC8qIERvIHNvbWUgZWFybHkgcHJlLXNhbml0aXphdGlvbiB0byBhdm9pZCB1bnNhZmUgcm9vdCBub2RlcyAqL1xuICAgICAgICBpZiAoZGlydHkubm9kZU5hbWUpIHtcbiAgICAgICAgICB2YXIgdGFnTmFtZSA9IHRyYW5zZm9ybUNhc2VGdW5jKGRpcnR5Lm5vZGVOYW1lKTtcblxuICAgICAgICAgIGlmICghQUxMT1dFRF9UQUdTW3RhZ05hbWVdIHx8IEZPUkJJRF9UQUdTW3RhZ05hbWVdKSB7XG4gICAgICAgICAgICB0aHJvdyB0eXBlRXJyb3JDcmVhdGUoJ3Jvb3Qgbm9kZSBpcyBmb3JiaWRkZW4gYW5kIGNhbm5vdCBiZSBzYW5pdGl6ZWQgaW4tcGxhY2UnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZGlydHkgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgIC8qIElmIGRpcnR5IGlzIGEgRE9NIGVsZW1lbnQsIGFwcGVuZCB0byBhbiBlbXB0eSBkb2N1bWVudCB0byBhdm9pZFxuICAgICAgICAgICBlbGVtZW50cyBiZWluZyBzdHJpcHBlZCBieSB0aGUgcGFyc2VyICovXG4gICAgICAgIGJvZHkgPSBfaW5pdERvY3VtZW50KCc8IS0tLS0+Jyk7XG4gICAgICAgIGltcG9ydGVkTm9kZSA9IGJvZHkub3duZXJEb2N1bWVudC5pbXBvcnROb2RlKGRpcnR5LCB0cnVlKTtcblxuICAgICAgICBpZiAoaW1wb3J0ZWROb2RlLm5vZGVUeXBlID09PSAxICYmIGltcG9ydGVkTm9kZS5ub2RlTmFtZSA9PT0gJ0JPRFknKSB7XG4gICAgICAgICAgLyogTm9kZSBpcyBhbHJlYWR5IGEgYm9keSwgdXNlIGFzIGlzICovXG4gICAgICAgICAgYm9keSA9IGltcG9ydGVkTm9kZTtcbiAgICAgICAgfSBlbHNlIGlmIChpbXBvcnRlZE5vZGUubm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgICAgICAgIGJvZHkgPSBpbXBvcnRlZE5vZGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLWRvbS1ub2RlLWFwcGVuZFxuICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoaW1wb3J0ZWROb2RlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyogRXhpdCBkaXJlY3RseSBpZiB3ZSBoYXZlIG5vdGhpbmcgdG8gZG8gKi9cbiAgICAgICAgaWYgKCFSRVRVUk5fRE9NICYmICFTQUZFX0ZPUl9URU1QTEFURVMgJiYgIVdIT0xFX0RPQ1VNRU5UICYmIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1pbmNsdWRlc1xuICAgICAgICBkaXJ0eS5pbmRleE9mKCc8JykgPT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIHRydXN0ZWRUeXBlc1BvbGljeSAmJiBSRVRVUk5fVFJVU1RFRF9UWVBFID8gdHJ1c3RlZFR5cGVzUG9saWN5LmNyZWF0ZUhUTUwoZGlydHkpIDogZGlydHk7XG4gICAgICAgIH1cbiAgICAgICAgLyogSW5pdGlhbGl6ZSB0aGUgZG9jdW1lbnQgdG8gd29yayBvbiAqL1xuXG5cbiAgICAgICAgYm9keSA9IF9pbml0RG9jdW1lbnQoZGlydHkpO1xuICAgICAgICAvKiBDaGVjayB3ZSBoYXZlIGEgRE9NIG5vZGUgZnJvbSB0aGUgZGF0YSAqL1xuXG4gICAgICAgIGlmICghYm9keSkge1xuICAgICAgICAgIHJldHVybiBSRVRVUk5fRE9NID8gbnVsbCA6IFJFVFVSTl9UUlVTVEVEX1RZUEUgPyBlbXB0eUhUTUwgOiAnJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLyogUmVtb3ZlIGZpcnN0IGVsZW1lbnQgbm9kZSAob3VycykgaWYgRk9SQ0VfQk9EWSBpcyBzZXQgKi9cblxuXG4gICAgICBpZiAoYm9keSAmJiBGT1JDRV9CT0RZKSB7XG4gICAgICAgIF9mb3JjZVJlbW92ZShib2R5LmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuICAgICAgLyogR2V0IG5vZGUgaXRlcmF0b3IgKi9cblxuXG4gICAgICB2YXIgbm9kZUl0ZXJhdG9yID0gX2NyZWF0ZUl0ZXJhdG9yKElOX1BMQUNFID8gZGlydHkgOiBib2R5KTtcbiAgICAgIC8qIE5vdyBzdGFydCBpdGVyYXRpbmcgb3ZlciB0aGUgY3JlYXRlZCBkb2N1bWVudCAqL1xuXG5cbiAgICAgIHdoaWxlIChjdXJyZW50Tm9kZSA9IG5vZGVJdGVyYXRvci5uZXh0Tm9kZSgpKSB7XG4gICAgICAgIC8qIEZpeCBJRSdzIHN0cmFuZ2UgYmVoYXZpb3Igd2l0aCBtYW5pcHVsYXRlZCB0ZXh0Tm9kZXMgIzg5ICovXG4gICAgICAgIGlmIChjdXJyZW50Tm9kZS5ub2RlVHlwZSA9PT0gMyAmJiBjdXJyZW50Tm9kZSA9PT0gb2xkTm9kZSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIC8qIFNhbml0aXplIHRhZ3MgYW5kIGVsZW1lbnRzICovXG5cblxuICAgICAgICBpZiAoX3Nhbml0aXplRWxlbWVudHMoY3VycmVudE5vZGUpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgLyogU2hhZG93IERPTSBkZXRlY3RlZCwgc2FuaXRpemUgaXQgKi9cblxuXG4gICAgICAgIGlmIChjdXJyZW50Tm9kZS5jb250ZW50IGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkge1xuICAgICAgICAgIF9zYW5pdGl6ZVNoYWRvd0RPTShjdXJyZW50Tm9kZS5jb250ZW50KTtcbiAgICAgICAgfVxuICAgICAgICAvKiBDaGVjayBhdHRyaWJ1dGVzLCBzYW5pdGl6ZSBpZiBuZWNlc3NhcnkgKi9cblxuXG4gICAgICAgIF9zYW5pdGl6ZUF0dHJpYnV0ZXMoY3VycmVudE5vZGUpO1xuXG4gICAgICAgIG9sZE5vZGUgPSBjdXJyZW50Tm9kZTtcbiAgICAgIH1cblxuICAgICAgb2xkTm9kZSA9IG51bGw7XG4gICAgICAvKiBJZiB3ZSBzYW5pdGl6ZWQgYGRpcnR5YCBpbi1wbGFjZSwgcmV0dXJuIGl0LiAqL1xuXG4gICAgICBpZiAoSU5fUExBQ0UpIHtcbiAgICAgICAgcmV0dXJuIGRpcnR5O1xuICAgICAgfVxuICAgICAgLyogUmV0dXJuIHNhbml0aXplZCBzdHJpbmcgb3IgRE9NICovXG5cblxuICAgICAgaWYgKFJFVFVSTl9ET00pIHtcbiAgICAgICAgaWYgKFJFVFVSTl9ET01fRlJBR01FTlQpIHtcbiAgICAgICAgICByZXR1cm5Ob2RlID0gY3JlYXRlRG9jdW1lbnRGcmFnbWVudC5jYWxsKGJvZHkub3duZXJEb2N1bWVudCk7XG5cbiAgICAgICAgICB3aGlsZSAoYm9keS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItZG9tLW5vZGUtYXBwZW5kXG4gICAgICAgICAgICByZXR1cm5Ob2RlLmFwcGVuZENoaWxkKGJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybk5vZGUgPSBib2R5O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFMTE9XRURfQVRUUi5zaGFkb3dyb290IHx8IEFMTE9XRURfQVRUUi5zaGFkb3dyb290bW9kKSB7XG4gICAgICAgICAgLypcbiAgICAgICAgICAgIEFkb3B0Tm9kZSgpIGlzIG5vdCB1c2VkIGJlY2F1c2UgaW50ZXJuYWwgc3RhdGUgaXMgbm90IHJlc2V0XG4gICAgICAgICAgICAoZS5nLiB0aGUgcGFzdCBuYW1lcyBtYXAgb2YgYSBIVE1MRm9ybUVsZW1lbnQpLCB0aGlzIGlzIHNhZmVcbiAgICAgICAgICAgIGluIHRoZW9yeSBidXQgd2Ugd291bGQgcmF0aGVyIG5vdCByaXNrIGFub3RoZXIgYXR0YWNrIHZlY3Rvci5cbiAgICAgICAgICAgIFRoZSBzdGF0ZSB0aGF0IGlzIGNsb25lZCBieSBpbXBvcnROb2RlKCkgaXMgZXhwbGljaXRseSBkZWZpbmVkXG4gICAgICAgICAgICBieSB0aGUgc3BlY3MuXG4gICAgICAgICAgKi9cbiAgICAgICAgICByZXR1cm5Ob2RlID0gaW1wb3J0Tm9kZS5jYWxsKG9yaWdpbmFsRG9jdW1lbnQsIHJldHVybk5vZGUsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldHVybk5vZGU7XG4gICAgICB9XG5cbiAgICAgIHZhciBzZXJpYWxpemVkSFRNTCA9IFdIT0xFX0RPQ1VNRU5UID8gYm9keS5vdXRlckhUTUwgOiBib2R5LmlubmVySFRNTDtcbiAgICAgIC8qIFNlcmlhbGl6ZSBkb2N0eXBlIGlmIGFsbG93ZWQgKi9cblxuICAgICAgaWYgKFdIT0xFX0RPQ1VNRU5UICYmIEFMTE9XRURfVEFHU1snIWRvY3R5cGUnXSAmJiBib2R5Lm93bmVyRG9jdW1lbnQgJiYgYm9keS5vd25lckRvY3VtZW50LmRvY3R5cGUgJiYgYm9keS5vd25lckRvY3VtZW50LmRvY3R5cGUubmFtZSAmJiByZWdFeHBUZXN0KERPQ1RZUEVfTkFNRSwgYm9keS5vd25lckRvY3VtZW50LmRvY3R5cGUubmFtZSkpIHtcbiAgICAgICAgc2VyaWFsaXplZEhUTUwgPSAnPCFET0NUWVBFICcgKyBib2R5Lm93bmVyRG9jdW1lbnQuZG9jdHlwZS5uYW1lICsgJz5cXG4nICsgc2VyaWFsaXplZEhUTUw7XG4gICAgICB9XG4gICAgICAvKiBTYW5pdGl6ZSBmaW5hbCBzdHJpbmcgdGVtcGxhdGUtc2FmZSAqL1xuXG5cbiAgICAgIGlmIChTQUZFX0ZPUl9URU1QTEFURVMpIHtcbiAgICAgICAgc2VyaWFsaXplZEhUTUwgPSBzdHJpbmdSZXBsYWNlKHNlcmlhbGl6ZWRIVE1MLCBNVVNUQUNIRV9FWFBSJDEsICcgJyk7XG4gICAgICAgIHNlcmlhbGl6ZWRIVE1MID0gc3RyaW5nUmVwbGFjZShzZXJpYWxpemVkSFRNTCwgRVJCX0VYUFIkMSwgJyAnKTtcbiAgICAgICAgc2VyaWFsaXplZEhUTUwgPSBzdHJpbmdSZXBsYWNlKHNlcmlhbGl6ZWRIVE1MLCBUTVBMSVRfRVhQUiQxLCAnICcpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1c3RlZFR5cGVzUG9saWN5ICYmIFJFVFVSTl9UUlVTVEVEX1RZUEUgPyB0cnVzdGVkVHlwZXNQb2xpY3kuY3JlYXRlSFRNTChzZXJpYWxpemVkSFRNTCkgOiBzZXJpYWxpemVkSFRNTDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFB1YmxpYyBtZXRob2QgdG8gc2V0IHRoZSBjb25maWd1cmF0aW9uIG9uY2VcbiAgICAgKiBzZXRDb25maWdcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjZmcgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgKi9cblxuXG4gICAgRE9NUHVyaWZ5LnNldENvbmZpZyA9IGZ1bmN0aW9uIChjZmcpIHtcbiAgICAgIF9wYXJzZUNvbmZpZyhjZmcpO1xuXG4gICAgICBTRVRfQ09ORklHID0gdHJ1ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFB1YmxpYyBtZXRob2QgdG8gcmVtb3ZlIHRoZSBjb25maWd1cmF0aW9uXG4gICAgICogY2xlYXJDb25maWdcbiAgICAgKlxuICAgICAqL1xuXG5cbiAgICBET01QdXJpZnkuY2xlYXJDb25maWcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBDT05GSUcgPSBudWxsO1xuICAgICAgU0VUX0NPTkZJRyA9IGZhbHNlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUHVibGljIG1ldGhvZCB0byBjaGVjayBpZiBhbiBhdHRyaWJ1dGUgdmFsdWUgaXMgdmFsaWQuXG4gICAgICogVXNlcyBsYXN0IHNldCBjb25maWcsIGlmIGFueS4gT3RoZXJ3aXNlLCB1c2VzIGNvbmZpZyBkZWZhdWx0cy5cbiAgICAgKiBpc1ZhbGlkQXR0cmlidXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IHRhZyBUYWcgbmFtZSBvZiBjb250YWluaW5nIGVsZW1lbnQuXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBhdHRyIEF0dHJpYnV0ZSBuYW1lLlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gdmFsdWUgQXR0cmlidXRlIHZhbHVlLlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiBgdmFsdWVgIGlzIHZhbGlkLiBPdGhlcndpc2UsIHJldHVybnMgZmFsc2UuXG4gICAgICovXG5cblxuICAgIERPTVB1cmlmeS5pc1ZhbGlkQXR0cmlidXRlID0gZnVuY3Rpb24gKHRhZywgYXR0ciwgdmFsdWUpIHtcbiAgICAgIC8qIEluaXRpYWxpemUgc2hhcmVkIGNvbmZpZyB2YXJzIGlmIG5lY2Vzc2FyeS4gKi9cbiAgICAgIGlmICghQ09ORklHKSB7XG4gICAgICAgIF9wYXJzZUNvbmZpZyh7fSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBsY1RhZyA9IHRyYW5zZm9ybUNhc2VGdW5jKHRhZyk7XG4gICAgICB2YXIgbGNOYW1lID0gdHJhbnNmb3JtQ2FzZUZ1bmMoYXR0cik7XG4gICAgICByZXR1cm4gX2lzVmFsaWRBdHRyaWJ1dGUobGNUYWcsIGxjTmFtZSwgdmFsdWUpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQWRkSG9va1xuICAgICAqIFB1YmxpYyBtZXRob2QgdG8gYWRkIERPTVB1cmlmeSBob29rc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGVudHJ5UG9pbnQgZW50cnkgcG9pbnQgZm9yIHRoZSBob29rIHRvIGFkZFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGhvb2tGdW5jdGlvbiBmdW5jdGlvbiB0byBleGVjdXRlXG4gICAgICovXG5cblxuICAgIERPTVB1cmlmeS5hZGRIb29rID0gZnVuY3Rpb24gKGVudHJ5UG9pbnQsIGhvb2tGdW5jdGlvbikge1xuICAgICAgaWYgKHR5cGVvZiBob29rRnVuY3Rpb24gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBob29rc1tlbnRyeVBvaW50XSA9IGhvb2tzW2VudHJ5UG9pbnRdIHx8IFtdO1xuICAgICAgYXJyYXlQdXNoKGhvb2tzW2VudHJ5UG9pbnRdLCBob29rRnVuY3Rpb24pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVtb3ZlSG9va1xuICAgICAqIFB1YmxpYyBtZXRob2QgdG8gcmVtb3ZlIGEgRE9NUHVyaWZ5IGhvb2sgYXQgYSBnaXZlbiBlbnRyeVBvaW50XG4gICAgICogKHBvcHMgaXQgZnJvbSB0aGUgc3RhY2sgb2YgaG9va3MgaWYgbW9yZSBhcmUgcHJlc2VudClcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBlbnRyeVBvaW50IGVudHJ5IHBvaW50IGZvciB0aGUgaG9vayB0byByZW1vdmVcbiAgICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0gcmVtb3ZlZChwb3BwZWQpIGhvb2tcbiAgICAgKi9cblxuXG4gICAgRE9NUHVyaWZ5LnJlbW92ZUhvb2sgPSBmdW5jdGlvbiAoZW50cnlQb2ludCkge1xuICAgICAgaWYgKGhvb2tzW2VudHJ5UG9pbnRdKSB7XG4gICAgICAgIHJldHVybiBhcnJheVBvcChob29rc1tlbnRyeVBvaW50XSk7XG4gICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVIb29rc1xuICAgICAqIFB1YmxpYyBtZXRob2QgdG8gcmVtb3ZlIGFsbCBET01QdXJpZnkgaG9va3MgYXQgYSBnaXZlbiBlbnRyeVBvaW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGVudHJ5UG9pbnQgZW50cnkgcG9pbnQgZm9yIHRoZSBob29rcyB0byByZW1vdmVcbiAgICAgKi9cblxuXG4gICAgRE9NUHVyaWZ5LnJlbW92ZUhvb2tzID0gZnVuY3Rpb24gKGVudHJ5UG9pbnQpIHtcbiAgICAgIGlmIChob29rc1tlbnRyeVBvaW50XSkge1xuICAgICAgICBob29rc1tlbnRyeVBvaW50XSA9IFtdO1xuICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVtb3ZlQWxsSG9va3NcbiAgICAgKiBQdWJsaWMgbWV0aG9kIHRvIHJlbW92ZSBhbGwgRE9NUHVyaWZ5IGhvb2tzXG4gICAgICpcbiAgICAgKi9cblxuXG4gICAgRE9NUHVyaWZ5LnJlbW92ZUFsbEhvb2tzID0gZnVuY3Rpb24gKCkge1xuICAgICAgaG9va3MgPSB7fTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIERPTVB1cmlmeTtcbiAgfVxuXG4gIHZhciBwdXJpZnkgPSBjcmVhdGVET01QdXJpZnkoKTtcblxuICByZXR1cm4gcHVyaWZ5O1xuXG59KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wdXJpZnkuanMubWFwXG4iLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxlKTpcIm9iamVjdFwiPT09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5odG1sMm1kPWUoKTp0Lmh0bWwybWQ9ZSgpfSh0aGlzLGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKHQpe3ZhciBlPXt9O2Z1bmN0aW9uIHIobil7aWYoZVtuXSlyZXR1cm4gZVtuXS5leHBvcnRzO3ZhciBvPWVbbl09e2k6bixsOiExLGV4cG9ydHM6e319O3JldHVybiB0W25dLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLHIpLG8ubD0hMCxvLmV4cG9ydHN9cmV0dXJuIHIubT10LHIuYz1lLHIuZD1mdW5jdGlvbih0LGUsbil7ci5vKHQsZSl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGUse2VudW1lcmFibGU6ITAsZ2V0Om59KX0sci5yPWZ1bmN0aW9uKHQpe1widW5kZWZpbmVkXCIhPT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxyLnQ9ZnVuY3Rpb24odCxlKXtpZigxJmUmJih0PXIodCkpLDgmZSlyZXR1cm4gdDtpZig0JmUmJlwib2JqZWN0XCI9PT10eXBlb2YgdCYmdCYmdC5fX2VzTW9kdWxlKXJldHVybiB0O3ZhciBuPU9iamVjdC5jcmVhdGUobnVsbCk7aWYoci5yKG4pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOnR9KSwyJmUmJlwic3RyaW5nXCIhPXR5cGVvZiB0KWZvcih2YXIgbyBpbiB0KXIuZChuLG8sZnVuY3Rpb24oZSl7cmV0dXJuIHRbZV19LmJpbmQobnVsbCxvKSk7cmV0dXJuIG59LHIubj1mdW5jdGlvbih0KXt2YXIgZT10JiZ0Ll9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gdC5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiB0fTtyZXR1cm4gci5kKGUsXCJhXCIsZSksZX0sci5vPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LGUpfSxyLnA9XCJcIixyKHIucz00NSl9KFtmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49cigxKSxvPXIoOSksaT1yKDEyKSxhPXIoNiksYz1yKDIpLHU9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsZSxyKXt2YXIgbj12b2lkIDA9PT1yP3t9OnIsbz1uLmtlZXBTcGFjZSxpPXZvaWQgMCE9PW8mJm8sYT1uLnByZXZUYWdOYW1lLGM9dm9pZCAwPT09YT9cIlwiOmEsdT1uLm5leHRUYWdOYW1lLHM9dm9pZCAwPT09dT9cIlwiOnUsbD1uLnByZXZUYWdTdHIscD12b2lkIDA9PT1sP1wiXCI6bCxmPW4ubmV4dFRhZ1N0cixoPXZvaWQgMD09PWY/XCJcIjpmLGQ9bi5wYXJlbnRUYWcsXz12b2lkIDA9PT1kP1wiXCI6ZCx5PW4uaXNGaXJzdFN1YlRhZyx2PXZvaWQgMD09PXl8fHksZz1uLmNhbGNMZWFkaW5nLGI9dm9pZCAwIT09ZyYmZyxtPW4ubGVhZGluZ1NwYWNlLE89dm9pZCAwPT09bT9cIlwiOm0sVD1uLmxheWVyLFM9dm9pZCAwPT09VD8xOlQseD1uLm5vV3JhcCxqPXZvaWQgMCE9PXgmJngsdz1uLm1hdGNoLFA9dm9pZCAwPT09dz9udWxsOncsTT1uLmluZGVudFNwYWNlLEM9dm9pZCAwPT09TT9cIlwiOk0sTj1uLmxhbmd1YWdlLEU9dm9pZCAwPT09Tj9cIlwiOk4sTD1uLmNvdW50LGs9dm9pZCAwPT09TD8xOkwsQT1uLnRhYmxlQ29sdW1uQ291bnQsVj12b2lkIDA9PT1BPzA6QSxXPW4ubm9FeHRyYUxpbmUsUj12b2lkIDAhPT1XJiZXLEk9bi5pblRhYmxlLEg9dm9pZCAwIT09SSYmSTtpZih0aGlzLnRhZ05hbWU9ZSx0aGlzLnJhd1N0cj10LHRoaXMucGFyZW50VGFnPV8sdGhpcy5wcmV2VGFnTmFtZT1jLHRoaXMubmV4dFRhZ05hbWU9cyx0aGlzLnByZXZUYWdTdHI9cCx0aGlzLm5leHRUYWdTdHI9aCx0aGlzLmlzRmlyc3RTdWJUYWc9dix0aGlzLmNhbGNMZWFkaW5nPWIsdGhpcy5sZWFkaW5nU3BhY2U9Tyx0aGlzLmxheWVyPVMsdGhpcy5ub1dyYXA9aix0aGlzLm1hdGNoPVAsdGhpcy5pbmRlbnRTcGFjZT1DLHRoaXMubGFuZ3VhZ2U9RSx0aGlzLmNvdW50PWssdGhpcy5pblRhYmxlPUgsdGhpcy50YWJsZUNvbHVtbkNvdW50PVYsdGhpcy5ub0V4dHJhTGluZT1SLHRoaXMua2VlcFNwYWNlPWksIXRoaXMuX19kZXRlY3RTdHJfXyh0LHRoaXMudGFnTmFtZSkpcmV0dXJuIHRoaXMuYXR0cnM9e30sdm9pZCh0aGlzLmlubmVySFRNTD1cIlwiKTt2YXIgcT10aGlzLl9fZmV0Y2hUYWdBdHRyQW5kSW5uZXJIVE1MX18odCksRj1xLmF0dHIsRz1xLmlubmVySFRNTDt0aGlzLmF0dHJzPUYsdGhpcy5pbm5lckhUTUw9R31yZXR1cm4gdC5wcm90b3R5cGUuX19kZXRlY3RTdHJfXz1mdW5jdGlvbih0LGUpe2lmKFwiPFwiIT09dFswXSlyZXR1cm4gY29uc29sZS5lcnJvcihcIk5vdCBhIHZhbGlkIHRhZywgY3VycmVudCB0YWcgbmFtZTogXCIuY29uY2F0KHRoaXMudGFnTmFtZSxcIiwgdGFnIGNvbnRlbnQ6IFwiKS5jb25jYXQodCkpLCExO2Zvcih2YXIgcj1cIlwiLG49ITEsbz0xO288dC5sZW5ndGgmJlwiPlwiIT09dFtvXTtvKyspIW4mJi8oXFxzfFxcLykvLnRlc3QodFtvXSkmJihuPSEwKSxufHwocis9dFtvXSk7cmV0dXJuIHI9PT1lfHwoY29uc29sZS53YXJuKFwiVGFnIGlzIG5vdCBtYXRjaCB0YWdOYW1lLCB0YWdOYW1lIGluIHN0ciBpcyBcIityK1wiLCB3aGljaCB0YWdOYW1lIHBhc3NlZCBmcm9tIHBhcmVudCBpcyBcIitlKSwhMSl9LHQucHJvdG90eXBlLl9fZmV0Y2hUYWdBdHRyQW5kSW5uZXJIVE1MX189ZnVuY3Rpb24odCl7Zm9yKHZhciBlPVwiXCIscj0xO3I8dC5sZW5ndGgmJlwiPlwiIT09dFtyXTtyKyspZSs9dFtyXTtmb3IodmFyIG89dC5zbGljZShyKzEpLGk9XCJcIixhPS0xLGM9by5sZW5ndGgtMTtjPj0wO2MtLSlpZigoaT1vW2NdK2kpLnN0YXJ0c1dpdGgoXCI8L1wiKSl7aS5zdGFydHNXaXRoKFwiPC9cIit0aGlzLnRhZ05hbWUrXCI+XCIpJiYoYT1jKTticmVha30tMT09PWEmJigwLG4uaXNTZWxmQ2xvc2luZykodGhpcy50YWdOYW1lKSYmY29uc29sZS53YXJuKFwiVGhlcmUgZGV0ZWN0IGEgc2VsZiBjbG9zZSB0YWcsIHdoaWNoIG5hbWUgaXM6XCIsdGhpcy50YWdOYW1lKTt2YXIgdT0oMCxuLmdldFRhZ0F0dHJpYnV0ZXMpKGUpO3JldHVybiB0aGlzLnRhZ05hbWUmJmRlbGV0ZSB1W3RoaXMudGFnTmFtZV0se2F0dHI6dSxpbm5lckhUTUw6by5zbGljZSgwLGEpfX0sdC5wcm90b3R5cGUuX19vbmx5TGVhZGluZ1NwYWNlX189ZnVuY3Rpb24odCl7dD10LnRyaW0oKTtmb3IodmFyIGU9MDtlPHQubGVuZ3RoO2UrKylpZih0W2VdIT09aS5TSU5HTEUpcmV0dXJuITE7cmV0dXJuITB9LHQucHJvdG90eXBlLl9faXNFbXB0eV9fPWZ1bmN0aW9uKHQpe3JldHVybiF0aGlzLmtlZXBTcGFjZSYmKFwiXCI9PT10JiZcInRkXCIhPT10aGlzLnRhZ05hbWV8fHRoaXMuY2FsY0xlYWRpbmcmJnRoaXMuX19vbmx5TGVhZGluZ1NwYWNlX18odCkpfSx0LnByb3RvdHlwZS5nZXRWYWxpZFN1YlRhZ05hbWU9ZnVuY3Rpb24odCl7cmV0dXJuIHR9LHQucHJvdG90eXBlLmJlZm9yZVBhcnNlPWZ1bmN0aW9uKCl7dmFyIHQ9Yy5kZWZhdWx0LmdldCgpLnRhZ0xpc3RlbmVyO2lmKHQpe3ZhciBlPXQodGhpcy50YWdOYW1lLHtwYXJlbnRUYWc6dGhpcy5wYXJlbnRUYWcscHJldlRhZ05hbWU6dGhpcy5wcmV2VGFnTmFtZSxuZXh0VGFnTmFtZTp0aGlzLm5leHRUYWdOYW1lLGlzRmlyc3RTdWJUYWc6dGhpcy5pc0ZpcnN0U3ViVGFnLGF0dHJzOnRoaXMuYXR0cnMsaW5uZXJIVE1MOnRoaXMuaW5uZXJIVE1MLGxhbmd1YWdlOnRoaXMubGFuZ3VhZ2UsbWF0Y2g6dGhpcy5tYXRjaCxpc1NlbGZDbG9zaW5nOiExfSkscj1lLmF0dHJzLG49ZS5sYW5ndWFnZSxvPWUubWF0Y2g7dGhpcy5hdHRycz1yLFwic3RyaW5nXCI9PT10eXBlb2YgbiYmKHRoaXMubGFuZ3VhZ2U9biksXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBvJiYodGhpcy5tYXRjaD1vKX1yZXR1cm5cIlwifSx0LnByb3RvdHlwZS5wYXJzZVZhbGlkU3ViVGFnPWZ1bmN0aW9uKHQsZSxyKXtyZXR1cm4gbmV3KCgwLG4uZ2V0VGFnQ29uc3RydWN0b3IpKGUpKSh0LGUscikuZXhlYygpfSx0LnByb3RvdHlwZS5wYXJzZU9ubHlTdHJpbmc9ZnVuY3Rpb24odCxlLHIpe3JldHVybiBuZXcgby5kZWZhdWx0KHQsZSxyKS5leGVjKCl9LHQucHJvdG90eXBlLmFmdGVyUGFyc2VkPWZ1bmN0aW9uKHQpe3JldHVybiB0fSx0LnByb3RvdHlwZS5zbGltPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmtlZXBTcGFjZT90OnQudHJpbSgpfSx0LnByb3RvdHlwZS5iZWZvcmVNZXJnZVNwYWNlPWZ1bmN0aW9uKHQpe3JldHVybiB0fSx0LnByb3RvdHlwZS5tZXJnZVNwYWNlPWZ1bmN0aW9uKHQsZSxyKXtyZXR1cm4gdGhpcy5rZWVwU3BhY2UmJlwicHJlXCIhPT10aGlzLnRhZ05hbWU/dC5lbmRzV2l0aChcIlxcblwiKT90OnQrci5yZXBsYWNlKC9cXG4rL2csXCJcXG5cIik6ZSt0K3J9LHQucHJvdG90eXBlLmFmdGVyTWVyZ2VTcGFjZT1mdW5jdGlvbih0KXtyZXR1cm4gdH0sdC5wcm90b3R5cGUuYmVmb3JlUmV0dXJuPWZ1bmN0aW9uKHQpe3JldHVybiB0fSx0LnByb3RvdHlwZS5leGVjPWZ1bmN0aW9uKHQsZSl7dm9pZCAwPT09dCYmKHQ9XCJcIiksdm9pZCAwPT09ZSYmKGU9XCJcIik7Zm9yKHZhciByPXRoaXMuYmVmb3JlUGFyc2UoKSxvPSgwLG4uZ2VuZXJhdGVHZXROZXh0VmFsaWRUYWcpKHRoaXMuaW5uZXJIVE1MKSxpPW8oKSxjPWlbMF0sdT1pWzFdLHM9bnVsbDtcIlwiIT09dTspe3ZhciBsPW8oKSxwPWxbMF0sZj1sWzFdLGg9e3BhcmVudFRhZzp0aGlzLnRhZ05hbWUsbmV4dFRhZ05hbWU6cCxuZXh0VGFnU3RyOmYscHJldlRhZ05hbWU6cyxwcmV2VGFnU3RyOnIsbGVhZGluZ1NwYWNlOnRoaXMubGVhZGluZ1NwYWNlLGxheWVyOnRoaXMubGF5ZXIsa2VlcFNwYWNlOnRoaXMua2VlcFNwYWNlLGluVGFibGU6dGhpcy5pblRhYmxlfSxkPXZvaWQgMDtkPW51bGwhPWM/dGhpcy5wYXJzZVZhbGlkU3ViVGFnKHUsYyxoKTp0aGlzLnBhcnNlT25seVN0cmluZyh1LGMsaCk7dmFyIF89dGhpcy5nZXRWYWxpZFN1YlRhZ05hbWUoYyk7Yz1wLHU9ZixudWxsPT1fJiZ0aGlzLl9faXNFbXB0eV9fKGQpfHwocz1fLHRoaXMuaXNGaXJzdFN1YlRhZz0hMSxyKz1kKX1yZXR1cm4gcj10aGlzLmFmdGVyUGFyc2VkKHIpLHI9dGhpcy5zbGltKHIpLHRoaXMuX19pc0VtcHR5X18ocik/XCJcIjoocj10aGlzLmJlZm9yZU1lcmdlU3BhY2UociksIXRoaXMubm9FeHRyYUxpbmUmJigwLGEuZGVmYXVsdCkodGhpcy50YWdOYW1lKSYmdGhpcy5wcmV2VGFnTmFtZSYmIXIuc3RhcnRzV2l0aChcIlxcblwiKSYmISgwLGEuZGVmYXVsdCkodGhpcy5wcmV2VGFnTmFtZSkmJnRoaXMucGFyZW50VGFnJiYodD1cIlxcblxcblwiKSxyPXRoaXMubWVyZ2VTcGFjZShyLHQsZSksdGhpcy5ub1dyYXAmJiF0aGlzLmtlZXBTcGFjZSYmKHI9ci5yZXBsYWNlKC9cXHMrL2csXCIgXCIpKSxyPXRoaXMuYWZ0ZXJNZXJnZVNwYWNlKHIpLHI9dGhpcy5iZWZvcmVSZXR1cm4ocikpfSx0fSgpO2UuZGVmYXVsdD11fSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZS5zaG91bGRSZW5kZXJSYXdJbnNpZGU9ZS5pc0luZGVwZW5kZW50VGFnPWUuY2xlYXJDb21tZW50PWUuZ2V0TGFuZ3VhZ2U9ZS5nZXRUYWJsZUFsaWduPWUuZ2V0VGFnQXR0cmlidXRlcz1lLmlzU2VsZkNsb3Npbmc9ZS5nZW5lcmF0ZUdldE5leHRWYWxpZFRhZz1lLmdldFRhZ0NvbnN0cnVjdG9yPWUuZ2V0UmVhbFRhZ05hbWU9ZS51bmVzY2FwZVN0cj1lLmV4dHJhRXNjYXBlPXZvaWQgMDt2YXIgbj1yKDQ2KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcImV4dHJhRXNjYXBlXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIG4uZXh0cmFFc2NhcGV9fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJ1bmVzY2FwZVN0clwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBuLnVuZXNjYXBlU3RyfX0pO3ZhciBvPXIoNDcpO2UuZ2VuZXJhdGVHZXROZXh0VmFsaWRUYWc9by5kZWZhdWx0O3ZhciBpPXIoNDgpO2UuZ2V0VGFnQ29uc3RydWN0b3I9aS5kZWZhdWx0O3ZhciBhPXIoMTEpO2UuaXNTZWxmQ2xvc2luZz1hLmRlZmF1bHQ7dmFyIGM9cig1MSk7ZS5nZXRUYWdBdHRyaWJ1dGVzPWMuZGVmYXVsdDt2YXIgdT1yKDUyKTtlLmdldExhbmd1YWdlPXUuZGVmYXVsdDt2YXIgcz1yKDUzKTtlLmNsZWFyQ29tbWVudD1zLmRlZmF1bHQ7dmFyIGw9cigxNyk7ZS5nZXRSZWFsVGFnTmFtZT1sLmRlZmF1bHQ7dmFyIHA9cig2KTtlLmlzSW5kZXBlbmRlbnRUYWc9cC5kZWZhdWx0O3ZhciBmPXIoNTQpO2UuZ2V0VGFibGVBbGlnbj1mLmRlZmF1bHQ7dmFyIGg9cig1NSk7ZS5zaG91bGRSZW5kZXJSYXdJbnNpZGU9aC5kZWZhdWx0fSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQpe3ZhciBlPXZvaWQgMD09PXQ/e306dCxyPWUuc2tpcFRhZ3Msbj12b2lkIDA9PT1yP1tdOnIsbz1lLmVtcHR5VGFncyxpPXZvaWQgMD09PW8/W106byxhPWUuaWdub3JlVGFncyxjPXZvaWQgMD09PWE/W106YSx1PWUuYWxpYXNUYWdzLHM9dm9pZCAwPT09dT97fTp1LGw9ZS5yZW5kZXJDdXN0b21UYWdzLHA9dm9pZCAwPT09bHx8bCxmPWUudGFnTGlzdGVuZXIsaD12b2lkIDA9PT1mP2Z1bmN0aW9uKHQsZSl7cmV0dXJuIGV9OmY7dGhpcy5vcHRpb25zPXtza2lwVGFnczpuLGVtcHR5VGFnczppLGlnbm9yZVRhZ3M6YyxhbGlhc1RhZ3M6cyxyZW5kZXJDdXN0b21UYWdzOnAsdGFnTGlzdGVuZXI6aH19cmV0dXJuIHQucHJvdG90eXBlLmdldD1mdW5jdGlvbigpe3JldHVybiB0aGlzLm9wdGlvbnN9LHQucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5vcHRpb25zPXt9fSx0LnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24odCxlKXt2YXIgcj10aGlzO3QmJlwiW29iamVjdCBPYmplY3RdXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCkmJk9iamVjdC5rZXlzKHQpLmZvckVhY2goZnVuY3Rpb24obil7ZT9yLm9wdGlvbnNbbl09dFtuXTpmdW5jdGlvbih0LGUscil7aWYoIShyIGluIHQpKXJldHVybiB2b2lkKHRbcl09ZVtyXSk7dmFyIG49QXJyYXkuaXNBcnJheSh0W3JdKSxvPVwiW29iamVjdCBPYmplY3RdXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodFtyXSk7dFtyXT1uP3Rbcl0uY29uY2F0KGVbcl0pOm8/T2JqZWN0LmFzc2lnbih0W3JdLGVbcl0pOmVbcl19KHIub3B0aW9ucyx0LG4pfSl9LHQucHJvdG90eXBlLnJlc2V0PWZ1bmN0aW9uKCl7dGhpcy5vcHRpb25zPUpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobykpLHRoaXMub3B0aW9ucy50YWdMaXN0ZW5lcj1mdW5jdGlvbih0LGUpe3JldHVybiBlfX0sdH0oKTt2YXIgbz17aWdub3JlVGFnczpbXCJcIixcInN0eWxlXCIsXCJoZWFkXCIsXCIhZG9jdHlwZVwiLFwiZm9ybVwiLFwic3ZnXCIsXCJub3NjcmlwdFwiLFwic2NyaXB0XCIsXCJtZXRhXCJdLHNraXBUYWdzOltcImRpdlwiLFwiaHRtbFwiLFwiYm9keVwiLFwibmF2XCIsXCJzZWN0aW9uXCIsXCJmb290ZXJcIixcIm1haW5cIixcImFzaWRlXCIsXCJhcnRpY2xlXCIsXCJoZWFkZXJcIl0sZW1wdHlUYWdzOltdLGFsaWFzVGFnczp7ZmlndXJlOlwicFwiLGRsOlwicFwiLGRkOlwicFwiLGR0OlwicFwiLGZpZ2NhcHRpb246XCJwXCJ9LHJlbmRlckN1c3RvbVRhZ3M6ITB9LGk9bmV3IG47aS5yZXNldCgpLGUuZGVmYXVsdD1pfSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49dGhpcyYmdGhpcy5fX2V4dGVuZHN8fGZ1bmN0aW9uKCl7dmFyIHQ9ZnVuY3Rpb24oZSxyKXtyZXR1cm4odD1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24odCxlKXt0Ll9fcHJvdG9fXz1lfXx8ZnVuY3Rpb24odCxlKXtmb3IodmFyIHIgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxyKSYmKHRbcl09ZVtyXSl9KShlLHIpfTtyZXR1cm4gZnVuY3Rpb24oZSxyKXtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgciYmbnVsbCE9PXIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIrU3RyaW5nKHIpK1wiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7ZnVuY3Rpb24gbigpe3RoaXMuY29uc3RydWN0b3I9ZX10KGUsciksZS5wcm90b3R5cGU9bnVsbD09PXI/T2JqZWN0LmNyZWF0ZShyKToobi5wcm90b3R5cGU9ci5wcm90b3R5cGUsbmV3IG4pfX0oKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKGUscil7dm9pZCAwPT09ciYmKHI9XCJoMVwiKTt2YXIgbj10LmNhbGwodGhpcyxlLHIpfHx0aGlzO3JldHVybiBuLm1hdGNoPVwiI1wiLG59cmV0dXJuIG4oZSx0KSxlLnByb3RvdHlwZS5iZWZvcmVNZXJnZVNwYWNlPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLm1hdGNoK1wiIFwiK3R9LGUucHJvdG90eXBlLmV4ZWM9ZnVuY3Rpb24oZSxyKXtyZXR1cm4gZXx8KGU9XCJcXG5cIikscnx8KHI9XCJcXG5cIiksdC5wcm90b3R5cGUuZXhlYy5jYWxsKHRoaXMsZSxyKX0sZX0ocigwKS5kZWZhdWx0KTtlLmRlZmF1bHQ9b30sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPXIoMSksbz1yKDIpLGk9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsZSxyKXt2YXIgbj12b2lkIDA9PT1yP3t9OnIsbz1uLnBhcmVudFRhZyxpPXZvaWQgMD09PW8/XCJcIjpvLGE9bi5sZWFkaW5nU3BhY2UsYz12b2lkIDA9PT1hP1wiXCI6YSx1PW4ubGF5ZXIscz12b2lkIDA9PT11PzE6dSxsPW4uaXNGaXJzdFN1YlRhZyxwPXZvaWQgMCE9PWwmJmwsZj1uLmluVGFibGUsaD12b2lkIDAhPT1mJiZmLGQ9bi5tYXRjaCxfPXZvaWQgMD09PWQ/bnVsbDpkLHk9bi5wcmV2VGFnTmFtZSx2PXZvaWQgMD09PXk/XCJcIjp5LGc9bi5uZXh0VGFnTmFtZSxiPXZvaWQgMD09PWc/XCJcIjpnO2lmKHRoaXMudGFnTmFtZT1lLHRoaXMucmF3U3RyPXQsdGhpcy5wYXJlbnRUYWc9aSx0aGlzLmlzRmlyc3RTdWJUYWc9cCx0aGlzLnByZXZUYWdOYW1lPXYsdGhpcy5uZXh0VGFnTmFtZT1iLHRoaXMubGVhZGluZ1NwYWNlPWMsdGhpcy5sYXllcj1zLHRoaXMuaW5uZXJIVE1MPVwiXCIsdGhpcy5tYXRjaD1fLHRoaXMuaW5UYWJsZT1oLHRoaXMuX19kZXRlY3RTdHJfXyh0LHRoaXMudGFnTmFtZSkpe3ZhciBtPXRoaXMuX19mZXRjaFRhZ0F0dHJfXyh0KS5hdHRyO3RoaXMuYXR0cnM9bX1lbHNlIHRoaXMuYXR0cnM9e319cmV0dXJuIHQucHJvdG90eXBlLl9fZGV0ZWN0U3RyX189ZnVuY3Rpb24odCxlKXtpZihcIjxcIiE9PXRbMF0pcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJOb3QgYSB2YWxpZCB0YWcsIGN1cnJlbnQgdGFnIG5hbWU6IFwiLmNvbmNhdCh0aGlzLnRhZ05hbWUsXCIsIHRhZyBjb250ZW50OiBcIikuY29uY2F0KHQpKSwhMTtmb3IodmFyIHI9XCJcIixuPSExLG89MTtvPHQubGVuZ3RoJiZcIj5cIiE9PXRbb107bysrKSFuJiYvKFxcc3xcXC8pLy50ZXN0KHRbb10pJiYobj0hMCksbnx8KHIrPXRbb10pO3JldHVybiByPT09ZXx8KGNvbnNvbGUud2FybihcIlRhZyBpcyBub3QgbWF0Y2ggdGFnTmFtZSwgdGFnTmFtZSBpbiBzdHIgaXMgXCIrcitcIiwgd2hpY2ggdGFnTmFtZSBwYXNzZWQgZnJvbSBwYXJlbnQgaXMgXCIrZSksITEpfSx0LnByb3RvdHlwZS5fX2ZldGNoVGFnQXR0cl9fPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1cIlwiLHI9MTtyPHQubGVuZ3RoJiZcIj5cIiE9PXRbcl07cisrKWUrPXRbcl07cmV0dXJue2F0dHI6KDAsbi5nZXRUYWdBdHRyaWJ1dGVzKShlKX19LHQucHJvdG90eXBlLmJlZm9yZVBhcnNlPWZ1bmN0aW9uKCl7dmFyIHQ9by5kZWZhdWx0LmdldCgpLnRhZ0xpc3RlbmVyO2lmKHQpe3ZhciBlPXQodGhpcy50YWdOYW1lLHtwYXJlbnRUYWc6dGhpcy5wYXJlbnRUYWcscHJldlRhZ05hbWU6dGhpcy5wcmV2VGFnTmFtZSxuZXh0VGFnTmFtZTp0aGlzLm5leHRUYWdOYW1lLGlzRmlyc3RTdWJUYWc6dGhpcy5pc0ZpcnN0U3ViVGFnLGF0dHJzOnRoaXMuYXR0cnMsaW5uZXJIVE1MOnRoaXMuaW5uZXJIVE1MLG1hdGNoOnRoaXMubWF0Y2gsaXNTZWxmQ2xvc2luZzohMH0pLHI9ZS5hdHRycyxuPWUubWF0Y2g7dGhpcy5hdHRycz1yLHRoaXMubWF0Y2g9bn1yZXR1cm5cIlwifSx0LnByb3RvdHlwZS5iZWZvcmVNZXJnZVNwYWNlPWZ1bmN0aW9uKHQpe3JldHVybiB0fSx0LnByb3RvdHlwZS5hZnRlck1lcmdlU3BhY2U9ZnVuY3Rpb24odCl7cmV0dXJuIHR9LHQucHJvdG90eXBlLmJlZm9yZVJldHVybj1mdW5jdGlvbih0KXtyZXR1cm4gdH0sdC5wcm90b3R5cGUuZXhlYz1mdW5jdGlvbih0LGUpe3ZvaWQgMD09PXQmJih0PVwiXCIpLHZvaWQgMD09PWUmJihlPVwiXCIpO3ZhciByPXRoaXMuYmVmb3JlUGFyc2UoKTtyZXR1cm4gcj10KyhyPXRoaXMuYmVmb3JlTWVyZ2VTcGFjZShyKSkrZSxyPXRoaXMuYWZ0ZXJNZXJnZVNwYWNlKHIpLHI9dGhpcy5iZWZvcmVSZXR1cm4ocil9LHR9KCk7ZS5kZWZhdWx0PWl9LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbj1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXt9cmV0dXJuIHQucHJvdG90eXBlLmV4ZWM9ZnVuY3Rpb24oKXtyZXR1cm5cIlwifSx0fSgpO2UuZGVmYXVsdD1ufSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49cigxNyksbz17aHRtbDohMCxib2R5OiEwLHA6ITAsZGl2OiEwLHByZTohMCxzZWN0aW9uOiEwLGJsb2NrcXVvdGU6ITAsYXNpZGU6ITAsbGk6ITAsdWw6ITAsb2w6ITAsZm9ybTohMCxocjohMCxoMTohMCxoMjohMCxoMzohMCxoNDohMCxoNTohMCxoNjohMCxkbDohMCxkZDohMCxkdDohMCxicjohMH07ZS5kZWZhdWx0PWZ1bmN0aW9uKHQpe2lmKCF0KXJldHVybiExO3ZhciBlPSgwLG4uZGVmYXVsdCkodCk7cmV0dXJuISFlJiYhIW9bZV19fSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49dGhpcyYmdGhpcy5fX2V4dGVuZHN8fGZ1bmN0aW9uKCl7dmFyIHQ9ZnVuY3Rpb24oZSxyKXtyZXR1cm4odD1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24odCxlKXt0Ll9fcHJvdG9fXz1lfXx8ZnVuY3Rpb24odCxlKXtmb3IodmFyIHIgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxyKSYmKHRbcl09ZVtyXSl9KShlLHIpfTtyZXR1cm4gZnVuY3Rpb24oZSxyKXtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgciYmbnVsbCE9PXIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIrU3RyaW5nKHIpK1wiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7ZnVuY3Rpb24gbigpe3RoaXMuY29uc3RydWN0b3I9ZX10KGUsciksZS5wcm90b3R5cGU9bnVsbD09PXI/T2JqZWN0LmNyZWF0ZShyKToobi5wcm90b3R5cGU9ci5wcm90b3R5cGUsbmV3IG4pfX0oKSxvPXRoaXMmJnRoaXMuX19hc3NpZ258fGZ1bmN0aW9uKCl7cmV0dXJuKG89T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24odCl7Zm9yKHZhciBlLHI9MSxuPWFyZ3VtZW50cy5sZW5ndGg7cjxuO3IrKylmb3IodmFyIG8gaW4gZT1hcmd1bWVudHNbcl0pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsbykmJih0W29dPWVbb10pO3JldHVybiB0fSkuYXBwbHkodGhpcyxhcmd1bWVudHMpfTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxlLl9fRW1wdHlTZWxmQ2xvc2VfXz1lLl9fRW1wdHlfXz12b2lkIDA7dmFyIGk9cigwKSxhPXIoNCksYz1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKGUscixuKXtyZXR1cm4gdm9pZCAwPT09ciYmKHI9XCJfX2VtcHR5X19cIiksdC5jYWxsKHRoaXMsZSxyLG4pfHx0aGlzfXJldHVybiBuKGUsdCksZS5wcm90b3R5cGUuc2xpbT1mdW5jdGlvbih0KXtyZXR1cm4gdH0sZS5wcm90b3R5cGUucGFyc2VWYWxpZFN1YlRhZz1mdW5jdGlvbih0LHIsbil7cmV0dXJuIG5ldyBlKHQscixvKHt9LG4pKS5leGVjKCl9LGUucHJvdG90eXBlLnBhcnNlT25seVN0cmluZz1mdW5jdGlvbih0LGUscil7cmV0dXJuIHR9LGUucHJvdG90eXBlLmV4ZWM9ZnVuY3Rpb24oKXtyZXR1cm4gdC5wcm90b3R5cGUuZXhlYy5jYWxsKHRoaXMsXCJcIixcIlwiKX0sZX0oaS5kZWZhdWx0KTtlLl9fRW1wdHlfXz1jO3ZhciB1PWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUoZSxyKXt2b2lkIDA9PT1yJiYocj1cIl9fZW1wdHlzZWxmY2xvc2VfX1wiKTt2YXIgbj10LmNhbGwodGhpcyxlLHIpfHx0aGlzO3JldHVybiBuLnRhZ05hbWU9cixufXJldHVybiBuKGUsdCksZS5wcm90b3R5cGUuZXhlYz1mdW5jdGlvbigpe3JldHVybiB0LnByb3RvdHlwZS5leGVjLmNhbGwodGhpcyxcIlwiLFwiXCIpfSxlfShhLmRlZmF1bHQpO2UuX19FbXB0eVNlbGZDbG9zZV9fPXV9LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj10aGlzJiZ0aGlzLl9fZXh0ZW5kc3x8ZnVuY3Rpb24oKXt2YXIgdD1mdW5jdGlvbihlLHIpe3JldHVybih0PU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbih0LGUpe3QuX19wcm90b19fPWV9fHxmdW5jdGlvbih0LGUpe2Zvcih2YXIgciBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHIpJiYodFtyXT1lW3JdKX0pKGUscil9O3JldHVybiBmdW5jdGlvbihlLHIpe2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiByJiZudWxsIT09cil0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIitTdHJpbmcocikrXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtmdW5jdGlvbiBuKCl7dGhpcy5jb25zdHJ1Y3Rvcj1lfXQoZSxyKSxlLnByb3RvdHlwZT1udWxsPT09cj9PYmplY3QuY3JlYXRlKHIpOihuLnByb3RvdHlwZT1yLnByb3RvdHlwZSxuZXcgbil9fSgpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGUuX19Ta2lwU2VsZkNsb3NlX189ZS5fX1NraXBfXz12b2lkIDA7dmFyIG89cigwKSxpPXIoNCksYT1yKDEpLGM9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShlLHIsbil7dm9pZCAwPT09ciYmKHI9XCJfX3NraXBfX1wiKTt2YXIgbz10LmNhbGwodGhpcyxlLHIsbil8fHRoaXM7cmV0dXJuIG8ubm9OZWVkV3JhcD1bXCJ0ZFwiLFwidGhcIl0sb31yZXR1cm4gbihlLHQpLGUucHJvdG90eXBlLmV4ZWM9ZnVuY3Rpb24oKXt2YXIgZT0oMCxhLmlzSW5kZXBlbmRlbnRUYWcpKCgwLGEuZ2V0UmVhbFRhZ05hbWUpKHRoaXMudGFnTmFtZSkpJiYoIXRoaXMucGFyZW50VGFnfHwhdGhpcy5ub05lZWRXcmFwLmluY2x1ZGVzKHRoaXMucGFyZW50VGFnKSkscj1lP1wiXFxuXCI6XCJcIixuPWU/XCJcXG5cIjpcIlwiO3JldHVybiB0LnByb3RvdHlwZS5leGVjLmNhbGwodGhpcyxyLG4pfSxlfShvLmRlZmF1bHQpO2UuX19Ta2lwX189Yzt2YXIgdT1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKGUscixuKXtyZXR1cm4gdm9pZCAwPT09ciYmKHI9XCJfX3NraXBzZWxmY2xvc2VfX1wiKSx0LmNhbGwodGhpcyxlLHIsbil8fHRoaXN9cmV0dXJuIG4oZSx0KSxlLnByb3RvdHlwZS5leGVjPWZ1bmN0aW9uKCl7cmV0dXJuXCJcIn0sZX0oaS5kZWZhdWx0KTtlLl9fU2tpcFNlbGZDbG9zZV9fPXV9LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbj1yKDEpLG89cig2KSxpPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LGUscil7dm9pZCAwPT09ZSYmKGU9XCJfX25vbWF0Y2hfX1wiKTt2YXIgbj12b2lkIDA9PT1yP3t9OnIsbz1uLmtlZXBTcGFjZSxpPXZvaWQgMCE9PW8mJm8sYT1uLnByZXZUYWdOYW1lLGM9dm9pZCAwPT09YT9cIlwiOmEsdT1uLm5leHRUYWdOYW1lLHM9dm9pZCAwPT09dT9cIlwiOnUsbD1uLnBhcmVudFRhZyxwPXZvaWQgMD09PWw/XCJcIjpsLGY9bi5jYWxjTGVhZGluZyxoPXZvaWQgMCE9PWYmJmYsZD1uLmxheWVyLF89dm9pZCAwPT09ZD8xOmQseT1uLmxlYWRpbmdTcGFjZSx2PXZvaWQgMD09PXk/XCJcIjp5LGc9bi5pblRhYmxlLGI9dm9pZCAwIT09ZyYmZzt0aGlzLnRhZ05hbWU9ZSx0aGlzLm5leHRUYWdOYW1lPXMsdGhpcy5wcmV2VGFnTmFtZT1jLHRoaXMucGFyZW50VGFnPXAsdGhpcy5rZWVwU3BhY2U9aSx0aGlzLmNhbGNMZWFkaW5nPWgsdGhpcy5sZWFkaW5nU3BhY2U9dix0aGlzLmxheWVyPV8sdGhpcy5yYXdTdHI9dCx0aGlzLmluVGFibGU9Yn1yZXR1cm4gdC5wcm90b3R5cGUuc2xpbT1mdW5jdGlvbih0KXtpZih0aGlzLmtlZXBTcGFjZSlyZXR1cm4gdDt2YXIgZT10LnJlcGxhY2UoL1xccysvZyxcIiBcIik7cmV0dXJuKDAsby5kZWZhdWx0KSh0aGlzLnByZXZUYWdOYW1lKSYmKGU9ZS50cmltTGVmdCgpKSwoMCxvLmRlZmF1bHQpKHRoaXMubmV4dFRhZ05hbWUpJiYoZT1lLnRyaW1SaWdodCgpKSxlfSx0LnByb3RvdHlwZS5iZWZvcmVSZXR1cm49ZnVuY3Rpb24odCl7aWYodGhpcy5rZWVwU3BhY2UpcmV0dXJuIHQ7aWYodGhpcy5jYWxjTGVhZGluZylyZXR1cm4gdGhpcy5sZWFkaW5nU3BhY2UrKDAsbi5leHRyYUVzY2FwZSkodCk7dmFyIGU9KDAsbi5leHRyYUVzY2FwZSkodCk7cmV0dXJuIHRoaXMuaW5UYWJsZSYmKGU9ZS5yZXBsYWNlKC9cXHwvZyxcIlxcXFx8XCIpKSxlfSx0LnByb3RvdHlwZS5leGVjPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5yYXdTdHI7cmV0dXJuIHQ9dGhpcy5zbGltKHQpLHQ9dGhpcy5iZWZvcmVSZXR1cm4odCl9LHR9KCk7ZS5kZWZhdWx0PWl9LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj10aGlzJiZ0aGlzLl9fZXh0ZW5kc3x8ZnVuY3Rpb24oKXt2YXIgdD1mdW5jdGlvbihlLHIpe3JldHVybih0PU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbih0LGUpe3QuX19wcm90b19fPWV9fHxmdW5jdGlvbih0LGUpe2Zvcih2YXIgciBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHIpJiYodFtyXT1lW3JdKX0pKGUscil9O3JldHVybiBmdW5jdGlvbihlLHIpe2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiByJiZudWxsIT09cil0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIitTdHJpbmcocikrXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtmdW5jdGlvbiBuKCl7dGhpcy5jb25zdHJ1Y3Rvcj1lfXQoZSxyKSxlLnByb3RvdHlwZT1udWxsPT09cj9PYmplY3QuY3JlYXRlKHIpOihuLnByb3RvdHlwZT1yLnByb3RvdHlwZSxuZXcgbil9fSgpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGUuX19Ob01hdGNoU2VsZkNsb3NlX189ZS5fX05vTWF0Y2hfXz12b2lkIDA7dmFyIG89cigwKSxpPXIoNCksYT1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKGUscil7cmV0dXJuIHZvaWQgMD09PXImJihyPVwiX19ub21hdGNoX19cIiksdC5jYWxsKHRoaXMsZSxyKXx8dGhpc31yZXR1cm4gbihlLHQpLGUucHJvdG90eXBlLmJlZm9yZU1lcmdlU3BhY2U9ZnVuY3Rpb24odCl7cmV0dXJuXCI8XCIuY29uY2F0KHRoaXMudGFnTmFtZSxcIj5cIikuY29uY2F0KHQsXCI8L1wiKS5jb25jYXQodGhpcy50YWdOYW1lLFwiPlwiKX0sZS5wcm90b3R5cGUuZXhlYz1mdW5jdGlvbigpe3JldHVybiB0LnByb3RvdHlwZS5leGVjLmNhbGwodGhpcyxcIlwiLFwiXCIpfSxlfShvLmRlZmF1bHQpO2UuX19Ob01hdGNoX189YTt2YXIgYz1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKGUscil7cmV0dXJuIHZvaWQgMD09PXImJihyPVwiX19ub21hdGNoc2VsZmNsb3NlX19cIiksdC5jYWxsKHRoaXMsZSxyKXx8dGhpc31yZXR1cm4gbihlLHQpLGUucHJvdG90eXBlLmV4ZWM9ZnVuY3Rpb24oKXtyZXR1cm5cIjxcIi5jb25jYXQodGhpcy50YWdOYW1lLFwiIC8+XCIpfSxlfShpLmRlZmF1bHQpO2UuX19Ob01hdGNoU2VsZkNsb3NlX189Y30sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPXtpbWc6ITAsaHI6ITAsaW5wdXQ6ITAsYnI6ITAsbWV0YTohMCxsaW5rOiEwLFwiIWRvY3R5cGVcIjohMCxiYXNlOiEwLGNvbDohMCxhcmVhOiEwLHBhcmFtOiEwLG9iamVjdDohMCxlbWJlZDohMCxrZXlnZW46ITAsc291cmNlOiEwfTtlLmRlZmF1bHQ9ZnVuY3Rpb24odCl7cmV0dXJuIG51bGwhPXQmJiEhblt0LnRvTG93ZXJDYXNlKCldfX0sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGUuVFJJUExFPWUuRE9VQkxFPWUuU0lOR0xFPXZvaWQgMDtlLlNJTkdMRT1cIlxcdTI2MDhcIjtlLkRPVUJMRT1cIlxcdTI2MDhcXHUyNjA4XCI7ZS5UUklQTEU9XCJcXHUyNjA4XFx1MjYwOFxcdTI2MDhcIn0sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBuPXRoaXMmJnRoaXMuX19leHRlbmRzfHxmdW5jdGlvbigpe3ZhciB0PWZ1bmN0aW9uKGUscil7cmV0dXJuKHQ9T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKHQsZSl7dC5fX3Byb3RvX189ZX18fGZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUscikmJih0W3JdPWVbcl0pfSkoZSxyKX07cmV0dXJuIGZ1bmN0aW9uKGUscil7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIHImJm51bGwhPT1yKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiK1N0cmluZyhyKStcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO2Z1bmN0aW9uIG4oKXt0aGlzLmNvbnN0cnVjdG9yPWV9dChlLHIpLGUucHJvdG90eXBlPW51bGw9PT1yP09iamVjdC5jcmVhdGUocik6KG4ucHJvdG90eXBlPXIucHJvdG90eXBlLG5ldyBuKX19KCk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShlLHIsbil7dm9pZCAwPT09ciYmKHI9XCJzdHJvbmdcIik7dmFyIG89dC5jYWxsKHRoaXMsZSxyLG4pfHx0aGlzO3JldHVybiBvLmxheWVyPTEsby5tYXRjaD1vLm1hdGNofHxcIioqXCIsb31yZXR1cm4gbihlLHQpLGUucHJvdG90eXBlLmJlZm9yZU1lcmdlU3BhY2U9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMubWF0Y2grdCt0aGlzLm1hdGNofSxlLnByb3RvdHlwZS5leGVjPWZ1bmN0aW9uKGUscil7cmV0dXJuIHZvaWQgMD09PWUmJihlPVwiXCIpLHZvaWQgMD09PXImJihyPVwiXCIpLG51bGwhPXRoaXMubWF0Y2gmJnRoaXMucHJldlRhZ1N0ciYmIXRoaXMucHJldlRhZ1N0ci5lbmRzV2l0aChcIlxcXFxcIit0aGlzLm1hdGNoWzBdKSYmdGhpcy5wcmV2VGFnU3RyLmVuZHNXaXRoKHRoaXMubWF0Y2hbMF0pJiYoZT1cIiBcIiksdC5wcm90b3R5cGUuZXhlYy5jYWxsKHRoaXMsZSxyKX0sZX0ocigwKS5kZWZhdWx0KTtlLmRlZmF1bHQ9b30sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBuPXRoaXMmJnRoaXMuX19leHRlbmRzfHxmdW5jdGlvbigpe3ZhciB0PWZ1bmN0aW9uKGUscil7cmV0dXJuKHQ9T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKHQsZSl7dC5fX3Byb3RvX189ZX18fGZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUscikmJih0W3JdPWVbcl0pfSkoZSxyKX07cmV0dXJuIGZ1bmN0aW9uKGUscil7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIHImJm51bGwhPT1yKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiK1N0cmluZyhyKStcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO2Z1bmN0aW9uIG4oKXt0aGlzLmNvbnN0cnVjdG9yPWV9dChlLHIpLGUucHJvdG90eXBlPW51bGw9PT1yP09iamVjdC5jcmVhdGUocik6KG4ucHJvdG90eXBlPXIucHJvdG90eXBlLG5ldyBuKX19KCk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShlLHIpe3ZvaWQgMD09PXImJihyPVwiZGVsXCIpO3ZhciBuPXQuY2FsbCh0aGlzLGUscil8fHRoaXM7cmV0dXJuIG4ubWF0Y2g9bi5tYXRjaHx8XCJ+flwiLG59cmV0dXJuIG4oZSx0KSxlLnByb3RvdHlwZS5iZWZvcmVNZXJnZVNwYWNlPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLm1hdGNoK3QrdGhpcy5tYXRjaH0sZS5wcm90b3R5cGUuZXhlYz1mdW5jdGlvbihlLHIpe3JldHVybiB2b2lkIDA9PT1lJiYoZT1cIlwiKSx2b2lkIDA9PT1yJiYocj1cIlwiKSx0LnByb3RvdHlwZS5leGVjLmNhbGwodGhpcyxlLHIpfSxlfShyKDApLmRlZmF1bHQpO2UuZGVmYXVsdD1vfSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49dGhpcyYmdGhpcy5fX2V4dGVuZHN8fGZ1bmN0aW9uKCl7dmFyIHQ9ZnVuY3Rpb24oZSxyKXtyZXR1cm4odD1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24odCxlKXt0Ll9fcHJvdG9fXz1lfXx8ZnVuY3Rpb24odCxlKXtmb3IodmFyIHIgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxyKSYmKHRbcl09ZVtyXSl9KShlLHIpfTtyZXR1cm4gZnVuY3Rpb24oZSxyKXtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgciYmbnVsbCE9PXIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIrU3RyaW5nKHIpK1wiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7ZnVuY3Rpb24gbigpe3RoaXMuY29uc3RydWN0b3I9ZX10KGUsciksZS5wcm90b3R5cGU9bnVsbD09PXI/T2JqZWN0LmNyZWF0ZShyKToobi5wcm90b3R5cGU9ci5wcm90b3R5cGUsbmV3IG4pfX0oKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKGUscixuKXt2b2lkIDA9PT1yJiYocj1cImVtXCIpO3ZhciBvPXQuY2FsbCh0aGlzLGUscixuKXx8dGhpcztyZXR1cm4gby5tYXRjaD1vLm1hdGNofHxcIipcIixvfXJldHVybiBuKGUsdCksZS5wcm90b3R5cGUuYmVmb3JlTWVyZ2VTcGFjZT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5tYXRjaCt0K3RoaXMubWF0Y2h9LGUucHJvdG90eXBlLmV4ZWM9ZnVuY3Rpb24oZSxyKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9XCJcIiksdm9pZCAwPT09ciYmKHI9XCJcIiksXCJzdHJvbmdcIj09PXRoaXMucGFyZW50VGFnJiZ0aGlzLm5leHRUYWdTdHImJihyPVwiIFwiKSxudWxsIT10aGlzLm1hdGNoJiZ0aGlzLnByZXZUYWdTdHImJiF0aGlzLnByZXZUYWdTdHIuZW5kc1dpdGgoXCJcXFxcXCIrdGhpcy5tYXRjaCkmJnRoaXMucHJldlRhZ1N0ci5lbmRzV2l0aCh0aGlzLm1hdGNoKSYmKGU9XCIgXCIpLHQucHJvdG90eXBlLmV4ZWMuY2FsbCh0aGlzLGUscil9LGV9KHIoMCkuZGVmYXVsdCk7ZS5kZWZhdWx0PW99LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj10aGlzJiZ0aGlzLl9fZXh0ZW5kc3x8ZnVuY3Rpb24oKXt2YXIgdD1mdW5jdGlvbihlLHIpe3JldHVybih0PU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbih0LGUpe3QuX19wcm90b19fPWV9fHxmdW5jdGlvbih0LGUpe2Zvcih2YXIgciBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHIpJiYodFtyXT1lW3JdKX0pKGUscil9O3JldHVybiBmdW5jdGlvbihlLHIpe2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiByJiZudWxsIT09cil0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIitTdHJpbmcocikrXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtmdW5jdGlvbiBuKCl7dGhpcy5jb25zdHJ1Y3Rvcj1lfXQoZSxyKSxlLnByb3RvdHlwZT1udWxsPT09cj9PYmplY3QuY3JlYXRlKHIpOihuLnByb3RvdHlwZT1yLnByb3RvdHlwZSxuZXcgbil9fSgpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUoZSxyLG4pe3ZvaWQgMD09PXImJihyPVwidGhcIik7dmFyIG89dC5jYWxsKHRoaXMsZSxyLG4pfHx0aGlzO3JldHVybiBvLnRhZ05hbWU9cixvfXJldHVybiBuKGUsdCksZS5wcm90b3R5cGUuYmVmb3JlTWVyZ2VTcGFjZT1mdW5jdGlvbih0KXtyZXR1cm4gdCtcInxcIn0sZS5wcm90b3R5cGUucGFyc2VWYWxpZFN1YlRhZz1mdW5jdGlvbihlLHIsbil7cmV0dXJuXCJ1bFwiPT09cnx8XCJvbFwiPT09cnx8XCJ0YWJsZVwiPT09cnx8XCJwcmVcIj09PXI/ZS5yZXBsYWNlKC8oW1xcblxccl0pL2csXCJcIik6dC5wcm90b3R5cGUucGFyc2VWYWxpZFN1YlRhZy5jYWxsKHRoaXMsZSxyLG4pfSxlLnByb3RvdHlwZS5leGVjPWZ1bmN0aW9uKGUscil7cmV0dXJuIHZvaWQgMD09PWUmJihlPVwiXCIpLHZvaWQgMD09PXImJihyPVwiXCIpLHQucHJvdG90eXBlLmV4ZWMuY2FsbCh0aGlzLGUscil9LGV9KHIoMCkuZGVmYXVsdCk7ZS5kZWZhdWx0PW99LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbj1yKDIpO2UuZGVmYXVsdD1mdW5jdGlvbih0KXtpZighdClyZXR1cm4gdDt2YXIgZT1uLmRlZmF1bHQuZ2V0KCkuYWxpYXNUYWdzO3JldHVybiBudWxsIT0obnVsbD09PWV8fHZvaWQgMD09PWU/dm9pZCAwOmVbdF0pP2VbdF06dH19LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj10aGlzJiZ0aGlzLl9fZXh0ZW5kc3x8ZnVuY3Rpb24oKXt2YXIgdD1mdW5jdGlvbihlLHIpe3JldHVybih0PU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbih0LGUpe3QuX19wcm90b19fPWV9fHxmdW5jdGlvbih0LGUpe2Zvcih2YXIgciBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHIpJiYodFtyXT1lW3JdKX0pKGUscil9O3JldHVybiBmdW5jdGlvbihlLHIpe2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiByJiZudWxsIT09cil0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIitTdHJpbmcocikrXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtmdW5jdGlvbiBuKCl7dGhpcy5jb25zdHJ1Y3Rvcj1lfXQoZSxyKSxlLnByb3RvdHlwZT1udWxsPT09cj9PYmplY3QuY3JlYXRlKHIpOihuLnByb3RvdHlwZT1yLnByb3RvdHlwZSxuZXcgbil9fSgpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUoZSxyLG4pe3JldHVybiB2b2lkIDA9PT1yJiYocj1cImFcIiksdC5jYWxsKHRoaXMsZSxyLG4pfHx0aGlzfXJldHVybiBuKGUsdCksZS5wcm90b3R5cGUuYmVmb3JlTWVyZ2VTcGFjZT1mdW5jdGlvbih0KXt2YXIgZT10aGlzLmF0dHJzLHI9ZS5ocmVmLG49ZS50aXRsZSxvPXJ8fFwiXCI7cmV0dXJuIG4/XCJbXCIuY29uY2F0KHQsXCJdKFwiKS5jb25jYXQobywnIFwiJykuY29uY2F0KG4sJ1wiKScpOlwiW1wiLmNvbmNhdCh0LFwiXShcIikuY29uY2F0KG8sXCIpXCIpfSxlLnByb3RvdHlwZS5wYXJzZU9ubHlTdHJpbmc9ZnVuY3Rpb24oZSxyLG4pe3JldHVyblwidGJvZHlcIj09PXRoaXMucGFyZW50VGFnfHxcInRoZWFkXCI9PT10aGlzLnBhcmVudFRhZz9lOnQucHJvdG90eXBlLnBhcnNlT25seVN0cmluZy5jYWxsKHRoaXMsZSxyLG4pfSxlLnByb3RvdHlwZS5leGVjPWZ1bmN0aW9uKGUscil7cmV0dXJuIHZvaWQgMD09PWUmJihlPVwiXCIpLHZvaWQgMD09PXImJihyPVwiXCIpLHQucHJvdG90eXBlLmV4ZWMuY2FsbCh0aGlzLGUscil9LGV9KHIoMCkuZGVmYXVsdCk7ZS5kZWZhdWx0PW99LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj10aGlzJiZ0aGlzLl9fZXh0ZW5kc3x8ZnVuY3Rpb24oKXt2YXIgdD1mdW5jdGlvbihlLHIpe3JldHVybih0PU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbih0LGUpe3QuX19wcm90b19fPWV9fHxmdW5jdGlvbih0LGUpe2Zvcih2YXIgciBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHIpJiYodFtyXT1lW3JdKX0pKGUscil9O3JldHVybiBmdW5jdGlvbihlLHIpe2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiByJiZudWxsIT09cil0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIitTdHJpbmcocikrXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtmdW5jdGlvbiBuKCl7dGhpcy5jb25zdHJ1Y3Rvcj1lfXQoZSxyKSxlLnByb3RvdHlwZT1udWxsPT09cj9PYmplY3QuY3JlYXRlKHIpOihuLnByb3RvdHlwZT1yLnByb3RvdHlwZSxuZXcgbil9fSgpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUoZSxyLG4pe3JldHVybiB2b2lkIDA9PT1yJiYocj1cImJcIiksdC5jYWxsKHRoaXMsZSxyLG4pfHx0aGlzfXJldHVybiBuKGUsdCksZS5wcm90b3R5cGUuZXhlYz1mdW5jdGlvbihlLHIpe3JldHVybiB0LnByb3RvdHlwZS5leGVjLmNhbGwodGhpcyxlLHIpfSxlfShyKDEzKS5kZWZhdWx0KTtlLmRlZmF1bHQ9b30sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBuPXRoaXMmJnRoaXMuX19leHRlbmRzfHxmdW5jdGlvbigpe3ZhciB0PWZ1bmN0aW9uKGUscil7cmV0dXJuKHQ9T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKHQsZSl7dC5fX3Byb3RvX189ZX18fGZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUscikmJih0W3JdPWVbcl0pfSkoZSxyKX07cmV0dXJuIGZ1bmN0aW9uKGUscil7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIHImJm51bGwhPT1yKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiK1N0cmluZyhyKStcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO2Z1bmN0aW9uIG4oKXt0aGlzLmNvbnN0cnVjdG9yPWV9dChlLHIpLGUucHJvdG90eXBlPW51bGw9PT1yP09iamVjdC5jcmVhdGUocik6KG4ucHJvdG90eXBlPXIucHJvdG90eXBlLG5ldyBuKX19KCksbz10aGlzJiZ0aGlzLl9fYXNzaWdufHxmdW5jdGlvbigpe3JldHVybihvPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHQpe2Zvcih2YXIgZSxyPTEsbj1hcmd1bWVudHMubGVuZ3RoO3I8bjtyKyspZm9yKHZhciBvIGluIGU9YXJndW1lbnRzW3JdKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLG8pJiYodFtvXT1lW29dKTtyZXR1cm4gdH0pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX07T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGk9cig2KSxhPXIoMCksYz1yKDEpLHU9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShlLHIsbil7dm9pZCAwPT09ciYmKHI9XCJibG9ja3F1b3RlXCIpO3ZhciBvPXQuY2FsbCh0aGlzLGUscixuKXx8dGhpcztyZXR1cm4gby5tYXRjaD1vLm1hdGNofHxcIj5cIixvLmZpbGxQZXJMaW5lPW8uZmlsbFBlckxpbmUuYmluZChvKSxvfXJldHVybiBuKGUsdCksZS5wcm90b3R5cGUuYmVmb3JlTWVyZ2VTcGFjZT1mdW5jdGlvbih0KXtpZihcIlwiPT09dC50cmltKCkpcmV0dXJuXCJcIjt2YXIgZT10aGlzLm1hdGNoK1wiIFwiK3Q7cmV0dXJuIHRoaXMuY2FsY0xlYWRpbmc/dGhpcy5sZWFkaW5nU3BhY2UrZTplfSxlLnByb3RvdHlwZS5hZnRlck1lcmdlU3BhY2U9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPXRoaXMscj10LnNwbGl0KFwiXFxuXCIpLG49ci5sZW5ndGgtMTtuPj0wO24tLSluPHIubGVuZ3RoLTEmJlwiPlwiPT09cltuXS50cmltKCkmJlwiPlwiPT09cltuKzFdLnRyaW0oKSYmci5zcGxpY2UobiwxKTtyZXR1cm4ocj1yLm1hcChmdW5jdGlvbih0KXtyZXR1cm5cIlwiPT09dD9cIlwiOmUuZmlsbFBlckxpbmUodCl9KSkuam9pbihcIlxcblwiKX0sZS5wcm90b3R5cGUuYmVmb3JlUmV0dXJuPWZ1bmN0aW9uKHQpe3JldHVybiB0LnJlcGxhY2UoXCJcXG5cXG5cIixcIlxcblwiKX0sZS5wcm90b3R5cGUuZmlsbFBlckxpbmU9ZnVuY3Rpb24odCl7dmFyIGU9XCI+XCI7aWYodGhpcy5jYWxjTGVhZGluZyYmKGU9dGhpcy5sZWFkaW5nU3BhY2UrXCI+XCIpLCF0LnN0YXJ0c1dpdGgoZSkpe3ZhciByPXRoaXMubWF0Y2grXCIgXCIrdDtyZXR1cm4gdGhpcy5jYWxjTGVhZGluZz90aGlzLmxlYWRpbmdTcGFjZStyOnJ9cmV0dXJuIHR9LGUucHJvdG90eXBlLnBhcnNlVmFsaWRTdWJUYWc9ZnVuY3Rpb24odCxlLHIpe3ZhciBuO1wiYmxvY2txdW90ZVwiPT09ZT9uPW5ldygoMCxjLmdldFRhZ0NvbnN0cnVjdG9yKShlKSkodCxlLG8obyh7fSxyKSx7Y2FsY0xlYWRpbmc6dGhpcy5jYWxjTGVhZGluZyxtYXRjaDp0aGlzLm1hdGNoK1wiPlwiLG5vRXh0cmFMaW5lOiEwfSkpOm49bmV3KCgwLGMuZ2V0VGFnQ29uc3RydWN0b3IpKGUpKSh0LGUsbyhvKHt9LHIpLHtub0V4dHJhTGluZTohMH0pKTt2YXIgYT1uLmV4ZWMoKSx1PVwiXCI7dGhpcy5jYWxjTGVhZGluZyYmKHU9dGhpcy5sZWFkaW5nU3BhY2UpO3ZhciBzPSgwLGkuZGVmYXVsdCkoci5wcmV2VGFnTmFtZSkmJlwiYnJcIiE9PXIucHJldlRhZ05hbWUsbD0oMCxpLmRlZmF1bHQpKHIubmV4dFRhZ05hbWUpJiZcImJyXCIhPT1yLm5leHRUYWdOYW1lLHA9KDAsaS5kZWZhdWx0KShlKSYmXCJiclwiIT09ZTtyZXR1cm4gdGhpcy5pc0ZpcnN0U3ViVGFnP2EudHJpbUxlZnQoKS5yZXBsYWNlKHUsXCJcIik6cD8oYT11K3RoaXMubWF0Y2grYSxzfHwoYT1cIlxcblwiK2EpLCFsJiZyLm5leHRUYWdTdHImJnIubmV4dFRhZ1N0ci50cmltKCkmJihhKz10aGlzLm1hdGNoK1wiXFxuXCIpLGEpOnM/dSt0aGlzLm1hdGNoK1wiXFxuXCIrYTphfSxlLnByb3RvdHlwZS5leGVjPWZ1bmN0aW9uKGUscil7cmV0dXJuIHZvaWQgMD09PWUmJihlPVwiXFxuXCIpLHZvaWQgMD09PXImJihyPVwiXFxuXCIpLHQucHJvdG90eXBlLmV4ZWMuY2FsbCh0aGlzLGUscil9LGV9KGEuZGVmYXVsdCk7ZS5kZWZhdWx0PXV9LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj10aGlzJiZ0aGlzLl9fZXh0ZW5kc3x8ZnVuY3Rpb24oKXt2YXIgdD1mdW5jdGlvbihlLHIpe3JldHVybih0PU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbih0LGUpe3QuX19wcm90b19fPWV9fHxmdW5jdGlvbih0LGUpe2Zvcih2YXIgciBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHIpJiYodFtyXT1lW3JdKX0pKGUscil9O3JldHVybiBmdW5jdGlvbihlLHIpe2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiByJiZudWxsIT09cil0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIitTdHJpbmcocikrXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtmdW5jdGlvbiBuKCl7dGhpcy5jb25zdHJ1Y3Rvcj1lfXQoZSxyKSxlLnByb3RvdHlwZT1udWxsPT09cj9PYmplY3QuY3JlYXRlKHIpOihuLnByb3RvdHlwZT1yLnByb3RvdHlwZSxuZXcgbil9fSgpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUoZSxyLG4pe3JldHVybiB2b2lkIDA9PT1yJiYocj1cImJcIiksdC5jYWxsKHRoaXMsZSxyLG4pfHx0aGlzfXJldHVybiBuKGUsdCksZS5wcm90b3R5cGUuZXhlYz1mdW5jdGlvbih0LGUpe3JldHVybiB2b2lkIDA9PT1lJiYoZT1cIlxcblwiKSx0aGlzLmluVGFibGU/XCJcIjpcIiAgXCIrZX0sZX0ocig0KS5kZWZhdWx0KTtlLmRlZmF1bHQ9b30sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBuPXRoaXMmJnRoaXMuX19leHRlbmRzfHxmdW5jdGlvbigpe3ZhciB0PWZ1bmN0aW9uKGUscil7cmV0dXJuKHQ9T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKHQsZSl7dC5fX3Byb3RvX189ZX18fGZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUscikmJih0W3JdPWVbcl0pfSkoZSxyKX07cmV0dXJuIGZ1bmN0aW9uKGUscil7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIHImJm51bGwhPT1yKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiK1N0cmluZyhyKStcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO2Z1bmN0aW9uIG4oKXt0aGlzLmNvbnN0cnVjdG9yPWV9dChlLHIpLGUucHJvdG90eXBlPW51bGw9PT1yP09iamVjdC5jcmVhdGUocik6KG4ucHJvdG90eXBlPXIucHJvdG90eXBlLG5ldyBuKX19KCksbz10aGlzJiZ0aGlzLl9fYXNzaWdufHxmdW5jdGlvbigpe3JldHVybihvPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHQpe2Zvcih2YXIgZSxyPTEsbj1hcmd1bWVudHMubGVuZ3RoO3I8bjtyKyspZm9yKHZhciBvIGluIGU9YXJndW1lbnRzW3JdKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLG8pJiYodFtvXT1lW29dKTtyZXR1cm4gdH0pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX07T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGk9cigwKSxhPXIoMSksYz1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKGUscixuKXt2b2lkIDA9PT1yJiYocj1cImNvZGVcIik7dmFyIG89dC5jYWxsKHRoaXMsZSxyLG4pfHx0aGlzO3JldHVybiBvLm1hdGNoPW51bGw9PW8ubWF0Y2g/XCJgXCI6by5tYXRjaCxvLm5vV3JhcD1cImBcIj09PW8ubWF0Y2gsby5sYXllcj0xLG99cmV0dXJuIG4oZSx0KSxlLnByb3RvdHlwZS5iZWZvcmVNZXJnZVNwYWNlPWZ1bmN0aW9uKHQpe3ZhciBlLHI7cmV0dXJuXCJcIiE9PXRoaXMubWF0Y2gmJlwiYFwiIT09dGhpcy5tYXRjaD8oZT10aGlzLm1hdGNoK1wiIFwiLHI9XCIgXCIrdGhpcy5tYXRjaCk6KGU9dGhpcy5tYXRjaCxyPXRoaXMubWF0Y2gpLGUrdCtyfSxlLnByb3RvdHlwZS5wYXJzZVZhbGlkU3ViVGFnPWZ1bmN0aW9uKHQsZSxyKXtyZXR1cm5cInByZVwiPT09ZT9uZXcoKDAsYS5nZXRUYWdDb25zdHJ1Y3RvcikoZSkpKHQsZSxvKG8oe30scikse2xhbmd1YWdlOlwiXCIsbWF0Y2g6XCJcIn0pKS5leGVjKFwiXCIsXCJcXG5cIik6bmV3KCgwLGEuZ2V0VGFnQ29uc3RydWN0b3IpKGUpKSh0LGUsbyhvKHt9LHIpLHtrZWVwU3BhY2U6dGhpcy5rZWVwU3BhY2Usbm9XcmFwOnRoaXMubm9XcmFwfSkpLmV4ZWMoXCJcIixcIlwiKX0sZS5wcm90b3R5cGUucGFyc2VPbmx5U3RyaW5nPWZ1bmN0aW9uKHQpe2lmKFwiXCIhPT10aGlzLm1hdGNoJiZ0KXt2YXIgZT0xOyh0LnN0YXJ0c1dpdGgoXCJgXCIpfHx0LmVuZHNXaXRoKFwiYFwiKSkmJihlPTIsKHQuc3RhcnRzV2l0aChcImBgXCIpfHx0LmVuZHNXaXRoKFwiYGBcIikpJiYoZT0zKSksdGhpcy5tYXRjaD1cImBcIi5yZXBlYXQoZSl9cmV0dXJuKDAsYS51bmVzY2FwZVN0cikodCl9LGUucHJvdG90eXBlLnNsaW09ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMua2VlcFNwYWNlP3Q6dC50cmltKCl9LGUucHJvdG90eXBlLmV4ZWM9ZnVuY3Rpb24oZSxyKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9XCJcIiksdm9pZCAwPT09ciYmKHI9XCJcIiksdC5wcm90b3R5cGUuZXhlYy5jYWxsKHRoaXMsZSxyKX0sZX0oaS5kZWZhdWx0KTtlLmRlZmF1bHQ9Y30sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBuPXRoaXMmJnRoaXMuX19leHRlbmRzfHxmdW5jdGlvbigpe3ZhciB0PWZ1bmN0aW9uKGUscil7cmV0dXJuKHQ9T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKHQsZSl7dC5fX3Byb3RvX189ZX18fGZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUscikmJih0W3JdPWVbcl0pfSkoZSxyKX07cmV0dXJuIGZ1bmN0aW9uKGUscil7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIHImJm51bGwhPT1yKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiK1N0cmluZyhyKStcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO2Z1bmN0aW9uIG4oKXt0aGlzLmNvbnN0cnVjdG9yPWV9dChlLHIpLGUucHJvdG90eXBlPW51bGw9PT1yP09iamVjdC5jcmVhdGUocik6KG4ucHJvdG90eXBlPXIucHJvdG90eXBlLG5ldyBuKX19KCk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShlLHIpe3ZvaWQgMD09PXImJihyPVwiaDFcIik7dmFyIG49dC5jYWxsKHRoaXMsZSxyKXx8dGhpcztyZXR1cm4gbi5tYXRjaD1cIiNcIixufXJldHVybiBuKGUsdCksZS5wcm90b3R5cGUuZXhlYz1mdW5jdGlvbihlLHIpe3JldHVybiB2b2lkIDA9PT1lJiYoZT1cIlxcblwiKSx2b2lkIDA9PT1yJiYocj1cIlxcblwiKSx0LnByb3RvdHlwZS5leGVjLmNhbGwodGhpcyxlLHIpfSxlfShyKDMpLmRlZmF1bHQpO2UuZGVmYXVsdD1vfSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49dGhpcyYmdGhpcy5fX2V4dGVuZHN8fGZ1bmN0aW9uKCl7dmFyIHQ9ZnVuY3Rpb24oZSxyKXtyZXR1cm4odD1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24odCxlKXt0Ll9fcHJvdG9fXz1lfXx8ZnVuY3Rpb24odCxlKXtmb3IodmFyIHIgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxyKSYmKHRbcl09ZVtyXSl9KShlLHIpfTtyZXR1cm4gZnVuY3Rpb24oZSxyKXtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgciYmbnVsbCE9PXIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIrU3RyaW5nKHIpK1wiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7ZnVuY3Rpb24gbigpe3RoaXMuY29uc3RydWN0b3I9ZX10KGUsciksZS5wcm90b3R5cGU9bnVsbD09PXI/T2JqZWN0LmNyZWF0ZShyKToobi5wcm90b3R5cGU9ci5wcm90b3R5cGUsbmV3IG4pfX0oKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKGUscil7dm9pZCAwPT09ciYmKHI9XCJoMlwiKTt2YXIgbj10LmNhbGwodGhpcyxlLHIpfHx0aGlzO3JldHVybiBuLm1hdGNoPVwiIyNcIixufXJldHVybiBuKGUsdCksZS5wcm90b3R5cGUuZXhlYz1mdW5jdGlvbihlLHIpe3JldHVybiB2b2lkIDA9PT1lJiYoZT1cIlxcblwiKSx2b2lkIDA9PT1yJiYocj1cIlxcblwiKSx0LnByb3RvdHlwZS5leGVjLmNhbGwodGhpcyxlLHIpfSxlfShyKDMpLmRlZmF1bHQpO2UuZGVmYXVsdD1vfSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49dGhpcyYmdGhpcy5fX2V4dGVuZHN8fGZ1bmN0aW9uKCl7dmFyIHQ9ZnVuY3Rpb24oZSxyKXtyZXR1cm4odD1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24odCxlKXt0Ll9fcHJvdG9fXz1lfXx8ZnVuY3Rpb24odCxlKXtmb3IodmFyIHIgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxyKSYmKHRbcl09ZVtyXSl9KShlLHIpfTtyZXR1cm4gZnVuY3Rpb24oZSxyKXtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgciYmbnVsbCE9PXIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIrU3RyaW5nKHIpK1wiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7ZnVuY3Rpb24gbigpe3RoaXMuY29uc3RydWN0b3I9ZX10KGUsciksZS5wcm90b3R5cGU9bnVsbD09PXI/T2JqZWN0LmNyZWF0ZShyKToobi5wcm90b3R5cGU9ci5wcm90b3R5cGUsbmV3IG4pfX0oKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKGUscil7dm9pZCAwPT09ciYmKHI9XCJoM1wiKTt2YXIgbj10LmNhbGwodGhpcyxlLHIpfHx0aGlzO3JldHVybiBuLm1hdGNoPVwiIyMjXCIsbn1yZXR1cm4gbihlLHQpLGUucHJvdG90eXBlLmV4ZWM9ZnVuY3Rpb24oZSxyKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9XCJcXG5cIiksdm9pZCAwPT09ciYmKHI9XCJcXG5cIiksdC5wcm90b3R5cGUuZXhlYy5jYWxsKHRoaXMsZSxyKX0sZX0ocigzKS5kZWZhdWx0KTtlLmRlZmF1bHQ9b30sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBuPXRoaXMmJnRoaXMuX19leHRlbmRzfHxmdW5jdGlvbigpe3ZhciB0PWZ1bmN0aW9uKGUscil7cmV0dXJuKHQ9T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKHQsZSl7dC5fX3Byb3RvX189ZX18fGZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUscikmJih0W3JdPWVbcl0pfSkoZSxyKX07cmV0dXJuIGZ1bmN0aW9uKGUscil7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIHImJm51bGwhPT1yKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiK1N0cmluZyhyKStcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO2Z1bmN0aW9uIG4oKXt0aGlzLmNvbnN0cnVjdG9yPWV9dChlLHIpLGUucHJvdG90eXBlPW51bGw9PT1yP09iamVjdC5jcmVhdGUocik6KG4ucHJvdG90eXBlPXIucHJvdG90eXBlLG5ldyBuKX19KCk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShlLHIpe3ZvaWQgMD09PXImJihyPVwiaDRcIik7dmFyIG49dC5jYWxsKHRoaXMsZSxyKXx8dGhpcztyZXR1cm4gbi5tYXRjaD1cIiMjIyNcIixufXJldHVybiBuKGUsdCksZS5wcm90b3R5cGUuZXhlYz1mdW5jdGlvbihlLHIpe3JldHVybiB2b2lkIDA9PT1lJiYoZT1cIlxcblwiKSx2b2lkIDA9PT1yJiYocj1cIlxcblwiKSx0LnByb3RvdHlwZS5leGVjLmNhbGwodGhpcyxlLHIpfSxlfShyKDMpLmRlZmF1bHQpO2UuZGVmYXVsdD1vfSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49dGhpcyYmdGhpcy5fX2V4dGVuZHN8fGZ1bmN0aW9uKCl7dmFyIHQ9ZnVuY3Rpb24oZSxyKXtyZXR1cm4odD1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24odCxlKXt0Ll9fcHJvdG9fXz1lfXx8ZnVuY3Rpb24odCxlKXtmb3IodmFyIHIgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxyKSYmKHRbcl09ZVtyXSl9KShlLHIpfTtyZXR1cm4gZnVuY3Rpb24oZSxyKXtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgciYmbnVsbCE9PXIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIrU3RyaW5nKHIpK1wiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7ZnVuY3Rpb24gbigpe3RoaXMuY29uc3RydWN0b3I9ZX10KGUsciksZS5wcm90b3R5cGU9bnVsbD09PXI/T2JqZWN0LmNyZWF0ZShyKToobi5wcm90b3R5cGU9ci5wcm90b3R5cGUsbmV3IG4pfX0oKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKGUscil7dm9pZCAwPT09ciYmKHI9XCJoNVwiKTt2YXIgbj10LmNhbGwodGhpcyxlLHIpfHx0aGlzO3JldHVybiBuLm1hdGNoPVwiIyMjIyNcIixufXJldHVybiBuKGUsdCksZS5wcm90b3R5cGUuZXhlYz1mdW5jdGlvbihlLHIpe3JldHVybiB2b2lkIDA9PT1lJiYoZT1cIlxcblwiKSx2b2lkIDA9PT1yJiYocj1cIlxcblwiKSx0LnByb3RvdHlwZS5leGVjLmNhbGwodGhpcyxlLHIpfSxlfShyKDMpLmRlZmF1bHQpO2UuZGVmYXVsdD1vfSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49dGhpcyYmdGhpcy5fX2V4dGVuZHN8fGZ1bmN0aW9uKCl7dmFyIHQ9ZnVuY3Rpb24oZSxyKXtyZXR1cm4odD1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24odCxlKXt0Ll9fcHJvdG9fXz1lfXx8ZnVuY3Rpb24odCxlKXtmb3IodmFyIHIgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxyKSYmKHRbcl09ZVtyXSl9KShlLHIpfTtyZXR1cm4gZnVuY3Rpb24oZSxyKXtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgciYmbnVsbCE9PXIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIrU3RyaW5nKHIpK1wiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7ZnVuY3Rpb24gbigpe3RoaXMuY29uc3RydWN0b3I9ZX10KGUsciksZS5wcm90b3R5cGU9bnVsbD09PXI/T2JqZWN0LmNyZWF0ZShyKToobi5wcm90b3R5cGU9ci5wcm90b3R5cGUsbmV3IG4pfX0oKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKGUscil7dm9pZCAwPT09ciYmKHI9XCJoNlwiKTt2YXIgbj10LmNhbGwodGhpcyxlLHIpfHx0aGlzO3JldHVybiBuLm1hdGNoPVwiIyMjIyMjXCIsbn1yZXR1cm4gbihlLHQpLGUucHJvdG90eXBlLmV4ZWM9ZnVuY3Rpb24oZSxyKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9XCJcXG5cIiksdm9pZCAwPT09ciYmKHI9XCJcXG5cIiksdC5wcm90b3R5cGUuZXhlYy5jYWxsKHRoaXMsZSxyKX0sZX0ocigzKS5kZWZhdWx0KTtlLmRlZmF1bHQ9b30sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBuPXRoaXMmJnRoaXMuX19leHRlbmRzfHxmdW5jdGlvbigpe3ZhciB0PWZ1bmN0aW9uKGUscil7cmV0dXJuKHQ9T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKHQsZSl7dC5fX3Byb3RvX189ZX18fGZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUscikmJih0W3JdPWVbcl0pfSkoZSxyKX07cmV0dXJuIGZ1bmN0aW9uKGUscil7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIHImJm51bGwhPT1yKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiK1N0cmluZyhyKStcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO2Z1bmN0aW9uIG4oKXt0aGlzLmNvbnN0cnVjdG9yPWV9dChlLHIpLGUucHJvdG90eXBlPW51bGw9PT1yP09iamVjdC5jcmVhdGUocik6KG4ucHJvdG90eXBlPXIucHJvdG90eXBlLG5ldyBuKX19KCk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShlLHIsbil7dm9pZCAwPT09ciYmKHI9XCJoclwiKTt2YXIgbz10LmNhbGwodGhpcyxlLHIsbil8fHRoaXM7cmV0dXJuIG8ubWF0Y2g9XCItLS1cIixvfXJldHVybiBuKGUsdCksZS5wcm90b3R5cGUuYmVmb3JlTWVyZ2VTcGFjZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmxlYWRpbmdTcGFjZSt0aGlzLm1hdGNofSxlLnByb3RvdHlwZS5iZWZvcmVSZXR1cm49ZnVuY3Rpb24odCl7cmV0dXJuIHQucmVwbGFjZSgvXig/OlxcblxccyopLyxcIlxcblxcblwiKS5yZXBsYWNlKC8oPzpcXG5cXHMqKSQvLFwiXFxuXFxuXCIpLHR9LGUucHJvdG90eXBlLmV4ZWM9ZnVuY3Rpb24oZSxyKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9XCJcXG5cIiksdm9pZCAwPT09ciYmKHI9XCJcXG5cIiksdC5wcm90b3R5cGUuZXhlYy5jYWxsKHRoaXMsZSxyKX0sZX0ocig0KS5kZWZhdWx0KTtlLmRlZmF1bHQ9b30sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBuPXRoaXMmJnRoaXMuX19leHRlbmRzfHxmdW5jdGlvbigpe3ZhciB0PWZ1bmN0aW9uKGUscil7cmV0dXJuKHQ9T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKHQsZSl7dC5fX3Byb3RvX189ZX18fGZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUscikmJih0W3JdPWVbcl0pfSkoZSxyKX07cmV0dXJuIGZ1bmN0aW9uKGUscil7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIHImJm51bGwhPT1yKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiK1N0cmluZyhyKStcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO2Z1bmN0aW9uIG4oKXt0aGlzLmNvbnN0cnVjdG9yPWV9dChlLHIpLGUucHJvdG90eXBlPW51bGw9PT1yP09iamVjdC5jcmVhdGUocik6KG4ucHJvdG90eXBlPXIucHJvdG90eXBlLG5ldyBuKX19KCk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShlLHIsbil7cmV0dXJuIHZvaWQgMD09PXImJihyPVwiaVwiKSx0LmNhbGwodGhpcyxlLHIsbil8fHRoaXN9cmV0dXJuIG4oZSx0KSxlLnByb3RvdHlwZS5leGVjPWZ1bmN0aW9uKGUscil7cmV0dXJuIHQucHJvdG90eXBlLmV4ZWMuY2FsbCh0aGlzLGUscil9LGV9KHIoMTUpLmRlZmF1bHQpO2UuZGVmYXVsdD1vfSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49dGhpcyYmdGhpcy5fX2V4dGVuZHN8fGZ1bmN0aW9uKCl7dmFyIHQ9ZnVuY3Rpb24oZSxyKXtyZXR1cm4odD1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24odCxlKXt0Ll9fcHJvdG9fXz1lfXx8ZnVuY3Rpb24odCxlKXtmb3IodmFyIHIgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxyKSYmKHRbcl09ZVtyXSl9KShlLHIpfTtyZXR1cm4gZnVuY3Rpb24oZSxyKXtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgciYmbnVsbCE9PXIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIrU3RyaW5nKHIpK1wiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7ZnVuY3Rpb24gbigpe3RoaXMuY29uc3RydWN0b3I9ZX10KGUsciksZS5wcm90b3R5cGU9bnVsbD09PXI/T2JqZWN0LmNyZWF0ZShyKToobi5wcm90b3R5cGU9ci5wcm90b3R5cGUsbmV3IG4pfX0oKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKGUscixuKXtyZXR1cm4gdm9pZCAwPT09ciYmKHI9XCJpbWdcIiksdC5jYWxsKHRoaXMsZSxyLG4pfHx0aGlzfXJldHVybiBuKGUsdCksZS5wcm90b3R5cGUuYmVmb3JlTWVyZ2VTcGFjZT1mdW5jdGlvbigpe3ZhciB0PXRoaXMuYXR0cnMsZT10LnNyYyxyPXQuYWx0O3JldHVybiByfHwocj1cIlwiKSxlfHwoZT1cIlwiKSxcIiFbXCIuY29uY2F0KHIsXCJdKFwiKS5jb25jYXQoZSxcIilcIil9LGUucHJvdG90eXBlLmV4ZWM9ZnVuY3Rpb24oZSxyKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9XCJcIiksdm9pZCAwPT09ciYmKHI9XCJcIiksdC5wcm90b3R5cGUuZXhlYy5jYWxsKHRoaXMsZSxyKX0sZX0ocig0KS5kZWZhdWx0KTtlLmRlZmF1bHQ9b30sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBuPXRoaXMmJnRoaXMuX19leHRlbmRzfHxmdW5jdGlvbigpe3ZhciB0PWZ1bmN0aW9uKGUscil7cmV0dXJuKHQ9T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKHQsZSl7dC5fX3Byb3RvX189ZX18fGZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUscikmJih0W3JdPWVbcl0pfSkoZSxyKX07cmV0dXJuIGZ1bmN0aW9uKGUscil7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIHImJm51bGwhPT1yKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiK1N0cmluZyhyKStcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO2Z1bmN0aW9uIG4oKXt0aGlzLmNvbnN0cnVjdG9yPWV9dChlLHIpLGUucHJvdG90eXBlPW51bGw9PT1yP09iamVjdC5jcmVhdGUocik6KG4ucHJvdG90eXBlPXIucHJvdG90eXBlLG5ldyBuKX19KCk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShlLHIsbil7cmV0dXJuIHZvaWQgMD09PXImJihyPVwiaW5wdXRcIiksdC5jYWxsKHRoaXMsZSxyLG4pfHx0aGlzfXJldHVybiBuKGUsdCksZS5wcm90b3R5cGUuYmVmb3JlTWVyZ2VTcGFjZT1mdW5jdGlvbigpe3ZhciB0PXRoaXMuYXR0cnMsZT10LnR5cGUscj10LmNoZWNrZWQ7cmV0dXJuXCJsaVwiPT09dGhpcy5wYXJlbnRUYWcmJlwiY2hlY2tib3hcIj09PWU/bnVsbCE9cj9cIlt4XSBcIjpcIlsgXSBcIjpcIlwifSxlLnByb3RvdHlwZS5leGVjPWZ1bmN0aW9uKGUscil7cmV0dXJuIHZvaWQgMD09PWUmJihlPVwiXCIpLHZvaWQgMD09PXImJihyPVwiXCIpLHQucHJvdG90eXBlLmV4ZWMuY2FsbCh0aGlzLGUscil9LGV9KHIoNCkuZGVmYXVsdCk7ZS5kZWZhdWx0PW99LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj10aGlzJiZ0aGlzLl9fZXh0ZW5kc3x8ZnVuY3Rpb24oKXt2YXIgdD1mdW5jdGlvbihlLHIpe3JldHVybih0PU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbih0LGUpe3QuX19wcm90b19fPWV9fHxmdW5jdGlvbih0LGUpe2Zvcih2YXIgciBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHIpJiYodFtyXT1lW3JdKX0pKGUscil9O3JldHVybiBmdW5jdGlvbihlLHIpe2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiByJiZudWxsIT09cil0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIitTdHJpbmcocikrXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtmdW5jdGlvbiBuKCl7dGhpcy5jb25zdHJ1Y3Rvcj1lfXQoZSxyKSxlLnByb3RvdHlwZT1udWxsPT09cj9PYmplY3QuY3JlYXRlKHIpOihuLnByb3RvdHlwZT1yLnByb3RvdHlwZSxuZXcgbil9fSgpLG89dGhpcyYmdGhpcy5fX2Fzc2lnbnx8ZnVuY3Rpb24oKXtyZXR1cm4obz1PYmplY3QuYXNzaWdufHxmdW5jdGlvbih0KXtmb3IodmFyIGUscj0xLG49YXJndW1lbnRzLmxlbmd0aDtyPG47cisrKWZvcih2YXIgbyBpbiBlPWFyZ3VtZW50c1tyXSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxvKSYmKHRbb109ZVtvXSk7cmV0dXJuIHR9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBpPXIoMCksYT1yKDEpLGM9cig2KSx1PXIoMTIpLHM9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShlLHIsbil7dm9pZCAwPT09ciYmKHI9XCJsaVwiKTt2YXIgbz10LmNhbGwodGhpcyxlLHIsbil8fHRoaXM7cmV0dXJuIG8ubWF0Y2g9by5tYXRjaHx8XCIqXCIsby5leHRyYUdhcD1cIlwiLG99cmV0dXJuIG4oZSx0KSxlLnByb3RvdHlwZS5iZWZvcmVNZXJnZVNwYWNlPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmV4dHJhR2FwK3RoaXMubGVhZGluZ1NwYWNlK3RoaXMubWF0Y2grXCIgXCIrdH0sZS5wcm90b3R5cGUuX19jYWxjTmV4dExlYWRpbmdfXz1mdW5jdGlvbigpe3ZhciB0LGUscjtyZXR1cm4gMT09PShudWxsPT09KHQ9dGhpcy5tYXRjaCl8fHZvaWQgMD09PXQ/dm9pZCAwOnQubGVuZ3RoKT91LkRPVUJMRToyPT09KG51bGw9PT0oZT10aGlzLm1hdGNoKXx8dm9pZCAwPT09ZT92b2lkIDA6ZS5sZW5ndGgpP3UuVFJJUExFOjM9PT0obnVsbD09PShyPXRoaXMubWF0Y2gpfHx2b2lkIDA9PT1yP3ZvaWQgMDpyLmxlbmd0aCk/dS5ET1VCTEU6dS5UUklQTEUrdS5ET1VCTEV9LGUucHJvdG90eXBlLnBhcnNlVmFsaWRTdWJUYWc9ZnVuY3Rpb24odCxlLHIpe3ZhciBuPSgwLGEuZ2V0VGFnQ29uc3RydWN0b3IpKGUpLGk9dGhpcy5fX2NhbGNOZXh0TGVhZGluZ19fKCksYz1uZXcgbih0LGUsbyhvKHt9LHIpLHtjYWxjTGVhZGluZzohMCxsZWFkaW5nU3BhY2U6dGhpcy5sZWFkaW5nU3BhY2UraSxsYXllcjp0aGlzLmxheWVyKzF9KSkuZXhlYygpO3JldHVyblwicFwiPT09ZSYmKHRoaXMuZXh0cmFHYXA9XCJcXG5cIiksdGhpcy5pc0ZpcnN0U3ViVGFnP2MudHJpbUxlZnQoKS5yZXBsYWNlKHRoaXMubGVhZGluZ1NwYWNlK2ksXCJcIik6Y30sZS5wcm90b3R5cGUucGFyc2VPbmx5U3RyaW5nPWZ1bmN0aW9uKGUscixuKXt2YXIgaT0hMTsoMCxjLmRlZmF1bHQpKG4ucHJldlRhZ05hbWUpJiYoaT0hMCk7dmFyIGE9dGhpcy5fX2NhbGNOZXh0TGVhZGluZ19fKCksdT10LnByb3RvdHlwZS5wYXJzZU9ubHlTdHJpbmcuY2FsbCh0aGlzLGUscixvKG8oe30sbikse2NhbGNMZWFkaW5nOmksbGVhZGluZ1NwYWNlOnRoaXMubGVhZGluZ1NwYWNlK2EsbGF5ZXI6dGhpcy5sYXllcisxfSkpO3JldHVybiB0aGlzLmlzRmlyc3RTdWJUYWc/dS5yZXBsYWNlKHRoaXMubGVhZGluZ1NwYWNlK2EsXCJcIik6dX0sZS5wcm90b3R5cGUuYmVmb3JlUmV0dXJuPWZ1bmN0aW9uKGUpe3JldHVybiB0LnByb3RvdHlwZS5iZWZvcmVSZXR1cm4uY2FsbCh0aGlzLGUpfSxlLnByb3RvdHlwZS5leGVjPWZ1bmN0aW9uKGUscil7cmV0dXJuIHZvaWQgMD09PWUmJihlPVwiXFxuXCIpLHZvaWQgMD09PXImJihyPVwiXFxuXCIpLHQucHJvdG90eXBlLmV4ZWMuY2FsbCh0aGlzLGUscil9LGV9KGkuZGVmYXVsdCk7ZS5kZWZhdWx0PXN9LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj10aGlzJiZ0aGlzLl9fZXh0ZW5kc3x8ZnVuY3Rpb24oKXt2YXIgdD1mdW5jdGlvbihlLHIpe3JldHVybih0PU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbih0LGUpe3QuX19wcm90b19fPWV9fHxmdW5jdGlvbih0LGUpe2Zvcih2YXIgciBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHIpJiYodFtyXT1lW3JdKX0pKGUscil9O3JldHVybiBmdW5jdGlvbihlLHIpe2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiByJiZudWxsIT09cil0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIitTdHJpbmcocikrXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtmdW5jdGlvbiBuKCl7dGhpcy5jb25zdHJ1Y3Rvcj1lfXQoZSxyKSxlLnByb3RvdHlwZT1udWxsPT09cj9PYmplY3QuY3JlYXRlKHIpOihuLnByb3RvdHlwZT1yLnByb3RvdHlwZSxuZXcgbil9fSgpLG89dGhpcyYmdGhpcy5fX2Fzc2lnbnx8ZnVuY3Rpb24oKXtyZXR1cm4obz1PYmplY3QuYXNzaWdufHxmdW5jdGlvbih0KXtmb3IodmFyIGUscj0xLG49YXJndW1lbnRzLmxlbmd0aDtyPG47cisrKWZvcih2YXIgbyBpbiBlPWFyZ3VtZW50c1tyXSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxvKSYmKHRbb109ZVtvXSk7cmV0dXJuIHR9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBpPXIoMCksYT1yKDUpLGM9cigxKSx1PXIoMikscz1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKGUscixuKXt2b2lkIDA9PT1yJiYocj1cIm9sXCIpO3ZhciBvLGk9dGhpcztpPXQuY2FsbCh0aGlzLGUscixuKXx8dGhpczt2YXIgYT1wYXJzZUludChudWxsPT09KG89bnVsbD09PWl8fHZvaWQgMD09PWk/dm9pZCAwOmkuYXR0cnMpfHx2b2lkIDA9PT1vP3ZvaWQgMDpvLnN0YXJ0LDEwKTtyZXR1cm4gaS5jb3VudD1pc05hTihhKT8xOmEsaX1yZXR1cm4gbihlLHQpLGUucHJvdG90eXBlLl9faXNWYWxpZFN1YlRhZ19fPWZ1bmN0aW9uKHQpe2lmKCF0KXJldHVybiExO3ZhciBlPXUuZGVmYXVsdC5nZXQoKS5hbGlhc1RhZ3Mscj0oMCxjLmdldFRhZ0NvbnN0cnVjdG9yKSh0KTtyZXR1cm5cImxpXCI9PT10fHxcImxpXCI9PShudWxsPT09ZXx8dm9pZCAwPT09ZT92b2lkIDA6ZVt0XSl8fHI9PT1hLmRlZmF1bHR9LGUucHJvdG90eXBlLmdldFZhbGlkU3ViVGFnTmFtZT1mdW5jdGlvbih0KXtyZXR1cm4gdCYmdGhpcy5fX2lzVmFsaWRTdWJUYWdfXyh0KT90Om51bGx9LGUucHJvdG90eXBlLnBhcnNlVmFsaWRTdWJUYWc9ZnVuY3Rpb24odCxlLHIpe3ZhciBuPSgwLGMuZ2V0VGFnQ29uc3RydWN0b3IpKGUpO2lmKHRoaXMuX19pc1ZhbGlkU3ViVGFnX18oZSkpe3ZhciBpPXRoaXMuY291bnQrXCIuXCIsYT1uZXcgbih0LGUsbyhvKHt9LHIpLHtjYWxjTGVhZGluZzohMCxsZWFkaW5nU3BhY2U6dGhpcy5sZWFkaW5nU3BhY2UsbGF5ZXI6dGhpcy5sYXllcixtYXRjaDppfSkpO3JldHVybiB0aGlzLmNvdW50KyssYS5leGVjKFwiXCIsXCJcXG5cIil9cmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJTaG91bGQgbm90IGhhdmUgdGFncyBleGNlcHQgPGxpPiBpbnNpZGUgb2wsIGN1cnJlbnQgdGFnIGlzIFwiK2UrXCIsIGN1cnJlbnQgdGFnU3RyIGlzXCIrdCksXCJcIn0sZS5wcm90b3R5cGUucGFyc2VPbmx5U3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJcIn0sZS5wcm90b3R5cGUuZXhlYz1mdW5jdGlvbihlLHIpe3JldHVybiB2b2lkIDA9PT1lJiYoZT1cIlxcblwiKSx2b2lkIDA9PT1yJiYocj1cIlxcblwiKSx0LnByb3RvdHlwZS5leGVjLmNhbGwodGhpcyxlLHIpfSxlfShpLmRlZmF1bHQpO2UuZGVmYXVsdD1zfSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49dGhpcyYmdGhpcy5fX2V4dGVuZHN8fGZ1bmN0aW9uKCl7dmFyIHQ9ZnVuY3Rpb24oZSxyKXtyZXR1cm4odD1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24odCxlKXt0Ll9fcHJvdG9fXz1lfXx8ZnVuY3Rpb24odCxlKXtmb3IodmFyIHIgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxyKSYmKHRbcl09ZVtyXSl9KShlLHIpfTtyZXR1cm4gZnVuY3Rpb24oZSxyKXtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgciYmbnVsbCE9PXIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIrU3RyaW5nKHIpK1wiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7ZnVuY3Rpb24gbigpe3RoaXMuY29uc3RydWN0b3I9ZX10KGUsciksZS5wcm90b3R5cGU9bnVsbD09PXI/T2JqZWN0LmNyZWF0ZShyKToobi5wcm90b3R5cGU9ci5wcm90b3R5cGUsbmV3IG4pfX0oKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKGUscixuKXtyZXR1cm4gdm9pZCAwPT09ciYmKHI9XCJwXCIpLHQuY2FsbCh0aGlzLGUscixuKXx8dGhpc31yZXR1cm4gbihlLHQpLGUucHJvdG90eXBlLmJlZm9yZU1lcmdlU3BhY2U9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuY2FsY0xlYWRpbmc/dGhpcy5sZWFkaW5nU3BhY2UrdDp0fSxlLnByb3RvdHlwZS5leGVjPWZ1bmN0aW9uKGUscil7cmV0dXJuIHZvaWQgMD09PWUmJihlPVwiXFxuXCIpLHZvaWQgMD09PXImJihyPVwiXFxuXCIpLHRoaXMucHJldlRhZ05hbWV8fCF0aGlzLnByZXZUYWdTdHJ8fHRoaXMucHJldlRhZ1N0ci5lbmRzV2l0aChcIlxcblwiKXx8KGU9XCJcXG5cXG5cIiksdGhpcy5uZXh0VGFnTmFtZXx8IXRoaXMubmV4dFRhZ1N0cnx8dGhpcy5uZXh0VGFnU3RyLnN0YXJ0c1dpdGgoXCJcXG5cIil8fChyPVwiXFxuXFxuXCIpLHQucHJvdG90eXBlLmV4ZWMuY2FsbCh0aGlzLGUscil9LGV9KHIoMCkuZGVmYXVsdCk7ZS5kZWZhdWx0PW99LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj10aGlzJiZ0aGlzLl9fZXh0ZW5kc3x8ZnVuY3Rpb24oKXt2YXIgdD1mdW5jdGlvbihlLHIpe3JldHVybih0PU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbih0LGUpe3QuX19wcm90b19fPWV9fHxmdW5jdGlvbih0LGUpe2Zvcih2YXIgciBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHIpJiYodFtyXT1lW3JdKX0pKGUscil9O3JldHVybiBmdW5jdGlvbihlLHIpe2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiByJiZudWxsIT09cil0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIitTdHJpbmcocikrXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtmdW5jdGlvbiBuKCl7dGhpcy5jb25zdHJ1Y3Rvcj1lfXQoZSxyKSxlLnByb3RvdHlwZT1udWxsPT09cj9PYmplY3QuY3JlYXRlKHIpOihuLnByb3RvdHlwZT1yLnByb3RvdHlwZSxuZXcgbil9fSgpLG89dGhpcyYmdGhpcy5fX2Fzc2lnbnx8ZnVuY3Rpb24oKXtyZXR1cm4obz1PYmplY3QuYXNzaWdufHxmdW5jdGlvbih0KXtmb3IodmFyIGUscj0xLG49YXJndW1lbnRzLmxlbmd0aDtyPG47cisrKWZvcih2YXIgbyBpbiBlPWFyZ3VtZW50c1tyXSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxvKSYmKHRbb109ZVtvXSk7cmV0dXJuIHR9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBpPXIoMCksYT1yKDcpLGM9cigxKSx1PXIoMTIpLHM9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShlLHIsbil7dm9pZCAwPT09ciYmKHI9XCJwcmVcIik7dmFyIG89dC5jYWxsKHRoaXMsZSxyLG4pfHx0aGlzO3JldHVybiBvLmluZGVudFNwYWNlPXUuRE9VQkxFK3UuRE9VQkxFLG8uaXNJbmRlbnQ9by5pbm5lckhUTUwuaW5jbHVkZXMoXCJgYGBcIiksby5tYXRjaD1vLmlzSW5kZW50P1wiXCI6XCJgYGBcIixvLmxhbmd1YWdlPW8ubGFuZ3VhZ2V8fCgwLGMuZ2V0TGFuZ3VhZ2UpKGUpLG8ua2VlcFNwYWNlPSEwLG99cmV0dXJuIG4oZSx0KSxlLnByb3RvdHlwZS5iZWZvcmVNZXJnZVNwYWNlPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuaXNJbmRlbnR8fFwiY29kZVwiPT09dGhpcy5wYXJlbnRUYWc/XCJcIjp0aGlzLm1hdGNoK3RoaXMubGFuZ3VhZ2UrXCJcXG5cIixyPVwiXCI7cmV0dXJuIHQuZW5kc1dpdGgoXCJcXG5cIil8fChyPVwiXFxuXCIpLGUrdCsodGhpcy5pc0luZGVudHx8XCJjb2RlXCI9PT10aGlzLnBhcmVudFRhZz9cIlwiOnIrdGhpcy5tYXRjaCl9LGUucHJvdG90eXBlLmZpbGxQZXJMaW5lPWZ1bmN0aW9uKHQpe3ZhciBlPVwiXCI7cmV0dXJuIHRoaXMuY2FsY0xlYWRpbmcmJihlPXRoaXMubGVhZGluZ1NwYWNlKSx0aGlzLmlzSW5kZW50P2UrdGhpcy5pbmRlbnRTcGFjZSt0OmUrdH0sZS5wcm90b3R5cGUuYWZ0ZXJNZXJnZVNwYWNlPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMscj10LnNwbGl0KFwiXFxuXCIpO3JldHVybihyPXIubWFwKGZ1bmN0aW9uKHQpe3JldHVyblwiXCI9PT10P1wiXCI6ZS5maWxsUGVyTGluZSh0KX0pKS5qb2luKFwiXFxuXCIpfSxlLnByb3RvdHlwZS5wYXJzZVZhbGlkU3ViVGFnPWZ1bmN0aW9uKHQsZSxyKXtpZihcImNvZGVcIj09PWUpcmV0dXJuIG5ldygoMCxjLmdldFRhZ0NvbnN0cnVjdG9yKShlKSkodCxlLG8obyh7fSxyKSx7bWF0Y2g6XCJcIixsYW5ndWFnZTp0aGlzLmxhbmd1YWdlLGtlZXBTcGFjZTohMH0pKS5leGVjKFwiXCIsXCJcIik7cmV0dXJuKCgwLGMuaXNTZWxmQ2xvc2luZykoZSk/bmV3IGEuX19FbXB0eVNlbGZDbG9zZV9fKHQsZSk6bmV3IGEuX19FbXB0eV9fKHQsZSxvKG8oe30scikse2tlZXBTcGFjZTohMH0pKSkuZXhlYygpfSxlLnByb3RvdHlwZS5wYXJzZU9ubHlTdHJpbmc9ZnVuY3Rpb24odCl7cmV0dXJuIHR9LGUucHJvdG90eXBlLnNsaW09ZnVuY3Rpb24odCl7cmV0dXJuIHR9LGUucHJvdG90eXBlLmV4ZWM9ZnVuY3Rpb24oZSxyKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9XCJcXG5cIiksdm9pZCAwPT09ciYmKHI9XCJcXG5cIiksdC5wcm90b3R5cGUuZXhlYy5jYWxsKHRoaXMsZSxyKX0sZX0oaS5kZWZhdWx0KTtlLmRlZmF1bHQ9c30sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBuPXRoaXMmJnRoaXMuX19leHRlbmRzfHxmdW5jdGlvbigpe3ZhciB0PWZ1bmN0aW9uKGUscil7cmV0dXJuKHQ9T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKHQsZSl7dC5fX3Byb3RvX189ZX18fGZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUscikmJih0W3JdPWVbcl0pfSkoZSxyKX07cmV0dXJuIGZ1bmN0aW9uKGUscil7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIHImJm51bGwhPT1yKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiK1N0cmluZyhyKStcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO2Z1bmN0aW9uIG4oKXt0aGlzLmNvbnN0cnVjdG9yPWV9dChlLHIpLGUucHJvdG90eXBlPW51bGw9PT1yP09iamVjdC5jcmVhdGUocik6KG4ucHJvdG90eXBlPXIucHJvdG90eXBlLG5ldyBuKX19KCk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShlLHIpe3JldHVybiB2b2lkIDA9PT1yJiYocj1cInNcIiksdC5jYWxsKHRoaXMsZSxyKXx8dGhpc31yZXR1cm4gbihlLHQpLGUucHJvdG90eXBlLmV4ZWM9ZnVuY3Rpb24oZSxyKXtyZXR1cm4gdC5wcm90b3R5cGUuZXhlYy5jYWxsKHRoaXMsZSxyKX0sZX0ocigxNCkuZGVmYXVsdCk7ZS5kZWZhdWx0PW99LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj10aGlzJiZ0aGlzLl9fZXh0ZW5kc3x8ZnVuY3Rpb24oKXt2YXIgdD1mdW5jdGlvbihlLHIpe3JldHVybih0PU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbih0LGUpe3QuX19wcm90b19fPWV9fHxmdW5jdGlvbih0LGUpe2Zvcih2YXIgciBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHIpJiYodFtyXT1lW3JdKX0pKGUscil9O3JldHVybiBmdW5jdGlvbihlLHIpe2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiByJiZudWxsIT09cil0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIitTdHJpbmcocikrXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtmdW5jdGlvbiBuKCl7dGhpcy5jb25zdHJ1Y3Rvcj1lfXQoZSxyKSxlLnByb3RvdHlwZT1udWxsPT09cj9PYmplY3QuY3JlYXRlKHIpOihuLnByb3RvdHlwZT1yLnByb3RvdHlwZSxuZXcgbil9fSgpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUoZSxyLG4pe3JldHVybiB2b2lkIDA9PT1yJiYocj1cInNwYW5cIiksdC5jYWxsKHRoaXMsZSxyLG4pfHx0aGlzfXJldHVybiBuKGUsdCksZS5wcm90b3R5cGUuZXhlYz1mdW5jdGlvbihlLHIpe3JldHVybiB2b2lkIDA9PT1lJiYoZT1cIlwiKSx2b2lkIDA9PT1yJiYocj1cIlwiKSx0LnByb3RvdHlwZS5leGVjLmNhbGwodGhpcyxlLHIpfSxlfShyKDApLmRlZmF1bHQpO2UuZGVmYXVsdD1vfSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49dGhpcyYmdGhpcy5fX2V4dGVuZHN8fGZ1bmN0aW9uKCl7dmFyIHQ9ZnVuY3Rpb24oZSxyKXtyZXR1cm4odD1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24odCxlKXt0Ll9fcHJvdG9fXz1lfXx8ZnVuY3Rpb24odCxlKXtmb3IodmFyIHIgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxyKSYmKHRbcl09ZVtyXSl9KShlLHIpfTtyZXR1cm4gZnVuY3Rpb24oZSxyKXtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgciYmbnVsbCE9PXIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIrU3RyaW5nKHIpK1wiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7ZnVuY3Rpb24gbigpe3RoaXMuY29uc3RydWN0b3I9ZX10KGUsciksZS5wcm90b3R5cGU9bnVsbD09PXI/T2JqZWN0LmNyZWF0ZShyKToobi5wcm90b3R5cGU9ci5wcm90b3R5cGUsbmV3IG4pfX0oKSxvPXRoaXMmJnRoaXMuX19hc3NpZ258fGZ1bmN0aW9uKCl7cmV0dXJuKG89T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24odCl7Zm9yKHZhciBlLHI9MSxuPWFyZ3VtZW50cy5sZW5ndGg7cjxuO3IrKylmb3IodmFyIG8gaW4gZT1hcmd1bWVudHNbcl0pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsbykmJih0W29dPWVbb10pO3JldHVybiB0fSkuYXBwbHkodGhpcyxhcmd1bWVudHMpfTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgaT1yKDApLGE9cigxKTt2YXIgYz1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKGUscixuKXt2b2lkIDA9PT1yJiYocj1cInRhYmxlXCIpO3ZhciBvPXQuY2FsbCh0aGlzLGUscixuKXx8dGhpcztyZXR1cm4gby5leGlzdF90aGVhZD0hMSxvLmV4aXN0X3Rib2R5PSExLG8uZW1wdHlfdGJvZHk9ITAsby50YWJsZUNvbHVtbkNvdW50PWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1cIlwiLHI9MDtyPHQubGVuZ3RoJiYhZS5lbmRzV2l0aChcIjwvdHI+XCIpO3IrKyllKz10W3JdO3JldHVybiBNYXRoLm1heChlLnNwbGl0KFwiPC90ZD5cIikubGVuZ3RoLTEsZS5zcGxpdChcIjwvdGg+XCIpLmxlbmd0aC0xKX0oby5pbm5lckhUTUwpLG99cmV0dXJuIG4oZSx0KSxlLnByb3RvdHlwZS5wYXJzZVZhbGlkU3ViVGFnPWZ1bmN0aW9uKHQsZSxyKXtyZXR1cm5cInRoZWFkXCI9PT1lJiYodGhpcy5leGlzdF90aGVhZD0hMCksXCJ0Ym9keVwiPT09ZSYmKHRoaXMuZXhpc3RfdGJvZHk9ITAsdGhpcy5lbXB0eV90Ym9keT0hMSksXCJ0clwiPT09ZSYmKHRoaXMuZW1wdHlfdGJvZHk9ITEpLG5ldygoMCxhLmdldFRhZ0NvbnN0cnVjdG9yKShlKSkodCxlLG8obyh7fSxyKSx7dGFibGVDb2x1bW5Db3VudDp0aGlzLnRhYmxlQ29sdW1uQ291bnQsaW5UYWJsZTohMH0pKS5leGVjKFwiXCIsXCJcXG5cIil9LGUucHJvdG90eXBlLnBhcnNlT25seVN0cmluZz1mdW5jdGlvbigpe3JldHVyblwiXCJ9LGUucHJvdG90eXBlLmJlZm9yZVJldHVybj1mdW5jdGlvbih0KXtpZighdGhpcy5leGlzdF90aGVhZCYmIXRoaXMuZXhpc3RfdGJvZHkmJnRoaXMuZW1wdHlfdGJvZHkpcmV0dXJuXCJcIjtpZigwPT09dGhpcy50YWJsZUNvbHVtbkNvdW50KXJldHVyblwiXCI7aWYoIXRoaXMuZXhpc3RfdGJvZHkpe2Zvcih2YXIgZT0oMCxhLmdldFRhYmxlQWxpZ24pKHRoaXMuaW5uZXJIVE1MLHRoaXMudGFibGVDb2x1bW5Db3VudCkscj1cInxcIixuPTA7bjxlLmxlbmd0aDtuKyspcis9ZVtuXTt0PXRoaXMuZW1wdHlfdGJvZHk/dCtyK1wiXFxuXCI6citcIlwiK3R9cmV0dXJuIHRoaXMuZXhpc3RfdGhlYWR8fCh0PVwiXFxuXCIrXCJ8XCIucmVwZWF0KHRoaXMudGFibGVDb2x1bW5Db3VudCsxKSsodC5zdGFydHNXaXRoKFwiXFxuXCIpP1wiXCI6XCJcXG5cIikrdCksdH0sZS5wcm90b3R5cGUuZXhlYz1mdW5jdGlvbihlLHIpe3JldHVybiB2b2lkIDA9PT1lJiYoZT1cIlxcblwiKSx2b2lkIDA9PT1yJiYocj1cIlxcblwiKSx0LnByb3RvdHlwZS5leGVjLmNhbGwodGhpcyxlLHIpfSxlfShpLmRlZmF1bHQpO2UuZGVmYXVsdD1jfSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49dGhpcyYmdGhpcy5fX2V4dGVuZHN8fGZ1bmN0aW9uKCl7dmFyIHQ9ZnVuY3Rpb24oZSxyKXtyZXR1cm4odD1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24odCxlKXt0Ll9fcHJvdG9fXz1lfXx8ZnVuY3Rpb24odCxlKXtmb3IodmFyIHIgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxyKSYmKHRbcl09ZVtyXSl9KShlLHIpfTtyZXR1cm4gZnVuY3Rpb24oZSxyKXtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgciYmbnVsbCE9PXIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIrU3RyaW5nKHIpK1wiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7ZnVuY3Rpb24gbigpe3RoaXMuY29uc3RydWN0b3I9ZX10KGUsciksZS5wcm90b3R5cGU9bnVsbD09PXI/T2JqZWN0LmNyZWF0ZShyKToobi5wcm90b3R5cGU9ci5wcm90b3R5cGUsbmV3IG4pfX0oKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1yKDApLGk9cigxKSxhPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUoZSxyLG4pe3JldHVybiB2b2lkIDA9PT1yJiYocj1cInRib2R5XCIpLHQuY2FsbCh0aGlzLGUscixuKXx8dGhpc31yZXR1cm4gbihlLHQpLGUucHJvdG90eXBlLmJlZm9yZU1lcmdlU3BhY2U9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPSgwLGkuZ2V0VGFibGVBbGlnbikodGhpcy5pbm5lckhUTUwsdGhpcy50YWJsZUNvbHVtbkNvdW50KSxyPVwifFwiLG49MDtuPGUubGVuZ3RoO24rKylyKz1lW25dO3JldHVybiByK1wiXFxuXCIrdH0sZS5wcm90b3R5cGUucGFyc2VPbmx5U3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJcIn0sZS5wcm90b3R5cGUuZXhlYz1mdW5jdGlvbihlLHIpe3JldHVybiB2b2lkIDA9PT1lJiYoZT1cIlwiKSx2b2lkIDA9PT1yJiYocj1cIlwiKSx0LnByb3RvdHlwZS5leGVjLmNhbGwodGhpcyxlLHIpfSxlfShvLmRlZmF1bHQpO2UuZGVmYXVsdD1hfSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49dGhpcyYmdGhpcy5fX2V4dGVuZHN8fGZ1bmN0aW9uKCl7dmFyIHQ9ZnVuY3Rpb24oZSxyKXtyZXR1cm4odD1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24odCxlKXt0Ll9fcHJvdG9fXz1lfXx8ZnVuY3Rpb24odCxlKXtmb3IodmFyIHIgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxyKSYmKHRbcl09ZVtyXSl9KShlLHIpfTtyZXR1cm4gZnVuY3Rpb24oZSxyKXtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgciYmbnVsbCE9PXIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIrU3RyaW5nKHIpK1wiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7ZnVuY3Rpb24gbigpe3RoaXMuY29uc3RydWN0b3I9ZX10KGUsciksZS5wcm90b3R5cGU9bnVsbD09PXI/T2JqZWN0LmNyZWF0ZShyKToobi5wcm90b3R5cGU9ci5wcm90b3R5cGUsbmV3IG4pfX0oKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKGUscixuKXtyZXR1cm4gdm9pZCAwPT09ciYmKHI9XCJ0ZFwiKSx0LmNhbGwodGhpcyxlLHIsbil8fHRoaXN9cmV0dXJuIG4oZSx0KSxlLnByb3RvdHlwZS5wYXJzZVZhbGlkU3ViVGFnPWZ1bmN0aW9uKGUscixuKXtyZXR1cm5cInVsXCI9PT1yfHxcIm9sXCI9PT1yfHxcInRhYmxlXCI9PT1yfHxcInByZVwiPT09cj9lLnJlcGxhY2UoLyhbXFxuXFxyXSkvZyxcIlwiKTp0LnByb3RvdHlwZS5wYXJzZVZhbGlkU3ViVGFnLmNhbGwodGhpcyxlLHIsbil9LGUucHJvdG90eXBlLmV4ZWM9ZnVuY3Rpb24oZSxyKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9XCJcIiksdm9pZCAwPT09ciYmKHI9XCJcIiksdC5wcm90b3R5cGUuZXhlYy5jYWxsKHRoaXMsZSxyKX0sZX0ocigxNikuZGVmYXVsdCk7ZS5kZWZhdWx0PW99LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj10aGlzJiZ0aGlzLl9fZXh0ZW5kc3x8ZnVuY3Rpb24oKXt2YXIgdD1mdW5jdGlvbihlLHIpe3JldHVybih0PU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbih0LGUpe3QuX19wcm90b19fPWV9fHxmdW5jdGlvbih0LGUpe2Zvcih2YXIgciBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHIpJiYodFtyXT1lW3JdKX0pKGUscil9O3JldHVybiBmdW5jdGlvbihlLHIpe2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiByJiZudWxsIT09cil0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIitTdHJpbmcocikrXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtmdW5jdGlvbiBuKCl7dGhpcy5jb25zdHJ1Y3Rvcj1lfXQoZSxyKSxlLnByb3RvdHlwZT1udWxsPT09cj9PYmplY3QuY3JlYXRlKHIpOihuLnByb3RvdHlwZT1yLnByb3RvdHlwZSxuZXcgbil9fSgpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUoZSxyLG4pe3JldHVybiB2b2lkIDA9PT1yJiYocj1cInRoZWFkXCIpLHQuY2FsbCh0aGlzLGUscixuKXx8dGhpc31yZXR1cm4gbihlLHQpLGUucHJvdG90eXBlLmV4ZWM9ZnVuY3Rpb24oZSxyKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9XCJcIiksdm9pZCAwPT09ciYmKHI9XCJcIiksdC5wcm90b3R5cGUuZXhlYy5jYWxsKHRoaXMsZSxyKX0sZX0ocigwKS5kZWZhdWx0KTtlLmRlZmF1bHQ9b30sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO3ZhciBuPXRoaXMmJnRoaXMuX19leHRlbmRzfHxmdW5jdGlvbigpe3ZhciB0PWZ1bmN0aW9uKGUscil7cmV0dXJuKHQ9T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKHQsZSl7dC5fX3Byb3RvX189ZX18fGZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUscikmJih0W3JdPWVbcl0pfSkoZSxyKX07cmV0dXJuIGZ1bmN0aW9uKGUscil7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIHImJm51bGwhPT1yKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiK1N0cmluZyhyKStcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO2Z1bmN0aW9uIG4oKXt0aGlzLmNvbnN0cnVjdG9yPWV9dChlLHIpLGUucHJvdG90eXBlPW51bGw9PT1yP09iamVjdC5jcmVhdGUocik6KG4ucHJvdG90eXBlPXIucHJvdG90eXBlLG5ldyBuKX19KCk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89cigwKSxpPXIoNSksYT1yKDEpLGM9cigyKSx1PWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUoZSxyLG4pe3JldHVybiB2b2lkIDA9PT1yJiYocj1cInRyXCIpLHQuY2FsbCh0aGlzLGUscixuKXx8dGhpc31yZXR1cm4gbihlLHQpLGUucHJvdG90eXBlLmJlZm9yZU1lcmdlU3BhY2U9ZnVuY3Rpb24odCl7cmV0dXJuXCJ8XCIrdH0sZS5wcm90b3R5cGUucGFyc2VWYWxpZFN1YlRhZz1mdW5jdGlvbih0LGUscil7dmFyIG49Yy5kZWZhdWx0LmdldCgpLmFsaWFzVGFncyxvPSgwLGEuZ2V0VGFnQ29uc3RydWN0b3IpKGUpO3JldHVyblwidGRcIiE9PWUmJlwidGhcIiE9PWUmJlwidGRcIiE9PShudWxsPT09bnx8dm9pZCAwPT09bj92b2lkIDA6bltlXSkmJlwidGhcIiE9PShudWxsPT09bnx8dm9pZCAwPT09bj92b2lkIDA6bltlXSkmJm8hPT1pLmRlZmF1bHQ/KGNvbnNvbGUuZXJyb3IoXCJTaG91bGQgbm90IGhhdmUgdGFncyBleGNlcHQgPHRkPiBvciA8dGg+IGluc2lkZSA8dHI+LCBjdXJyZW50IHRhZyBpcyBcIi5jb25jYXQoZSxcIiBoYXZlIGJlZW4gaWdub3JlLlwiKSksXCJcIik6bmV3IG8odCxlLHIpLmV4ZWMoXCJcIixcIlwiKX0sZS5wcm90b3R5cGUucGFyc2VPbmx5U3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJcIn0sZS5wcm90b3R5cGUuZXhlYz1mdW5jdGlvbihlLHIpe3JldHVybiB2b2lkIDA9PT1lJiYoZT1cIlwiKSx2b2lkIDA9PT1yJiYocj1cIlxcblwiKSx0LnByb3RvdHlwZS5leGVjLmNhbGwodGhpcyxlLHIpfSxlfShvLmRlZmF1bHQpO2UuZGVmYXVsdD11fSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49dGhpcyYmdGhpcy5fX2V4dGVuZHN8fGZ1bmN0aW9uKCl7dmFyIHQ9ZnVuY3Rpb24oZSxyKXtyZXR1cm4odD1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24odCxlKXt0Ll9fcHJvdG9fXz1lfXx8ZnVuY3Rpb24odCxlKXtmb3IodmFyIHIgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxyKSYmKHRbcl09ZVtyXSl9KShlLHIpfTtyZXR1cm4gZnVuY3Rpb24oZSxyKXtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgciYmbnVsbCE9PXIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIrU3RyaW5nKHIpK1wiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7ZnVuY3Rpb24gbigpe3RoaXMuY29uc3RydWN0b3I9ZX10KGUsciksZS5wcm90b3R5cGU9bnVsbD09PXI/T2JqZWN0LmNyZWF0ZShyKToobi5wcm90b3R5cGU9ci5wcm90b3R5cGUsbmV3IG4pfX0oKSxvPXRoaXMmJnRoaXMuX19hc3NpZ258fGZ1bmN0aW9uKCl7cmV0dXJuKG89T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24odCl7Zm9yKHZhciBlLHI9MSxuPWFyZ3VtZW50cy5sZW5ndGg7cjxuO3IrKylmb3IodmFyIG8gaW4gZT1hcmd1bWVudHNbcl0pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsbykmJih0W29dPWVbb10pO3JldHVybiB0fSkuYXBwbHkodGhpcyxhcmd1bWVudHMpfTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgaT1yKDApLGE9cig1KSxjPXIoMSksdT1yKDIpLmRlZmF1bHQuZ2V0KCkuYWxpYXNUYWdzLHM9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShlLHIsbil7cmV0dXJuIHZvaWQgMD09PXImJihyPVwidWxcIiksdC5jYWxsKHRoaXMsZSxyLG4pfHx0aGlzfXJldHVybiBuKGUsdCksZS5wcm90b3R5cGUuX19pc1ZhbGlkU3ViVGFnX189ZnVuY3Rpb24odCl7aWYoIXQpcmV0dXJuITE7dmFyIGU9KDAsYy5nZXRUYWdDb25zdHJ1Y3RvcikodCk7cmV0dXJuXCJsaVwiPT09dHx8XCJsaVwiPT0obnVsbD09PXV8fHZvaWQgMD09PXU/dm9pZCAwOnVbdF0pfHxlPT09YS5kZWZhdWx0fSxlLnByb3RvdHlwZS5nZXRWYWxpZFN1YlRhZ05hbWU9ZnVuY3Rpb24odCl7cmV0dXJuIHQmJnRoaXMuX19pc1ZhbGlkU3ViVGFnX18odCk/dDpudWxsfSxlLnByb3RvdHlwZS5wYXJzZVZhbGlkU3ViVGFnPWZ1bmN0aW9uKHQsZSxyKXt2YXIgbj0oMCxjLmdldFRhZ0NvbnN0cnVjdG9yKShlKTtyZXR1cm4gdGhpcy5fX2lzVmFsaWRTdWJUYWdfXyhlKT9uZXcgbih0LGUsbyhvKHt9LHIpLHtjYWxjTGVhZGluZzohMCxsZWFkaW5nU3BhY2U6dGhpcy5sZWFkaW5nU3BhY2UsbGF5ZXI6dGhpcy5sYXllcixtYXRjaDpcIipcIn0pKS5leGVjKFwiXCIsXCJcXG5cIik6KGNvbnNvbGUuZXJyb3IoXCJTaG91bGQgbm90IGhhdmUgdGFncyBleGNlcHQgPGxpPiBpbnNpZGUgdWwsIGN1cnJlbnQgdGFnIGlzIFwiK2UrXCIsIGN1cnJlbnQgdGFnU3RyIGlzXCIrdCksXCJcIil9LGUucHJvdG90eXBlLnBhcnNlT25seVN0cmluZz1mdW5jdGlvbigpe3JldHVyblwiXCJ9LGUucHJvdG90eXBlLmV4ZWM9ZnVuY3Rpb24oZSxyKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9XCJcXG5cIiksdm9pZCAwPT09ciYmKHI9XCJcXG5cIiksdC5wcm90b3R5cGUuZXhlYy5jYWxsKHRoaXMsZSxyKX0sZX0oaS5kZWZhdWx0KTtlLmRlZmF1bHQ9c30sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPXIoMSksbz1yKDIpLGk9cig5KTtlLmRlZmF1bHQ9ZnVuY3Rpb24odCxlLHIpe3ZvaWQgMD09PXImJihyPSExKSxvLmRlZmF1bHQucmVzZXQoKSxvLmRlZmF1bHQuc2V0KGUsciksdD0odD0odD0oMCxuLmNsZWFyQ29tbWVudCkodCkpLnRyaW0oKSkucmVwbGFjZSgvKFxcclxcbikvZyxcIlwiKS5yZXBsYWNlKC8mbmJzcDsvZyxcIiBcIik7Zm9yKHZhciBhPSgwLG4uZ2VuZXJhdGVHZXROZXh0VmFsaWRUYWcpKHQpLGM9XCJcIix1PW51bGwscz1hKCksbD1zWzBdLHA9c1sxXTtcIlwiIT09cDspe2lmKG51bGwhPWwpe3ZhciBmPW5ldygoMCxuLmdldFRhZ0NvbnN0cnVjdG9yKShsKSkocCxsLHtwYXJlbnRUYWc6bnVsbCxwcmV2VGFnTmFtZTp1LHByZXZUYWdTdHI6Y30pLmV4ZWMoKSxoPSgwLG4uaXNJbmRlcGVuZGVudFRhZykodSk7ISgwLG4uaXNJbmRlcGVuZGVudFRhZykobCl8fGh8fGMuZW5kc1dpdGgoXCJcXG5cIik/Yys9ZjpjKz1cIlxcblwiK2Z9ZWxzZSBjPShjKz1uZXcgaS5kZWZhdWx0KHAsbCkuZXhlYygpKS5yZXBsYWNlKC8oPzpcXG5cXHMqKSQvLFwiXFxuXCIpO3U9bDt2YXIgZD1hKCk7bD1kWzBdLHA9ZFsxXX1yZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuIHQ9KHQ9KHQ9dC5yZXBsYWNlKC9eXFxzKy8sXCJcIikpLnJlcGxhY2UoL1xccyskLyxcIlwiKSkucmVwbGFjZSgvXFx1MjYwOC9nLFwiIFwiKX0oKDAsbi51bmVzY2FwZVN0cikoYykpfX0sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGUudW5lc2NhcGVTdHI9ZS5leHRyYUVzY2FwZT12b2lkIDA7dmFyIG49e30sbz17XCImXCI6XCImYW1wO1wiLFwiPFwiOlwiJmx0O1wiLFwiPlwiOlwiJmd0O1wiLCdcIic6XCImcXVvdDtcIixcIidcIjpcIiYjMzk7XCIsXCJgXCI6XCImI3g2MDtcIixcIlxcdTIwMWNcIjpcIiZsZHF1bztcIixcIlxcdTIwMWRcIjpcIiZyZHF1bztcIn07Zm9yKHZhciBpIGluIG8pbltvW2ldXT1pO3ZhciBhPS8mKD86YW1wfGx0fGd0fHF1b3R8IzM5fCN4NjB8bGRxdW98cmRxdW8pOy9nLGM9UmVnRXhwKGEuc291cmNlKSx1PVtbL1xcXFwvZyxcIlxcXFxcXFxcXCJdLFsvXFwqL2csXCJcXFxcKlwiXSxbL14tL2csXCJcXFxcLVwiXSxbL15cXCsgL2csXCJcXFxcKyBcIl0sWy9eKD0rKS9nLFwiXFxcXCQxXCJdLFsvXigjezEsNn0pIC9nLFwiXFxcXCQxIFwiXSxbL2AvZyxcIlxcXFxgXCJdLFsvXn5+fi9nLFwiXFxcXH5+flwiXSxbL1xcWy9nLFwiXFxcXFtcIl0sWy9cXF0vZyxcIlxcXFxdXCJdLFsvXj4vZyxcIlxcXFw+XCJdLFsvXy9nLFwiXFxcXF9cIl0sWy9eKFxcZCspXFwuIC9nLFwiJDFcXFxcLiBcIl1dO2UudW5lc2NhcGVTdHI9ZnVuY3Rpb24odCl7cmV0dXJuIHQ9dCYmYy50ZXN0KHQpP3QucmVwbGFjZShhLGZ1bmN0aW9uKHQpe3JldHVybiBuW3RdfSk6dH0sZS5leHRyYUVzY2FwZT1mdW5jdGlvbih0KXtyZXR1cm4gdS5yZWR1Y2UoZnVuY3Rpb24odCxlKXtyZXR1cm4gdC5yZXBsYWNlKGVbMF0sZVsxXSl9LHQpfX0sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPXIoMTEpO2Z1bmN0aW9uIG8odCxlKXtmb3IodmFyIHI9XCJcIjtlPHQubGVuZ3RoJiYvW2EtekEtWjAtOSEtXS8udGVzdCh0W2VdKTspcis9dFtlKytdO3JldHVybiByLnRvTG93ZXJDYXNlKCl9ZS5kZWZhdWx0PWZ1bmN0aW9uKHQpe3ZhciBlPTA7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIHI9XCJcIixpPW51bGwsYT0wLGM9bnVsbCx1PSExO2lmKGU+PXQubGVuZ3RoKXJldHVybltpLHJdO2Zvcih2YXIgcz1lO3M8dC5sZW5ndGg7cysrKXtpZihcIjxcIj09PXRbc10mJlwiL1wiIT09dFtzKzFdKXtpZihcIlwiIT09ciYmbnVsbD09aSYmIXUpcmV0dXJuIGU9cyxbaSxyXTt2YXIgbD1vKHQscysxKTtudWxsPT1pJiYoaT1sKSxpPT09bCYmYSsrLCgwLG4uZGVmYXVsdCkoaSkmJigwPT09LS1hJiYodT0hMCksYTwwJiZjb25zb2xlLndhcm4oXCJUYWcgXCIuY29uY2F0KGksXCIgaXMgYWJub3JtYWxcIikpKX1lbHNlIGlmKFwiPFwiPT09dFtzXSYmXCIvXCI9PT10W3MrMV0pe2lmKG51bGw9PWkpe2NvbnNvbGUud2FybihcIlRhZyBpcyBub3QgaW50ZWdyaXR5LCBjdXJyZW50IHRhZ1N0ciBpcyBcIi5jb25jYXQodC5zbGljZShlKSkpO2Zvcih2YXIgcD1zO3A8dC5sZW5ndGgmJlwiPlwiIT09dFtwXTspcCsrO3M9cDtjb250aW51ZX1pPT09KGM9byh0LHMrMikpJiZhLS0sYTw9MCYmKHU9ITApfWlmKHIrPXRbc10sXCI+XCI9PT10W3NdJiZ1KXJldHVybiBlPXMrMSxbaSxyXTtzPT09dC5sZW5ndGgtMSYmaSE9PWMmJihudWxsIT1jJiZudWxsIT1pJiYocj1yLnJlcGxhY2UoXCI8XCIuY29uY2F0KGksXCI+XCIpLFwiXCIpLnJlcGxhY2UoXCI8L1wiLmNvbmNhdChjLFwiPlwiKSxcIlwiKSksaT1udWxsKX1yZXR1cm4gZT10Lmxlbmd0aCxbaSxyXX19fSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49cigyKSxvPXIoMTEpLGk9cig0OSk7ZS5kZWZhdWx0PWZ1bmN0aW9uIHQoZSl7dmFyIGEsYz1uLmRlZmF1bHQuZ2V0KCksdT1jLnNraXBUYWdzLHM9Yy5lbXB0eVRhZ3MsbD1jLmlnbm9yZVRhZ3MscD1jLmFsaWFzVGFncyxmPWMucmVuZGVyQ3VzdG9tVGFncyxoPSgwLG8uZGVmYXVsdCkoZSk7aWYobnVsbD09PXV8fHZvaWQgMD09PXU/dm9pZCAwOnUuaW5jbHVkZXMoZSkpe3ZhciBkPXIoOCk7cmV0dXJuIGg/ZC5fX1NraXBTZWxmQ2xvc2VfXzpkLl9fU2tpcF9ffWlmKG51bGw9PT1zfHx2b2lkIDA9PT1zP3ZvaWQgMDpzLmluY2x1ZGVzKGUpKXt2YXIgXz1yKDcpO3JldHVybiBoP18uX19FbXB0eVNlbGZDbG9zZV9fOl8uX19FbXB0eV9ffWlmKG51bGw9PT1sfHx2b2lkIDA9PT1sP3ZvaWQgMDpsLmluY2x1ZGVzKGUpKXJldHVybiByKDUpLmRlZmF1bHQ7aWYobnVsbCE9KG51bGw9PT1wfHx2b2lkIDA9PT1wP3ZvaWQgMDpwW2VdKSlyZXR1cm4gdChwW2VdKTt2YXIgeT1lLnRvTG93ZXJDYXNlKCk7aWYoITAhPT1mJiYhKDAsaS5kZWZhdWx0KSh5KSl7aWYoITE9PT1mfHxcIlNLSVBcIj09PWYpcmV0dXJuIGQ9cig4KSxoP2QuX19Ta2lwU2VsZkNsb3NlX186ZC5fX1NraXBfXztpZihcIkVNUFRZXCI9PT1mKXJldHVybiBfPXIoNyksaD9fLl9fRW1wdHlTZWxmQ2xvc2VfXzpfLl9fRW1wdHlfXztpZihcIklHTk9SRVwiPT09ZilyZXR1cm4gcig1KS5kZWZhdWx0fXRyeXthPXIoNTApKFwiLi9cIi5jb25jYXQoZSkpLmRlZmF1bHR9Y2F0Y2godil7YT1oP3IoMTApLl9fTm9NYXRjaFNlbGZDbG9zZV9fOnIoMTApLl9fTm9NYXRjaF9ffXJldHVybiBhfX0sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPVtcIiFkb2N0eXBlXCIsXCJhXCIsXCJhYmJyXCIsXCJhY3JvbnltXCIsXCJhZGRyZXNzXCIsXCJhcHBsZXRcIixcImFyZWFcIixcImFydGljbGVcIixcImFzaWRlXCIsXCJhdWRpb1wiLFwiYlwiLFwiYmFzZVwiLFwiYmFzZWZvbnRcIixcImJkaVwiLFwiYmRvXCIsXCJiZ3NvdW5kXCIsXCJiaWdcIixcImJsaW5rXCIsXCJibG9ja3F1b3RlXCIsXCJib2R5XCIsXCJiclwiLFwiYnV0dG9uXCIsXCJjYW52YXNcIixcImNhcHRpb25cIixcImNlbnRlclwiLFwiY2lyY2xlXCIsXCJjaXRlXCIsXCJjbGlwUGF0aFwiLFwiY29kZVwiLFwiY29sXCIsXCJjb2xncm91cFwiLFwiY29tbWFuZFwiLFwiY29udGVudFwiLFwiZGF0YVwiLFwiZGF0YWxpc3RcIixcImRkXCIsXCJkZWZzXCIsXCJkZWxcIixcImRldGFpbHNcIixcImRmblwiLFwiZGlhbG9nXCIsXCJkaXJcIixcImRpdlwiLFwiZGxcIixcImR0XCIsXCJlbGVtZW50XCIsXCJlbGxpcHNlXCIsXCJlbVwiLFwiZW1iZWRcIixcImZpZWxkc2V0XCIsXCJmaWdjYXB0aW9uXCIsXCJmaWd1cmVcIixcImZvbnRcIixcImZvb3RlclwiLFwiZm9yZWlnbk9iamVjdFwiLFwiZm9ybVwiLFwiZnJhbWVcIixcImZyYW1lc2V0XCIsXCJnXCIsXCJoMVwiLFwiaDJcIixcImgzXCIsXCJoNFwiLFwiaDVcIixcImg2XCIsXCJoZWFkXCIsXCJoZWFkZXJcIixcImhncm91cFwiLFwiaHJcIixcImh0bWxcIixcImlcIixcImlmcmFtZVwiLFwiaW1hZ2VcIixcImltZ1wiLFwiaW5wdXRcIixcImluc1wiLFwiaXNpbmRleFwiLFwia2JkXCIsXCJrZXlnZW5cIixcImxhYmVsXCIsXCJsZWdlbmRcIixcImxpXCIsXCJsaW5lXCIsXCJsaW5lYXJHcmFkaWVudFwiLFwibGlua1wiLFwibGlzdGluZ1wiLFwibWFpblwiLFwibWFwXCIsXCJtYXJrXCIsXCJtYXJxdWVlXCIsXCJtYXNrXCIsXCJtYXRoXCIsXCJtZW51XCIsXCJtZW51aXRlbVwiLFwibWV0YVwiLFwibWV0ZXJcIixcIm11bHRpY29sXCIsXCJuYXZcIixcIm5leHRpZFwiLFwibm9iclwiLFwibm9lbWJlZFwiLFwibm9mcmFtZXNcIixcIm5vc2NyaXB0XCIsXCJvYmplY3RcIixcIm9sXCIsXCJvcHRncm91cFwiLFwib3B0aW9uXCIsXCJvdXRwdXRcIixcInBcIixcInBhcmFtXCIsXCJwYXRoXCIsXCJwYXR0ZXJuXCIsXCJwaWN0dXJlXCIsXCJwbGFpbnRleHRcIixcInBvbHlnb25cIixcInBvbHlsaW5lXCIsXCJwcmVcIixcInByb2dyZXNzXCIsXCJxXCIsXCJyYWRpYWxHcmFkaWVudFwiLFwicmJcIixcInJiY1wiLFwicmVjdFwiLFwicnBcIixcInJ0XCIsXCJydGNcIixcInJ1YnlcIixcInNcIixcInNhbXBcIixcInNjcmlwdFwiLFwic2VjdGlvblwiLFwic2VsZWN0XCIsXCJzaGFkb3dcIixcInNsb3RcIixcInNtYWxsXCIsXCJzb3VyY2VcIixcInNwYWNlclwiLFwic3BhblwiLFwic3RvcFwiLFwic3RyaWtlXCIsXCJzdHJvbmdcIixcInN0eWxlXCIsXCJzdWJcIixcInN1bW1hcnlcIixcInN1cFwiLFwic3ZnXCIsXCJ0YWJsZVwiLFwidGJvZHlcIixcInRkXCIsXCJ0ZW1wbGF0ZVwiLFwidGV4dFwiLFwidGV4dGFyZWFcIixcInRmb290XCIsXCJ0aFwiLFwidGhlYWRcIixcInRpbWVcIixcInRpdGxlXCIsXCJ0clwiLFwidHJhY2tcIixcInRzcGFuXCIsXCJ0dFwiLFwidVwiLFwidWxcIixcInZhclwiLFwidmlkZW9cIixcIndiclwiLFwieG1wXCJdO2UuZGVmYXVsdD1mdW5jdGlvbih0KXtyZXR1cm5cInN0cmluZ1wiPT09dHlwZW9mIHQmJm4uaW5jbHVkZXModC50b0xvd2VyQ2FzZSgpKX19LGZ1bmN0aW9uKHQsZSxyKXt2YXIgbj17XCIuL19fSGVhZGluZ19fXCI6MyxcIi4vX19IZWFkaW5nX18udHNcIjozLFwiLi9fX2VtcHR5X19cIjo3LFwiLi9fX2VtcHR5X18udHNcIjo3LFwiLi9fX2lnbm9yZV9fXCI6NSxcIi4vX19pZ25vcmVfXy50c1wiOjUsXCIuL19fbm9tYXRjaF9fXCI6MTAsXCIuL19fbm9tYXRjaF9fLnRzXCI6MTAsXCIuL19fcmF3U3RyaW5nX19cIjo5LFwiLi9fX3Jhd1N0cmluZ19fLnRzXCI6OSxcIi4vX19za2lwX19cIjo4LFwiLi9fX3NraXBfXy50c1wiOjgsXCIuL2FcIjoxOCxcIi4vYS50c1wiOjE4LFwiLi9iXCI6MTksXCIuL2IudHNcIjoxOSxcIi4vYmxvY2txdW90ZVwiOjIwLFwiLi9ibG9ja3F1b3RlLnRzXCI6MjAsXCIuL2JyXCI6MjEsXCIuL2JyLnRzXCI6MjEsXCIuL2NvZGVcIjoyMixcIi4vY29kZS50c1wiOjIyLFwiLi9kZWxcIjoxNCxcIi4vZGVsLnRzXCI6MTQsXCIuL2VtXCI6MTUsXCIuL2VtLnRzXCI6MTUsXCIuL2gxXCI6MjMsXCIuL2gxLnRzXCI6MjMsXCIuL2gyXCI6MjQsXCIuL2gyLnRzXCI6MjQsXCIuL2gzXCI6MjUsXCIuL2gzLnRzXCI6MjUsXCIuL2g0XCI6MjYsXCIuL2g0LnRzXCI6MjYsXCIuL2g1XCI6MjcsXCIuL2g1LnRzXCI6MjcsXCIuL2g2XCI6MjgsXCIuL2g2LnRzXCI6MjgsXCIuL2hyXCI6MjksXCIuL2hyLnRzXCI6MjksXCIuL2lcIjozMCxcIi4vaS50c1wiOjMwLFwiLi9pbWdcIjozMSxcIi4vaW1nLnRzXCI6MzEsXCIuL2lucHV0XCI6MzIsXCIuL2lucHV0LnRzXCI6MzIsXCIuL2xpXCI6MzMsXCIuL2xpLnRzXCI6MzMsXCIuL29sXCI6MzQsXCIuL29sLnRzXCI6MzQsXCIuL3BcIjozNSxcIi4vcC50c1wiOjM1LFwiLi9wcmVcIjozNixcIi4vcHJlLnRzXCI6MzYsXCIuL3NcIjozNyxcIi4vcy50c1wiOjM3LFwiLi9zcGFuXCI6MzgsXCIuL3NwYW4udHNcIjozOCxcIi4vc3Ryb25nXCI6MTMsXCIuL3N0cm9uZy50c1wiOjEzLFwiLi90YWJsZVwiOjM5LFwiLi90YWJsZS50c1wiOjM5LFwiLi90Ym9keVwiOjQwLFwiLi90Ym9keS50c1wiOjQwLFwiLi90ZFwiOjQxLFwiLi90ZC50c1wiOjQxLFwiLi90aFwiOjE2LFwiLi90aC50c1wiOjE2LFwiLi90aGVhZFwiOjQyLFwiLi90aGVhZC50c1wiOjQyLFwiLi90clwiOjQzLFwiLi90ci50c1wiOjQzLFwiLi91bFwiOjQ0LFwiLi91bC50c1wiOjQ0fTtmdW5jdGlvbiBvKHQpe3ZhciBlPWkodCk7cmV0dXJuIHIoZSl9ZnVuY3Rpb24gaSh0KXtpZighci5vKG4sdCkpe3ZhciBlPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrdCtcIidcIik7dGhyb3cgZS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGV9cmV0dXJuIG5bdF19by5rZXlzPWZ1bmN0aW9uKCl7cmV0dXJuIE9iamVjdC5rZXlzKG4pfSxvLnJlc29sdmU9aSx0LmV4cG9ydHM9byxvLmlkPTUwfSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZS5kZWZhdWx0PWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT17fSxyPSExLG49XCJcIixvPVwiXCIsaT1udWxsLGE9MDthPD10Lmxlbmd0aDthKyspe2lmKGE9PT10Lmxlbmd0aHx8L1xccy8udGVzdCh0W2FdKSl7aWYoYT09PXQubGVuZ3RofHwhcil7dmFyIGM9bi50cmltKCk7XCIvXCI9PT1jW2MubGVuZ3RoLTFdJiYoYz1jLnNsaWNlKDAsYy5sZW5ndGgtMSkpLGMmJihlW2NdPW8udHJpbSgpKSxuPVwiXCIsbz1cIlwifX1lbHNle2lmKC9bJ1wiXS8udGVzdCh0W2FdKSYmKCFpfHx0W2FdPT09aSkpeyhyPSFyKSYmKGk9dFthXSk7Y29udGludWV9aWYoXCI9XCI9PT10W2FdJiYhciljb250aW51ZX1pZihhPT09dC5sZW5ndGgpYnJlYWs7cj9vKz10W2FdOm4rPXRbYV19cmV0dXJuIGV9fSxmdW5jdGlvbih0LGUscil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49XCJqYXZhc2NyaXB0XCI7ZS5kZWZhdWx0PWZ1bmN0aW9uKHQpe3ZhciBlPXQubWF0Y2goLzwuKj9jbGFzcz1cIi4qP2xhbmd1YWdlLShbXlxcc1wiXSopPy4qXCIuKj4vKTtyZXR1cm4gZT9lWzFdfHxcIlwiOnQubWF0Y2goLzxzcGFuLio/aGxqcy0oY29tbWVudHxrZXl3b3JkfG51bWJlcnxzdHJpbmd8bGl0ZXJhbHxidWlsdF9pbnxmdW5jdGlvbnx0aXRsZXxidWxsZXQpLio/PFxcL3NwYW4+Lyk/bjpcIlwifX0sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGUuZGVmYXVsdD1mdW5jdGlvbih0KXtyZXR1cm4gdC5yZXBsYWNlKC88IS0tKD86W1xcc1xcU10qPyktLT4vZyxcIlwiKX19LGZ1bmN0aW9uKHQsZSxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxlLmRlZmF1bHQ9ZnVuY3Rpb24odCxlKXt2YXIgcj17X2RlZmF1bHRfOlwiLS0tfFwiLGNlbnRlcjpcIjotLS06fFwiLGxlZnQ6XCI6LS0tfFwiLHJpZ2h0OlwiLS0tOnxcIixzdGFydDpcIjotLS18XCIsZW5kOlwiLS0tOnxcIn0sbj1BcnJheShlKS5maWxsKHIuX2RlZmF1bHRfKSxvPXQubWF0Y2goLzwodGR8dGgpKC4qPyk+L2cpO3JldHVybiBvP249KG49by5zbGljZSgwLGUpKS5tYXAoZnVuY3Rpb24odCl7dmFyIGU9dC5tYXRjaCgvYWxpZ25cXHMqPVxccypbJ1wiXVxccyooY2VudGVyfGxlZnR8cmlnaHR8c3RhcnR8ZW5kKS8pLG49dC5tYXRjaCgvdGV4dC1hbGlnblxccyo6XFxzKihjZW50ZXJ8bGVmdHxyaWdodHxzdGFydHxlbmQpLyk7cmV0dXJuIGV8fG4/ZSYmIW4/cltlWzFdXXx8ci5fZGVmYXVsdF86bj9yW25bMV1dfHxyLl9kZWZhdWx0Xzp2b2lkIDA6ci5fZGVmYXVsdF99KTpufX0sZnVuY3Rpb24odCxlLHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGUuZGVmYXVsdD1bXCJ0aFwiLFwidGRcIl19XSkuZGVmYXVsdH0pOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBET01QdXJpZnkgZnJvbSBcImRvbXB1cmlmeVwiO1xuaW1wb3J0IGh0bWwybWQgZnJvbSBcImh0bWwtdG8tbWRcIjtcbmltcG9ydCBDcm9zc0lDIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvcmVzL2Nyb3NzLnN2Z1wiO1xuXG5sZXQgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xubGV0IGJyb3dzZXJOYW1lID0gdWEuaW5kZXhPZihcIkNocm9tZVwiKSA+IC0xID8gXCJDaHJvbWVcIiA6IFwiRmlyZWZveFwiO1xubGV0IENPUkUgPSBicm93c2VyTmFtZSA9PT0gXCJDaHJvbWVcIiA/IGNocm9tZSA6IGJyb3dzZXI7XG5cbmxldCBjb250ZW50U2VsZWN0b3I7XG5mdW5jdGlvbiBmaW5kQ29udGVudENvbnRhaW5lcigpIHtcbiAgbGV0IHNlbGVjdGVkQ29udGFpbmVyO1xuXG4gIGlmIChjb250ZW50U2VsZWN0b3IgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250ZW50U2VsZWN0b3IpKSB7XG4gICAgc2VsZWN0ZWRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRlbnRTZWxlY3Rvcik7XG4gIH0gZWxzZSBpZiAoZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKFwibWV0YVtuYW1lPSdhcnRpY2xlQm9keSdcIikpIHtcbiAgICBzZWxlY3RlZENvbnRhaW5lciA9IGNyZWF0ZUNvbnRlbnREaXZGcm9tTWV0YVRhZygpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHdvcmRDb3VudE9uUGFnZSA9IGRvY3VtZW50LmJvZHkuaW5uZXJUZXh0Lm1hdGNoKC9cXFMrL2cpLmxlbmd0aDtcbiAgICBsZXQgcGFyYWdyYXBocyA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbChcInBcIik7XG5cbiAgICBsZXQgY29udGFpbmVyV2l0aE1vc3RXb3JkcyA9IGRvY3VtZW50LmJvZHksXG4gICAgICBoaWdoZXN0V29yZENvdW50ID0gMDtcblxuICAgIGlmIChwYXJhZ3JhcGhzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcGFyYWdyYXBocyA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbChcImRpdlwiKTtcbiAgICB9XG5cbiAgICBwYXJhZ3JhcGhzLmZvckVhY2goKHBhcmFncmFwaCkgPT4ge1xuICAgICAgaWYgKHBhcmFncmFwaC5vZmZzZXRIZWlnaHQgIT09IDApIHtcbiAgICAgICAgY29uc3QgaW5uZXJUZXh0V29yZHMgPSBwYXJhZ3JhcGguaW5uZXJUZXh0Lm1hdGNoKC9cXFMrL2cpO1xuICAgICAgICBpZiAoaW5uZXJUZXh0V29yZHMpIHtcbiAgICAgICAgICBjb25zdCB3b3JkQ291bnQgPSBpbm5lclRleHRXb3Jkcy5sZW5ndGg7XG4gICAgICAgICAgaWYgKHdvcmRDb3VudCA+IGhpZ2hlc3RXb3JkQ291bnQpIHtcbiAgICAgICAgICAgIGhpZ2hlc3RXb3JkQ291bnQgPSB3b3JkQ291bnQ7XG4gICAgICAgICAgICBjb250YWluZXJXaXRoTW9zdFdvcmRzID0gcGFyYWdyYXBoO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocGFyYWdyYXBoLm9mZnNldEhlaWdodCA9PT0gMCkge1xuICAgICAgICBwYXJhZ3JhcGguZGF0YXNldC5zaW1wbGVEZWxldGUgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgc2VsZWN0ZWRDb250YWluZXIgPSBjb250YWluZXJXaXRoTW9zdFdvcmRzO1xuICAgIGxldCBzZWxlY3RlZFdvcmRDb3VudCA9IGhpZ2hlc3RXb3JkQ291bnQ7XG5cbiAgICB3aGlsZSAoXG4gICAgICBzZWxlY3RlZFdvcmRDb3VudCAvIHdvcmRDb3VudE9uUGFnZSA8IDAuNCAmJlxuICAgICAgc2VsZWN0ZWRDb250YWluZXIgIT09IGRvY3VtZW50LmJvZHkgJiZcbiAgICAgIHNlbGVjdGVkQ29udGFpbmVyLnBhcmVudEVsZW1lbnQuaW5uZXJUZXh0XG4gICAgKSB7XG4gICAgICBzZWxlY3RlZENvbnRhaW5lciA9IHNlbGVjdGVkQ29udGFpbmVyLnBhcmVudEVsZW1lbnQ7XG4gICAgICBzZWxlY3RlZFdvcmRDb3VudCA9IHNlbGVjdGVkQ29udGFpbmVyLmlubmVyVGV4dC5tYXRjaCgvXFxTKy9nKS5sZW5ndGg7XG4gICAgfVxuXG4gICAgaWYgKHNlbGVjdGVkQ29udGFpbmVyLnRhZ05hbWUgPT09IFwiUFwiKSB7XG4gICAgICBzZWxlY3RlZENvbnRhaW5lciA9IHNlbGVjdGVkQ29udGFpbmVyLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHNlbGVjdGVkQ29udGFpbmVyO1xufVxuXG5cbmZ1bmN0aW9uIGV4dHJhY3RDb250ZW50KCkge1xuICBsZXQgc2VsZWN0ZWRDb250YWluZXIgPSBmaW5kQ29udGVudENvbnRhaW5lcigpO1xuICBsZXQgY2xvbmVkQ29udGFpbmVyID0gc2VsZWN0ZWRDb250YWluZXIuY2xvbmVOb2RlKHRydWUpO1xuXG4gIGNvbnN0IGFuY2hvclRhZ1BhdHRlcm4gPSAvPGFcXGJbXj5dKj4oLio/KTxcXC9hPi9naTtcbiAgY2xvbmVkQ29udGFpbmVyLmlubmVySFRNTCA9IERPTVB1cmlmeS5zYW5pdGl6ZShcbiAgICBjbG9uZWRDb250YWluZXIuaW5uZXJIVE1MLnJlcGxhY2UoYW5jaG9yVGFnUGF0dGVybiwgXCJcIilcbiAgKTtcbiAgXG4gIGNvbnN0IGJyZWFrUGF0dGVybiA9IG5ldyBSZWdFeHAoXCI8YnIvPz5bIFxcclxcbnNdKjxici8/PlwiLCBcImdcIik7XG4gIGNsb25lZENvbnRhaW5lci5pbm5lckhUTUwgPSBET01QdXJpZnkuc2FuaXRpemUoXG4gICAgY2xvbmVkQ29udGFpbmVyLmlubmVySFRNTC5yZXBsYWNlKGJyZWFrUGF0dGVybiwgXCI8L3A+PHA+XCIpXG4gICk7XG5cbiAgbGV0IGNvbnRlbnQgPSBET01QdXJpZnkuc2FuaXRpemUoY2xvbmVkQ29udGFpbmVyLmlubmVySFRNTCk7XG4gIGNvbnRlbnQgPSBodG1sMm1kKGNvbnRlbnQpO1xuICByZXR1cm4gY29udGVudDtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzaGVldChkb2MsIGxpbmssIGNsYXNzTikge1xuICBjb25zdCBwYXRoID0gQ09SRS5ydW50aW1lLmdldFVSTChsaW5rKSxcbiAgICBzdHlsZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuICBzdHlsZUxpbmsuc2V0QXR0cmlidXRlKFwicmVsXCIsIFwic3R5bGVzaGVldFwiKTtcbiAgc3R5bGVMaW5rLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0L2Nzc1wiKTtcbiAgc3R5bGVMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgcGF0aCk7XG5cbiAgaWYgKGNsYXNzTikgc3R5bGVMaW5rLmNsYXNzTmFtZSA9IGNsYXNzTjtcblxuICBkb2MuYXBwZW5kQ2hpbGQoc3R5bGVMaW5rKTtcblxuICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgc3R5bGUudGV4dENvbnRlbnQgPSBgXG4gICAgOmhvc3Qge1xuICAgICAgYWxsOiBpbml0aWFsO1xuICAgIH1cbiAgICAuc3VtbWFyaXplLWdwdC1jb250YWluZXIgKiB7XG4gICAgIC8vIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gIGA7XG4gIGRvYy5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIGNvcHlUZXh0VG9DbGlwYm9hcmQodGV4dCkge1xuICB2YXIgY29weUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29weS1idXR0b25cIik7XG4gIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRleHQpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgIGNvcHlCdXR0b24udGV4dENvbnRlbnQgPSAnQ29waWVkJztcbiAgfSwgZnVuY3Rpb24gKCkge1xuICAgIGNvcHlCdXR0b24udGV4dENvbnRlbnQgPSAnRmFpbGVkJztcbiAgfSk7XG59XG5cbmNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAoeyBwcm9wcywgdGFnLCBjaGlsZHJlbiwgbmFtZSB9LCBlbGVtZW50c09iaikgPT4ge1xuICBjb25zdCBlbGVtZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIE9iamVjdC5lbnRyaWVzKHByb3BzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoa2V5ID09PSBcInN0eWxlXCIpIHtcbiAgICAgIE9iamVjdC5lbnRyaWVzKHZhbHVlKS5mb3JFYWNoKChba2V5MiwgdmFsdWUyXSkgPT4ge1xuICAgICAgICBlbGVtZW4uc3R5bGVba2V5Ml0gPSB2YWx1ZTI7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVuW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH0pO1xuICBpZiAoY2hpbGRyZW4pIHtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKCh4KSA9PiB7XG4gICAgICBpZiAoeCkge1xuICAgICAgICBjb25zdCBjaGlsZCA9IGNyZWF0ZUVsZW1lbnQoeCwgZWxlbWVudHNPYmopO1xuICAgICAgICBlbGVtZW4uYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGlmIChuYW1lICYmIGVsZW1lbnRzT2JqKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgZWxlbWVudHNPYmpbbmFtZV0gPSBlbGVtZW47XG4gIH1cbiAgcmV0dXJuIGVsZW1lbjtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhaW5lcigpIHtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoe1xuICAgIHRhZzogXCJkaXZcIixcbiAgICBwcm9wczogeyBjbGFzc05hbWU6IFwic3VtbWFyaXplLWdwdC1jb250YWluZXJcIiB9LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHRhZzogXCJkaXZcIixcbiAgICAgICAgcHJvcHM6IHsgY2xhc3NOYW1lOiBcInN1bXotbWluLXctWzMwJV0gc3Vtei1tYXgtaC1bODAlXSBzdW16LW1heC13LVszMCVdIHN1bXotZml4ZWQgc3Vtei1yaWdodC00IHN1bXotdG9wLTggc3Vtei1mbGV4IHN1bXotZmxleC1jb2wgc3Vtei1pdGVtcy1jZW50ZXIgc3Vtei1qdXN0aWZ5LWNlbnRlciBzdW16LXJvdW5kZWQtbGcgc3Vtei1iZy13aGl0ZSBzdW16LXNoYWRvdy1tZFwiIH0sXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgLy8gaGVhZGluZ1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRhZzogXCJkaXZcIixcbiAgICAgICAgICAgIHByb3BzOiB7IGNsYXNzTmFtZTogXCJzdW16LWZsZXggc3Vtei1oLVs0MHB4XSBzdW16LXctZnVsbCBzdW16LWl0ZW1zLWNlbnRlciBzdW16LWp1c3RpZnktYmV0d2VlbiBzdW16LXJvdW5kZWQtdC1sZyBzdW16LWJnLWdyYXktMjAwIHN1bXotcHgtNFwiIH0sXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHByb3BzOiB7IGlkOiBcInN1bW1hcml6ZV9faGVhZGluZy10ZXh0XCIsIGNsYXNzTmFtZTogXCJzdW16LXRleHQteHhsIHN1bXotZm9udC1ibGFjayBzdW16LWFuaW1hdGUtdGV4dCBzdW16LWJnLWdyYWRpZW50LXRvLXIgc3Vtei1mcm9tLXRlYWwtNTAwIHN1bXotdmlhLXB1cnBsZS01MDAgc3Vtei10by1vcmFuZ2UtNTAwIHN1bXotYmctY2xpcC10ZXh0IHN1bXotdGV4dC10cmFuc3BhcmVudFwiIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHsgdGFnOiBcImltZ1wiLCBwcm9wczogeyBpZDogXCJzdW1tYXJpemVfX2Nsb3NlLWJ1dHRvblwiLCBjbGFzc05hbWU6IFwic3Vtei1oLVsyNHB4XSBzdW16LXctNiBzdW16LWN1cnNvci1wb2ludGVyIHN1bXotcm91bmRlZC1sZyBob3ZlcjpzdW16LWJnLXNreS0yMDBcIiwgc3JjOiBDcm9zc0lDLCBhbHQ6IFwiY2xvc2VcIiB9IH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICAvLyBkaXZpZGVyXG4gICAgICAgICAgeyB0YWc6IFwiZGl2XCIsIHByb3BzOiB7IGNsYXNzTmFtZTogXCJzdW16LXctZnVsbCBzdW16LWgtMSBzdW16LWJnLWdyYXktMzAwXCIgfSB9LFxuICAgICAgICAgIC8vIGJvZHlcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0YWc6IFwiZGl2XCIsXG4gICAgICAgICAgICBwcm9wczogeyBjbGFzc05hbWU6IFwic3Vtei1oLWZ1bGwgc3Vtei13LWZ1bGwgc3Vtei1vdmVyZmxvdy15LWF1dG8gc3Vtei1weC00IHN1bXotcHktNFwiIH0sXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHByb3BzOiB7IGlkOiBcInN1bW1hcml6ZV9fYm9keVwiLCBjbGFzc05hbWU6IFwic3Vtei10ZXh0LTMteGwgc3Vtei1tYi0yIHN1bXotZmxleCBzdW16LWZsZXgtY29sIHN1bXotd2hpdGVzcGFjZS1wcmUtbGluZSBzdW16LXRleHQtZ3JheS03MDBcIiB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIC8vIGRpdmlkZXJcbiAgICAgICAgICB7IHRhZzogXCJkaXZcIiwgcHJvcHM6IHsgY2xhc3NOYW1lOiBcInN1bXotdy1mdWxsIHN1bXotaC0xIHN1bXotYmctZ3JheS0yMDBcIiB9IH0sXG4gICAgICAgICAgLy8gZm9vdGVyXG4gICAgICAgICBcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJ1bigpIHtcbiAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlQ29udGFpbmVyKCk7XG5cbiAgbGV0IHJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcm9vdC5pZCA9IFwic3VtbWFyaXplLXJvb3RcIjtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyb290KTtcblxuICBsZXQgc2hhZG93Um9vdCA9IHJvb3QuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuXG4gIC8vIEFwcGVuZGluZyB0aGUgc3R5bGVzIHRvIHRoZSBzaGFkb3cgcm9vdFxuICBpZiAoIXNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi5zdW1tYXJpemUtc3R5bGVzXCIpKVxuICAgIGFkZFN0eWxlc2hlZXQoc2hhZG93Um9vdCwgXCJzdHlsZXMuY3NzXCIsIFwic3VtbWFyaXplLXN0eWxlc1wiKTtcblxuICBzaGFkb3dSb290LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgLy8gQWRkaW5nIHN0eWxlcyB0byBwb3NpdGlvbiB0aGUgcm9vdFxuICByb290LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgcm9vdC5zdHlsZS56SW5kZXggPSAnOTk5OSc7IC8vIE1ha2Ugc3VyZSBpdCdzIG9uIHRvcCBvZiBvdGhlciBlbGVtZW50c1xuXG4gIGNvbnN0IGlubmVyQ29udGFpbmVySGVhZGluZyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI3N1bW1hcml6ZV9faGVhZGluZy10ZXh0XCIpO1xuICBpbm5lckNvbnRhaW5lckhlYWRpbmcuaW5uZXJIVE1MID0gJzxwPlN1bW1hcml6ZWQgPGEgaHJlZj1cImh0dHBzOi8vY2hhdC5vcGVuYWkuY29tL2NoYXRcIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cInN1bXotdGV4dC1zbVwiPmJ5IENoYXRHUFQ8L2E+PC9wPic7XG5cbiAgY29uc3QgaW5uZXJDb250YWluZXJCb2R5ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjc3VtbWFyaXplX19ib2R5XCIpO1xuICBpbm5lckNvbnRhaW5lckJvZHkuaW5uZXJIVE1MID0gJzxwPldhaXRpbmcgZm9yIENoYXRHUFQgcmVzcG9uc2UuLi48L3A+JztcblxuICBjb25zdCBjbG9zZUJ1dHRvbiA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI3N1bW1hcml6ZV9fY2xvc2UtYnV0dG9uXCIpO1xuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQocm9vdCk7XG4gIH0pO1xuXG4gXG4gIGxldCBjb250ZW50O1xuICBsZXQgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuXG4gIGlmIChzZWxlY3Rpb24uaXNDb2xsYXBzZWQpIHtcbiAgICBjb250ZW50ID0gZXh0cmFjdENvbnRlbnQoKTtcbiAgfSBlbHNlIHtcbiAgICBjb250ZW50ID0gc2VsZWN0aW9uLnRvU3RyaW5nKCk7XG4gIH1cblxuICBjb25zdCBwb3J0ID0gQ09SRS5ydW50aW1lLmNvbm5lY3QoKTsvLyAgY2hyb21lIGFwaSAyIHJldHJpZXZlIHNlcnZpY2Ugd29ya2VyIFxuICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAobXNnKSB7XG4gICAgaWYgKG1zZy5hbnN3ZXIpIHtcbiAgICAgIC8vY29uc29sZS5sb2cobXNnLmFuc3dlcik7XG4gICAgICBpbm5lckNvbnRhaW5lckJvZHkuaW5uZXJIVE1MID0gbXNnLmFuc3dlcjtcbiAgICB9IGVsc2UgaWYgKG1zZy5lcnJvciA9PT0gXCJVTkFVVEhPUklaRURcIikge1xuICAgICAgaW5uZXJDb250YWluZXJCb2R5LmlubmVySFRNTCA9XG4gICAgICAgICc8cD5QbGVhc2UgbG9naW4gYXQgPGEgaHJlZj1cImh0dHBzOi8vY2hhdC5vcGVuYWkuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCI+Y2hhdC5vcGVuYWkuY29tPC9hPjwvcD4nO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbm5lckNvbnRhaW5lckJvZHkuaW5uZXJIVE1MID0gXCI8cD5GYWlsZWQgdG8gbG9hZCByZXNwb25zZSBmcm9tIENoYXRHUFQ8L3A+XCI7XG4gICAgfVxuICB9KTtcbiAgcG9ydC5wb3N0TWVzc2FnZSh7IGNvbnRlbnQgfSk7XG59XG5cbnJ1bigpO1xuIl0sIm5hbWVzIjpbIkRPTVB1cmlmeSIsImh0bWwybWQiLCJDcm9zc0lDIiwidWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJicm93c2VyTmFtZSIsImluZGV4T2YiLCJDT1JFIiwiY2hyb21lIiwiYnJvd3NlciIsImNvbnRlbnRTZWxlY3RvciIsImZpbmRDb250ZW50Q29udGFpbmVyIiwic2VsZWN0ZWRDb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoZWFkIiwiY3JlYXRlQ29udGVudERpdkZyb21NZXRhVGFnIiwid29yZENvdW50T25QYWdlIiwiYm9keSIsImlubmVyVGV4dCIsIm1hdGNoIiwibGVuZ3RoIiwicGFyYWdyYXBocyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb250YWluZXJXaXRoTW9zdFdvcmRzIiwiaGlnaGVzdFdvcmRDb3VudCIsImZvckVhY2giLCJwYXJhZ3JhcGgiLCJvZmZzZXRIZWlnaHQiLCJpbm5lclRleHRXb3JkcyIsIndvcmRDb3VudCIsImRhdGFzZXQiLCJzaW1wbGVEZWxldGUiLCJzZWxlY3RlZFdvcmRDb3VudCIsInBhcmVudEVsZW1lbnQiLCJ0YWdOYW1lIiwiZXh0cmFjdENvbnRlbnQiLCJjbG9uZWRDb250YWluZXIiLCJjbG9uZU5vZGUiLCJhbmNob3JUYWdQYXR0ZXJuIiwiaW5uZXJIVE1MIiwic2FuaXRpemUiLCJyZXBsYWNlIiwiYnJlYWtQYXR0ZXJuIiwiUmVnRXhwIiwiY29udGVudCIsImFkZFN0eWxlc2hlZXQiLCJkb2MiLCJsaW5rIiwiY2xhc3NOIiwicGF0aCIsInJ1bnRpbWUiLCJnZXRVUkwiLCJzdHlsZUxpbmsiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJzdHlsZSIsInRleHRDb250ZW50IiwiY29weVRleHRUb0NsaXBib2FyZCIsInRleHQiLCJjb3B5QnV0dG9uIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidGhlbiIsInByb3BzIiwidGFnIiwiY2hpbGRyZW4iLCJuYW1lIiwiZWxlbWVudHNPYmoiLCJlbGVtZW4iLCJPYmplY3QiLCJlbnRyaWVzIiwia2V5IiwidmFsdWUiLCJrZXkyIiwidmFsdWUyIiwieCIsImNoaWxkIiwiY3JlYXRlQ29udGFpbmVyIiwiaWQiLCJzcmMiLCJhbHQiLCJydW4iLCJjb250YWluZXIiLCJyb290Iiwic2hhZG93Um9vdCIsImF0dGFjaFNoYWRvdyIsIm1vZGUiLCJwb3NpdGlvbiIsInpJbmRleCIsImlubmVyQ29udGFpbmVySGVhZGluZyIsImlubmVyQ29udGFpbmVyQm9keSIsImNsb3NlQnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUNoaWxkIiwic2VsZWN0aW9uIiwid2luZG93IiwiZ2V0U2VsZWN0aW9uIiwiaXNDb2xsYXBzZWQiLCJ0b1N0cmluZyIsInBvcnQiLCJjb25uZWN0Iiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJtc2ciLCJhbnN3ZXIiLCJlcnJvciIsInBvc3RNZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==