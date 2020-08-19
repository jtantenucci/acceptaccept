import React, { Component } from 'react';
import LoginModal from './loginform';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse, Jumbotron } from 'reactstrap';

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
                        <NavbarBrand href="/">
                            <img src="accept2.png" height="30" width="50" alt="acceptlogo" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="#">
                                    <span className="fa fa-server fa-lg"></span> Server
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="#">
                                    <span className="fa fa-bar-chart fa-lg"></span> Match Stats
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="#">
                                    <span className="fa fa-globe fa-lg"></span> Official Site
                                </NavLink>
                            </NavItem>
                            </Nav>
                            <Nav className="accept">
                                <NavItem>
                                    <NavLink>
                                        <LoginModal />
                                    </NavLink>
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