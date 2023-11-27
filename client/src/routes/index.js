// file này để dễ dàng kiểm soát route có trong hệ thống

// pages
import Table from '../components/Table'


// Layouts
import DefaultLayout from '../components/Layouts/DefaultLayout';

const publicRoutes = [
    {
        path: '/',
        component: Table,
        layout: DefaultLayout,
    },
    
];
const privateRoutes = [
    {
        path: '/admin',
        component: '',
    },
    {
        path: '/personal-trainer',
        component: '',
    },
];

export { publicRoutes, privateRoutes };
