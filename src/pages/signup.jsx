import React from 'react'
import img3 from "../assets/srm logo.png"

function signup() {
    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-5 col-md-5 d-none d-md-block image-container"></div>

                <div class="col-lg-7 col-md-7 form-container">
                <div
                    class="col-lg-8 col-md-12 col-sm-9 col-xs-12 form-box text-center"
                >
                    <div class="logo mb-3">
                    <img src={img3} width="150px" />
                    </div>
                    <div class="heading mb-4">
                    <h4>Hostel Management</h4>
                    </div>
                    <form action="/login">
                    <div class="form-input mb-2">
                        <span><i class="fa fa-envelope"></i></span>
                        <input type="email" placeholder="Email Address" name="email"  required />
                        <div class="email error"></div>
                    </div>
                    <div class="form-input mb-2">
                        <span><i class="fa fa-lock"></i></span>
                        <input type="password" placeholder="Password" name="password" required />
                        <div class="password error"></div>
                    </div>
                    <div class="form-input">
                        <select name="usertypes" id="usertypes">
                        <option disabled selected value>-- Select an option -- </option>
                        <option value="Super_admin">Super_admin</option>
                        <option value="Male_admin">Male_admin</option>
                        <option value="Female_admin">Female_admin</option>
                        </select>
                        <div class="usertype error"></div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-6 d-flex">
                        <div class="custom-control custom-checkbox">
                            <input
                            type="checkbox"
                            class="custom-control-input"
                            id="cb1"
                            />
                            <label class="custom-control-label text-white" for="cb1"
                            >Remember me</label
                            >
                        </div>
                        </div>
                    </div>
                    <div class="text-left mb-3">
                        <button type="submit" class="btn">Login</button>
                    </div>
                    <div>
                        Don't remember your password?
                        <a href="forgot.html" class="register-link">Reset here</a>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
    )
}

export default signup
