'use client'
import React from 'react'

import { Plus } from "lucide-react";
import { Input } from './_components/ui/input'
import { Button } from './_components/ui/button'
import { toast } from "sonner";
export const AddTodo = () => {
    const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const task = formData.get('task')
        toast.success(`Task ${task} added`)
    }
  return (
    <div>
        <form onSubmit={ (e) => addTodo(e)}
         className="flex items-center w-full gap-2">
            <Input 
            name='task' 
            className="flex-1"
             placeholder="Take out trash"
            />
                <Button size='icon' type='submit'>
                <Plus />
            </Button>
        </form>
    </div>
  )
}
