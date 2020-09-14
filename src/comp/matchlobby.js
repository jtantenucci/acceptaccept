import React, { Component } from 'react';
import TableData from './tabledata';
import MapVoteModal from './mapvote';
import ButtonData from './buttondata';
import AcceptJumbotron from './jumbotron';
import {getGameById, postGameByIdTeamA, postGameByIdTeamB, postGameByIdReady, deleteGameById} from '../Api'
import {w3cwebsocket as W3CWebSocket} from "websocket"

class MatchLobby extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            queue: null
        };

      this.gameid = 0;
      this.update = this.update.bind(this);
      this.clientid = localStorage.getItem('steamid');
      getGameById(this.gameid).then(res => {
        console.log("initial load");
        console.log(res);
        this.setState({queue: res.data});
     });
    }
    websocketconn = () =>
    {
      const client = new W3CWebSocket("ws://queue.boner1.com/ws/game/0/sub")
      client.onclose = x => {
          console.log('lost connection... retrying');
          setTimeout(this.websocketconn, 1000);
      };
      client.onopen = () => {
        console.log("subscribed!")
      }
      client.onmessage = (message) => {
        let data = JSON.parse(message.data);
        this.setState({queue: data});
    }
    }
   componentWillMount() {
     this.websocketconn();
  }
    update = () => {
      getGameById(this.gameid).then(game => {
        this.setState({queue: game.data});
      });
    }

    handleClick = (i, team) => (e) => {

      if(this.clientid)
        {
          if(team === "teamA") {
            postGameByIdTeamA(this.gameid, [i, this.clientid])
              .then(game => {
                this.setState({
                  queue: game.data
                });
              })
              .catch(err => console.log(err))
            }
          else {
            postGameByIdTeamB(this.gameid, [i, this.clientid])
              .then(game => {
                this.setState({
                  queue: game.data
                });
              })
              .catch(err => console.log(err))
            }
        }
    }
  readyUp = (e) => {
    console.log(this.clientid);
    console.log(typeof this.clientid)
    e.stopPropagation();
    postGameByIdReady(0, {id:this.clientid}).then(game => {
      this.setState({
        queue: game.data,
      });
    });
  }
  leaveMatch = (steamid) => (e) => {
    console.log("leave match :" + steamid)
    e.stopPropagation();
    deleteGameById(0, {id: steamid}).then(game => {
      this.setState({
        queue: game.data
      });
    })
  }
    render () {
        let forceShuf = null;
        if(this.clientid == this.state?.queue?.leader) {
            console.log(this.clientid)
            console.log(this.state?.queue?.leader)
        }
        return (
            <div>
                <AcceptJumbotron />
                <div className="container">
                    <div className="row">
                      <div className="col vote">
                          <MapVoteModal />
                      </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <h2 className="head">team 1</h2>
                        </div>
                        <div className="col-sm-6">
                            <h2 className="head">team 2</h2>
                        </div>
                    </div>
                    <TableData
                      queue={this.state.queue}
                      readyUp={this.readyUp}
                      leave={this.leaveMatch}
                      handleClick={this.handleClick}
                    />
                    <br></br>
                    <div className="row row-buttons">

                        <div className="col shuffle">
                            <ButtonData />
                        </div>
                    </div>
                </div>
            </div>
        );
    } 
}   

export default MatchLobby;
