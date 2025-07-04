import express from 'express';
import { MillRoutes } from '../modules/Mill/mill.route';
import { UserRoutes } from '../modules/User/user.route';

const router = express.Router();

const moduleRoutes =[
    {
        path:'/mills',
        route: MillRoutes
    },
    {
        path:'/users',
        route:UserRoutes
    }
];

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router;