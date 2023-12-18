
import { NextRequest, NextResponse } from "next/server";
import axios from 'axios';


export async function GET(request,{ params }) {
  try {
    const response = await axios.get(`${process.env.PATH_URL}/wp-json/wp/v2/posts?slug=${params.slug}`);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error while fetching data:", error);
    return NextResponse.error("Internal Server Error", 500);
  }
}

