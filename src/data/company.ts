// Centralized company information — update these values to reflect real KUSH contacts.
// Used across Contact, Footer, and social CTAs.

export const companyInfo = {
  name: "KUSH",
  tagline: "Build. Automate. Scale.",
  description:
    "KUSH is a modern AI & Software Studio focused on building scalable digital systems, automation workflows, websites, and AI-powered solutions for businesses and startups.",

  // Replace placeholders with real contact details when ready.
  whatsapp: "+251900000000",
  telegram: "kushstudio",
  email: "contact@kushstudio.dev",
  linkedin: "linkedin.com/company/kushstudio",
  github: "github.com/kushstudio",
  facebook: "facebook.com/kushstudio",
} as const;

export const contactLinks = {
  whatsapp: `https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, "")}`,
  telegram: `https://t.me/${companyInfo.telegram}`,
  email: `mailto:${companyInfo.email}`,
  linkedin: `https://${companyInfo.linkedin}`,
  github: `https://${companyInfo.github}`,
  facebook: `https://${companyInfo.facebook}`,
} as const;
