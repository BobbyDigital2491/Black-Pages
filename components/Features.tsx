/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Features = () => {
  return (
    <div className="bg-black py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">Why use the <span className='bg-yellow-400 text-black'>Black</span> <span className='text-green-400'>Pages</span></h2>
        <p className="mt-2 text-lg leading-8 text-white">The Black Pages are free to use, however subscribers will recieve perks and special privileges. Here are some benefits of the Black Pages:</p>
      </div>

      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        
        <article className="flex max-w-xl flex-col items-start justify-between">
        <img src="https://trigger.digital/wp-content/uploads/2022/03/trigger-digital-case-studies-recruitment-2-1920x1080-1.jpg" className='mb-4 max-h-full max-w-full' alt=""/> 
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-green-400 group-hover:text-gray-300">
              <a href="#">
                <span className="absolute inset-0"></span>
                Lead Generation
              </a>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-white">Cold calls, emails, networking events and gatherings. Businesses need exposure in many different ways in this modern era, and just as some things change, other things never  </p>
          </div>
        </article>

        <article className="flex max-w-xl flex-col items-start justify-between">
        <img src="https://t3.ftcdn.net/jpg/03/13/47/34/360_F_313473421_9T9pSXOqdun07MLqMODAghywqo43cTXb.jpg" className='mb-4 max-h-auto max-w-full' alt=""/> 
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-green-400 group-hover:text-gray-300">
              <a href="#">
                <span className="absolute inset-0"></span>
                Networking
              </a>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-white">Cold calls, emails, networking events and gatherings. Businesses need exposure in many different ways in this modern era, and just as some things change, other things never  </p>
          </div>
        </article>

        <article className="flex max-w-xl flex-col items-start justify-between">
        <img src="https://wiki.safing.io/guides/screenshots/createprofile_general.png" className='mb-4 max-h-full max-w-full' alt=""/> 
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-green-400 group-hover:text-gray-300">
              <a href="#">
                <span className="absolute inset-0"></span>
                Custom Profiles
              </a>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-white">Cold calls, emails, networking events and gatherings. Businesses need exposure in many different ways in this modern era, and just as some things change, other things never  </p>
          </div>
        </article>

        
  
  
      </div>
    </div>
  </div>
  
  )
}

export default Features