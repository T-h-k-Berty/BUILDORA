
export type Project = {
  slug: string;
  name: string;
  category: "Residential" | "Commercial" | "Renovation";
  location: string;
  year: string;
  scope: string;
  summary: string;
  description: string;
  image: string;
  services: string[];
  conceptNote: string;
};

export const projects: Project[] = [
  {
    slug: "courtyard-house",
    name: "The Courtyard House",
    category: "Residential",
    location: "Concept Project",
    year: "2026",
    scope: "Residential Architecture",
    summary:
      "A calm, light-filled home shaped around openness, material and everyday living.",
    description:
      "The Courtyard House explores the relationship between indoor and outdoor living. Natural materials, generous glazing and a restrained palette form the foundation of this residential design concept.",
    image: "/images/projects/courtyard-house.jpg",
    services: [
      "Residential planning concept",
      "Architectural design exploration",
      "Material and finish direction",
    ],
    conceptNote:
      "This is an original portfolio presentation concept, not a verified construction project.",
  },
  {
    slug: "modern-residence",
    name: "The Modern Residence",
    category: "Residential",
    location: "Concept Project",
    year: "2026",
    scope: "Residential Design",
    summary:
      "A contemporary residence focused on natural light, proportion and comfort.",
    description:
      "The Modern Residence investigates how circulation, daylight and material contrast can contribute to a contemporary residential environment. Its visual direction prioritises simplicity and practical living.",
    image: "/images/projects/modern-residence.jpg",
    services: [
      "Residential concept development",
      "Spatial planning exploration",
      "Interior material direction",
    ],
    conceptNote:
      "This is a portfolio concept. The imagery is illustrative and does not document BUILDORA construction work.",
  },
  {
    slug: "concrete-retreat",
    name: "The Concrete Retreat",
    category: "Renovation",
    location: "Concept Project",
    year: "2026",
    scope: "Architectural Concept",
    summary:
      "A study in texture, natural light and the contrast between concrete and timber.",
    description:
      "The Concrete Retreat presents an architectural mood built around tactile finishes, clean geometry and carefully framed views. It demonstrates the visual direction of a potential renovation or residential design project.",
    image: "/images/projects/concrete-retreat.jpg",
    services: [
      "Material palette exploration",
      "Architectural visual direction",
      "Renovation concept planning",
    ],
    conceptNote:
      "This is a visual design concept, not a claim of completed renovation work.",
  },
];
