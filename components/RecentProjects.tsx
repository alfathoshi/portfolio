"use client";

import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'
import { useTheme } from "next-themes";
import { Carousel, Card } from './ui/apple-cards-carousel';

const RecentProjects = () => {
    const { theme, setTheme } = useTheme();
    return (
        <div className='py-20' id='projects'>
            <h1 className='heading'>
                A small selection of {' '}
                <span className='text-primary'>recent projects</span>
            </h1>
            <div className='w-full h-full'>

                <Carousel items={projects.map((project, index) => (
                    <Card key={project.id} card={{
                        src: project.img,
                        title: project.title,
                        category: "Project",
                        content: (
                            <div className="flex flex-col gap-4 w-full">
                                <p className="text-neutral-200 text-xs font-sans max-w-sm">
                                    {project.des}
                                </p>
                                <div className='flex items-center justify-between mt-2'>
                                    <div className='flex items-center'>
                                        {project.iconLists.map((icon, index) => (
                                            <div key={icon} className='dark:border-white/20 border border-black/20 rounded-full  bg-white lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center' style={{
                                                transform: `translateX(-${5 * index * 2}px)`
                                            }}>
                                                <img src={icon} alt={icon} className='p-2' />
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        )
                    }} index={index} />
                ))} />
            </div>

        </div>
    )
}

export default RecentProjects
