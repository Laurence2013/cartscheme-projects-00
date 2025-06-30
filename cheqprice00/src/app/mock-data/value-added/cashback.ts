import { Cashback } from '../../interfaces/value-added/cashback.interface';

export const cashback: Cashback[] = [
  {
    id: 1,
    is_top_5: 'Yes',
    retail: 'Sports Direct',
    slug: 'sport_direct',
    partner_site: 'TopCashback',
		link: 'src/app/pages/offers/discounts.page.ts',
		image: 'assets/top-discounts/30-percent-discount-01.jpg',
    percent_back00: 0.05,
    date: new Date('2025-09-09')
  },
  {
    id: 2,
    is_top_5: 'Yes',
    retail: 'Assos',
    slug: 'assos',
    partner_site: 'TopCashback',
		link: 'src/app/pages/offers/discounts.page.ts',
		image: 'assets/top-discounts/20-percent-discount-01.jpg',
    percent_back00: 0.05,
    date: new Date('2025-09-09')
  }
]
