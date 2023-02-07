// supabase, pocketbase, sanity;
// import sanityClient from '@sanity/client';
import { createClient } from '@supabase/supabase-js';
import { Session } from 'next-auth';

// export const sanity = sanityClient({
//   projectId: process.env.SANITY_PROJECT_ID, // you can find this in sanity.json
//   dataset: process.env.SANITY_DATASET,
//   token: process.env.SANITY_API_TOKEN,
//   useCdn: process.env.NODE_ENV === 'production', // `false` if you want to ensure fresh data
//   // apiVersion: '2021-10-21',
// });

export const supabase = (session?: Session | null) => {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '',
    session
      ? {
          global: {
            headers: {
              Authorization: `Bearer ${session?.supabaseAccessToken}`,
            },
          },
        }
      : undefined
  );
};
