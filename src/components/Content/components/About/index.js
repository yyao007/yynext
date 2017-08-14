import React, { Component } from 'react';
import ParallaxPlugin from '../Parallax';
import Hidden from '../Hidden';
import Button from '../Button';
import './About.css'

export default class extends Component {
    render() {
        return (
            <div id="about" className="section">
                <div className="container">
                    <div className="page-header">
                        <h1>About</h1>
                        <hr/>
                    </div>
                    <Hidden>
                        <div className="row">
                            <div className="col-sm-4 col-xs-12">
                                <div className="thumbnail">
                                    <ParallaxPlugin>
                                        <div className="layer" data-depth="1.05">
                                            <div className="avatar"></div>
                                        </div>
                                    </ParallaxPlugin>
                                </div>
                            </div>
                            <div className="col-sm-8 col-xs-12">
                                <div className="title">
                                    Yuan Yao
                                    <span className="flag flag-cn" />
                                </div>
                                <div className="description">
                                    {'I got my master\'s degree in Computer Engineering from University of California, Riverside in June 2017. I\'m currently seeking for a full-time software engineer job. I\'m interested in web development and have experience with Node, Express, MongoDB, React, RESTful API Design and more. I\'m good at Python, JavaScript, Java and C++. I like to learn new technologies and turn it into my own projects.'}
                                </div>
                                <div className="location">
                                    {'Riverside, CA'}
                                </div>
                            </div>
                        </div>
                    </Hidden>
                </div>
                <Button next="education" />
            </div>
        )
    }
}
