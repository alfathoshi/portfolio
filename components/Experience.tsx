import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/moving-border'
import { WobbleCard } from './ui/wobble-card'
import { FeaturesSectionDemo } from './ui/features-section-demo-1'

const Experience = () => {
    return (
        <div className='py-20' id='experience'>
            <h1 className="font-bold text-4xl md:text-5xl text-center text-black dark:text-white">
                My
                <span className='text-primary'> work experience</span>
            </h1>

            <FeaturesSectionDemo />
        </div>
    )
}

export default Experience
