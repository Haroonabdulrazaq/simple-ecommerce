import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  let pathname = request.nextUrl.pathname;
  let productId = pathname.split("/").pop();
  const response = await fetch(`https://dummyjson.com/products/${productId}`);
  const data = await response.json();

  return Response.json(data);
}
