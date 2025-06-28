import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the projects data
const projectsData = JSON.parse(fs.readFileSync('./src/Pages/data/Mon3emProjects.json', 'utf8'));

// Read the base HTML template
const baseHTML = fs.readFileSync('./index.html', 'utf8');

// Function to generate meta tags for a project
function generateProjectMetaTags(project) {
  const seoTitle = `${project.title} - Abdelmonem Hatem Portfolio`;
  const seoDescription = project.description.length > 160 
    ? project.description.substring(0, 157) + "..."
    : project.description;
  const seoKeywords = `${project.title}, ${project.TechStack.join(", ")}, Full Stack Developer, Abdelmonem Hatem, Portfolio Project`;
  const seoImage = project.Image;
  const seoUrl = `https://abdelmonem-hatem.netlify.app/project/${project.id}`;

  return `
    <meta name="title" content="${seoTitle}" />
    <meta name="description" content="${seoDescription}" />
    <meta name="keywords" content="${seoKeywords}" />
    <meta name="author" content="Abdelmonem Hatem" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${seoUrl}" />
    <meta property="og:title" content="${seoTitle}" />
    <meta property="og:description" content="${seoDescription}" />
    <meta property="og:image" content="${seoImage}" />
    <meta property="og:site_name" content="Abdelmonem Hatem Portfolio" />
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="${seoUrl}" />
    <meta property="twitter:title" content="${seoTitle}" />
    <meta property="twitter:description" content="${seoDescription}" />
    <meta property="twitter:image" content="${seoImage}" />
    
    <!-- Additional Meta Tags -->
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${seoUrl}" />
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": "${project.title}",
      "description": "${project.description.replace(/"/g, '\\"')}",
      "image": "${project.Image}",
      "url": "${seoUrl}",
      "author": {
        "@type": "Person",
        "name": "Abdelmonem Hatem",
        "jobTitle": "Full Stack Developer",
        "url": "https://abdelmonem-hatem.netlify.app/"
      },
      "creator": {
        "@type": "Person",
        "name": "Abdelmonem Hatem"
      },
      "dateCreated": "2025",
      "keywords": "${seoKeywords}",
      "genre": "Web Development",
      "softwareVersion": "1.0",
      "programmingLanguage": ${JSON.stringify(project.TechStack)},
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
    </script>
  `;
}

// Create the public/project directory if it doesn't exist
const projectDir = './public/project';
if (!fs.existsSync(projectDir)) {
  fs.mkdirSync(projectDir, { recursive: true });
}

// Generate HTML files for each project
projectsData.forEach(project => {
  const metaTags = generateProjectMetaTags(project);
  
  // Create a clean HTML template for the project
  let projectHTML = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/Photo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="google-site-verification"
      content="ZYNfZwMUiNwSMF3EMvY85bid2BVvB12uMMRfUNWw75A"
    />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="theme-color" content="rgb(3,0,20)" />
    <meta name="msapplication-navbutton-color" content="rgb(3,0,20)" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta
      name="apple-mobile-web-app-status-bar-style"
      content="black-translucent"
    />
    
    <!-- Sitemap -->
    <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
    
    ${metaTags}

    <title>${project.title} - Abdelmonem Hatem Portfolio</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`;
  
  // Write the file
  const filePath = path.join(projectDir, `${project.id}.html`);
  fs.writeFileSync(filePath, projectHTML);
  console.log(`Generated: ${filePath}`);
});

console.log('Static project pages generated successfully!'); 