import React from 'react';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {

    constructor(props) {
        super(props);

        this.hideSidebar = this.hideSidebar.bind(this);
    }

    hideSidebar() {
        let sideBar = document.getElementById("sidebar-container");
        let videoIndex = document.getElementById("video-index-container");
        let smallSideBar = document.getElementById("small-sidebar-container");
        smallSideBar.classList.remove("hide");
        sideBar.classList.add("hide");
        videoIndex.classList.add("extend");
    }

    render() {
        if (this.props.modal !== "sidebar") {
            return (
                <section id="sidebar-container" className="hide">
                    <div id="sidebar-title">
                        <button onClick={this.hideSidebar} id="sidebar-options-btn">&#x2630;</button>
                        <Link to="/" id="logo-btn"><span className="iconify" data-icon="mdi-language-ruby"></span>RubyReel</Link>
                    </div>
                    <div id="sidebar-website-links">
                        <Link id="sidebar-home-link" to='/'><i className="fas fa-home"></i>Home</Link>
                        <Link to='/'><i className="far fa-newspaper"></i>Subscriptions (in dev)</Link>
                        <Link to='/'><i className="fas fa-photo-video"></i>Your Videos (in dev)</Link>
                        <Link to='/'><i className="fas fa-thumbs-up"></i>Liked Videos (in dev)</Link>
                    </div>
                    <div>
                        <a href="https://github.com/nickdraper8"><i className="fab fa-github"></i>GitHub</a>
                        <a href="https://angel.co/u/nicholas-draper-2"><i className="fab fa-angellist"></i>AngelList</a>
                        <a href="https://www.linkedin.com/in/nicholas-draper/"><i className="fab fa-linkedin"></i>LinkedIn</a>
                        <a href="https://github.com/nickdraper8/RubyReel"><i className="fas fa-gem"></i>Project Repo</a>
                    </div>
                    <div id="sidebar-footer">
                        <div id="sidebar-footer-section1">
                            <a href="https://github.com/nickdraper8/RubyReel">About</a>
                            <a href="https://github.com/nickdraper8/RubyReel">Press</a>
                            <a href="https://github.com/nickdraper8/RubyReel">Copyright</a>
                            <a href="https://github.com/nickdraper8/RubyReel">Contact me</a>
                            <a href="https://github.com/nickdraper8/RubyReel">Creator</a>
                            <a href="https://github.com/nickdraper8/RubyReel">Advertise</a>
                            <a href="https://github.com/nickdraper8/RubyReel">Developers</a>
                        </div>
                        <div id="sidebar-footer-section2">
                            <a href="https://github.com/nickdraper8/RubyReel">Terms</a>
                            <a href="https://github.com/nickdraper8/RubyReel">Privacy</a>
                            <a href="https://github.com/nickdraper8/RubyReel">Policy & Safety</a>
                            <a href="https://github.com/nickdraper8/RubyReel">How RubyReel works</a>
                            <a href="https://github.com/nickdraper8/RubyReel">Test new features</a>
                        </div>
                        <div id="sidebar-footer-copyright">© 2020 Nick Draper</div>
                    </div>
                </section>
            );
        } else {
            return (
                <section onClick={this.props.closeModal} id="sidebar-container">
                    <div id="sidebar-title">
                        <button onClick={this.closeModal} id="sidebar-options-btn">&#x2630;</button>
                        <Link to="/" id="logo-btn"><span className="iconify" data-icon="mdi-language-ruby"></span>RubyReel</Link>
                    </div>
                    <div id="sidebar-website-links">
                        <Link id="sidebar-home-link" to='/'><i className="fas fa-home"></i>Home</Link>
                        <Link to='/'><i className="far fa-newspaper"></i>Subscriptions (in dev)</Link>
                        <Link to='/'><i className="fas fa-photo-video"></i>Your Videos (in dev)</Link>
                        <Link to='/'><i className="fas fa-thumbs-up"></i>Liked Videos (in dev)</Link>
                    </div>
                    <div>
                        <a href="https://github.com/nickdraper8"><i className="fab fa-github"></i>GitHub</a>
                        <a href="https://angel.co/u/nicholas-draper-2"><i className="fab fa-angellist"></i>AngelList</a>
                        <a href="https://www.linkedin.com/in/nicholas-draper/"><i className="fab fa-linkedin"></i>LinkedIn</a>
                        <a href="https://github.com/nickdraper8/RubyReel"><i className="fas fa-gem"></i>Project Repo</a>
                    </div>
                    <div id="sidebar-footer">
                        <div id="sidebar-footer-section1">
                            <a href="https://github.com/nickdraper8/RubyReel">About</a>
                            <a href="https://github.com/nickdraper8/RubyReel">Press</a>
                            <a href="https://github.com/nickdraper8/RubyReel">Copyright</a>
                            <a href="https://github.com/nickdraper8/RubyReel">Contact me</a>
                            <a href="https://github.com/nickdraper8/RubyReel">Creator</a>
                            <a href="https://github.com/nickdraper8/RubyReel">Advertise</a>
                            <a href="https://github.com/nickdraper8/RubyReel">Developers</a>
                        </div>
                        <div id="sidebar-footer-section2">
                            <a href="https://github.com/nickdraper8/RubyReel">Terms</a>
                            <a href="https://github.com/nickdraper8/RubyReel">Privacy</a>
                            <a href="https://github.com/nickdraper8/RubyReel">Policy & Safety</a>
                            <a href="https://github.com/nickdraper8/RubyReel">How RubyReel works</a>
                            <a href="https://github.com/nickdraper8/RubyReel">Test new features</a>
                        </div>
                        <div id="sidebar-footer-copyright">© 2020 Nick Draper</div>
                    </div>
                </section>
            );
        }
    }

}

export default SideBar;