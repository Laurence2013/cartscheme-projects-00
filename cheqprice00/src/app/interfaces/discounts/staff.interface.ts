export interface Staff {
	id: number;
	is_top_5: 'Yes' | 'No',
	retail: string;
	slug: string;
	discount?: string;
	title: string;
	link: string;
}
