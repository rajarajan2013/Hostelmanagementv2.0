import React from 'react'
import Nav from "../../components/navbar"
import t from "../../assets/srmlogo.png"
import "tw-elements"
import {BsSearch} from "react-icons/bs" 
import { useState } from 'react';

//I have an idea for functional component so going to try it later

const sample=[
    {
        Name:"Ramana",
        ID:"BT7274",
        Registration:"RA2111026010373",
    }
,{
    Name:"Raja",
    ID:"MOB1931",
    Registration:"RA2111026010489",
},
{
    Name:"Roy",
    ID:"FS1041",
    Registration:"RA2111026010237" 
},
]

function home() {
    const [data,search]=useState("")
    const look =()=> {

    }
   // const filter=
    return (
        <div>
            <Nav/>
            <div class="bg-yellow-300" >
                <div class="flex" >
                    <div class="mr-4 mt-4 flex flex-row">
                        <img src={t} alt="srm pa" />
                        <p class="block text-lg" >Learn.Leap.Lead</p>
                    
                    </div>
                </div>
                <div>
                    <form class="flex justify-center">
                        <div class="border border-blue-500 flex justify-center rounded-lg shadow-transparent" >
                            <input class="shadow appearance-none border border-blue-100 rounded-lg  py-2 px-3 text-gray-700 mr-4 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Name of Student"/>
                            <button>
                                <div class="m-4" >
                                    <BsSearch/>
                                </div>
                            </button>
                        </div>
                    </form>
                </div>
                <div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
                <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"   aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"   aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner relative w-full overflow-hidden">
                    <div class="carousel-item active relative float-left w-full">
                        
                        <div class="carousel-caption hidden md:block absolute text-center">
                            <h5 class="text-xl">Name of Student</h5>
                            <p>Please search by entering name of student</p>
                        </div>
                    </div>
                    <div class="carousel-item relative float-left w-full">
                        <img src={t} class="block w-full" alt="..."/>
                        <div class="carousel-caption hidden md:block absolute text-center">
                            <h5 class="text-xl">Student ID</h5>
                            <p>Please search by entering name of student</p>
                        </div>
                    </div>
                <div class="carousel-item relative float-left w-full">
                    <img src={t} class="block w-full"  alt="..."/>
                    <div class="carousel-caption hidden md:block absolute text-center">
                        <h5 class="text-xl">Registration No.</h5>
                        <p>Please search by entering name of student</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0" type="button" data-bs-target="#carouselExampleCaptions"   data-bs-slide="prev">
                <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0" type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide="next">
                <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
            </div>
        </div>
    )
}

export default home
