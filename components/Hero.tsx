import React from 'react'
import { Spotlight } from './ui/spotlight'
import { GridBackground } from './ui/grid-background'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/magic-button'
import { FaLocationArrow } from 'react-icons/fa'
import { CometCard } from './ui/comet-card'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='pb-24 pt-36'>
            <div>
                <GridBackground />
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center relative my-12 z-12 gap-4 sm:gap-12'>
                <CometCard
                    rotateDepth={20}
                    translateDepth={20}
                    className="flex justify-center items-center h-full w-full"
                >
                    <Image
                        src="/portrait.jpg"
                        alt="Profile"
                        width={300}
                        height={400}
                        className="rounded-2xl dark:bg-zinc-900 bg-zinc-50 border dark:border-zinc-800 dark:text-white shadow-xl object-cover h-full w-full"
                        draggable={false}
                    />
                </CometCard>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col md:items-start items-center justify-center'>

                    <TextGenerateEffect
                        className='text-center md:text-start text-[40px] md:text-5xl lg:text-6xl'
                        words='Bridging Ideas and Technology into Meaningful Digital Products'
                    />

                    <p className='text-center md:text-start md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                        Hi, I&apos;m Muhammad Bintang Al-Fath, a software engineer.
                    </p>
                    <a href="#about">
                        <MagicButton title="Show my work"
                            icon={<FaLocationArrow />}
                            position='right'
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero
