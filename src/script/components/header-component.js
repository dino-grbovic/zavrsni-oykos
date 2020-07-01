import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bgColor: 'transparent',
            imgbackground: 'transparent'
          }
    
    }
        
      scrollHandler = (e) => {
        if (window.scrollY > 400) {
          this.setState({bgColor: 'black', imgbackground: 'white'})
        } else {
          this.setState({bgColor: 'transparent', imgbackground: 'transparent'})
        }
      }
    
      componentDidMount() {
        window.addEventListener('scroll', this.scrollHandler)
      }

    render() {
        return (
            <div id="Header" style={{backgroundColor: this.state.bgColor}}>
                <div className="left">
                    <span className="tabs logo"><img style={{backgroundColor: this.state.imgbackground}} src={require("../../img/logo.png")}/></span>
                    <span className="tabs">Men</span>
                    <span className="tabs">Women</span>
                </div>
                <div>
                    <a className="links" href="https://www.oykos.me/hub" target="_blank">Our Story</a>
                    <a className="links" href="https://www.oykos.me/hub" target="_blank">Visit Us</a>
                    <a className="links" href="https://www.oykos.me/hub" target="_blank">My Account</a>
                </div>
            </div>
        )
    }
};