import React, { Component } from 'react';
import $ from 'jquery';
import './Hide.css';

export default class extends Component {
    componentDidMount() {
        this.$el = $(this.el);
        $(window).on('scroll', () => {
            let bottom_of_object = this.$el.offset().top + 0.5 * this.$el.height();
            let bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                this.$el.removeClass("hideme");
            } else {
                this.$el.addClass("hideme");
            }
        });
    }

    componentWillUnmount() {
        $(window).off('scroll');
    }

    render() {
        return (
            <div className="hideme hi" ref={el => this.el = el}>
                {this.props.children}
            </div>
        )
    }
}
