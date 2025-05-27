
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';




export async function GET() {
    try{
        const posts = await prisma.post.findMany();
        console.log("✅ conecting to db secsussfuly")
        return NextResponse.json(posts);
    }catch(err){
        console.log("⛔️ an error conecting to database:", err)
        return NextResponse.json({error: `error conecting to database and find posts: ${err}`}, {status: 404})
    }
}




// the expacted req is:
// title: string (requared)
// content: string (requared)
export async function POST(req: NextRequest) {
    try{
        const {title, content}:{title: string, content: string } = await req.json()
        
        if(title.length === 0 && content.length === 0){
            console.log("⛔️ there is not data to post!!!")
            return NextResponse.json({error: "you have sent empty req ! 🙅‍♂️"})
        }
        const posts = await prisma.post.create({
            data: {
                title : "li hwak",
                content: " li hwak ma khala fik walo",
                authorId: 1
            }
        })
        return NextResponse.json({body: "the post is created ✅"}, {status: 201})

    }catch(err){
        console.log("⛔️ error:", err)
    }
}