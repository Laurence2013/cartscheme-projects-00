import { Multibuys } from '../../interfaces/offers/multibuys.interface';

export const multibuys: Multibuys[] = [
	{
		id: 1,
    is_top_5: 'Yes',
		retail: 'Sports Direct',
		slug: 'sports_direct',
		offer: 'assets/top-discounts/20-percent-discount-00.jpg',
		title: 'Buy One get One Free!',
		link: 'src/app/pages/offers/discounts.page.ts',
		date: new Date('2025-09-09')
	},
	{
		id: 2,
    is_top_5: 'Yes',
		retail: 'JD Sports',
		slug: 'jd_sports',
		offer: 'assets/top-discounts/20-percent-discount.jpg',
		title: 'Buy Two get any Addidas T-Shirt half price!',
		link: 'src/app/pages/offers/discounts.page.ts',
		date: new Date('2025-09-09')
	}
]
