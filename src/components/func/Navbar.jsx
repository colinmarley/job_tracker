import React, { Component } from 'react';
import MenuButton from './MenuButton';
import NavBarTitleView from '../pres/NavBarTitleView';



class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div className="navbar-root">
                <MenuButton></MenuButton>
                <NavBarTitleView></NavBarTitleView>
            </div>
        )
    }
}

export default Navbar;