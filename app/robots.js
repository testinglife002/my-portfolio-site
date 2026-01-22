// 📄 app/robots.js ✅ (.js, not .jsx)
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://digitalelevation.vercel.app/sitemap.xml",
  };
}
