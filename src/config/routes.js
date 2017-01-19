/**
 * Created by juanitasoranno on 1/18/17.
 */
// Dependencies
import React from 'react';
var Router = require('react-router');
var Route = Router.Route;

//Components
import Master from '../components/Master';
import Original from '../components/Original';
import Revision from '../components/Revision';


module.exports = (
    <Route path="/" component={Master}>
        <Route path='Original' component={Original} />
        <Route path='Revision' component={Revision} />
    </Route>
);