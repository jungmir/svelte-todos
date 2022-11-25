<script>
    import { todos } from "../store";
    import { createEventDispatcher } from "svelte";
    export let todo;

    const handleCheckTodo = () => todos.checkTodo(todo.id)
    const handleEditTodoItem = () => {
        todos.editTodo(todo)
        todos.closeTodoEditMode()
    }
    const handleChangeEditMode = () => todos.changeTodoEditMode(todo.id)
    const handleRemoveTodo = () => todos.removeTodo(todo.id)

</script>

<div class="todoItem">
    <input type="checkbox" bind:checked={todo.done} on:click={handleCheckTodo}>
    {#if $todos.editMode === todo.id}
        <input type="text" bind:value={todo.content} on:focusout={handleEditTodoItem}>
    {:else}
        <span class="content" on:dblclick={handleChangeEditMode}>{todo.content}</span>
    {/if}
    <a href="#null" on:click={handleRemoveTodo}>X</a>
</div>