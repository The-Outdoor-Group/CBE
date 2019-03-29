// see https://www.npmjs.com/package/shopify-api-node
// reusable function for all store fetches to backend api
import fetch from 'isomorphic-fetch';

const url = 'https://store.custombowequipment.com/api/graphql';

const fetchShopifyStoreApi = (query, arg) => fetch(
  url,
  {
    method: 'post',
    headers: {
      'X-Shopify-Storefront-Access-Token':'37cbbe2c70e4c47dba93e9aa3f28bffc',
      'Content-Type':'application/json',
    },
    body: JSON.stringify({ query: query(arg) })
  })
  .then( (response) => {
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  });

export default fetchShopifyStoreApi;
