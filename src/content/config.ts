
import { z, defineCollection } from 'astro:content';

const projectCollection = defineCollection({ 
    schema: z.object({
        id: z.number(),
        title: z.string(),
        description: z.string(),
        location: z.string().optional(),
        fromDate: z.string(), 
        toDate: z.string().optional(),
        link: z.object({
          title: z.string(),
          url: z.string().url()
        }),
        tags: z.array(z.string()),
        draft: z.boolean().default(false),
        lastModified: z.date()
    }),
});

const workCollection = defineCollection({ 
  schema: z.object({
      id: z.number(),
      title: z.string(),
      description: z.string(),
      location: z.string(),
      fromDate: z.string(), 
      toDate: z.string().optional(),
      link: z.object({
        title: z.string(),
        url: z.string().url()
      }),
      tags: z.array(z.string()),
      draft: z.boolean().default(false),
      lastModified: z.date()
  }),
});

export const collections = {
  'projects': projectCollection,
  'work': workCollection,
};