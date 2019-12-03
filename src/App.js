import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Redirect,Link } from 'react-router-dom';
import  AddComponent from './COMPONENT/AddComponent';
import NavComponent from './COMPONENT/NavComponent';
import RetriveComponent from './COMPONENT/RetriveComponent';
import DeleateComponent from './COMPONENT/DeleateComponent';
import UpdateComponent from './COMPONENT/UpdateComponent';
import SIGNUPCOMPONENT from './COMPONENT/SIGNUPCOMPONENT';
import LOGINPAGE from './COMPONENT/LOGINPAGE';
import  AxiousIntercepte  from './COMPONENT/AxiousIntercepte';
import LogoutComponent from './COMPONENT/LogoutComponent';
import Wheterapp from './WhetherComponent/wheterapp';
function App() {
 
  return (
   
    <div className="App">
       <Router>
       <NavComponent />
       <Route path='/Add' exact strict component={AddComponent} />
       <Route path='/Listofstudent' exact strict component={RetriveComponent} />
       <Route path='/DELETE/:id' exact strict component={ DeleateComponent} />
       <Route path='/UPDATE/:id/:name/:roolnumber' exact strict component={ UpdateComponent} />
       <Route path='/Signup' exact strict component={SIGNUPCOMPONENT} />
       <Route path='/Login' exact strict component={LOGINPAGE} />
       <Route path='/Logout' exact strict component={LogoutComponent} />
       <Route path='/Wether' exact strict component={Wheterapp} />
      </Router>
      <AxiousIntercepte />
    </div>
    
  );
}

export default App;
