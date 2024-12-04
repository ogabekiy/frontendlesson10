import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import TodoItem from "./TodoItem";
export default function TodoParent() {
    const [list, setList] = useState([]);

    function addItem(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        const result = {
            todoName: data.get("TodoName"),
            id: Date.now(),
        };
        setList((prev) => [...prev, result]);
        e.target.reset();
    }

    function deleteItem(todoid) {
        if (confirm("Rostan Ochirmoqchimisiz?")) {
            const result = list.filter(({ id }) => todoid !== id);
            setList(result);
        }
    }

    function editItem(todoid) {
        if (confirm("Rostan Yangilamoqchimis?")) {
            const result = list.find(({ id }) => todoid === id);
            const newTitle = prompt("Edit Todo", result.todoName);
            const newTodo = { todoName: newTitle, id: todoid };
            const newArr = list.map((el) => {
                if (el.id === todoid) return newTodo;
                else return el;
            });
            setList(newArr);
        }
    }

    return (
        <form
            onSubmit={addItem}
            className="flex justify-center  items-center flex-col py-10"
        >
            <div className="grid w-full max-w-sm mb-5 items-center gap-1.5">
                <Label htmlFor="Todo">Todo</Label>
                <Input
                    type="text"
                    id="Todo"
                    name="TodoName"
                    placeholder="Enter Task"
                />
            </div>
            <ul className="flex flex-col max-w-sm w-full gap-5 ">
                {list.length > 0 ? (
                    list.map(({ todoName, id }) => {
                        return (
                            <li key={id}>
                                <TodoItem
                                    id={id}
                                    editItem={editItem}
                                    deleteItem={deleteItem}
                                    title={todoName}
                                ></TodoItem>
                            </li>
                        );
                    })
                ) : (
                    <li>No Data</li>
                )}
            </ul>
        </form>
    );
}
