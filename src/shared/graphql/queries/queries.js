/*

Queries a specific product by handle:

{
  productByHandle(handle: "engage-hybrid") {
    id
    title
    productType
    descriptionHtml
    tags
    vendor
    variants(first: 20) {
      edges {
        node {
          id
          availableForSale
          compareAtPriceV2 {
            amount
            currencyCode
          }
          image {
            transformedSrc(maxWidth: 1200)
          }
          selectedOptions {
            name
            value
          }
          priceV2 {
            amount
          }
          sku
          title
          selectedOptions {
            name
            value
          }
        }
      }
    }
  }
}

*/

/*
  Queries a collection by handle:
  This will display product member handles to query by to use above
  {
  collectionByHandle(handle: "Competition-Sights") {
    id
    descriptionHtml
    products(first: 100) {
      edges {
        node {
          id
          availableForSale
          title
          handle
        }
      }
    }
  }
}

*/


/*
  Queries all collections (first 20):

  {
  collections(first: 20) {
    edges {
      node {
        id
        handle
        title
        descriptionHtml
      }
    }
  }
}

*/
