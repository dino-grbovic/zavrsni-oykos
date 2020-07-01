import React from 'react';

export default class Shoe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            src: "./img/logo.png"
        };
    }

    render() {
        return (
            <div id="Shoe">
                <div className="shoe-image">
                    <img src={require(`../../img/${this.props.imgUrl}`)} alt="i" />
                </div>
                <div className="shoe-details">
                    <div className="name">
                        <span>{this.props.name}</span>
                        <span>{this.props.price}</span>
                    </div>
                    <div className="color">
                        <span>{this.props.color}</span>
                    </div>
                </div>
            </div>
        )
    }
};