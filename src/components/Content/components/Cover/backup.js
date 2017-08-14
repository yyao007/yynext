import React, { Component } from 'react';
import Tilt from 'react-tilt';
import './Cover.css'

export default class extends Component {
    render() {
        return (
            <Tilt className="Tilt" options={{ max : 22, scale: 1.05 }} >
            <div id="cover" className="section">
                <div className="container">
                    <div className="jumbotron">
                        <h1 className="Tilt-inner">Yuan Yao</h1>
                        <hr/>
                        <p className="description Tilt-inner">{'I\'m a new grad seeking for full-time software engineer and full stack web developer roles'}</p>
                    </div>
                </div>
            </div>
            </Tilt>
        )
    }
}

<div className="layer2" data-depth="0.60"></div>
<div className="layer3" data-depth="0.80"></div>
<div className="layer4" data-depth="0.80"></div>
<div className="layer5" data-depth="1.00"></div>

// .layer2 {
//     width: 100%;
//     height: 105%;
//     /*margin-left: 30%;*/
//     background: url("/images/nodejs1.png");
//     background-size: 25vh;
//     background-repeat: no-repeat;
//     background-position: center;
// }
//
// .layer3 {
//     width: 75%;
//     height: 105%;
//     /*margin-left: 30vw;*/
//     background: url("/images/react.svg");
//     background-size: 8vh;
//     background-repeat: no-repeat;
//     background-position: center;
// }
//
// .layer4 {
//     width: 50%;
//     height: 105%;
//     /*margin-left: 30%;*/
//     background: url("/images/python.png");
//     background-size: 13vh;
//     background-repeat: no-repeat;
//     background-position: center;
// }
