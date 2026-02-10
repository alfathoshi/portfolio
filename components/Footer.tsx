import React from 'react'
import MagicButton from './ui/magic-button'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import { profile } from 'console'
import { div } from 'three/src/nodes/TSL.js'

const Footer = () => {
    return (
        <footer className='w-full mb-25 pb-10 md:mb-5' id='contact'>
            <div className='flex flex-col items-center'>
                <h1 className='heading lg:max-w-[45vw]'>
                    Ready to take <span className='text-purple'>your</span> digital presence to the next level?
                </h1>
                <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out me today and let&apos;s discuss how I can help you achieve your goals</p>
                <a href="mailto:alfthbintangmuhammad@gmail.com">
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position='right'
                    />
                </a>
            </div>
            <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
                <p className='md: text-base test-sm md:font-normal font-light'>Copyright © 2026 Bintang</p>
                <div className='flex items-center md:gap-3 gap-6'>
                    {socialMedia.map((profile) =>
                        <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-100 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                            <img src={profile.img}
                                alt={profile.id.toString()} className='w-10 h-20' />
                        </div>
                    )}
                </div>
            </div>
        </footer>
    )
}

export default Footer
