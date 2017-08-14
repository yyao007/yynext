import React, { Component } from 'react';
import Cover from './components/Cover';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import './Content.css'

class Content extends Component {
    render() {
        return (
            <div className="content">
                <Cover />
                <About />
                <Education />
                <Projects />
            </div>

        )
    }
}

export default Content;
