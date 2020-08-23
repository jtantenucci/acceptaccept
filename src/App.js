import React, { Component } from 'react';
import Header from './comp/headercomp';
import Footer from './comp/footercomp';
import MapSelectModal from './comp/mapvote';
import MatchLobby from './comp/matchlobby';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <MatchLobby />
        <MapSelectModal />
        <Footer />
      </div>
    );
  }
}

export default App;
