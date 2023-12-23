import { z } from 'zod';

type Article = {
  metadata: Metadata;
  slug: string;
  source: string;
};

const metadataSchema = z.object({
  date: z.object({
    creation: z
      .string()
      .regex(
        new RegExp(
          '^([0-9]{2})?[0-9]{2}-(1[0-2]|0[1-9])-(3[01]|[12][0-9]|0[1-9])$'
        )
      ),
    update: z
      .string()
      .regex(
        new RegExp(
          '^([0-9]{2})?[0-9]{2}-(1[0-2]|0[1-9])-(3[01]|[12][0-9]|0[1-9])$'
        )
      ),
  }),
  description: z.string(),
  tags: z.array(z.string()),
  title: z.string(),
});

type Metadata = z.infer<typeof metadataSchema>;

export type { Article, Metadata };
export { metadataSchema };
