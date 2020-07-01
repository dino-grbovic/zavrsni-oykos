import React from 'react';
import { FiInstagram, FiFacebook, FiTwitter, FiYoutube } from 'react-icons/fi';
import { TiSocialPinterest } from 'react-icons/ti';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="Footer">
                <div className="left-column">
                    <div className="footer-updates">
                        <h2>Get Updates</h2>
                        <p className="item">Sign up for Greats news and and recieve 20% of your first purchase</p>
                    </div>
                    <div className="footer-email">
                        <input type="email" placeholder="Email Adress"></input>
                        <button className="signup">SignUp</button>
                    </div>
                    <div className="footer-icons">
                        <FiInstagram className="icon" />
                        <FiFacebook className="icon" />
                        <TiSocialPinterest className="icon" />
                        <FiTwitter className="icon" />
                        <FiYoutube className="icon" />
                    </div>
                </div>
                <div className="right-column">
                    <div className="about">
                        <h3 className="title">About Us</h3>
                        <div className="content">
                            <div>
                                <p className="item">Our Story</p>
                                <p className="item">Responsibility</p>
                                <p className="item">Visit Us</p>
                            </div>
                            <div>
                                <p className="item">Reviews</p>
                                <p className="item">Affiliates</p>
                            </div>

                        </div>
                    </div>
                    <div className="customer-service">
                        <h3 className="title">Customer Service</h3>
                        <div className="content">
                            <div>
                                <p className="item">Live Chat</p>
                                <p className="item">FAQ</p>
                                <p className="item">Siza Guide</p>
                                <p className="item">Shipping</p>
                            </div>
                            <div>
                                <p className="item">Returns</p>
                                <p className="item">Contact Us</p>
                                <p className="item">Refer A Friend</p>
                                <p className="item">Gift Cards</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
};