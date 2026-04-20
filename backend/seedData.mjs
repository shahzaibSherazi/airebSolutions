import mongoose from "mongoose";
import Blog from "./models/Blog.js";
import WhitePaper from "./models/WhitePaper.js";

async function seedData() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/aireb_local_db");
    console.log("Connected to MongoDB");

    // Clear existing data
    await Blog.deleteMany({});
    await WhitePaper.deleteMany({});
    console.log("Cleared existing data");

    // Sample blog data
    const blogs = [
      {
        title: "The Future of AI in Healthcare",
        slug: "the-future-of-ai-in-healthcare",
        category: "AI & SaaS",
        author: "Dr. Sarah Johnson",
        readTime: "8 min read",
        intro:
          "Exploring how artificial intelligence is revolutionizing healthcare delivery and patient outcomes.",
        image: "/uploads/blog/ai-healthcare.jpg",
        imagealt: "AI in healthcare illustration",
        sections: [
          {
            id: "1",
            heading: "Current AI Applications",
            content: [
              {
                type: "p",
                text: "AI is already transforming healthcare through diagnostic assistance, drug discovery, and personalized treatment plans.",
              },
              {
                type: "ul",
                items: [
                  "Medical imaging analysis",
                  "Predictive diagnostics",
                  "Drug discovery acceleration",
                  "Personalized medicine",
                ],
              },
            ],
          },
          {
            id: "2",
            heading: "Future Possibilities",
            content: [
              {
                type: "p",
                text: "The next decade will bring even more sophisticated AI applications in healthcare.",
              },
            ],
          },
        ],
        relatedIds: [2, 3],
        status: "published",
      },
      {
        title: "Building Scalable SaaS Applications",
        slug: "building-scalable-saas-applications",
        category: "Engineering",
        author: "Mike Chen",
        readTime: "6 min read",
        intro:
          "Best practices for architecting and deploying scalable software-as-a-service solutions.",
        image: "/uploads/blog/saas-architecture.jpg",
        imagealt: "SaaS architecture diagram",
        sections: [
          {
            id: "1",
            heading: "Microservices Architecture",
            content: [
              {
                type: "p",
                text: "Breaking down monolithic applications into smaller, manageable services.",
              },
            ],
          },
        ],
        relatedIds: [1, 3],
        status: "published",
      },
      {
        title: "Design Systems for Modern Teams",
        slug: "design-systems-for-modern-teams",
        category: "Design Systems",
        author: "Emma Rodriguez",
        readTime: "5 min read",
        intro:
          "How design systems improve consistency and efficiency in product development.",
        image: "/uploads/blog/design-systems.jpg",
        imagealt: "Design system components",
        sections: [
          {
            id: "1",
            heading: "What is a Design System?",
            content: [
              {
                type: "p",
                text: "A design system is a collection of reusable components, patterns, and guidelines.",
              },
            ],
          },
        ],
        relatedIds: [1, 2],
        status: "published",
      },
    ];

    // Sample white paper data
    const whitePapers = [
      {
        title: "AI Implementation Roadmap for Enterprises",
        slug: "ai-implementation-roadmap-for-enterprises",
        description:
          "A comprehensive guide to successfully implementing AI solutions in enterprise environments.",
        image: "/uploads/whitepapers/ai-roadmap.jpg",
        imageAlt: "AI implementation roadmap",
        pdfUrl: "/pdfs/ai-implementation-roadmap.pdf",
        pdfFileName: "ai-implementation-roadmap.pdf",
        author: "Aireb Solutions Research Team",
        category: "Technology",
        status: "published",
      },
      {
        title: "Cloud Migration Best Practices",
        slug: "cloud-migration-best-practices",
        description:
          "Essential strategies for successful cloud migration projects.",
        image: "/uploads/whitepapers/cloud-migration.jpg",
        imageAlt: "Cloud migration diagram",
        pdfUrl: "/pdfs/cloud-migration-best-practices.pdf",
        pdfFileName: "cloud-migration-best-practices.pdf",
        author: "DevOps Team",
        category: "Development",
        status: "published",
      },
      {
        title: "UX Research Methodology Guide",
        slug: "ux-research-methodology-guide",
        description:
          "Comprehensive guide to user experience research methods and best practices.",
        image: "/uploads/whitepapers/ux-research.jpg",
        imageAlt: "UX research methods",
        pdfUrl: "/pdfs/ux-research-methodology-guide.pdf",
        pdfFileName: "ux-research-methodology-guide.pdf",
        author: "UX Research Department",
        category: "Design",
        status: "published",
      },
    ];

    // Insert data
    const insertedBlogs = await Blog.insertMany(blogs);
    const insertedWhitePapers = await WhitePaper.insertMany(whitePapers);

    console.log(`Successfully seeded ${insertedBlogs.length} blogs`);
    console.log(
      `Successfully seeded ${insertedWhitePapers.length} white papers`,
    );

    // Show sample data
    console.log("\nSample Blog:", {
      title: insertedBlogs[0].title,
      category: insertedBlogs[0].category,
      status: insertedBlogs[0].status,
    });

    console.log("\nSample White Paper:", {
      title: insertedWhitePapers[0].title,
      category: insertedWhitePapers[0].category,
      status: insertedWhitePapers[0].status,
    });
  } catch (error) {
    console.error("Seeding error:", error);
  } finally {
    await mongoose.connection.close();
    console.log("Database connection closed");
  }
}

seedData();
