/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: K2Qpbyof6SoimrSPRiMRK41kV6HpSR/48AFdZClpfzWmS7oAuBcYbIUyj42v7AOCRkYyaO9NqR6M9gznJvBAGQ==
 */

// eslint:disable
// tslint:disable

interface Sexualityfemale {
	effectofthediseaseonsexualperformance: string | null;
	id: number;
	menopause: string | null;
	metrorrhagia: string | null;
	mmenorrhagia: string | null;
	patient_id: number;
	pregnant: string | null;
	/**
	 * @default CURRENT_TIMESTAMP
	 */
	reg_date: Date | null;
	sexuallytransmitteddiseases: string | null;
}
export default Sexualityfemale;

interface Sexualityfemale_InsertParameters {
	effectofthediseaseonsexualperformance?: string | null;
	id: number;
	menopause?: string | null;
	metrorrhagia?: string | null;
	mmenorrhagia?: string | null;
	patient_id: number;
	pregnant?: string | null;
	/**
	 * @default CURRENT_TIMESTAMP
	 */
	reg_date?: Date | null;
	sexuallytransmitteddiseases?: string | null;
}
export type { Sexualityfemale_InsertParameters };
