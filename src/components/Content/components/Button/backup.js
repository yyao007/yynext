import Scroll from 'react-scroll';
import React, { Component } from 'react';
import './Button.css';

let scroll = Scroll.animateScroll;
let Link = Scroll.Link;
let Events = Scroll.Events;
let scrollSpy = Scroll.scrollSpy;

export default class extends Component {
    constructor(props) {
        super(props);
    }

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
        return (
            <Link id="next-page" className="btn btn-md" activeClass="active" to="about" spy={false} smooth={"easeInOutQuart"} duration={1000}>
                <i className="fa fa-angle-down" aria-hidden="true"></i>
            </Link>
        );
    }
}
