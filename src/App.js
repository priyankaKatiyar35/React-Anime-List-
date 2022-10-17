import "./App.css";
import { useEffect, useState } from "react";
import Banner from "./Components/Banner";
import AnimeList from "./Components/AnimeList";
import bannerURL from "./BannerURL5.jpg";
import AnimeInfo from "./Components/AnimeInfo";
import {Route,Switch,Redirect} from 'react-router-dom';
import SelectorHeader from "./Components/SelectorHeader";

function App() {
  const [animeData, setAnimeData] = useState();
  const [banner] = useState(bannerURL);
  const [search, setSearch] = useState("");
  const [animeInfo, setAnimeInfo] = useState("");
  const [myanime, setMyAnime] = useState([]);

  const addTo = (anime) => {
    const index = myanime.findIndex((ani) => {
      return ani.mal_id === anime.mal_id;
    });

    if (index < 0) {
      setMyAnime((prevs) => {
        return [...prevs, anime];
      });
      console.log(myanime);
    }
  };

  const removeAnime = (anime) => {
    const newArray = myanime.filter((ani) => {
      return ani.mal_id !== anime.mal_id;
    });
    setMyAnime(newArray);
  };

 

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://api.jikan.moe/v4/anime?q=${search}&limit=20`
      );
      const resData = await res.json();
      console.log(resData.data);
      setAnimeData(resData.data);
    };
    getData(); 
  }, [search]);
// apply debounce for query

  const optimizedSearch = (event) => {
    let value1 = event.target.value;
    updatedeboncetest(value1)
  };

  const updatedeboncetest = debounce((text)=>{setSearch(text);})

  function debounce(cb,delay=1000)
  {
     let timeid;
     return (...args)=>{
      clearTimeout(timeid)
      timeid=setTimeout(() => {
        cb(...args);
      }, delay);
     }
  }




  //
  return (
    <div className="App">
      
      <Banner bannerLink={banner}></Banner>
     
      <div className="input-div">
        <input
          className="search-input"
          type="search"
          placeholder="Search..."
          onChange={optimizedSearch}
        />
      </div> 
       <SelectorHeader />
      <Switch>
    
        <Route exact path='/' >
          <Redirect to='/welcome' />
        </Route>
        
        <Route path='/welcome'>
           <AnimeList
              Animedata={animeData}
              setAnimeInfo={setAnimeInfo}
              handleAddTo={addTo}
              whattodo={true}
            ></AnimeList>
        </Route>
       
          
        <Route path='/fav'>
             <AnimeList
              Animedata={myanime}
              setAnimeInfo={setAnimeInfo}
              handleAddTo={removeAnime}
              whattodo={false}
            ></AnimeList>
        </Route>
        <Route path='/animeinfo'>
        <AnimeInfo data={animeInfo} />
        </Route>
      </Switch>
    </div>
   
  );
}

export default App;
