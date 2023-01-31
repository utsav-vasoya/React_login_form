import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator'
import axios from 'axios';
import Cookies from 'js-cookie';

function Login() {

    const navigate = useNavigate()
    const [login, setLogin] = useState({
        email: "",
        password: ""
    })
    const handleClick = (e) => {
        const name = e.target.name
        const value = e.target.value
        setLogin({ ...login, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(login);
        if (login.email && !validator.isEmail(login.email)) {
            toast.error('Please enter valid email.', {
                position: toast.POSITION.TOP_RIGHT
            })
        } else {
            axios.post("http://localhost:4000/users/login", { email: login.email, password: login.password }).then((res) => {
                if (res.data.msg) {
                    toast.error(res.data.msg, {
                        position: toast.POSITION.TOP_RIGHT
                    });
                } else {
                    toast.success("Login Successfull.", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    setTimeout(() => {
                        window.location = "/home";
                    }, 1000)
                    Cookies.setItem('dataKey',JSON.stringify(res.data));
                }
            }).catch((err) => {
                console.log(err);
            });
            setLogin({ email: "", password: "" })
        }
    }
    const googleClick = (e) => {
        e.preventDefault();
        window.location.href = 'http://localhost:4000/users/auth/google'
    }
    return (
        <>
            <section className="vh-100">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" >
                                <div style={{ marginTop: '-20px' }} className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <div style={{ marginLeft: '90px' }} className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                                <button type="button" onClick={googleClick} className="btn btn-primary btn-floating mx-1">
                                                    <i className="fa-brands fa-google"></i>
                                                </button>

                                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                                    <i className="fab fa-twitter"></i>
                                                </button>

                                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                                    <i className="fab fa-linkedin-in"></i>
                                                </button>
                                            </div>
                                            <div className="divider d-flex align-items-center my-4">
                                                <p className="text-center fw-bold mx-3 mb-0">Or</p>
                                            </div>
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign in</p>
                                            <form className="mx-1 mx-md-4">

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="email" id="email" className="form-control" name="email" value={login.email} onChange={handleClick} />
                                                        <label className="form-label">Your Email</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password" id="password" className="form-control" name="password" value={login.password} onChange={handleClick} />
                                                        <label className="form-label">Password</label>
                                                    </div>
                                                </div>

                                                <div className="form-check d-flex justify-content-center mb-5">
                                                    <label className="form-check-label">Don't have an account?</label>
                                                    <Link to='/' className="form-check-label">
                                                        Register
                                                    </Link>
                                                </div>

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="button" className="btn btn-primary btn-lg" onClick={handleSubmit}>Sign In</button>
                                                </div>

                                            </form>

                                        </div>
                                        <div className="col-md-9 col-lg-6 col-xl-5">
                                            <img style={{ marginTop: "28.5px" }} src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
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

export default Login