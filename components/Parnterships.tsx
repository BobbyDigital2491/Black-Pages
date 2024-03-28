/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Parnterships = () => {
  return (
    <section className="bg-black dark:bg-black">
    <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">In Partnership with</h2>
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
            <a href="https://viccci.xyz" className="flex justify-center items-center">
                <img src="/VCP.png" width={100} alt=''/>                       
            </a>
            <a href="https://www.bellofrockhill.org/" className="flex justify-center items-center">
                <img src="/bell.png" width={100} alt=''/>                                               
            </a>
            <a href="https://www.worldroamvr.com/" className="flex justify-center items-center">
                <img src="/roamers.png" width={150} alt=''/>                                                                  
            </a>

            <a href="#" className="flex justify-center items-center">
                <img src="/aug.png" width={150} alt=''/>                                                                                     
            </a>
            <a href="#" className="flex justify-center items-center">
                <img src="/brandi.png" width={100} alt=''/>                                                                                    
            </a>
            <a href="#" className="flex justify-center items-center">
                <img src="/sokoni.png" width={200}  height={200} alt=''/>                                                                                
            </a>
        </div>
    </div>
</section>
  )
}

export default Parnterships