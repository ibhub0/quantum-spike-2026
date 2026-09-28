import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!data.authorName || !data.email || !data.title || !data.abstractText) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const submissionId = "QS26-" + Math.random().toString(36).substring(2, 8).toUpperCase();
    const entry = {
      id: submissionId,
      ...data,
      receivedAt: new Date().toISOString(),
    };

    // Store in a local JSON storage file for data collection
    try {
      const storageDir = path.join(process.cwd(), "data");
      if (!fs.existsSync(storageDir)) {
        fs.mkdirSync(storageDir, { recursive: true });
      }
      const storageFile = path.join(storageDir, "submissions.json");
      let existing: any[] = [];
      if (fs.existsSync(storageFile)) {
        try {
          existing = JSON.parse(fs.readFileSync(storageFile, "utf-8"));
        } catch {
          existing = [];
        }
      }
      existing.push(entry);
      fs.writeFileSync(storageFile, JSON.stringify(existing, null, 2), "utf-8");
    } catch (e) {
      console.warn("Storage write notice:", e);
    }

    return NextResponse.json({
      success: true,
      submissionId,
      message: "Abstract successfully registered.",
      data: entry,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server processing error." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const storageFile = path.join(process.cwd(), "data", "submissions.json");
    if (fs.existsSync(storageFile)) {
      const data = JSON.parse(fs.readFileSync(storageFile, "utf-8"));
      return NextResponse.json({ count: data.length, submissions: data });
    }
    return NextResponse.json({ count: 0, submissions: [] });
  } catch {
    return NextResponse.json({ count: 0, submissions: [] });
  }
}
