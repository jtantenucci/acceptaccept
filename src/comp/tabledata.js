import React from 'react';
import { Table } from 'reactstrap';
import { PlayerSlot } from './playerslot'
import {getGameById, postGameByIdTeamA, postGameByIdTeamB} from '../Api'

export class TableData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teamA: null,
            teamB: null
        };

      this.gameid = 0;
      this.update = this.update.bind(this);
    }

    update = () => {
      getGameById(this.gameid).then(game => {
        let teamA = game.data.teamA;
        let teamB = game.data.teamB;
        console.log(teamA);
        this.setState({teamA: teamA, teamB: teamB});
      });
    }
    
    handleClick = (i, team) => (e) => {
      const steamid = localStorage.getItem('steamId');
      console.log("HELLO!")

        if(steamid)
        {
          if(team === "teamA") {
            postGameByIdTeamA(this.gameid, [i, Number(steamid)])
              .then(game => {
                this.setState({
                  teamA: game.data.teamA,
                  teamB: game.data.teamB
                });
              })
              .catch(err => console.log(err))
            }
          else {
            postGameByIdTeamB(this.gameid, [i, Number(steamid)])
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
    
  render () {
    var rows = []
    for (var i = 0; i < 5; i++) {
        rows.push(
        <tr>
          <PlayerSlot gameid="0"  steamUser={this.state.teamA?.[i]?.username} img={this.state.teamA?.[i]?.avatar} handleClick={this.handleClick(i, "teamA")}/>
          <PlayerSlot gameid="0"  steamUser={this.state.teamB?.[i]?.username} img={this.state.teamB?.[i]?.avatar} handleClick={this.handleClick(i, "teamB")}/>
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

export default TableData;