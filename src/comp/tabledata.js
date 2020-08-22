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
                  <PlayerSlot gameid="0" team="teamA" slotNo="0" />
                    <th className="user">
                        <Button>
                            <span>
                                <i className="fa fa-group fa-lg"></i> join
                            </span>
                        </Button>
                    </th>
                </tr>
                <tr>
                    <th className="user">
                        <Button>
                            <span>
                                <i className="fa fa-group fa-lg"></i> join
                            </span>
                        </Button>
                    </th>
                    <th className="user">
                        <Button>
                            <span>
                                <i className="fa fa-group fa-lg"></i> join
                            </span>
                        </Button>
                    </th>
                </tr>
                <tr>
                    <th className="user">
                        <Button>
                            <span>
                                <i className="fa fa-group fa-lg"></i> join
                            </span>
                        </Button>                        
                    </th>
                    <th className="user">
                        <Button>
                            <span>
                                <i className="fa fa-group fa-lg"></i> join
                            </span>
                        </Button>
                    </th>
                </tr>
                <tr>
                    <th className="user">
                        <Button>
                            <span>
                                <i className="fa fa-group fa-lg"></i> join
                            </span>
                        </Button>
                    </th>
                    <th className="user">
                        <Button>
                            <span>
                                <i className="fa fa-group fa-lg"></i> join
                            </span>
                        </Button>
                    </th>
                </tr>
                <tr>
                    <th className="user">
                        <Button>
                            <span>
                                <i className="fa fa-group fa-lg"></i> join
                            </span>
                        </Button>                        
                    </th>
                    <th className="user">
                        <Button>
                            <span>
                                <i className="fa fa-group fa-lg"></i> join
                            </span>
                        </Button>
                    </th>
                </tr>
            </tbody>
        </Table>
    )
}

export default TableData;