import React, { Component } from 'react';
import Header from './headercomp';
import Home from './homecomp';
import MatchLobby from './matchlobby';
import Footer from './footercomp';
import { MAPS } from '../shared/maps';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maps: MAPS,
        };
    }

    render() {
        return (
            <Router>
                <Header />
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/matchlobby">
                        <MatchLobby />
                    </Route>
                </Switch>
                <Footer />
          </Router>
        );
      }
    }

export default Main;