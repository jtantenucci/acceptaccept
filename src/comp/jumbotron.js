import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class AcceptJumbotron extends Component {
    render() {
        return(
            <Jumbotron className="banner">
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1 className="containerhead">accept accept !</h1>
                                <hr className="mt-0 mb-2"></hr>
                            <p className="containertext">csgo server 10 man scrim lobby setup</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        );
    }
}

export default AcceptJumbotron;