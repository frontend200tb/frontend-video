/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_footer.scss */ "./src/components/footer/_footer.scss");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Footer = /*#__PURE__*/function (_HTMLElement) {
  _inherits(Footer, _HTMLElement);
  var _super = _createSuper(Footer);
  function Footer() {
    _classCallCheck(this, Footer);
    return _super.call(this);
  }
  _createClass(Footer, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.innerHTML = "\n    <footer class=\"footer container\">\n      <div class=\"footer__logo\">200TERABYTE WEB STUDIO</div>\n    </footer>\n    ";
    }
  }]);
  return Footer;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('footer-component', Footer);

/***/ }),

/***/ "./src/components/front-video/_front-video.js":
/*!****************************************************!*\
  !*** ./src/components/front-video/_front-video.js ***!
  \****************************************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var FrontVideo = /*#__PURE__*/function (_HTMLElement) {
  _inherits(FrontVideo, _HTMLElement);
  var _super = _createSuper(FrontVideo);
  function FrontVideo() {
    _classCallCheck(this, FrontVideo);
    return _super.call(this);
  }
  _createClass(FrontVideo, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.innerHTML = "\n    <div class=\"front-video\" id=\"front-video\">\n      <nav class=\"nav container\" id=\"main-nav\"></nav>\n\n      <h1>\u041C\u043E\u044F \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 frontend \u0432\u0438\u0434\u0435\u043E</h1>\n\n      <section class=\"col2 container\">\n        <aside class=\"aside\"></aside>\n        <main class=\"content video\">\n          <h2></h2>\n          <div class=\"about-theme\"></div>\n          <ol id=\"video\"></ol>\n        </main>\n      </section>\n    </div>\n    ";
    }
  }]);
  return FrontVideo;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('front-video', FrontVideo);

/***/ }),

/***/ "./src/components/front-video/js/create-data.js":
/*!******************************************************!*\
  !*** ./src/components/front-video/js/create-data.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataVideo": () => (/* binding */ dataVideo),
/* harmony export */   "learnedVideo": () => (/* binding */ learnedVideo)
/* harmony export */ });
/* harmony import */ var _data_video_data_video_1cbitrix_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-video/data-video-1cbitrix.js */ "./src/components/front-video/js/data-video/data-video-1cbitrix.js");
/* harmony import */ var _data_video_data_video_angular_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-video/data-video-angular.js */ "./src/components/front-video/js/data-video/data-video-angular.js");
/* harmony import */ var _data_video_data_video_bem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-video/data-video-bem.js */ "./src/components/front-video/js/data-video/data-video-bem.js");
/* harmony import */ var _data_video_data_video_bootstrap_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-video/data-video-bootstrap.js */ "./src/components/front-video/js/data-video/data-video-bootstrap.js");
/* harmony import */ var _data_video_data_video_docker_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data-video/data-video-docker.js */ "./src/components/front-video/js/data-video/data-video-docker.js");
/* harmony import */ var _data_video_data_video_drupal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data-video/data-video-drupal.js */ "./src/components/front-video/js/data-video/data-video-drupal.js");
/* harmony import */ var _data_video_data_video_electron_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data-video/data-video-electron.js */ "./src/components/front-video/js/data-video/data-video-electron.js");
/* harmony import */ var _data_video_data_video_figma_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data-video/data-video-figma.js */ "./src/components/front-video/js/data-video/data-video-figma.js");
/* harmony import */ var _data_video_data_video_freelance_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data-video/data-video-freelance.js */ "./src/components/front-video/js/data-video/data-video-freelance.js");
/* harmony import */ var _data_video_data_video_frontend_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./data-video/data-video-frontend.js */ "./src/components/front-video/js/data-video/data-video-frontend.js");
/* harmony import */ var _data_video_data_video_git_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data-video/data-video-git.js */ "./src/components/front-video/js/data-video/data-video-git.js");
/* harmony import */ var _data_video_data_video_gulp_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./data-video/data-video-gulp.js */ "./src/components/front-video/js/data-video/data-video-gulp.js");
/* harmony import */ var _data_video_data_video_htmlcss_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./data-video/data-video-htmlcss.js */ "./src/components/front-video/js/data-video/data-video-htmlcss.js");
/* harmony import */ var _data_video_data_video_js_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./data-video/data-video-js.js */ "./src/components/front-video/js/data-video/data-video-js.js");
/* harmony import */ var _data_video_data_video_joomla_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./data-video/data-video-joomla.js */ "./src/components/front-video/js/data-video/data-video-joomla.js");
/* harmony import */ var _data_video_data_video_json_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./data-video/data-video-json.js */ "./src/components/front-video/js/data-video/data-video-json.js");
/* harmony import */ var _data_video_data_video_nuxt_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./data-video/data-video-nuxt.js */ "./src/components/front-video/js/data-video/data-video-nuxt.js");
/* harmony import */ var _data_video_data_video_opencart_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./data-video/data-video-opencart.js */ "./src/components/front-video/js/data-video/data-video-opencart.js");
/* harmony import */ var _data_video_data_video_pug_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./data-video/data-video-pug.js */ "./src/components/front-video/js/data-video/data-video-pug.js");
/* harmony import */ var _data_video_data_video_react_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./data-video/data-video-react.js */ "./src/components/front-video/js/data-video/data-video-react.js");
/* harmony import */ var _data_video_data_video_redux_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./data-video/data-video-redux.js */ "./src/components/front-video/js/data-video/data-video-redux.js");
/* harmony import */ var _data_video_data_video_sass_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./data-video/data-video-sass.js */ "./src/components/front-video/js/data-video/data-video-sass.js");
/* harmony import */ var _data_video_data_video_tilda_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./data-video/data-video-tilda.js */ "./src/components/front-video/js/data-video/data-video-tilda.js");
/* harmony import */ var _data_video_data_video_ts_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./data-video/data-video-ts.js */ "./src/components/front-video/js/data-video/data-video-ts.js");
/* harmony import */ var _data_video_data_video_vscode_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./data-video/data-video-vscode.js */ "./src/components/front-video/js/data-video/data-video-vscode.js");
/* harmony import */ var _data_video_data_video_vue_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./data-video/data-video-vue.js */ "./src/components/front-video/js/data-video/data-video-vue.js");
/* harmony import */ var _data_video_data_video_web_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./data-video/data-video-web.js */ "./src/components/front-video/js/data-video/data-video-web.js");
/* harmony import */ var _data_video_data_video_webpack_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./data-video/data-video-webpack.js */ "./src/components/front-video/js/data-video/data-video-webpack.js");
/* harmony import */ var _data_video_data_video_wp_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./data-video/data-video-wp.js */ "./src/components/front-video/js/data-video/data-video-wp.js");
/* harmony import */ var _data_video_data_video_yii2_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./data-video/data-video-yii2.js */ "./src/components/front-video/js/data-video/data-video-yii2.js");
var _ref;
/*****************
Функция createData возвращает объект dataVideo и массив learnedVideo
*****************/
/*
Алгоритм работы
1. Импортируем массивы из файлов data-video.js ...
2. Создаем массив dataArray для импортированных массивов
3. Создаем массив с видеокурсами dataArrayVideo из массива dataArray
4. Создаем объект result
5. Создаем массив resultLearned
6. Проходим по массиву dataArrayVideo
7. Создаем массив category
8. Создаем массив theme для каждого элемента массива category
9. Создаем массив видеокурсов для каждого элемента массива theme
10. Если видеокурс имеет свойство learned === true, то добавляем еге в массив resultLearned
11. Возвращаем объект dataVideo и массив learnedVideo
*/

//1. Импортируем массивы из файлов data-video.js ...































//2. Создаем массив dataArray для импортированных массивов
var dataArray = [_data_video_data_video_htmlcss_js__WEBPACK_IMPORTED_MODULE_12__.dataVideoHtmlcss, _data_video_data_video_1cbitrix_js__WEBPACK_IMPORTED_MODULE_0__.dataVideo1cbitrix, _data_video_data_video_angular_js__WEBPACK_IMPORTED_MODULE_1__.dataVideoAngular, _data_video_data_video_bem_js__WEBPACK_IMPORTED_MODULE_2__.dataVideoBem, _data_video_data_video_bootstrap_js__WEBPACK_IMPORTED_MODULE_3__.dataVideoBootstrap, _data_video_data_video_docker_js__WEBPACK_IMPORTED_MODULE_4__.dataVideoDocker, _data_video_data_video_drupal_js__WEBPACK_IMPORTED_MODULE_5__.dataVideoDrupal, _data_video_data_video_electron_js__WEBPACK_IMPORTED_MODULE_6__.dataVideoElectron, _data_video_data_video_figma_js__WEBPACK_IMPORTED_MODULE_7__.dataVideoFigma, _data_video_data_video_freelance_js__WEBPACK_IMPORTED_MODULE_8__.dataVideoFreelance, _data_video_data_video_frontend_js__WEBPACK_IMPORTED_MODULE_9__.dataVideoFrontend, _data_video_data_video_git_js__WEBPACK_IMPORTED_MODULE_10__.dataVideoGit, _data_video_data_video_gulp_js__WEBPACK_IMPORTED_MODULE_11__.dataVideoGulp, _data_video_data_video_js_js__WEBPACK_IMPORTED_MODULE_13__.dataVideoJs, _data_video_data_video_joomla_js__WEBPACK_IMPORTED_MODULE_14__.dataVideoJoomla, _data_video_data_video_json_js__WEBPACK_IMPORTED_MODULE_15__.dataVideoJson, _data_video_data_video_nuxt_js__WEBPACK_IMPORTED_MODULE_16__.dataVideoNuxt, _data_video_data_video_opencart_js__WEBPACK_IMPORTED_MODULE_17__.dataVideoOpencart, _data_video_data_video_pug_js__WEBPACK_IMPORTED_MODULE_18__.dataVideoPug, _data_video_data_video_react_js__WEBPACK_IMPORTED_MODULE_19__.dataVideoReact, _data_video_data_video_redux_js__WEBPACK_IMPORTED_MODULE_20__.dataVideoRedux, _data_video_data_video_sass_js__WEBPACK_IMPORTED_MODULE_21__.dataVideoSass, _data_video_data_video_tilda_js__WEBPACK_IMPORTED_MODULE_22__.dataVideoTilda, _data_video_data_video_ts_js__WEBPACK_IMPORTED_MODULE_23__.dataVideoTs, _data_video_data_video_vscode_js__WEBPACK_IMPORTED_MODULE_24__.dataVideoVscode, _data_video_data_video_vue_js__WEBPACK_IMPORTED_MODULE_25__.dataVideoVue, _data_video_data_video_web_js__WEBPACK_IMPORTED_MODULE_26__.dataVideoWeb, _data_video_data_video_webpack_js__WEBPACK_IMPORTED_MODULE_27__.dataVideoWebpack, _data_video_data_video_wp_js__WEBPACK_IMPORTED_MODULE_28__.dataVideoWp, _data_video_data_video_yii2_js__WEBPACK_IMPORTED_MODULE_29__.dataVideoYii2];

//3. Создаем массив с видеокурсами dataArrayVideo из массива dataArray
var dataArrayVideo = (_ref = []).concat.apply(_ref, dataArray);

//4. Создаем объект result
var result = {};
//5. Создаем массив resultLearned
var resultLearned = [];

//6. Проходим по массиву dataArrayVideo
dataArrayVideo.forEach(function (elem) {
  //7. Создаем массив category
  if (elem.category && !(elem.category in result)) {
    result[elem.category] = {};
  }

  //8. Создаем массив theme для каждого элемента массива category
  if (elem.theme && !(elem.theme in result[elem.category])) {
    result[elem.category][elem.theme] = [];
  }

  //9. Создаем массив видеокурсов для каждого элемента массива theme
  if (elem.category && elem.theme) {
    result[elem.category][elem.theme].push(elem);
  }

  //10. Если видеокурс имеет свойство isLearned === true, то добавляем его в массив resultLearned
  if (elem.isLearned === true) {
    resultLearned.push(elem);
  }
});
var dataVideo = result;
var learnedVideo = resultLearned;

//11. Возвращаем объект dataVideo и массив learnedVideo


/***/ }),

/***/ "./src/components/front-video/js/create-learned-list.js":
/*!**************************************************************!*\
  !*** ./src/components/front-video/js/create-learned-list.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLearnedList": () => (/* binding */ createLearnedList)
/* harmony export */ });
/*****************
Функция createLearnedList возвращает список элементов li с просмотренными видеокурсами для элемента Learned меню
*****************/
/*
Алгоритм работы
1. Функция createLearnedList принимает массив просмотренных видеокурсов
2. Отсортируем видеокурсы по дате просмотра
3. Создаем массив parentDiv для элементов li списка
4. Создадим элемент elementLi списка видеокурсов
5. Добавим элемент elementLi в массив parentDiv для элементов li списка
*/

//1. Функция createLearnedList принимает массив просмотренных видеокурсов
function createLearnedList(data) {
  //2. Отсортируем видеокурсы по дате просмотра
  data.sort(function (a, b) {
    //удалить всё, кроме цифр
    return a.dateLearned.replace(/[^0-9]/gi, '') - b.dateLearned.replace(/[^0-9]/gi, '');
  });

  //3. Создаем массив parentDiv для элементов li списка
  var parentDiv = [];
  var _loop = function _loop(i) {
    //4. Создадим элемент elementLi списка видеокурсов
    var elementLi = document.createElement('li');
    elementLi.addEventListener('mouseover', addColor);
    elementLi.addEventListener('mouseout', removeColor);
    elementLi.innerHTML = "\n    <span>".concat(data[i].dateLearned, "</span>\n    <div><strong>[").concat(data[i].year, "] ").concat(data[i].title, "</strong></div>\n    <div><em>").concat(data[i].name, " ").concat(data[i].author, "</em></div>\n    <div>").concat(data[i].numberLessons, " \u0412\u0440\u0435\u043C\u044F ").concat(data[i].time, " \u0420\u0430\u0437\u043C\u0435\u0440 ").concat(data[i].size, "</div>\n    <div>\u0418\u0437\u0443\u0447\u0435\u043D\u043E ").concat(data[i].isLearned, "</div>");

    //5. Добавим элемент elementLi в массив parentDiv для элементов li списка
    parentDiv.push(elementLi);
    function origin(book) {
      if (book.origin) {
        return "(\n        <strong>".concat(book.origin.title, "</strong>\n        - <em>").concat(book.origin.author, "</em>\n        )");
      } else {
        return '';
      }
    }
    function addColor() {
      elementLi.classList.add('over');
    }
    function removeColor() {
      elementLi.classList.remove('over');
    }
  };
  for (var i = 0; i < data.length; i++) {
    _loop(i);
  }
  return parentDiv;
}

/***/ }),

/***/ "./src/components/front-video/js/create-list.js":
/*!******************************************************!*\
  !*** ./src/components/front-video/js/create-list.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createList": () => (/* binding */ createList)
/* harmony export */ });
/* harmony import */ var _sort_video_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sort-video.js */ "./src/components/front-video/js/sort-video.js");
/*****************
Функция createList возвращает список элементов li с видео курсами для элемента aside меню
*****************/
/*
Алгоритм работы
1. Функция createList принимает массив курсов по одной теме
2. Отсортируем курсы по дате и названию
3. Создаем массив parentDiv для элементов li списка
4. Создадим элемент elementLi списка курсов
5. Добавим элемент elementLi в массив parentDiv для элементов li списка
*/



//1. Функция createList принимает массив курсов по одной теме
function createList(data) {
  //2. Отсортируем курсы по названию
  data = (0,_sort_video_js__WEBPACK_IMPORTED_MODULE_0__.sortVideo)(data);

  //3. Создаем массив parentDiv для элементов li списка
  var parentDiv = [];
  var _loop = function _loop(i) {
    //4. Создадим элемент elementLi списка курсов
    var elementLi = document.createElement('li');
    elementLi.addEventListener('mouseover', addColor);
    elementLi.addEventListener('mouseout', removeColor);
    elementLi.innerHTML = "\n    <strong>[".concat(data[i].year, "] ").concat(data[i].title, "</strong>\n    <div>").concat(data[i].name, " ").concat(data[i].author, "</div>\n    <div>").concat(data[i].numberLessons, " \u0412\u0440\u0435\u043C\u044F ").concat(data[i].time, " \u0420\u0430\u0437\u043C\u0435\u0440 ").concat(data[i].size, "</div>\n    <div>\u0418\u0437\u0443\u0447\u0435\u043D\u043E ").concat(data[i].isLearned, "</div>");

    //5. Добавим элемент elementLi в массив parentDiv для элементов li списка
    parentDiv.push(elementLi);
    function addColor() {
      elementLi.classList.add('over');
    }
    function removeColor() {
      elementLi.classList.remove('over');
    }
  };
  for (var i = 0; i < data.length; i++) {
    _loop(i);
  }
  return parentDiv;
}

/***/ }),

/***/ "./src/components/front-video/js/data-video/data-video-1cbitrix.js":
/*!*************************************************************************!*\
  !*** ./src/components/front-video/js/data-video/data-video-1cbitrix.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataVideo1cbitrix": () => (/* binding */ dataVideo1cbitrix)
