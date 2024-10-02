import { z } from "zod";

export const SelectTodoSchema = z.object({
  id: z.string().length(11),
  task: z.string().min(1),
  description: z.nullable(z.string()),
  is_complete: z.boolean(),
  user_id: z.nullable(z.string().length(11)),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date().transform((date) => date.toISOString()),
});

export type Todo = z.infer<typeof SelectTodoSchema>;

export const AddTodoSchema = SelectTodoSchema.pick({
  task: true,
  description: true,
  user_id: true,
});

export type AddTodo = z.infer<typeof AddTodoSchema>;
