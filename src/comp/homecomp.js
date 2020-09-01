import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function Home() {
    return(
        <div className="homepage">
            <Jumbotron fluid className="homepage-jumbotron">
                <div className="container fluid homepage">
                    <h1 className="display-3">accept accept !</h1>
                    <p className="lead">cs:go custom server management tool</p>
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