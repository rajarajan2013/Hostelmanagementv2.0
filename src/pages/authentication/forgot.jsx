import React from 'react'
import logo from "../../assets/srmlogo.png"

function forgot() {
    return (
        <div className='flex justify-center mt-4'>
        <div>
            <div className='flex justify-center' >
                <img src={logo} alt="SRM pa"/>
            </div>
            <div className='text-center mt-4' >
                Hostel Management
            </div>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" action="/#" >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">Please enter your email address</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email Address"/>
                </div>
                <div className='flex justify-center' >
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"> Send Reset Link
                        </button>
                    </a>
                </div>
            </form>
        </div>
    </div>
    )
}

export default forgot