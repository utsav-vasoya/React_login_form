import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator'
import axios from 'axios';

const Signup = () => {
    const [signup, setSignup] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const handleClick = (e) => {
        e.preventDefault()
        const name = e.target.name
        const value = e.target.value
        setSignup({ ...signup, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(signup);
        if (signup.email && !validator.isEmail(signup.email)) {
            toast.error('Please enter valid email!', {
                position: toast.POSITION.TOP_RIGHT
            })
        } else {
            axios.post("http://localhost:4000/users/register", { name: signup.name, email: signup.email, password: signup.password, confirmPassword: signup.confirmPassword }).then((res) => {
                if (res.data.msg) {
                    toast.error(res.data.msg, {
                        position: toast.POSITION.TOP_RIGHT
                    });
                } else {
                    toast.success("You are now registered and can log in.", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    setTimeout(() => {
                        window.location = "/login";
                    }, 1000)
                }
            }).catch((err) => {
                console.log(err);
            });
            setSignup({ name: "", email: "", password: "", confirmPassword: "" })
        }
    }

    return (
        <>
            <section className="vh-100">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" >
                                <div style={{marginTop:'-50px'}} className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                                            <form className="mx-1 mx-md-4">

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" className='form-control' name="name" value={signup.name} onChange={handleClick} />
                                                        <label className="form-label">Your Name</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="email" id="email" className="form-control" name="email" value={signup.email} onChange={handleClick} />
                                                        <label className="form-label">Your Email</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password" id="password" className="form-control" name="password" value={signup.password} onChange={handleClick} />
                                                        <label className="form-label">Password</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password" id="confirm-password" className="form-control" name="confirmPassword" value={signup.confirmPassword} onChange={handleClick} />
                                                        <label className="form-label">Repeat your password</label>
                                                    </div>
                                                </div>

                                                <div className="form-check d-flex justify-content-center mb-5">
                                                    <label className="form-check-label">Have An Account?</label>
                                                    <Link to='/login' className="form-check-label">
                                                        Login
                                                    </Link>
                                                </div>

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="button" className="btn btn-primary btn-lg" onClick={handleSubmit}>Sign Up</button>
                                                </div>

                                            </form>

                                        </div>
                                        <div className="col-md-9 col-lg-6 col-xl-5">
                                            <img style={{ marginTop: "60px" }} src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                                className="img-fluid" alt="Sample image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <ToastContainer />
        </>
    )
}

export default Signup