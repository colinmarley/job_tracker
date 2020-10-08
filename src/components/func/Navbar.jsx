import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuButton from './MenuButton';
import NavBarTitleView from '../pres/NavBarTitleView';
import MenuView from '../pres/MenuView';

const mapStateToProps = (state, ownProps) => {
    return ({

    });
}

const mapDispatchToProps = dispatch => ({

});

class Navbar extends Component {

    render() {
        return (
            <div className="navbar-root">
                <MenuView></MenuView>
                <MenuButton></MenuButton>
                <NavBarTitleView></NavBarTitleView>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);