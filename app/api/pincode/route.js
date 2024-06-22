// app/api/hello/route.js
export async function GET(request) {
  return new Response(JSON.stringify([121001, 800005]), {
    headers: { "Content-Type": "application/json" },
  });
}
