import db, { healthpromotion } from '../database/postgres';
import { Healthpromotion_InsertParameters } from '../__generated__/healthpromotion';

export default class Patient {
	async insert(data: Healthpromotion_InsertParameters): Promise<number> {
		const response = await healthpromotion(db).insert(data);
		return response[0].id;
	}
	async getAll(
		patient_id: number,
	): Promise<Healthpromotion_InsertParameters[]> {
		const response = await healthpromotion(db).find({ patient_id });
		return response.all();
	}
}
