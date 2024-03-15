import { connectToDB } from "@/utils/database";
import  {NextResponse, NextRequest} from "next/server"
import Excuse from "@models/Excuse";

// GET a specific excuse using url param
export async function GET(req: NextRequest, {params}: DBProps) {
    try {
        await connectToDB();
        const excuse = await Excuse.findOne({
            http_code: params.code
        }).populate('http_code');

        if (!excuse) {
            return new Response('Excuse not found', {status: 404})
        }
        return new Response(JSON.stringify(excuse), {status: 200})
    } catch (error) {
        console.log(error);
        return new Response('Failed to fetch the excuse', {status: 500})
        
    }
}