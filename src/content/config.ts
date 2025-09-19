
import { z, defineCollection } from 'astro:content';

const achievementCollection = defineCollection({ 
    schema: z.object({
        id: z.number(),
        type: z.enum(["work", "project"]),
        title: z.string(),
        description: z.string(),
        location: z.string().optional(),
        start: z.string(), 
        end: z.string().optional(),
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
  'projects': achievementCollection,
  'work': achievementCollection,
};