import { productsApi } from "@/app/api/productsApi";

export async function POST(req, res) {
  try {
    const orderData = res.body;
    const response = await productsApi.post("orders", orderData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.status;

  } catch (error) {
    console.error("Error creating order:", error.message);

    return response.status;
  }
}
