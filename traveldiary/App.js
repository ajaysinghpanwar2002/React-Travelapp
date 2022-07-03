import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./components/Navbar.js"
import Page from "./components/Page.js"
import data from "./data.js"

function App(){
     const cards = data.map(item => {
        return (
            <Page 
            item={item}
            />
        )
    })  

    return(
        <div>
        <Navbar/>
        {cards}

        </div>
    )
}

export default App
