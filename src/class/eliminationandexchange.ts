import db, { eliminationandexchange } from '../database/postgres';
import { Eliminationandexchange_InsertParameters } from '../__generated__/eliminationandexchange';

export default class Patient {
	async insert(data: Eliminationandexchange_InsertParameters): Promise<number> {
		const response = await eliminationandexchange(db).insert(data);
		return response[0].id;
	}
	async getAll(
		patient_id: number,
	): Promise<Eliminationandexchange_InsertParameters[]> {
		const response = await eliminationandexchange(db).find({ patient_id });
		return response.all();
	}
}
