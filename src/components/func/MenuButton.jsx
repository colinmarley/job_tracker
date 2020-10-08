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
        //Open or Close the menu
        (this.props.menuState) ? this.props.closeMenu() : this.props.openMenu();
    }

    render() {

        let CLASS_NAME = "menu-btn ";
        CLASS_NAME += (this.props.menuState) ? "menu-btn-active" : "menu-btn-inactive";
        console.log(CLASS_NAME);
        return(
            <div className={ CLASS_NAME } id="menuButton" onClick={ (e) => this.onMenuBtnClick(e) }>
                <MenuButtonView menuState={this.props.menuState}></MenuButtonView>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuButton);