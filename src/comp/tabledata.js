import React from 'react';
import { Table, Button } from 'reactstrap';
import { PlayerSlot } from './playerslot'

const TableData = () => {
    return (
        <Table hover>
            <thead>
              <tr>
                    <th className="head">team 1</th>
                    <th className="head">team 2</th>
                </tr>
            </thead>                
            <tbody>
                <tr>
                  <PlayerSlot gameid="0" team="teamA" slotNo="0"/>
                  <PlayerSlot gameid="0" team="teamB" slotNo="0"/>
                </tr>
                <tr>
                  <PlayerSlot gameid="0" team="teamA" slotNo="1"/>
                  <PlayerSlot gameid="0" team="teamB" slotNo="1"/>
                </tr>
                <tr>
                  <PlayerSlot gameid="0" team="teamA" slotNo="2"/>
                  <PlayerSlot gameid="0" team="teamB" slotNo="2"/>
                </tr>
                <tr>
                  <PlayerSlot gameid="0" team="teamA" slotNo="3"/>
                  <PlayerSlot gameid="0" team="teamB" slotNo="3"/>
                </tr>
                <tr>
                  <PlayerSlot gameid="0" team="teamA" slotNo="4"/>
                  <PlayerSlot gameid="0" team="teamB" slotNo="4"/>
                </tr>

            </tbody>
        </Table>
    )
}

export default TableData;
