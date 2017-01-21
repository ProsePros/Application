/**
 * Created by juanitasoranno on 1/18/17.
 */
// Dependencies
var React = require('react');
var router = require('react-router');
var Route = router.Route;
var IndexRoute = router.IndexRoute;
var Router = router.Router;
var browserHistory = router.browserHistory;

//Why must we change all of the imports? It works on the other tutorials using nodeJS T_T
//Am I supposed to have an index.js and this routes.js separated? Just listing and exporting the routes, then rendering from the other file?
//Why can't I test this without internet???????
//this could be why https://stackoverflow.com/questions/33950433/warning-failed-proptype-invalid-prop-component-supplied-to-route

//Components
var Master = require('../components/Master');
var Original = require('../components/Original');
var Revision = require('../components/Revision');
var Slider = require('../components/Slider');
var Navbar = require('../components/Navbar');
var Footer = require('../components/Footer');





module.exports = (
    <Router history={browserHistory}>
        <Route path='/' component={Master}>
            <Route path='nav' component={Navbar} />
            <Route path='slider' component={Slider} />
            <Route path='original' component={Original} />
            <Route path='revision' component={Revision} />
            <Route path='footer' component={Footer} />
            <IndexRoute component={Master} />
        </Route>
    </Router>,
    document.getElementById('app')
);