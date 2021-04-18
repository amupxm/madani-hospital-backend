import db, { nutrition } from '../database/postgres';
import { Nutrition_InsertParameters } from '../__generated__/nutrition';

export default class Patient {
	async insert(data: Nutrition_InsertParameters): Promise<number> {
		const response = await nutrition(db).insert(data);
		return response[0].id;
	}
	async getAll(patient_id: number): Promise<Nutrition_InsertParameters[]> {
		const response = await nutrition(db).find({ patient_id });
		return response.all();
	}
}
