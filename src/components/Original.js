import React from 'react';

export class Original extends React.Component {

    render () {

        return (

            <div className="container">
                <div className="section">
                    <div className="row">
                        <div className="col s12">
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title">Submit your own sentence to be revised by community members:</span>
                                    <div className="row">
                                        <form className="col s12">
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <i className="material-icons prefix">mode_edit</i>
                                                    <input id="icon_prefix" type="text" className="validate">
                                                        <htmlFor="icon_prefix"></htmlFor>
                                                </div>
                                                <div className="card-action">
                                                    <a className="waves-effect waves-light btn right">Submit</a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

