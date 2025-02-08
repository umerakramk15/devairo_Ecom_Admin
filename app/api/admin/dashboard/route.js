import { NextResponse } from "next/server";
import { verifyToken } from "../../auth/verifyToken";

export async function GET(req) {
  const user = verifyToken(req);
  if (!user.id) {
    return NextResponse.json({ message: "Access denied" }, { status: 403 });
  }

  return NextResponse.json(
    { message: "Welcome to Admin Dashboard", user },
    { status: 200 }
  );
}
