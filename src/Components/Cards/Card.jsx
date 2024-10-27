import React, { useEffect, useRef, useState } from 'react'
import './Card.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'

const Card = ({title ,  catogery}) => {
  const [apidata , setapidata] = useState([])  ;                                                  
  const CardRef= useRef(null);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNmI5ZmVlMDI5YjFjZjRlN2NhZTE5ZGZmNDMyODRmMSIsIm5iZiI6MTcyOTc4ODMwOC4wMDAzMSwic3ViIjoiNjcxOTc5NWM1YmU5ZTg3NTlkYTZkMGFkIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.mn15qPtv7LYAKh7yXTq8jRnngFPCnvJcJoZdjQ1oDiY'
    }
  };
  
  
  const handlewheel = (e) => {
    e.preventDefault();
    CardRef.current.scrollLeft += e.deltaY;
  }
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${catogery ? catogery : 'now_playing'}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setapidata(res.results))
    .catch(err => console.error(err));
    if (CardRef.current)
  CardRef.current.addEventListener('wheel', handlewheel)
    
  },[])
  return (
    <div className='card'>
      <h2>{title ?title : "Popular on netflix"}</h2>
      <div className="card-list" ref={CardRef} >
        {apidata.map((card, index)=>{
          return <Link to={`/player/${card.id}` }
           className='cards' key={index}>
         <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
         <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default Card
