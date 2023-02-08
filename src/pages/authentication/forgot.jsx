import React from 'react'
import img1 from "../../assets/srmlogo.png"
import style from "../../components/reusable.modules.css"

function forgot() {
    return (
        <div className='flex justify-center mt-4'>
            <div>
                <div class='flex justify-center' >
                    <img src={img1} alt="SRM pa"/>
                </div>
                <div className='text-center mt-4' >
                    Hostel Management
                </div>
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" action="/#" >
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Please enter your email address</label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email Address"/>
                    </div>
                    <div class='flex justify-center' >
                        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            <button class="" className='bt1' type="button"> Send Reset Link
                            </button>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default forgot