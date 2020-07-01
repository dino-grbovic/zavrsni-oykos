import React from 'react';


export default class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const buttonStyle = {
            backgroundColor: this.props.backgroundColor,
            color: this.props.color,
            padding: "15px 70px",
            border: "none",
            cursor: "pointer"
        };

        return (<button
            style={buttonStyle}
            onClick={() => {
                if (this.props.handleClick) {
                    this.props.handleClick();
                }
            }}
        >
            {this.props.text}
        </button>);
    }
};