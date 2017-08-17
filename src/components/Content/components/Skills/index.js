import React, { Component } from 'react';
import {Parallax} from 'react-parallax';
import Hidden from '../Hidden';
import Button from '../Button';
import './Skills.css';

class StarList extends Component {
    calculateStars() {
        let numberStars = Number(this.props.stars) || 0;
        let half = false;
        let stars = [];
        if (numberStars > 5) {
           numberStars = 5;
        } else if (numberStars % 1 !== 0) {
            numberStars = Math.floor(numberStars);
            half = true;
        }
        for (let i = 0; i < 5; ++i) {
            if (i < numberStars) {
                stars.push(
                    <li key={i} className="star">
                        <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                );
            } else if (half) {
                stars.push(
                    <li key={i} className="star">
                        <i key={i} className="fa fa-star-half-o" aria-hidden="true"></i>
                    </li>
                );
                half = false;
            } else {
                stars.push(
                    <li key={i} className="star">
                        <i key={i} className="fa fa-star-o" aria-hidden="true"></i>
                    </li>
                );
            }
        }

        return stars;
    }

    render() {
        return (
            <ul className={this.props.className + " list-inline"}>
                {this.calculateStars()}
            </ul>
        )
    }
}

class Icon extends Component {
    render() {
        return (
            <li className="icon">
                <i className={this.props.icon.class}>
                    <StarList className="level" stars={this.props.icon.stars} />
                </i>

            </li>
        )
    }
}

class IconList extends Component {
    render() {
        const icons = this.props.icons;
        return (
            <ul className={this.props.className + " list-inline"}>
                {icons.map((icon, index) =>
                    <Icon key={index} icon={icon} />
                )}
            </ul>
        )
    }
}


export default class extends Component {
    render() {
        let icons = [
            {
                class: "devicon-python-plain-wordmark colored",
                stars: 5,
            },
            {
                class: "devicon-javascript-plain colored",
                stars: 5,
            },
            {
                class: "devicon-java-plain-wordmark colored",
                stars: 5,
            },
            {
                class: "devicon-cplusplus-plain-wordmark  colored",
                stars: 5,
            },
            {
                class: "devicon-nodejs-plain-wordmark colored",
                stars: 5,
            },
            {
                class: "devicon-mysql-plain-wordmark colored",
                stars: 5,
            },
            {
                class: "devicon-react-original-wordmark colored",
                stars: 4.5,
            },
            {
                class: "devicon-express-original-wordmark",
                stars: 4.5,
            },
            {
                class: "devicon-mongodb-plain-wordmark colored",
                stars: 4.5,
            },
            {
                class: "devicon-postgresql-plain-wordmark colored",
                stars: 4.5,
            },
            {
                class: "devicon-html5-plain-wordmark colored",
                stars: 4.5,
            },
            {
                class: "devicon-css3-plain-wordmark colored",
                stars: 4.5,
            },
            {
                class: "devicon-jquery-plain-wordmark colored",
                stars: 4,
            },
            {
                class: "devicon-bootstrap-plain-wordmark colored",
                stars: 4,
            },
            {
                class: "devicon-c-plain-wordmark colored",
                stars: 4,
            },
            {
                class: "devicon-github-plain-wordmark colored",
                stars: 4,
            },
            {
                class: "devicon-amazonwebservices-plain-wordmark colored",
                stars: 3.5,
            },
            {
                class: "devicon-django-plain-wordmark colored",
                stars: 3.5,
            },
            {
                class: "devicon-nginx-original-wordmark colored",
                stars: 3,
            },
            {
                class: "devicon-docker-plain-wordmark colored",
                stars: 3,
            },
            {
                class: "devicon-tomcat-line-wordmark colored",
                stars: 2.5,
            },
        ];
        return (
            <div id="skills" className="section">
                <Parallax bgImage="images/balloon2.jpg" strength={400} blur={{min:0, max:0}}>
                    <div className="container">
                        <div className="page-header">
                            <h1>Skills</h1>
                            <hr/>
                        </div>
                        <Hidden>
                            <div className="row">
                                <div className="col-xs-12">
                                    <IconList className="icon-list" icons={icons} />
                                </div>
                            </div>
                        </Hidden>
                    </div>
                    <Button next="contact" offset={-230} />
                </Parallax>
            </div>
        )
    }
}
