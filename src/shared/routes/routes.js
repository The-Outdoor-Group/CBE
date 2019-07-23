import loadable from '@loadable/component';


export const ShopPage = loadable( () => import('./../containers/Shop') );
export const CartPage = loadable( () => import('./../containers/Cart') );
export const WishlistPage = loadable( () => import('./../containers/Wishlist') );

export const CollectionPage = loadable( ({props}) => import('./../containers/Collections') );

// will need to be renamed to ProductPage
export const HomePage = loadable( ({props}) => import('./../containers/Home') );

// will need to be renamed to PurchaseComponent
export const ProductPage = loadable( () => import('./../components/content/store-components/product-display-for-purchase/ProductDisplay') );
