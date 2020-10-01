import React from 'react';
import Navbar from './components/func/Navbar';
import { connect } from 'react-redux';
import './styles/App.css';
import './styles/Menu.css';
import './styles/NavBar.css';
import { openMenu } from './actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    menuState: state.menu.menuState,
  });
}

const mapDispatchToProps = dispatch => ({
  openMenu: () => { dispatch(openMenu())}
})

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
