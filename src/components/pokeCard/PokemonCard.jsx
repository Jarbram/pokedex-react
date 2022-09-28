import React, {useState} from 'react'
import './pokeCard.css'
import pokeball from '../../assets/pokeball.png'


function PokemonCard({
  id,
  name,
  image,
  type,
  weight,
  height,
  stats,
  statsName,
}) {
  const [isShow,setIsShown]= useState(false);

  return(
    <div className="container">
    {isShow && (
    <div className="container-show">
    <div className="show">
    <div className="stat-container-title">
    <img src={image} alt={name} className="image-title"/>
    <p style={{width:"180px", color:"black"}}>Nº. {id}</p>
    <p>{name}</p>
    <img src={pokeball} alt="pokeball" className="pokeball-title"/>
    </div>
    <img src={image} alt={name} />
    <div style={{display:"flex", width:"100%"}} className="stat-container">
    <div style={{background:"#dbdbd9",textAlign:"center"}} className="stats-left">
    <p>Type</p>
    <p>Height</p>
    <p>weight</p>
    </div>
    <div style={{background:"#ffffff"}} className="stats-right">
    <p>{type}</p>
    <p>{height}0 cm</p>
    <p>{weight} lbs</p>
    </div>
    </div>
    </div>
    </div>
    )}
    <div className="right"
    onMouseEnter={()=> setIsShown(true)}
    onMouseLeave={()=> setIsShown(false)}
    >
    <img src={image} alt={name} style={{maxHeight:"50px",marginRight:"10px",width:"50px"}}/>
    <p style={{width:"270px"}}>Nº. {id}</p>
    <p>{name}</p>
    <img src={pokeball} alt="pokeball" style={{
      marginLeft:"auto",width:"40px"}}/>
    </div>
    </div>
  )
}

export default PokemonCard