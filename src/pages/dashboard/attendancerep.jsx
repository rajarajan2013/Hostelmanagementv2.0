import React from 'react'
import Nav from '../../components/navbar'
import {AiOutlineDown} from "react-icons/ai"

const opt=["Hostel Name","Floor Number","From","To","Month","Year","Absentees"]

function attendancerep() {
  return (
    <div>
        <Nav/>
            <div class="relative">
                <div>
                    <select class="block appearance-none  bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        {opt.map((value,index)=>(
                            <option>{value}</option>
                        ))}
                    </select>
                </div>
            </div>
        <div>
            <button type='submit' class="btn btn-blue" >
                            Submit
            </button>
        </div>
    </div>
  )
}

export default attendancerep