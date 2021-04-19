/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: tjA6DiG9qBgH1vsXVgF9gdxwZqPqDvrnEOw6UwbDlyUXawj4hksEzsgBENav5OQtzcnMRfvxBVRUCVQX3Y+ikw==
 */

// eslint:disable
// tslint:disable

interface Patient {
	admissiondate: string;
	admittedform: string | null;
	bed: string;
	chiefcomplaint: string | null;
	dateofbirth: string | null;
	entryfrom: string;
	fathername: string | null;
	firstname: string;
	hospitalizationhistory: string | null;
	hospitalizationreason: string;
	id: number;
	informationsource: string | null;
	language: string | null;
	lastname: string;
	maritalstatus: string | null;
	occupation: string | null;
	patientcaregiver: string | null;
	physicianname: string;
	prostheses: string | null;
	recordnumber: string;
	/**
	 * @default CURRENT_TIMESTAMP
	 */
	reg_date: Date | null;
	room: string;
	ward: string;
}
export default Patient;

interface Patient_InsertParameters {
	admissiondate: string;
	admittedform?: string | null;
	bed: string;
	chiefcomplaint?: string | null;
	dateofbirth?: string | null;
	entryfrom: string;
	fathername?: string | null;
	firstname: string;
	hospitalizationhistory?: string | null;
	hospitalizationreason: string;
	id: number;
	informationsource?: string | null;
	language?: string | null;
	lastname: string;
	maritalstatus?: string | null;
	occupation?: string | null;
	patientcaregiver?: string | null;
	physicianname: string;
	prostheses?: string | null;
	recordnumber: string;
	/**
	 * @default CURRENT_TIMESTAMP
	 */
	reg_date?: Date | null;
	room: string;
	ward: string;
}
export type { Patient_InsertParameters };