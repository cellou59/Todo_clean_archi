import { Separator } from "@radix-ui/react-context-menu";
import { Card, CardContent, CardHeader, CardTitle } from "./_components/ui/card";
import { AddTodo } from "./add-todo";
import { PrismaClient } from "@prisma/client";





export default async function Home() {
  const prisma = new PrismaClient()
  const todos = await prisma.todos.findMany()

  return (
    <div>
      <Card className="w-full max-w-lg">
        <CardHeader className="flex flex-row items-center">
          <CardTitle className="flex-1">TODOs</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="flex flex-col p-6 gap-4">
          <AddTodo />
          <ul>
            {todos?.map((todo) => (
              <li key={todo.id}>{todo.task}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
