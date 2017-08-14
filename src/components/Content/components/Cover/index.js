import React, { Component } from 'react';
import ParallaxPlugin from '../Parallax';
import Button from '../Button';
import './Cover.css';

class Cover extends Component {
    render() {
        return (
            <div id="cover" className="section">
                <ParallaxPlugin>
                    <div className="layer" data-depth="0.00">
                        <div className="background"></div>
                    </div>
                    <div className="layer" data-depth="0.20">
                        <div className="layer1"></div>
                    </div>
                    <div className="layer" data-depth="0.40">
                        <div className="container content">
                            <div className="jumbotron">
                                <h1>Yuan Yao</h1>
                                <hr/>
                                <p className="description">{'I\'m a new grad seeking for full-time software engineer and full stack web developer roles'}</p>
                            </div>
                        </div>
                    </div>
                </ParallaxPlugin>
                <Button next="about" />
            </div>
        )
    }
}

export default Cover;
