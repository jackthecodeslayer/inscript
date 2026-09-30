import { groq } from "next-sanity";

// Query to get all products, optionally filtered by device
export const getAllProductsQuery = groq`
  *[_type == "product" && ($device == "All Models" || $device in supportedDevices)] {
    _id,
    title,
    "slug": slug.current,
    price,
    "category": category->title,
    supportedDevices,
    "imageUrl": images[0].asset->url
  }
`;

// Query to get a single product by slug
export const getProductBySlugQuery = groq`
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    price,
    description,
    "category": category->title,
    supportedDevices,
    "images": images[].asset->url
  }
`;
