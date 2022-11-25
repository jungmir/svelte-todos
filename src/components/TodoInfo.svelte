<script>
    import { todos, countTodo } from "../store";
    import TodoState from "../const"

    const handleFetchTodoAll = () => todos.changeTodoView(TodoState.ALL)
    const handleFetchTodoActive = () => todos.changeTodoView(TodoState.ACTIVE)
    const handleFetchTodoDone = () => todos.changeTodoView(TodoState.DONE)
</script>

<div class="info">
    <div class="wrap">
        <span>Count: {$countTodo}</span>
        <div>
            <button
            class="btn"
            class:selected={$todos.viewMode === TodoState.ALL}
            on:click={handleFetchTodoAll}
            >ALL</button>
            <button class="btn" class:selected={$todos.viewMode === TodoState.ACTIVE} on:click={handleFetchTodoActive}>ACTIVE</button>
            <button class="btn" class:selected={$todos.viewMode === TodoState.DONE} on:click={handleFetchTodoDone}>DONE</button>
        </div>
    </div>
</div>

<style>
    .selected {
        border-bottom: 2px solid #005EFF;
    }
</style>