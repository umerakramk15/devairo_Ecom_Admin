import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req) {
  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];
    const secret = process.env.JWT_SECREAT; 

    if (!secret) {
      return NextResponse.json(
        { error: "Server error: Missing secret" },
        { status: 500 }
      );
    }

    const decoded = jwt.verify(token, secret);
    return NextResponse.json(
      { user: decoded, message: "Authenticated" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Invalid token" }, { status: 403 });
  }
}
