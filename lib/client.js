import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'


export const client = createClient({
    projectId: '37bg5uyk',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-04-24', // use current date (YYYY-MM-DD) to target the latest API version
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
  });


  const builder = imageUrlBuilder(client)

  export function urlFor(source) {
    return builder.image(source)
  }


