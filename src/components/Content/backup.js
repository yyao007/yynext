import React, { Component } from 'react';
import Cover from './components/Cover'
import About from './components/About'
import './Content.css'

class Content extends Component {
    render() {
        return (
                <div className="content">
                    <Cover />
                    <About />
                    <About />
                </div>
        )
    }
}

export default Content;
