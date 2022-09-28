
import React from 'react'
import './topbar.css'
import pokeball from '../../assets/pokeball.png'

const Topbar = () => {
  return (
    <div className="title">

    <p>Pokedex</p>

    <img src={pokeball}
    style={{width:"30px",marginLeft:"10px"}}/>
    </div>

  )
}

export default Topbar