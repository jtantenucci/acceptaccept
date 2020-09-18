import React, {Component} from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link} from 'react-router-dom';
import { postGameNew } from '../Api.js';
import { withRouter } from 'react-router'

class Home extends Component {
    constructor(props) {
        super(props);
    }
    newLobby = () =>
        {
            let userid = localStorage.getItem('steamid')
            postGameNew({id: userid}).then(res => {
                this.props.history.push('/games/' + res.data)
            });
        }

    render() {return(
        <div className="homepage">
            <Jumbotron fluid className="homepage-jumbotron">
                <div className="container fluid homepage">
                    <h1 className="display-3">accept accept !</h1>
                    <p className="lead">cs:go custom server management tool</p>
                    <p className="lead">
                    <Link to="/matchlobby">
                      <Button className="homebutton" onClick={this.newLobby}>
                            start new lobby
                        </Button>
                    </Link>
                    </p>
                </div>
            </Jumbotron>
        </div>
    );
             }
}

const HomeR = withRouter(Home)

export default HomeR;
