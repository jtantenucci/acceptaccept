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
        rows.push(
          <React.Fragment>
              <div className="row lobby-players">
              <PlayerSlot gameid="0"
                          user={this.props.queue?.teamA?.[i]}
                          setReady={this.props.readyUp}
                          leave={this.props.leaveMatch}
                          handleClick={this.props.handleClick(i, "teamA")}/>
              <PlayerSlot gameid="0"
                          user={this.props.queue?.teamB?.[i]}
                          leave={this.props.leaveMatch}
                          setReady={this.props.readyUp}
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
