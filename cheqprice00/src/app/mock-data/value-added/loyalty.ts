import { Loyalty, Type } from '../../interfaces/value-added/loyalty.interface';

export const loyalty: Loyalty[] = [
  {
    id: 1,
    is_top_5: 'Yes',
    retail: 'Sports Direct',
    slug: 'sport_direct',
		image: 'assets/top-discounts/30-percent-discount-01.jpg',
		link: 'src/app/pages/offers/discounts.page.ts',
    type01: [Type.Point_based, Type.Tiered, Type.Subscription, Type.Value_based, Type.Referral],
		describe00: '1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et...',
		describe01: '2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et...',
		describe02: '3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et...',
		describe03: '4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et...',
		describe04: '5. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et...',
    date: new Date('2025-09-09')
  },
  {
    id: 2,
    is_top_5: 'Yes',
    retail: 'Asos',
    slug: 'asos',
		image: 'assets/top-discounts/20-percent-discount-00.jpg',
		link: 'src/app/pages/offers/discounts.page.ts',
    type01: [Type.Point_based, Type.Tiered, Type.Subscription, Type.Value_based, Type.Referral],
		describe00: '1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et...',
		describe01: '2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et...',
		describe02: '3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et...',
		describe03: '4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et...',
		describe04: '5. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et...',
    date: new Date('2025-09-09')
  }
];
