import { Staff } from '../../interfaces/discounts/staff.interface';

export const staff_discounts: Staff[] = [
	{
		id: 4,
    is_top_5: 'Yes',
		retail: 'Asos',
		slug: 'asos',
		discount: 'assets/top-discounts/30-percent-discount-01.jpg',
		title: '30% discount summer sales',
		link: 'src/app/pages/discounts/discounts.page.ts',
		date: new Date('2025-09-09')
	},
	{
		id: 5,
    is_top_5: 'Yes',
		retail: 'Foot Locker',
		slug: 'foot_locker',
		discount: 'assets/top-discounts/30-percent-discount-00.jpg',
		title: '30% discount summer sales',
		link: 'src/app/pages/discounts/discounts.page.ts',
		date: new Date('2025-09-09')
	}
];
