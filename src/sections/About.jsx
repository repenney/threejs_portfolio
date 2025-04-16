import React, { useState } from 'react'
import Globe from "react-globe.gl"
import Button from '../components/Button'

const About = () => {
  
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("repenney8@gmail.com");

        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000)
    }
    return (
    <section className='c-space my-20' id="about">
        <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:gird-cols-2 grid-cols-1 gap-5 h-full'>
        
            <div className='col-span-1 xl:row-span-3'>
                <div className = "grid-container">
                    <img src="/assets/grid1.png" alt='grid-1' className='w-full sm:h-[276px] h-fit object-contain' />
            
                    <div>
                        <p className='grid-headtext'>Hi, I'm Ruth!</p>
                        <p className='grid-subtext'>I'm a recent graduate with a B.S. in Computer Science and minors in Software Engineering and Cybersecurity, passionate about building impactful and secure software solutions. With a strong foundation in coding, system design, and problem-solving, I’m excited to keep learning and contribute to meaningful projects.</p>
                    </div>

                </div>
            </div>

            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="/assets/grid2.png" alt="grid-2" className ="w-full sm:w-[276px] h-fit object-contain" />
                    <div>
                        <p className="grid-headtext">
                        My Technical Skills
                        </p>
                        <p className="grid-subtext">I have experience in both backend and frontend software development. I have worked with a variety of tools, programming languages, libraries, and frameworks. </p>
                    </div>
                </div>

            </div>

            <div className="first-letter:col-span-1 xl:row-span-4">
                <div className='grid-container' >
                    <div className = "rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                        <Globe 
                            height={326}
                            width={326}
                            backgroundColor='rgba(0,0,0,0)'
                            backgroundImageOpacity={0.5}
                            showAtmosphere
                            showGraticules
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                            bumpImageUrl= "//unpkg.com/three-globe/example/img/earth-topology.png"
                            labelsData={[{
                                lat: 36, lng: -87,
                                text: "I'm here",
                                color: 'white',
                                size: 100,
                            }]}
                        />
                    </div>
                    <div>
                        <p className = "grid-headtext">
                            Available for Remote Work
                        </p>
                        <p className='grid-subtext'>
                            I'm based in Nashville, TN with the ability to work across multiple timezones.
                        </p>
                        <a href='#contact' className='w-fit'>
                            <Button name ="Contact me" isBeam containerClass="w-full mt-10"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className='xl:col-span-2 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

                    <div>
                        <p className="grid-headtext">Why?</p>
                        <p className='grid-subtext'>
                        I love coding because it empowers me to bring ideas to life through creative problem-solving and logical thinking. Whether I’m building user-friendly interfaces, analyzing complex data, or streamlining processes, I find excitement in every challenge. Coding keeps me curious, always learning, and motivated to create impactful, efficient solutions.
                        </p>
                    </div>
                </div>
            </div>

            <div className='xl:col-span-1 xl:row-span-2'>
                <div className='grid-container'>
                    <img src="assets/grid4.png" alt="grid-4" className ="w-full md:h-[126px] sm:h-[276px] h-fit object-contain sm:object-top" />

                    <div className='space-y-2'>
                        
                        <div className='copy-container' onClick={handleCopy}>
                            <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                            <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>repenney8@gmail.com</p>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    </section>
  )
}

export default About