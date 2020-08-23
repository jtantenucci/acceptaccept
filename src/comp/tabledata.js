import React from 'react';
import { Table, Button } from 'reactstrap';
import { PlayerSlot } from './playerslot'
import {getGameById, getSteam} from '../Api'

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
  render () {
    var rows = []
    for (var i = 0; i < 5; i++)
                    {
                      rows.push(<tr>
                                  <PlayerSlot gameid="0" team="teamA" slotNo={i} steamUser={this.state.teamA?.[i]?.username} img={this.state.teamA?.[i]?.avatar}/>
                                  <PlayerSlot gameid="0" team="teamB" slotNo={i} steamUser={this.state.teamB?.[i]?.username} img={this.state.teamB?.[i]?.avatar}/>
                                  </tr>)
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
