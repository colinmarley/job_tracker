import React from 'react';
import Navbar from './components/func/Navbar';
import JobForm from './components/func/JobForm';
import JobFormList from './components/func/JobFormList';
import { connect } from 'react-redux';
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
      <JobFormList></JobFormList>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
