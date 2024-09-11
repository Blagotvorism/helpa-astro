<script>
    import categories from '../data/categories.json';
	import ArrowUp from './ArrowUp.svelte';
	import CardsPagination from './CardsPagination.svelte';

    let categoryText= 'Все';
    let category = 'all';
    let isDropdownOpen = false;

    export let events;
    export let cards;
    let paginatedCards;
    let totalCardsCount;

    const handleClickMainButton = (text) => {
        isDropdownOpen = !isDropdownOpen;
        categoryText = text;
        switch(categoryText) {
            case 'Все':
                category = 'all';
                break;
            case 'Защита природы':
                category = 'eco';
                break;
            case 'Помощь онкобольным':
                category = 'health';
                break;
            case 'Помощь закредитованным':
                category = 'debt';
                break;
            case 'Развитие спорта':
                category = 'sport';
                break;
            default:
                category = 'all';
        }

        return category;
    }

    export function findCards(category) {
        category !== 'all' ? cards = events.filter(cards => cards.category === category) : cards = events;
        return cards;
    }
</script>

<div class="event_cards">
    <div class="dropdown_categories">
        <div class="dropdown_categories-btn" 
            on:click={() => isDropdownOpen = !isDropdownOpen}
        >
            <span class="text">{categoryText}</span>
            <ArrowUp rotate />
        </div>
        <ul class={isDropdownOpen ? "dropdown_categories-list": 'hidden'}>
            {#each categories as category}
                <li class="dropdown_categories_item" 
                    on:click={() => handleClickMainButton(category.text)}
                >{category.text}</li>
            {/each}
        </ul>
    </div>
    <CardsPagination cards={findCards(category)} />
</div>

<style>
    .hidden {
        display: none;
    }

    .event_cards {
        display: block;
        height: auto;
    }

    .dropdown_categories {
        display: block;
        width: 9rem;
        height: 1.25rem;
        background-color: white;
        border-radius: 1.875rem;
    }

    .dropdown_categories-btn {
        border-radius: 1.875rem;
        /* border: 1px black solid; */
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
        text-decoration: none;
        width: 100%;
        height: 1.25rem;
        background-color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.3125rem 0.625rem;
        font-family: Inter;
        font-size: .5rem;
        cursor: pointer;
    }

    .text {
        display: inline-block;
        height: .7rem;
    }

    .dropdown_categories-list {
        position: relative;
        z-index: 10;
        background-color: rgba(255, 255, 255, 1);
        list-style-type: none;
        padding: 0;
        margin: 0;
        border-radius: .5rem;
        padding-bottom: .1rem;
        cursor: pointer;
    }

    li {
        width: inherit;
    }

    .dropdown_categories_item {
        margin-bottom: .5rem;
        margin-left: .8rem;
        text-align: start;
        width: 100%;
        font-family: Inter;
        font-size: .5rem;
    }

    .dropdown_categories_item:hover {
        background-color: #204A53;
        background-image: linear-gradient(to top, #094A6F, #64C8BD);
        background-size: 100%;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-text-fill-color: transparent;
    }

    @media (width >= 480px) {
        .event_cards {
            display: none;
        }
    }

</style>