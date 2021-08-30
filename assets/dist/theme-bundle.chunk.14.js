(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./assets/js/theme/product/customProd.js":
/*!***********************************************!*\
  !*** ./assets/js/theme/product/customProd.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Custom; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Custom = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Custom, _PageManager);

  function Custom() {
    return _PageManager.apply(this, arguments) || this;
  }

  var _proto = Custom.prototype;

  _proto.onReady = function onReady() {
    // alert("Hello world!");
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].hooks.on('cookie-privacy-notification', function (event, privacyMessage) {
      // You can make your own custom modal or alert box
      // appear in your theme using the privacyMessage provided
      myCustomAlert(privacyMessage);
      console.log(privacyMessage); // Call event.preventDefault() to prevent the default
      // browser alert from occurring in stencil-utils

      event.preventDefault();
    });
  };

  return Custom;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]); //  /home/user/stencildemo1/BitBucket/bigcommerce_learn/learn_bigcommerce/assets/js/theme/custom/customcategory.js
//  /home/user/stencildemo1/Cornerstone-clear/xStencil-Sandbox/assets/js/theme/product/customProd.js




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvcHJvZHVjdC9jdXN0b21Qcm9kLmpzIl0sIm5hbWVzIjpbIkN1c3RvbSIsIm9uUmVhZHkiLCJ1dGlscyIsImhvb2tzIiwib24iLCJldmVudCIsInByaXZhY3lNZXNzYWdlIiwibXlDdXN0b21BbGVydCIsImNvbnNvbGUiLCJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsIlBhZ2VNYW5hZ2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUdxQkEsTTs7Ozs7Ozs7O1NBQ2pCQyxPLEdBQUEsbUJBQVM7QUFDTDtBQUNBQyxzRUFBSyxDQUFDQyxLQUFOLENBQVlDLEVBQVosQ0FBZSw2QkFBZixFQUE4QyxVQUFDQyxLQUFELEVBQVFDLGNBQVIsRUFBMkI7QUFFckU7QUFDQTtBQUNBQyxtQkFBYSxDQUFDRCxjQUFELENBQWI7QUFDQUUsYUFBTyxDQUFDQyxHQUFSLENBQVlILGNBQVosRUFMcUUsQ0FPckU7QUFDQTs7QUFDQUQsV0FBSyxDQUFDSyxjQUFOO0FBQ0QsS0FWSDtBQVdILEc7OztFQWQrQkMscUQsR0FnQnBDO0FBQ0EiLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjE0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4uL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbSBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBvblJlYWR5KCl7XG4gICAgICAgIC8vIGFsZXJ0KFwiSGVsbG8gd29ybGQhXCIpO1xuICAgICAgICB1dGlscy5ob29rcy5vbignY29va2llLXByaXZhY3ktbm90aWZpY2F0aW9uJywgKGV2ZW50LCBwcml2YWN5TWVzc2FnZSkgPT4ge1xuXG4gICAgICAgICAgICAvLyBZb3UgY2FuIG1ha2UgeW91ciBvd24gY3VzdG9tIG1vZGFsIG9yIGFsZXJ0IGJveFxuICAgICAgICAgICAgLy8gYXBwZWFyIGluIHlvdXIgdGhlbWUgdXNpbmcgdGhlIHByaXZhY3lNZXNzYWdlIHByb3ZpZGVkXG4gICAgICAgICAgICBteUN1c3RvbUFsZXJ0KHByaXZhY3lNZXNzYWdlKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByaXZhY3lNZXNzYWdlKTtcblxuICAgICAgICAgICAgLy8gQ2FsbCBldmVudC5wcmV2ZW50RGVmYXVsdCgpIHRvIHByZXZlbnQgdGhlIGRlZmF1bHRcbiAgICAgICAgICAgIC8vIGJyb3dzZXIgYWxlcnQgZnJvbSBvY2N1cnJpbmcgaW4gc3RlbmNpbC11dGlsc1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9KTtcbiAgICB9XG59XG4vLyAgL2hvbWUvdXNlci9zdGVuY2lsZGVtbzEvQml0QnVja2V0L2JpZ2NvbW1lcmNlX2xlYXJuL2xlYXJuX2JpZ2NvbW1lcmNlL2Fzc2V0cy9qcy90aGVtZS9jdXN0b20vY3VzdG9tY2F0ZWdvcnkuanNcbi8vICAvaG9tZS91c2VyL3N0ZW5jaWxkZW1vMS9Db3JuZXJzdG9uZS1jbGVhci94U3RlbmNpbC1TYW5kYm94L2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0L2N1c3RvbVByb2QuanNcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==