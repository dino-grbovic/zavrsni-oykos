import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import '../../style/application.scss';
import Header from './header-component';
import Hero from './hero-component';
import Shoe from './shoe-component';
import MainPage from './mainPage-component';
import { shoeData } from '../../data';
import { articleData } from '../../data';
import { galleryData } from '../../data';
import Footer from './footer-component';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="App">
                <Router>
                    <Header />
                    <Hero />
                    <MainPage shoeData={shoeData} articleData={articleData} galleryData={galleryData} />
                    <Footer />
                    <Switch>
                        <Route  path="/footer" component={Footer}/>
                    </Switch>
                </Router>
            </div>
        )
    }
};