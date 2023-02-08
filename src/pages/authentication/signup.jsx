import React from 'react'
import img3 from "../../assets/srmlogo.png"
import style from "../../components/reusable.modules.css"

function signup() {
    return (
        <div className='flex justify-center mt-4'>
        <div>
            <div class='flex justify-center' >
                <img src={img3} alt="SRM pa"/>
            </div>
            <div className='text-center mt-4' >
                Create a User
            </div>
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" action="/#" >
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Email Adress</label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email Address"/>
                </div>
                <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
                <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
                <p class="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div class="grid grid-rows-2 mb-2">
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                    <div class='inline-block'>
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose role</option>
                            <option value="mal">Male</option>
                            <option value="fem">Female</option>
                            <option value="sup">SuperAdmin</option>
                        </select>
                    </div>
                </div>
                <div class=''>
                    <div>
                        <button class="" className='bt1' type="button">
                            Sign In  
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    )
}

export default signup
