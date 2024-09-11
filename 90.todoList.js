class TodoList {
    constructor() {
        this.todos = [];
    }

    add(id, task) {
        const todo = {id, task, done: false};
        if (this.todos.some(({id}) => id === todo.id)) {
            throw Error("There is already a todo item with this id.");
        } else {
        this.todos.push(todo);
        }
    }

    remove(id) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
    }

    markAsDone(id) {
        let checkTodoExist = false;

        for (let i = 0; i < this.todos.length; ++i) {
            if (this.todos[i].id === id) {
                checkTodoExist = i;
            }
        }

        if (checkTodoExist === false) {
            throw Error("There is no todo item with this id.");
        }

        this.todos[checkTodoExist].done = true;

        return this.todos[checkTodoExist];
    }

    getItem(id) {
        let todo = false;

        for (let i = 0; i < this.todos.length; ++i) {
            if (this.todos[i].id === id) {
                todo = this.todos[i];
            }
        }

        if (todo) {
            return todo;
        } else {
            return null;
        }
    }

    getAll() {
        let sortedTodos = this.todos.sort((a, b) => {
                                return a.id.localeCompare(b.id);
                            });
        return sortedTodos;
    }
}