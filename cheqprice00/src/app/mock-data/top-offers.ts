import { Offers } from '../interfaces/offers.interface';

export const top_offers: Offers[] = [
	{
		id: 1,
		retail: 'Sports Direct',
		slug: 'sports_direct',
		offer: 'assets/top-discounts/20-percent-discount-00.jpg',
		title: 'Buy One get One Free!',
		link: 'src/app/pages/offers/discounts.page.ts'
	},
	{
		id: 2,
		retail: 'JD Sports',
		slug: 'jd_sports',
		offer: 'assets/top-discounts/20-percent-discount.jpg',
		title: 'Buy Two get any Addidas T-Shirt half price!',
		link: 'src/app/pages/offers/discounts.page.ts'
	},
	{
		id: 3,
		retail: 'Footasylum',
		slug: 'footasylum',
		offer: 'assets/top-discounts/30-percent-discount.jpg',
		title: 'Summer sale for kids under 8years, half price!',
		link: 'src/app/pages/offers/discounts.page.ts'
	},
	{
		id: 4,
		retail: 'Asos',
		slug: 'asos',
		offer: 'assets/top-discounts/30-percent-discount-00.jpg',
		title: 'Summer sale for kids under 8years, 25% off',
		link: 'src/app/pages/offers/discounts.page.ts'
	},
	{
		id: 5,
		retail: 'Foot Locker',
		slug: 'foot_locker',
		offer: 'assets/top-discounts/30-percent-discount-01.jpg',
		title: "Any birthday's this month, half price for any chosen Addidas tracksuit",
		link: 'src/app/pages/offers/discounts.page.ts'
	}
]
