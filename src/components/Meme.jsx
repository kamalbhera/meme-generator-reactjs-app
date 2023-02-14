import React, { useEffect, useState } from "react";
import {saveAs} from "file-saver";
export default function Meme() {
  const [meme, setMeme] = useState({ topText: "", bottomText: "", randomImage: "http://i.imgflip.com/1bij.jpg" });
  const [allMemeImage, setAllMemeImage] = useState([]);

  async function getMemes() {
    const res = await fetch("https://api.imgflip.com/get_memes");
    const data = await res.json();
    setAllMemeImage(data);
  }

  //! Fetching api  using useEffect
  useEffect(() => {
    getMemes();
  }, []);
 
  function getImage() {
    const absData = allMemeImage.data.memes;
    const randomIndex = Math.floor(Math.random() * absData.length);
    const url = absData[randomIndex].url;
    setMeme({...meme, randomImage: url})
  }
  // handling  data
  function handleChange(e) {
    const { name, value } = e.target;
    setMeme({...meme, [name]: value})
  }
  // function downloadImage(dataUrl) {
  //   saveAs(meme.randomImage, "Test")
  // }
  
  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form--input"
          placeholder="Top Text"
          value={meme.topText}
          onChange={handleChange}
          name="topText"
        />
        <input
          type="text"
          className="form--input"
          placeholder="Bottom Text"
          value={meme.bottomText}
          onChange={handleChange}
          name="bottomText"
        />
        {/* <button className="download-btn" onClick={downloadImage}>
          Download Image
        </button> */}
        <button className="form--button" onClick={getImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" alt="memes" />
        <h2 className="meme--text top ">{meme.topText}</h2>
        <h2 className="meme--text bottom ">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
