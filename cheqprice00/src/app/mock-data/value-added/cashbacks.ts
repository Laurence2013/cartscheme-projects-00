import { Cashbacks } from '../../interfaces/value-added/cashbacks.interface';

export const cashbacks: Cashbacks[] = [
  {
    id: 1,
    is_Type: 'Cashbacks',
    is_top_5: 'Yes',
    retail: 'Sports Direct',
    slug: 'sport_direct',
    partner_site: 'TopCashback01',
		link: 'src/app/pages/offers/discounts.page.ts',
		image: 'assets/top-discounts/30-percent-discount-01.jpg',
    percent_back00: 0.05,
    date: new Date('2025-09-09')
  },
  {
    id: 2,
    is_Type: 'Cashbacks',
    is_top_5: 'Yes',
    retail: 'Asos',
    slug: 'asos',
    partner_site: 'TopCashback02',
		link: 'src/app/pages/offers/discounts.page.ts',
		image: 'assets/top-discounts/20-percent-discount.jpg',
    percent_back00: 0.05,
    date: new Date('2025-09-09')
  }
]
