import { Router } from 'express';

import gordon from '../../model/gordon';

const router = Router();

router.post('/', (req, res, next) => {
	res.json(gordon);
});

export default router;
