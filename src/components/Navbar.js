/**
 * Created by Marvin Ruppelt on 17.05.17.
 */

import React from 'react'
import {connect} from 'react-redux'
import findInObject from 'find-in-object'
import PropTypes from 'prop-types'
import {showNavbar, hideNavbar} from '../actions/navbarActions'


const Navbar = ({name, children, navbar, className, show, hide, containerFluid, ...rest}) => {
    return (
        <nav className={className || 'navbar navbar-default'}>
            <div className={containerFluid ? 'container-fluid' : 'container'}>
                <div className="navbar-header">
                    <button type="button" className={'navbar-toggle' + (name == findInObject('toggled', navbar) ? '' : ' collapsed')}
                        onClick={(name == findInObject('toggled', navbar)) ? () => hide() : () => show(name)}>
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                    </button>
                </div>

                <div className={'collapse navbar-collapse' + (name == findInObject('toggled', navbar) ?' in' : '')}>
                    <ul className="nav navbar-nav">
                        {children}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    name: PropTypes.string
};


const mapStateToProps = (state, props) => {
    return ({
        navbar: state.navbar
    })
};

const mapDispatchToProps = (dispatch) => ({
    show: (name) => dispatch(showNavbar(name)),
    hide: () => dispatch(hideNavbar()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
