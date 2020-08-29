import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function Home() {
    return(
        <div>
            <Jumbotron>
                <div className="container">
                    <h1 className="display-3">accept accept!</h1>
                    <p className="lead">hey buddy its not you;re faultt,,, i think society made you this way. please reconsider... boner1 loves u </p>
                    <hr className="my-2" />
                    <p className="lead">
                    <Link to="/matchlobby">
                        <Button color="primary">
                            start lobby
                        </Button>
                    </Link>
                    </p>
                </div>
            </Jumbotron>
        </div>
    );
}

export default Home;