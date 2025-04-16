//import { Canvas } from '@react-three/fiber'
import { workExperiences } from '../constants'

const Experience = () => {
  return (
    <section className='c-space my-20'>
        <div className='w-full text-white-600'>
            <h3 className='work-head-text'>My Work Experience</h3>
            <div className='work-container'>
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
                    <img src='/assets/mancoding.gif' alt='coding' />
                    <img src='/assets/coding.gif' alt='coding' />
                </div>
                <div className='work-content'>
                    <div className='sm:py-10 py-5 sm:px-5 px-2.5'>
                        {workExperiences.map(({id, name, pos, icon, duration, title}) =>
                            <div key={id} className='work-content_container group'>
                                <div className='flex flex-col h-full justify-start items-center py-2'>
                                    <div className='work-content_logo'>
                                        <img src={icon} alt="logo" className='w-full h-full' />
                                    </div>
                                    <div className='work-content' />
                                </div>

                                <div className='sm:p-5 px-2.5 py-5'>
                                    <p className='font-bold text-white-800'>{name}</p>
                                    <p className='text-sm mb-5'>{pos} -- {duration}</p>
                                    <p className='group-hover:text-white transition ease-in-out duration-500'>{title}</p>
                                </div>    

                            </div>
                        )}

                    </div>

                </div>
            </div>
        </div>
    
    </section>
  )
}

export default Experience