/* harmony export */ });
var dataVideo1cbitrix = [{
  "id": 1,
  "year": 2013,
  "date": "",
  "category": "cms",
  "theme": "1cbitrix",
  "title": "Создание сайта на 1С Битрикс с нуля",
  "author": "Михаил Базаров",
  "name": "camouf.ru",
  "numberLessons": "14 уроков",
  "time": "6ч 23м",
  "size": "4.8 gb",
  "isLearned": true,
  "dateLearned": "2021-06-11 пт"
}, {
  "id": 2,
  "year": 2018,
  "date": "",
  "category": "cms",
  "theme": "1cbitrix",
  "title": "1С-Битрикс",
  "author": "Андрей Кудлай",
  "name": "WebForMySelf",
  "numberLessons": "",
  "time": "38ч 38м",
  "size": "8.2 gb",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-video/js/data-video/data-video-angular.js":
/*!************************************************************************!*\
  !*** ./src/components/front-video/js/data-video/data-video-angular.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataVideoAngular": () => (/* binding */ dataVideoAngular)
/* harmony export */ });
var dataVideoAngular = [{
  "id": 1,
  "year": 2017,
  "date": "",
  "category": "framework",
  "theme": "angular",
  "title": "Видеокурс по Angular",
  "author": "Евгений Попов",
  "name": "Eugene Popov",
  "numberLessons": "5 уроков",
  "time": "1ч 13м",
  "size": "146 mb",
  "isLearned": true,
  "dateLearned": "2022-03-19 сб"
}, {
  "id": 2,
  "year": 2017,
  "date": "",
  "category": "framework",
  "theme": "angular",
  "title": "1 Angular CLI",
  "author": "Дмитрий Охрименко",
  "name": "ITVDN",
  "numberLessons": "5 уроков",
  "time": "1ч 31м",
  "size": "327 mb",
  "isLearned": true,
  "dateLearned": "2022-03-19 сб"
}, {
  "id": 3,
  "year": 2017,
  "date": "",
  "category": "framework",
  "theme": "angular",
  "title": "2 Angular 2 Essential",
  "author": "Дмитрий Охрименко",
  "name": "ITVDN",
  "numberLessons": "7 уроков",
  "time": "9ч 46м",
  "size": "2.6 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 4,
  "year": 2017,
  "date": "",
  "category": "framework",
  "theme": "angular",
  "title": "3 Angular 2 Advanced",
  "author": "Дмитрий Охрименко",
  "name": "ITVDN",
  "numberLessons": "5 уроков",
  "time": "5ч 9м",
  "size": "1.3 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 5,
  "year": 2017,
  "date": "",
  "category": "framework",
  "theme": "angular",
  "title": "Angular 4 с Нуля до Профи",
  "author": "Владилен Минин",
  "name": "WebForMySelf",
  "numberLessons": "",
  "time": "30ч",
  "size": "5 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 6,
  "year": 2018,
  "date": "",
  "category": "framework",
  "theme": "angular",
  "title": "Уроки Angular для начинающих",
  "author": "Гоша Дударь",
  "name": "",
  "numberLessons": "7 уроков",
  "time": "1ч 21м",
  "size": "156 mb",
  "isLearned": true,
  "dateLearned": "2022-03-19 сб"
}, {
  "id": 7,
  "year": 2018,
  "date": "",
  "category": "framework",
  "theme": "angular",
  "title": "Angular 5",
  "author": "Дмитрий Кузюбердин",
  "name": "",
  "numberLessons": "2 урока",
  "time": "1ч 19м",
  "size": "235 mb",
  "isLearned": true,
  "dateLearned": "2022-03-19 сб"
}, {
  "id": 8,
  "year": 2018,
  "date": "",
  "category": "framework",
  "theme": "angular",
  "title": "Продвинутый курс по Angular",
  "author": "Степан Суворов",
  "name": "javascript.ru",
  "numberLessons": "",
  "time": "13ч 29м",
  "size": "4.1 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 9,
  "year": 2018,
  "date": "",
  "category": "framework",
  "theme": "angular",
  "title": "Angular Component Interaction Tutorial",
  "author": "",
  "name": "Codevolution",
  "numberLessons": "12 уроков",
  "time": "52м",
  "size": "97 mb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 10,
  "year": 2018,
  "date": "",
  "category": "framework",
  "theme": "angular",
  "title": "Angular",
  "author": "Максим Коноплин",
  "name": "Easy Web",
  "numberLessons": "10 уроков",
  "time": "1ч 25м",
  "size": "456 mb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 11,
  "year": 2018,
  "date": "",
  "category": "framework",
  "theme": "angular",
  "title": "Пятиминутка Angular",
  "author": "Алексей Охрименко",
  "name": "",
  "numberLessons": "13 уроков",
  "time": "2ч 8м",
  "size": "523 mb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 12,
  "year": 2018,
  "date": "",
  "category": "framework",
  "theme": "angular",
  "title": "Введение в Angular. Часть 1 Angular 5",
  "author": "",
  "name": "Как Стать Хорошим Программистом",
  "numberLessons": "13 уроков",
  "time": "1ч 28м",
  "size": "547 mb",
  "isLearned": true,
  "dateLearned": "2022-03-28 пн"
}, {
  "id": 13,
  "year": 2018,
  "date": "",
  "category": "framework",
  "theme": "angular",
  "title": "Введение в Angular. Часть 2 Angular 6",
  "author": "",
  "name": "Как Стать Хорошим Программистом",
  "numberLessons": "6 уроков",
  "time": "2ч 23м",
  "size": "850 mb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 14,
  "year": 2018,
  "date": "2018-07-02",
  "category": "framework",
  "theme": "angular",
  "title": "Dependency Injection в Angular",
  "author": "",
  "name": "OTUS",
  "numberLessons": "1 урок",
  "time": "1ч 29м",
  "size": "126 mb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 15,
  "year": 2019,
  "date": "",
  "category": "framework",
  "theme": "angular",
  "title": "4 Создание адаптивного SPA с Angular",
  "author": "Сергей Патеха",
  "name": "ITVDN",
  "numberLessons": "7 уроков",
  "time": "6ч 10м",
  "size": "1.3 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 16,
  "year": 2019,
  "date": "",
  "category": "framework",
  "theme": "angular",
  "title": "Интенсив по на Angular",
  "author": "Степан Суворов",
  "name": "javascript.ru",
  "numberLessons": "",
  "time": "8ч 35м",
  "size": "1 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 17,
  "year": 2019,
  "date": "",
  "category": "framework",
  "theme": "angular",
  "title": "Angular 7 c Нуля до Профи",
  "author": "Владилен Минин",
  "name": "Udemy",
  "numberLessons": "",
  "time": "39ч",
  "size": "20 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 18,
  "year": 2019,
  "date": "2019-11-17",
  "category": "framework",
  "theme": "angular",
  "title": "Angular NGRX за час",
  "author": "Максим Гром",
  "name": "",
  "numberLessons": "1 урок",
  "time": "1ч 2м",
  "size": "162 mb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 19,
  "year": 2020,
  "date": "",
  "category": "framework",
  "theme": "angular",
  "title": "Фреймворк Angular",
  "author": "Виктор Гавриленко",
  "name": "WebForMySelf",
  "numberLessons": "2 урока",
  "time": "1ч 19м",
  "size": "173 mb",
  "isLearned": true,
  "dateLearned": "2022-07-25 пн"
}, {
  "id": 20,
  "year": 2020,
  "date": "",
  "category": "framework",
  "theme": "angular",
  "title": "Божественный курс по Angular",
  "author": "",
  "name": "Фронтенд Паштет",
  "numberLessons": "5 уроков",
  "time": "1ч 16м",
  "size": "173 mb",
  "isLearned": true,
  "dateLearned": "2022-07-25 пн"
}, {
  "id": 21,
  "year": 2020,
  "date": "",
  "category": "framework",
  "theme": "angular",
  "title": "Angular для начинающих",
  "author": "Михаил Павлов",
  "name": "D2D",
  "numberLessons": "10 уроков",
  "time": "8ч 36м",
  "size": "1.7 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 22,
  "year": 2020,
  "date": "",
  "category": "framework",
  "theme": "angular",
  "title": "Курс по Angular",
  "author": "Игорь Непипенко",
  "name": "javascript.ru",
  "numberLessons": "11 уроков",
  "time": "21ч",
  "size": "1.9 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 23,
  "year": 2020,
  "date": "",
  "category": "framework",
  "theme": "angular",
  "title": "Angular",
  "author": "",
  "name": "Tartem School",
  "numberLessons": "20 уроков",
  "time": "3ч 21м",
  "size": "454 mb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 24,
  "year": 2020,
  "date": "",
  "category": "framework",
  "theme": "angular",
  "title": "Angular 9. Интернет Магазин",
  "author": "Доминик Кузьмицкий",
  "name": "Udemy",
  "numberLessons": "",
  "time": "3ч 47м",
  "size": "3.7 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 25,
  "year": 2020,
  "date": "",
  "category": "framework",
  "theme": "angular",
  "title": "Angular 9. Теория и Практика",
  "author": "Владилен Минин",
  "name": "Udemy",
  "numberLessons": "",
  "time": "17ч 34м",
  "size": "8.2 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 26,
  "year": 2020,
  "date": "",
  "category": "framework",
  "theme": "angular",
  "title": "Angular для начинающих",
  "author": "Тимур Батыршинов",
  "name": "Udemy",
  "numberLessons": "",
  "time": "15ч 30м",
  "size": "12 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 27,
  "year": 2020,
  "date": "",
  "category": "framework",
  "theme": "angular",
  "title": "Angular и NgRx",
  "author": "",
  "name": "Udemy",
  "numberLessons": "47 уроков",
  "time": "4ч 30м",
  "size": "5.3 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 28,
  "year": 2021,
  "date": "",
  "category": "framework",
  "theme": "angular",
  "title": "Angular",
  "author": "Алексей Соловей",
  "name": "N-code",
  "numberLessons": "7 уроков",
  "time": "6ч 6м",
  "size": "1 gb",
  "isLearned": true,
  "dateLearned": "2022-04-13 ср"
}, {
  "id": 29,
  "year": 2021,
  "date": "",
  "category": "framework",
  "theme": "angular",
  "title": "Advanced Angular",
  "author": "Михаил Павлов",
  "name": "D2D",
  "numberLessons": "2 урока",
  "time": "1ч 54м",
  "size": "438 mb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 30,
  "year": 2021,
  "date": "",
  "category": "framework",
  "theme": "angular",
  "title": "Angular",
  "author": "",
  "name": "ngRuAir",
  "numberLessons": "20 уроков",
  "time": "24ч",
  "size": "7.8 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 31,
  "year": 2021,
  "date": "",
  "category": "framework",
  "theme": "angular",
  "title": "RS School Angular Basics",
  "author": "Антон Белый",
  "name": "",
  "numberLessons": "11 уроков",
  "time": "1ч 43м",
  "size": "184 mb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 32,
  "year": 2021,
  "date": "",
  "category": "framework",
  "theme": "angular",
  "title": "Техническое собеседование на front-end разработчика (Angular)",
  "author": "",
  "name": "IT свитчер",
  "numberLessons": "1 урок",
  "time": "52м",
  "size": "328 mb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 33,
  "year": 2021,
  "date": "",
  "category": "framework",
  "theme": "angular",
  "title": "Собеседование JUNIOR FRONTEND ANGULAR разработчика. Александр 53 года",
  "author": "",
  "name": "wise.js",
  "numberLessons": "1 урок",
  "time": "1ч 33м",
  "size": "221 mb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 34,
  "year": 2021,
  "date": "",
  "category": "framework",
  "theme": "angular",
  "title": "ANGULAR - САМЫЙ ПОПУЛЯРНЫЙ JS-фреймворк _ Бета-разработчик _ Интервью с Глебом М",
  "author": "Алексей Картынник",
  "name": "АйТиБорода",
  "numberLessons": "1 урок",
  "time": "1ч 53м",
  "size": "1.1 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 35,
  "year": 2021,
  "date": "",
  "category": "framework",
  "theme": "angular",
  "title": "Почему Angular",
  "author": "Александр Желнин",
  "name": "",
  "numberLessons": "1 урок",
  "time": "18м",
  "size": "44 mb",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-video/js/data-video/data-video-bem.js":
/*!********************************************************************!*\
  !*** ./src/components/front-video/js/data-video/data-video-bem.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataVideoBem": () => (/* binding */ dataVideoBem)
/* harmony export */ });
var dataVideoBem = [{
  "id": 1,
  "year": 2016,
  "date": "",
  "category": "other",
  "theme": "bem",
  "title": "БЭМ-платформа",
  "author": "Владимир Гриненко",
  "name": "frontend-science",
  "numberLessons": "",
  "time": "5ч 50м",
  "size": "1.7 gb",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-video/js/data-video/data-video-bootstrap.js":
/*!**************************************************************************!*\
  !*** ./src/components/front-video/js/data-video/data-video-bootstrap.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataVideoBootstrap": () => (/* binding */ dataVideoBootstrap)
/* harmony export */ });
var dataVideoBootstrap = [{
  "id": 1,
  "year": 2014,
  "date": "",
  "category": "library",
  "theme": "bootstrap",
  "title": "Bootstrap 3 Добавь интерактивности на свой сайт",
  "author": "Jen Kramer",
  "name": "Lynda.com",
  "numberLessons": "5 уроков",
  "time": "1ч 56м",
  "size": "0.4 gb",
  "isLearned": true,
  "dateLearned": "2021-07-19 пн"
}, {
  "id": 2,
  "year": 2015,
  "date": "",
  "category": "library",
  "theme": "bootstrap",
  "title": "Курс Bootstrap",
  "author": "Сергей Никонов",
  "name": "wh-db.com",
  "numberLessons": "8 уроков",
  "time": "3ч 31м",
  "size": "1.2 gb",
  "isLearned": true,
  "dateLearned": "2021-08-14 сб"
}, {
  "id": 3,
  "year": 2016,
  "date": "",
  "category": "library",
  "theme": "bootstrap",
  "title": "Фреймворк Bootstrap от А до Я",
  "author": "Андрей Кудлай",
  "name": "WebForMyself",
  "numberLessons": "",
  "time": "24ч 44м",
  "size": "6 gb",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-video/js/data-video/data-video-docker.js":
/*!***********************************************************************!*\
  !*** ./src/components/front-video/js/data-video/data-video-docker.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataVideoDocker": () => (/* binding */ dataVideoDocker)
/* harmony export */ });
var dataVideoDocker = [{
  "id": 1,
  "year": 2019,
  "date": "",
  "category": "other",
  "theme": "docker",
  "title": "Продвинутый видеокурс по Docker",
  "author": "",
  "name": "Lectrum",
  "numberLessons": "",
  "time": "12ч 50м",
  "size": "2.3 gb",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-video/js/data-video/data-video-drupal.js":
/*!***********************************************************************!*\
  !*** ./src/components/front-video/js/data-video/data-video-drupal.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataVideoDrupal": () => (/* binding */ dataVideoDrupal)
/* harmony export */ });
var dataVideoDrupal = [{
  "id": 1,
  "year": 2017,
  "date": "",
  "category": "cms",
  "theme": "drupal",
  "title": "Drupal Основы",
  "author": "Виктор Гавриленко",
  "name": "WebForMySelf",
  "numberLessons": "",
  "time": "6ч 30м",
  "size": "0.8 gb",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-video/js/data-video/data-video-electron.js":
/*!*************************************************************************!*\
  !*** ./src/components/front-video/js/data-video/data-video-electron.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataVideoElectron": () => (/* binding */ dataVideoElectron)
/* harmony export */ });
var dataVideoElectron = [{
  "id": 1,
  "year": 2019,
  "date": "2019-03-23",
  "category": "framework",
  "theme": "electron",
  "title": "Создание ПК программы на JavaScript  за 20 минут! Библиотека Electron JS",
  "author": "Гоша Дударь",
  "name": "",
  "numberLessons": "",
  "time": "22м",
  "size": "33 mb",
  "isLearned": true,
  "dateLearned": "2023-01-20 пт"
}, {
  "id": 2,
  "year": 2021,
  "date": "2021-03-18",
  "category": "framework",
  "theme": "electron",
  "title": "Electron. Как работает самый современный desktop framework",
  "author": "Алексей Голубев",
  "name": "itvdn",
  "numberLessons": "",
  "time": "1ч 19м",
  "size": "175 mb",
  "isLearned": true,
  "dateLearned": "2023-01-27 пт"
}, {
  "about": "The Electron framework lets you write cross-platform desktop applications using JavaScript, HTML and CSS. It is based on Node.js and Chromium and is used by the Atom editor and many other apps."
}];

/***/ }),

/***/ "./src/components/front-video/js/data-video/data-video-figma.js":
/*!**********************************************************************!*\
  !*** ./src/components/front-video/js/data-video/data-video-figma.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataVideoFigma": () => (/* binding */ dataVideoFigma)
