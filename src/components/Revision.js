
var React = require('react');
var ReactDOM = require('react-dom');

export class Original extends React.Component {

    render () {

        return (
            <div className="container">
                <h3>See submissions, submit revisions</h3>
                <div className="section">
                    <div className="row">
                        <div className="col s12">
                            <div className="card orange darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title">Original: "I went bald years ago, and my game has never fully recovered."</span><br></br>
                                    <div className="row">
                                        <form className="col s12">
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <i className="material-icons prefix">mode_edit</i>
                                                    <input className="mytext validate" id="icon_prefix" type="text"></input>
                                                </div>
                                                <div className="card-action">
                                                    <a className="addsentencesubmit waves-effect waves-light btn right">Submit</a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <span className="revision">"Hair gone, lonely nights."</span>
                                    <a className="btn-floating btn-small waves-effect waves-light blue right"><i className="material-icons">thumb_up</i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
