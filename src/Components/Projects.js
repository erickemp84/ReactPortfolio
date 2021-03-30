import React from 'react';
import work from '../Assets/work.jpg';

const Projects = () => {

    return (

        <div class="projects-main">
            <div class="projects-left">
                <img src={work} alt="typing on a laptop" />
            </div>
        <div className="projects-right">
            <div className="projects-text">
                <h1>Take a look</h1>
                <h1>at some of my work.</h1>
                <p>Here are some projects I've put together.</p>
            </div>
        </div>
        </div>

    );

}

export default Projects;