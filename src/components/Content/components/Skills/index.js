import React, { Component } from 'react';
import ParallaxPlugin from '../Parallax';
import Button from '../Button';
import './Skills.css';

export default class extends Component {
    render() {
        return (
            <div id="skills" className="section">
                <ParallaxPlugin>
                    <div className="layer" data-depth="0.00">
                        <div className="background"></div>
                    </div>
                    <div className="layer" data-depth="0.20">
                        <div className="layer1"></div>
                    </div>
                    <div className="layer" data-depth="0.40">
                        <div className="layer2"></div>
                    </div>
                </ParallaxPlugin>
                <Button next="contact" />
            </div>
        )
    }
}
