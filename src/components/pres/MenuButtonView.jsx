import React, { Component } from 'react';

class MenuButtonView extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }



    render() {

        const TOP_STYLE = "menu-btn-line " + (this.props.menuStatus ? "menu-btn-top-line-active" : "menu-btn-top-line-inactive");
        const MID_STYLE = "menu-btn-line " + (this.props.menuStatus ? "menu-btn-mid-line-active" : "menu-btn-mid-line-inactive");
        const BOT_STYLE = "menu-btn-line " + (this.props.menuStatus ? "menu-btn-bot-line-active" : "menu-btn-bot-line-inactive");

        return (
            <div>
                <div className={TOP_STYLE} id="menu-btn-top-line"></div>
                <div className={MID_STYLE} id="menu-btn-mid-line"></div>
                <div className={BOT_STYLE} id="menu-btn-bot-line"></div>
            </div>
        );
    }
    
}

export default MenuButtonView;