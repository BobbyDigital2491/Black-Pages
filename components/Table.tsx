/* eslint-disable @next/next/no-img-element */
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'


interface DirectoryEntry {
  id: number;
  business_name: string;
  name_of_owner: string;
  business_industry: string;
  image: string;
  Description: string; // Assuming Description field exists in your table
}

export default async function Page() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data: directoryData, error } = await supabase.from<DirectoryEntry>('directory').select('*')

  if (error) {
    console.error('Error fetching directory data:', error.message)
    return <div>Error fetching data</div>
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {directoryData.map((entry) => (
        <div key={entry.id} className="p-4 border border-gray-200 rounded-lg">
          <div className="flex items-center mb-2">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img src={entry.image} alt={entry.business_name} width={64} height={64} />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-white">{entry.business_name}</h2>
              <p className="text-gray-600">{entry.name_of_owner}</p>
              <p className="text-gray-600">{entry.business_industry}</p>
              <br/>
              <p className="text-white">{entry.Description}</p>
            </div>
          </div>
          {/* Add additional details here if needed */}
        </div>
      ))}
    </div>
  )
}
