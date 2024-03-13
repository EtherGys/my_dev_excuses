import { connectToDB } from "@/utils/database";
import  {NextResponse, NextRequest} from "next/server"
import Excuse from "@models/Excuse";


export async function GET(req: NextRequest) {

 
    
    try {
        await connectToDB();
        const excuse = await Excuse.find({}).populate('message');

        return new Response(JSON.stringify(excuse), {status: 200})
    } catch (error) {
        console.log(error);
        return new Response('Failed to fetch all recipes', {status: 500})
          // if http_code already exists
    // if (err.code === 11000 && err.keyPattern.http_code) {
    //     res.status(409).send({
    //       message: 'this http_code already exists'
    //     })
    //   }
    //   if message already exists
    //   else if (err.code === 11000 && err.keyPattern.message) {
    //     res.status(409).send({
    //       message: 'this message already exists'
    //     })
    //   } else {
    //     res.status(500).send(err)
    //   }
    }
}