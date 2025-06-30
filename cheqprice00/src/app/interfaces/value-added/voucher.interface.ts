export interface Voucher {
	id: number,
	is_top_5: 'Yes' | 'No',
	retail: string,
	slug: string,
	description: string,
	type: 'spend_in_store' | 'click_and_collect',
	image: string,
	date: Date
}
