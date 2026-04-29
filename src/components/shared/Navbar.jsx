"use client"
import Link from 'next/link';
import React from 'react';
import userAvatar from '@/assets/user.png'
import Image from 'next/image';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';
import { PuffLoader } from 'react-spinners';



const Navbar = () => {

    const { data: session, isPending } = authClient.useSession();

    const user = session?.user;


    console.log(user,  isPending, 'session')

    return (
        <div className='flex justify-between container mx- auto mt-6' >
            <div></div>
            <ul className='flex justify-between items-center gap-3 text-gray-500'>
                <li> <NavLink href={'/'}>Home</NavLink> </li>
                <li> <NavLink href={'/about'} >About</NavLink> </li>
                <li> <NavLink href={'/career'}>Career</NavLink> </li>


            </ul>
{isPending? <PuffLoader color='#cb9ad8'></PuffLoader>  : user ? <div className='flex items-center gap-4'>
                <h2>Hello, {user?.name || "Guest"} </h2>
                <Image src={user?.image || userAvatar} alt='user avater' width={60} height={60} className='rounded-full' ></Image>
                <button className='btn bg-purple-500 text-white' onClick={async()=> await authClient.signOut()} >Logout</button>
            </div> :
                <button className='btn bg-purple-500 text-white'> 
                    <Link href={'/login'}>Login</Link> </button>}
        </div>
    );
};

export default Navbar;