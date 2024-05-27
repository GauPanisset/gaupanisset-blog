const UseCategories = {
  Technology: 'technology',
  Software: 'software',
  Hardware: 'hardware',
} as const;

type UseCategory = (typeof UseCategories)[keyof typeof UseCategories];

type Use = {
  id: string;
  title: string;
  description: string;
  link?: string;
  tags?: string[];
};

export type { Use, UseCategory };
export { UseCategories };
