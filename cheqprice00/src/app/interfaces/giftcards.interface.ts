export interface Giftcards {
	id: number;
	card_type: 'giftcard' | 'cashback' | 'loyalty';
	retail: string;
	image: string;
	website: string;
	description: string;
	choosing_type: 'Myself' | 'Someone else'
	gift_values: number[];
	quantity: number[];
	availability: 'eCard' | 'Physical' | 'Both';
	validity: Date;
}
