/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Hero = () => {
  return (
    <div className="overflow-x-hidden bg-black">
    

    <section className="relative py-12 sm:py-16 lg:pt-20 xl:pb-0">
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-3xl mx-auto text-center">
                <p className="inline-flex px-4 py-2 text-base text-green-400 border- bg-gray-200 border-green-400 rounded-full font-pj">Made by Developers, for Companies</p>
                <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">The <span className='text-green-400'>Black</span> <span className='text-yellow-300'>Pages</span>: Black Owned Business Directory</h1>
                <p className="max-w-md mx-auto mt-6 text-base leading-7 text-white font-inter">Find the best black owned businesses in your area.</p>

                <div className="relative inline-flex mt-10 group">
                    <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#47ff44] via-[#ffd744] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

                    <a href="/login" title="" className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
                        Get access to over 4,958 companies
                    </a>
                </div>
            </div>
        </div>
<br/>
    
    </section>
</div>



  )
}

export default Hero