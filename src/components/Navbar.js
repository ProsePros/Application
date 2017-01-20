/**
 * Created by juanitasoranno on 1/18/17.
 */
var React = require('react');
var $ = require('jquery');
//jquerywindow.jQuery = $;
//window.$ = $;




export class Navbar extends React.Component({
    handleChange: function (e) {
        var name = e.target.value;
        this.props.onChange(name);
    },
    handleClick: function (e) {
        $('.side-nav').toggleClass('open');
        $('#sidenav-overlay').toggleClass('open');
    },

    render () {

        return (
            <nav className="cyan darken-3" role="navigation">
                <div className="nav-wrapper container">
                    <ul className="right hide-on-med-and-down">
                        <li><a href="#"><i className="material-icons">search</i></a></li>
                        <li><a href="#">LOGIN</a></li>
                        <li><a href="#">SIGN UP</a></li>
                    </ul>

                    <ul id="nav-mobile" className="side-nav">
                        <li><a href="#"><i className="material-icons">search</i></a></li>
                        <li><a href="#">LOGIN</a></li>
                        <li><a href="#">SIGN UP</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}}

