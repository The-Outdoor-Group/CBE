import React, { Component } from 'react';
import loadable from '@loadable/component';
import _filter from 'lodash/filter';
import _find from 'lodash/find';
import _isEqual from 'lodash/isEqual';
import _findIndex from 'lodash/findIndex';
import _cloneDeep from 'lodash/cloneDeep';

import './assets/css/product-display.css';

const VariantSelector = loadable( () => import('./child-components/VariantSelector') );
const ProductImage = loadable( () => import('./child-components/ProductImage') );

const product = {
  data: {
    productByHandle: {
      id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzE4NjYyNTYzNTEyOTM=",
      title: "Engage Hybrid",
      productType: "Hunting Sight",
      descriptionHtml: "<ul>\n<li>Dovetail mounting system</li>\n<li>Hybrid elevation adjustment</li>\n<li>2nd and 3rd axis adjustments + quiver attachment</li>\n<li>Quad Track(TM) Design utilizing delrin tracks</li>\n<li>Rapid Drive for fast adjustments</li>\n<li>Laser engraved aluminum sight yardage scales</li>\n<li>Windage micro adjustable with clicks</li>\n<li>Available with a 1-pin, 3-pin, or 5-pin housing</li>\n<li>Micro adjustable pins using the revolve micro pin system</li>\n<li>Available with .010\" or .019\" Blade pins</li>\n<li>Fluorescent peep alignment ring</li>\n<li>Sight light included</li>\n</ul>",
      tags: [
        "axis",
        "dovetail",
        "drive",
        "fluorescent",
        "hunting",
        "hybrid",
        "laser",
        "light",
        "micro",
        "pin",
        "quad",
        "rapid",
        "track",
        "windage"
      ],
      vendor: "Custom Bow Equipment",
      options: [
        {
          name: "Pin Count",
          values: [
            "1",
            "3",
            "5"
          ]
        },
        {
          name: "Hand",
          values: [
            "Right",
            "Left"
          ]
        },
        {
          name: "Pin Size",
          values: [
            "0.01",
            "0.019"
          ]
        }
      ],
      variants: {
        edges: [
          {
            node: {
              id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xNDEwNjEzNzg4Njc4MQ==",
              availableForSale: true,
              compareAtPriceV2: null,
              image: {
                transformedSrc: "https://cdn.shopify.com/s/files/1/1537/5509/products/CBE_engagehybrid_1pin-1_4f12d01e-437e-4d83-9f91-2f3fe415843b_1200x.png?v=1554389600"
              },
              selectedOptions: [
                {
                  name: "Pin Count",
                  value: "1"
                },
                {
                  name: "Hand",
                  value: "Right"
                },
                {
                  name: "Pin Size",
                  value: "0.01"
                }
              ],
              priceV2: {
                amount: "309.99"
              },
              sku: "CBE-ENH-1-RH-10",
              title: "1 / Right / 0.01"
            }
          },
          {
            node: {
              id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xNDEwNjEzNzkxOTU0OQ==",
              availableForSale: true,
              compareAtPriceV2: null,
              image: {
                transformedSrc: "https://cdn.shopify.com/s/files/1/1537/5509/products/CBE_engagehybrid_1pin-1_4f12d01e-437e-4d83-9f91-2f3fe415843b_1200x.png?v=1554389600"
              },
              selectedOptions: [
                {
                  name: "Pin Count",
                  value: "1"
                },
                {
                  name: "Hand",
                  value: "Right"
                },
                {
                  name: "Pin Size",
                  value: "0.019"
                }
              ],
              priceV2: {
                amount: "309.99"
              },
              sku: "CBE-ENH-1-RH-19",
              title: "1 / Right / 0.019"
            }
          },
          {
            node: {
              id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xNDEwNjEzNzk1MjMxNw==",
              availableForSale: true,
              compareAtPriceV2: null,
              image: {
                transformedSrc: "https://cdn.shopify.com/s/files/1/1537/5509/products/CBE_engagehybrid_1pin-1_4f12d01e-437e-4d83-9f91-2f3fe415843b_1200x.png?v=1554389600"
              },
              selectedOptions: [
                {
                  name: "Pin Count",
                  value: "1"
                },
                {
                  name: "Hand",
                  value: "Left"
                },
                {
                  name: "Pin Size",
                  value: "0.01"
                }
              ],
              priceV2: {
                amount: "309.99"
              },
              sku: "CBE-ENH-1-LH-10",
              title: "1 / Left / 0.01"
            }
          },
          {
            node: {
              id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xNDEwNjEzNzk4NTA4NQ==",
              availableForSale: true,
              compareAtPriceV2: null,
              image: {
                transformedSrc: "https://cdn.shopify.com/s/files/1/1537/5509/products/CBE_engagehybrid_1pin-1_4f12d01e-437e-4d83-9f91-2f3fe415843b_1200x.png?v=1554389600"
              },
              selectedOptions: [
                {
                  name: "Pin Count",
                  value: "1"
                },
                {
                  name: "Hand",
                  value: "Left"
                },
                {
                  name: "Pin Size",
                  value: "0.019"
                }
              ],
              priceV2: {
                amount: "309.99"
              },
              sku: "CBE-ENH-1-LH-19",
              title: "1 / Left / 0.019"
            }
          },
          {
            node: {
              id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xNDEwNjEzODAxNzg1Mw==",
              availableForSale: true,
              compareAtPriceV2: null,
              image: {
                transformedSrc: "https://cdn.shopify.com/s/files/1/1537/5509/products/CBE_engagehybrid_3pin-1_81f05cc5-c4d3-43e5-9927-0141bd072cbe_1200x.png?v=1554389600"
              },
              selectedOptions: [
                {
                  name: "Pin Count",
                  value: "3"
                },
                {
                  name: "Hand",
                  value: "Right"
                },
                {
                  name: "Pin Size",
                  value: "0.01"
                }
              ],
              priceV2: {
                amount: "319.99"
              },
              sku: "CBE-ENH-3-RH-10",
              title: "3 / Right / 0.01"
            }
          },
          {
            node: {
              id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xNDEwNjEzODA1MDYyMQ==",
              availableForSale: true,
              compareAtPriceV2: null,
              image: {
                transformedSrc: "https://cdn.shopify.com/s/files/1/1537/5509/products/CBE_engagehybrid_3pin-1_81f05cc5-c4d3-43e5-9927-0141bd072cbe_1200x.png?v=1554389600"
              },
              selectedOptions: [
                {
                  name: "Pin Count",
                  value: "3"
                },
                {
                  name: "Hand",
                  value: "Right"
                },
                {
                  name: "Pin Size",
                  value: "0.019"
                }
              ],
              priceV2: {
                amount: "319.99"
              },
              sku: "CBE-ENH-3-RH-19",
              title: "3 / Right / 0.019"
            }
          },
          {
            node: {
              id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xNDEwNjEzODA4MzM4OQ==",
              availableForSale: true,
              compareAtPriceV2: null,
              image: {
                transformedSrc: "https://cdn.shopify.com/s/files/1/1537/5509/products/CBE_engagehybrid_3pin-1_81f05cc5-c4d3-43e5-9927-0141bd072cbe_1200x.png?v=1554389600"
              },
              selectedOptions: [
                {
                  name: "Pin Count",
                  value: "3"
                },
                {
                  name: "Hand",
                  value: "Left"
                },
                {
                  name: "Pin Size",
                  value: "0.01"
                }
              ],
              priceV2: {
                amount: "319.99"
              },
              sku: "CBE-ENH-3-LH-10",
              title: "3 / Left / 0.01"
            }
          },
          {
            node: {
              id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xNDEwNjEzODExNjE1Nw==",
              availableForSale: true,
              compareAtPriceV2: null,
              image: {
                transformedSrc: "https://cdn.shopify.com/s/files/1/1537/5509/products/CBE_engagehybrid_3pin-1_81f05cc5-c4d3-43e5-9927-0141bd072cbe_1200x.png?v=1554389600"
              },
              selectedOptions: [
                {
                  name: "Pin Count",
                  value: "3"
                },
                {
                  name: "Hand",
                  value: "Left"
                },
                {
                  name: "Pin Size",
                  value: "0.019"
                }
              ],
              priceV2: {
                amount: "319.99"
              },
              sku: "CBE-ENH-3-LH-19",
              title: "3 / Left / 0.019"
            }
          },
          {
            node: {
              id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xNDEwNjEzODE0ODkyNQ==",
              availableForSale: true,
              compareAtPriceV2: null,
              image: {
                transformedSrc: "https://cdn.shopify.com/s/files/1/1537/5509/products/CBE_engagehybrid_5pin-1_d3f781ec-f7ee-4348-8d60-6a3f8f98b625_1200x.png?v=1554389600"
              },
              selectedOptions: [
                {
                  name: "Pin Count",
                  value: "5"
                },
                {
                  name: "Hand",
                  value: "Right"
                },
                {
                  name: "Pin Size",
                  value: "0.01"
                }
              ],
              priceV2: {
                amount: "329.99"
              },
              sku: "CBE-ENH-5-RH-10",
              title: "5 / Right / 0.01"
            }
          },
          {
            node: {
              id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xNDEwNjEzODE4MTY5Mw==",
              availableForSale: true,
              compareAtPriceV2: null,
              image: {
                transformedSrc: "https://cdn.shopify.com/s/files/1/1537/5509/products/CBE_engagehybrid_5pin-1_d3f781ec-f7ee-4348-8d60-6a3f8f98b625_1200x.png?v=1554389600"
              },
              selectedOptions: [
                {
                  name: "Pin Count",
                  value: "5"
                },
                {
                  name: "Hand",
                  value: "Right"
                },
                {
                  name: "Pin Size",
                  value: "0.019"
                }
              ],
              priceV2: {
                amount: "329.99"
              },
              sku: "CBE-ENH-5-RH-19",
              title: "5 / Right / 0.019"
            }
          },
          {
            node: {
              id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xNDEwNjEzODIxNDQ2MQ==",
              availableForSale: true,
              compareAtPriceV2: null,
              image: {
                transformedSrc: "https://cdn.shopify.com/s/files/1/1537/5509/products/CBE_engagehybrid_5pin-1_d3f781ec-f7ee-4348-8d60-6a3f8f98b625_1200x.png?v=1554389600"
              },
              selectedOptions: [
                {
                  name: "Pin Count",
                  value: "5"
                },
                {
                  name: "Hand",
                  value: "Left"
                },
                {
                  name: "Pin Size",
                  value: "0.01"
                }
              ],
              priceV2: {
                amount: "329.99"
              },
              sku: "CBE-ENH-5-LH-10",
              title: "5 / Left / 0.01"
            }
          },
          {
            node: {
              id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xNDEwNjEzODI0NzIyOQ==",
              availableForSale: true,
              compareAtPriceV2: null,
              image: {
                transformedSrc: "https://cdn.shopify.com/s/files/1/1537/5509/products/CBE_engagehybrid_5pin-1_d3f781ec-f7ee-4348-8d60-6a3f8f98b625_1200x.png?v=1554389600"
              },
              selectedOptions: [
                {
                  name: "Pin Count",
                  value: "5"
                },
                {
                  name: "Hand",
                  value: "Left"
                },
                {
                  name: "Pin Size",
                  value: "0.019"
                }
              ],
              priceV2: {
                amount: "329.99"
              },
              sku: "CBE-ENH-5-LH-19",
              title: "5 / Left / 0.019"
            }
          }
        ]
      }
    }
  }
}

