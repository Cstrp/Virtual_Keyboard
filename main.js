"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([[179],{

/***/ 9878:
/***/ (() => {

eval("\n;// CONCATENATED MODULE: ./js/utils/create.js\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Create = /*#__PURE__*/_createClass(function Create(parent, tag, classNames, value, attributes) {\n  var _this$element$classLi;\n\n  _classCallCheck(this, Create);\n\n  this.element = document.createElement(tag);\n\n  (_this$element$classLi = this.element.classList).add.apply(_this$element$classLi, _toConsumableArray(classNames.split(' ')));\n\n  this.element.innerHTML = value;\n  parent.appendChild(this.element);\n\n  if (attributes) {\n    for (var key in attributes) {\n      this.element.setAttribute(key, attributes[key]);\n    }\n  }\n});\n\n/* harmony default export */ const create = (Create);\n;// CONCATENATED MODULE: ./js/view/wrapper.js\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction wrapper_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction wrapper_createClass(Constructor, protoProps, staticProps) { if (protoProps) wrapper_defineProperties(Constructor.prototype, protoProps); if (staticProps) wrapper_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction wrapper_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar Wrapper = /*#__PURE__*/function (_Create) {\n  _inherits(Wrapper, _Create);\n\n  var _super = _createSuper(Wrapper);\n\n  function Wrapper() {\n    var _this;\n\n    wrapper_classCallCheck(this, Wrapper);\n\n    _this = _super.call(this, document.body, 'div', 'wrapper', null, null);\n    _this.content = new create(_this.element, 'div', 'content', null, null);\n    _this.container = new create(_this.content.element, 'div', 'container', null, null);\n    _this.canvas = new create(_this.container.element, 'canvas', 'background', null, null);\n    _this.title = new create(_this.container.element, 'h1', 'title glitch', 'Virtual_Keyboard', null);\n    _this.output = new create(_this.container.element, 'textarea', 'output', null, {\n      placeholder: 'Type your text here...',\n      spellcheck: false,\n      readonly: true\n    });\n    return _this;\n  }\n\n  return wrapper_createClass(Wrapper);\n}(create);\n\n/* harmony default export */ const wrapper = (Wrapper);\n;// CONCATENATED MODULE: ./js/language/rus.js\n/* harmony default export */ const rus = ([{\n  small: 'ё',\n  shift: 'Ё',\n  code: 'KeyY'\n}, {\n  small: '1',\n  shift: '!',\n  code: 'Digit1'\n}, {\n  small: '2',\n  shift: '\"',\n  code: 'Digit2'\n}, {\n  small: '3',\n  shift: '№',\n  code: 'Digit3'\n}, {\n  small: '4',\n  shift: ';',\n  code: 'Digit4'\n}, {\n  small: '5',\n  shift: '%',\n  code: 'Digit5'\n}, {\n  small: '6',\n  shift: ':',\n  code: 'Digit6'\n}, {\n  small: '7',\n  shift: '?',\n  code: 'Digit7'\n}, {\n  small: '8',\n  shift: '*',\n  code: 'Digit8'\n}, {\n  small: '9',\n  shift: '(',\n  code: 'Digit9'\n}, {\n  small: '0',\n  shift: ')',\n  code: 'Digit0'\n}, {\n  small: '-',\n  shift: '_',\n  code: 'Minus'\n}, {\n  small: '=',\n  shift: '+',\n  code: 'Equal'\n}, {\n  small: 'й',\n  shift: 'Й',\n  code: 'KeyQ'\n}, {\n  small: 'ц',\n  shift: 'Ц',\n  code: 'KeyW'\n}, {\n  small: 'у',\n  shift: 'У',\n  code: 'KeyE'\n}, {\n  small: 'к',\n  shift: 'К',\n  code: 'KeyR'\n}, {\n  small: 'е',\n  shift: 'Е',\n  code: 'KeyT'\n}, {\n  small: 'н',\n  shift: 'Н',\n  code: 'KeyY'\n}, {\n  small: 'г',\n  shift: 'Г',\n  code: 'KeyU'\n}, {\n  small: 'ш',\n  shift: 'Ш',\n  code: 'KeyI'\n}, {\n  small: 'щ',\n  shift: 'Щ',\n  code: 'KeyO'\n}, {\n  small: 'з',\n  shift: 'З',\n  code: 'KeyP'\n}, {\n  small: 'х',\n  shift: 'Х',\n  code: 'BracketLeft'\n}, {\n  small: 'ъ',\n  shift: 'Ъ',\n  code: 'BracketRight'\n}, {\n  small: 'ф',\n  shift: 'Ф',\n  code: 'KeyA'\n}, {\n  small: 'ы',\n  shift: 'Ы',\n  code: 'KeyS'\n}, {\n  small: 'в',\n  shift: 'В',\n  code: 'KeyD'\n}, {\n  small: 'а',\n  shift: 'А',\n  code: 'KeyF'\n}, {\n  small: 'п',\n  shift: 'П',\n  code: 'KeyG'\n}, {\n  small: 'р',\n  shift: 'Р',\n  code: 'KeyH'\n}, {\n  small: 'о',\n  shift: 'О',\n  code: 'KeyJ'\n}, {\n  small: 'л',\n  shift: 'Л',\n  code: 'KeyK'\n}, {\n  small: 'д',\n  shift: 'Д',\n  code: 'KeyL'\n}, {\n  small: 'ж',\n  shift: 'Ж',\n  code: 'Semicolon'\n}, {\n  small: 'э',\n  shift: 'Э',\n  code: 'Quote'\n}, {\n  small: 'я',\n  shift: 'Я',\n  code: 'KeyZ'\n}, {\n  small: 'ч',\n  shift: 'Ч',\n  code: 'KeyX'\n}, {\n  small: 'с',\n  shift: 'С',\n  code: 'KeyC'\n}, {\n  small: 'м',\n  shift: 'М',\n  code: 'KeyV'\n}, {\n  small: 'и',\n  shift: 'И',\n  code: 'KeyB'\n}, {\n  small: 'т',\n  shift: 'Т',\n  code: 'KeyN'\n}, {\n  small: 'ь',\n  shift: 'Ь',\n  code: 'KeyM'\n}, {\n  small: 'б',\n  shift: 'Б',\n  code: 'Comma'\n}, {\n  small: 'ю',\n  shift: 'Ю',\n  code: 'Period'\n}, {\n  small: '.',\n  shift: ',',\n  code: 'Slash'\n}]);\n;// CONCATENATED MODULE: ./js/language/eng.js\n/* harmony default export */ const eng = ([{\n  small: '`',\n  shift: '~',\n  code: 'Backquote'\n}, {\n  small: '1',\n  shift: '!',\n  code: 'Digit1'\n}, {\n  small: '2',\n  shift: '@',\n  code: 'Digit2'\n}, {\n  small: '3',\n  shift: '#',\n  code: 'Digit3'\n}, {\n  small: '4',\n  shift: '$',\n  code: 'Digit4'\n}, {\n  small: '5',\n  shift: '%',\n  code: 'Digit5'\n}, {\n  small: '6',\n  shift: '^',\n  code: 'Digit6'\n}, {\n  small: '7',\n  shift: '&',\n  code: 'Digit7'\n}, {\n  small: '8',\n  shift: '*',\n  code: 'Digit8'\n}, {\n  small: '9',\n  shift: '(',\n  code: 'Digit9'\n}, {\n  small: '0',\n  shift: ')',\n  code: 'Digit0'\n}, {\n  small: '-',\n  shift: '_',\n  code: 'Minus'\n}, {\n  small: '=',\n  shift: '+',\n  code: 'Equal'\n}, {\n  small: 'Backspace',\n  shift: '',\n  code: 'Backspace'\n}, {\n  small: 'Tab',\n  shift: '',\n  code: 'Tab'\n}, {\n  small: 'q',\n  shift: 'Q',\n  code: 'KeyQ'\n}, {\n  small: 'w',\n  shift: 'W',\n  code: 'KeyW'\n}, {\n  small: 'e',\n  shift: 'E',\n  code: 'KeyE'\n}, {\n  small: 'r',\n  shift: 'R',\n  code: 'KeyR'\n}, {\n  small: 't',\n  shift: 'T',\n  code: 'KeyT'\n}, {\n  small: 'y',\n  shift: 'Y',\n  code: 'KeyY'\n}, {\n  small: 'u',\n  shift: 'U',\n  code: 'KeyU'\n}, {\n  small: 'i',\n  shift: 'I',\n  code: 'KeyI'\n}, {\n  small: 'o',\n  shift: 'O',\n  code: 'KeyO'\n}, {\n  small: 'p',\n  shift: 'P',\n  code: 'KeyP'\n}, {\n  small: '[',\n  shift: '{',\n  code: 'BracketLeft'\n}, {\n  small: ']',\n  shift: '}',\n  code: 'BracketRight'\n}, {\n  small: '\\\\',\n  shift: '|',\n  code: 'Backslash'\n}, {\n  small: 'CapsLock',\n  shift: '',\n  code: 'CapsLock'\n}, {\n  small: 'a',\n  shift: 'A',\n  code: 'KeyA'\n}, {\n  small: 's',\n  shift: 'S',\n  code: 'KeyS'\n}, {\n  small: 'd',\n  shift: 'D',\n  code: 'KeyD'\n}, {\n  small: 'f',\n  shift: 'F',\n  code: 'KeyF'\n}, {\n  small: 'g',\n  shift: 'G',\n  code: 'KeyG'\n}, {\n  small: 'h',\n  shift: 'H',\n  code: 'KeyH'\n}, {\n  small: 'j',\n  shift: 'J',\n  code: 'KeyJ'\n}, {\n  small: 'k',\n  shift: 'K',\n  code: 'KeyK'\n}, {\n  small: 'l',\n  shift: 'L',\n  code: 'KeyL'\n}, {\n  small: ';',\n  shift: ':',\n  code: 'Semicolon'\n}, {\n  small: \"'\",\n  shift: '\"',\n  code: 'Quote'\n}, {\n  small: 'Enter',\n  shift: '',\n  code: 'Enter'\n}, {\n  small: 'ShiftLeft',\n  shift: '',\n  code: 'ShiftLeft'\n}, {\n  small: 'z',\n  shift: 'Z',\n  code: 'KeyZ'\n}, {\n  small: 'x',\n  shift: 'X',\n  code: 'KeyX'\n}, {\n  small: 'c',\n  shift: 'C',\n  code: 'KeyC'\n}, {\n  small: 'v',\n  shift: 'V',\n  code: 'KeyV'\n}, {\n  small: 'b',\n  shift: 'B',\n  code: 'KeyB'\n}, {\n  small: 'n',\n  shift: 'N',\n  code: 'KeyN'\n}, {\n  small: 'm',\n  shift: 'M',\n  code: 'KeyM'\n}, {\n  small: ',',\n  shift: '<',\n  code: 'Comma'\n}, {\n  small: '.',\n  shift: '>',\n  code: 'Period'\n}, {\n  small: '/',\n  shift: '?',\n  code: 'Slash'\n}, {\n  small: 'ShiftRight',\n  shift: '',\n  code: 'ShiftRight'\n}, {\n  small: 'ControlLeft',\n  shift: '',\n  code: 'ControlLeft'\n}, {\n  small: 'AltLeft',\n  shift: '',\n  code: 'AltLeft'\n}, {\n  small: 'Space',\n  shift: '',\n  code: 'Space'\n}, {\n  small: 'AltRight',\n  shift: '',\n  code: 'AltRight'\n}, {\n  small: 'ControlRight',\n  shift: '',\n  code: 'ControlRight'\n}, {\n  small: 'ArrowUp',\n  shift: '',\n  code: 'ArrowUp'\n}, {\n  small: 'ArrowDown',\n  shift: '',\n  code: 'ArrowDown'\n}, {\n  small: 'ArrowLeft',\n  shift: '',\n  code: 'ArrowLeft'\n}, {\n  small: 'ArrowRight',\n  shift: '',\n  code: 'ArrowRight'\n}]);\n;// CONCATENATED MODULE: ./js/language/exp.js\n\n\n/* harmony default export */ const exp = ({\n  rus: rus,\n  eng: eng\n});\n;// CONCATENATED MODULE: ./js/keyboard.js\nfunction keyboard_typeof(obj) { \"@babel/helpers - typeof\"; return keyboard_typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, keyboard_typeof(obj); }\n\nfunction keyboard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction keyboard_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction keyboard_createClass(Constructor, protoProps, staticProps) { if (protoProps) keyboard_defineProperties(Constructor.prototype, protoProps); if (staticProps) keyboard_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction keyboard_inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) keyboard_setPrototypeOf(subClass, superClass); }\n\nfunction keyboard_setPrototypeOf(o, p) { keyboard_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return keyboard_setPrototypeOf(o, p); }\n\nfunction keyboard_createSuper(Derived) { var hasNativeReflectConstruct = keyboard_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = keyboard_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = keyboard_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return keyboard_possibleConstructorReturn(this, result); }; }\n\nfunction keyboard_possibleConstructorReturn(self, call) { if (call && (keyboard_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return keyboard_assertThisInitialized(self); }\n\nfunction keyboard_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction keyboard_isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction keyboard_getPrototypeOf(o) { keyboard_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return keyboard_getPrototypeOf(o); }\n\n\n\n\nvar rowsOrder = [['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'], ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'], ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'], ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight'], ['ControlLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ArrowUp']];\n\nvar Keyboard = /*#__PURE__*/function (_Wrapper) {\n  keyboard_inherits(Keyboard, _Wrapper);\n\n  var _super = keyboard_createSuper(Keyboard);\n\n  function Keyboard() {\n    keyboard_classCallCheck(this, Keyboard);\n\n    return _super.call(this);\n  }\n\n  keyboard_createClass(Keyboard, [{\n    key: \"keyboardLayout\",\n    value: function keyboardLayout() {\n      this.keyboard = new create(this.container.element, 'div', 'keyboard', '', '');\n    }\n  }, {\n    key: \"engKeyboardLayout\",\n    value: function engKeyboardLayout() {\n      var _this = this;\n\n      var eng = exp.eng;\n      var keys = Object.entries(eng);\n      var keysOrder = rowsOrder.map(function (row) {\n        return row.map(function (key) {\n          return keys.find(function (keyItem) {\n            return keyItem[1].code === key;\n          });\n        });\n      }); // console.log(keys);\n      // console.log(keysOrder);\n\n      keysOrder.forEach(function (row) {\n        var keyboardRow = new create(_this.keyboard.element, 'div', 'keyboard-row', '', '');\n        row.forEach(function (key) {\n          var keyboardKey = new create(keyboardRow.element, 'div', 'keyboard-key', key[1].small, {\n            'data-key': key[1].code\n          });\n\n          if (key[1].code === 'Space') {\n            keyboardKey.element.classList.remove('keyboard-key');\n            keyboardKey.element.classList.add('space');\n            keyboardKey.element.innerHTML = '&nbsp;';\n            keyboardKey.element.addEventListener('click', function (e) {\n              e.preventDefault();\n              _this.output.element.value += ' ';\n\n              _this.output.element.focus();\n            });\n          } else if (key[1].code === 'Enter') {\n            keyboardKey.element.classList.remove('keyboard-key');\n            keyboardKey.element.classList.add('enter');\n            keyboardKey.element.addEventListener('click', function (e) {\n              e.preventDefault();\n              _this.output.element.value += '\\n';\n\n              _this.output.element.focus();\n            });\n          } else if (key[1].code === 'Backspace') {\n            keyboardKey.element.classList.remove('keyboard-key');\n            keyboardKey.element.classList.add('backspace');\n            keyboardKey.element.addEventListener('click', function (e) {\n              e.preventDefault();\n              _this.output.element.value = _this.output.element.value.slice(0, _this.output.element.value.length - 1);\n\n              _this.output.element.focus();\n            });\n          } else if (key[1].code === 'CapsLock') {\n            keyboardKey.element.classList.remove('keyboard-key');\n            keyboardKey.element.classList.add('capslock');\n            keyboardKey.element.addEventListener('click', function (e) {\n              e.preventDefault();\n              _this.output.element.value = _this.output.element.value.toUpperCase();\n\n              _this.output.element.focus();\n            });\n          } else if (key[1].code === 'ShiftLeft') {\n            keyboardKey.element.classList.remove('keyboard-key');\n            keyboardKey.element.classList.add('shiftLeft');\n            keyboardKey.element.innerHTML = 'Shift';\n          } else if (key[1].code === 'ShiftRight') {\n            keyboardKey.element.classList.remove('keyboard-key');\n            keyboardKey.element.classList.add('shiftRight');\n            keyboardKey.element.innerHTML = 'Shift';\n          } else if (key[1].code === 'ControlLeft') {\n            keyboardKey.element.classList.remove('keyboard-key');\n            keyboardKey.element.classList.add('ctrlLeft');\n          } else if (key[1].code === 'ControlRight') {\n            keyboardKey.element.classList.remove('keyboard-key');\n            keyboardKey.element.classList.add('ctrlRight');\n          } else if (key[1].code === 'AltLeft') {\n            keyboardKey.element.classList.remove('keyboard-key');\n            keyboardKey.element.classList.add('altLeft');\n          } else if (key[1].code === 'AltRight') {\n            keyboardKey.element.classList.remove('keyboard-key');\n            keyboardKey.element.classList.add('altRight');\n          } else if (key[1].code === 'ArrowLeft') {\n            keyboardKey.element.classList.remove('keyboard-key');\n            keyboardKey.element.classList.add('left');\n            keyboardKey.element.innerHTML = '\\t&#8592;';\n            keyboardKey.element.addEventListener('click', function (e) {\n              e.preventDefault();\n              _this.output.element.value += '→';\n            });\n          } else if (key[1].code === 'ArrowRight') {\n            keyboardKey.element.classList.remove('keyboard-key');\n            keyboardKey.element.classList.add('right');\n            keyboardKey.element.innerHTML = '&#8594;';\n            keyboardKey.element.addEventListener('click', function (e) {\n              e.preventDefault();\n              _this.output.element.value += '←';\n            });\n          } else if (key[1].code === 'ArrowUp') {\n            keyboardKey.element.classList.remove('keyboard-key');\n            keyboardKey.element.classList.add('up');\n            keyboardKey.element.innerHTML = '&#8593;';\n            keyboardKey.element.addEventListener('click', function (e) {\n              e.preventDefault();\n              _this.output.element.value += '↑';\n            });\n          } else if (key[1].code === 'ArrowDown') {\n            keyboardKey.element.classList.remove('keyboard-key');\n            keyboardKey.element.classList.add('down');\n            keyboardKey.element.innerHTML = '\\t&#8595;';\n            keyboardKey.element.addEventListener('click', function (e) {\n              e.preventDefault();\n              _this.output.element.value += '↓';\n            });\n          } else if (key[1].code === 'Tab') {\n            keyboardKey.element.classList.remove('keyboard-key');\n            keyboardKey.element.classList.add('tab');\n            keyboardKey.element.addEventListener('click', function (e) {\n              e.preventDefault();\n              _this.output.element.value += '\\t';\n\n              _this.output.element.focus();\n            });\n          }\n        });\n      });\n    }\n  }, {\n    key: \"evtHandlerOnKey\",\n    value: function evtHandlerOnKey() {\n      var _this2 = this;\n\n      var keys = this.keyboard.element.querySelectorAll('.keyboard-key');\n      keys.forEach(function (key) {\n        key.addEventListener('click', function (e) {\n          e.preventDefault();\n          _this2.output.element.value += key.innerHTML;\n\n          _this2.output.element.focus();\n        });\n      });\n    }\n  }, {\n    key: \"eventMouse\",\n    value: function eventMouse() {\n      var keys = this.keyboard.element.querySelectorAll('.keyboard-key');\n      keys.forEach(function (key) {\n        key.addEventListener('mousedown', function (e) {\n          e.preventDefault();\n          key.classList.add('active');\n        });\n        key.addEventListener('mouseup', function (e) {\n          e.preventDefault();\n          key.classList.remove('active');\n        });\n      });\n    }\n  }, {\n    key: \"eventKeysPress\",\n    value: function eventKeysPress() {\n      function keyPressed(e) {\n        var key = document.querySelector(\".keyboard-key[data-key=\\\"\".concat(e.code, \"\\\"]\")); // console.log(key)\n\n        if (key) {\n          key.classList.add('active');\n          this.output.element.value += key.innerHTML;\n          this.output.element.focus();\n        }\n      }\n\n      function keyReleased(e) {\n        var key = document.querySelector(\".keyboard-key[data-key=\\\"\".concat(e.code, \"\\\"]\"));\n\n        if (key) {\n          key.classList.remove('active');\n        }\n\n        this.output.element.focus();\n      }\n\n      document.addEventListener('keydown', keyPressed.bind(this));\n      document.addEventListener('keyup', keyReleased.bind(this));\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      this.keyboardLayout();\n      this.engKeyboardLayout();\n      this.evtHandlerOnKey();\n      this.eventMouse();\n      this.eventKeysPress();\n    }\n  }]);\n\n  return Keyboard;\n}(wrapper);\n\n\n;// CONCATENATED MODULE: ./js/index.js\n\n\nnew Keyboard().render(); // const arr = []\n// document.addEventListener('keydown', (e) => {\n//   arr.push(e.code)\n//   console.log(arr)\n// })\n\n//# sourceURL=webpack:///./js/index.js_+_6_modules?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [202], () => (__webpack_exec__(1202), __webpack_exec__(9878)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);