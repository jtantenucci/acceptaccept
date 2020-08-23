import React from 'react';
import { Table, Button } from 'reactstrap';
import { PlayerSlot } from './playerslot'
import {getGameById} from '../Api'

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
    update = async () => {
      getGameById(this.gameid).then(game => {
        let teamA = game.data.teamA;
        let teamB = game.data.teamB;
        console.log(teamA);
        this.setState({teamA: teamA, teamB: teamB});
      });
    }
  render () {
    return (
        <Table hover>
            <thead>
                <tr>
                  <th className="head">team 1</th>
                  <th className="head">team 2</th>
                </tr>
            </thead>                
          <tbody onClick={this.update}>
                <tr>
                  <PlayerSlot gameid="0" team="teamA" slotNo="0" steamUser={this.state.teamA?.[0]?.steamId}/>
                  <PlayerSlot gameid="0" team="teamB" slotNo="0" steamUser={this.state.teamB?.[0]?.steamId}/>
                </tr>
                <tr>
                  <PlayerSlot gameid="0" team="teamA" slotNo="1" steamUser={this.state.teamA?.[1]?.steamId}/>
                  <PlayerSlot gameid="0" team="teamB" slotNo="1" steamUser={this.state.teamB?.[1]?.steamId}/>
                </tr>
                <tr>
                  <PlayerSlot gameid="0" team="teamA" slotNo="2" steamUser={this.state.teamA?.[2]?.steamId}/>
                  <PlayerSlot gameid="0" team="teamB" slotNo="2" steamUser={this.state.teamB?.[2]?.steamId}/>
                </tr>
                <tr>
                  <PlayerSlot gameid="0" team="teamA" slotNo="3" steamUser={this.state.teamA?.[3]?.steamId}/>
                  <PlayerSlot gameid="0" team="teamB" slotNo="3" steamUser={this.state.teamB?.[3]?.steamId}/>
                </tr>
                <tr>
                  <PlayerSlot gameid="0" team="teamA" slotNo="4" steamUser={this.state.teamA?.[4]?.steamId}/>
                  <PlayerSlot gameid="0" team="teamB" slotNo="4" steamUser={this.state.teamB?.[4]?.steamId}/>
                </tr>

            </tbody>
        </Table>
    )
  }
}

export default TableData;
