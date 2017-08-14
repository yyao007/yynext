import Headroom from 'react-headroom'
import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <Headroom
                disableInlineStyles={true}
                downTolerance={20}
                upTolerance={10}>
                <nav id="header" className="navbar navbar-default">
                  <div className="container">
                    <div className="navbar-header">
                      <button id="burger" type="button" className="navbar-toggle" onClick={this.props.onClick}>
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                      <a id="brand" className="navbar-brand" href="/">
                       <span data-hover="YY">YY</span>
                      </a>
                    </div>
                  </div>
                </nav>
            </Headroom>
        );
    }
}

export default Header;
