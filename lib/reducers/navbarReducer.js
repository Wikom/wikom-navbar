"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actionTypes = require("../actions/actionTypes");

var _reactRouterRedux = require("react-router-redux");

/**
 * Created by Mavin on 17.05.2017
 */
var navbarReducer = function navbarReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actionTypes.TOGGLE_NAVBAR:
      return {
        toggled: action.name || null
      };

    case _actionTypes.TOGGLE_NAVBAR_DROPDOWN:
      return {
        toggled: state.toggled || null,
        openDropdown: action.name || null
      };

    case _reactRouterRedux.LOCATION_CHANGE:
      return {};

    default:
      return state;
  }
};

var _default = navbarReducer;
exports["default"] = _default;