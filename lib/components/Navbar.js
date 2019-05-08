"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _findInObject = _interopRequireDefault(require("find-in-object"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _navbarActions = require("../actions/navbarActions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Navbar = function Navbar(_ref) {
  var name = _ref.name,
      children = _ref.children,
      navbar = _ref.navbar,
      className = _ref.className,
      show = _ref.show,
      hide = _ref.hide,
      containerFluid = _ref.containerFluid,
      rest = _objectWithoutProperties(_ref, ["name", "children", "navbar", "className", "show", "hide", "containerFluid"]);

  return _react["default"].createElement("nav", {
    className: className || 'navbar navbar-default'
  }, _react["default"].createElement("div", {
    className: containerFluid ? 'container-fluid' : 'container'
  }, _react["default"].createElement("div", {
    className: "navbar-header"
  }, _react["default"].createElement("button", {
    type: "button",
    className: 'navbar-toggle' + (name == (0, _findInObject["default"])('toggled', navbar) ? '' : ' collapsed'),
    onClick: name == (0, _findInObject["default"])('toggled', navbar) ? function () {
      return hide();
    } : function () {
      return show(name);
    }
  }, _react["default"].createElement("span", {
    className: "sr-only"
  }, "Toggle navigation"), _react["default"].createElement("span", {
    className: "icon-bar"
  }), _react["default"].createElement("span", {
    className: "icon-bar"
  }), _react["default"].createElement("span", {
    className: "icon-bar"
  }))), _react["default"].createElement("div", {
    className: 'collapse navbar-collapse' + (name == (0, _findInObject["default"])('toggled', navbar) ? ' in' : '')
  }, _react["default"].createElement("ul", {
    className: "nav navbar-nav"
  }, children))));
};

Navbar.propTypes = {
  name: _propTypes["default"].string
};

var mapStateToProps = function mapStateToProps(state, props) {
  return {
    navbar: state.navbar
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    show: function show(name) {
      return dispatch((0, _navbarActions.showNavbar)(name));
    },
    hide: function hide() {
      return dispatch((0, _navbarActions.hideNavbar)());
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Navbar);

exports["default"] = _default;