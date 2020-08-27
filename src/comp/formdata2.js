import React, { Component } from 'react';
import { MAPS } from '../shared/maps';
import { Card } from 'reactstrap';
import RenderMapCardHead from './rendermapcardhead';
import RenderMapCardButtons from './rendermapcardbuttons';
import RenderMapCardImage from './mapcardform';

class FormData2 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            maps: MAPS,
            selected: this.props.initialSelected 
        }
    }    

    onChange(selected) {
        console.log ('%s selected', selected);
        this.setState({ selected });
    }
    
    render () {
        const selectedKey = this.state.selected;
        const maps = this.props.maps.map((maps, key) => {
            return (
                <div key={maps.id} className="col-4 map-vote">
                    <Card>
                        <RenderMapCardHead className="CardHeader" maps={maps} />
                        <RenderMapCardImage maps={maps} />
                        <RenderMapCardButtons
                            maps={maps}                    
                            selected={selectedKey === key} 
                            onChange={evt => this.onChange(key, evt)} 
                        />
                    </Card>
                </div>
            )
        });        
        

        return (    
            <div className="container">
                <div className="row">
                    {maps}
                </div>
            </div>
        );
    }
}

export default FormData2;