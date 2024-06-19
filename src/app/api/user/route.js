import { connectDB } from "@/lib/database";

export  async function GET(request) {

   try {
    await connectDB();
   } catch (error) {
    
   }
    return new Response("Hello World");
}