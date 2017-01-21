/**
 * Created by juanitasoranno on 1/18/17.
 */
// Dependencies
import React from 'react';
var Router = require('react-router');
var Route = Router.Route;


//Components
var Master = require('../components/Master');
var Original = require('../components/Original');
var Revision = require('../components/Revision');
var Slider = require('../components/Slider');
var Navbar = require('../components/Navbar');
var Footer = require('../components/Footer');


//
// render(
//     <Router history={browserHistory} routes={routes} />,
//     document.getElementById('app')
// );
//
// module.exports = (
//     <Route path="/" component={Master}>
//         <Route path='Original' component={Original} />
//         <Route path='Revision' component={Revision} />
//     </Route>
// );



render(
    <Router history={browserHistory}>
        <Route path='/' component={Master}>
            <Route path='nav' component={Navbar} />
            <Route path='slider' component={Slider} />
            <Route path='original' component={Original} />
            <Route path='revision' component={Revision} />
            <Route path='footer' component={Footer} />
        </Route>
    </Router>,
    document.getElementById('app')
);