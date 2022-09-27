import React from 'react'
import Topbar from './components/topbar/Topbar';
import './App.css'
import BottomBar from './components/bottomBar/BottomBar';
import PokeList from './components/pokeList/PokeList';



const App = () => {
  return (
    <>
    <Topbar/>
    <PokeList />
    <BottomBar/>
    </>
  );
}

export default App