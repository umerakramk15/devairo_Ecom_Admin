import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { email, password, name } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 12);

    // Check if user already exists
    if (users.find((user) => user.email === email)) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    // Store user (Replace with DB logic)
    users.push({
      email,
      password: hashedPassword,
      name,
    });

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Error occurred while processing your request",
    });
  }
}
