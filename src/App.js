import './App.css';
import { Router, Link } from '@reach/router';
import { useSpring, animated } from 'react-spring';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
    return (

        <>
            <nav>
                <div class="logo">
                    <h4>Eric Kemp</h4>
                </div>
                <ul class="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>

                <div class="burger">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div>
            </nav>

            <Router>
                <Home path="/" />
                <About path="/about" />
                <Projects path="/projects" />
                <Contact path="/contact" />
            </Router>

        </>

    )

    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        burger.addEventListener('click', () => {
            //toggle nav
            nav.classList.toggle('nav-active');

            //animate links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                }
            });

            //burger animation
            burger.classList.toggle('toggle');
        });
    }

    navSlide();
}

export default App;
