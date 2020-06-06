import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Goals from './components/Goals';

function App() {
  const [goals, setGoals] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/goals')
    .then(res => setGoals(res.data))
    .catch(err => console.log(err));
  })
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Route to='/' render={() => <Goals goals={goals}/>} />
    </div>
  );
}

export default App;
