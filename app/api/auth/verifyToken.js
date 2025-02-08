import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECREAT;

export function verifyToken(req) {
  const authHeader = req.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded; // Return the decoded token (contains user info)
  } catch (error) {
    return NextResponse.json(
      { message: "Invalid or expired token" },
      { status: 403 }
    );
  }
}
