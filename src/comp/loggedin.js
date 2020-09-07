import React, { Component } from 'react';
import { getSteamuserById } from '../Api';
import { Media } from 'reactstrap';

class LoggedIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            img: null
        }
    }
    
    componentDidMount() {
        this.clientid = localStorage.getItem('steamid');
        getSteamuserById(this.clientid).then((res) => {
            console.log(res)
            this.setState ({
                img: res.data.avatar,
                id: res.data.username
            })
        });
    }
    


    render() {
        return(
            <Media heading className="username"><img className="header-img" src={this.state.img}></img> {this.state.id} </Media>
        );
    }
}

export default LoggedIn;