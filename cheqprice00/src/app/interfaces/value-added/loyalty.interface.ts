import { BaseInterface00 } from '../base-interfaces/base-interface00.interface';

export enum Type {
	Point_based = 'point_based',
	Tiered = 'tiered',
	Subscription = 'subscription',
	Value_based = 'value_based',
	Referral = 'referral',
	Gamified = 'gamified',
	Exclusive = 'exclusive',
	Community = 'community',
	Stamp_card = 'stamp_card'
}
export interface Loyalty extends BaseInterface00 {
	image: string,
	type01: Type[],
	describe00?: string,
	describe01?: string,
	describe02?: string,
	describe03?: string,
	describe04?: string,
	describe05?: string,
	describe06?: string,
	describe07?: string,
	describe08?: string,
	describe09?: string,
}
