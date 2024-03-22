import { createClient } from '@/utils/supabase/server';
import { GetServerSideProps } from 'next';

export default async function Directory() {
  const supabase = createClient();
  const { data: directory } = await supabase.from("Directory").select('*');

  return <pre className='text-white'>{JSON.stringify(directory, null, 2)}</pre>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const supabase = createClient();
  const { data, error } = await supabase.from('Directory').select('*');

  if (error) {
    console.error('Error fetching Directory:', error.message);
    return {
      props: {
        notes: [],
      },
    };
  }

  return {
    props: {
      notes: data || [],
    },
  };
};