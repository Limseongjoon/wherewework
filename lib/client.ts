import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: '2pybycam', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  apiVersion: '2021-10-21',
  token: process.env.SANITY_TOKEN_EDIT,
  useCdn: true, // `false` if you want to ensure fresh data
});
