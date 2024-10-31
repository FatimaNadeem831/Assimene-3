import Link from 'next/link';
import React from 'react';
import { FaCloudDownloadAlt } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className="bg-purple-200 z-50 sticky top-0">
      <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row 
      items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 
        md:mb-0">
      <span className="ml-3 text-xl text-purple-700">FATIMA NADEEM </span>
      </a>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center 
      text-base justify-center">
        <Link href = {"/"} className="mr-5 hover:text-purple-600">Home</Link>
        <Link href = {"#about"} className="mr-5 hover:text-purple-600">About</Link>
        <Link href = {"#skills"} className="mr-5 hover:text-purple-600">Skills</Link>
        <Link href = {"#project"} className="mr-5 hover:text-purple-600">Projects</Link>
        <Link href = {"#Contact"} className="mr-5 hover:text-purple-600">Contacts</Link>

      </nav>
    </div>
  </header>
  </div>
  )
}

export default Navbar
