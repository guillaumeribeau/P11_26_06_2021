import React, { Component } from 'react';
import Header from '../components/Header';
import HomeHousing from '../components/HomeHousing';

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                 <HomeHousing/>
            </div>
        );
    }
}

export default Home;