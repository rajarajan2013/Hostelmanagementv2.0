import React from 'react'
import img1 from "../assets/srm logo.png"

export default function forgot() {
    return (
            <div class="flex container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-5 col-md-5 d-none d-md-block image-container"></div>

                    <div class="col-lg-7 col-md-7 form-container">
                        <div class="col-lg-8 col-md-12 col-sm-9 col-xs-12 form-box">
                            <div class="text-center logo mb-3">
                                <img src={img1} width="150px" />
                    </div>
                    <div class="reset-form d-block">
                    <form class="reset-password-form">
                        <h4 class="mb-3">Reset your password</h4>
                        <p class="mb-3 text-grey">Please enter your email address</p>
                        <div class="form-input">
                        <span><i class="fa fa-envelope"></i></span>
                        <input type="email" placeholder="Email Address" required />
                        </div>
                        <div class="mb-3">
                        <button class="btn" type="submit">Send Reset link</button>
                        </div>
                    </form>
                    </div>
                    <div class="reset-confirmation d-none">
                    <div class="mb-4">
                        <h4 class="mb-3">Link was sent</h4>
                        <h6 class="text-white">Please check your inbox</h6>
                    </div>
                    <div>
                        <a href="login.html">
                        <button type="submit" class="btn">Login Now</button>
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
