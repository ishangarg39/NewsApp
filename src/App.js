//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>

        
        <Router>
        <NavBar/>
          <Routes>
          <Route exact path="/" element={<News key="general" country="us" pagesize={5} category="General"/>}></Route>
          <Route exact path="/Business" element={<News key="business" country="us" pagesize={2} category="Business"/>}></Route>
          <Route exact path="/Entertainment" element={<News key="entertainment" country="us" pagesize={2} category="Entertainment"/>}></Route>
          <Route exact path="/Health" element={<News key="health" country="us" pagesize={2} category="Health"/>}></Route>
          <Route exact path="/Science" element={<News key="science" country="us" pagesize={2} category="Science"/>}></Route>
          <Route exact path="/Sports" element={<News key="sports" country="us" pagesize={2} category="Sports"/>}></Route>
          <Route exact path="/Technology" element={<News key="technology" country="us" pagesize={2} category="Technology"/>}></Route>

        
        </Routes>
        </Router>
      </div>
    )
  }
}
