import { Router } from 'express';

import commitmentsRouter from './commitments.routes';

const routes = Router();

routes.use('/commitments', commitmentsRouter);

export default routes;
