import loadable from '@loadable/component';

export const HomePage = loadable( () => import('./../containers/Home') );
export const ShopPage = loadable( () => import('./../containers/Shop') );
export const BarPage = loadable( () => import('./../components/Bar') );
