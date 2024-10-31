import Link from 'next/link'
import React from 'react'

const Project = () => {
  return (
    <div id="project">
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font 
      mb-4 text-purple-700">
       My Projects
      </h1>
      
    </div>
    <div className="flex flex-wrap -m-4">
      {/* project */}
      <div className="lg:w-1/2 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
        <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="https://dummyimage.com/600x360"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 
          border-purple-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font 
            font-medium text-purple-500 mb-1">
            Catering Project
            </h2>
            <h1 className="title-font text-lg font-medium text-purple-400 mb-3">
              Catering 
            </h1>
            <p className="leading-relaxed ">
              This is the Project which I we create for those who owns
              a catering business.
            </p>
            
          </div>
        </div>
      </div>
       {/* project */}
      <div className="lg:w-1/2 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
        <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="https://dummyimage.com/600x360"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 
          border-purple-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font 
            font-medium text-purple-500 mb-1"> SMS Project
            </h2>
            <h1 className="title-font text-lg font-medium text-purple-400 mb-3">
              SMS
            </h1>
            <p className="leading-relaxed line-clamp-2">
              This is the Project which  I we create for those who owns
              a catering business. 
            </p>
            
          </div>
        </div>
      </div>

      
      
    </div>
  </div>
</section>

    </div>
  )
}

export default Project
