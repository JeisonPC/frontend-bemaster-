import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { cid: string } }
) {
  const cid = params.cid
  // Assuming you have an array of categories
  const categories = [
    { id: "1", name: "Category 1" },
    { id: "2", name: "Category 2" },
    { id: "3", name: "Category 3" },
    { id: "4", name: "Category 4" },
    { id: "5", name: "Category 5" },
  ];
  // Find the category with the specified id
  const category = categories.find((cat) => cat.id == cid);
  if (category) {
    return NextResponse.json({ category });
  } else {
    return NextResponse.json({ error: "Category not found" }, { status: 404 });
  }
}
