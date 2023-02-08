import React from 'react'
import Nav from "../../components/navbar"

const para =["S.No","Student Name","Registration Number","Branch","Room No.","Booking Type","Total Amount"]


function Bookingrep() {
    return (
        <div>
            <Nav/> 
                <div class="relative overflow-x-auto">
                    <table className='t1'>
                        <thead class="">
                            <tr class="t1" >
                                {para.map((value,index)=> (
                                    <th scope="col" class="px-6 py-3">
                                     {value}
                                </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody class="" >
                            <tr class="t1">
                                <th scope="row" class="">
                                    1.
                                </th>
                                <td class="px-6 py-4">
                                    Venkat
                                </td>
                                <td class="px-6 py-4">
                                    RA2011003010165
                                </td>
                                <td class="px-6 py-4">
                                    B.tech
                                </td>
                                <td class="px-6 py-4">
                                    101
                                </td>
                                <td class="px-6 py-4">
                                    Online
                                </td>
                                <td class="px-6 py-4">
                                    92000.00
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>

        </div>
    )
}

export default Bookingrep
