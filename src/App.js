import React, { useState, useEffect } from 'react';
import JobBoardComponent from './components/JobBoardComponent';
import data from './assest/data.json';

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(()=>setJobs(data), []);

  const filterFunc = ({tools, languages}) =>{
    if(filters.length === 0){
      return true;
    }
    const tags = [];
    if(tools){
      tags.push(...tools)
    }
    if(languages){
      tags.push(...languages)
    }
    return tags.some(tag => filters.includes(tag));
  };
  const handleTagClick = (tag) => {
    if(filters.includes(tag)) return;
    setFilters([...filters, tag]);
  }

  const handleFilterClick = (passedFilter) =>{
    setFilters(filters.filter(f => f !== passedFilter));
  }

  const clearFilters = () =>{
    setFilters([]);
  }
  const filterdJobs = jobs.filter(filterFunc);

  return (
    <div className="App">
      <header className='bg-teal-500 mb-12'>
        <img className='w-full' src='/images/bg-header-desktop.svg' alt='bg-image' />
      </header>
      <div className='container m-auto'>
        {filters.length > 0 &&(
          <div className='flex bg-white shadow-md -my-20 mb-16 mx-10 p-6 rounded z-10 relative'>
            {filters.map((filter) =>(
              <span onClick={() => handleFilterClick(filter)} className='text-teal-500 bg-teal-100 cursor-pointer font-bold mr-4 mb-4 p-2 rounded md:mb-0'>{filter} <span className='text-gray-600 font-bold'>✖</span></span>
            ))}
            <button onClick={clearFilters} className='font-bold text-gray-700 ml-auto'> Clear</button>
          </div>
        )}
        {jobs.length === 0 ? (
            <p>Jobs are fetching...</p>
          ) : (
            filterdJobs.map((job) => <JobBoardComponent job={job} key={job.id} handleTagClick={handleTagClick} />)
          )}
      </div>
    </div>
  );
}

export default App;


// ToDo list  
// 1. design & json +
// 2. create job board component +
// 3. Get data from json +
// 4. pass down th data to job board component +
// 5. style it + mobile resolution +
// 6. Filter component
// 7. Filter data
