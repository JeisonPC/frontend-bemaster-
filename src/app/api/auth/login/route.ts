import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { redirect } from 'next/navigation'


export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json(
      { message: "Method Not Allowed" },
      { status: 405 }
    );
  }

  const data = await req.json();
  if (!data || !data.email || !data.password) {
    return NextResponse.json({ message: "Missing email or password" }, { status: 400 });
  }

  const { email, password } = data;

  try {
    const userFind = await db.user.findUnique({ where: { email } });

    if (!userFind) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    const passwordStr = password.toString();
    const userPasswordStr = userFind.password.toString();

    const emailFind = userFind.email;

    const passwordMatch = await bcrypt.compare(passwordStr, userPasswordStr);

    if (!passwordMatch) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    const token = jwt.sign({ id: userFind.id }, "secret");

    const TokenWithEmail = {
      token,
      email: emailFind
    }

    return NextResponse.json(TokenWithEmail, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }

  redirect(`/dashboard`)
}
