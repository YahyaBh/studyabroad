import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Create Sanity client instance
export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // found in sanity.json
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // 'production' by default
    apiVersion: '2025-01-31', // use a specific API version
    useCdn: true, // `false` if you want fresh data
});

// Set up a helper for image URLs
const builder = imageUrlBuilder(client);

// Helper function to create URL for images
export const urlFor = (source) => builder.image(source);