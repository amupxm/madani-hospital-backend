import { Router } from 'express';
import Patient from '../../class/patient';
const router = Router();

router.post('/', async (req, res, next) => {
	try {
		const responseUserId = await new Patient().insert(req.body);
		res.json({
			ok: true,
			id: responseUserId,
		});
	} catch (err) {
		next(new Error('invalid structure '));
	}
});

router.get(['/:id', '/'], async (req, res, next) => {
	try {
		let numbericId = Number(req.params.id);
		// zero means select all results
		if (isNaN(numbericId)) numbericId = 0;
		const responseUserId = await new Patient().find(numbericId);
		res.json({
			ok: true,
			patients: responseUserId,
		});
	} catch (err) {
		next(new Error('Invalid id'));
	}
});

router.delete('/:id', async (req, res, next) => {
	try {
		const numbericId = Number(req.params.id);
		const x = await new Patient().delete(numbericId);
		console.log(x);
		res.json({
			ok: true,
		});
	} catch (err) {
		next(new Error('invalid id'));
	}
});

export default router;
