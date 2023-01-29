
import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({ 
    schema: z.object({
        id: z.number(),
        title: z.string(),
        description: z.string(),
        location: z.string().optional(),
        fromDate: z.string(), 
        toDate: z.string(),
        employer: z.string().optional(),
        projectLink: z.string().url(),
        tags: z.array(z.string()),
    }),
});

export const collections = {
  'projects': projectsCollection,
};