import React from 'react'
import Nav from '../../components/navbar'
import "tw-elements"
//import {AiOutlineDown} from "react-icons/ai"

const opt=["Hostel Name","Floor Number","From","To","Current Month","Current Year","Absentees"]
//const [index,increment]=useState(0)


function attendancerep() {
  return (
    <div>
        <Nav/>
        <div class="ml-4 grid grid-cols-7 gap-4 justify-start">
            <div>
                <div class="dropdown relative">
                    <button class="dropdown-toggle px-6 py-2.5 bg-blue-600 text-white font-medium      text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg active:text-white transition duration-150 ease-in-out flex   items-center whitespace-nowrap" type="button" id="dropdownMenuButton1"     data-bs-toggle="dropdown" aria-expanded="false">Hostel Name
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                        </svg>
                    </button>
                    <ul class="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none" aria-labelledby="dropdownMenuButton1">
                        <li>
                            <a class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#"        >Action</a>
                        </li> 
                    </ul>
                </div>
            </div>
            <div>
                <div class="dropdown relative">
                    <button class="dropdown-toggle px-6 py-2.5 bg-blue-600 text-white font-medium      text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg active:text-white transition duration-150 ease-in-out flex   items-center whitespace-nowrap" type="button" id="dropdownMenuButton1"     data-bs-toggle="dropdown" aria-expanded="false">Floor Number
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                        </svg>
                    </button>
                    <ul class="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none" aria-labelledby="dropdownMenuButton1">
                        <li>
                            <a class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#"        >Action</a>
                        </li> 
                    </ul>
                </div>
            </div>
            <div>
                <div class="dropdown relative">
                    <button class="dropdown-toggle px-6 py-2.5 bg-blue-600 text-white font-medium      text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg active:text-white transition duration-150 ease-in-out flex   items-center whitespace-nowrap" type="button" id="dropdownMenuButton1"     data-bs-toggle="dropdown" aria-expanded="false">From (date)
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                        </svg>
                    </button>
                    <ul class="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none" aria-labelledby="dropdownMenuButton1">
                        <li>
                            <a class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#"        >Action</a>
                        </li> 
                    </ul>
                </div>
            </div>
            <div>
                <div class="dropdown relative">
                    <button class="dropdown-toggle px-6 py-2.5 bg-blue-600 text-white font-medium      text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg active:text-white transition duration-150 ease-in-out flex   items-center whitespace-nowrap" type="button" id="dropdownMenuButton1"     data-bs-toggle="dropdown" aria-expanded="false">To (date)
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                        </svg>
                    </button>
                    <ul class="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none" aria-labelledby="dropdownMenuButton1">
                        <li>
                            <a class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#"        >Action</a>
                        </li> 
                    </ul>
                </div>
            </div>
            <div>
                <div class="dropdown relative">
                    <button class="dropdown-toggle px-6 py-2.5 bg-blue-600 text-white font-medium      text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg active:text-white transition duration-150 ease-in-out flex   items-center whitespace-nowrap" type="button" id="dropdownMenuButton1"     data-bs-toggle="dropdown" aria-expanded="false">Current Month
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                        </svg>
                    </button>
                    <ul class="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none" aria-labelledby="dropdownMenuButton1">
                        <li>
                            <a class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#"        >Action</a>
                        </li> 
                    </ul>
                </div>
            </div>
            <div>
                <div class="dropdown relative">
                    <button class="dropdown-toggle px-6 py-2.5 bg-blue-600 text-white font-medium      text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg active:text-white transition duration-150 ease-in-out flex   items-center whitespace-nowrap" type="button" id="dropdownMenuButton1"     data-bs-toggle="dropdown" aria-expanded="false">Current Year
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                        </svg>
                    </button>
                    <ul class="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none" aria-labelledby="dropdownMenuButton1">
                        <li>
                            <a class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#"        >Action</a>
                        </li> 
                    </ul>
                </div>
            </div>
            <div class="flex justify-center">
                 <div class="form-check form-switch">
                    <input class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label class="form-check-label inline-block text-gray-800" for="flexSwitchCheckDefault">Present</label>
                </div>
             </div>
             <div class="flex space-x-2 justify-center">
                <button type="button" class="inline-block px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-300 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-500 active:shadow-lg transition duration-150 ease-in-out">Submit</button>
            </div>
        </div>
    </div>
  )
}

export default attendancerep