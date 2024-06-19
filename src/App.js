import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import * as actions from './store/actions/auth';
import Menu from './components/layout/Menu';
import Dashboard from './components/screens/Dashboard';
import Operator from './components/screens/Operator';
import Symptoms from './components/screens/Symptoms';
import Conditions from './components/screens/Conditions';
import ChangePassword from './components/screens/ChangePassword';
import Login from './components/screens/Login';
import Company from './components/screens/Company';
import PrivateRoute from './PrivateRoute';
import { connect } from 'react-redux';
import ConditionsDetails from './components/screens/ConditionDetails';
import SymptomDetails from './components/screens/SymptomDetails';
import { ComingSoon } from './components/screens/ComingSoon';

class App extends React.Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
  return (
    <div className="App">
     <Router>
        <Routes>

          <Route path='/' element={<Login {...this.props}/>}/>

          <Route element={<PrivateRoute/>}>

            <Route path='/' element={<Menu {...this.props}/>}>
              <Route path='dashboard' element={<Dashboard/>}/>
              <Route path='operator' element={<Operator/>}/>
              <Route path='symptoms' element={<Symptoms/>}/>
              <Route path='conditions' element={<Conditions/>}/>
              <Route path='changePassword' element={<ChangePassword {...this.props}/>}/>
              <Route path='company' element={<Company/>}/>
              <Route path='condition-details' element={<ConditionsDetails/>}/>
              <Route path='symptom-details' element={<SymptomDetails/>}/>
              <Route path='coming-soon' element={<ComingSoon/>}/>
            </Route>

          </Route>


      </Routes>
    </Router>
    </div>
  );
}
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null,
    role: state.role
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);