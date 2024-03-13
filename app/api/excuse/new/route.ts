import { connectToDB } from "@/utils/database";
import  {NextResponse, NextRequest} from "next/server"
import Excuse from "@models/Excuse";

export async function POST(req: NextRequest, res: NextResponse) {
    const {http_code, tag, message} = await req.json();
   
    try {
        await connectToDB();
        
        const newExcuse = new Excuse({
            http_code,
            tag,
            message,
        })
        
        
        await newExcuse.save();
        console.log(newExcuse);
        
        return new Response(JSON.stringify(newExcuse), {status: 201})
    } catch (error) {
        console.log(error);
        return new Response('Failed to create a new message', {status: 500})
          // if http_code already exists
    // if (err.code === 11000 && err.keyPattern.http_code) {
    //     res.status(409).send({
    //       message: 'this http_code already exists'
    //     })
    //   }
    //   // if message already exists
    //   else if (err.code === 11000 && err.keyPattern.message) {
    //     res.status(409).send({
    //       message: 'this message already exists'
    //     })
    //   } else {
    //     res.status(500).send(err)
    //   }
    }
}