// import React from 'react'
import React, { useState } from "react";
import img from "../../assets/srmlogo.png"
import axios from "axios";

const login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          console.log('submit');
        const response = await axios.post('http://13.232.120.2:3000/login', {
          email,
          password,
        });
        console.log("");
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    return(
        <div className='flex justify-center mt-4'>
            <div>
                <div class='flex justify-center' >
                    <img src={img} alt="SRM pa"/>
                </div>
                <div className='text-center mt-4' >
                    Login
                </div>
                
                <form onSubmit={handleSubmit} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" action="/#" >
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Email Adress</label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address"/>
                    </div>
                    <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
                    <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="******************"/>
                    <p class="text-red-500 text-xs italic">Please choose a password.</p>
                    </div>
                    <div class="flex items-center justify-between">
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                    <div>
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose your role</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                            <option value="3">SuperAdmin</option>
                        </select>
                    </div>
                    </div>
                    <div class='flex justify-evenly'>
                        <div>
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4" type="submit" id="submit">
                                Sign In
                            </button>
                        </div>
                        <div>
                            <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                Forgot Password?
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default login;



