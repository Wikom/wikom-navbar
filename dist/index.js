!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react"),require("react-redux"),require("prop-types")):"function"==typeof define&&define.amd?define("wikomNavbar",["react","react-redux","prop-types"],r):"object"==typeof exports?exports.wikomNavbar=r(require("react"),require("react-redux"),require("prop-types")):e.wikomNavbar=r(e.react,e["react-redux"],e["prop-types"])}(this,function(e,r,t){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0}),r.navbarReducer=r.hideNavbarDropdown=r.showNavbarDropdown=r.hideNavbar=r.showNavbar=r.NavbarDropdown=r.Navbar=void 0;var o=t(1),a=n(o),u=t(8),i=n(u),c=t(9),l=n(c),s=t(6);r.default=a.default,r.Navbar=a.default,r.NavbarDropdown=i.default,r.showNavbar=s.showNavbar,r.hideNavbar=s.hideNavbar,r.showNavbarDropdown=s.showNavbarDropdown,r.hideNavbarDropdown=s.hideNavbarDropdown,r.navbarReducer=l.default},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,r){var t={};for(var n in e)r.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}Object.defineProperty(r,"__esModule",{value:!0});var a=t(2),u=n(a),i=t(3),c=t(4),l=n(c),s=t(5),d=n(s),f=t(6),p=function(e){var r=e.name,t=e.children,n=e.navbar,a=e.className,i=e.show,c=e.hide,s=e.containerFluid;o(e,["name","children","navbar","className","show","hide","containerFluid"]);return u.default.createElement("nav",{className:a||"navbar navbar-default"},u.default.createElement("div",{className:s?"container-fluid":"container"},u.default.createElement("div",{className:"navbar-header"},u.default.createElement("button",{type:"button",className:"navbar-toggle"+(r==(0,l.default)("toggled",n)?"":" collapsed"),onClick:r==(0,l.default)("toggled",n)?function(){return c()}:function(){return i(r)}},u.default.createElement("span",{className:"sr-only"},"Toggle navigation"),u.default.createElement("span",{className:"icon-bar"}),u.default.createElement("span",{className:"icon-bar"}),u.default.createElement("span",{className:"icon-bar"}))),u.default.createElement("div",{className:"collapse navbar-collapse"+(r==(0,l.default)("toggled",n)?" in":"")},u.default.createElement("ul",{className:"nav navbar-nav"},t))))};p.propTypes={name:d.default.string};var v=function(e,r){return{navbar:e.navbar}},b=function(e){return{show:function(r){return e((0,f.showNavbar)(r))},hide:function(){return e((0,f.hideNavbar)())}}};r.default=(0,i.connect)(v,b)(p)},function(r,t){r.exports=e},function(e,t){e.exports=r},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=function e(r,t){if(null==t||null==r)return null;var n=r.split(".");if(n.length>1){var o=t[n.shift()];return e(n.join("."),o)}return t&&"undefined"!=typeof t[r]?t[r]:null};r.default=t},function(e,r){e.exports=t},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.hideNavbarDropdown=r.showNavbarDropdown=r.hideNavbar=r.showNavbar=void 0;var n=t(7);r.showNavbar=function(e){return{type:n.TOGGLE_NAVBAR,name:e}},r.hideNavbar=function(){return{type:n.TOGGLE_NAVBAR}},r.showNavbarDropdown=function(e){return{type:n.TOGGLE_NAVBAR_DROPDOWN,name:e}},r.hideNavbarDropdown=function(){return{type:n.TOGGLE_NAVBAR_DROPDOWN}}},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t="@@wikom-navbar/";r.TOGGLE_NAVBAR=t+"TOGGLE_NAVBAR",r.TOGGLE_NAVBAR_DROPDOWN=t+"TOGGLE_NAVBAR_DROPDOWN"},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function a(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function u(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),c=t(2),l=n(c),s=t(3),d=t(4),f=n(d),p=t(5),v=n(p),b=t(6),h=function(e){function r(){return o(this,r),a(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return u(r,e),i(r,[{key:"componentDidUpdate",value:function(e){this.props.isOpen&&!e.isOpen?document.addEventListener("click",this.props.hide):!this.props.isOpen&&e.isOpen&&document.removeEventListener("click",this.props.hide)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.props.hide)}},{key:"render",value:function(){var e=this.props,r=e.name,t=e.children,n=(e.className,e.label),o=e.show,a=e.hide,u=e.isOpen;return l.default.createElement("li",{className:"dropdown"+(u===!0?" open":"")},l.default.createElement("button",{className:"dropdown-toggle",role:"button",onClick:u===!0?function(){return a()}:function(){return o(r)}},n," ",l.default.createElement("span",{className:"caret"})),l.default.createElement("ul",{className:"dropdown-menu"},t))}}]),r}(c.Component);h.propTypes={name:v.default.string,label:v.default.string};var y=function(e,r){var t=e.navbar,n=r.name;return{isOpen:n===(0,f.default)("openDropdown",t)}},O=function(e){return{show:function(r){return e((0,b.showNavbarDropdown)(r))},hide:function(){return e((0,b.hideNavbarDropdown)())}}};r.default=(0,s.connect)(y,O)(h)},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(7),o=t(10),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments[1];switch(r.type){case n.TOGGLE_NAVBAR:return{toggled:r.name||null};case n.TOGGLE_NAVBAR_DROPDOWN:return{toggled:e.toggled||null,openDropdown:r.name||null};case o.LOCATION_CHANGE:return{};default:return e}};r.default=a},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0}),r.routerMiddleware=r.routerActions=r.goForward=r.goBack=r.go=r.replace=r.push=r.CALL_HISTORY_METHOD=r.routerReducer=r.LOCATION_CHANGE=r.syncHistoryWithStore=void 0;var o=t(11);Object.defineProperty(r,"LOCATION_CHANGE",{enumerable:!0,get:function(){return o.LOCATION_CHANGE}}),Object.defineProperty(r,"routerReducer",{enumerable:!0,get:function(){return o.routerReducer}});var a=t(12);Object.defineProperty(r,"CALL_HISTORY_METHOD",{enumerable:!0,get:function(){return a.CALL_HISTORY_METHOD}}),Object.defineProperty(r,"push",{enumerable:!0,get:function(){return a.push}}),Object.defineProperty(r,"replace",{enumerable:!0,get:function(){return a.replace}}),Object.defineProperty(r,"go",{enumerable:!0,get:function(){return a.go}}),Object.defineProperty(r,"goBack",{enumerable:!0,get:function(){return a.goBack}}),Object.defineProperty(r,"goForward",{enumerable:!0,get:function(){return a.goForward}}),Object.defineProperty(r,"routerActions",{enumerable:!0,get:function(){return a.routerActions}});var u=t(13),i=n(u),c=t(14),l=n(c);r.syncHistoryWithStore=i.default,r.routerMiddleware=l.default},function(e,r){"use strict";function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=r.type,u=r.payload;return t===o?n({},e,{locationBeforeTransitions:u}):e}Object.defineProperty(r,"__esModule",{value:!0});var n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e};r.routerReducer=t;var o=r.LOCATION_CHANGE="@@router/LOCATION_CHANGE",a={locationBeforeTransitions:null}},function(e,r){"use strict";function t(e){return function(){for(var r=arguments.length,t=Array(r),o=0;o<r;o++)t[o]=arguments[o];return{type:n,payload:{method:e,args:t}}}}Object.defineProperty(r,"__esModule",{value:!0});var n=r.CALL_HISTORY_METHOD="@@router/CALL_HISTORY_METHOD",o=r.push=t("push"),a=r.replace=t("replace"),u=r.go=t("go"),i=r.goBack=t("goBack"),c=r.goForward=t("goForward");r.routerActions={push:o,replace:a,go:u,goBack:i,goForward:c}},function(e,r,t){"use strict";function n(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=t.selectLocationState,i=void 0===n?u:n,c=t.adjustUrlOnReplay,l=void 0===c||c;if("undefined"==typeof i(r.getState()))throw new Error("Expected the routing state to be available either as `state.routing` or as the custom expression you can specify as `selectLocationState` in the `syncHistoryWithStore()` options. Ensure you have added the `routerReducer` to your store's reducers via `combineReducers` or whatever method you use to isolate your reducers.");var s=void 0,d=void 0,f=void 0,p=void 0,v=void 0,b=function(e){var t=i(r.getState());return t.locationBeforeTransitions||(e?s:void 0)};if(s=b(),l){var h=function(){var r=b(!0);v!==r&&s!==r&&(d=!0,v=r,e.transitionTo(o({},r,{action:"PUSH"})),d=!1)};f=r.subscribe(h),h()}var y=function(e){d||(v=e,!s&&(s=e,b())||r.dispatch({type:a.LOCATION_CHANGE,payload:e}))};return p=e.listen(y),e.getCurrentLocation&&y(e.getCurrentLocation()),o({},e,{listen:function(t){var n=b(!0),o=!1,a=r.subscribe(function(){var e=b(!0);e!==n&&(n=e,o||t(n))});return e.getCurrentLocation||t(n),function(){o=!0,a()}},unsubscribe:function(){l&&f(),p()}})}Object.defineProperty(r,"__esModule",{value:!0});var o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e};r.default=n;var a=t(11),u=function(e){return e.routing}},function(e,r,t){"use strict";function n(e){if(Array.isArray(e)){for(var r=0,t=Array(e.length);r<e.length;r++)t[r]=e[r];return t}return Array.from(e)}function o(e){return function(){return function(r){return function(t){if(t.type!==a.CALL_HISTORY_METHOD)return r(t);var o=t.payload,u=o.method,i=o.args;e[u].apply(e,n(i))}}}}Object.defineProperty(r,"__esModule",{value:!0}),r.default=o;var a=t(12)}])});
//# sourceMappingURL=index.js.map