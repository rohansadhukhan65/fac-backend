import { Router } from 'express';
import { getVersion } from '../controllers/testController';
const routes = Router();
routes.get('/version', getVersion);
export default routes;
