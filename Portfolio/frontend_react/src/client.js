import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: '8ccw2m6g', // find this at manage.sanity.io or in your sanity.json
  dataset: 'production', // this is from those question during 'sanity init'
  apiVersion: '2022-11-16',
  useCdn: true,
  token: 'skuuat9iejKQpRky6DVSAUA0Fj6OOYFKxbr5lWShN2b8CSl2WKQD9RFj63HWp8JHQDJRAOPNzfK5Vj2NvvG7Qn6GVvhNDV0H2UFWORUDtIE0kGvWkHtzMANrPOTAnVURRVeOz04Qd3qKBe4J7qdlMrOTxr2ps1fsIChidGBxNfGQDx19nvb3',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  if (!source) {
    return '';
  }
  return builder.image(source);
};
