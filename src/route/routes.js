import {Home,FloatUpHeader, SpringUpHeader} from '../views'; 

export const routes = [
    {
        key: 'home',
        path: '/',
        exact : true,
        component: Home
    },
    {
        key: 'floatup',
        path: '/headerfloat',
        exact : false,
        component: FloatUpHeader
    },
    {
        key: 'springup',
        path: '/headerspring',
        exact: false,
        component: SpringUpHeader
    }

];