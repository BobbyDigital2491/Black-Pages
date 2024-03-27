/* eslint-disable @next/next/no-img-element */
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

interface DirectoryEntry {
  id: number;
  business_name: string;
  name_of_owner: string;
  business_industry: string;
  image: string;
  Description: string;
}

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

    // Render fetched data
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {directoryData.map((entry) => (
          <div key={entry.id} className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center mb-2">
              <div className="overflow-hidden">
                <img src={entry.image} alt={entry.business_name} width={100} height={100} />
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-semibold text-white">{entry.business_name}</h2>
                
                <p className="text-gray-600">{entry.business_industry}</p>
                <br />
                <p className="text-white">{entry.Description}</p>
                <br/>
                <p className='text-white'>Founder / Co-Founders</p>
                <p className='text-white'>{entry.name_of_owner}</p>
                <br/>
                <a href={entry.website} className='text-white'><button className='bg-green-400 rounded-md py-2 px-4'> Website</button></a>
              </div>
            </div>
            {/* Add additional details here if needed */}
          </div>
        ))}
      </div>
    );
  } catch (error) {
    // Handle any unexpected errors
    console.error('Error occurred:', error);
    return <div>Error occurred while fetching data</div>;
  }
}
