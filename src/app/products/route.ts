export async function GET() {
  const response = await fetch("https://dummyjson.com/products?limit=12", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  return Response.json(data);
}
