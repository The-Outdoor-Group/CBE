import loadable from '@loadable/component';

export const HomePage = loadable( () => import('./../containers/Home') );
export const ShopPage = loadable( () => import('./../containers/Shop') );
export const ProductPage = loadable( () => import('./../components/content/store-components/product-display-for-purchase/ProductDisplay') );
