import {z} from 'zod';

export const TaskSchema = z.object({
  id: z.number(),
  description: z.string(),
  status: z.enum(['pending', 'in_progress', 'completed']).default('pending'),
  createdAt: z.string().default(() => new Date().toISOString()),
  updatedAt: z.string().default(() => new Date().toISOString()),
})

export const ContentSchema = z.object({
  lastId: z.number().default(0),
  tasks: z.array(TaskSchema).default([]),
})