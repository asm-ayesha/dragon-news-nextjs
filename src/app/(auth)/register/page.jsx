'use client'

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterPage = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()


        const [isShowPassword, setIsShowPassword] =useState(false)


    const handleRegisterFunc = async (data) => {
        console.log(data)
        const { email, name, photo, password } = data;


        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: "/",
        })

        console.log(res, error)

        if (error) {
            alert(error.message)
        }
        if (res) {
            alert("Signup successfull")
        }
    }


    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
            <div className='p-4 rounded-xl bg-white'>
                <h2 className='text-3xl font-bold mb-6'>Register your account</h2>
                <form className='space-y-4' onSubmit={handleSubmit(handleRegisterFunc)} >
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Your Name </legend>
                        <input type="text" className="input" placeholder="Enter your name"
                            {...register("name", { required: " Name field is required" })} />

                        {
                            errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>
                        }
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo URL</legend>
                        <input type="text" className="input" placeholder="Enter your photo url"
                            {...register("photo", { required: " Photo url field is required" })} />

                        {
                            errors.photo && <p className="text-red-500 text-sm">{errors.photo.message}</p>
                        }
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email address</legend>
                        <input type="email" className="input" placeholder="Enter your email address"
                            {...register("email", { required: " Email field is required" })} />

                        {
                            errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>
                        }
                    </fieldset>


                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend">Password</legend>
                        <input type={isShowPassword ? "text" :"password" } className="input" placeholder="Enter your password" {...register("password", { required: "Password field is required" })} />

                        <span className="absolute right-9 top-4" onClick={() => setIsShowPassword(!isShowPassword)}>
                            {
                                isShowPassword ?
                                    <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                            }
                        </span>

                        {
                            errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>
                        }
                    </fieldset>

                    <button className="btn w-full bg-slate-800 text-white ">Register</button>
                </form>


            </div>
        </div>
    );
};

export default RegisterPage;