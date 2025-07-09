import { BaseInterface00 } from '../base-interfaces/base-interface00.interface';
import { Bnpl, BnplInfo } from './bnpl.interface';
import { Giftcards } from './giftcards.interface';

interface PaymentFlexBnpl extends BaseInterface00, Bnpl {}
interface PaymentFlexGiftcards extends BaseInterface00, Giftcards {
	bnpl_info?: Array<BnplInfo>;
}
export interface PaymentFlex01 {
	type: string;
	slug?: string;
	title?: string;
	gift_values?: string;
	bnpl_partner?: string;
	info: Bnpl | PaymentFlexGiftcards;
}

export type PaymentFlex00 = PaymentFlexBnpl | PaymentFlexGiftcards;

