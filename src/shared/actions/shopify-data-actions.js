export const GET_SHOPIFY_COLLECTION_REQUESTED = 'GET_SHOPIFY_COLLECTION_REQUESTED';
export const GET_SHOPIFY_COLLECTION_SUCCEEDED = 'GET_SHOPIFY_COLLECTION_SUCCEEDED';
export const GET_SHOPIFY_COLLECTION_FAILED = 'GET_SHOPIFY_COLLECTION_FAILED';

export const GET_SHOPIFY_PRODUCT_REQUESTED = 'GET_SHOPIFY_PRODUCT_REQUESTED';
export const GET_SHOPIFY_PRODUCT_SUCCEEDED = 'GET_SHOPIFY_PRODUCT_SUCCEEDED';
export const GET_SHOPIFY_PRODUCT_FAILED = 'GET_SHOPIFY_PRODUCT_FAILED';


export const getShopifyCollection = payload => {
  const { url } = payload;

  return {
    type: GET_SHOPIFY_COLLECTION_REQUESTED,
    payload: url.replace(/^\/+/, '')
  };
};

export const getShopifyProduct = payload => {
  console.log('getShopifyProduct payload: ', payload);

  return {
    type: GET_SHOPIFY_PRODUCT_REQUESTED,
    payload
  };
};
