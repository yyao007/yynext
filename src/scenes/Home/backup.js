import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Content from '../../components/Content';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this.handleClickBurger = this.handleClickBurger.bind(this);
        this.isSidebarOpen = this.isSidebarOpen.bind(this);
    }

    handleClickBurger(event) {
        this.setState({isOpen: !this.state.isOpen});
    }

    isSidebarOpen(state) {
        this.setState({isOpen: state.isOpen});
    }

    render() {
        return (
            <div id="outer-container" style={{height: '100%'}}>
                <Sidebar isOpen={this.state.isOpen} onStateChange={this.isSidebarOpen} />
                <main id="page-wrap">
                    <Content />
                    <Header onClick={this.handleClickBurger} />
                </main>
            </div>
        );
    }
}

export default App;
