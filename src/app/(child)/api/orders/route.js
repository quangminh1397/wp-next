import { productsApi } from "@/app/api/productsApi";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const res = await productsApi.post("orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  // console.log("test data,", data);
  return NextResponse.json(data);
}
