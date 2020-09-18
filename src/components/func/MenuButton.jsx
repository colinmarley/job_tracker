import React, { Component } from 'react';
import MenuButtonView from '../pres/MenuButtonView';
import MenuView from '../pres/MenuView';

class MenuButton extends Component {
    constructor(props){
        super(props);

        this.state = {
            menuStatus: false,
        }

        this.onMenuBtnClick = this.onMenuBtnClick.bind(this);
    }

    onMenuBtnClick(event) {
        this.setState({
            menuStatus: !this.state.menuStatus
        });
    }

    render() {
        return(
            <div className="menu-btn" id="menuButton" onClick={ (e) => this.onMenuBtnClick(e) }>
                <MenuButtonView menuStatus={this.state.menuStatus}></MenuButtonView>
                <MenuView menuStatus={this.state.menuStatus}></MenuView>
            </div>
        );
    }
}

export default MenuButton;