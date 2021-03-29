import React from 'react';
import code from '../Assets/code.jpg';

const Home = () => {

    return (

        <div class="home-main">
            <div class="home-left">
                <img src={code} />
            </div>
            <div className="home-right">
                <div className="home-text">
                    <h1>My name is Eric Kemp</h1>
                    <h3>and I'm a junior web developer.</h3>
                </div>
            </div>
        </div>

    );

}

export default Home;