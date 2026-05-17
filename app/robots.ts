export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://ashutoshbuilds-dev.vercel.app/sitemap.xml",
  };
}