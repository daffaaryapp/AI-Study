'use client'
import { useUser } from '@clerk/nextjs';
import Image from 'next/image'
import React from 'react'

function WelcomeBanner() {
    const {user}=useUser();
    return (
        <div className='p-5 bg-primary w-full text-white rounded-lg flex items-center gap-6'>
            <h1>Ceritanya Gambar</h1>
            <div>
                <h2 className='font-bold text-3xl'>Hello, {user?.fullName}</h2>
                <p> Selamat datang di Ceritanya Gambar</p>
            </div>
        </div>
    )
}

export default WelcomeBanner
