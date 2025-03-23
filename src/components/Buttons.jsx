import React from 'react'
import "../../src/index.css"
import { useState } from "react"


const Buttons = () => {
    const [tab, setTab] = useState("Home");

   // const useState()

  return (
    <>
    <div className='layout-column justify-center items-center align-center'>
        <div className='layout-row justift-content-around alirn-items-center mt-20 links'> 
            <a className='button' onClick={() => setTab("Home")}> Home </a>
            <a className='button2' onClick={() => setTab("News")}> News </a>
            <a className='button3' onClick={() => setTab("About")}> About</a>

        </div>

        <div>
            <section>
                <span>{ tab.toUpperCase() } PAGE</span>
            </section>
        </div>

    </div>



    </>
   

    
  )
}

export default Buttons