/* harmony export */ });
var dataVideoFigma = [{
  "id": 1,
  "year": 2019,
  "date": "",
  "category": "other",
  "theme": "figma",
  "title": "Figma 3.0 для дизайнера",
  "author": "Антон Рыбаков",
  "name": "Skillbox",
  "numberLessons": "",
  "time": "13ч 40м",
  "size": "6 gb",
  "isLearned": true,
  "dateLearned": "2021-11-23 вт"
}, {}];

/***/ }),

/***/ "./src/components/front-video/js/data-video/data-video-freelance.js":
/*!**************************************************************************!*\
  !*** ./src/components/front-video/js/data-video/data-video-freelance.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataVideoFreelance": () => (/* binding */ dataVideoFreelance)
/* harmony export */ });
var dataVideoFreelance = [{
  "id": 1,
  "year": 2016,
  "date": "",
  "category": "other",
  "theme": "freelance",
  "title": "Доходный фриланс на upwork",
  "author": "Игорь Петрунин",
  "name": "",
  "numberLessons": "",
  "time": "",
  "size": "1.9 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 2,
  "year": 2017,
  "date": "",
  "category": "other",
  "theme": "freelance",
  "title": "Я - фрилансер! Базовый курс для начинающих",
  "author": "",
  "name": "webdesign-master",
  "numberLessons": "",
  "time": "1ч 14м",
  "size": "1.3 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 3,
  "year": 2019,
  "date": "",
  "category": "other",
  "theme": "freelance",
  "title": "Трудоустройство",
  "author": "",
  "name": "Академия верстки",
  "numberLessons": "",
  "time": "7ч 51м",
  "size": "3.2 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 4,
  "year": 2019,
  "date": "",
  "category": "other",
  "theme": "freelance",
  "title": "Руководство по выживанию на фрилансе",
  "author": "Тимур Константинов",
  "name": "",
  "numberLessons": "",
  "time": "1ч 35м",
  "size": "2 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 5,
  "year": 2020,
  "date": "",
  "category": "other",
  "theme": "freelance",
  "title": "Фриланс - Мастер",
  "author": "Евгений Сериков",
  "name": "WebForMySelf",
  "numberLessons": "",
  "time": "8ч 22м",
  "size": "2 gb",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-video/js/data-video/data-video-frontend.js":
/*!*************************************************************************!*\
  !*** ./src/components/front-video/js/data-video/data-video-frontend.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataVideoFrontend": () => (/* binding */ dataVideoFrontend)
/* harmony export */ });
var dataVideoFrontend = [{
  "id": 1,
  "year": 2015,
  "date": "",
  "category": "code",
  "theme": "javascript",
  "title": "Онлайн курсы HTML CSS JavaScript",
  "author": "",
  "name": "GoIT",
  "numberLessons": "",
  "time": "110ч",
  "size": "25.3 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 2,
  "year": 2015,
  "date": "",
  "category": "code",
  "theme": "frontend",
  "title": "2 семестр Фронтенд",
  "author": "Егор Дыдыкин",
  "name": "mail.ru",
  "numberLessons": "",
  "time": "8ч 40м",
  "size": "4.5 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 3,
  "year": 2016,
  "date": "",
  "category": "code",
  "theme": "frontend",
  "title": "Frontend. HTML CSS JavaScript",
  "author": "",
  "name": "GoIT",
  "numberLessons": "",
  "time": "110ч",
  "size": "24.7 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 3,
  "year": 2016,
  "date": "",
  "category": "code",
  "theme": "frontend",
  "title": "Инструменты Front-End разработчика",
  "author": "Андрей Бернацкий",
  "name": "WebForMyself",
  "numberLessons": "",
  "time": "",
  "size": "1.6 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 7,
  "year": 2016,
  "date": "",
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript-разработка. Создаем интерактивные веб-страницы",
  "author": "",
  "name": "Нетология",
  "numberLessons": "",
  "time": "32ч 55м",
  "size": "10.6 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 4,
  "year": 2017,
  "date": "",
  "category": "code",
  "theme": "frontend",
  "title": "2 семестр Фронтенд",
  "author": "Анатолий Остапенко",
  "name": "mail.ru",
  "numberLessons": "",
  "time": "24ч 28м",
  "size": "5.1 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 24,
  "year": 2019,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "Базовый и Продвинутый курс для верстальщиков",
  "author": "Анна Блок",
  "name": "Типичный верстальщик",
  "numberLessons": "",
  "time": "14ч 30м",
  "size": "2.4 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 27,
  "year": 2020,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "Компетенция Верстальщик",
  "author": "Михаил Непомнящий",
  "name": "Udemy",
  "numberLessons": "",
  "time": "20ч 58м",
  "size": "10.2 gb",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-video/js/data-video/data-video-git.js":
/*!********************************************************************!*\
  !*** ./src/components/front-video/js/data-video/data-video-git.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataVideoGit": () => (/* binding */ dataVideoGit)
/* harmony export */ });
var dataVideoGit = [{
  "id": 1,
  "year": 2012,
  "date": "",
  "category": "other",
  "theme": "git",
  "title": "Git обучение основам",
  "author": "Kevin Skoglund",
  "name": "Lynda.com",
  "numberLessons": "14 уроков",
  "time": "6ч 26м",
  "size": "1 gb",
  "isLearned": true,
  "dateLearned": "2021-08-18 ср"
}, {
  "id": 2,
  "year": 2016,
  "date": "",
  "category": "other",
  "theme": "git",
  "title": "Основы использования Git",
  "author": "Александр Пономаренко",
  "name": "ITVDN",
  "numberLessons": "",
  "time": "1ч 2м",
  "size": "0.2 gb",
  "isLearned": true,
  "dateLearned": "2021-12-28 вт"
}, {
  "id": 3,
  "year": 2019,
  "date": "",
  "category": "other",
  "theme": "git",
  "title": "Курс по GIT",
  "author": "Максим Гузив",
  "name": "Udemy",
  "numberLessons": "",
  "time": "3ч 59м",
  "size": "2.2 gb",
  "isLearned": true,
  "dateLearned": "2021-12-28 вт"
}, {
  "id": 4,
  "year": 2019,
  "date": "",
  "category": "other",
  "theme": "git",
  "title": "Git. Полный курс для начинающих",
  "author": "Наиль Алишев",
  "name": "Udemy",
  "numberLessons": "6 уроков",
  "time": "4ч 47м",
  "size": "2 gb",
  "isLearned": true,
  "dateLearned": "2021-12-24 пт"
}, {
  "id": 5,
  "year": 2020,
  "date": "",
  "category": "other",
  "theme": "git",
  "title": "Основы использования Git",
  "author": "Анна Маргина",
  "name": "ITVDN",
  "numberLessons": "6 уроков",
  "time": "2ч 13м",
  "size": "0.5 gb",
  "isLearned": true,
  "dateLearned": "2021-12-20 пн"
}, {
  "id": 6,
  "year": 2021,
  "date": "",
  "category": "other",
  "theme": "git",
  "title": "Курс Git",
  "author": "Илья Кантор",
  "name": "javascript.ru",
  "numberLessons": "",
  "time": "14ч",
  "size": "0.4 gb",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-video/js/data-video/data-video-gulp.js":
/*!*********************************************************************!*\
  !*** ./src/components/front-video/js/data-video/data-video-gulp.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataVideoGulp": () => (/* binding */ dataVideoGulp)
/* harmony export */ });
var dataVideoGulp = [{
  "id": 1,
  "year": 2016,
  "date": "2016-03-10",
  "category": "npm",
  "theme": "gulp",
  "title": "Gulp для самых маленьких - подробное руководство",
  "author": "",
  "name": "WebDesign Master",
  "numberLessons": "1 урок",
  "time": "1ч 42м",
  "size": "481 mb",
  "isLearned": true,
  "dateLearned": "2021-12-28 вт"
}, {
  "id": 2,
  "year": 2017,
  "date": "",
  "category": "npm",
  "theme": "gulp",
  "title": "Собери свою сборку на Gulp 4",
  "author": "Анатолий Саламатин",
  "name": "FrontCoder",
  "numberLessons": "10 уроков",
  "time": "1ч 44м",
  "size": "385 mb",
  "isLearned": true,
  "dateLearned": "2022-01-31 пн"
}, {
  "id": 3,
  "year": 2017,
  "date": "2017-09-30",
  "category": "npm",
  "theme": "gulp",
  "title": "СТРИМ. Gulp для верстальщика",
  "author": "Артеи Исламов",
  "name": "FrontCoder",
  "numberLessons": "1 урок",
  "time": "1ч 1м",
  "size": "119 mb",
  "isLearned": true,
  "dateLearned": "2021-12-28 вт"
}, {
  "id": 4,
  "year": 2018,
  "category": "npm",
  "date": "",
  "theme": "gulp",
  "title": "Gulp Сборка",
  "author": "Юриий Ключевский",
  "name": "Webcademy",
  "numberLessons": "",
  "time": "6ч 14м",
  "size": "6 gb",
  "isLearned": true,
  "dateLearned": "2022-01-19 ср"
}, {
  "id": 5,
  "year": 2018,
  "date": "2018-10-18",
  "category": "npm",
  "theme": "gulp",
  "title": "Gulp 4 - простая сборка проекта для вёрстки и javascript",
  "author": "Дмитрий Лаврик",
  "name": "",
  "numberLessons": "1 урок",
  "time": "1ч 47м",
  "size": "208 mb",
  "isLearned": true,
  "dateLearned": "2021-12-28 вт"
}, {
  "id": 6,
  "year": 2018,
  "date": "2018-11-20",
  "category": "npm",
  "theme": "gulp",
  "title": "Стартовый шаблон для верстки. Gulp4 + Pug + Sass + BrowserSync",
  "author": "",
  "name": "FrontCoder",
  "numberLessons": "1 урок",
  "time": "22м",
  "size": "36 mb",
  "isLearned": true,
  "dateLearned": "2021-12-28 вт"
}, {
  "id": 7,
  "year": 2019,
  "date": "",
  "category": "npm",
  "theme": "gulp",
  "title": "Сборка Gulp 4",
  "author": "Юрий Ключевский",
  "name": "Webcademy",
  "numberLessons": "",
  "time": "6ч 24м",
  "size": "2 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 8,
  "year": 2019,
  "date": "2019-02-04",
  "category": "npm",
  "theme": "gulp",
  "title": "Компиляция SASS и SCSS через Gulp сборщик",
  "author": "",
  "name": "ITDoctor",
  "numberLessons": "1 урок",
  "time": "20м",
  "size": "68 mb",
  "isLearned": true,
  "dateLearned": "2021-12-28 вт"
}, {
  "id": 9,
  "year": 2019,
  "date": "2019-03-01",
  "category": "npm",
  "theme": "gulp",
  "title": "Сборка проекта на Gulp 4, Подробный видео урок по сборщику Gulp",
  "author": "",
  "name": "ITDoctor",
  "numberLessons": "1 урок",
  "time": "1ч 22м",
  "size": "153 mb",
  "isLearned": true,
  "dateLearned": "2021-12-28 вт"
}, {
  "id": 10,
  "year": 2019,
  "date": "2019-03-20",
  "category": "npm",
  "theme": "gulp",
  "title": "Что такое Taskrunner и Bundler_  Что такое gulp и зачем он нужен. Установка Gulp 4",
  "author": "",
  "name": "Просто разработка",
  "numberLessons": "1 урок",
  "time": "31м",
  "size": "106 mb",
  "isLearned": true,
  "dateLearned": "2021-12-28 вт"
}, {
  "id": 11,
  "year": 2019,
  "date": "2019-04-12",
  "category": "npm",
  "theme": "gulp",
  "title": "Gulp за 30 минут",
  "author": "Владилен Минин",
  "name": "",
  "numberLessons": "1 урок",
  "time": "30м",
  "size": "94 mb",
  "isLearned": true,
  "dateLearned": "2021-12-28 вт"
}, {
  "id": 12,
  "year": 2019,
  "date": "2019-05-16",
  "category": "npm",
  "theme": "gulp",
  "title": "Изучение Gulp.JS",
  "author": "Гоша Дударь",
  "name": "itproger",
  "numberLessons": "5 уроков",
  "time": "1ч 22м",
  "size": "129 mb",
  "isLearned": true,
  "dateLearned": "2021-12-28 вт"
}, {
  "id": 13,
  "year": 2019,
  "date": "2019-05-18",
  "category": "npm",
  "theme": "gulp",
  "title": "Gulp 4",
  "author": "Вадим Прокопчук",
  "name": "От 0 до 1",
  "numberLessons": "1 урок",
  "time": "1ч 52м",
  "size": "229 mb",
  "isLearned": true,
  "dateLearned": "2022-01-19 ср"
}, {
  "id": 14,
  "year": 2020,
  "date": "2020-05-04",
  "category": "npm",
  "theme": "gulp",
  "title": "Gulp настройка установка плагины",
  "author": "Женя Андриканич",
  "name": "Фрилансер по жизни",
  "numberLessons": "1 урок",
  "time": "1ч 17м",
  "size": "142 mb",
  "isLearned": true,
  "dateLearned": "2022-01-28 пт"
}, {
  "id": 15,
  "year": 2020,
  "date": "2020-06-15",
  "category": "npm",
  "theme": "gulp",
  "title": "Gulp 4 - Актуальное и исчерпывающее руководство для самых маленьких",
  "author": "",
  "name": "WebDesign Master",
  "numberLessons": "1 урок",
  "time": "1ч 39м",
  "size": "140 mb",
  "isLearned": true,
  "dateLearned": "2022-01-31 пн"
}, {
  "id": 16,
  "year": 2020,
  "date": "2020-07-16",
  "category": "npm",
  "theme": "gulp",
  "title": "Готовим Gulp для проекта",
  "author": "Алекс Лущенко",
  "name": "itGid",
  "numberLessons": "1 урок",
  "time": "24м",
  "size": "34 mb",
  "isLearned": true,
  "dateLearned": "2022-01-31 пн"
}, {
  "id": 17,
  "year": 2020,
  "date": "2020-07-20",
  "category": "npm",
  "theme": "gulp",
  "title": "Gulp 4. Полное руководство и настройка своей собственной сборки",
  "author": "",
  "name": "MaxGraph",
  "numberLessons": "1 урок",
  "time": "1ч 38м",
  "size": "261 mb",
  "isLearned": true,
  "dateLearned": "2022-02-01 вт"
}, {
  "id": 18,
  "year": 2020,
  "date": "2020-07-20",
  "category": "npm",
  "theme": "gulp",
  "title": "Gulp сборка с нуля, современный синтаксис",
  "author": "Вадим Прокопчук",
  "name": "От 0 до 1",
  "numberLessons": "1 урок",
  "time": "2ч 6м",
  "size": "203 mb",
  "isLearned": true,
  "dateLearned": "2022-01-28 пт"
}, {
  "id": 19,
  "year": 2021,
  "date": "2021-02-23",
  "category": "npm",
  "theme": "gulp",
  "title": "Node.JS и Gulp для верстальщика с нуля_ делаем магию",
  "author": "",
  "name": "wayup",
  "numberLessons": "1 урок",
  "time": "1ч 8м",
  "size": "202 mb",
  "isLearned": true,
  "dateLearned": "2022-02-07 пн"
}, {
  "id": 20,
  "year": 2021,
  "date": "2021-03-15",
  "category": "npm",
  "theme": "gulp",
  "title": "Gulp сборка проекта",
  "author": "Дмитрий Бердников",
  "name": "",
  "numberLessons": "8 уроков",
  "time": "2ч 42м",
  "size": "530 mb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 21,
  "year": 2021,
  "date": "2021-07-28",
  "category": "npm",
  "theme": "gulp",
  "title": "Gulp vs webpack, сравнение, что использовать для верстки",
  "author": "Вадим Прокопчук",
  "name": "от 0 до 1",
  "numberLessons": "1 урок",
  "time": "13м",
  "size": "215 mb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 22,
  "year": 2021,
  "date": "2021-10-11",
  "category": "npm",
  "theme": "gulp",
  "title": "Моя сборка для верстки_ Gulp + Webpack. Инструмент для ускорения работы верстальщика",
  "author": "Заур Магомедов",
  "name": "",
  "numberLessons": "1 урок",
  "time": "55м",
  "size": "154 mb",
  "isLearned": true,
  "dateLearned": "2022-01-28 пт"
}, {
  "id": 23,
  "year": 2021,
  "date": "2021-11-17",
  "category": "npm",
  "theme": "gulp",
  "title": "Gulp сборка с нуля Установка настройка и запуск",
  "author": "",
  "name": "CodeQuest",
  "numberLessons": "1 урок",
  "time": "2ч 3м",
  "size": "286 mb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 24,
  "year": 2021,
  "date": "2021-12-22",
  "category": "npm",
  "theme": "gulp",
  "title": "GULP установка настройка плагины",
  "author": "Женя Андриканич",
  "name": "Фрилансер по жизни",
  "numberLessons": "1 урок",
  "time": "1ч 46м",
  "size": "161 mb",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-video/js/data-video/data-video-htmlcss.js":
/*!************************************************************************!*\
  !*** ./src/components/front-video/js/data-video/data-video-htmlcss.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataVideoHtmlcss": () => (/* binding */ dataVideoHtmlcss)
/* harmony export */ });
var dataVideoHtmlcss = [{
  "id": 1,
  "year": 2014,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "HTML PRO. Профессиональная вёрстка",
  "author": "Андрей Алехин",
  "name": "",
  "numberLessons": "8 уроков",
  "time": "16ч",
  "size": "2.7 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 2,
  "year": 2015,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "HTML_CSS. Основы создания сайтов",
  "author": "Юрий Жаворонок",
  "name": "GeekBrains",
  "numberLessons": "8 уроков",
  "time": "19ч 42м",
  "size": "1.2 gb",
  "isLearned": true,
  "dateLearned": "2021-05-20 чт"
}, {
  "id": 3,
  "year": 2015,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "Видео курс HTML CSS",
  "author": "Александр Петрик",
  "name": "ITVDN",
  "numberLessons": "8 уроков",
  "time": "9ч 30м",
  "size": "6.4 gb",
  "isLearned": true,
  "dateLearned": "2021-06-05 сб"
}, {
  "id": 4,
  "year": 2015,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "HOW TO HTML&CSS",
  "author": "Сергей",
  "name": "ITVDN",
  "numberLessons": "",
  "time": "1ч 43м",
  "size": "411 mb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 5,
  "year": 2015,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "HTML5 Структура, Синтаксис, и Семантика",
  "author": "James Williamson",
  "name": "Lynda.com",
  "numberLessons": "",
  "time": "3ч 34м",
  "size": "0.5 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 6,
  "year": 2015,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "HTML&CSS",
  "author": "",
  "name": "WebForMySelf",
  "numberLessons": "19 курсов",
  "time": "много м",
  "size": "9 gb",
  "isLearned": true,
  "dateLearned": "2021-07-01 чт"
}, {
  "id": 7,
  "year": 2015,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "HTML-верстка Инструменты и приемы профессиональной front-end разработки",
  "author": "",
  "name": "Нетология",
  "numberLessons": "22 видео",
  "time": "37ч 25м",
  "size": "13.7 gb",
  "isLearned": true,
  "dateLearned": "2021-07-01 чт"
}, {
  "id": 8,
  "year": 2016,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "Базовый HTML и CSS",
  "author": "",
  "name": "HTML Academy",
  "numberLessons": "",
  "time": "18ч 37м",
  "size": "9.7 gb",
  "isLearned": true,
  "dateLearned": "2021-11-22 пн"
}, {
  "id": 9,
  "year": 2016,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "Продвинутый HTML и CSS",
  "author": "",
  "name": "HTML Academy",
  "numberLessons": "",
  "time": "18ч",
  "size": "8.5 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 10,
  "year": 2016,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "HTML5 Веб компоненты",
  "author": "Дмитрий Охрименко",
  "name": "ITVDN",
  "numberLessons": "",
  "time": "2ч 11м",
  "size": "0.6 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 11,
  "year": 2016,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "HTML5 и CSS3 с Нуля до Профи",
  "author": "Андрей Бернацкий",
  "name": "WebForMyself",
  "numberLessons": "",
  "time": "9ч 9м",
  "size": "5 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 12,
  "year": 2017,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "Практический курс по верстке лендинга",
  "author": "Сергей Рубец",
  "name": "ITVDN",
  "numberLessons": "",
  "time": "8ч 14м",
  "size": "3.7 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 13,
  "year": 2018,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "Профессиональный HTML и CSS Уровень 1",
  "author": "",
  "name": "HTML Academy",
  "numberLessons": "",
  "time": "30ч 59м",
  "size": "11.6 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 14,
  "year": 2018,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "Профессиональный HTML и CSS Уровень 2",
  "author": "",
  "name": "HTML Academy",
  "numberLessons": "",
  "time": "26ч 44м",
  "size": "14.1 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 15,
  "year": 2018,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "Практический HTML",
  "author": "Александр Лущенко",
  "name": "itgid",
  "numberLessons": "",
  "time": "17ч 20м",
  "size": "4 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 16,
  "year": 2018,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "HTML5 И CSS3 STARTER",
  "author": "Владимир Виноградов",
  "name": "ITVDN",
  "numberLessons": "",
  "time": "8ч",
  "size": "2 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 17,
  "year": 2018,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "HTML5 и CSS3 Essential",
  "author": "Дмитрий Охрименко",
  "name": "ITVDN",
  "numberLessons": "",
  "time": "11ч 49м",
  "size": "2.9 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 18,
  "year": 2018,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "HTML5 & CSS3 Advanced",
  "author": "Сергей Патёха",
  "name": "ITVDN",
  "numberLessons": "",
  "time": "7ч 45м",
  "size": "1.6 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 19,
  "year": 2018,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "CSS GRID",
  "author": "Владимир Сабанцев",
  "name": "loftschool",
  "numberLessons": "",
  "time": "1ч 16м",
  "size": "534 mb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 20,
  "year": 2018,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "Курс по CSS3",
  "author": "Денис Булыга",
  "name": "WebForMySelf",
  "numberLessons": "",
  "time": "4ч 58м",
  "size": "1.3 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 21,
  "year": 2018,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "Познавая вёрстку HTML, CSS и кое что ещё",
  "author": "Глеб Чубаренко",
  "name": "Udemy",
  "numberLessons": "",
  "time": "17ч 55м",
  "size": "9.6 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 22,
  "year": 2018,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "Изучите HTML и CSS за несколько часов",
  "author": "Сергей Никонов",
  "name": "Udemy",
  "numberLessons": "",
  "time": "4ч",
  "size": "2.3 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 23,
  "year": 2019,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "HTML и CSS для начинающих 01. Основы HTML и CSS",
  "author": "Дмитрий Валак",
  "name": "Brainscloud",
  "numberLessons": "43 урока",
  "time": "10ч 20м",
  "size": "3.5 gb",
  "isLearned": true,
  "dateLearned": "2021-05-04 вт"
}, {
  "id": 24,
  "year": 2019,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "HTML и CSS для начинающих 02. Верстка адаптивного сайта с нуля",
  "author": "Дмитрий Валак",
  "name": "Brainscloud",
  "numberLessons": "16 уроков",
  "time": "2ч 49м",
  "size": "0.9 gb",
  "isLearned": true,
  "dateLearned": "2021-05-22 сб"
}, {
  "id": 25,
  "year": 2019,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "Быстрая и комфортная верстка сайтов",
  "author": "Дмитрий Валак",
  "name": "Brainscloud",
  "numberLessons": "6 уроков",
  "time": "7ч 35м",
  "size": "2 gb",
  "isLearned": true,
  "dateLearned": "2021-10-14 чт"
}, {
  "id": 26,
  "year": 2019,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "Верстка - быстрый старт",
  "author": "Владимир Сабанцев",
  "name": "loftschool",
  "numberLessons": "",
  "time": "13ч 5м",
  "size": "20 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 27,
  "year": 2019,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "Технология CSS Grid",
  "author": "Денис Булыга",
  "name": "WebForMySelf",
  "numberLessons": "",
  "time": "13ч 5м",
  "size": "20 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 28,
  "year": 2019,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "Марафон Flexbox CSS",
  "author": "Анна Блок",
  "name": "",
  "numberLessons": "",
  "time": "",
  "size": "180 mb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 29,
  "year": 2019,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "Продвинутая вёрстка",
  "author": "Дмитрий Лаврик",
  "name": "",
  "numberLessons": "",
  "time": "13ч 15м",
  "size": "3.1 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 30,
  "year": 2019,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "HTML5, CSS3, FlexBox верстка сайтов с нуля",
  "author": "Кирил Друцко",
  "name": "",
  "numberLessons": "45 уроков",
  "time": "7ч 46м",
  "size": "4.6 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 31,
  "year": 2019,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "Введение в HTML5 и CSS3",
  "author": "Никита Шультайс",
  "name": "",
  "numberLessons": "",
  "time": "6ч 26м",
  "size": "6.2 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 32,
  "year": 2019,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "CSS Как анимировать интерфейсы",
  "author": "Роман Трухтанов",
  "name": "",
  "numberLessons": "",
  "time": "",
  "size": "957 mb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 33,
  "year": 2020,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "Профессиональный HTML и CSS Уровень 1",
  "author": "",
  "name": "HTML Academy",
  "numberLessons": "",
  "time": "23ч 47м",
  "size": "11.1 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 34,
  "year": 2020,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "Верстка сайта на FlexBox CSS",
  "author": "Виталий Мазер",
  "name": "ITVDN",
  "numberLessons": "",
  "time": "1ч 30м",
  "size": "793 mb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 35,
  "year": 2020,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "Видеокурс CSS GRID от Loftschool",
  "author": "",
  "name": "loftschool",
  "numberLessons": "11 уроков",
  "time": "1ч 16м",
  "size": "534 mb",
  "isLearned": true,
  "dateLearned": "2022-12-22 чт"
}, {
  "id": 36,
  "year": 2020,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "HTML + CSS",
  "author": "",
  "name": "selfedu",
  "numberLessons": "10 уроков",
  "time": "2ч 25м",
  "size": "357 mb",
  "isLearned": true,
  "dateLearned": "2022-12-22 чт"
}, {
  "id": 37,
  "year": 2020,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "Верстка сайта транспортной компании",
  "author": "Дмитрий Валак",
  "name": "BrainsCloud",
  "numberLessons": "",
  "time": "12ч",
  "size": "5.7 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 38,
  "year": 2021,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "Профессиональный HTML и CSS, уровень 1",
  "author": "",
  "name": "HTML_Academy",
  "numberLessons": "11 уроков",
  "time": "",
  "size": "10.3 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 39,
  "year": 2021,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "HTML для JavaScript разработчиков",
  "author": "",
  "name": "ItGid",
  "numberLessons": "",
  "time": "6ч 20м",
  "size": "1.1 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 40,
  "year": 2021,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "Лучший курс для изучения Html+Css с нуля до профи",
  "author": "Данил",
  "name": "Skills Factory",
  "numberLessons": "",
  "time": "",
  "size": "2.6 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 41,
  "year": 2021,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "Идеальная вёрстка под Google",
  "author": "Дмитрий Лаврик",
  "name": "",
  "numberLessons": "4 урока",
  "time": "9ч 16м",
  "size": "2.6 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 42,
  "year": 2021,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "Классическая вёрстка",
  "author": "Дмитрий Лаврик",
  "name": "",
  "numberLessons": "8 уроков",
  "time": "",
  "size": "5.4 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 43,
  "year": 2021,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "Курс по верстке",
  "author": "Евгений Андриканич",
  "name": "",
  "numberLessons": "",
  "time": "",
  "size": "38 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 44,
  "year": 2021,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "WM-VIDEO Основы верстки сайта",
  "author": "Владимир Языков",
  "name": "Нетология",
  "numberLessons": "",
  "time": "",
  "size": "5.8 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 45,
  "year": 2022,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "Верстка и создание веб сайтов с нуля до результата",
  "author": "",
  "name": "Udemy",
  "numberLessons": "9 уроков",
  "time": "",
  "size": "4.3 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 46,
  "year": 2022,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "Компетенция Верстальщик HTML, CSS, JavaScript",
  "author": "",
  "name": "Udemy",
  "numberLessons": "10 уроков",
  "time": "",
  "size": "13.5 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 47,
  "year": 2022,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "Эффективный курс по HTML и CSS",
  "author": "Самвел Погосов",
  "name": "",
  "numberLessons": "",
  "time": "",
  "size": "9.4 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 48,
  "year": 2022,
  "date": "",
  "category": "code",
  "theme": "htmlcss",
  "title": "Верстка и создание веб сайтов - Продвинутый уровень",
  "author": "",
  "name": "",
  "numberLessons": "",
  "time": "",
  "size": "11 gb",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-video/js/data-video/data-video-joomla.js":
/*!***********************************************************************!*\
  !*** ./src/components/front-video/js/data-video/data-video-joomla.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataVideoJoomla": () => (/* binding */ dataVideoJoomla)
/* harmony export */ });
var dataVideoJoomla = [{
  "id": 1,
  "year": 2015,
  "date": "",
  "category": "cms",
  "theme": "joomla",
  "title": "Joomla-Профессионал",
  "author": "Виктор Гавриленко",
  "name": "WebForMySelf",
  "numberLessons": "",
  "time": "77ч 25м",
  "size": "13.2 gb",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-video/js/data-video/data-video-js.js":
/*!*******************************************************************!*\
  !*** ./src/components/front-video/js/data-video/data-video-js.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataVideoJs": () => (/* binding */ dataVideoJs)
/* harmony export */ });
var dataVideoJs = [{
  "id": 1,
  "year": 2013,
  "date": "",
  "category": "code",
  "theme": "javascript",
  "title": "Язык программирования JavaScript",
  "author": "Рахим Давлеткалиев",
  "name": "Hexlet",
  "numberLessons": "7 уроков",
  "time": "4ч 42м",
  "size": "1.9 gb",
  "isLearned": true,
  "dateLearned": "2021-05-27 чт"
}, {
  "id": 2,
  "year": 2015,
  "date": "",
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript Базовый курс",
  "author": "Дмитрий Охрименко",
  "name": "ITVDN",
  "numberLessons": "5 уроков",
  "time": "7ч 22м",
  "size": "1.7 gb",
  "isLearned": true,
  "dateLearned": "2022-10-13 чт"
}, {
  "id": 3,
  "year": 2015,
  "date": "",
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript Шаблоны",
  "author": "Дмитрий Охрименко",
  "name": "ITVDN",
  "numberLessons": "5 уроков",
  "time": "5ч",
  "size": "1.155 gb",
  "isLearned": true,
  "dateLearned": "2022-09-16 пт"
}, {
  "id": 4,
  "year": 2016,
  "date": "",
  "category": "code",
  "theme": "javascript",
  "title": "ECMAScript6",
  "author": "",
  "name": "CodeDojo",
  "numberLessons": "18 уроков",
  "time": "4ч 28м",
  "size": "0.5 gb",
  "isLearned": true,
  "dateLearned": "2022-09-16 пт"
}, {
  "id": 5,
  "year": 2016,
  "date": "",
  "category": "code",
  "theme": "javascript",
  "title": "How to JavaScript",
  "author": "Валерия",
  "name": "ITVDN",
  "numberLessons": "41 урок",
  "time": "2ч 55м",
  "size": "0.5 gb",
  "isLearned": true,
  "dateLearned": "2022-09-24 сб"
}, {
  "id": 6,
  "year": 2016,
  "date": "",
  "category": "code",
  "theme": "javascript",
  "title": "Комплексное обучение JavaScript",
  "author": "Сергей Мелюков",
  "name": "LoftSchool",
  "numberLessons": "",
  "time": "38ч",
  "size": "6.8 gb",
  "isLearned": true,
  "dateLearned": "2022-06-09 чт"
}, {
  "id": 7,
  "year": 2016,
  "date": "",
  "category": "code",
  "theme": "javascript",
  "title": "Пoнятный JavaScript",
  "author": "Евгений Калюжный",
  "name": "jsexpert",
  "numberLessons": "",
  "time": "31ч 9м",
  "size": "3.9 gb",
  "isLearned": true,
  "dateLearned": "2022-11-25 пт"
}, {
  "id": 8,
  "year": 2017,
  "date": "",
  "category": "code",
  "theme": "javascript",
  "title": "ECMAScript 6",
  "author": "Сергей Рубец",
  "name": "ITVDN",
  "numberLessons": "9 уроков",
  "time": "6ч 15м",
  "size": "2.1 gb",
  "isLearned": true,
  "dateLearned": "2022-10-09 вс"
}, {
  "id": 9,
  "year": 2017,
  "date": "",
  "category": "code",
  "theme": "javascript",
  "title": "Курс JavaScript DOM интерфейсы",
  "author": "Илья Кантор",
  "name": "javascript.ru",
  "numberLessons": "",
  "time": "40ч",
  "size": "7.3 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 10,
  "year": 2017,
  "date": "",
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript",
  "author": "",
  "name": "WebForMySelf",
  "numberLessons": "",
  "time": "",
  "size": "13 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 11,
  "year": 2017,
  "date": "",
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript. Интенсивный курс для верстальщиков",
  "author": "Дмитрий Лаврик",
  "name": "",
  "numberLessons": "",
  "time": "16ч 30м",
  "size": "3.1 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 12,
  "year": 2017,
  "date": "",
  "category": "code",
  "theme": "javascript",
  "title": "Javascript. Только для участников основного курса",
  "author": "Дмитрий Лаврик",
  "name": "",
  "numberLessons": "",
  "time": "8ч 37м",
  "size": "1.2 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 13,
  "year": 2017,
  "date": "",
  "category": "code",
  "theme": "javascript",
  "title": "Понятный JavaScript (Beginner)",
  "author": "Евгений Калюжный",
  "name": "jsexpert",
  "numberLessons": "",
  "time": "9ч 9м",
  "size": "2.8 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 14,
  "year": 2018,
  "date": "",
  "category": "code",
  "theme": "javascript",
  "title": "Профессиональный JavaScript уровень 1",
  "author": "",
  "name": "HTML Academy",
  "numberLessons": "",
  "time": "22ч 48м",
  "size": "10 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 15,
  "year": 2018,
  "date": "",
  "category": "code",
  "theme": "javascript",
  "title": "Профессиональный JavaScript уровень 2",
  "author": "",
  "name": "HTML Academy",
  "numberLessons": "",
  "time": "18ч 21м",
  "size": "7 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 16,
  "year": 2018,
  "date": "",
  "category": "code",
  "theme": "javascript",
  "title": "Понятный JavaScript (Advanced)",
  "author": "Евгений Калюжный",
  "name": "jsexpert",
  "numberLessons": "",
  "time": "12ч 27м",
  "size": "3.5 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 17,
  "year": 2018,
  "date": "",
  "category": "code",
  "theme": "javascript",
  "title": "Понятный JavaScript (Middle)",
  "author": "Евгений Калюжный",
  "name": "jsexpert",
  "numberLessons": "",
  "time": "14ч 29м",
  "size": "3.7 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 18,
  "year": 2018,
  "date": "",
  "category": "code",
  "theme": "javascript",
  "title": "Комплексное обучение JavaScript",
  "author": "",
  "name": "loftschool",
  "numberLessons": "",
  "time": "38ч",
  "size": "5.7 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 19,
  "year": 2018,
  "date": "",
  "category": "code",
  "theme": "javascript",
  "title": "Javascript. Интенсивный курс для программистов",
  "author": "Дмитрий Лаврик",
  "name": "",
  "numberLessons": "",
  "time": "21ч 54м",
  "size": "4.4 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 20,
  "year": 2018,
  "date": "",
  "category": "code",
  "theme": "javascript",
  "title": "Уроки EcmaScript 6",
  "author": "Михаил Непомнящий",
  "name": "Udemy",
  "numberLessons": "15 уроков",
  "time": "1ч 55м",
  "size": "360 mb",
  "isLearned": true,
  "dateLearned": "2022-01-24 пн"
}, {
  "id": 21,
  "year": 2018,
  "date": "2018-04-10",
  "category": "code",
  "theme": "javascript",
  "title": "Изучаем JavaScript за 90 минут",
  "author": "Александр Пауков",
  "name": "",
  "numberLessons": "1 урок",
  "time": "1ч 25м",
  "size": "109 mb",
  "isLearned": true,
  "dateLearned": "2022-12-20 вт"
}, {
  "id": 22,
  "year": 2019,
  "date": "",
  "category": "code",
  "theme": "javascript",
  "title": "Профессиональный JavaScript Уровень 3",
  "author": "",
  "name": "HTML Academy",
  "numberLessons": "",
  "time": "18ч 46м",
  "size": "9.6 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 23,
  "year": 2019,
  "date": "",
  "category": "code",
  "theme": "javascript",
  "title": "Практический JavaScript",
  "author": "Александр Лущенко",
  "name": "itgid",
  "numberLessons": "",
  "time": "19ч 12м",
  "size": "10 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 24,
  "year": 2019,
  "date": "",
  "category": "code",
  "theme": "javascript",
  "title": "Введение в веб-разработку JavaScript",
  "author": "",
  "name": "Lectrum",
  "numberLessons": "",
  "time": "17ч 5м",
  "size": "2.2 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 25,
  "year": 2019,
  "date": "",
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript для начинающих программистов",
  "author": "Иван Афонченко",
  "name": "OTUS",
  "numberLessons": "",
  "time": "6ч 27м",
  "size": "3.2 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 26,
  "year": 2019,
  "date": "",
  "category": "code",
  "theme": "javascript",
  "title": "Создание HTML5 игр на JavaScript и Canvas",
  "author": "Александр Болотников",
  "name": "Udemy",
  "numberLessons": "",
  "time": "8ч 54м",
  "size": "4.4 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 27,
  "year": 2019,
  "date": "",
  "category": "code",
  "theme": "javascript",
  "title": "Современный JavaScript с нуля на реальных проектах",
  "author": "Денис Мещеряков",
  "name": "Udemy",
  "numberLessons": "",
  "time": "31ч 42м",
  "size": "7.7 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 28,
  "year": 2019,
  "date": "",
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript. Полное руководство",
  "author": "Владилен Минин",
  "name": "WebForMySelf",
  "numberLessons": "",
  "time": "32ч 13м",
  "size": "8.2 gb",
  "isLearned": true,
  "dateLearned": "2022-03-05 сб"
}, {
  "id": 29,
  "year": 2019,
  "date": "",
  "category": "code",
  "theme": "javascript",
  "title": "Премиум курс по EcmaScript 6",
  "author": "Владилен Минин",
  "name": "",
  "numberLessons": "17 уроков",
  "time": "3ч 9м",
  "size": "382 mb",
  "isLearned": true,
  "dateLearned": "2022-10-29 сб"
}, {
  "id": 30,
  "year": 2020,
  "date": "",
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript. Архитектура клиентских приложений Уровень 2",
  "author": "",
  "name": "HTML Academy",
  "numberLessons": "",
  "time": "18ч 42м",
  "size": "10.9 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 31,
  "year": 2020,
  "date": "",
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript Developer. Basic",
  "author": "Василий Ванчук",
  "name": "otus",
  "numberLessons": "",
  "time": "20ч",
  "size": "4.3 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 32,
  "year": 2020,
  "date": "",
  "category": "code",
  "theme": "javascript",
  "title": "Азбука JavaScript",
  "author": "Алексей Неуймин",
  "name": "Udemy",
  "numberLessons": "",
  "time": "6ч 37м",
  "size": "1.9 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 33,
  "year": 2020,
  "date": "",
  "category": "code",
  "theme": "javascript",
  "title": "Практический JavaScript",
  "author": "Иван Петриченко",
  "name": "Udemy",
  "numberLessons": "",
  "time": "22ч 42м",
  "size": "11.7 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 34,
  "year": 2020,
  "date": "",
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript. Стань Senior Frontend",
  "author": "Владилен Минин",
  "name": "Udemy",
  "numberLessons": "",
  "time": "20ч",
  "size": "15.3 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 35,
  "year": 2020,
  "date": "",
  "category": "code",
  "theme": "javascript",
  "title": "Сложный JavaScript простым языком",
  "author": "Владилен Минин",
  "name": "",
  "numberLessons": "17 уроков",
  "time": "5ч 55м",
  "size": "635 mb",
  "isLearned": true,
  "dateLearned": "2022-11-01 вт"
}, {
  "id": 36,
  "year": 2021,
  "date": "",
  "category": "code",
  "theme": "javascript",
  "title": "Ускоренный курс по современному Javascript",
  "author": "Юра Аллахвердов",
  "name": "Udemy",
  "numberLessons": "",
  "time": "10ч",
  "size": "1.1 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 37,
  "year": 2021,
  "date": "",
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript на коленке",
  "author": "Александр Дегтярев",
  "name": "",
  "numberLessons": "",
  "time": "",
  "size": "7.1 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 38,
  "year": 2021,
  "date": "",
  "category": "code",
  "theme": "javascript",
  "title": "ES6",
  "author": "Василий Муравьев",
  "name": "",
  "numberLessons": "13 уроков",
  "time": "2ч 49м",
  "size": "377 mb",
  "isLearned": true,
  "dateLearned": "2022-10-26 ср"
}, {
  "id": 39,
  "year": 2021,
  "date": "",
  "category": "code",
  "theme": "javascript",
  "title": "Уроки Javascript",
  "author": "Василий Муравьев",
  "name": "",
  "numberLessons": "12 уроков",
  "time": "3ч 17м",
  "size": "471 mb",
  "isLearned": true,
  "dateLearned": "2022-10-28 пт"
}, {
  "id": 40,
  "year": 2021,
  "date": "",
  "category": "code",
  "theme": "javascript",
  "title": "Уроки JavaScript - объекты и классы (ООП)",
  "author": "",
  "name": "selfedu",
  "numberLessons": "9 уроков",
  "time": "1ч 50м",
  "size": "219 mb",
  "isLearned": true,
  "dateLearned": "2022-03-11 пт"
}, {
  "id": 41,
  "year": 2021,
  "date": "",
  "category": "code",
  "theme": "javascript",
  "title": "JavaScript работа с DOM",
  "author": "",
  "name": "selfedu",
  "numberLessons": "22 урока",
  "time": "3ч 28м",
  "size": "452 mb",
  "isLearned": true,
  "dateLearned": "2022-12-27 вт"
}, {
  "id": 42,
  "year": 2021,
  "date": "",
  "category": "code",
  "theme": "javascript",
  "title": "Programming and Children",
  "author": "",
  "name": "Programming and Children",
  "numberLessons": "73 урока",
  "time": "11ч 52м",
  "size": "1.3 gb",
  "isLearned": true,
  "dateLearned": "2023-02-09 чт"
}, {}];

