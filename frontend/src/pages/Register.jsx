/* import React from "react";
import down from "../assets/down.png";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post("http://localhost:8080/auth/register", {
      name,
      email,
      password,
    });

    const token = response.data.data.token;
    console.log("Register Successful! Token:", token);
  } catch (error) {
    console.error("Register Failed:", error.response?.data);
  }
};

const Register = () => {
  return (
    <div className="main flex mx-auto items-center justify-between h-screen flex-col bg-gradient-to-b from-blue-400 to-white">
      <div className="flex mx-auto items-center justify-end md:justify-center h-screen flex-col">

        <h1 className="text-6xl mb-7 mainText font-bold uppercase">Kissan</h1>
        <form
          className="flex flex-col justify-center items-center"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="bg-black  text-white p-5 rounded-xl m-3"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="bg-black text-white p-5 rounded-xl m-3"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="border-green-500 p-5 bg-black text-white rounded-xl m-3"
          />
          <button
            type="submit"
            className="bg-green-400 w-[150px] p-5 rounded-xl"
          >
            Register
          </button>
          <div className="mt-4">
            Have an account already ?
            <a href="/" className="ml-2 text-green-400">
              <Link to="/login">Login</Link>
            </a>
          </div>
        </form>
      </div>

      <img src={down} alt="" className="w-full md:hidden" />
      
    </div>
  );
};

export default Register;
 */

import React, { useState } from 'react';
import axios from 'axios';
import down from '../assets/down.png';
import { Link } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/api/', formData);
            console.log(response.data); // You can handle the response as needed
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    return (
        <div className="main flex mx-auto items-center justify-between h-screen flex-col bg-gradient-to-b from-blue-400 to-white">
            <div className='flex mx-auto items-center justify-end md:justify-center h-screen flex-col'>
                <h1 className='text-6xl mb-7 mainText font-bold uppercase'>Kissan</h1>
                <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className='bg-black text-white p-5 rounded-xl m-3'
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className='bg-black text-white p-5 rounded-xl m-3'
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className='border-green-500 p-5 bg-black text-white rounded-xl m-3'
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <button type="submit" className='bg-green-400 w-[150px] p-5 rounded-xl'>Register</button>
                    <div className='mt-4'>Have an account already ?
                        <Link to="/login" className='ml-2 text-green-400'>Login</Link>
                    </div>
                </form>
            </div>

            <img src={down} alt="" className='w-full md:hidden' />
        </div>
    );
};

export default Register;
