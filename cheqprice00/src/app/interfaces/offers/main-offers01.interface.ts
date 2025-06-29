export interface MainOffers01 {
    id: number;
    retail: string;
    slug: string;
    title: string;
    description?: string;
    link?: string;
    image?: string;
    type00?: 'Birthday' | 'Christmas' | "Valentine's Day" | 'Fathers Day' | 'Mothers Day' | 'Halloween' | 'Others';
    type01?: 'Autumn' | 'Winter' | 'Spring' | 'Summer';
    offer?: string;
    terms_n_conditions?: string;
    date_expire?: Date;
}
