import { writable, derived } from "svelte/store";
import { v4 as uuid } from "uuid";
import TodoState from "./const.js";

function setFormTodo() {
    const todoValue = "";
    const { subscribe, update, set } = writable(todoValue);

    const resetForm = () => {
        update((todoValue) => {
            todoValue = "";
            return todoValue;
        });
    };

    return {
        subscribe,
        set,
        resetForm,
    };
}

function setTodoData() {
    const todoData = {
        todoList: [
            {
                id: uuid(),
                content: "첫 번째 할일",
                done: false,
            },
            {
                id: uuid(),
                content: "두 번째 할일",
                done: false,
            },
            {
                id: uuid(),
                content: "세 번째 할일",
                done: false,
            },
            {
                id: uuid(),
                content: "네 번째 할일",
                done: false,
            },
        ],
        viewMode: TodoState.ALL,
        editMode: "",
    };

    const { subscribe, update } = writable(todoData);

    const addTodo = (content) => {
        if (content) {
            const newTodo = {
                id: uuid(),
                content: content,
                done: false,
            };

            update((datas) => {
                const setData = [...datas.todoList, newTodo];
                datas.todoList = setData;
                return datas;
            });
        }
    };
    const editTodo = (editMode) => {
        update((datas) => {
            const setData = datas.todoList.map((todo) => {
                if (todo.id == editMode.id) {
                    todo = editMode;
                }
                return todo;
            });
            datas.todoList = setData;
            return datas;
        });
    };
    const removeTodo = (id) => {
        update((datas) => {
            const setData = datas.todoList.filter((todo) => todo.id !== id);
            datas.todoList = setData;
            return datas;
        });
    };
    const checkTodo = (id) => {
        update((datas) => {
            const setData = datas.todoList.map((todo) => {
                if (todo.id === id) {
                    todo.done = !todo.done;
                }
                return todo;
            });
            datas.todoList = setData;
            return datas;
        });
    };
    const changeTodoEditMode = (id) => {
        update((datas) => {
            datas.editMode = id;
            return datas;
        });
    };

    const closeTodoEditMode = () => {
        update((datas) => {
            datas.editMode = "";
            return datas;
        });
    };

    const changeTodoView = (mode) => {
        update((datas) => {
            datas.viewMode = mode;
            return datas;
        });
    };

    return {
        subscribe,
        addTodo,
        editTodo,
        removeTodo,
        checkTodo,
        closeTodoEditMode,
        changeTodoEditMode,
        changeTodoView,
    };
}

function setFetchTodos() {
    const fetch = derived(todos, ($todos) => {
        if ($todos.viewMode === TodoState.ACTIVE) {
            return $todos.todoList.filter((todo) => todo.done === false);
        }

        if ($todos.viewMode === TodoState.DONE) {
            return $todos.todoList.filter((todo) => todo.done === true);
        }

        return $todos.todoList;
    });

    return fetch;
}

function setCountTodo() {
    const count = derived(fetchTodos, ($fetchTodos) => {
        return $fetchTodos.length;
    });

    return count;
}

export const todoForm = setFormTodo();
export const todos = setTodoData();
export const fetchTodos = setFetchTodos();
export const countTodo = setCountTodo();
