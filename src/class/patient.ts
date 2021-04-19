import db, { patient } from '../database/postgres';
import { Patient_InsertParameters } from '../__generated__/patient';

export default class Patient {
	async insert(user: Patient_InsertParameters): Promise<number> {
		const response = await patient(db).insert(user);
		return response[0].id;
	}
	async find(userId: number): Promise<Patient_InsertParameters[]> {
		if (userId == 0) return await patient(db).find().all();
		else return await patient(db).find({ id: userId }).all();
	}
	async delete(userId: number): Promise<void> {
		return await patient(db).delete({ id: userId });
	}
	async validate(userId: number): Promise<boolean> {
		const response = await patient(db).findOne({ id: userId });
		if (!response) throw new Error('invalid patient');
		else return true;
	}
}
