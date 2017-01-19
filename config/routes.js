/**
 * Created by juanitasoranno on 1/18/17.
 */
// Dependencies
import React from 'react';
var Router = require('react-router');
var Route = Router.Route;

//Components
import Home from '../src/frontend/components/Home';
import Vote from '../src/frontend/components/Vote';

module.exports = (
    <Route path="/" component={Home}>
        <Route path='Vote' component={Vote} />
    </Route>
);