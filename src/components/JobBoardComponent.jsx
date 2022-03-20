import React from 'react';

function JobBoardComponent({ job, handleTagClick }) {
    const programLanguages = job.languages;
    const programTools = job.tools;


  return (
    <div className={`flex flex-col bg-white shadow-md my-16 mx-10 p-4 rounded ${job.featured && `border-l-8 border-teal-500 border-solid`} md:flex-row md:m-4`}>
        <div>
            <img className='-mt-16 h-20 mb-4 w-20 md:w-32 md:h-32 md:my-0' src={job.logo} alt={job.company} />
        </div>
        <div className='flex flex-col justify-between ml-4'>
            <h3 className='font-bold text-teal-500'>
                {job.company}
                {job.new && (<span className='text-teal-100 bg-teal-500 font-bold m-2 p-2 uppercase text-sm rounded-full'>New</span>)}
                {job.featured && (<span className='text-teal-100 bg-gray-800 font-bold m-2 p-2 uppercase text-sm rounded-full'>Featured</span>)}
                </h3>
            <h2 className='font-bold text-xl my-2'>{job.position}</h2>
            <p className='text-gray-700'>
                {job.postedAt} · {job.contract} · {job.location}
            </p>
        </div>
        <div className='flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-500 border-solid md:ml-auto md:border-0 md:pt-0 md:mt-0'>
            {programLanguages ? programLanguages.map((programLanguage) => <span onClick={() =>handleTagClick(programLanguage)} className='cursor-pointer text-teal-500 bg-teal-100 font-bold mr-4 p-2 rounded md:mb-0'>{programLanguage}</span>) : ''}
            {programTools ? programTools.map((programTool) => <span onClick={() =>handleTagClick(programTool)} className='cursor-pointer text-teal-500 bg-teal-100 font-bold mr-4 p-2 rounded md:mb-0'>{programTool}</span>) : ''}
        </div>  
    </div>
  )
}

export default JobBoardComponent;