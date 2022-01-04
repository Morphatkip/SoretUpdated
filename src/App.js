import './App.css';
import HomePage from './pages/homepage';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


class App extends React.Component{
   render() {
    return (
     <React.Fragment>
       <HomePage/>
     </React.Fragment>
    );
  }

  
}
export default App;