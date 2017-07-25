'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _findInObject = require('find-in-object');

var _findInObject2 = _interopRequireDefault(_findInObject);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _navbarActions = require('../actions/navbarActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Marvin Ruppelt on 17.05.17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var NavbarDropdown = function (_Component) {
    _inherits(NavbarDropdown, _Component);

    function NavbarDropdown() {
        _classCallCheck(this, NavbarDropdown);

        return _possibleConstructorReturn(this, (NavbarDropdown.__proto__ || Object.getPrototypeOf(NavbarDropdown)).apply(this, arguments));
    }

    _createClass(NavbarDropdown, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (this.props.isOpen && !prevProps.isOpen) {
                document.addEventListener('click', this.props.hide);
            } else if (!this.props.isOpen && prevProps.isOpen) {
                document.removeEventListener('click', this.props.hide);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('click', this.props.hide);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                name = _props.name,
                children = _props.children,
                className = _props.className,
                label = _props.label,
                show = _props.show,
                hide = _props.hide,
                isOpen = _props.isOpen;


            return _react2.default.createElement(
                'li',
                { className: 'dropdown' + (isOpen === true ? ' open' : '') },
                _react2.default.createElement(
                    'button',
                    { className: 'dropdown-toggle', role: 'button',
                        onClick: isOpen === true ? function () {
                            return hide();
                        } : function () {
                            return show(name);
                        } },
                    label,
                    ' ',
                    _react2.default.createElement('span', { className: 'caret' })
                ),
                _react2.default.createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    children
                )
            );
        }
    }]);

    return NavbarDropdown;
}(_react.Component);

;

NavbarDropdown.propTypes = {
    name: _propTypes2.default.string,
    label: _propTypes2.default.string
};

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
    var navbar = _ref.navbar;
    var name = _ref2.name;

    return {
        isOpen: name === (0, _findInObject2.default)('openDropdown', navbar)
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NavbarDropdown);