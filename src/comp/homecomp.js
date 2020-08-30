import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function Home() {
    return(
        <div className="homepage">
            <Jumbotron fluid className="homepage-jumbotron">
                <div className="container fluid">
                    <h1 className="display-3">so ...</h1>
                    <p className="lead">hey buddy its not you;re faultt,,, i think society made you this way. please reconsider... boner1 loves u </p>
                    <p className="lead">
                    <Link to="/matchlobby">
                        <Button className="homebutton">
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