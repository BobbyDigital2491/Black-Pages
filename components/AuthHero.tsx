import React from 'react'

const AuthHero = () => {
  return (
    <section>
   

    
        

        
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-lg mx-auto text-center xl:max-w-2xl">
                <h1 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl">Welcome to the <span className='bg-yellow-400 text-black'>Black</span> <span className='text-green-400'>Pages</span></h1>
                <p className="max-w-lg mx-auto mt-6 text-base font-normal leading-7 text-gray-300">Find any type of black owned business in your area.</p>

                <form action="#" className="max-w-xl mx-auto mt-10">
                    <div>
                        <label htmlFor="" className="sr-only"> Search </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>

                            <input type="text" name="" id="" placeholder="Catering, Event Planner, Tax, Software Development etc..." className="block w-full py-3 pl-10 pr-4 text-base font-normal leading-7 text-gray-900 placeholder-gray-500 bg-white border border-white focus:ring-white focus:border-white focus:ring-offset-2" />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="
                                inline-flex
                                items-center
                                justify-center
                                w-full
                                px-6
                                py-4
                                text-sm
                                font-bold
                                tracking-widest
                                text-white
                                uppercase
                                transition-all
                                duration-200
                                bg-yellow-400
                                border border-transparent
                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white
                                hover:bg-gray-700
                            "
                        >
                            Search now
                        </button>
                    </div>
                </form>

                <div className="grid max-w-md grid-cols-2 mx-auto mt-8 md:mt-16 lg:mt-24 xl:mt-32 gap-x-6 grid-col-2">
                    <div>
                        <p className="text-4xl font-bold text-white">38,942</p>
                        <p className="mt-2 text-sm font-medium text-gray-300">Order Delivered</p>
                    </div>

                    <div>
                        <p className="text-4xl font-bold text-white">14,344</p>
                        <p className="mt-2 text-sm font-medium text-gray-300">Registered Businesses</p>
                    </div>
                </div>
            </div>
        </div>
    
</section>


  )
}

export default AuthHero