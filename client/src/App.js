import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Homepage from './components/Homepage';
import Playlist from './components/Playlist';
import Album from './components/Album';
import Artist from './components/Artist';
import Song from './components/Song';
import NotFoundPage from './components/NotFoundPage';
import Login from './components/Login';
import SearchPage from './components/SearchPage';

function App() {
    
  return (
    <div className="App">
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Homepage}/>
        <Route path="/playlist/:id" exact component={Playlist}/>
        <Route path="/album/:id" exact component={Album}/>
        <Route path="/artist/:id" exact component={Artist}/>
        <Route path="/song/:id" exact component={Song}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/search" exact component={SearchPage}/>
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
