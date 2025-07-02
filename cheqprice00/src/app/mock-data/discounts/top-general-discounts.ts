import { General } from '../../interfaces/discounts/general.interface';

export const top_general_discounts: General[] = [
	{
		id: 1,
    is_top_5: 'Yes',
		retail: 'Sports Direct',
		slug: 'sports_direct',
		discount: 'assets/top-discounts/20-percent-discount.jpg',
		title: '20% discount summer sales',
		link: 'src/app/pages/discounts/discounts.page.ts',
		date: new Date('2025-09-09')
	},
	{
		id: 2,
    is_top_5: 'Yes',
		retail: 'JD Sports',
		slug: 'jd_sports',
		discount: 'assets/top-discounts/20-percent-discount-00.jpg',
		title: '20% discount summer sales',
		link: 'src/app/pages/discounts/discounts.page.ts',
		date: new Date('2025-09-09')
	},
	{
		id: 3,
    is_top_5: 'Yes',
		retail: 'Footasylum',
		slug: 'footasylum',
		discount: 'assets/top-discounts/30-percent-discount.jpg',
		title: '30% discount summer sales',
		link: 'src/app/pages/discounts/discounts.page.ts',
		date: new Date('2025-09-09')
	}
]
