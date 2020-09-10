import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse, Media, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { getSteamuserById } from '../Api';
import LoggedIn from './loggedin';

class Header extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isLoginModalOpen: false,
        };
        this.isLoggedIn = this.isLoggedIn.bind(this);
        this.toggleLoginModal = this.toggleLoginModal.bind(this);
        this.toggleNav = this.toggleNav.bind(this);
    }

    isLoggedIn (){
        getSteamuserById(this.clientid).then((res) => {
            this.setState = {
                img: res.data.avatar,
                id: res.data.id
            }
        });
    }

//76561198988277534
    toggleLoginModal() {
        this.setState({
            isLoginModalOpen: !this.state.isLoginModalOpen
        });
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        
        function LoginModal ({ id, isOpen, toggleLoginModal }) {
            const isLoggedIn = id = localStorage.getItem('steamid');
            let renderlogin;
            if(isLoggedIn)
                renderlogin =(<LoggedIn />);
        
            else
                renderlogin =(<Button onClick={toggleLoginModal}><span className="fa fa-steam fa-lg"></span> log in with steam</Button>)
        
            return(
                <div>
                    {renderlogin}
                    <Modal isOpen={isOpen} toggle={toggleLoginModal}>
                        <ModalHeader toggle={toggleLoginModal}><span className="fa fa-steam fa-lg"></span> steam login</ModalHeader>
                        <ModalBody>
                            <p className="modaltext">log in to steam account and authenticate, then join an open lobby slot.</p>
                        </ModalBody>
                        <ModalFooter>
                            <Button className="steam-login-button" href="api/auth/openid"><span className="fa fa-steam fa-lg"></span> log in</Button>{' '}
                            <Button className="button-cancel-vote" onClick={toggleLoginModal}>cancel</Button>
                        </ModalFooter>
                    </Modal> 
                </div>
            );
        }
        const userId = this.res
        const isLoggedIn = this.isLoggedIn
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
                                <NavLink className="nav-link" to="/home">
                                    <span className="fa fa-globe fa-lg"></span> home
                                </NavLink>
                            </NavItem>
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
                            </Nav>
                            <Nav className="accept">
                                <NavItem>
                                    <LoginModal
                                        userId={userId}
                                        isLoggedIn={isLoggedIn}
                                        isOpen={this.state.isLoginModalOpen}
                                        toggleLoginModal={this.toggleLoginModal}
                                    />
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}
export default Header;
