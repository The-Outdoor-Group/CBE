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

Queries a collection and gets all products in it:

{
  collectionByHandle(handle: "competition-sights") {
    id
    descriptionHtml
    products(first: 100) {
      edges {
        node {
          id
          availableForSale
          title
          handle
          variants(first:20) {
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
              }
            }
          }
        }
      }
    }
  }
}


*/

// descriptionHtml -> put back in ProductFragment but need to fix/sanitize html

const ProductFragment = `
  id
  handle
  title
  tags
  availableForSale
  description
  priceRange {
    minVariantPrice {
      amount
    }
    maxVariantPrice {
      amount
    }
  }
  images(first: 100) {
    edges {
      node {
        id
        altText
        originalSrc
        transformedSrc(maxWidth: 500)
      }
    }
  }
  options(first: 100) {
    id
    name
    values
  }
  variants(first: 100) {
    edges {
      node {
        id
        title
        sku
        availableForSale
        priceV2 {
          amount
        }
        compareAtPriceV2 {
          amount
        }
        image {
          id
          altText
          originalSrc
          transformedSrc(maxWidth: 500)
        }
        selectedOptions {
          name
          value
        }
      }
    }
  }
`;

/*
  Queries a collection by handle:
  This will display product member handles to query by to use above
*/
export const getShopifyCollectionQuery = collectionHandle => {
  return `
    query {
     collectionByHandle(handle: "${collectionHandle}") {
       id
       handle
       title
       description
       image {
         id
         altText
         originalSrc
         transformedSrc(maxWidth: 500)
       }
       products(first: 100) {
         edges {
           node {
             ${ProductFragment}
           }
         }
       }
     }
   }
  `;
  // `
    // query {
    //     collectionByHandle(handle: "${collectionHandle}") {
    //       id
    //       descriptionHtml
    //       products(first: 100) {
    //         edges {
    //           node {
    //             id
    //             availableForSale
    //             title
    //             handle
    //           }
    //         }
    //       }
    //     }
    // }
  // `;
};




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
