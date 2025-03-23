import React from 'react'
import { useState } from 'react'

const Slideshow = ( {slides} ) => {
    const [index, setIndex] = useState(0); 
    

    const next = () => {
        setIndex(i => i + 1); 
    }

    const prev = () => {
        if(index == 0) {
            setIndex(i => 0); 
        }
        setIndex(i => i - 1); 
    }

    const restart = () => {
        setIndex(i => 0); 
    }

  return (
    <>
    <div className='text-center justify-center items-center align-center'>
     <button disabled = { index == 0} onClick={() => restart()} className='button'>
        Restart 
     </button>
     <button disabled = { index == 0 } onClick = { () => prev()} className='button2'>
        Prev 
     </button>
     <button disabled = { index == slides.length - 1 }onClick = { () => next()}className='button3'>
        Next
     </button>
    </div>

    <div className="card text-center">
        <h1> { slides[index].title} </h1>
        <p>  { slides[index].text }</p>
    </div>
    
    </>
  )
}

export default Slideshow