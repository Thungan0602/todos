export interface Todo {
    text: string;
    completed: boolean;
    id?: string;
}
export async function fetchTodos() {
    const res = await fetch("https://671331cf6c5f5ced6625a04f.mockapi.io/current/todos",);
    const data = await res.json();
    return data;
}

export async function createTodo(todo: Todo) {
    const res = await fetch("https://671331cf6c5f5ced6625a04f.mockapi.io/current/todos",
        {
            method: "POST",
            body: JSON.stringify(todo),
            headers: {
                "Content-Type": "application/json",
            },
        },
    );
    const data = await res.json();
    return data;
}

export async function deleteTodo(todoId: string) {
    const res = await fetch(`https://671331cf6c5f5ced6625a04f.mockapi.io/current/todos/${todoId}`,
        {
            method: "DELETE",
        },
    );
    const data = await res.json();
    return data;
}

export async function toggleTodo(todoId: string, completed: boolean) {
    const res = await fetch(`https://671331cf6c5f5ced6625a04f.mockapi.io/current/todos/${todoId}`,
        {
            method: "PUT",
            body: JSON.stringify({ completed }),
            headers: {
                "Content-Type": "application/json",
            },
        },
    );
    const data = await res.json();
    return data;
}