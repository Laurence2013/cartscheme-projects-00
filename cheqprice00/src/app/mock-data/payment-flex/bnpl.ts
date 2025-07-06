import { Bnpl } from '../../interfaces/payment-flex/bnpl.interface';

export const bnpl: Bnpl[] = [
	{
		id: 1,
    is_Type: 'Bnpl',
		is_top_5: 'Yes',
		retail: 'Sports Direct',
    slug: 'sports_direct',
		bnpl_info: [{
			bnpl_id: 1,
			image: 'assets/top-discounts/20-giftcard.jpg',
			website: 'www.some-website.com',
			bnpl_partner: 'Frasers',
			bnpl_desc: 'Lorem BNPL Description ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et...',
			interest: 0.0,
			interest_desc: 'Lorem Intrerest Description ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et...',
			installment_type: 'Monthly',
			installment_type_desc: 'Lorem Installment Description ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et...',
			late_fees: 'Yes',
			late_fees_desc:'Lorem Late Fees Description ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et...', 
		}],
		link: 'src/app/pages/offers/payment-flex.page.ts',
		date: new Date('2025-09-09')
	},
	{
		id: 2,
    is_Type: 'Giftcards',
		is_top_5: 'Yes',
		retail: 'JD Sports',
    slug: 'jd_sports',
		bnpl_info: [
			{
				bnpl_id: 1,
				image: 'assets/top-discounts/20-giftcard-00.jpg',
				website: 'www.some-website.com',
				bnpl_partner: 'Klarna',
				bnpl_desc: 'Lorem BNPL Description ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et...',
				interest: 0.0,
				interest_desc: 'Lorem Intrerest Description ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et...',
				installment_type: 'Weekly',
				installment_type_desc: 'Lorem Installment Description ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et...',
				late_fees: 'Yes',
				late_fees_desc:'Lorem Late Fees Description ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et...', 
			},
			{
				bnpl_id: 2,
				image: 'assets/top-discounts/20-giftcard-00.jpg',
				website: 'www.some-website.com',
				bnpl_partner: 'Klarna',
				bnpl_desc: 'Lorem BNPL Description ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et...',
				interest: 0.0,
				interest_desc: 'Lorem Intrerest Description ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et...',
				installment_type: 'Weekly',
				installment_type_desc: 'Lorem Installment Description ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et...',
				late_fees: 'Yes',
				late_fees_desc:'Lorem Late Fees Description ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et...', 
			}
		],
		link: 'src/app/pages/offers/payment-flex.page.ts',
		date: new Date('2025-09-09')
	}
]
