import { Input } from 'postcss'
import React from 'react'
import './Masterrep.css' 
import Nav from "../../components/navbar"
import Headerreports from '../../components/Headerreports'
import Footerreports from '../../components/Footerreports'
export default function hostel() {
    return (
        <>

        <Nav/>
        <Headerreports/>
        <br/>
        <br/>
        
        <table class="table table-bordered">
      <thead class="thead-dark">
        <tr>
          <th>S.no</th>
          <th>Student ID</th>
          <th>Student Name</th>
          <th>Register No</th>
          <th>Gender</th>
          <th>Degree</th>
          <th>Semester</th>
          <th>Current Year</th>
          <th>Branch</th>
          <th>Booking Date</th>
          <th>Hostel Name</th>
          <th>Room Number</th>
          <th>Room Type</th>
          <th>Floor Name</th>
          <th>Contact No</th>
          <th>Email</th>
          <th>Father Name</th>
          <th>Father Number</th>
          <th>Father Email</th>
          <th>Address</th>
          <th>Pincode</th>
          <th>Office Name</th>
          <th>Booking Type</th>
          <th>Total Amount</th>
          <th>State Name</th>
          <th>Religion Name</th>
          <th>Community</th>
          <th>Caste</th>
          <th>Differently Abled</th>
          <th>Father Income</th>
          <th>Mother Income</th>
          <th>Reporting Date</th>
          <th>Vacating Date</th>
          <th>AC Remote</th>
          <th>Key Number</th>
          <th>Other-Information</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">2</th>
        </tr>
      </tbody>
    </table>
        <Footerreports/>

        
        </>
    )
}
