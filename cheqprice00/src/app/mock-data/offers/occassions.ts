import { Occassions } from '../../interfaces/offers/occassions.interface';

export const occassions: Occassions[] = [
	{
		id: 5,
		retail: 'Foot Locker',
		slug: 'foot_locker',
		title: "Any birthday's this month, half price for any chosen Addidas tracksuit",
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		type: 'Birthday',
		link: 'src/app/pages/offers/discounts.page.ts',
		image: 'assets/top-discounts/30-percent-discount-01.jpg',
		terms_n_conditions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		date_expire: new Date('2025-09-09')
	}
];
