import { connectToDB } from "@/utils/database";
import  {NextResponse, NextRequest} from "next/server"
import Excuse from "@models/Excuse";

export async function POST(req: NextRequest, res: NextResponse) {
    const {http_code, tag, message} = await req.json();
   
    try {
        await connectToDB();
        // const user = await User.findOne({id: userId})
        // const currentDate = new Date();
        
        const newExcuse = new Excuse({
            http_code,
            tag,
            message,
        })
        console.log(newExcuse);
        
        await newExcuse.save();
        
        return new Response(JSON.stringify(newExcuse), {status: 201})
    } catch (error) {
        console.log(error);
        return new Response('Failed to create a new message', {status: 500})
        
    }
}