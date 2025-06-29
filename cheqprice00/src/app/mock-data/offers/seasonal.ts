import { Seasonal } from '../../interfaces/offers/seasonal.interface';

export const seasonal: Seasonal[] = [
	{
		id: 3,
		retail: 'Footasylum',
		slug: 'footasylum',
		title: 'Summer sale for kids under 8years, half price!',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		type: 'Summer',
		link: 'src/app/pages/offers/discounts.page.ts',
		image: 'assets/top-discounts/30-percent-discount.jpg',
		terms_n_conditions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		date_expire: new Date('2025-09-09')
	},
	{
		id: 4,
		retail: 'Asos',
		slug: 'asos',
		title: 'Summer sale for kids under 8years, 25% off',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		type: 'Autumn',
		link: 'src/app/pages/offers/discounts.page.ts',
		image: 'assets/top-discounts/30-percent-discount-00.jpg',
		terms_n_conditions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		date_expire: new Date('2025-09-09')
	},
]
