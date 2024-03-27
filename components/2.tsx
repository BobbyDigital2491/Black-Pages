import { createClient } from '@/utils/supabase/server';
import { GetServerSideProps } from 'next';

export default function Directory({ directory }: { directory: any[] }) {
  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              Business name
            </th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {directory.map((item: any, index: number) => (
            <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'} border-b dark:bg-white dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600`}>
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input id={`checkbox-table-search-${index}`} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label htmlFor={`checkbox-table-search-${index}`} className="sr-only">checkbox</label>
                </div>
              </td>
              <td className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                {item.business_name}
              </td>
              {/* Add more table data cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const supabase = createClient();
  const { data, error } = await supabase.from('Directory').select('*');

  if (error) {
    console.error('Error fetching Directory:', error.message);
    return {
      props: {
        directory: [],
      },
    };
  }

  return {
    props: {
      directory: data || [],
    },
  };
};
