export interface Loyalty {
	id: number,
	retail: string,
	slug: string,
	image: string,
	link: string,
	type: ['point_based', 'tiered', 'paid_loyalty', 'value_based', 
		'referral', 'gamified', 'experiential', 'community_based', 'punch_card'],
	describe00: string,
	describe01?: string,
	describe02: string,
	date: Date
}
