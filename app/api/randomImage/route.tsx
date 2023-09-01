import { NextResponse } from "next/server"


export async function GET() {

    const res = await fetch("https://randomuser.me/api/");
	let data = await res.json();
    data=data.results[0].picture.large;  
    return NextResponse.json({data})
  }