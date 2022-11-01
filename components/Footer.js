import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-[#150F0A] flex w-screen justify-center h-[150px] items-end'>
        <div className='flex flex-col items-center mb-8'>
            <div>
                <Image src='/logo-light.png' width={60} height={31.5} alt='logo'/>
            </div>
            <h2 className='text-white font-bold '>2022, Built By Jamil,All Rights Reserved</h2>
        </div>
    </footer>
  )
}
