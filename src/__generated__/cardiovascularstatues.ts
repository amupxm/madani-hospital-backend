/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: X6jZ6mTAK7WvTiQD125b3nlHKhxTT3pxJNNiQPaR2jxotTnPizNMdumLe+z7fp9a1H8jqcb11r6oOZuWXyF1VQ==
 */

// eslint:disable
// tslint:disable

interface Cardiovascularstatues {
	dorsalispulse: string | null;
	edemalocation: string | null;
	edemarating: string | null;
	experiencesymptoms: string | null;
	extraheartsound: string | null;
	femoralpulse: string | null;
	fowlersbloodpressure: string | null;
	homantestresult: string | null;
	id: number;
	intermittentclaudication: string | null;
	jugularveinpressure: string | null;
	limbtemperature: string | null;
	orthostatichypotension: string | null;
	patient_id: number;
	peripheralpulsesofthelimbs: string | null;
	poplitealpulse: string | null;
	positivehepatojugularreflux: string | null;
	posteriorlpulse: string | null;
	pulse: string | null;
	pulsedeficit: string | null;
	/**
	 * @default CURRENT_TIMESTAMP
	 */
	reg_date: Date | null;
	selfcareindressing: string | null;
	skincolor: string | null;
	standingbloodpressure: string | null;
	supinebloodpressure: string | null;
}
export default Cardiovascularstatues;

interface Cardiovascularstatues_InsertParameters {
	dorsalispulse?: string | null;
	edemalocation?: string | null;
	edemarating?: string | null;
	experiencesymptoms?: string | null;
	extraheartsound?: string | null;
	femoralpulse?: string | null;
	fowlersbloodpressure?: string | null;
	homantestresult?: string | null;
	id: number;
	intermittentclaudication?: string | null;
	jugularveinpressure?: string | null;
	limbtemperature?: string | null;
	orthostatichypotension?: string | null;
	patient_id: number;
	peripheralpulsesofthelimbs?: string | null;
	poplitealpulse?: string | null;
	positivehepatojugularreflux?: string | null;
	posteriorlpulse?: string | null;
	pulse?: string | null;
	pulsedeficit?: string | null;
	/**
	 * @default CURRENT_TIMESTAMP
	 */
	reg_date?: Date | null;
	selfcareindressing?: string | null;
	skincolor?: string | null;
	standingbloodpressure?: string | null;
	supinebloodpressure?: string | null;
}
export type { Cardiovascularstatues_InsertParameters };
