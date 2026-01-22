// 📄 app/sitemap.js ✅ (.js, not .jsx)
export default function sitemap() {
  const baseUrl = "https://digitalelevation.vercel.app";

  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/projects`, lastModified: new Date() },
    { url: `${baseUrl}/demos`, lastModified: new Date() },
    { url: `${baseUrl}/services`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
    { url: `${baseUrl}/bn`, lastModified: new Date() },
    { url: `${baseUrl}/ar`, lastModified: new Date() },
  ];
}
