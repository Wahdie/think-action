import { login } from './controller/login';
import { logout } from './controller/logout';
import register from './controller/register';
import { authUser } from '../../middleware/authMiddleware/protect';
export default { logout, register, login, authUser };
