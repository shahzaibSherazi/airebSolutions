/**
 * MongoDB Migration: Fix White Paper PDF URLs
 *
 * PROBLEM:
 * Old records contain full URLs like: http://localhost:5050/pdfs/file.pdf
 * These break in production where domain is different
 *
 * SOLUTION:
 * Extract relative paths and store only: /pdfs/file.pdf
 * Full URLs will be constructed dynamically on API calls using req context
 *
 * USAGE:
 * node scripts/migrations/fixWhitePaperUrls.js
 *
 * SAFETY:
 * - Creates a backup collection before modifying data
 * - Only updates records with full URLs
 * - Logs all changes for audit trail
 */

import mongoose from "mongoose";
import dotenv from "dotenv";
import { extractRelativePath } from "../../utils/filePathSanitizer.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/aireb";

async function migrateWhitePaperUrls() {
  let connection = null;

  try {
    console.log("🔄 Starting White Paper URL migration...\n");

    // Connect to MongoDB
    connection = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = connection.connection.db;
    const whitePaperCollection = db.collection("whitepapers");

    // Step 1: Create backup collection
    console.log("📦 Creating backup of original data...");
    const backupCollectionName = `whitepapers_backup_${Date.now()}`;

    // Check if collection exists
    const collections = await db.listCollections().toArray();
    const collectionNames = collections.map((c) => c.name);

    if (
      collectionNames.includes("whitepapers") &&
      !collectionNames.includes(backupCollectionName)
    ) {
      const allDocs = await whitePaperCollection.find({}).toArray();
      if (allDocs.length > 0) {
        await db.createCollection(backupCollectionName);
        const backupCollection = db.collection(backupCollectionName);
        await backupCollection.insertMany(allDocs);
        console.log(
          `✅ Backup created: ${backupCollectionName} (${allDocs.length} documents)\n`,
        );
      }
    }

    // Step 2: Find all records with full URLs
    console.log("🔍 Scanning for records with full URLs...");
    const recordsWithFullUrls = await whitePaperCollection
      .find({
        pdfUrl: {
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
      `Found ${recordsWithFullUrls.length} record(s) with full URLs\n`,
    );

    // Step 3: Migrate each record
    console.log("🔧 Migrating URLs to relative paths...\n");
    let successCount = 0;
    let errorCount = 0;

    for (const record of recordsWithFullUrls) {
      try {
        const oldUrl = record.pdfUrl;
        const newUrl = extractRelativePath(oldUrl);

        if (!newUrl) {
          console.log(
            `❌ Failed to extract path from: ${oldUrl} (ID: ${record._id})`,
          );
          errorCount++;
          continue;
        }

        // Update record
        await whitePaperCollection.updateOne(
          { _id: record._id },
          { $set: { pdfUrl: newUrl } },
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

    // Step 4: Summary
    console.log("\n" + "=".repeat(60));
    console.log("📊 MIGRATION SUMMARY");
    console.log("=".repeat(60));
    console.log(`✅ Successfully migrated: ${successCount}`);
    console.log(`❌ Errors: ${errorCount}`);
    console.log(`📦 Backup collection: ${backupCollectionName}`);
    console.log("=".repeat(60) + "\n");

    if (successCount > 0) {
      console.log("🎉 Migration completed successfully!\n");
      console.log("What changed:");
      console.log(
        "- Database now stores ONLY relative paths (e.g., /pdfs/file.pdf)",
      );
      console.log("- Full URLs are constructed dynamically on API calls");
      console.log("- Works across localhost, staging, and production\n");
      console.log(`Backup safely stored in: ${backupCollectionName}`);
      console.log(
        "You can drop this collection after verifying all is working.\n",
      );
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

// Run migration
migrateWhitePaperUrls();
