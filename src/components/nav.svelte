<script>
    import { url, isActive } from "@roxi/routify"
</script>

<nav class="menu-box">
    <a href="{$url('/index')}" class:located={$isActive('/index')} class="btn">Home</a>
    <a href="{$url('/about')}" class:located={$isActive('/about')} class="btn">About</a>
    <a href="{$url('/todo')}" class:located={$isActive('/todo')} class="btn">Todos</a>
    <a href="{$url('/posts')}" class:located={$isActive('/posts')} class="btn">Posts</a>
</nav>

<style>
    .located {
        border-bottom: 2px solid #005EFF;
    }
</style>