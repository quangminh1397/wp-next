import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export const productsApi = new WooCommerceRestApi({
  url: "http://demo01-woo.local.vn",
  consumerKey: "ck_56e0860e9f6be3a37b027a2236ff11b6ad43df4d",
  consumerSecret: "cs_e57f39e802d72d3a120dc2e1ef2053eda4d361c4",
  version: "wc/v3",
  queryStringAuth: true,
  axiosConfig: {
    headers: {},
  },
});
