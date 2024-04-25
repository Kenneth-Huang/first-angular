export interface Note {
	id: ID,
	title: string,
	content: string,
}

export type ID = number | string;
