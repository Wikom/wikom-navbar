/**
 * Created by Marvin Ruppelt on 17.05.17.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import findInObject from 'find-in-object'
import PropTypes from 'prop-types'
import {showNavbarDropdown, hideNavbarDropdown} from '../actions/navbarActions'

class NavbarDropdown extends Component {

    componentDidUpdate(prevProps) {
        if (this.props.isOpen && !prevProps.isOpen) {
            document.addEventListener('click', this.props.hide);
        } else if (!this.props.isOpen && prevProps.isOpen) {
            document.removeEventListener('click', this.props.hide);
        }
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.props.hide);
    }

    render() {
        const {name, children, className, label, show, hide, isOpen} = this.props;

        return (
            <li className={'dropdown' + (isOpen === true ? ' open' : '')}>
                <button className="dropdown-toggle" role="button"
                   onClick={isOpen === true ? () => hide() : () => show(name)}>
                    {label} <span className="caret"/>
                </button>
                <ul className="dropdown-menu">
                    {children}
                </ul>
            </li>
        );
    }
};

NavbarDropdown.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
};

const mapStateToProps = ({navbar}, {name}) => {
    return ({
        isOpen: name === findInObject('openDropdown', navbar)
    })
};

const mapDispatchToProps = (dispatch) => ({
    show: (name) => dispatch(showNavbarDropdown(name)),
    hide: () => dispatch(hideNavbarDropdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavbarDropdown);
