import React from 'react';


function Footer() {
    return(
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="text-left">
                        <h5>links</h5>
                        <ul className="list-unstyled">
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="text-center">
                            <h5>please always pick de_dust2</h5>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="text-right">
                            <h5>q?</h5>
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