import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
    return(
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="text-left">
                        <h5>links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home" className="footerh5">Home</Link></li>
                            <li><Link to="/matchlobby" className="footerh5">Match Lobby</Link></li>
                            <li><Link to="/" className="footerh5">Stats</Link></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="text-center">
                            <h5 className="footerh5">please always pick de_dust2</h5>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="text-right">
                            <h5 className="footerh5">q?</h5>
                            <ul className="list-unstyled">
                                <li><a className="btn btn-social-icon btn-twitter" 
                                    href="http://twitter.com/"><i className="fa fa-twitter"></i></a></li>
                                <li><a className="btn btn-social-icon btn-google" 
                                    href="http://youtube.com/"><i className="fa fa-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;