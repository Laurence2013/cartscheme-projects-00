export interface Giftcards {
	id: number;
  is_top_5: 'Yes' | 'No',
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
