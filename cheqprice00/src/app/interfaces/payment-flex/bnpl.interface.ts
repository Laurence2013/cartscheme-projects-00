import { BaseInterface00 } from '../base-interfaces/base-interface00.interface';

export interface BnplInfo {
	bnpl_id: number;
	image: string;
	website: string;
	bnpl_partner: string;
	bnpl_desc: string;
	interest: number;
	interest_desc: string;
	installment_type: 'Pay in 30 Days' | 'Monthly' | 'Weekly' | 'Other';
	installment_type_desc: string;
	late_fees: 'Yes' | 'No';
	late_fees_desc: string;
}
export interface Bnpl extends BaseInterface00 {
	bnpl_info: Array<BnplInfo>,
}
