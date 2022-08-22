
import React, { useState } from "react";

export default function ArtistCard() {
  
  return (
    <div className="wrapper">
      <Card
        img="https://media.istockphoto.com/photos/female-artist-painting-on-wall-picture-id1352968008?b=1&k=20&m=1352968008&s=170667a&w=0&h=d0vuqHcPNlqLd58ycHK4RFHuvDBP5v9r-IJnsWO8GdE="
        title="Trivio Wall Painting"
        artist="Eleano"
        description="A painting to turn your gloomy days into a happy one!"
      />

      <Card
        img="https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFpbnRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        title="Women Painting"
        artist="stephen"
        description="What you see is what you feel"
      />

      <Card
        img="https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBhaW50aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        title="A Small Village Girl with a butterfly"
        artist="kamal"
        description="Lost Innocent Childhood"
      />
      <Card
        img="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        title="A Guitar Song"
        artist="shekhar"
        description="A love song for your heart"
      />
      <Card
        img="https://www.ilyricshub.com/wp-content/uploads/2022/04/kesariya-brahmastra-300x169.jpg"
        title="Kesariya"
        artist="Arijit Singh"
        description="Latest 2022 romantic hit song by Arijit Singh"
      />
      <Card
        img="https://images.unsplash.com/photo-1487180144351-b8472da7d491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        title="Podcast"
        artist="Podcaster"
        description="Let your mind breathe in the knowledge"
      />      
    </div>
  );
}

function Card(props) {
  const [stake,setStake]= useState(false);
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} class="card__image" />
        <h2 className="card__title">{props.title}</h2>
        <h4 className="card__title">{props.artist}</h4>
        <p className="card__description">{props.description}</p>
      </div>
      <button className="card__btn" onClick={()=> setStake(true)}>Stake your tokens {stake}</button>
    </div>
  );
}

