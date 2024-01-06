import { NextResponse } from 'next/server'

import config from "@/app/config";

export async function GET() {
    const { id } = req.query;
    
  try {
    const requestOptions = {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`
      },
    };
  
    const response = await fetch(`${config.apiUrl}/api/products/${id}?populate=*`, requestOptions);
    const responseData = await response.json()
  
    return NextResponse.json (responseData)
  }
  catch (error) {console.log ("api route error:", error)}
};