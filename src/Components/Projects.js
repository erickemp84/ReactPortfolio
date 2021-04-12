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
                <h1>Take a look at</h1>
                <h1>some of my work.</h1>
                <p>Here are some projects I've put together.</p>
            </div>
            <div className="project-links">
                <h2><a href="https://jolly-jackson-1789b0.netlify.app/" target="_blank" rel="noreferrer noopener">Travel Website</a></h2>
                <h2><a href="https://mystifying-bassi-cfd103.netlify.app/" target="_blank" rel="noreferrer noopener">Task List</a></h2>
            </div>
        </div>
        </div>

    );

}

export default Projects;