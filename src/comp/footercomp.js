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
                            <li><a href="https://discord.gg/BnuT9pH" className="footerh5">discord</a></li>
                            <li><Link to="/matchlobby" className="footerh5">match lobby</Link></li>
                            <li><a href="http://cs.moderan.org:5123/leaderboard" className="footerh5">stats</a></li>
                            <li><a href="https://steamcommunity.com/groups/Boner1" className="footerh5">steam community</a></li>
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
                                <li><a className="btn btn-social-icon btn-twitter" 
                                    href="https://steamcommunity.com/groups/Boner1"><i className="fa fa-steam"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;