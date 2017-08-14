import { stack as Menu } from 'react-burger-menu';
import Scroll from 'react-scroll';
import React, { Component } from 'react';
import './Sidebar.css';

let scroll = Scroll.animateScroll;
let Link = Scroll.Link;
let Events = Scroll.Events;
let scrollSpy = Scroll.scrollSpy;

class Sidebar extends Component {
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
            <Menu isOpen={this.props.isOpen} onStateChange={this.props.onStateChange} customBurgerIcon={false} id={'sidebar'} className={'nav'} pageWrapId={'page-wrap'} outerContainerId={'outer-container'} right>
                <h2>
                    <i className="fa fa-y-combinator lg-icon" aria-hidden="true"></i> yynext
                </h2>
                <Link className="menu-user" activeClass="active" to="cover" spy={true} smooth={"easeInOutQuart"} duration={1000}>
                    <i className="fa fa-home" aria-hidden="true"></i> Home
                </Link>
                 <Link className="menu-user" activeClass="active" to="about" spy={true} smooth={"easeInOutQuart"} duration={1000}>
                    <i className="fa fa-id-card" aria-hidden="true"></i> About
                </Link>
                <Link className="menu-user" activeClass="active" to="education" spy={true} smooth={"easeInOutQuart"} duration={1000}>
                    <i className="fa fa-graduation-cap" aria-hidden="true"></i> Education
                </Link>
                <Link className="menu-user" activeClass="active" to="experience" spy={true} smooth={"easeInOutQuart"} duration={1000}>
                    <i className="fa fa-briefcase" aria-hidden="true"></i> Experience
                </Link>
                <Link className="menu-user" activeClass="active" to="projects" spy={true} smooth={"easeInOutQuart"} duration={1000}>
                    <i className="fa fa-code" aria-hidden="true"></i> Projects
                </Link>
                <Link className="menu-user" activeClass="active" to="skills" spy={true} smooth={"easeInOutQuart"} duration={1000}>
                    <i className="fa fa-bolt" aria-hidden="true"></i> Skills
                </Link>
                <Link className="menu-user" activeClass="active" to="contact" spy={true} smooth={"easeInOutQuart"} duration={1000}>
                    <i className="fa fa-address-book" aria-hidden="true"></i> Contact
                </Link>

            </Menu>
        );
    }
}

export default Sidebar;