/***/ }),

/***/ "./src/components/front-video/js/data-video/data-video-json.js":
/*!*********************************************************************!*\
  !*** ./src/components/front-video/js/data-video/data-video-json.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataVideoJson": () => (/* binding */ dataVideoJson)
/* harmony export */ });
var dataVideoJson = [{
  "id": 1,
  "year": 2019,
  "date": "2019-05-06",
  "category": "other",
  "theme": "json",
  "title": "Зачем нужен JSON Тип данных, работа с JSON на JavaScript метод JSON.parse() и метод JSON.stingify()",
  "author": "",
  "name": "ITDoctor",
  "numberLessons": "1 урок",
  "time": "21м",
  "size": "48 mb",
  "isLearned": true,
  "dateLearned": "2022-02-09 ср"
}, {
  "id": 2,
  "year": 2019,
  "date": "2019-08-21",
  "category": "other",
  "theme": "json",
  "title": "JavaScript для блондинок – Получение данных с сервера (Fetch)",
  "author": "Михаил Протасевич",
  "name": "AreaWeb - веб-разработка для блондинок",
  "numberLessons": "1 урок",
  "time": "17м",
  "size": "60 mb",
  "isLearned": true,
  "dateLearned": "2022-02-09 ср"
}, {
  "id": 3,
  "year": 2019,
  "date": "2019-09-01",
  "category": "other",
  "theme": "json",
  "title": "Что такое JSON",
  "author": "Дмитрий Ченгаев",
  "name": "Веб-программист. Дмитрий Ченгаев",
  "numberLessons": "1 урок",
  "time": "7м",
  "size": "11 mb",
  "isLearned": true,
  "dateLearned": "2022-02-09 ср"
}, {
  "id": 4,
  "year": 2020,
  "date": "2020-04-13",
  "category": "other",
  "theme": "json",
  "title": "Полный курс по JSON для начинающих",
  "author": "",
  "name": "Аве кодер",
  "numberLessons": "1 урок",
  "time": "18м",
  "size": "54 mb",
  "isLearned": true,
  "dateLearned": "2022-02-09 ср"
}, {
  "id": 5,
  "year": 2020,
  "date": "2020-05-24",
  "category": "other",
  "theme": "json",
  "title": "Знакомство с REST API и форматом JSON",
  "author": "Михаил Непомнящий",
  "name": "",
  "numberLessons": "1 урок",
  "time": "27м",
  "size": "188 mb",
  "isLearned": true,
  "dateLearned": "2022-02-09 ср"
}, {
  "id": 6,
  "year": 2020,
  "date": "2020-07-31",
  "category": "other",
  "theme": "json",
  "title": "Как получить данные с сервера_ Учим Fetch API за 10 минут",
  "author": "Влад Калачев",
  "name": "",
  "numberLessons": "1 урок",
  "time": "9м",
  "size": "15 mb",
  "isLearned": true,
  "dateLearned": "2022-02-09 ср"
}, {
  "id": 7,
  "year": 2020,
  "date": "2020-09-13",
  "category": "other",
  "theme": "json",
  "title": "Зачем нужен JSON, Часть 2 - Практика c шаблонизатором EJS",
  "author": "",
  "name": "ITDoctor",
  "numberLessons": "1 урок",
  "time": "38м",
  "size": "89 mb",
  "isLearned": true,
  "dateLearned": "2022-02-09 ср"
}, {
  "id": 8,
  "year": 2021,
  "date": "2021-02-12",
  "category": "other",
  "theme": "json",
  "title": "Чтение и запись файла на JavaScript, работа с FileReader на JavaScript",
  "author": "",
  "name": "ITDoctor",
  "numberLessons": "1 урок",
  "time": "7м",
  "size": "14 mb",
  "isLearned": true,
  "dateLearned": "2022-02-09 ср"
}, {
  "id": 9,
  "year": 2021,
  "date": "2021-04-21",
  "category": "other",
  "theme": "json",
  "title": "4. Что такое JSON",
  "author": "",
  "name": "Frontend разработка SPA",
  "numberLessons": "1 урок",
  "time": "11м",
  "size": "20 mb",
  "isLearned": true,
  "dateLearned": "2022-02-09 ср"
}, {}];