class ProductDisplay extends Component {
  constructor() {
    super();

    this.handleShowHiRes = this.handleShowHiRes.bind(this);
    this.handleValueClick = this.handleValueClick.bind(this);
    this.locateMatchingVariant = this.locateMatchingVariant.bind(this);

    this.state = {
      // should grab to the selectedOptions of the first node in the variants
      selectedOptions: [
        {
          name: "Pin Count",
          value: "1"
        },
        {
          name: "Hand",
          value: "Right"
        },
        {
          name: "Pin Size",
          value: "0.01"
        }
      ],
      selectedVariant: product.data.productByHandle.variants.edges[0] // first variant of product; need to handle if availableForSale: false
    }
  }

  handleShowHiRes(img) {
    console.log(`In Parent, activate the modal with the high res img: ${img.src}`);
  }

  handleValueClick(option) {
    const { name } = option;
    const selectedOptionsCopy = _cloneDeep(this.state.selectedOptions);
    const index = _findIndex( selectedOptionsCopy, (option) => option.name === name );

    selectedOptionsCopy.splice(index, 1, option);

    this.setState({ selectedOptions: selectedOptionsCopy }, () => this.locateMatchingVariant() ) //, () => console.log('this.state.selectedOptions after setting: ', this.state.selectedOptions)

  }

