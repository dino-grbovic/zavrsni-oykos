import React from 'react';


export default class GalleryItem extends React.Component {
    constructor(props) {
        super(props);

        this.state =  {
            isZoomed: false
        }
        this.zoomIn = this.zoomIn.bind(this);
    }

    zoomIn() {
      this.setState({ isZoomed: !this.state.isZoomed });
    }

    render() {
        return (
            <div id="GalleryItems">
                <div className={this.state.isZoomed ? "gallery-imgzoom" : "gallery-img"}  onClick={this.zoomIn}>
                    <img src={require(`../../img/${this.props.imgUrl}`)} alt="galleryi" />
                </div>
            </div>
        )
    }
};