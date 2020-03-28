import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Post } from './Post';
import { Navbar } from './Navbar';
import { Card } from './Card';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar/>
        <Card />
      </div>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/post/:id' component={Post} />
        <Route path='/' render={() => <div>404</div>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
