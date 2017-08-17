import React, { Component } from 'react';
import Hidden from '../Hidden';
import Button from '../Button';
import './Contact.css'

export default class extends Component {
    render() {
        return (
            <div id="contact" className="section">
                <div className="container">
                    <div className="page-header">
                        <h1>Contact</h1>
                        <hr/>
                    </div>
                    <Hidden>
                        <Button buttonClass="to-top" next="cover" />
                        <div className="row">
                            <div className="col-xs-12">
                                <a className="media mail" href="mailto:yaoyuan526@gmail.com">
                                    <i className="fa fa-envelope" aria-hidden="true" />
                                    {'yaoyuan526@gmail.com'}
                                </a>
                            </div>
                            <div className="col-xs-12">
                                <a className="media" href="https://github.com/yyao007" title="GitHub"><i className="fa fa-github" aria-hidden="true" /></a>
                                <a className="media" href="https://www.linkedin.com/in/yuan-yao-0338a212b/" title="LinkedIn"><i className="fa fa-linkedin" aria-hidden="true" /></a>
                                <a className="media" href="https://www.facebook.com/yuan.yao.1232" title="Facebook"><i className="fa fa-facebook-official" aria-hidden="true" /></a>
                                <a className="media" href="/resume/resume_en.pdf" title="Resume"><i className="fa fa-file-pdf-o" aria-hidden="true" /></a>
                            </div>
                        </div>
                        <div className="footer">
                            {"© 2017"} <a href="/">Yuan Yao</a>. {"All rights reserved."}
                        </div>
                    </Hidden>
                </div>
            </div>
        )
    }
}
