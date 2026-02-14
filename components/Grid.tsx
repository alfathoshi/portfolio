import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { gridItems } from '@/data'

const Grid = () => {
    return (
        <div className='py-20' id='about'>
            <h1 className='heading'>
                About
                <span className='text-primary'> me</span>
            </h1>
            <BentoGrid className='w-full py-20'>
                {gridItems.map(({ id, title, description, className, img, imgClassName, titleClassName, spareImg }) => (
                    <BentoGridItem
                        id={id}
                        key={id}
                        title={title}
                        description={description}
                        className={className}
                        img={img}
                        imgClassName={imgClassName}
                        titleClassName={titleClassName}
                        spareImg={spareImg}
                    />
                ))}
            </BentoGrid>
        </div>
    )
}

export default Grid
