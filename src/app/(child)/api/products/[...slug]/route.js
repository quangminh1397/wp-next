import { NextRequest, NextResponse } from "next/server";
import { productsApi } from "@/app/api/productsApi";


export async function GET(request,{ params }) {
  try {
    const result = await productsApi.get(`products?slug=${params.slug}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return NextResponse.json(result.data[0]);
  } catch (error) {
    console.error("Error while fetching data:", error);
    return NextResponse.error("Internal Server Error", 500);
  }
}
