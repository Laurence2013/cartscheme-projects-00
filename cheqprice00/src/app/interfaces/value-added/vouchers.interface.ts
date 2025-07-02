import { BaseInterface00 } from '../base-interfaces/base-interface00.interface';

export interface Vouchers extends BaseInterface00 {
	image: string,
	description: string,
	type00: 'spend_in_store' | 'click_and_collect',
}
