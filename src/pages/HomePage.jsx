import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'
import Buttons from '../components/Buttons'
import Slides from './Slides'
import List from './List'



const HomePage = () => {
  return (
    <>


    <Buttons/>
    
    {/* <Hero />
    <HomeCards />
    <JobListings isHome = {true}/>
    <ViewAllJobs /> */}
    <Slides/> 

    <List/> 
    </>
  )
}

export default HomePage