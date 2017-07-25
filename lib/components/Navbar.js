'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _findInObject = require('find-in-object');

var _findInObject2 = _interopRequireDefault(_findInObject);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _navbarActions = require('../actions/navbarActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                              * Created by Marvin Ruppelt on 17.05.17.
                                                                                                                                                                                                                              */

var Navbar = function Navbar(_ref) {
    var name = _ref.name,
        children = _ref.children,
        navbar = _ref.navbar,
        className = _ref.className,
        show = _ref.show,
        hide = _ref.hide,
        containerFluid = _ref.containerFluid,
        rest = _objectWithoutProperties(_ref, ['name', 'children', 'navbar', 'className', 'show', 'hide', 'containerFluid']);

    return _react2.default.createElement(
        'nav',
        { className: className || 'navbar navbar-default' },
        _react2.default.createElement(
            'div',
            { className: containerFluid ? 'container-fluid' : 'container' },
            _react2.default.createElement(
                'div',
                { className: 'navbar-header' },
                _react2.default.createElement(
                    'button',
                    { type: 'button', className: 'navbar-toggle' + (name == (0, _findInObject2.default)('toggled', navbar) ? '' : ' collapsed'),
                        onClick: name == (0, _findInObject2.default)('toggled', navbar) ? function () {
                            return hide();
                        } : function () {
                            return show(name);
                        } },
                    _react2.default.createElement(
                        'span',
                        { className: 'sr-only' },
                        'Toggle navigation'
                    ),
                    _react2.default.createElement('span', { className: 'icon-bar' }),
                    _react2.default.createElement('span', { className: 'icon-bar' }),
                    _react2.default.createElement('span', { className: 'icon-bar' })
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'collapse navbar-collapse' + (name == (0, _findInObject2.default)('toggled', navbar) ? ' in' : '') },
                _react2.default.createElement(
                    'ul',
                    { className: 'nav navbar-nav' },
                    children
                )
            )
        )
    );
};

Navbar.propTypes = {
    name: _propTypes2.default.string
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Navbar);