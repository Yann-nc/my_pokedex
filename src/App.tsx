import React, { useEffect, useState } from 'react';
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Pokemon from './components/Pokemon';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to the Pokedex !
        </p>
        <List component="nav">
          <ListItem button>
            <Pokemon id="1"/>
          </ListItem>
          <Divider />
          <ListItem button>
            <Pokemon id="2"/>
          </ListItem>
          <Divider />
          <ListItem button>
            <Pokemon id="3"/>
          </ListItem>
          <Divider />
          <ListItem button>
            <Pokemon id="4"/>
          </ListItem>
          <Divider />
          <ListItem button>
            <Pokemon id="5"/>
          </ListItem>
          <Divider />
          <ListItem button>
            <Pokemon id="6"/>
          </ListItem>
          <Divider />
          <ListItem button>
            <Pokemon id="7"/>
          </ListItem>
          <Divider />
          <ListItem button>
            <Pokemon id="8"/>
          </ListItem>
          <Divider />
          <ListItem button>
            <Pokemon id="9"/>
          </ListItem>
        </List>
      </header>
    </div>
  );
}

export default App;
