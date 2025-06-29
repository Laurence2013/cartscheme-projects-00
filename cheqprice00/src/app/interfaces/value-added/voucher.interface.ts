export interface Voucher {
	id: number,
	retail: string,
	slug: string,
	description: string,
	type: 'to_spend_in_store' | 'click_and_collect',
	image: string,
	date: Date
}
