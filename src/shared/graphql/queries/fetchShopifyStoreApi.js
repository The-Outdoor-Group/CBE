// see https://www.npmjs.com/package/shopify-api-node
// reusable function for all store fetches to backend api
import fetch from 'isomorphic-fetch';

const stageUrl =  'https://custom-bow-equipment-stage.myshopify.com/api/graphql'; // 'https://custom-bow-equipment-stage.myshopify.com/api/2019-07/graphql.json';
const stageAccToken = '2dc49f399cc81d84ebcef185bfc2cffd';

// const prodUrl = 'https://store.custombowequipment.com/api/graphql';
// const prodAccToken = '37cbbe2c70e4c47dba93e9aa3f28bffc';

const fetchShopifyStoreApi = (fn, arg) => (
  fetch(
    stageUrl,
    {
      method: 'post',
      headers: {
        'X-Shopify-Storefront-Access-Token': stageAccToken,
        'Content-Type':'application/json',
      },
      body: JSON.stringify({ query: fn(arg) })
    })
    .then( (response) => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    })
);

export default fetchShopifyStoreApi;
