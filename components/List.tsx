/* eslint-disable @next/next/no-img-element */
// Import the necessary hooks from Next.js
import React, { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export default async function Page() {
    // Retrieve cookies from headers
    const cookieStore = cookies();
    
    // Create Supabase client
    const supabase = createClient();
    
    try {
      // Fetch data from Supabase
      const { data: directoryData, error } = await supabase.from('directory').select('*');
      
      // Handle error if any
      if (error) {
        console.error('Error fetching directory data:', error.message);
        return <div>Error fetching data</div>;
      }
  
      // Sort directoryData alphabetically by business_name
      directoryData.sort((a, b) => a.business_name.localeCompare(b.business_name));

  return (
    <div className="bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-0">
         

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {directoryData.map((entry) => (
              <div key={entry.id} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img src={entry.image} alt={entry.business_name} className="h-full w-full object-cover object-center" />
                </div>
                <h3 className="mt-6 text-sm text-white">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    {entry.business_name}
                  </a>
                </h3>
                <p className="text-base text-gray-500">{entry.business_industry}</p>
                <p className="text-base text-gray-500">{entry.Description}</p>
                <br/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} catch (error) {
  // Handle any unexpected errors
  console.error('Error occurred:', error);
  return <div>Error occurred while fetching data</div>;
 }
}
