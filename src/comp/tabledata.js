import React from 'react';
import { Table } from 'reactstrap';
import { PlayerSlot } from './playerslot'
import {getGameById, postGameByIdTeamA, postGameByIdTeamB, postGameByIdReady} from '../Api'
import {w3cwebsocket as W3CWebSocket} from "websocket"
import qs from "qs"
import { withRouter } from 'react-router-dom';
/* global BigInt */
export class TableData extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            teamA: null,
            teamB: null
        };

      this.gameid = 0;
      this.update = this.update.bind(this);
      getGameById(this.gameid).then(res => {
        console.log("initial load");
        console.log(res);
       this.setState({teamA: res.data.teamA, teamB: res.data.teamB})
       this.clientid = localStorage.getItem('steamid');
     });
    }

   componentWillMount() {
    const client = new W3CWebSocket("ws://queue.boner1.com/ws/game/0/sub")
    client.onopen = () => {
      console.log("subscribed!")
    }
    client.onmessage = (message) => {
      console.log(message.data);
      let data = JSON.parse(message.data);
      console.log(data);
      this.setState({teamA: data.teamA, teamB: data.teamB});
  }
  }
    update = () => {
      getGameById(this.gameid).then(game => {
        let teamA = game.data.teamA;
        let teamB = game.data.teamB;
        this.setState({teamA: teamA, teamB: teamB});
      });
    }
    
    handleClick = (i, team) => (e) => {

      if(this.clientid)
        {
          if(team === "teamA") {
            postGameByIdTeamA(this.gameid, [i, this.clientid])
              .then(game => {
                this.setState({
                  teamA: game.data.teamA,
                  teamB: game.data.teamB
                });
              })
              .catch(err => console.log(err))
            }
          else {
            postGameByIdTeamB(this.gameid, [i, this.clientid])
              .then(game => {
                this.setState({
                  teamA: game.data.teamA,
                  teamB: game.data.teamB
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
        teamA: game.data.teamA,
        teamB: game.data.teamB
      });
    });
  }
   render () {
    var rows = []
    for (var i = 0; i < 5; i++) {

        rows.push(
        <tr>
          <PlayerSlot gameid="0"
                      steamUser={this.state.teamA?.[i]?.username}
                      ready={this.state.teamA?.[i]?.isReady}
                      setReady={(this.clientid === this.state.teamA?.[i]?.steamid) && this.readyUp}
                      img={this.state.teamA?.[i]?.avatar}
                      handleClick={this.handleClick(i, "teamA")}/>
          <PlayerSlot gameid="0"
                      steamUser={this.state.teamB?.[i]?.username}
                      ready={this.state.teamB?.[i]?.isReady}
                      setReady={(this.clientid === this.state.teamA?.[i]?.steamid) && this.readyUp}
                      img={this.state.teamB?.[i]?.avatar}
                      handleClick={this.handleClick(i, "teamB")}/>
        </tr>
        );
      }
      
    return (
      <Table hover>
        <thead>
          <tr>
            <th className="head">team 1</th>
            <th className="head">team 2</th>
          </tr>
        </thead>                
        <tbody onClick={this.update}>
          {rows}
        </tbody>
      </Table>
    )
  }
}

export default withRouter(TableData); // fixme
