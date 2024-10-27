import React, { useEffect, useState } from 'react'
import './Player.css'
import backarrow from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {
  const navigate = useNavigate();
  const {id} =useParams();
  const [apidt, setapidt] = useState({
    name: '',
    key:'',
    type:'',
    published_at:''
  });
  useEffect(()=>{
   
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setapidt(res.results[0]))
    .catch(err => console.error(err));
  }, [])
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNmI5ZmVlMDI5YjFjZjRlN2NhZTE5ZGZmNDMyODRmMSIsIm5iZiI6MTcyOTc4ODMwOC4wMDAzMSwic3ViIjoiNjcxOTc5NWM1YmU5ZTg3NTlkYTZkMGFkIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.mn15qPtv7LYAKh7yXTq8jRnngFPCnvJcJoZdjQ1oDiY'
    }
  };
 
  return (
    
    <div className='player'>
      <img src={backarrow}
       onClick={()=>{
        navigate(-1);
       }}/>
      <iframe src={`https://www.youtube.com/embed/${apidt.key}`} width='90%' height='90%' frameborder="0" 
      title='trailer' allowFullScreen 
      ></iframe>
      <div className="player-info">
        <p>{apidt.published_at.slice(0,10)}</p>
        <p>{apidt.name}</p>
        <p>{apidt.type}</p>

      </div>
      
    </div>
  )
}

export default Player
