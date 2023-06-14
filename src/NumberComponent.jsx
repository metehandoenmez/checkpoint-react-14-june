import React, {useState, useEffect} from "react";
import DisplayNumber from "./DisplayNumber"
import "./App.css"

const API_URL = "https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new"

export default function NumberComponent() {

     const [number, setNumber] = useState(0)

useEffect(() => {
    fetch(API_URL)
    .then(response => {
        return response.json() } )
        .then(data => {
            setNumber(data) })
        }, [])

const handleIncrement = () => {
    setNumber(number => number + 1)
}


const handleSave = () => {
    localStorage.setItem("savedNumber",JSON.stringify(number))
}

const handleLoad = () => {
    setNumber(JSON.parse(localStorage.getItem("savedNumber")))
}

    return (
        <div className={"display"}>
            <DisplayNumber number={number} />
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleSave}>Save to LocalStorage</button>
            <button onClick={handleLoad}>Load from LocalStorage</button> <br />
        </div>
    )
}