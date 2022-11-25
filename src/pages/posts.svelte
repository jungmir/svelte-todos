<script>
    import axios from "axios";
    let page = 1;
    let limit = 10;

    $: items = axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`)
                .then(response => response.data)
                .catch(error => console.log(error))

    function nextPage() {
        page = page + 1
    }

    function prevPage() {
        page = page - 1
    }
</script>

<header>
    <div class="wrap">
        <h1 class="main-title">ajax PAGE</h1>
        <p>비동기 처리 연습 페이지 입니다.</p>
    </div>
</header>
<div class="info">
    <div class="wrap">
        <span>PAGE: {page}</span>
    </div>
</div>

<div class="main">
    {#await items}
        <p>...loading</p>
    {:then items}
        <ul>
            {#each items as item, index}
                <li>
                    <p>[{item.id}] [{item.title}]</p>
                </li>
            {/each}
        </ul>
    {:catch error}
        <p> 오류 발생 {error} </p>
    {/await}

    <div
        class="pagination"
        class:next={page <= 1}
        class:prev={page >= 10}
    >
        {#if page > 1}
            <a href="#null" class="btn-blue" on:click={prevPage}>Prev</a>
        {/if}
        {#if page < 10}
            <a href="#null" class="btn-blue" on:click={nextPage}>Next</a>
        {/if}
    </div>
</div>

<style>
    .pagination {
        display: flex;
        justify-content: space-between;
        width: 20vh;
    }
    .next, .prev {
        display: flex;
        justify-content: center;
    }
</style>