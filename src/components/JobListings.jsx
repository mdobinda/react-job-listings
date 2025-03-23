import React from 'react'
import { useState, useEffect } from 'react';
import JobListing from './JobListing';
import { FaSpinner } from 'react-icons/fa';

const JobListings = ( {isHome = false }) => {

  // this is an empty array. we'll make request when the component loads through useEffect - then fill this state from the response of the api 
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true); // once it fetches the data we can set this to false 

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

    console.log(jobs); 
  return (
    <section className="bg-blue-50 px-4 py-10">
    <div className="container-xl lg:container m-auto">
      <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
        { isHome ? 'Recent Jobs' : 'Browse Jobs'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        { loading ? (<FaSpinner/>) : (
          <>
           {jobs.map((job) => (
          
          <JobListing key={job.id} job={job} />
          
      ))}
          </>
        )}
       
       
      </div>
    </div>
  </section>
  )
}

export default JobListings