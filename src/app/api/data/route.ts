import { getData } from "@/lib/getData"

export async function GET() {

    const data = await getData();
   
    return Response.json({ data })
  }
