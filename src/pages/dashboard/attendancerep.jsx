import React, {useState} from "react"
import Nav from '../../components/navbar'
import "tw-elements"
import Searchbar from "../../components/Searchbar"
// import Style from "../../components/reusable.modules.css"
//import {AiOutlineDown} from "react-icons/ai"

const options = ["Paari","Mullai"]
const floor=["Ground",1,2,3,4,5,6,7,8,9]
const par=["Name","Registration_ID","Date","Status"]
const dat=[{
    Name: "SRM1",
    Registration_ID : "RA2111026010373",
    Dat: Date("19-03-2022"),
    Status: "Present",
    Hostel: "Paari",
},
{
    Name: "SRM2",
    Registration_ID : "RA2111026010374",
    Dat: Date("09-03-2022"),
    Status: "Absent",
    Hostel: "Mullai",
},
]
const para=["Name","Registration_ID","Dat","Status","Hostel"]

function Attendancerep() {
    const [value,index]= useState("Hostel Name")
    const [filtered,i]= useState(dat)

const submit = () =>{
    for(let j in dat){
        if(value==dat[j].Hostel){
            filtered(dat[j])
        }
        }
    }

    
  return (
    <div>
        <Nav/>
        <div>
            <form >
                <div class="ml-16 grid grid-cols-5 mt-4" >
                    <select class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-2 py-2.5 text-center mr-4 mb-2"value={value} onChange={(e) => index(e.target.value)}>
                    {options.map((value) => (
                        <option class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-2 py-2.5 text-center mr-4 mb-2" value={value} key={value}>
                            {value}
                        </option>
                    ))}
                    </select>
                    <select class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-4 mb-2" value={value} onChange={(e) => index(e.target.value)}>
                    {floor.map((value) => (
                        <option class="bg-white" value={value} key={value}>
                            {value}
                        </option>
                    ))}
                    </select>
                    <span class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-4 mb-2">
                        <label class="mr-1" >From - </label>
                        <input type="date" class="bg-blue-500 rounded-lg" />
                    </span>
                    <span class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-4 mb-2">
                        <label class="mr-1" >To - </label>
                        <input type="date" class="bg-blue-500 rounded-lg" />
                    </span>
                    <span class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-4 mb-2">
                        <input type="date" class="bg-blue-500 rounded-lg" />
                    </span>
                    <span class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-4 mb-2">
                        <button type="button"  className="bt1" onClick={submit}>
                                Submit
                        </button>
                    </span>
                </div>
                <div class="grid grid-cols-2 mt-4 ml-16" >
                <Searchbar Placeholder="Any field" position="justify-start"/>
                    <div class="form-check form-switch max-w-fit border border-blue-400 rounded-lg mt-1 mb-0.5">
                        <input class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain  focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        <label class="form-check-label inline-block text-gray-800 mr-1" for="flexSwitchCheckDefault">Present</label>
                    </div>
                </div>
            </form>
        </div>
        <table class="mt-4 w-full text-sm text-left text-gray-500 dark:text-gray-400 border-solid border-2 border-black">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-solid border-2 border-black">
                            <tr class="border-solid border-2 border-black" >
                                {para.map((value,index)=> (
                                    <th scope="col" class="px-6 py-3">
                                     {value}
                                </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody class="" >
                                {filtered.map(({Name,Registration_ID,Dat,Status,Hostel})=> 
                                
                                (
                                     <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                                        <td class="px-6 py-4">
                                            {Name}
                                        </td>
                                        <td class="px-6 py-4">
                                            {Registration_ID}
                                        </td>
                                        <td class="px-6 py-4">
                                            {Dat}
                                        </td>
                                        <td class="px-6 py-4">
                                            {Status}
                                        </td>
                                        <td class="px-6 py-4">
                                            {Hostel}
                                        </td>
                                    </tr>
                                ))}
                           
                        </tbody>
                    </table>
    </div>
  )
}

export default Attendancerep