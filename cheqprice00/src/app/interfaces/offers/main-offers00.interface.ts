// Base interface for common identification properties
export interface BaseDeal {
    id: number;
    retail: string;
    slug: string;
    title: string;
}

// Interface for deals that have a description, image, link, terms, and expiry date
export interface DetailedDeal extends BaseDeal {
    description: string;
    link: string;
    image: string;
    terms_n_conditions: string;
    date_expire: Date;
}

// LimitedTime now simply extends DetailedDeal
export interface LimitedTime extends DetailedDeal {}

// Occasions extends DetailedDeal and adds its specific 'type'
export interface Occasions extends DetailedDeal {
    type: 'Birthday' | 'Christmas' | "Valentine's Day" | 'Fathers Day' | 'Mothers Day' | 'Halloween' | 'Others';
}

// Seasonal extends DetailedDeal and adds its specific 'type'
export interface Seasonal extends DetailedDeal {
    type: 'Autumn' | 'Winter' | 'Spring' | 'Summer';
}

// Multibuys extends BaseDeal and has its own specific optional properties
export interface Multibuys extends BaseDeal {
    offer?: string;
    link?: string;
}
