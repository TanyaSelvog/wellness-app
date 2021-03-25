import React, { Component } from 'react';
import logo from '../010-love.svg';
import {Link} from 'react-scroll';

export default class header extends Component {
    render() {
        return (
            <div className="App">
            <header className="App-header">
              <Link to="areas" spy={true} smooth={true}>
                <img src={logo} className="App-logo" alt="logo"></img>
              <h3 className="Box-title d-flex flex-justify-center">Garden of Wellness</h3></Link>
            </header>
          </div>
        )
    }
}