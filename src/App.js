import React, { Component } from 'react';
import Header from './components/Header';
import './styles.css';
import Main from '../src/pages/main';
import Routes from './routes';

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>

);

export default App;
