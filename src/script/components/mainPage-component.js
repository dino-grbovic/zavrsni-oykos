import React from 'react';
import Shoe from './shoe-component';
import Button from './button-component';
import Article from './article-component';
import GalleryItem from './gallery-item-component';
import {AiOutlineInstagram} from 'react-icons/ai';

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showMenShoes: true
        }
    }

    renderMenShoes() {
        let shoes = [];
        let filteredShoes = this.props.shoeData.men.filter(item => item.name !== "Court")
        filteredShoes.map((item) => {
            let shoe = '';
            if (!!filteredShoes) { shoe = <Shoe name={item.name} price={item.price} color={item.color} imgUrl={item.imgUrl} /> }
            shoes.push(shoe);
        });
        return shoes;
    };

    renderMenCourt() {
        let shoes = [];
        let filteredShoes = this.props.shoeData.men.filter(item => item.name === "Court")
        filteredShoes.map((item) => {
            let shoe = '';
            if (!!filteredShoes) { shoe = <Shoe name={item.name} price={item.price} color={item.color} imgUrl={item.imgUrl} /> }
            shoes.push(shoe);
        });
        return shoes;
    };

    renderWomenShoes() {
        let womenShoes = [];
        let filteredWomenShoes = this.props.shoeData.women.filter(item => item.name !== "Court")
        filteredWomenShoes.map((item) => {
            let womenShoe = '';
            if (!!filteredWomenShoes) { womenShoe = <Shoe name={item.name} price={item.price} color={item.color} imgUrl={item.imgUrl} /> }
            womenShoes.push(womenShoe);
        });
        return womenShoes;
    };

    renderWomenCourt() {
        let womenShoes = [];
        let filteredWomenShoes = this.props.shoeData.women.filter(item => item.name === "Court");
        filteredWomenShoes.map((item) => {
            let womenShoe = '';
            if (!!filteredWomenShoes) { womenShoe = <Shoe name={item.name} price={item.price} color={item.color} imgUrl={item.imgUrl} /> }
            womenShoes.push(womenShoe);
        });
        return womenShoes;
    };

    renderArticle() {
        let newArticles = [];
        let article = this.props.articleData.articles;
        article.map((value) => {
            let newArticle = '';
            if (!!article) { newArticle = <Article title={value.title} text={value.text} imgUrl={value.image} /> }
            newArticles.push(newArticle);
        });
        return newArticles;
    };

    renderGallery() {
        let gallery = [];
        let picture = this.props.galleryData.gallery;
        picture.map((item) => {
            let newPicture = '';
            if (!!picture) { newPicture = <GalleryItem imgUrl={item.url} /> }
            gallery.push(newPicture);
        });
        return gallery;
    };

    render() {
        return (
            <div id="MainPage">
                <div className="select">
                    <span className="tabs" onClick={() => { this.setState({ showMenShoes: true }) }} >Men's</span>
                    <span className="tabs" onClick={() => { this.setState({ showMenShoes: false }) }} >Women's</span>
                </div>
                <p>Check out our best sellers</p>
                <div className="renderShoes">
                    {!!this.state.showMenShoes ? this.renderMenShoes() : this.renderWomenShoes()}
                </div>
                <div className="shopButton">
                    <Button
                        text={!!this.state.showMenShoes ? "Shop All Men's" : "Shop All Women's"}
                        handleClick={() => { window.open("https://www.oykos.me/hub") }}
                        backgroundColor="black" color="white" />
                </div>
                <div className="court">
                    <div className="court-image">
                        <img src={require("../../img/court.jpg")} alt="courtimg" />
                    </div>
                    <div className="court-content">
                        <div className="court-info">
                            <span className="court-category">{!!this.state.showMenShoes ? "Men" : "Women"}</span>
                            <p className="court-title">The Court</p>
                            <p className="court-text">You won't need to dunk on anyone to look great in these '90s basketball-inspired kicks</p>
                        </div>
                        <div className="renderCourt">
                            {!!this.state.showMenShoes ? this.renderMenCourt() : this.renderWomenCourt()}
                        </div>
                    </div>
                </div>
                <div className="some-info">
                    <p>We make timeless, responsibly-made sneaker that are designed to be great, and made to be worn</p>
                    <button className="learn-more" onClick={() => { window.open("https://www.oykos.me/hub") }}>Learn more</button>
                </div>
                <div className="article">
                    {this.renderArticle()}
                </div>
                <div className="some-info">
                    <p>We make timeless, responsibly-made sneaker that are designed to be great, and made to be worn</p>
                    <button className="learn-more" onClick={() => { window.open("https://www.oykos.me/hub") }}>Learn more</button>
                </div>
                <div className="gallery">
                    <div className="top-content">
                        <span className="greats"><AiOutlineInstagram/><span>Greats</span></span>
                        <span>We Love A Game Of Tag #thegreatest</span>
                    </div>
                    <div className="renderGallery">
                        {this.renderGallery()}
                    </div>
                    <div className="bottom-content">
                        <div className="bottom-item">
                            <p className="bottom-title">Free Shipping & Returns</p>
                            <p>Big Style, No Risk, Free Shipping + Returns on all orders</p>
                        </div>
                        <div className="bottom-item">
                            <p className="bottom-title">Refer A Friend</p>
                            <p>Sing Our Praises, Save Big</p>
                        </div>
                        <div className="bottom-item">
                            <p className="bottom-title">Customer Service</p>
                            <p>If she shoe doesn't fit...drop us a line! Questions? Concerns? Compliments? We are here for you via email, text, or chat.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};