import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, age } = await request.json();

  console.log(name, age);

  return NextResponse.json({
    status: 200,
    message: `Hello, ${name}! You are ${age} years old.`,
  });
}
