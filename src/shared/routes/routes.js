import loadable from '@loadable/component';

export const HomePage = loadable( () => import('./../containers/App-old') );
export const FooPage = loadable( () => import('./../components/Foo') );
export const BarPage = loadable( () => import('./../components/Bar') );
