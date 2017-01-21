/**
 * Created by juanitasoranno on 1/19/17.
 */
var react = require ('react');
var ReactDOM = require('react-dom');

export class footer extends react.component{

	render() {

		return(
			<footer className="page-footer cyan darken-3 center">
			    <div className="container left-align">
			        <div className="row">
			              <div className="col l6 s12">                
			                 <ul>
			                    <li><a className="white-text" href="#!">ABOUT &nbsp</a>
			                    <a className="white-text" href="#!">BLOG &nbsp</a>
			                    <a className="white-text" href="#!">TERMS &nbsp</a>
			                    <a className="white-text" href="#!">CONTACT </a></li>
			                </ul>
			              </div>
			        </div>
			    </div>
			    <div className="footer-copyright">
			        <div className="container">
			        © 2017 ProsePros
			        </div>
			    </div>
			</footer>

		);
	}
}