import React, { Component } from 'react';
import $ from 'jquery';
import 'tilt.js/dest/tilt.jquery.min.js';

export default class extends Component {
    componentDidMount() {
        this.$el = $(this.el);
        this.tilt = this.$el.tilt({
            perspective: 1000,
            glare: true,
            maxGlare: .6,
        });
    }

    componentWillUnmount() {
        this.tilt.tilt.destroy.call(this.tilt);
    }

    render() {
        return (
            <div>
                <div {...this.props} data-tilt ref={el => this.el = el}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
