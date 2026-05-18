/**
 * MongoDB Migration: Fix Blog Image URLs
 *
 * Similar to whitePaperUrls migration, ensures blog images use relative paths
 *
 * USAGE:
 * node scripts/migrations/fixBlogUrls.js
 */

import mongoose from "mongoose";
import dotenv from "dotenv";
import { extractRelativePath } from "../../utils/filePathSanitizer.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/aireb";

async function migrateBlogUrls() {
  let connection = null;

  try {
    console.log("🔄 Starting Blog Image URL migration...\n");

    connection = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = connection.connection.db;
    const blogCollection = db.collection("blogs");

    // Create backup
    console.log("📦 Creating backup of original data...");
    const backupCollectionName = `blogs_backup_${Date.now()}`;

    const collections = await db.listCollections().toArray();
    const collectionNames = collections.map((c) => c.name);

    if (
      collectionNames.includes("blogs") &&
      !collectionNames.includes(backupCollectionName)
    ) {
      const allDocs = await blogCollection.find({}).toArray();
      if (allDocs.length > 0) {
        await db.createCollection(backupCollectionName);
        const backupCollection = db.collection(backupCollectionName);
        await backupCollection.insertMany(allDocs);
        console.log(
          `✅ Backup created: ${backupCollectionName} (${allDocs.length} documents)\n`,
        );
      }
    }

    // Find records with full URLs in image field
    console.log("🔍 Scanning for records with full URLs...");
    const recordsWithFullUrls = await blogCollection
      .find({
        image: {
          $regex: "^http://|^https://",
        },
      })
      .toArray();

    if (recordsWithFullUrls.length === 0) {
      console.log(
        "✨ No records with full URLs found. Database is already clean!\n",
      );
      await connection.disconnect();
      process.exit(0);
    }

    console.log(
      `Found ${recordsWithFullUrls.length} record(s) with full image URLs\n`,
    );

    // Migrate each record
    console.log("🔧 Migrating URLs to relative paths...\n");
    let successCount = 0;
    let errorCount = 0;

    for (const record of recordsWithFullUrls) {
      try {
        const oldUrl = record.image;
        const newUrl = extractRelativePath(oldUrl);

        if (!newUrl) {
          console.log(
            `❌ Failed to extract path from: ${oldUrl} (ID: ${record._id})`,
          );
          errorCount++;
          continue;
        }

        await blogCollection.updateOne(
          { _id: record._id },
          { $set: { image: newUrl } },
        );

        console.log(`✅ Updated: "${record.title}"`);
        console.log(`   Old: ${oldUrl}`);
        console.log(`   New: ${newUrl}\n`);

        successCount++;
      } catch (error) {
        console.log(`❌ Error migrating ${record._id}:`, error.message);
        errorCount++;
      }
    }

    // Summary
    console.log("\n" + "=".repeat(60));
    console.log("📊 MIGRATION SUMMARY");
    console.log("=".repeat(60));
    console.log(`✅ Successfully migrated: ${successCount}`);
    console.log(`❌ Errors: ${errorCount}`);
    console.log(`📦 Backup collection: ${backupCollectionName}`);
    console.log("=".repeat(60) + "\n");

    if (successCount > 0) {
      console.log("🎉 Blog image URLs migrated successfully!\n");
    }

    await connection.disconnect();
    process.exit(successCount > 0 ? 0 : 1);
  } catch (error) {
    console.error("💥 Migration failed:", error);
    if (connection) {
      await connection.disconnect();
    }
    process.exit(1);
  }
}

migrateBlogUrls();
