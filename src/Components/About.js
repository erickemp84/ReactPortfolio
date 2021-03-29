import React from 'react';
import {useSpring, animated} from 'react-spring';
import gadgets from '../Assets/gadgets.jpg';

const About = () => {

    return (

        <div class="about-main">
            <div class="about-left">
                <img src={gadgets} />
            </div>
            <div className="about-right">
                <div className="about-text">
                    <h1>Writing code +</h1>
                    <h1>Using Creativity =</h1>
                    <h1>Problems solved.</h1>
                    <p>I enjoy working towards a common goal with others, whether as a team or as an individual.  I value learning new things in order to become the best developer 
                        possible.    
                    </p>
                </div>
            </div>
        </div>

    );

}

export default About;