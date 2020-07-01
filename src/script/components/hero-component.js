import React from 'react';
import Button from './button-component';
import{Redirect} from 'react-router-dom';

export default class Hero extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            
            <div id="Hero">
                <div className="hero-content">
                    <h1 className="title">The Royale Navy</h1>
                    <p className="additional-text">Our best selling Navy blue color way is back in limited quantities. Preorder now available</p>
                    <Button 
                    text="Shop Now" 
                    handleClick={() => {window.scrollTo({
                        top: 3339,
                        left: 0,
                        behavior: 'smooth'
                      });} } 
                    backgroundColor= "white" />
                </div>
            </div>
        )
    }
};