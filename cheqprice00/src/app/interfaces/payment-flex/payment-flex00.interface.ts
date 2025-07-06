import { BaseInterface00 } from '../base-interfaces/base-interface00.interface';
import { Bnpl } from './bnpl.interface';
import { Giftcards } from './giftcards.interface';

export interface PaymentFlex00 extends BaseInterface00, Bnpl, Giftcards {}