/***/ }),

/***/ "./src/components/front-video/js/data-video/data-video-nuxt.js":
/*!*********************************************************************!*\
  !*** ./src/components/front-video/js/data-video/data-video-nuxt.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataVideoNuxt": () => (/* binding */ dataVideoNuxt)
/* harmony export */ });
var dataVideoNuxt = [{
  "id": 1,
  "year": 2019,
  "date": "",
  "category": "framework",
  "theme": "nuxt",
  "title": "Фреймворк NuxtJS. Full-Stack",
  "author": "Владилен Минин",
  "name": "WebForMySelf",
  "numberLessons": "",
  "time": "10ч 57м",
  "size": "5.7 gb",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-video/js/data-video/data-video-opencart.js":
/*!*************************************************************************!*\
  !*** ./src/components/front-video/js/data-video/data-video-opencart.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataVideoOpencart": () => (/* binding */ dataVideoOpencart)
/* harmony export */ });
var dataVideoOpencart = [{
  "id": 1,
  "year": 2017,
  "date": "",
  "category": "cms",
  "theme": "opencart",
  "title": "OpenCart - Создание интернет-магазина от А до Я",
  "author": "",
  "name": "webdesign-master",
  "numberLessons": "",
  "time": "11ч 54м",
  "size": "10.3 gb",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-video/js/data-video/data-video-pug.js":
/*!********************************************************************!*\
  !*** ./src/components/front-video/js/data-video/data-video-pug.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataVideoPug": () => (/* binding */ dataVideoPug)
/* harmony export */ });
var dataVideoPug = [{
  "id": 1,
  "year": 2015,
  "date": "2015-03-23",
  "category": "npm",
  "theme": "pug",
  "title": "Jade _ Pug html Шаблонизатор Обзор",
  "author": "",
  "name": "Ros",
  "numberLessons": "1 урок",
  "time": "1ч 44м",
  "size": "171 mb",
  "isLearned": true,
  "dateLearned": "2021-11-25 чт"
}, {
  "id": 2,
  "year": 2017,
  "date": "2017-05-19",
  "category": "npm",
  "theme": "pug",
  "title": "Практический курс по верстке лендинга. Урок 2. Препроцессор PUG",
  "author": "Сергей Рубец",
  "name": "ITVDN",
  "numberLessons": "1 урок",
  "time": "10м",
  "size": "16 mb",
  "isLearned": true,
  "dateLearned": "2021-12-03 пт"
}, {
  "id": 3,
  "year": 2019,
  "date": "",
  "category": "npm",
  "theme": "pug",
  "title": "Шаблонизатор Pug_jade - современный ускоритель для HTML",
  "author": "Михаил Непомнящий",
  "name": "Udemy",
  "numberLessons": "6 уроков",
  "time": "1ч 58м",
  "size": "1 gb",
  "isLearned": true,
  "dateLearned": "2021-11-30 вт"
}, {
  "id": 4,
  "year": 2019,
  "date": "2019-03-31",
  "category": "npm",
  "theme": "pug",
  "title": "Pug tutorial. Ускорь свою верстку",
  "author": "",
  "name": "FrontCoder",
  "numberLessons": "1 урок",
  "time": "39м",
  "size": "60 mb",
  "isLearned": true,
  "dateLearned": "2021-11-19 пт"
}, {
  "id": 5,
  "year": 2019,
  "date": "2019-06-19",
  "category": "npm",
  "theme": "pug",
  "title": "Webpack 4 - Полная настройка pug",
  "author": "",
  "name": "Jack Coder",
  "numberLessons": "1 урок",
  "time": "27м",
  "size": "47 mb",
  "isLearned": true,
  "dateLearned": "2021-11-19 пт"
}, {
  "id": 6,
  "year": 2019,
  "date": "2019-08-01",
  "category": "npm",
  "theme": "pug",
  "title": "Препроцессор html (jade_pug)",
  "author": "Вадим Прокопчук",
  "name": "от 0 до 1",
  "numberLessons": "1 урок",
  "time": "36м",
  "size": "93 mb",
  "isLearned": true,
  "dateLearned": "2021-11-19 пт"
}, {
  "id": 7,
  "year": 2019,
  "date": "2019-08-02",
  "category": "npm",
  "theme": "pug",
  "title": "HTML шаблонизатор PUG",
  "author": "",
  "name": "Glo Academy",
  "numberLessons": "5 уроков",
  "time": "21м",
  "size": "46 mb",
  "isLearned": true,
  "dateLearned": "2021-12-03 пт"
}, {
  "id": 8,
  "year": 2020,
  "date": "2020-10-24",
  "category": "npm",
  "theme": "pug",
  "title": "Препроцессор PUG",
  "author": "",
  "name": "MaxGraph",
  "numberLessons": "4 урока",
  "time": "32м",
  "size": "72 mb",
  "isLearned": true,
  "dateLearned": "2021-12-03 пт"
}, {
  "id": 9,
  "year": 2021,
  "date": "2021-03-22",
  "category": "npm",
  "theme": "pug",
  "title": "HTML БОЛЬШЕ НЕ НУЖЕН! Pug. Полный курс. Часть 1",
  "author": "Петр Радько",
  "name": "",
  "numberLessons": "1 урок",
  "time": "1ч 21м",
  "size": "145 mb",
  "isLearned": true,
  "dateLearned": "2021-11-14 вс"
}, {
  "id": 10,
  "year": 2021,
  "date": "2021-03-29",
  "category": "npm",
  "theme": "pug",
  "title": "HTML БОЛЬШЕ НЕ НУЖЕН! Pug. Полный курс. Часть 2",
  "author": "Петр Радько",
  "name": "",
  "numberLessons": "1 урок",
  "time": "1ч 22м",
  "size": "182 mb",
  "isLearned": true,
  "dateLearned": "2021-11-14 вс"
}, {
  "id": 11,
  "year": 2021,
  "date": "2021-05-10",
  "category": "npm",
  "theme": "pug",
  "title": "УСКОРЬ ВЕРСТКУ сайта в 2 РАЗА Pug",
  "author": "",
  "name": "RED Group",
  "numberLessons": "1 урок",
  "time": "26м",
  "size": "88 mb",
  "isLearned": true,
  "dateLearned": "2021-11-19 пт"
}, {
  "id": 12,
  "year": 2021,
  "date": "2021-09-28",
  "category": "npm",
  "theme": "pug",
  "title": "Шаблонизатор PUG_JADE для HTML",
  "author": "",
  "name": "beONmax",
  "numberLessons": "7 уроков",
  "time": "45м",
  "size": "118 mb",
  "isLearned": true,
  "dateLearned": "2021-12-03 пт"
}, {
  "id": 13,
  "year": 2021,
  "date": "2021-12-26",
  "category": "npm",
  "theme": "pug",
  "title": "Шаблонизатор Pug (Jade) — подробное руководство для новичков от А до Я",
  "author": "Заур Магомедов",
  "name": "beONmax",
  "numberLessons": "1 урок",
  "time": "1ч 7м",
  "size": "162 mb",
  "isLearned": true,
  "dateLearned": "2022-01-11 пн"
}, {}];

