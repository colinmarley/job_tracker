import React, { Component } from 'react';


class MenuView extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        const CLASS_NAME = "menu-view " + (this.props.menuStatus ? "menu-view-active" : "menu-view-inactive");
    
        return(
            <div className={CLASS_NAME}>
            </div>
        );
    }
}

export default MenuView;