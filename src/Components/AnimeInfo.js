import './AnimeInfo.css'

export default function AnimeInfo(props) {
    const {title,source,rank,score,popularity,members,status,rating,duration,synopsis}=props.data;
    return(
          <div className="anime-content">
            <h3>{title}</h3>
           <div className='animeImge'>
           <img src={props.data.images.jpg.large_image_url} alt=''/>
           <p>Source : {source}</p>
           <p>Rank : {rank}</p>
           <p>Score : {score}</p>
           <p>Popularity : {popularity}</p>
           <p>Members : {members}</p>
           <p>Status : {status}</p>
           <p>Rating : {rating}</p>
           <p>Duration : {duration}</p>
           
           </div>
           <p>{synopsis}</p>
           </div>
        )


}

