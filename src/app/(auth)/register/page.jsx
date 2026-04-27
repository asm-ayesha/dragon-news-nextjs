'use client'

import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
    const {register, handleSubmit, watch, formState: { errors }}  = useForm()


    const handleRegisterFunc =(data)=>{
        console.log(data)
        const {email, name, photo, password} = data;
    }

    
    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
            <div className='p-4 rounded-xl bg-white'>
                <h2 className='text-3xl font-bold mb-6'>Register your account</h2>
                <form className='space-y-4' onSubmit={handleSubmit(handleRegisterFunc)} >
                    <fieldset className="fieldset">
                    <legend className="fieldset-legend">Your Name </legend>
                    <input type="text" className="input" placeholder="Enter your name"
                    {...register("name",  { required: " Name field is required"})}/> 

                    {
                        errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>
                    } 
                </fieldset>
                    <fieldset className="fieldset">
                    <legend className="fieldset-legend">Photo URL</legend>
                    <input type="text" className="input" placeholder="Enter your photo url"
                    {...register("photo",  { required: " Photo url field is required"})}/> 

                    {
                        errors.photo && <p className="text-red-500 text-sm">{errors.photo.message}</p>
                    } 
                </fieldset>
                    <fieldset className="fieldset">
                    <legend className="fieldset-legend">Email address</legend>
                    <input type="email" className="input" placeholder="Enter your email address"
                    {...register("email",  { required: " Email field is required"})}/> 

                    {
                        errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>
                    } 
                </fieldset>


                    <fieldset className="fieldset">
                    <legend className="fieldset-legend">Password</legend>
                    <input  type="password" className="input" placeholder="Enter your password" {...register("pass",{required: "Password field is required"})}/> 

                    {
                        errors.pass && <p className="text-red-500 text-sm">{errors.pass.message}</p>
                    }
                </fieldset>

                <button className="btn w-full bg-slate-800 text-white ">Register</button>
                </form>

               
            </div>
        </div>
    );
};

export default RegisterPage;