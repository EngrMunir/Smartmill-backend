import express from 'express';
import { AuthController } from './auth.controller';
import auth from '../../middlewares/auth';
import { UserRole } from '../../../../generated/prisma';

const router = express.Router();

router.post(
    '/login',
    AuthController.loginUser
);
router.post(
    '/register',
    AuthController.registerUser
);
router.post(
    '/refresh-token',
    AuthController.refreshToken
);

router.post(
    '/change-password',
    auth(UserRole.ADMIN, UserRole.MANAGER, UserRole.MILLER ),
    AuthController.changePassword
);

router.post(
    '/forgot-password',
    AuthController.forgotPassword
)

export const AuthRoutes = router;