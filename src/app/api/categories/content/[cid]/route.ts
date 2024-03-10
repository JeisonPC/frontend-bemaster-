import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { cid: string } }
) {
  const cid = params.cid
  // Assuming you have an array of categories
  const content = [
    { id: "1", title: "Title 1", description: "Description 1"},
    { id: "2", title: "Title 2", description: "Description 2"},
    { id: "3", title: "Title 3", description: "Description 3"},
    { id: "4", title: "Title 4", description: "Description 4"},
    { id: "5", title: "Title 5", description: "Description 5"},
  ];

  const contentFound = content.find((cat) => cat.id == cid);


  if (contentFound) {
    return NextResponse.json( contentFound );
  } else {
    return NextResponse.json({ error: "content not found" }, { status: 404 });
  }
}
