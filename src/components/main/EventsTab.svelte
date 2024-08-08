<script>
    import ArrowButton from "../ArrowButton.svelte";
    export let category = 'all';
    export let btnAction;
    export let cards;

    let rotate = true;
</script>
<div class="tab_container">
    <div class="tab_list_container">
        <ul class="event_tab">
            <li class="tab-item" id="all_tab">
                <button 
                    class={category === 'all' ? 'active btn btn_tab-link' : 'btn btn_tab-link'} 
                    on:click={() => (category = 'all')}
                >
                    Все
                </button>
            </li>
            <li class="tab-item" id="nature_tab">
                <button 
                    class={category === 'eco' ? 'active btn btn_tab-link' : 'btn btn_tab-link'} 
                    on:click={() => (category = 'eco')}
                >
                    Защита природы
                </button>
            </li>
            <li class="tab-item" id="healthcare_tab">
                <button 
                    class={category === 'health' ? 'active btn btn_tab-link' : 'btn btn_tab-link'} 
                    on:click={() => (category = 'health')}
                >
                    Помощь онкобольным
                </button>
            </li>
            <li class="tab-item" id="loan_tab">
                <button 
                    class={category === 'debt' ? 'active btn btn_tab-link' : 'btn btn_tab-link'} 
                    on:click={() => (category = 'debt')}
                >
                    Помощь закредитованным
                </button>
            </li>
            <li class="tab-item" id="sport_tab">
                <button 
                    class={category === 'sport' ? 'active btn btn_tab-link' : 'btn btn_tab-link'} 
                    on:click={() => (category = 'sport')}
                >
                    Развитие спорта
                </button>
            </li>
        </ul>
    </div>
    <div class="slider_container">
        <ArrowButton cards={cards} rotate={rotate} btnAction={btnAction} theme='round' />
        <ArrowButton cards={cards} rotate={!rotate} btnAction={btnAction} theme='round' />
    </div>
</div>

<style>
    .tab_container {
        display: flex;
        justify-content: space-between;
        width: 70rem;
        height: 4rem;
        margin-top: 2.5rem;
        margin-bottom: 2.5rem;
    }

    .tab_list_container {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 59.375rem;
        height: inherit;
        border-radius: 1.875rem;
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
        font-family: var(--font-inter);
        font-size: 1rem;
        background-color: white;
    }

    .event_tab {
        list-style: none;
        display: flex;
        gap: 0;
        justify-content: space-around;
        align-items: center;
        width: 60rem;
    }

    .slider_container {
        display: flex;
        justify-content: space-between;
        width: 9.25rem;
    }

    .tab-item {
        display: inline-block;
        width: auto;
        height: auto;
    }

    .btn_tab-link {
        display: inline-block;
        padding: inherit;
        width: inherit;
        height: 2.5rem;
        border: transparent;
        border-radius: 1.875rem;
        padding: .5rem 1.5rem .5rem 1.5rem;
        background-color: transparent;
        cursor: pointer;
    }

    .active {
        color: white;
        background: var(--gradient);   
    }

    .btn-round {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
        background-color: white;
    }

    .btn-round:hover,
    .btn-round:active {
        background: var(--gradient);
        color: white;
    }

</style>