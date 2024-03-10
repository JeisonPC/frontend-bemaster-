import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json({
    content: [
      { id: 1, name: "Content 1", description: "Description 1"},
      { id: 2, name: "Content 2", description: "Description 2"},
      { id: 3, name: "Content 3", description: "Description 3"},
      { id: 4, name: "Content 4", description: "Description 4"},
      { id: 5, name: "Content 5", description: "Description 5"}
    ]
  });
}
