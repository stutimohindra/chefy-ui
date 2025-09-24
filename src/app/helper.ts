import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = cookies();
  const token = (await cookieStore).get("session")?.value;
  return Response.json({ token });
}
