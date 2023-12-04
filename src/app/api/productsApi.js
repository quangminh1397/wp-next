import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export const productsApi = new WooCommerceRestApi({
  url: process.env.PATH_URL,
  consumerKey: process.env.CONSUMER_KEY,
  consumerSecret: process.env.CONSUMER_SECRET,
  version: "wc/v3",
  queryStringAuth: true,
  axiosConfig: {
    headers: {},
  },
});
