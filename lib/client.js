import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'


export const client = createClient({
    projectId: 'av5jr0e0',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-02-28', // use current date (YYYY-MM-DD) to target the latest API version
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
  });


  const builder = imageUrlBuilder(client)

  export function urlFor(source) {
    return builder.image(source)
  }


