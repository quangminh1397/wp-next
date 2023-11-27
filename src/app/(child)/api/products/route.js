

import { productsApi } from "@/app/api/productsApi";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await productsApi.get("products", {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = result.data;

    return NextResponse.json({ data });
  } catch (error) {
    console.error("Error while fetching data:", error);
    return NextResponse.error("Internal Server Error", 500);
  }
}
