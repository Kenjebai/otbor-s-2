import React, { useState } from "react";
import Push from "./Push";

export default function Pokemon(){
    const[list, setList] = useState([])
    const addList = async() => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?_limit=6")
        const data = await response.json()
        setList(data.results)
        console.log(data.results);
    }
    return(
        <div>
            <h2>Pokemon</h2>
            <Push />
            <Push />
            <button onClick={addList}>add</button>
                <div className="post">
                    {list.map((el) => (
                        <div className="list">
                            <img src={el.url} alt="photo"/>
                            <span>{el.name}</span>
                        </div>
                    ))}
                </div>
        </div>
    )
}

