import React from 'react'
import Navbar from "../../components/navbar"
import logo from "../../assets/srmlogo.png"
import Searchbar from '../../components/Searchbar'



function Home() {
    return (
        <><Navbar /><div>
            <div
                id="carouselDarkVariant"
                class="carousel slide carousel-fade carousel-dark relative"
                data-bs-ride="carousel"
            >

                <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="1"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="2"
                        aria-label="Slide 1"
                    ></button>
                </div>

                {/* <!-- Inner --> */}
                <div class="carousel-inner relative w-full overflow-hidden">
                    {/* <!-- Single item --> */}
                    <div class="carousel-item active relative float-none w-full object-center">
                            <div>
                            <img class=" object-center ml-32 mt-8 " src={logo} />
                            </div>
                            <div class="">
                                <Searchbar Placeholder="Reg No"/>
                            </div>
                        <div class="carousel-caption hidden md:block absolute text-center">
                            <h5 class="text-xl px-5 py-2.5 mb-2 mt-30">Registration Number</h5>
                            <p class="px-5 pb-2.5 mb-2 ">Please search using reg no</p>
                        </div>
                    </div>

                    {/* <!-- Single item --> */}
                    <div class="carousel-item relative float-left w-full">
                        {/* <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp"
                            class="block w-full"
                            alt="Mountaintop" /> */}
                        <div class="carousel-caption hidden md:block absolute text-center">
                            <h5 class="text-xl">Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>

                    {/* <!-- Single item --> */}
                    <div class="carousel-item relative float-left w-full">
                        {/* <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp"
                            class="block w-full"
                            alt="Woman Reading a Book" /> */}
                        <div class="carousel-caption hidden md:block absolute text-center">
                            <h5 class="text-xl">Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Inner -->

    <!-- Controls --> */}
                <button
                    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselDarkVariant"
                    data-bs-slide="prev"
                >
                    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselDarkVariant"
                    data-bs-slide="next"
                >
                    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div></>
    )
}

export default Home
