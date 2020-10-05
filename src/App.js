import React from 'react';
import Navbar from './components/func/Navbar';
import JobForm from './components/func/JobForm';
import { connect } from 'react-redux';
import firebase from 'firebase';
import './styles/App.css';
import './styles/Menu.css';
import './styles/NavBar.css';
import { openMenu } from './actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    db: state.db.db,
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
      <JobForm></JobForm>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
