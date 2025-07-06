import { BnplInfo } from '../../interfaces/payment-flex/bnpl.interface';

export interface BaseInterface00 {
	id: number,
	is_top_5: 'Yes' | 'No',
	retail: string,
	slug: string,
	link?: string,
	bnpl_info?: Array<BnplInfo>,
  date: Date
}
