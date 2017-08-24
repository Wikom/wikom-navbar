# wikom-navbar

wikom-navbar provides a simple way for using **bootstrap**-based navbar,
optimized for `react-redux` usage.

## Installation

Add wikom-navbar to your js project with yarn:

```javascript
yarn add git+https://github.com/Wikom/wikom-navbar.git
```

or with npm:

```javascript
npm install --save git+https://github.com/Wikom/wikom-navbar.git
```

You can also add the standalone build directly to your page. Download dist/index.js and add it to your html-page:

```html
<script src="path-to-your-downloaded-js-file"></script>
```

Remember to include all dependencies as well.

### important:
To use interative functions of wikom-navbar
*(collapse and extend navbar and navbar dropdowns)*  
don't forget to import navbarReducer:

```javascript
// rootReducer.js
import {navbarReducer} from 'wikom-navbar'

 const rootReducer = combineReducers({
    navbar: navbarReducer,
    // other reducers
});
```

## Components

### Navbar
Surrounding navbar. Children provided are navigation elements.

| property (*required)| type | description |
|---|---|---|
| name*          | string  | identifies navbar for state keys |
| className      | string  | CSS class for displayed navbar<br />*default: 'navbar navbar-default'* |
| containerFluid | boolean | navbar content is wrapped in **bootstrap**-container. Option to switch between container and container-fluid (bootstrap css class) |


### NavbarDropdown
To be placed as direct child of Navbar.  
Provides an HTML wrapper (```<ul>```)

| property (*required)| type | description |
|---|---|---|
| name*      | string  | identifies navbar-dropdown for state keys |
| label*     | string  | first-level navigation label for dropdown |


## Example
```javascript
import React from 'react'
import {Navbar, NavbarDropdown}  from 'wikom-navbar'
import {Link} from 'react-router-dom'

const Navigation = () =>
  <Navbar name="my-navbar">
        <li><a href="/">Home</a></li>
        <li><Link to="/link-to-redux-page">Redux Link</Link></li>
        <NavbarDropdown name="navbar-dropdown" label="My Dropdown">
            <li><Link to="/link-to-redux-page">Redux Link</Link></li>
            <li className="divider"/>
            <li><Link to="/link-to-redux-page">Redux Link</Link></li>
        </NavbarDropdown>
  </Navbar>
```