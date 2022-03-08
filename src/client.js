import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: "x37529po",
  dataset: "production",
  apiVersion: '2022-02-27',
  useCdn: true
})