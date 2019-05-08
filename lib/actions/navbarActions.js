"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideNavbarDropdown = exports.showNavbarDropdown = exports.hideNavbar = exports.showNavbar = void 0;

var _actionTypes = require("./actionTypes");

/**
 * Created by Mavin on 17.05.2017
 */
var showNavbar = function showNavbar(name) {
  return {
    type: _actionTypes.TOGGLE_NAVBAR,
    name: name
  };
};

exports.showNavbar = showNavbar;

var hideNavbar = function hideNavbar() {
  return {
    type: _actionTypes.TOGGLE_NAVBAR
  };
};

exports.hideNavbar = hideNavbar;

var showNavbarDropdown = function showNavbarDropdown(name) {
  return {
    type: _actionTypes.TOGGLE_NAVBAR_DROPDOWN,
    name: name
  };
};

exports.showNavbarDropdown = showNavbarDropdown;

var hideNavbarDropdown = function hideNavbarDropdown() {
  return {
    type: _actionTypes.TOGGLE_NAVBAR_DROPDOWN
  };
};

exports.hideNavbarDropdown = hideNavbarDropdown;