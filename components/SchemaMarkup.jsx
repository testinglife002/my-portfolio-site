// 📄 components/SchemaMarkup.jsx
export default function SchemaMarkup() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://digitalelevation.vercel.app/#person",
        "name": "Md. Nazmur Rashid",
        "url": "https://digitalelevation.vercel.app",
        "jobTitle": "Full-Stack Web & App Developer",
        "worksFor": {
          "@type": "Organization",
          "name": "DigitalElevation"
        },
        "sameAs": [
          "https://github.com/your-github",
          "https://www.linkedin.com/in/your-linkedin"
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://digitalelevation.vercel.app/#organization",
        "name": "DigitalElevation",
        "url": "https://digitalelevation.vercel.app",
        "logo": "https://digitalelevation.vercel.app/og-image.png"
      },
      {
        "@type": "WebSite",
        "@id": "https://digitalelevation.vercel.app/#website",
        "url": "https://digitalelevation.vercel.app",
        "name": "DigitalElevation Portfolio",
        "publisher": {
          "@id": "https://digitalelevation.vercel.app/#organization"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData),
      }}
    />
  );
}