  locateMatchingVariant() {
    const selectedVariant = _find(product.data.productByHandle.variants.edges, (edge) => _isEqual(edge.node.selectedOptions, this.state.selectedOptions) ? edge.node.selectedOptions : null );
    // console.log('matching variant: ', selectedVariant);
    this.setState({ selectedVariant });
  }

  render() {

    // console.log('this.state: ', this.state);

    const { title, descriptionHtml, options, } = product.data.productByHandle;
    const { edges } = product.data.productByHandle.variants;

    const productImageNodes = () => edges.map( (edge, i) => <ProductImage key={i} src={edge.node.image.transformedSrc} productDetail={edge.node.selectedOptions} title={title} showHiRes={this.handleShowHiRes} />)

    const descriptionNode = () => {
      return {__html: descriptionHtml }
    }

    return (
      <article className="product-display">

        <div> {/* right column of text data */}

          <div className="product-purchase-wrapper"> {/* top product title, price, quantity want to buy, add to cart button  */}
            <header>
              <h1>{ title }</h1>
            </header>

            <p className="price">${this.state.selectedVariant.node.priceV2.amount}</p> {/* will need to be a value from a function of choices from options */}

            <VariantSelector options={options} valueClick={this.handleValueClick} />

            <button>Add To Cart</button>
          </div>

          <div className="product-description"> {/* product description */}
           <header>
             <h2>Description</h2>
           </header>
           <div dangerouslySetInnerHTML={descriptionNode()} />
          </div>

        </div>


        {/*
          - left column of pics; will need ability to view larger image onclick
          - should bring up a slider modal with prev and next
        */}
        <ul className="product-gallery-wrapper">
          { productImageNodes() }
        </ul>

      </article>
    );
  }
}

export default ProductDisplay;

/*
  - will need to read the props coming in, if shirt, needs a size picker component
  - will need a color picker for variant
  - will need a quantity - num +

  Product Variants:
    Sight:
      - hand orientation
      - pin size
      - pin count (some have)
      - color (some have)

    Stabilizers:
      - length (some have)

    Quivers:
      - no variants

  Apparel Variants:
    Hoodie/shirt:
      - size

    Hats:
      - no variants

  Accessories Variants:
   - no variants

*/
