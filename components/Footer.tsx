import MagicButton from './ui/magic-button'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
    return (
        <footer className='w-full mb-1 pb-10' id='contact'>
            <div className='flex flex-col items-center'>
                <h1 className='heading lg:max-w-[45vw]'>
                    Ready to take <span className='text-primary'>your</span> digital presence to the next level?
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
            <div className='flex mt-16 md:flex-row flex-col gap-4 justify-between items-center'>
                <p className='md: text-base test-sm md:font-normal font-light'>Copyright © 2026 Bintang</p>

                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((profile) => (
                        <a href={profile.link} target="_blank" rel="noopener noreferrer">
                            <div
                                key={profile.id}
                                className="w-10 h-10 bg-black dark:bg-white"
                                style={{
                                    WebkitMaskImage: `url(${profile.img})`,
                                    maskImage: `url(${profile.img})`,
                                    WebkitMaskSize: "contain",
                                    maskSize: "contain",
                                    WebkitMaskRepeat: "no-repeat",
                                    maskRepeat: "no-repeat",
                                    WebkitMaskPosition: "center",
                                    maskPosition: "center",
                                    WebkitMask: `url(${profile.img}) center / cont50% 50%repeat`,
                                    mask: `url(${profile.img}) center / cont50% 50%repeat`,
                                    maskType: "alpha",
                                }}
                            />
                        </a>
                    ))}
                </div>

            </div>

        </footer>
    )
}

export default Footer
