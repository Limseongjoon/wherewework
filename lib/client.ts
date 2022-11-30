import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID, // you can find this in sanity.json
  dataset: process.env.SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  useCdn: process.env.NODE_ENV === 'production', // `false` if you want to ensure fresh data
  // apiVersion: '2021-10-21',
});
