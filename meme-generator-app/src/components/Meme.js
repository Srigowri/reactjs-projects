import React, { useEffect } from "react";
import { useState } from "react";
export default function Meme(){
    const  [meme, setMeme] = useState({
        firstPart:"",
        secondPart:"",
    randomImage: "https://i.imgflip.com/30b1gx.jpg"
    });
    const [allMemeImages, setAllMemeImages] = useState([]);
    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes").then(resp=>resp.json()).then(data=>setAllMemeImages(data.data.memes));
    },[])
    
    console.log(allMemeImages)
    function getMemeImage(event){
        event.preventDefault()
        
        const index = Math.floor(Math.random() * allMemeImages.length);    
        const url = allMemeImages[index].url;
        setMeme(oldMeme=>{
            return {
                ...Meme,
                randomImage: url
            }    
            
        });
    }
    
    function handleChange(event){
        const {name, value} = event.target;
        setMeme(oldFormData=>{
            return {
                ...oldFormData,
                [name]:value
            }
        })
    }
    return(
        <main>
            <form className="form" onSubmit={getMemeImage}>
                <input 
                    className="form--inputs" 
                    type="text" 
                    placeholder="First part of meme"
                    name="firstPart"
                    value = {meme.firstPart}
                    onChange={handleChange}
                    />
                <input 
                    className="form--inputs" 
                    type="text" 
                    placeholder="Second part of meme"
                    name="secondPart"
                    value = {meme.secondPart}
                    onChange={handleChange}
                    />
                <button className="form--button">Get a new meme image  🖼</button>
                
            </form>
            <div className="meme--section">
                <p className="firstPart">{meme.firstPart}</p>
                <img className="meme--image" src={meme.randomImage} />                        
                <p className="secondPart">{meme.secondPart}</p>
            </div>             
        </main>

    )
}