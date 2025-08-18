export interface Volume {
  slug: string;
  title: string;
  description: string;
  cover: string;
  books: Book[];
  color: string;
}

export interface Book {
  ordinal: string;
  title: string;
}
