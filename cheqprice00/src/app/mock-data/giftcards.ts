import { Giftcards } from '../interfaces/payment-flex/giftcards.interface';

export const giftcards: Giftcards[] = [
	{
		id: 1,
		card_type: 'giftcard',
		retail: 'Prezzee',
		image: 'assets/top-discounts/giftcard-00.jpg',
		website: 'https://www.prezzee.uk/',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		choosing_type: 'Someone else',
		gift_values: [10, 20, 30, 40, 50],
		quantity: [1, 2, 3, 4, 5],
		availability: 'Both',
		validity: new Date('2026-09-09')
	},
	{
		id: 2,
		card_type: 'giftcard',
		retail: 'Love2Shop',
		image: 'assets/top-discounts/giftcard-01.jpg',
		website: 'https://www.prezzee.uk/',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		choosing_type: 'Someone else',
		gift_values: [10, 20, 30, 40, 50],
		quantity: [1, 2, 3, 4, 5],
		availability: 'Both',
		validity: new Date('2026-09-09')
	},
	{
		id: 3,
		card_type: 'cashback',
		retail: 'Asos',
		image: 'assets/top-discounts/giftcard-02.jpg',
		website: 'https://www.prezzee.uk/',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		choosing_type: 'Someone else',
		gift_values: [10, 20, 30, 40, 50],
		quantity: [1, 2, 3, 4, 5],
		availability: 'Both',
		validity: new Date('2026-09-09')
	},
	{
		id: 4,
		card_type: 'loyalty',
		retail: 'River Island',
		image: 'assets/top-discounts/giftcard-03.jpg',
		website: 'https://www.prezzee.uk/',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		choosing_type: 'Someone else',
		gift_values: [10, 20, 30, 40, 50],
		quantity: [1, 2, 3, 4, 5],
		availability: 'Both',
		validity: new Date('2026-09-09')
	},
	{
		id: 5,
		card_type: 'cashback',
		retail: 'IKEA',
		image: 'assets/top-discounts/giftcard-04.jpg',
		website: 'https://www.prezzee.uk/',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		choosing_type: 'Someone else',
		gift_values: [10, 20, 30, 40, 50],
		quantity: [1, 2, 3, 4, 5],
		availability: 'Both',
		validity: new Date('2026-09-09')
	},
]
