const UseCategories = {
  Technology: 'technology',
  Software: 'software',
  Hardware: 'hardware',
} as const;

type UseCategory = (typeof UseCategories)[keyof typeof UseCategories];

type Use = {
  id: number;
  title: string;
  description: string;
  category: UseCategory;
  link?: string;
  tags?: string[];
};

export type { Use, UseCategory };
export { UseCategories };
