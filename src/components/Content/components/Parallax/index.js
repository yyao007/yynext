import React, { Component } from 'react';
import Parallax from 'parallax';

export default class extends Component {
    componentDidMount() {
        this.parallax = new Parallax(this.el, {
            // relativeInput: true,
            // clipRelativeInput: false,
            // hoverOnly: true,
            // inputElement: document.getElementById('myinput'),
            // calibrateX: false,
            // calibrateY: true,
            // invertX: false,
            // invertY: true,
            // limitX: false,
            // limitY: 10,
            // scalarX: 2,
            // scalarY: 8,
            // frictionX: 0.2,
            // frictionY: 0.8,
            // originX: 0.0,
            // originY: 1.0,
            // precision: 1,
            // pointerEvents: false,
            onReady: function() { console.log('ready!'); }
        });
    }

    componentWillUnmount() {
        this.parallax.disable();
    }

    render() {
        return (
            <div className="scene">
                <div className="scene" ref={el => this.el = el}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
