"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _findInObject = _interopRequireDefault(require("find-in-object"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _navbarActions = require("../actions/navbarActions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var NavbarDropdown =
/*#__PURE__*/
function (_Component) {
  _inherits(NavbarDropdown, _Component);

  function NavbarDropdown() {
    _classCallCheck(this, NavbarDropdown);

    return _possibleConstructorReturn(this, _getPrototypeOf(NavbarDropdown).apply(this, arguments));
  }

  _createClass(NavbarDropdown, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.isOpen && !prevProps.isOpen) {
        document.addEventListener('click', this.props.hide);
      } else if (!this.props.isOpen && prevProps.isOpen) {
        document.removeEventListener('click', this.props.hide);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.props.hide);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          children = _this$props.children,
          className = _this$props.className,
          label = _this$props.label,
          show = _this$props.show,
          hide = _this$props.hide,
          isOpen = _this$props.isOpen;
      return _react["default"].createElement("li", {
        className: 'dropdown' + (isOpen === true ? ' open' : '')
      }, _react["default"].createElement("button", {
        className: "dropdown-toggle",
        role: "button",
        onClick: isOpen === true ? function () {
          return hide();
        } : function () {
          return show(name);
        }
      }, label, " ", _react["default"].createElement("span", {
        className: "caret"
      })), _react["default"].createElement("ul", {
        className: "dropdown-menu"
      }, children));
    }
  }]);

  return NavbarDropdown;
}(_react.Component);

;
NavbarDropdown.propTypes = {
  name: _propTypes["default"].string,
  label: _propTypes["default"].string
};

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var navbar = _ref.navbar;
  var name = _ref2.name;
  return {
    isOpen: name === (0, _findInObject["default"])('openDropdown', navbar)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    show: function show(name) {
      return dispatch((0, _navbarActions.showNavbarDropdown)(name));
    },
    hide: function hide() {
      return dispatch((0, _navbarActions.hideNavbarDropdown)());
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NavbarDropdown);

exports["default"] = _default;