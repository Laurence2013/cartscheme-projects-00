import { Occassions } from '../../interfaces/offers/occassions.interface';

export const occassions: Occassions[] = [
	{
		id: 5,
    is_top_5: 'Yes',
		retail: 'Foot Locker',
		slug: 'foot_locker',
		title: "Any birthday's this month",
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		type: 'Birthday',
		link: 'src/app/pages/offers/discounts.page.ts',
		image: 'assets/top-discounts/30-percent-discount-01.jpg',
		terms_n_conditions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		date_expire: new Date('2025-09-09')
	}
];
