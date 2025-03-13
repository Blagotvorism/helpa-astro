<script>
    import ArrowButton from "../ArrowButton.svelte";
    export let category = 'all';
    export let btnAction;
    export let cards;

    export let locale;

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
                    {locale === "en" && "All" || "Все"}
                </button>
            </li>
            <li class="tab-item" id="nature_tab">
                <button 
                    class={category === 'eco' ? 'active btn btn_tab-link' : 'btn btn_tab-link'} 
                    on:click={() => (category = 'eco')}
                >
                    {locale === "en" && "Environmental protection" || "Защита природы"}
                </button>
            </li>
            <li class="tab-item" id="healthcare_tab">
                <button 
                    class={category === 'health' ? 'active btn btn_tab-link' : 'btn btn_tab-link'} 
                    on:click={() => (category = 'health')}
                >
                {locale === "en" && "Cancer patients support" || "Помощь онкобольным"}
                </button>
            </li>
            <li class="tab-item" id="loan_tab">
                <button 
                    class={category === 'debt' ? 'active btn btn_tab-link' : 'btn btn_tab-link'} 
                    on:click={() => (category = 'debt')}
                >
                {locale === "en" && "Over-indebted support" || "Помощь закредитованным"}
                </button>
            </li>
            <li class="tab-item" id="sport_tab">
                <button 
                    class={category === 'sport' ? 'active btn btn_tab-link' : 'btn btn_tab-link'} 
                    on:click={() => (category = 'sport')}
                >
                {locale === "en" && "Sports development" || "Развитие спорта"}                    
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
        /* Tab container */
        --tab-container-width: var(--reduced-width);
        --tab-container-height: 4rem;
        --tab-container-margin-top: 2.5rem;
        --tab-container-margin-bottom: 2.5rem;

        /* Tab list */
        --tab-list-container-width: 59.375rem;
        --tab-list-container-font-size: 1rem;

        /* Events tab */
        --events-tab-width: 58rem;

        /* Slider */
        --slider-width: 9.25rem;

        /* Button */
        --btn-tab-link-height: 2.5rem;
        --btn-tab-link-padding: .5rem 1.5rem .5rem 1.5rem;
    }

    .tab_container {
        display: flex;
        justify-content: space-between;
        width: var(--tab-container-width);
        height: var(--tab-container-height);
        margin-top: var(--tab-container-margin-top);
        margin-bottom: var(--tab-container-margin-bottom);
    }

    .tab_list_container {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: var(--tab-list-container-width);
        height: inherit;
        border-radius: var(--border-radius);
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
        background-color: white;
    }

    .event_tab {
        list-style: none;
        display: flex;
        gap: 0;
        justify-content: space-around;
        align-items: center;
        width: var(--events-tab-width);
    }

    .slider_container {
        display: flex;
        justify-content: space-between;
        width: var(--slider-width);
    }

    .tab-item {
        display: inline-block;
        width: auto;
        height: auto;
    }

    .btn_tab-link {
        font-family: var(--font-inter);
        font-size: var(--tab-list-container-font-size);
        display: inline-block;
        padding: inherit;
        width: inherit;
        height: var(--btn-tab-link-height);
        border: transparent;
        border-radius: var(--border-radius);
        padding: var(--btn-tab-link-padding);
        background-color: transparent;
        cursor: pointer;
        white-space: nowrap;
    }

    .active {
        color: white;
        background: var(--gradient);   
    }

    @media (960px <= width < 1200px) {
        .tab_container {
            /* Tab container */
            --tab-container-width: var(--reduced-width);
            --tab-container-height: 3.25rem;
            --tab-container-margin-top: 2.5rem;
            --tab-container-margin-bottom: 3.125rem;

            /* Tab list */
            --tab-list-container-width: 48.75rem;
            --tab-list-container-font-size: 0.7rem;

            /* Events tab */
            --events-tab-width: 48.75rem;

            /* Slider */
            --slider-width: 7.625rem;

            /* Button */
            --tab-list-container-font-size: 0.75rem;
            --btn-tab-link-height: 2rem;
            --btn-tab-link-padding: .5rem 1rem .5rem 1rem;
        }
    }

    @media (640px <= width < 960px) {
        .tab_container {
            /* Tab container */
            --tab-container-width: var(--reduced-width);
            --tab-container-height: 2.5rem;
            --tab-container-margin-top: 2.5rem;
            --tab-container-margin-bottom: 2.5rem;

            /* Tab list */
            --tab-list-container-width: var(--reduced-width);
            --tab-list-container-font-size: 0.625rem;

            /* Events tab */
            --events-tab-width: 37.5rem;

            /* Slider */
            --slider-width: 7.625rem;

            /* Button */
            --tab-list-container-font-size: 0.625rem;
            --btn-tab-link-height: 1.6875rem;
            --btn-tab-link-padding: .5rem .8rem;
        }

        .slider_container {
            display: none;
        }
    }

    @media (480px <= width < 640px) {
        .tab_container {
            /* Tab container */
            --tab-container-width: var(--reduced-width);
            --tab-container-height: 2rem;
            --tab-container-margin-top: 2.5rem;
            --tab-container-margin-bottom: 2.5rem;

            /* Tab list */
            --tab-list-container-width: var(--reduced-width);
            --tab-list-container-font-size: 0.4375rem;

            /* Events tab */
            --events-tab-width: 26.8125rem;

            /* Slider */
            --slider-width: 7.625rem;

            /* Button */
            --tab-list-container-font-size: 0.4375rem;
            --btn-tab-link-height: 1.6875rem;
            --btn-tab-link-padding: .5rem .7rem;
        }

        .slider_container {
            display: none;
        }
    }

    @media (width < 480px) {
        .tab_container {
            display: none;
        }
    }
</style>