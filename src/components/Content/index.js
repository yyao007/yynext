import React, { Component } from 'react';
import Cover from './components/Cover';
import About from './components/About';
// import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import './Content.css'

class Content extends Component {
    render() {
        return (
            <div className="content">
                <Cover />
                <About />
                <Projects />
                <Skills />
                <Contact />
            </div>

        )
    }
}

export default Content;
