import { connectToDB } from "@/utils/database";
import  {NextResponse, NextRequest} from "next/server"
import Excuse from "@models/Excuse";

// Get all excuses from the database
export async function GET(req: NextRequest) {
    
    try {
        await connectToDB();
        const excuse = await Excuse.find({}).populate('message');
        return new Response(JSON.stringify(excuse), {status: 200})
    } catch (error) {
        console.log(error);
        return new Response('Failed to fetch all excuses', {status: 500})
    }
}