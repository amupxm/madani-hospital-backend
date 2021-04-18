import { Router } from 'express';
import Patient from '../../class/patient';
import MainClass from '../../class/nutrition';
const router = Router();

router.post('/', async (req, res, next) => {
	try {
		const { patient_id } = req.body;
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const isValidPatient = await new Patient().validate(patient_id);
		const responseUserId = await new MainClass().insert(req.body);
		res.json({
			ok: true,
			id: responseUserId,
		});
	} catch (err) {
		next(new Error('invalid structure '));
	}
});

router.get('/', (req, res, next) => {
	next(new Error('invalid route'));
});

router.get('/:patient_id', async (req, res, next) => {
	try {
		const { patient_id } = req.params;
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const isValidPatient = await new Patient().validate(Number(patient_id));
		const response = await new MainClass().getAll(Number(patient_id));
		res.json({
			ok: true,
			data: response,
		});
	} catch (err) {
		next(new Error('invalid structure'));
	}
});

export default router;
