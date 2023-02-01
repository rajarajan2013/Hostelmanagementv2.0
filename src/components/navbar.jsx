import React from 'react'
import navimg from "../assets/srmlogo.png"

const elem=["Home","Attendance","BookingRep Details","Rooms","Report"]

function navbar() {
  return (
          <nav class="bg-gray-200 border-white px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 mb-4 border border-yellow-300">
        <div class="container flex flex-wrap items-center justify-between mx-auto bg-gray-200">
              <div class="flex items-center" >
                <img src={navimg} class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                <p class="block text-lg" >Hostel Portal</p>
              </div>
          <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-200 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-grey-200 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {elem.map((value,index)=> (
                <li>
                <a href="#" class="block text-md" aria-current="page">{value}</a>
              </li>
              ))}
              
            </ul>
          </div>
        </div>
      </nav>

  )
}

export default navbar