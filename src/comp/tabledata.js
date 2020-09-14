import React from 'react';
import { Card } from 'reactstrap';
import { PlayerSlot } from './playerlobby/playerslot'
import { withRouter } from 'react-router-dom';
/* global BigInt */
export class TableData extends React.Component {

    constructor(props) {
      super(props);
      this.clientid = localStorage.getItem('steamid');
    }
   render () {
    var rows = []
    for (var i = 0; i < 5; i++) {
      var classNameA = 'playerslot'
      var classNameB = 'playerslot'
      if(this.props.queue?.teamA?.[i]?.ready)
      {
        classNameA += ' active'
      }
      if(this.props.queue?.teamB?.[i]?.ready)
      {
        classNameB += ' active'
      }

      console.log(this.props.queue?.teamA?.[i]?.steamId + "::" + this.props.queue?.leader)
        rows.push(
          <React.Fragment>
              <div className="row lobby-players">
              <PlayerSlot gameid="0"
                          user={this.props.queue?.teamA?.[i]}
                          setReady={this.props.readyUp}
                          leave={this.props.leave(this.props.queue?.teamA?.[i]?.steamId.toString())}
                          isCaptain={(this.props.queue?.teamA?.[i]?.steamId == this.props.queue?.leader.steamId)}
                          className={classNameA}
                          isLeader={(this.clientid == this.props.queue?.leader.steamId)}
                          handleClick={this.props.handleClick(i, "teamA")}/>
              <PlayerSlot gameid="0"
                          user={this.props.queue?.teamB?.[i]}
                          leave={this.props.leave(this.props.queue?.teamB?.[i]?.steamId.toString())}
                          isCaptain={(this.props.queue?.teamB?.[i]?.steamId == this.props.queue?.leader.steamId)}
                          setReady={this.props.readyUp}
                          className={classNameB}
                          isLeader={(this.clientid == this.props.queue?.leader.steamId)}
                          handleClick={this.props.handleClick(i, "teamB")}/>              </div>
          </React.Fragment>
        );
      }
      
    return (
      <div className="container">
        <Card className="lobby-slot-card" onClick={this.props.update}>
            {rows}
        </Card>
      </div>

    )
  }
}

export default withRouter(TableData); // fixme
