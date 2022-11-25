<script>
    import { todoForm, todos } from "../store"

    const handleTodoAdd = (e) => {
        if (e.keyCode === 13) {
            todos.addTodo($todoForm)
            todoForm.resetForm()
        }
    }
</script>

<header>
    <div class="wrap">
        <h1>Svelte Todos</h1>
        <input
            type="text"
            name="todoHeader"
            id="todoHeader"
            bind:value={$todoForm}
            on:keyup={handleTodoAdd}
        >
    </div>
</header>