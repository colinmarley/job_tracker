import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuButtonView from '../pres/MenuButtonView';
import MenuView from '../pres/MenuView';
import { 
    openMenu, closeMenu
} from '../../actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        menuState: state.menu.menuState,
    });
}

const mapDispatchToProps = dispatch => ({
    openMenu: () => dispatch(openMenu()),
    closeMenu: () => dispatch(closeMenu()),
});

class MenuButton extends Component {


    onMenuBtnClick(event) {
        (this.props.menuState) ? this.props.closeMenu() : this.props.openMenu();
        console.log("button clicked");
    }

    render() {
        return(
            <div className="menu-btn" id="menuButton" onClick={ (e) => this.onMenuBtnClick(e) }>
                <MenuButtonView menuState={this.props.menuState}></MenuButtonView>
                <MenuView></MenuView>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuButton);