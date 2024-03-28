/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Blog = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">Just a few stories about some small busineses and entreprenuers</p>
      </div>
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article className="flex max-w-xl flex-col items-start justify-between">
          <div className="flex items-center gap-x-4 text-xs">
            <time dateTime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
            <h1 className="relative z-10 rounded-full bg-green-400 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Tech</h1>
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <a href="#">
                <span className="absolute inset-0"></span>
                Creating the Black Pages
              </a>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Using some of the latest and best practices in modern software development, this app is created  </p>
          </div>
          <div className="relative mt-8 flex items-center gap-x-4">
            <img src="https://viccci.xyz/log.png" alt="" className="h-14 w-10 rounded-full bg-gray-50"/>
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">
                <a href="#">
                  <span className="absolute inset-0"></span>
                  Robert Lawrence
                </a>
              </p>
              <p className="text-gray-600">Co-Founder </p>
            </div>
            
          </div>
        </article>
        <article className="flex max-w-xl flex-col items-start justify-between">
          <div className="flex items-center gap-x-4 text-xs">
            <time dateTime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
            <h1 className="relative z-10 rounded-full bg-green-400 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Data Analytics</h1>
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <a href="#">
                <span className="absolute inset-0"></span>
                Building Our Database
              </a>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Gathering data from businesses across the 50 states is no easy task, but thats what we set out to do.</p>
          </div>
          <div className="relative mt-8 flex items-center gap-x-4">
            <img src="https://viccci.xyz/log.png" alt="" className="h-14 w-10 rounded-full bg-gray-50"/>
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">
                <a href="#">
                  <span className="absolute inset-0"></span>
                  Ej Gailliard
                </a>
              </p>
              <p className="text-gray-600">Co-Founder</p>
            </div>
          </div>
        </article>
        <article className="flex max-w-xl flex-col items-start justify-between">
          <div className="flex items-center gap-x-4 text-xs">
            <time dateTime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
            <h1 className="relative z-10 rounded-full bg-green-400 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</h1>
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <a href="#">
                <span className="absolute inset-0"></span>
                Any Means Necessary
              </a>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Cold calls, emails, networking events and gatherings. Businesses need exposure in many different ways in this modern era, and just as some things change, other things never  </p>
          </div>
          <div className="relative mt-8 flex items-center gap-x-4">
            <img src="https://viccci.xyz/log.png" alt="" className="h-14 w-10 rounded-full bg-gray-50"/>
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">
                <a href="#">
                  <span className="absolute inset-0"></span>
                  Alfonzo Hamlin
                </a>
              </p>
              <p className="text-gray-600">Co-Founder / CTO</p>
            </div>
          </div>
        </article>
  
  
      </div>
    </div>
  </div>
  
  )
}

export default Blog