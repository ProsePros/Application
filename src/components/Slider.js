/**
 * Created by juanitasoranno on 1/19/17.
 */

import React from 'react';

export class Slider extends React.Component {
    render () {

        return (

            <div className="slider">
                <ul className="slides">
                    <li>
                        <img src="./assets/img/bg1.jpg">
                            <div className="black-text caption left-align">
                                <h3>ProsePros:</h3>
                                <h5 className="black-text text-lighten-3">prose·pros<br>/prōz prōz/
                                    <br>noun<br>Reinvent yourself by reinventing your words.</h5>
                            </div>
                    </li>
                    <li>
                        <img src="./assets/img/bg1.jpg">
                            <div className="black-text caption left-align">
                                <h2>Community-driven.<br><b> Community, driven.</b></h2>
                            </div>
                    </li>
                </ul>
            </div>
        );
    }

}