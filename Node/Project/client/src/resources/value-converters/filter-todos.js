export class FilterTodosValueConverter {
    toView(todos, nofilterTodos) {
        if (!todos) return;
        if (!nofilterTodos) return todos;
        let filteredTodos = [];
        todos.forEach(todo => {
            if (todo.status !== 'Completed') filteredTodos.push(todo);
        });
        return filteredTodos;
    }
}
