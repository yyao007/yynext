import React, { Component } from 'react';
import ParallaxPlugin from '../Parallax';
import Button from '../Button';
import Tilt from '../Tilt';
import Hidden from '../Hidden';
import './Projects.css'

class Project extends Component {
    render() {
        return (
            <div className="col-sm-6">
                <Tilt className="blog" style={{background: this.props.background}}>
                    <div className="tilt-inner">
                        <div className="project title">
                            {this.props.title}
                        </div>
                        <div className="project description">
                            {this.props.description}
                        </div>
                    </div>
                </Tilt>
                <div className="link-wrap">
                    <a className="link" href={this.props.url}></a>
                </div>
            </div>
        );
    }
}

export default class extends Component {
    render() {
        const pjs = [
            {
                title: 'BLOG',
                description: 'This is my personal blog website built with a NodeJS backend API and a React client',
                url: 'http://blog.yynext.com',
                background: 'url("/images/blog.jpg")',
            },
            {
                title: 'YelpCamp',
                description: 'This is my personal blog website built with a NodeJS backend API and a React client',
                url: 'http://yelpcamp.yynext.com',
                background: 'url("/images/yelpcamp.jpg")',
            },
            {
                title: 'YelpCamp',
                description: 'This is my personal blog website built with a NodeJS backend API and a React client',
                url: 'http://yelpcamp.yynext.com',
                background: 'url("/images/yelpcamp.jpg")',
            },
            {
                title: 'YelpCamp',
                description: 'This is my personal blog website built with a NodeJS backend API and a React client',
                url: 'http://yelpcamp.yynext.com',
                background: 'url("/images/yelpcamp.jpg")',
            },
        ]
        let projects = pjs.map((p, i) => <Project key={i} {...p} />);

        return (
            <div id="projects" className="section">
                <div className="container">
                    <div className="page-header">
                        <h1>Projects</h1>
                        <hr/>
                    </div>
                    <Hidden>
                        <div className="row">
                            {projects}
                        </div>
                    </Hidden>
                </div>
                <Button next="skills" />
            </div>
        );
    }
}
