import React, { Component } from 'react';
import LoginModal from './loginform';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Navbar dark light expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand href="/Home">
                            <img src="accept2.png" height="30" width="50" alt="acceptlogo" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/matchlobby">
                                    <span className="fa fa-server fa-lg"></span> match lobby
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <a className="nav-link" href="http://cs.moderan.org:5123/leaderboard">
                                    <span className="fa fa-bar-chart fa-lg"></span> stats
                                </a>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className="fa fa-globe fa-lg"></span> Home
                                </NavLink>
                            </NavItem>
                            </Nav>
                            <Nav className="accept">
                                <NavItem>
                                    <LoginModal />
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron className="banner">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1 className="containerhead">accept accept !</h1>
                                    <hr className="mt-0 mb-2"></hr>
                                <p className="containertext">csgo server 10 man scrim lobby setup</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}
export default Header;
