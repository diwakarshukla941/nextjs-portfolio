import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
            <div className='pt-40 sm:pt-0'>
                <Image src={assets.profile_img} alt='Profile' className='rounded-full w-32' />
            </div>


            <h3 className='flex items-end gap-2 text-xl md:3xl mb-3 font-ovo'>Hi! I'm Diwakar Shukla. <Image src={assets.hand_icon} alt='hand Icon' className='w-6' /> </h3>

            <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>Full Stack Developer based in India. </h1>
            <p className='max-w-2xl mx-auto font-ovo'>I am full stack developer from mumbai, INDIA with 1 years of experience in companies like Tej Delivery and comcare enterprises. </p>
            <div className='flex flex-col sm:flex-row item-center gap-4 mt-4 '>
                <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>Contact Me
                    <Image src={assets.right_arrow_white} alt='right Icon' className='w-4' />
                </a>
                <a href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>My Resume
                    <Image src={assets.download_icon} alt='download Icon' className='w-4' />
                </a>
            </div>
        </div>
    )
}

export default Header
