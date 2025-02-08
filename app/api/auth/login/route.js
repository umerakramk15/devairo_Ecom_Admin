import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const users = [
  {
    id: 1,
    name: "admin",
    email: "admin@devairo.com",
    password: "admin123",
  },
];

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const user = users.find((u) => u.email === email);

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    if (user.password !== password) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Generate JWT Token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECREAT, {
      expiresIn: "1h",
    });

    return NextResponse.json({ token }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error Login" }, { status: 500 });
  }
}
