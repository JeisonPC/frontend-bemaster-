import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  const data = await req.json();

  try {
    const userFind = await db.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (userFind) {
      return NextResponse.json(
        { message: "El usuario ya existe" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const newUser = await db.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(newUser);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        { status: 500 }
      );
    } else {
      // Manejo de caso en el que el error no es una instancia de Error
      return NextResponse.json(
        {
          message: "Ocurrió un error desconocido.",
        },
        { status: 500 }
      );
    }
  }
}
