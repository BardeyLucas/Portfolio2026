import { createImageUrlBuilder, type SanityImageSource } from '@sanity/image-url'

export const useSanityImage = () => {
  const { projectId, dataset } = useSanity().client.config()

  const urlFor = (source: SanityImageSource) => 
    projectId && dataset
      ? createImageUrlBuilder({ projectId, dataset }).image(source)
      : null

  return { urlFor }
}