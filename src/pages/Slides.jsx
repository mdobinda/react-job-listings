import React from 'react'
import Slideshow from '../components/Slideshow'


const SLIDES = [
    {
        title: 'Todays workout plan',
        text: 'We are going to do a workout together - 3 excercises',
    },
    {
        title: 'First, 10 pushups',
        text: 'Do 10 reps. Do them slowly.',
    }, 
    {
        title: 'Second, 20 pullups',
        text: 'Do 20 reps. Do them slowly.',
    },
    {
        title: 'Finally, 30 jumping jacks',
        text: 'Remember to keep your feet on the ground.',
    },
    {
        title: 'Great job!',
        text: 'You did it!',
   }
]

const Slides = () => {
  return (
    <Slideshow slides={SLIDES} />
  )
}
export default Slides