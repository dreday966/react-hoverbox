"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FocusBox = exports.HoverBox = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
  模板
  <HoverBox propsFn={isHover => {}} {...props}>
    {children}
  </HoverBox>
*/
var HoverBox = exports.HoverBox = function (_Component) {
  _inherits(HoverBox, _Component);

  function HoverBox() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HoverBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HoverBox.__proto__ || Object.getPrototypeOf(HoverBox)).call.apply(_ref, [this].concat(args))), _this), _this.state = { isHover: false }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HoverBox, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var isHover = this.state.isHover;


      var props = {};

      Object.keys(this.props).forEach(function (key) {
        var value = _this2.props[key];

        var prop = typeof value === "function" ? value(isHover) : value;

        prop && (props[key] = prop);
      });

      return _react2.default.createElement("div", _extends({
        onMouseEnter: function onMouseEnter() {
          return _this2.setState({ isHover: true });
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.setState({ isHover: false });
        }
      }, props));
    }
  }]);

  return HoverBox;
}(_react.Component);

;

var FocusBox = exports.FocusBox = function (_Component2) {
  _inherits(FocusBox, _Component2);

  function FocusBox() {
    var _ref2;

    var _temp2, _this3, _ret2;

    _classCallCheck(this, FocusBox);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this3 = _possibleConstructorReturn(this, (_ref2 = FocusBox.__proto__ || Object.getPrototypeOf(FocusBox)).call.apply(_ref2, [this].concat(args))), _this3), _this3.state = { isFocus: false }, _temp2), _possibleConstructorReturn(_this3, _ret2);
  }

  _createClass(FocusBox, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      var isFocus = this.state.isFocus;


      var props = {};

      Object.keys(this.props).forEach(function (key) {
        var value = _this4.props[key];

        var prop = typeof value === "function" ? value(isFocus) : value;

        prop && (props[key] = prop);
      });

      return _react2.default.createElement("div", _extends({
        onFocus: function onFocus() {
          return _this4.setState({ isFocus: true });
        },
        onBlur: function onBlur() {
          return _this4.setState({ isFocus: false });
        }
      }, props));
    }
  }]);

  return FocusBox;
}(_react.Component);

;

exports.default = HoverBox;