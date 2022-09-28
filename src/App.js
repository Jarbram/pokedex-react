import React from 'react'
import Topbar from './components/topbar/Topbar';
import './App.css'
import PokeList from './components/pokeList/PokeList';



const App = () => {
  return (
    <>
    <Topbar/>
    <PokeList />
    </>
  );
}

export default App