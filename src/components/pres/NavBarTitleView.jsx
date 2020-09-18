import React, { Component } from 'react';


class NavBarTitleView extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }



    render() {
        return(
            <div className="nav-bar-title">
                <p className="nav-bar-title-text">
                    {"Job Tracker"}
                </p>
            </div>
        )
    }
}

export default NavBarTitleView;