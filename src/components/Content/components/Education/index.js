import React, { Component } from 'react';
// import ParallaxPlugin from '../Parallax';
import Button from '../Button';
import './Education.css'

class Item extends Component {
    render() {
        return (
            <div className="row item">
                <div className="col-md-6">
                    <div className="title">
                        {this.props.title}
                    </div>
                    <div className="date">
                        <em>{this.props.start}
                        <span>{'\u2014'}</span>
                        {this.props.end}</em>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="header">
                        {this.props.header}
                    </div>
                    <div className="description">
                        {this.props.description}
                    </div>
                </div>
            </div>
        )
    }
}

export default class extends Component {
    render() {
        let universities = [
            {
                title: 'University of California, Riverside',
                start: 'Sep 2014',
                end: 'Jun 2015',
                header: 'Master of Science, Computer Engineering',
                description: 'Graduated on June 2017',
            },
            {
                title: 'University of California, Riverside',
                start: 'Sep 2015',
                end: 'Jun 2017',
                header: 'Graduate Preparation Program in Electrical Engineering',
                description: 'none',
            },
            {
                title: 'Huazhong University of Science and Technology',
                start: 'Sep 2011',
                end: 'July 2014',
                header: 'Bachelor of Science, Electrical Engineering',
                description: 'Graduated on July 2015',
            },
        ];
        let items = universities.map((u, i) => <Item key={i} {...u} />);

        return (

            <div id="education" className="section">
                <div className="container">
                    <div className="page-header">
                        <h1>Education</h1>
                        <hr/>
                    </div>
                    { items }
                </div>
                <Button next="experience" />
            </div>
        )
    }
}
