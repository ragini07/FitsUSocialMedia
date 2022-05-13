import React from 'react';
import heroImg from '../../assets/heroImg.PNG';
import logoLg from '../../assets/logo-lg.PNG';
import { useNavigate, Link, Navigate } from "react-router-dom";

function Signup() {
  return (
    <div className='container flex mx-auto items-center h-screen max-w-2xl 3xl:max-w-3xl lg:justify-center'>
      <div className='flex w-3/5 lg:hidden'>
        <img src={heroImg} alt="hero image"/>
      </div>
      <div className='flex flex-col w-2/5 lg:w-3/5 '>
         <div className='flex w-full justify-center items-center mx-3 my-4'>
         <img src={logoLg} alt="logo image"/>
          </div>
          <form action="#" className="form-data">
          <input
                    type="text"
                    placeholder="name"
                    className='text-sm focus:ring-1 focus:ring-purple-500 text-gray w-full mx-3 py-2 px-3 h2 border border-gray rounded mb-2 focus:outline-none focus:ring-1 focus:ring-purple-500'
                  />
          <input
                    type="email"
                    placeholder="email"
                    className='text-sm focus:ring-1 focus:ring-purple-500 text-gray w-full mx-3 py-2 px-3 h2 border border-gray rounded mb-2 focus:outline-none focus:ring-1 focus:ring-purple-500'
                  />
                    <input
                    type="password"
                    placeholder="password"
                    className='text-sm text-gray w-full mx-3 py-2 px-3 h2 border border-gray rounded mb-2 focus:outline-none focus:ring-1 focus:ring-purple-500'
                 
                  />
                   <button className="bg-purple-500 text-white w-full rounded h-8 font-bold mx-3 py-1 px-3 my-3 hover:bg-purple-600">Sign Up</button>
               
          </form>
          <div className='text-center mx-3 py-2 px-3 w-full my-2'>Already have an account? <span className='font-semibold hover:underline cursor-pointer'><Link to="/login">Log In</Link></span></div>
        </div>
       
       
      </div>
  )
}

export  {Signup}