/***/ }),

/***/ "./src/components/front-video/js/data-video/data-video-react.js":
/*!**********************************************************************!*\
  !*** ./src/components/front-video/js/data-video/data-video-react.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataVideoReact": () => (/* binding */ dataVideoReact)
/* harmony export */ });
var dataVideoReact = [{
  "id": 1,
  "year": 2017,
  "date": "",
  "category": "framework",
  "theme": "react",
  "title": "React.JS Advanced",
  "author": "Влад Фенинец",
  "name": "ITVDN",
  "numberLessons": "",
  "time": "5ч 56м",
  "size": "2.5 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 2,
  "year": 2017,
  "date": "",
  "category": "framework",
  "theme": "react",
  "title": "Полный курс по React.JS",
  "author": "Роман Якобчук",
  "name": "javascript.ru",
  "numberLessons": "",
  "time": "15ч",
  "size": "4.7 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 3,
  "year": 2017,
  "date": "",
  "category": "framework",
  "theme": "react",
  "title": "React.js. Разработка веб-приложений",
  "author": "Артём Самофалов",
  "name": "loftschool",
  "numberLessons": "",
  "time": "35ч 11м",
  "size": "17.4 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 4,
  "year": 2018,
  "date": "",
  "category": "framework",
  "theme": "react",
  "title": "Курс по React.JS",
  "author": "Роман Якобчук",
  "name": "javascript.ru",
  "numberLessons": "",
  "time": "12ч 49м",
  "size": "3.8 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 5,
  "year": 2018,
  "date": "",
  "category": "framework",
  "theme": "react",
  "title": "React.js. Разработка веб-приложений",
  "author": "",
  "name": "loftschool",
  "numberLessons": "",
  "time": "28ч",
  "size": "12.9 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 6,
  "year": 2019,
  "date": "",
  "category": "framework",
  "theme": "react",
  "title": "React. Lite Level",
  "author": "Александр Лущенко",
  "name": "itgid",
  "numberLessons": "",
  "time": "8ч 23м",
  "size": "1.6 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 7,
  "year": 2019,
  "date": "",
  "category": "framework",
  "theme": "react",
  "title": "React Hooks - Пишем Реальный Проект",
  "author": "Александр Кочергин",
  "name": "Udemy",
  "numberLessons": "",
  "time": "7ч 8м",
  "size": "2.8 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 8,
  "year": 2019,
  "date": "",
  "category": "framework",
  "theme": "react",
  "title": "Разработка интернет-магазина на ReactRedux",
  "author": "Александр Кочергин",
  "name": "Udemy",
  "numberLessons": "",
  "time": "3ч 32м",
  "size": "1.8 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 9,
  "year": 2019,
  "date": "",
  "category": "framework",
  "theme": "react",
  "title": "React JS c Нуля до Профи",
  "author": "Владилен Минин",
  "name": "Udemy",
  "numberLessons": "",
  "time": "39ч 22м",
  "size": "10 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 10,
  "year": 2019,
  "date": "",
  "category": "framework",
  "theme": "react",
  "title": "React Native. Мобильная разработка на JavaScript и React JS",
  "author": "Владилен Минин",
  "name": "Udemy",
  "numberLessons": "",
  "time": "13ч 10м",
  "size": "5.8 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 11,
  "year": 2019,
  "date": "",
  "category": "framework",
  "theme": "react",
  "title": "Изучаем React.js 16.7 & Redux",
  "author": "Константин Голиченков",
  "name": "Udemy",
  "numberLessons": "",
  "time": "5ч 52м",
  "size": "2.3 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 12,
  "year": 2019,
  "date": "",
  "category": "framework",
  "theme": "react",
  "title": "React + Redux - Профессиональная Разработка",
  "author": "Юрий Бура",
  "name": "Udemy",
  "numberLessons": "",
  "time": "21ч 58м",
  "size": "11.3 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 13,
  "year": 2019,
  "date": "",
  "category": "framework",
  "theme": "react",
  "title": "React Интенсивный курс для программистов",
  "author": "Дмитрий Лаврик",
  "name": "",
  "numberLessons": "",
  "time": "27ч 31м",
  "size": "5.6 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 14,
  "year": 2019,
  "date": "",
  "category": "framework",
  "theme": "react",
  "title": "Курс по React.js",
  "author": "Иван Петриченко",
  "name": "",
  "numberLessons": "",
  "time": "",
  "size": "3.2 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 15,
  "year": 2020,
  "date": "",
  "category": "framework",
  "theme": "react",
  "title": "Полный курс по JavaScript + React",
  "author": "Иван Петриченко",
  "name": "Udemy",
  "numberLessons": "",
  "time": "55ч 55м",
  "size": "27.3 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 16,
  "year": 2021,
  "date": "",
  "category": "framework",
  "theme": "react",
  "title": "React Next.js - с нуля. TypeScript, Hooks, SSR и CSS Grid",
  "author": "Антон Ларичев",
  "name": "Udemy",
  "numberLessons": "",
  "time": "19ч",
  "size": "8.5 gb",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-video/js/data-video/data-video-redux.js":
/*!**********************************************************************!*\
  !*** ./src/components/front-video/js/data-video/data-video-redux.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataVideoRedux": () => (/* binding */ dataVideoRedux)
/* harmony export */ });
var dataVideoRedux = [{
  "id": 1,
  "year": 2017,
  "date": "",
  "category": "framework",
  "theme": "redux",
  "title": "Основы Redux",
  "author": "",
  "name": "CodeDojo",
  "numberLessons": "",
  "time": "2ч 30м",
  "size": "0.5 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 2,
  "year": 2019,
  "date": "",
  "category": "framework",
  "theme": "redux",
  "title": "Продвинутый видеокурс по Redux",
  "author": "",
  "name": "Lectrum",
  "numberLessons": "",
  "time": "27ч 51м",
  "size": "7.1 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 3,
  "year": 2019,
  "date": "",
  "category": "framework",
  "theme": "redux",
  "title": "Продвинутый видеокурс по Redis",
  "author": "",
  "name": "Lectrum",
  "numberLessons": "",
  "time": "9ч 6м",
  "size": "1.3 gb",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-video/js/data-video/data-video-sass.js":
/*!*********************************************************************!*\
  !*** ./src/components/front-video/js/data-video/data-video-sass.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataVideoSass": () => (/* binding */ dataVideoSass)
/* harmony export */ });
var dataVideoSass = [{
  "id": 1,
  "year": 2017,
  "date": "",
  "category": "npm",
  "theme": "sass",
  "title": "Препроцессоры Sass и Less",
  "author": "Владилен Минин",
  "name": "WebForMySelf",
  "numberLessons": "",
  "time": "35ч",
  "size": "2.1 gb",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-video/js/data-video/data-video-tilda.js":
/*!**********************************************************************!*\
  !*** ./src/components/front-video/js/data-video/data-video-tilda.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataVideoTilda": () => (/* binding */ dataVideoTilda)
/* harmony export */ });
var dataVideoTilda = [{
  "id": 1,
  "year": 2020,
  "date": "",
  "category": "cms",
  "theme": "tilda",
  "title": "Дизайнер сайтов на Tilda",
  "author": "",
  "name": "Skillbox",
  "numberLessons": "",
  "time": "20ч",
  "size": "12.49 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 2,
  "year": 2020,
  "date": "",
  "category": "cms",
  "theme": "tilda",
  "title": "Tilda Start",
  "author": "Максим Ширко",
  "name": "",
  "numberLessons": "",
  "time": "20ч",
  "size": "12.2 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 3,
  "year": 2020,
  "date": "",
  "category": "cms",
  "theme": "tilda",
  "title": "Тильда-мастер 2.0",
  "author": "Сергей Харюков",
  "name": "",
  "numberLessons": "",
  "time": "6ч 50м",
  "size": "7.1 gb",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-video/js/data-video/data-video-ts.js":
/*!*******************************************************************!*\
  !*** ./src/components/front-video/js/data-video/data-video-ts.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataVideoTs": () => (/* binding */ dataVideoTs)
/* harmony export */ });
var dataVideoTs = [{
  "id": 1,
  "year": 2020,
  "date": "",
  "category": "code",
  "theme": "typescript",
  "title": "Видеокурс по TypeScript",
  "author": "",
  "name": "Lectrum",
  "numberLessons": "",
  "time": "13ч 45м",
  "size": "2.1 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 2,
  "year": 2021,
  "date": "",
  "category": "code",
  "theme": "typescript",
  "title": "TypeScript - полное руководство разработчика",
  "author": "Юра Аллахвердов",
  "name": "Udemy",
  "numberLessons": "",
  "time": "14ч 18м",
  "size": "7.1 gb",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-video/js/data-video/data-video-vscode.js":
/*!***********************************************************************!*\
  !*** ./src/components/front-video/js/data-video/data-video-vscode.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataVideoVscode": () => (/* binding */ dataVideoVscode)
/* harmony export */ });
var dataVideoVscode = [{
  "id": 1,
  "year": 2018,
  "date": "2018-09-03",
  "category": "other",
  "theme": "vscode",
  "title": "VS Code – обзор редактора кода",
  "author": "",
  "name": "Glo Academy",
  "numberLessons": "1 урок",
  "time": "9м",
  "size": "33 mb",
  "isLearned": true,
  "dateLearned": "2021-07-22 чт"
}, {
  "id": 2,
  "year": 2019,
  "date": "2019-04-26",
  "category": "other",
  "theme": "vscode",
  "title": "Как настроить FTP в VS Code _ Плагин SFTP Visual Studio Code",
  "author": "Артем Исламов",
  "name": "Glo Academy",
  "numberLessons": "1 урок",
  "time": "9м",
  "size": "17 mb",
  "isLearned": true,
  "dateLearned": "2022-01-20 чт"
}, {
  "id": 3,
  "year": 2019,
  "date": "2019-09-01",
  "category": "other",
  "theme": "vscode",
  "title": "JavaScript v2.0. Настраиваем VSCode для работы",
  "author": "Алекс Лущенко",
  "name": "WebDev с нуля",
  "numberLessons": "1 урок",
  "time": "13м",
  "size": "27 mb",
  "isLearned": true,
  "dateLearned": "2022-01-20 чт"
}, {
  "id": 4,
  "year": 2019,
  "date": "2019-09-23",
  "category": "other",
  "theme": "vscode",
  "title": "VS Code топ-10 плагины которые обязательно нужны. LiveServer, Html css support",
  "author": "",
  "name": "Web Developer Blog",
  "numberLessons": "1 урок",
  "time": "10м",
  "size": "19 mb",
  "isLearned": true,
  "dateLearned": "2022-01-20 чт"
}, {
  "id": 5,
  "year": 2019,
  "date": "2019-10-19",
  "category": "other",
  "theme": "vscode",
  "title": "Top 10 Best VS Code Extensions",
  "author": "",
  "name": "codeSTACKr",
  "numberLessons": "1 урок",
  "time": "17м",
  "size": "29 mb",
  "isLearned": true,
  "dateLearned": "2022-01-20 чт"
}, {
  "id": 6,
  "year": 2019,
  "date": "2019-12-05",
  "category": "other",
  "theme": "vscode",
  "title": "Установка git bash в терминал VS Code для Windows",
  "author": "Александр Семенов",
  "name": "",
  "numberLessons": "1 урок",
  "time": "17м",
  "size": "40 mb",
  "isLearned": true,
  "dateLearned": "2022-01-19 ср"
}, {
  "id": 7,
  "year": 2020,
  "date": "2020-02-27",
  "category": "other",
  "theme": "vscode",
  "title": "ТОП-10 плагинов VS Code для верстальщика",
  "author": "Артем Исламов",
  "name": "Glo Academy",
  "numberLessons": "1 урок",
  "time": "13м",
  "size": "28 mb",
  "isLearned": true,
  "dateLearned": "2022-01-20 чт"
}, {
  "id": 8,
  "year": 2020,
  "date": "2020-02-28",
  "category": "other",
  "theme": "vscode",
  "title": "VS Code настройка установка плагины",
  "author": "Женя Андриканич",
  "name": "Фрилансер по жизни",
  "numberLessons": "1 урок",
  "time": "1ч 5м",
  "size": "169 mb",
  "isLearned": true,
  "dateLearned": "2022-01-20 чт"
}, {
  "id": 9,
  "year": 2020,
  "date": "2020-04-19",
  "category": "other",
  "theme": "vscode",
  "title": "Мои плагины для VS Code. Самое важное и нужное",
  "author": "",
  "name": "MaxGraph",
  "numberLessons": "1 урок",
  "time": "9м",
  "size": "33 mb",
  "isLearned": true,
  "dateLearned": "2022-01-20 чт"
}, {
  "id": 10,
  "year": 2020,
  "date": "2020-05-19",
  "category": "other",
  "theme": "vscode",
  "title": "ТОП-16 Плагинов для VS Code в 2020",
  "author": "Евгений Ковальчук",
  "name": "webDev",
  "numberLessons": "1 урок",
  "time": "12м",
  "size": "22 mb",
  "isLearned": true,
  "dateLearned": "2022-01-20 чт"
}, {
  "id": 11,
  "year": 2020,
  "date": "2020-10-19",
  "category": "other",
  "theme": "vscode",
  "title": "VS Code Полный Курс для JavaScript разработчиков",
  "author": "Владилен Минин",
  "name": "",
  "numberLessons": "1 урок",
  "time": "1ч 32м",
  "size": "137 mb",
  "isLearned": true,
  "dateLearned": "2022-01-21 пт"
}, {
  "id": 12,
  "year": 2020,
  "date": "2020-11-22",
  "category": "other",
  "theme": "vscode",
  "title": "ЛУЧШИЙ РЕДАКТОР КОДА для Javascript разработчика 2021",
  "author": "Валерий Стрелец",
  "name": "",
  "numberLessons": "1 урок",
  "time": "20м",
  "size": "110 mb",
  "isLearned": true,
  "dateLearned": "2021-07-29 чт"
}, {
  "id": 13,
  "year": 2020,
  "date": "2020-12-01",
  "category": "other",
  "theme": "vscode",
  "title": "Упрощаем верстку_ сниппеты в VSCode",
  "author": "",
  "name": "Glo Academy",
  "numberLessons": "1 урок",
  "time": "49м",
  "size": "209 mb",
  "isLearned": true,
  "dateLearned": "2022-01-21 пт"
}, {
  "id": 14,
  "year": 2020,
  "date": "2020-12-21",
  "category": "other",
  "theme": "vscode",
  "title": "VS Code – установка и настройка. ТОП 5 плагинов. Редактор кода Visual Studio Code",
  "author": "Юрий Ключевский",
  "name": "ВебКадеми",
  "numberLessons": "1 урок",
  "time": "14м",
  "size": "37 mb",
  "isLearned": true,
  "dateLearned": "2022-01-24 пн"
}, {
  "id": 15,
  "year": 2021,
  "date": "2021-01-04",
  "category": "other",
  "theme": "vscode",
  "title": "Настройка Visual Studio Code для разработчика",
  "author": "Макс",
  "name": "Red Group",
  "numberLessons": "1 урок",
  "time": "16м",
  "size": "54 mb",
  "isLearned": true,
  "dateLearned": "2022-01-24 пн"
}, {
  "id": 16,
  "year": 2021,
  "date": "2021-02-04",
  "category": "other",
  "theme": "vscode",
  "title": "Prettier - лучший форматер кода Vs Code __ Настройка опытного разработчика",
  "author": "Макс",
  "name": "Red Group",
  "numberLessons": "1 урок",
  "time": "7м",
  "size": "26 mb",
  "isLearned": true,
  "dateLearned": "2022-01-24 пн"
}, {
  "id": 17,
  "year": 2021,
  "date": "2021-02-28",
  "category": "other",
  "theme": "vscode",
  "title": "VS Code — настройка, установка, плагины",
  "author": "Анна Блок",
  "name": "",
  "numberLessons": "1 урок",
  "time": "28м",
  "size": "69 mb",
  "isLearned": true,
  "dateLearned": "2022-01-24 пн"
}, {
  "id": 18,
  "year": 2021,
  "date": "2021-05-26",
  "category": "other",
  "theme": "vscode",
  "title": "Мой VS Code Светлая тема, удобный поиск, полезные расширения и настройки",
  "author": "Вадим Макеев",
  "name": "Vadim Makeev",
  "numberLessons": "1 урок",
  "time": "28м",
  "size": "55 mb",
  "isLearned": true,
  "dateLearned": "2022-01-24 пн"
}, {
  "id": 19,
  "year": 2021,
  "date": "2021-10-18",
  "category": "other",
  "theme": "vscode",
  "title": "Настройка VS Code для верстки",
  "author": "",
  "name": "WebDesignMaster",
  "numberLessons": "1 урок",
  "time": "34м",
  "size": "65 mb",
  "isLearned": true,
  "dateLearned": "2022-01-24 пн"
}, {}];

