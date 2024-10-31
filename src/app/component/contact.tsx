import React from 'react'

const Contact = () => {
  return (
    <div id="Contact">
     <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
     <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-purple-700">
           Contact Us
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Please Contact 
        </p>
     </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-purple-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-purple-100 bg-opacity-50 
              rounded border border-purple-500 focus:border-purple-500 
              focus:bg-white focus:ring-2 focus:ring-purple-200 text-base 
              outline-none text-gray-700 py-1 px-3 leading-8 
              transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-purple-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-purple-100 bg-opacity-50 
              rounded border border-purple-500 focus:border-purple-500 
              focus:bg-white focus:ring-2 focus:ring-purple-200 
              text-base outline-none text-gray-700 py-1 px-3 
              leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-purple-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-purple-100 bg-opacity-50 
              rounded border border-purple-500 focus:border-purple-500 
              focus:bg-white focus:ring-2 focus:ring-purple-200 h-32 
              text-base outline-none text-gray-700 py-1 px-3 
              resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-purple-500 border-0 
          py-2 px-8 focus:outline-none hover:bg-purple-300 rounded text-lg">
            Button
          </button>
        </div>
       
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Contact;
