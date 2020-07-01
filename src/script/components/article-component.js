import React from 'react';


export default class Article extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="Article">
                <div className="article-image">
                    <img src={require(`../../img/${this.props.imgUrl}`)} alt="articlei" />
                </div>
                <div className="article-details">
                    <span className="article-title">{this.props.title}</span>
                    <p className="article-text">{this.props.text}</p>
                </div>
            </div>
        )
    }
};