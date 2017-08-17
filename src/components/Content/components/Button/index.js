import Scroll from 'react-scroll';
import React, { Component } from 'react';
import './Button.css';

let scroll = Scroll.animateScroll;
let Link = Scroll.Link;
let Events = Scroll.Events;
let scrollSpy = Scroll.scrollSpy;

export default class extends Component {
    componentDidMount() {
        Events.scrollEvent.register('begin', function(to, element) {
            // console.log("begin", arguments);
        });
        Events.scrollEvent.register('end', function(to, element) {
            // console.log("end", arguments);
        });
        scrollSpy.update();
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    scrollTo() {
        scroll.scrollTo(100);
    }

    render() {
        let buttonClass = this.props.buttonClass || "next-page";
        let offset = this.props.offset || 0;
        return (
            <div className="button">
                <Link className={buttonClass} activeClass="active" to={this.props.next} spy={false} smooth={"easeInOutQuart"} duration={1600} offset={offset}>
                    <span/>
                    <span/>
                    <p className="scroll-text">Scroll</p>
                </Link>
            </div>
        );
    }
}
