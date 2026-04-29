import Category from "../models/Category.js";

const DEFAULT_CATEGORIES = [
  // WhitePaper categories
  { name: "Development", type: "whitepaper", isDefault: true },
  { name: "Design", type: "whitepaper", isDefault: true },
  { name: "Strategy", type: "whitepaper", isDefault: true },
  { name: "Technology", type: "whitepaper", isDefault: true },

  // Blog categories
  { name: "Engineering", type: "blog", isDefault: true },
  { name: "AI & SaaS", type: "blog", isDefault: true },
  { name: "Humanities", type: "blog", isDefault: true },
  { name: "Design Systems", type: "blog", isDefault: true },
  { name: "Microservice", type: "blog", isDefault: true },
];

export const seedCategories = async () => {
  try {
    for (const cat of DEFAULT_CATEGORIES) {
      await Category.findOneAndUpdate(
        { name: cat.name, type: cat.type }, // find by name+type
        { $setOnInsert: cat }, // only insert if not exists
        { upsert: true, new: true },
      );
    }
    console.log("[DB] ✅ Default categories seeded successfully");
  } catch (error) {
    console.error("[DB] ❌ Category seeding failed:", error.message);
  }
};
