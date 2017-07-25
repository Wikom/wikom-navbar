/**
 * Created by Mavin on 17.05.2017
 */

import {TOGGLE_NAVBAR, TOGGLE_NAVBAR_DROPDOWN} from './actionTypes'


export const showNavbar = (name) => ({
    type: TOGGLE_NAVBAR,
    name: name
});
export const hideNavbar = () => ({
    type: TOGGLE_NAVBAR
});
export const showNavbarDropdown = (name) => {


    return {
        type: TOGGLE_NAVBAR_DROPDOWN,
        name: name
    }
};
export const hideNavbarDropdown = () => ({
    type: TOGGLE_NAVBAR_DROPDOWN
});
