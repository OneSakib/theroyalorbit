import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://theroyalorbit.vercel.app/";

  return [{ url: `${baseUrl}`, lastModified: new Date().toISOString() }];
}
