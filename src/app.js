/**
 * Created by juanitasoranno on 1/18/17.
 */

 // Dependencies
 import React from 'react';
 import ReactDOM from 'react-dom';
 import routes from './config/routes';
 import { IndexRoute, Route, browserHistory} from 'react-router';
 import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch } from 'react-axios'
 var Router = require('react-router').Router;


 // Render
 ReactDOM.render(
   <Router>{routes}</Router>,
   document.getElementById('app')
 );
