import { BaseInterface00 } from '../base-interfaces/base-interface00.interface';
import { Bnpl, BnplInfo } from './bnpl.interface';
import { Giftcards } from './giftcards.interface';

interface PaymentFlexBnpl extends BaseInterface00, Bnpl {}
interface PaymentFlexGiftcards extends BaseInterface00, Giftcards {}

export type PaymentFlex00 = PaymentFlexBnpl | PaymentFlexGiftcards;
