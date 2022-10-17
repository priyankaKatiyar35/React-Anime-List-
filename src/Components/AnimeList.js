import React from 'react'
import './AnimeList.css';
import AddtoList from './AddtoList';
import RemoveFromList from './RemoveFromList';
import {Link} from 'react-router-dom';
export default function AnimeList({Animedata,setAnimeInfo,handleAddTo,whattodo}) {
    
    return (
    <div className='wrapper'>
        {
            Animedata?(
                Animedata.map((anime,index)=>{
                 return(
                    <>
                     
                    <div className='card' key={index} onClick={()=>{setAnimeInfo(anime)}}>
                    <Link to='/animeinfo'>    <img src={anime.images.jpg.large_image_url} alt='' /></Link>
                        <div className='anime-info'>
                       <h4>{anime.title}</h4>
                       
                         <div className='overlay' onClick={()=>{handleAddTo(anime)}}>
                            <div className='synopsis'>
                            <p style={{'color':'white'}}>{anime.synopsis}</p>
                            </div>
                            {whattodo?<AddtoList  />:<RemoveFromList/>}
                         </div>
                         
                        </div>
                    </div>
                    
                    </>
                 )
                })
            ):"No Anime Found"
        }      
    </div>
  )
}