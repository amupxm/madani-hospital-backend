import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const swaggerDocument = require('./swagger.json');
const router = Router();
router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocument));

export default router;
