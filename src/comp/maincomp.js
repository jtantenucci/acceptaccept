import React, { Component } from 'react';
import Header from './headercomp';
import MatchLobby from './matchlobby';
import Footer from './footercomp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import qs from 'qs'

import Home from './homecomp';

class Main extends Component {
    constructor(props) {
        console.log(props)
        super(props);
        this.state = {
            maps: MAPS,
        };
        let params = qs.parse(props.location.search)["?id"]
        console.log(params)
        if(params)
            localStorage.setItem('steamid', params)  // FIXME: you can fake being any steamid you want
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
                        <MatchLobby  />
                    </Route>
                </Switch>
                <Footer />
          </Router>
        );
      }
    }

export default withRouter(Main);
