import React from "react";

export default function Banner(props) {
  return (
    <div className="banner-container">
      <img src={props.bannerLink} alt=''></img>
   
        <h2 className="banner-text">Anime List</h2>
 
    </div>
  );
}
