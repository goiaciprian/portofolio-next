export function ClientMetadata() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ciprian Goia",
    "jobTitle": "Full-stack Software Engineer",
    "url": "https://cipriang-software.work",
    "sameAs": [
      "https://www.linkedin.com/in/ciprian-goia-951537197/",
      "https://github.com/goiaciprian"
    ],
    "knowsAbout": [
      "React",
      "NextJS",
      "Angular",
      "AWS",
      "PostgreSQL",
      "Full-stack Development"
    ],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "University of Transylvania"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Ensemble Software"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 