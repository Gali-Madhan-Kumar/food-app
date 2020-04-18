import React, { Component } from "react";
import './Header.css';
import logo from '../../assets/logo.png';
import { Wave } from "react-animated-text";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
   loginButton: {
       textTransform: 'none',
       color: 'white',
       marginRight: '1rem',
       '&:hover': {
           backgroundColor: 'transparent !important',
           color: 'black',
       }
   },
    signUpButton: {
       textTransform: 'none',
        color: 'white',
        marginRight: '1rem',
        borderColor: 'white',
        '&:hover': {
           borderColor: 'black',
            color: 'black',
        }
    }
});

class Header extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className="header-div">
                <div className="app-logo-image">
                    <img src={logo} alt={""}/>
                </div>
                <div className="app-logo-text">
                    <Wave text={"Food On Way"} />
                </div>
                <div className="header-buttons">
                    <Button className={classes.loginButton} disableRipple={true} >Log in</Button>
                    <Button className={classes.signUpButton} disableRipple={true} variant={"outlined"} >Create an account</Button>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Header);