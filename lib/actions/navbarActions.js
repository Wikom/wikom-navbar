'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hideNavbarDropdown = exports.showNavbarDropdown = exports.hideNavbar = exports.showNavbar = undefined;

var _actionTypes = require('./actionTypes');

var showNavbar = exports.showNavbar = function showNavbar(name) {
    return {
        type: _actionTypes.TOGGLE_NAVBAR,
        name: name
    };
}; /**
    * Created by Mavin on 17.05.2017
    */

var hideNavbar = exports.hideNavbar = function hideNavbar() {
    return {
        type: _actionTypes.TOGGLE_NAVBAR
    };
};
var showNavbarDropdown = exports.showNavbarDropdown = function showNavbarDropdown(name) {

    return {
        type: _actionTypes.TOGGLE_NAVBAR_DROPDOWN,
        name: name
    };
};
var hideNavbarDropdown = exports.hideNavbarDropdown = function hideNavbarDropdown() {
    return {
        type: _actionTypes.TOGGLE_NAVBAR_DROPDOWN
    };
};