
import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({ 
    schema: z.object({
        id: z.number(),
        title: z.string(),
        description: z.string(),
        location: z.string().optional(),
        fromDate: z.string(), 
        toDate: z.string().optional(),
        employer: z.string().optional(),
        projectLink: z.string().url(),
        tags: z.array(z.string()),
        draft: z.boolean().default(false)
    }),
});

const workCollection = defineCollection({ 
  schema: z.object({
      id: z.number(),
      title: z.string(),
      company: z.string(),
      shortDescription: z.string(),
      location: z.string().optional(),
      fromDate: z.string(), 
      toDate: z.string().optional(),
      companyLink: z.string().url(),
      tags: z.array(z.string()),
      draft: z.boolean().default(false)
  }),
});

export const collections = {
  'projects': projectsCollection,
  'work': workCollection,
};