import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { NextResponse } from "next/server";

export async function POST(req) {
  if (req.method === "POST") {
    try {
      const { orderData } = await req.body();
      const WooCommerce = new WooCommerceRestApi({
        url: process.env.PATH_URL,
        consumerKey: process.env.CONSUMER_KEY,
        consumerSecret: process.env.CONSUMER_SECRET,
        version: "wc/v3",
        queryStringAuth: true,
        axiosConfig: {
          headers: {},
        },
      });

      const response = await WooCommerce.post("orders", orderData);
      console.log('log respone', response)
      if (response && response.data) {
        const createdOrder = response.data;
        return NextResponse.json({ success: true, order: createdOrder }, { status: 200 });
      } else {
        console.error("Response or response.data is undefined");
        return NextResponse.json({ success: false, error: "Invalid response" }, { status: 500 });
      }
    } catch (error) {
      console.error("Error creating order01111:", error.response);
      return NextResponse.json({ success: false, error: error.response }, { status: 500 });
    }
  } else {
    return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
  }
}
