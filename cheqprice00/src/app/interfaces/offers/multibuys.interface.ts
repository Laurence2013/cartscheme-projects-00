export interface Multibuys {
	id: number;
  is_top_5: 'Yes' | 'No';
	retail: string;
	slug: string;
	title: string;
	offer?: string;
	link?: string;
	date: Date;
}
