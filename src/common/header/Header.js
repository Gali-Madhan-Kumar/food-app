import React, { Component } from "react";
import './Header.css';
import logo from '../../assets/logo.png';
import { Wave } from "react-animated-text";

class Header extends Component {
    render() {
        return (
            <div className="header-div">
                <div className="app-logo-image">
                    <img src={logo} alt={""}/>
                </div>
                <div className={"app-logo-text"}>
                    <Wave text={"Food On Way"} />
                </div>
            </div>
        );
    }
}

export default Header;