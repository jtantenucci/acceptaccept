import React, { Component } from 'react';
import Header from './headercomp';
import MatchLobby from './matchlobby';
import Footer from './footercomp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './homecomp';


class Main extends Component {
    render() {
        return (
            <Router>
                <Header />
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/matchlobby">
                        <MatchLobby  />
                    </Route>
                </Switch>
                <Footer />
          </Router>
        );
      }
    }

export default Main;