import React, { Component } from 'react';
import Button from '../Button';
import Tilt from '../Tilt';
import Hidden from '../Hidden';
import './Projects.css'

class Project extends Component {
    render() {
        let linkClass = 'link ';
        linkClass += this.props.linkClass || "";
        return (
            <div className="col-sm-6">
                <Hidden>
                    <Tilt className="project" style={{background: this.props.background}}>
                        <div className="tilt-inner">
                            <div className="title">
                                {this.props.title}
                            </div>
                            <div className="description" dangerouslySetInnerHTML={this.props.description} />
                            <div className="date">
                                {this.props.startDate}
                                 <span>{'\u2014'}</span>
                                {this.props.endDate}
                            </div>
                        </div>
                    </Tilt>
                </Hidden>
                <div className="link-wrap">
                    <a className={linkClass} href={this.props.url}></a>
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
                description: {__html: 'This is my blog website <em>(updating)</em>. The backend is a RESTful API server built with Node, Express and MongoDB that sends data in JSON. The front-end is a React and Redux client that renders the UI for users. The website also has a log in system.'},
                url: 'http://blog.yynext.com',
                background: 'url("/images/blog.png")',
                startDate: 'July 2017',
                endDate: 'August 2017',
            },
            {
                title: 'YelpCamp',
                description: {__html: 'This is a place to share campgrounds all around the world. This website is built with Node, Express and MongoDB in REST routes. A registered user can post a new campground and leave comments on all existing campgrounds.'},
                url: 'http://yelpcamp.yynext.com',
                background: 'url("/images/yelpcamp.png")',
                startDate: 'July 2017',
                endDate: 'August 2017',
            },
            {
                title: 'Color Guess Game',
                description: {__html: 'This is a RGB gussing game. You need to pick the right color from 3 or 6 color squares based on the given rgb value on the top. This app is built with JavaScript, Bootstrap3, HTML5 and CSS3.'},
                url: 'http://yynext.com/colorgame',
                background: 'url("/images/colorgame.png")',
                startDate: 'July 2017',
                endDate: 'July 2017',
            },
            {
                title: 'Circles',
                description: {__html: 'This is a simple clone of <a href="http://patatap.com/">patatap</a>. Press any letter key to start! This app is built with paper.js to draw all the animations'},
                url: 'http://yynext.com/patatap',
                background: 'url("/images/patatap.png")',
                startDate: 'July 2017',
                endDate: 'July 2017',
            },
            {
                title: 'Todo List',
                description: {__html: 'This is a simple todo list. This app is built with JavaScript, HTML and CSS without a backend. All todos would be reset if one refresh the page.'},
                url: 'http://yynext.com/TodoList',
                background: 'url("/images/todolist1.png")',
                startDate: 'July 2017',
                endDate: 'July 2017',
            },
            {
                title: 'Real Estate Analysis',
                description: {__html: 'Analyze what people in the real estate world are talking about every day. To accomplish this, I crawled two real estate forums as the data sources and analyzed the posts from the two forums to find popular key phrases (both unigrams and bigrams) and sentiments for every city and state in every month using natural language processing tools such as <em>NLTK</em> and <em>scikit-learn</em> written in Python.'},
                url: 'https://github.com/yyao007/real-estate-analysis',
                background: 'url("/images/python.png")',
                linkClass: 'github',
                startDate: 'March 2017',
                endDate: 'June 2017',
            },
            {
                title: 'AI Projects',
                description: {__html: '<ol><li>Eight-puzzle solver using A* search;</li> <li>Feature selection with KNN classifier using k-fold method.</li></ol>'},
                url: 'https://github.com/yyao007/AI',
                background: 'url("/images/python.png")',
                linkClass: 'github',
                startDate: 'October 2016',
                endDate: 'December 2016',
            },
            {
                title: 'CUDA Backpropagation',
                description: {__html: 'This is the backpropagation algorithm implemented in CUDA C.'},
                url: 'https://github.com/yyao007/CUDA_backprop',
                background: 'url("/images/CUDA.png")',
                linkClass: 'github',
                startDate: 'October 2016',
                endDate: 'December 2016',
            },
            {
                title: 'LLVM Project',
                description: {__html: 'A compiler profiling project based on LLVM C++.'},
                url: 'https://github.com/yyao007/LLVM',
                background: 'url("/images/cpp.png")',
                linkClass: 'github',
                startDate: 'April 2016',
                endDate: 'May 2016',
            },
            {
                title: 'Messenger Project',
                description: {__html: 'A chat application built with Java and PostgreSQL working in Bash.'},
                url: 'https://github.com/yyao007/messenger',
                background: 'url("/images/java.png")',
                linkClass: 'github',
                startDate: 'January 2016',
                endDate: 'March 2016',
            },
            {
                title: 'Rshell Project',
                description: {__html: 'A bash like command shell written in C++ working in Linux.'},
                url: 'https://github.com/yyao007/rshell',
                background: 'url("/images/cpp.png")',
                linkClass: 'github',
                startDate: 'March 2015',
                endDate: 'May 2015',
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
                    <div className="row">
                        {projects}
                    </div>
                </div>
                <Button next="skills" />
            </div>
        );
    }
}