/***/ }),

/***/ "./src/components/front-video/js/data-video/data-video-vue.js":
/*!********************************************************************!*\
  !*** ./src/components/front-video/js/data-video/data-video-vue.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataVideoVue": () => (/* binding */ dataVideoVue)
/* harmony export */ });
var dataVideoVue = [{
  "id": 1,
  "year": 2017,
  "date": "",
  "category": "framework",
  "theme": "vue",
  "title": "Vue.js",
  "author": "Дмитрий Лаврик",
  "name": "",
  "numberLessons": "",
  "time": "19ч 55м",
  "size": "3.7 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 2,
  "year": 2018,
  "date": "",
  "category": "framework",
  "theme": "vue",
  "title": "Создаем сайт на Vue.JS",
  "author": "Константин Кокорин",
  "name": "Udemy",
  "numberLessons": "",
  "time": "8ч 24м",
  "size": "3.4 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 3,
  "year": 2018,
  "date": "",
  "category": "framework",
  "theme": "vue",
  "title": "Фреймворк Vue.js",
  "author": "Владилен Минин",
  "name": "WebForMySelf",
  "numberLessons": "",
  "time": "43ч 31м",
  "size": "5.6 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 4,
  "year": 2019,
  "date": "",
  "category": "framework",
  "theme": "vue",
  "title": "Курс по vue.js - с нуля до про",
  "author": "",
  "name": "To code",
  "numberLessons": "",
  "time": "26ч 41м",
  "size": "4.8 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 5,
  "year": 2020,
  "date": "",
  "category": "framework",
  "theme": "vue",
  "title": "Vue JS и Vuex - пишем реальный проект с нуля",
  "author": "Александр Кочергин",
  "name": "Udemy",
  "numberLessons": "",
  "time": "10ч",
  "size": "6.1 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 6,
  "year": 2020,
  "date": "",
  "category": "framework",
  "theme": "vue",
  "title": "Современный JavaScript + Vue",
  "author": "Денис Мешариков",
  "name": "Udemy",
  "numberLessons": "",
  "time": "44ч 20м",
  "size": "20 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 7,
  "year": 2021,
  "date": "",
  "category": "framework",
  "theme": "vue",
  "title": "Vue.js 3",
  "author": "Владилен Минин",
  "name": "",
  "numberLessons": "",
  "time": "26ч",
  "size": "16 gb",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-video/js/data-video/data-video-web.js":
/*!********************************************************************!*\
  !*** ./src/components/front-video/js/data-video/data-video-web.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataVideoWeb": () => (/* binding */ dataVideoWeb)
/* harmony export */ });
var dataVideoWeb = [{
  "id": 1,
  "year": 2014,
  "date": "",
  "category": "other",
  "theme": "web",
  "title": "Обучение WEB Программированию",
  "author": "",
  "name": "LoftBlog",
  "numberLessons": "",
  "time": "43ч",
  "size": "27.4 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 2,
  "year": 2015,
  "date": "",
  "category": "other",
  "theme": "web",
  "title": "Основы программирования",
  "author": "",
  "name": "CS50 Harvard",
  "numberLessons": "23 урока",
  "time": "20ч 42м",
  "size": "7.4 gb",
  "isLearned": true,
  "dateLearned": "2021-06-10 чт"
}, {
  "id": 3,
  "year": 2015,
  "date": "",
  "category": "other",
  "theme": "web",
  "title": "Школа Вебмастеров",
  "author": "",
  "name": "Яндекс-Академия",
  "numberLessons": "",
  "time": "22ч",
  "size": "9 gb",
  "isLearned": true,
  "dateLearned": "2021-10-26 вт"
}, {
  "id": 4,
  "year": 2015,
  "date": "",
  "category": "other",
  "theme": "web",
  "title": "Четвертая Вебмастерская",
  "author": "",
  "name": "Яндекс-Академия",
  "numberLessons": "",
  "time": "4ч 49м",
  "size": "1.6 gb",
  "isLearned": true,
  "dateLearned": "2021-11-02 вт"
}, {
  "id": 5,
  "year": 2016,
  "date": "",
  "category": "other",
  "theme": "web",
  "title": "Web-разработка для начинающих",
  "author": "",
  "name": "LoftSchool",
  "numberLessons": "",
  "time": "2д 18ч 36м",
  "size": "25.3 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 6,
  "year": 2016,
  "date": "",
  "category": "other",
  "theme": "web",
  "title": "Пятая Вебмастерская",
  "author": "",
  "name": "Яндекс-Академия",
  "numberLessons": "",
  "time": "7ч 16м",
  "size": "3.4 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 7,
  "year": 2016,
  "date": "",
  "category": "other",
  "theme": "web",
  "title": "Шестая Вебмастерская",
  "author": "",
  "name": "Яндекс-Академия",
  "numberLessons": "",
  "time": "12ч 34м",
  "size": "4.6 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 8,
  "year": 2017,
  "date": "",
  "category": "other",
  "theme": "web",
  "title": "WEB-программирование для школьников",
  "author": "",
  "name": "Foxford",
  "numberLessons": "",
  "time": "64ч",
  "size": "18.3 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 9,
  "year": 2017,
  "date": "",
  "category": "other",
  "theme": "web",
  "title": "Создание сайта от А до Я. Комплексный курс",
  "author": "",
  "name": "webdesign-master",
  "numberLessons": "",
  "time": "18ч",
  "size": "6.6 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 10,
  "year": 2017,
  "date": "",
  "category": "other",
  "theme": "web",
  "title": "Эффекты Parallax",
  "author": "Андрей Кудлай",
  "name": "WebForMySelf",
  "numberLessons": "",
  "time": "3ч 42м",
  "size": "1 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 11,
  "year": 2017,
  "date": "",
  "category": "other",
  "theme": "web",
  "title": "Седьмая Вебмастерская",
  "author": "",
  "name": "Яндекс-Академия",
  "numberLessons": "",
  "time": "3ч 17м",
  "size": "1 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 12,
  "year": 2018,
  "date": "",
  "category": "other",
  "theme": "web",
  "title": "Web-дизайн с 0 до PRO",
  "author": "",
  "name": "SkillBox",
  "numberLessons": "",
  "time": "80ч 24м",
  "size": "6.3 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 13,
  "year": 2018,
  "date": "",
  "category": "other",
  "theme": "web",
  "title": "Веб-разработчик 12.0",
  "author": "Артем Исламов",
  "name": "Академия верстки",
  "numberLessons": "",
  "time": "40ч 57м",
  "size": "11.1 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 14,
  "year": 2018,
  "date": "",
  "category": "other",
  "theme": "web",
  "title": "Восьмая Вебмастерская",
  "author": "",
  "name": "Яндекс-Академия",
  "numberLessons": "",
  "time": "5ч 33м",
  "size": "2.2 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 15,
  "year": 2019,
  "date": "",
  "category": "other",
  "theme": "web",
  "title": "Веб-дизайн 2.0",
  "author": "",
  "name": "Highlights",
  "numberLessons": "",
  "time": "15ч",
  "size": "40 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 16,
  "year": 2019,
  "date": "",
  "category": "other",
  "theme": "web",
  "title": "Web-разработчик",
  "author": "Иван Петриченко",
  "name": "Udemy",
  "numberLessons": "",
  "time": "22ч 40м",
  "size": "14.1 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 17,
  "year": 2019,
  "date": "",
  "category": "other",
  "theme": "web",
  "title": "Полный Курс Веб-Разработчика 2.0",
  "author": "",
  "name": "Udemy",
  "numberLessons": "",
  "time": "",
  "size": "15.8 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 18,
  "year": 2019,
  "date": "",
  "category": "other",
  "theme": "web",
  "title": "Премиум-уроки",
  "author": "",
  "name": "WebForMySelf",
  "numberLessons": "",
  "time": "392ч",
  "size": "60 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 19,
  "year": 2019,
  "date": "",
  "category": "other",
  "theme": "web",
  "title": "Восьмая Вебмастерская",
  "author": "",
  "name": "Яндекс-Академия",
  "numberLessons": "",
  "time": "4ч 37м",
  "size": "1.3 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 20,
  "year": 2020,
  "date": "",
  "category": "other",
  "theme": "web",
  "title": "Geek University веб-разработки",
  "author": "",
  "name": "GeekBrains",
  "numberLessons": "",
  "time": "230ч",
  "size": "52 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 21,
  "year": 2020,
  "date": "",
  "category": "other",
  "theme": "web",
  "title": "Онлайн-марафон по Веб-дизайну",
  "author": "",
  "name": "Highlights",
  "numberLessons": "",
  "time": "4ч",
  "size": "12.4 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 22,
  "year": 2020,
  "date": "",
  "category": "other",
  "theme": "web",
  "title": "Платные видеокурсы",
  "author": "",
  "name": "loftschool",
  "numberLessons": "",
  "time": "16ч 54м",
  "size": "5.2 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 23,
  "year": 2021,
  "date": "",
  "category": "other",
  "theme": "web",
  "title": "WEB-разработчик",
  "author": "Антон Ларичев",
  "name": "Udemy",
  "numberLessons": "",
  "time": "33ч 31м",
  "size": "19.3 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 24,
  "year": 2021,
  "date": "",
  "category": "other",
  "theme": "web",
  "title": "Восьмая Вебмастерская",
  "author": "",
  "name": "Яндекс-Академия",
  "numberLessons": "",
  "time": "24ч 36м",
  "size": "6.2 gb",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-video/js/data-video/data-video-webpack.js":
/*!************************************************************************!*\
  !*** ./src/components/front-video/js/data-video/data-video-webpack.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataVideoWebpack": () => (/* binding */ dataVideoWebpack)
/* harmony export */ });
var dataVideoWebpack = [{
  "id": 1,
  "year": 2018,
  "date": "2018-04-06",
  "category": "npm",
  "theme": "webpack",
  "title": "Webpack 4 - простая сборка проекта",
  "author": "Дмитрий Лаврик",
  "name": "",
  "numberLessons": "1 урок",
  "time": "1ч 45м",
  "size": "583 mb",
  "isLearned": true,
  "dateLearned": "2022-12-09 пт"
}, {
  "id": 2,
  "year": 2019,
  "date": "",
  "category": "npm",
  "theme": "webpack",
  "title": "Продвинутый видеокурс по Webpack v4",
  "author": "",
  "name": "Lectrum",
  "numberLessons": "",
  "time": "17ч 3м",
  "size": "2.9 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 3,
  "year": 2019,
  "date": "2019-03-29",
  "category": "npm",
  "theme": "webpack",
  "title": "Глубокое погружение в webpack",
  "author": "Стас Курилов",
  "name": "",
  "numberLessons": "1 урок",
  "time": "59м",
  "size": "115 mb",
  "isLearned": true,
  "dateLearned": "2022-12-09 пт"
}, {
  "id": 4,
  "year": 2019,
  "date": "2019-10-19",
  "category": "npm",
  "theme": "webpack",
  "title": "Настройка Webpack 5 для начинающих. Описание принципа работы webpack. Html, css, scss, pug, jQuery",
  "author": "",
  "name": "GrandpaJS",
  "numberLessons": "1 урок",
  "time": "41м",
  "size": "94 mb",
  "isLearned": true,
  "dateLearned": "2022-12-09 пт"
}, {
  "id": 5,
  "year": 2020,
  "date": "2020-01-16",
  "category": "npm",
  "theme": "webpack",
  "title": "Webpack - Полный курс за 3 часа",
  "author": "Владилен Минин",
  "name": "",
  "numberLessons": "1 урок",
  "time": "2ч 51м",
  "size": "340 mb",
  "isLearned": true,
  "dateLearned": "2022-12-09 пт"
}, {
  "id": 6,
  "year": 2020,
  "date": "2020-02-05",
  "category": "npm",
  "theme": "webpack",
  "title": "React Intro. Webpack",
  "author": "",
  "name": "RS School",
  "numberLessons": "1 урок",
  "time": "1ч 47м",
  "size": "278 mb",
  "isLearned": true,
  "dateLearned": "2022-12-09 пт"
}, {
  "id": 7,
  "year": 2020,
  "date": "2020-04-27",
  "category": "npm",
  "theme": "webpack",
  "title": "Что такое WEBPACK, его настройка и основные концепции",
  "author": "Илья",
  "name": "",
  "numberLessons": "1 урок",
  "time": "29м",
  "size": "91 mb",
  "isLearned": true,
  "dateLearned": "2022-12-09 пт"
}, {
  "id": 8,
  "year": 2020,
  "date": "2020-05-23",
  "category": "npm",
  "theme": "webpack",
  "title": "Webpack для начинающих",
  "author": "Антон Окулов",
  "name": "",
  "numberLessons": "1 урок",
  "time": "41м",
  "size": "287 mb",
  "isLearned": true,
  "dateLearned": "2022-12-09 пт"
}, {
  "id": 9,
  "year": 2020,
  "date": "2020-07-28",
  "category": "npm",
  "theme": "webpack",
  "title": "React Webpack",
  "author": "",
  "name": "RS School",
  "numberLessons": "1 урок",
  "time": "1ч 34м",
  "size": "217 mb",
  "isLearned": true,
  "dateLearned": "2022-12-09 пт"
}, {
  "id": 10,
  "year": 2020,
  "date": "2020-11-23",
  "category": "npm",
  "theme": "webpack",
  "title": "Webpack. Базовая сборка проекта",
  "author": "Максим",
  "name": "",
  "numberLessons": "1 урок",
  "time": "1ч 19м",
  "size": "445 mb",
  "isLearned": true,
  "dateLearned": "2022-12-09 пт"
}, {
  "id": 11,
  "year": 2021,
  "date": "2021-02-01",
  "category": "npm",
  "theme": "webpack",
  "title": "Webpack 5 Full Project Setup",
  "author": "",
  "name": "Swashbuckling with Code",
  "numberLessons": "1 урок",
  "time": "1ч 58м",
  "size": "395 mb",
  "isLearned": true,
  "dateLearned": "2022-12-14 ср"
}, {
  "id": 12,
  "year": 2021,
  "date": "2021-02-15",
  "category": "npm",
  "theme": "webpack",
  "title": "React Webpack",
  "author": "",
  "name": "RS School",
  "numberLessons": "1 урок",
  "time": "1ч 1м",
  "size": "254 mb",
  "isLearned": true,
  "dateLearned": "2022-12-09 пт"
}, {
  "id": 13,
  "year": 2021,
  "date": "2021-02-18",
  "category": "npm",
  "theme": "webpack",
  "title": "Webpack 5 - минимальный переход c 4 версии",
  "author": "Дмитрий Лаврик",
  "name": "",
  "numberLessons": "1 урок",
  "time": "1ч 11м",
  "size": "441 mb",
  "isLearned": true,
  "dateLearned": "2022-12-09 пт"
}, {
  "id": 14,
  "year": 2021,
  "date": "2021-02-22",
  "category": "npm",
  "theme": "webpack",
  "title": "Простая сборка webpack 5 для react",
  "author": "Дмитрий Лаврик",
  "name": "",
  "numberLessons": "1 урок",
  "time": "1ч 7м",
  "size": "161 mb",
  "isLearned": true,
  "dateLearned": "2022-12-16 пт"
}, {
  "id": 15,
  "year": 2021,
  "date": "2021-05-05",
  "category": "npm",
  "theme": "webpack",
  "title": "Webpack",
  "author": "",
  "name": "RS School",
  "numberLessons": "1 урок",
  "time": "1ч 52м",
  "size": "392 mb",
  "isLearned": true,
  "dateLearned": "2022-12-09 пт"
}, {
  "id": 16,
  "year": 2021,
  "date": "2021-10-21",
  "category": "npm",
  "theme": "webpack",
  "title": "Webpack and Preprocessors",
  "author": "",
  "name": "RS School",
  "numberLessons": "1 урок",
  "time": "1ч 52м",
  "size": "270 mb",
  "isLearned": true,
  "dateLearned": "2022-12-09 пт"
}, {
  "id": 17,
  "year": 2022,
  "date": "",
  "category": "npm",
  "theme": "webpack",
  "title": "Webpack 5",
  "author": "",
  "name": "Easy IT",
  "numberLessons": "6 уроков",
  "time": "1ч 12м",
  "size": "163 mb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 18,
  "year": 2022,
  "date": "2022-02-02",
  "category": "npm",
  "theme": "webpack",
  "title": "Webpack — Аня Володькова",
  "author": "Аня Володькова",
  "name": "Paralect",
  "numberLessons": "1 урок",
  "time": "30м",
  "size": "211 mb",
  "isLearned": true,
  "dateLearned": "2022-12-09 пт"
}, {
  "id": 19,
  "year": 2022,
  "date": "2022-02-04",
  "category": "npm",
  "theme": "webpack",
  "title": "Webpack. Сборка веб-приложений",
  "author": "Антон Цаплюк",
  "name": "",
  "numberLessons": "1 урок",
  "time": "2ч 12м",
  "size": "480 mb",
  "isLearned": true,
  "dateLearned": "2022-12-19 пн"
}, {
  "id": 20,
  "year": 2022,
  "date": "2022-03-22",
  "category": "npm",
  "theme": "webpack",
  "title": "Webpack 5 Crash Course _ Frontend Development Setup",
  "author": "",
  "name": "",
  "numberLessons": "1 урок",
  "time": "41м",
  "size": "61 mb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 21,
  "year": 2022,
  "date": "2022-04-04",
  "category": "npm",
  "theme": "webpack",
  "title": "Webpack Course - Intro To Webpack",
  "author": "",
  "name": "",
  "numberLessons": "1 урок",
  "time": "26м",
  "size": "89 mb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 22,
  "year": 2022,
  "date": "2022-04-14",
  "category": "npm",
  "theme": "webpack",
  "title": "Webpack Course - Loading Images And Text Using Webpack",
  "author": "",
  "name": "",
  "numberLessons": "1 урок",
  "time": "24м",
  "size": "97 mb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 23,
  "year": 2022,
  "date": "2022-04-30",
  "category": "npm",
  "theme": "webpack",
  "title": "Webpack. Base configuration. Part 1",
  "author": "",
  "name": "",
  "numberLessons": "1 урок",
  "time": "36м",
  "size": "97 mb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 24,
  "year": 2022,
  "date": "2022-04-30",
  "category": "npm",
  "theme": "webpack",
  "title": "Webpack. Base configuration. Part 2",
  "author": "",
  "name": "",
  "numberLessons": "1 урок",
  "time": "39м",
  "size": "122 mb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 25,
  "year": 2022,
  "date": "2022-06-02",
  "category": "npm",
  "theme": "webpack",
  "title": "Изучение WEBPACK за час в одном видео! Настройка и работа с Webpack",
  "author": "Гоша Дударь",
  "name": "",
  "numberLessons": "1 урок",
  "time": "48м",
  "size": "111 mb",
  "isLearned": true,
  "dateLearned": "2022-12-09 пт"
}, {
  "id": 26,
  "year": 2022,
  "date": "2022-06-25",
  "category": "npm",
  "theme": "webpack",
  "title": "Webpack 5 Full Course (Babel, PostCSS, npx, Node.js & npm)",
  "author": "",
  "name": "",
  "numberLessons": "1 урок",
  "time": "1ч 28м",
  "size": "176 mb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 27,
  "year": 2022,
  "date": "2022-06-30",
  "category": "npm",
  "theme": "webpack",
  "title": "Webpack 5 — Полный курс для начинающих. Обработка html, css, scss, js, image compress.",
  "author": "Максим",
  "name": "",
  "numberLessons": "1 урок",
  "time": "1ч 10м",
  "size": "161 mb",
  "isLearned": true,
  "dateLearned": "2022-12-09 пт"
}, {
  "id": 28,
  "year": 2022,
  "date": "2022-07-08",
  "category": "npm",
  "theme": "webpack",
  "title": "Webpack - Anna Volodkova",
  "author": "Анна Володькова",
  "name": "Paralect",
  "numberLessons": "1 урок",
  "time": "1ч 29м",
  "size": "168 mb",
  "isLearned": true,
  "dateLearned": "2022-12-09 пт"
}, {
  "id": 29,
  "year": 2022,
  "date": "2022-11-19",
  "category": "npm",
  "theme": "webpack",
  "title": "A Beginner's Guide to Webpack",
  "author": "",
  "name": "",
  "numberLessons": "1 урок",
  "time": "30м",
  "size": "75 mb",
  "isLearned": true,
  "dateLearned": "2022-12-09 пт"
}, {}];

