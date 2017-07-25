/**
 * Created by Mavin on 17.05.2017
 */

import {TOGGLE_NAVBAR, TOGGLE_NAVBAR_DROPDOWN} from '../actions/actionTypes'
import {LOCATION_CHANGE} from 'react-router-redux'

const navbarReducer = (state = [], action) => {
    switch (action.type) {
        case TOGGLE_NAVBAR:
            return {
                toggled: action.name || null
            };
        case TOGGLE_NAVBAR_DROPDOWN:
            return {
                toggled: state.toggled || null,
                openDropdown: action.name || null
            };
        case LOCATION_CHANGE:
            return {};
        default:
            return state;
    }
};

export default navbarReducer;