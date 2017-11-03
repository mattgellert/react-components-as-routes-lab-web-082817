import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';

const linkStyle = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const App = (props) => {
  return (
    <Router>
      <div>
      <NavBar />
        <Route exact path="/" exact style={linkStyle} activeStyle={{background: 'darkblue'}} component={Home}/>
        <Route exact path="/movies" exact style={linkStyle} activeStyle={{background: 'darkblue'}} component={Movies} />
        <Route exact path="/directors" exact style={linkStyle} activeStyle={{background: 'darkblue'}} component={Directors} />
        <Route exact path="/actors" exact style={linkStyle} activeStyle={{background: 'darkblue'}} component={Actors} />
      </div>
    </Router>
  );
};

export default App