/***/ }),

/***/ "./src/components/front-video/js/data-video/data-video-wp.js":
/*!*******************************************************************!*\
  !*** ./src/components/front-video/js/data-video/data-video-wp.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataVideoWp": () => (/* binding */ dataVideoWp)
/* harmony export */ });
var dataVideoWp = [{
  "id": 1,
  "year": 2011,
  "date": "",
  "category": "cms",
  "theme": "wordpress",
  "title": "Мини-курс сайта с нуля на WordPress",
  "author": "Андрей Бернацкий",
  "name": "WebForMySelf",
  "numberLessons": "8 уроков",
  "time": "7ч 39м",
  "size": "1.3 gb",
  "isLearned": true,
  "dateLearned": "2021-08-17 вт"
}, {
  "id": 2,
  "year": 2015,
  "date": "",
  "category": "cms",
  "theme": "wordpress",
  "title": "Создание сайта на WordPress",
  "author": "Борис Заболоцких",
  "name": "",
  "numberLessons": "",
  "time": "2ч 54м",
  "size": "1.3 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 3,
  "year": 2018,
  "date": "",
  "category": "cms",
  "theme": "wordpress",
  "title": "Создание сайтов без программирования на WordPress",
  "author": "Михаил Непомнящий",
  "name": "Udemy",
  "numberLessons": "",
  "time": "14ч 21м",
  "size": "11.1 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 4,
  "year": 2018,
  "date": "",
  "category": "cms",
  "theme": "wordpress",
  "title": "Разработка тем для WordPress",
  "author": "Андрей Кудлай",
  "name": "WebForMySelf",
  "numberLessons": "",
  "time": "41ч 27м",
  "size": "8.5 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 5,
  "year": 2018,
  "date": "",
  "category": "cms",
  "theme": "wordpress",
  "title": "Разработка интернет магазина WP",
  "author": "Артем Исламов",
  "name": "Академия верстки",
  "numberLessons": "",
  "time": "11ч 25м",
  "size": "3.4 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 6,
  "year": 2019,
  "date": "",
  "category": "cms",
  "theme": "wordpress",
  "title": "WordPress с нуля до профессионала",
  "author": "Анатолий Карев",
  "name": "Udemy",
  "numberLessons": "",
  "time": "8ч 45м",
  "size": "5.4 gb",
  "isLearned": false,
  "dateLearned": ""
}, {
  "id": 7,
  "year": 2019,
  "date": "",
  "category": "cms",
  "theme": "wordpress",
  "title": "Посадка верстки на CMS WordPress",
  "author": "Иван Петриченко",
  "name": "Udemy",
  "numberLessons": "",
  "time": "6ч 14м",
  "size": "3.8 gb",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-video/js/data-video/data-video-yii2.js":
/*!*********************************************************************!*\
  !*** ./src/components/front-video/js/data-video/data-video-yii2.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataVideoYii2": () => (/* binding */ dataVideoYii2)
/* harmony export */ });
var dataVideoYii2 = [{
  "id": 1,
  "year": 2020,
  "date": "",
  "category": "framework",
  "theme": "yii2",
  "title": "Фреймворк Yii2",
  "author": "Андрей Кудлай",
  "name": "WebForMySelf",
  "numberLessons": "",
  "time": "22ч 28м",
  "size": "9.5 gb",
  "isLearned": false,
  "dateLearned": ""
}, {}];

/***/ }),

/***/ "./src/components/front-video/js/front-video.js":
/*!******************************************************!*\
  !*** ./src/components/front-video/js/front-video.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _front_video__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../_front-video */ "./src/components/front-video/_front-video.js");
/* harmony import */ var _front_video__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_front_video__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _create_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-data.js */ "./src/components/front-video/js/create-data.js");
/* harmony import */ var _create_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-list.js */ "./src/components/front-video/js/create-list.js");
/* harmony import */ var _create_learned_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-learned-list.js */ "./src/components/front-video/js/create-learned-list.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
/****************
Скрипт из файла video.js
*******************/
/*
Алгоритм работы
1. Проверяем что страница имеет id="front-video"
2. Создаем объект data упорядоченный по категориям и темам
3. Создаем main-nav
  3.1 Создаем массив navDiv для элементов main-nav
  3.2 Создаем элемент elementNav для каждой категории
  3.3 Добавляем элемент elementNav в массив navDiv
4. Создаем aside меню
  4.1 Создаем массив asideDiv для элементов aside меню
  4.2 Создаем элемент elementAside для каждой темы
  4.3 Добавляем элемент elementAside в массив asideDiv
5. Создаем контент для main
  5.1 Создаем массив mainDiv для элементов main
  5.2 Добавим в массив mainDiv массив с видеокурсами
  5.3 Создаем элемент elementsMain для каждой темы
6. По клику на элемент aside меню
  6.1 добавим ему class="active"
  6.2 показываем нужный заголовок h2
  6.3 показываем нужный main
7. По клику на элемент main-nav
  7.1 добавим ему class="active"
  7.2 показываем нужный aside
8. Создадим и вызовем событие click на первом aside эелементе
9. Добавим на страницу main-nav
10. Создадим и вызовем событие click на первом эелементе из main-nav
*/





var currentPage = document.querySelector('#front-video');

//1. Проверяем что страница имеет id="front-video"
if (currentPage) {
  (function () {
    //Ставим class="active" выбранному элементу меню и убираем с остальных
    var classActive = function classActive(elementOl, elementLi) {
      elementOl.forEach(function (li) {
        li.classList.remove('active');
      });
      elementLi.classList.add('active');

      //показываем элемент aside меню
      aside.classList.remove('none');
    }; //Функция addLearned добавляет в main-nav элемент Learned
    var addLearned = function addLearned() {
      var elementNav = document.createElement('a');
      elementNav.href = "#";
      elementNav.innerHTML = 'Learned';
      navDiv.push(elementNav);
      var elementMain = (0,_create_learned_list_js__WEBPACK_IMPORTED_MODULE_3__.createLearnedList)(_create_data_js__WEBPACK_IMPORTED_MODULE_1__.learnedVideo);

      //По клику на элемент Learned
      elementNav.addEventListener('click', function (e) {
        e.preventDefault();

        //добавим ему class="active"
        classActive(navDiv, elementNav);

        //показываем нужный заголовок h2
        h2.innerHTML = 'Изученные видеокурсы по frontend разработке';

        //скрываем элемент aside меню
        aside.classList.add('none');

        //показываем нужный main
        currentContent.innerHTML = '';
        currentContent.append.apply(currentContent, _toConsumableArray(elementMain));
      });
    };
    console.log('currentPage', currentPage);
    var mainNav = document.querySelector('#main-nav');
    var aside = document.querySelector('.aside');
    var h2 = document.querySelector('h2');
    var currentContent = document.querySelector('#video');

    //2. Создаем объект data упорядоченный по категориям и темам
    var data = _create_data_js__WEBPACK_IMPORTED_MODULE_1__.dataVideo;

    //3. Создаем main-nav
    //3.1 Создаем массив navDiv для элементов main-nav
    var navDiv = [];
    var _loop = function _loop(category) {
      //3.2 Создаем элемент elementNav для каждой категории
      var elementNav = document.createElement('a');
      elementNav.href = "#";
      elementNav.innerHTML = category;

      //3.3 Добавляем элемент elementNav в массив navDiv
      navDiv.push(elementNav);

      //4. Создаем aside меню
      //4.1 Создаем массив asideDiv для элементов aside меню
      var asideDiv = [];
      var _loop2 = function _loop2(theme) {
        //4.2 Создаем элемент elementAside для каждой темы
        var elementAside = document.createElement('a');
        elementAside.href = "#";
        elementAside.innerHTML = theme;

        //4.3 Добавляем элемент elementAside в массив asideDiv
        asideDiv.push(elementAside);

        //5. Создаем контент для main
        //5.1 Создаем массив mainDiv для элементов main
        var mainDiv = [];
        var _iterator = _createForOfIteratorHelper(data[category][theme]),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var content = _step.value;
            //5.2 Добавим в массив mainDiv массив с видеокурсами
            mainDiv.push(content);
          }

          //5.3 Создаем элемент elementsMain для каждой темы
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        var elementMain = (0,_create_list_js__WEBPACK_IMPORTED_MODULE_2__.createList)(mainDiv);

        //6. По клику на элемент aside меню
        elementAside.addEventListener('click', function (e) {
          e.preventDefault();

          //6.1 добавим ему class="active"
          classActive(asideDiv, elementAside);

          //6.2 показываем нужный заголовок h2
          h2.innerHTML = theme;

          //6.3 показываем нужный main
          currentContent.innerHTML = '';
          currentContent.append.apply(currentContent, _toConsumableArray(elementMain));
        });
      };
      for (var theme in data[category]) {
        _loop2(theme);
      }

      //7. По клику на элемент main-nav
      elementNav.addEventListener('click', function (e) {
        e.preventDefault();

        //7.1 добавим ему class="active"
        classActive(navDiv, elementNav);

        //7.2 показываем нужный aside
        aside.innerHTML = '';
        aside.append.apply(aside, asideDiv);

        //8. Создадим и вызовем событие click на первом aside элементе
        var eventClick = new Event('click');
        asideDiv[0].dispatchEvent(eventClick);
      });
    };
    for (var category in data) {
      _loop(category);
    }

    //9. Добавим на страницу main-nav
    addLearned();
    mainNav.append.apply(mainNav, navDiv);

    //10. Создадим и вызовем событие click на первом эелементе из main-nav
    var eventClick = new Event('click');
    navDiv[0].dispatchEvent(eventClick);
  })();
}

/***/ }),

/***/ "./src/components/front-video/js/sort-video.js":
/*!*****************************************************!*\
  !*** ./src/components/front-video/js/sort-video.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sortVideo": () => (/* binding */ sortVideo)
/* harmony export */ });
/*****************
Функция sortVideo сортирует курсы по году, автору и названию
*****************/
function sortVideo(video) {
  video.sort(function (a, b) {
    if (a.year === b.year) {
      //Если год одинаковый то сортировать по автору
      if (a.author === b.author) {
        //Если автор одинаковый то сортировать по названию
        return a.title.localeCompare(b.title, 'en');
      } else {
        //Иначе сортировать по автору
        return a.author.localeCompare(b.title, 'en');
      }
    } else {
      return a.year - b.year;
    }
  });
  return video;
}

/***/ }),

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_header.scss */ "./src/components/header/_header.scss");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Header = /*#__PURE__*/function (_HTMLElement) {
  _inherits(Header, _HTMLElement);
  var _super = _createSuper(Header);
  function Header() {
    _classCallCheck(this, Header);
    return _super.call(this);
  }
  _createClass(Header, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.innerHTML = "\n    <header class=\"header container\" id=\"header\">\n      <div class=\"header__first-row\">\n        <div class=\"header__logo\">frontend200tb</div>\n        <div class=\"header__logo\">frontend</div>\n      </div>\n    </header>    \n    ";
    }
  }]);
  return Header;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('header-component', Header);

/***/ }),

/***/ "./src/components/footer/_footer.scss":
/*!********************************************!*\
  !*** ./src/components/footer/_footer.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/header/_header.scss":
/*!********************************************!*\
  !*** ./src/components/header/_header.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header */ "./src/components/header/header.js");
/* harmony import */ var _components_front_video_js_front_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/front-video/js/front-video */ "./src/components/front-video/js/front-video.js");
/* harmony import */ var _components_footer_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer */ "./src/components/footer/footer.js");




})();

/******/ })()
;
//# sourceMappingURL=index.js.map