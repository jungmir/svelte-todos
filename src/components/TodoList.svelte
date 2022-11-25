<script>
    import { fetchTodos } from "../store";
    import { fade } from "svelte/transition";
    import { flip } from "svelte/animate";
    import TodoItem from "./TodoItem.svelte";
</script>

<div class="main">
    <ul>
        {#each $fetchTodos as todo, index(todo)}
        <li
            in:fade
            out:fade="{{duration: 1000}}"
            animate:flip="{{duration:1000}}"
        >
            <TodoItem {todo} />
        </li>
        {/each}
    </ul>
</div>