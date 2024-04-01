import React from 'react'

const CTA = () => {
  return (
    <section className="bg-black dark:bg-black">
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">Let&nbsp;s find more that brings us together.</h2>
            <p className="mb-8 font-light text-white sm:text-xl dark:text-white">
                The Black Pages helps you connect with businesses, busineses owners and people who 
                share your interests. The Black Pages offers a one of a kind directory to generate 
                leads, find employers or employees, or just find local businesses in your area.</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <a href="#" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-white-300 dark:focus:ring-white">
                    Get started
                </a>
                <a href="#" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border bg-green-600 border-gray-300 rounded-lg hover:bg-green-400 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-green-400 dark:focus:ring-gray-600">
                    <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                    View more
                </a>  
            </div>
        </div>
    </div>
</section>
  )
}

export default CTA