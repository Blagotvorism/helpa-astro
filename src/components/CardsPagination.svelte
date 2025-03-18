<script>
    import Modal from "./main/Modal.svelte";
    export let cards;

    export let locale;

    let totalCards;
    let cardsLeft;
    let itemsToShow = 2;

    let scrollable = true;
    let myComponent;

    $: totalCards = cards.length;
    $: cardsLeft = itemsToShow >= cards.length;

    function loadMore() {
        itemsToShow += 2;
    }

    const wheel = (node, options) => {
        let { scrollable } = options;
        
        const handler = e => {
            if (!scrollable) e.preventDefault();
        };
        
        node.addEventListener('wheel', handler, { passive: false });
        
        return {
            update(options) {
                scrollable = options.scrollable;
            },
            destroy() {
                node.removeEventListener('wheel', handler, { passive: false });
            }
        };
    };

    function scrollIntoView() {
		const el = document.getElementById('component-container');
		// if (!el) return;
        el.scrollIntoView({
            behavior: 'smooth'
        });
    }

    function handleReceivedValue(varName, varValue) {
        if(varName === 'disabledScroll') {
            scrollable = !varValue;
        }
    }

    function renderComponent(target, props = {}) {
        // Destroy any existing component before creating a new one
        if (myComponent) {
            myComponent.$destroy();
        }

        // Create a new instance of the component
        myComponent = new Modal({
            target: target, // The DOM element where the component should be rendered
            props: props,   // Pass props to the component if needed
        });

        // Listen for the custom event from the component
        myComponent.$on('disabledScroll', (event) => {
            handleReceivedValue('disabledScroll', event.detail.disabledScroll);
        });
    }

    export function destroyComponent() {
        if (myComponent) {
            myComponent.$destroy(); // Destroy the component and clean up
            myComponent = null; // Reset the reference to avoid errors
        }
    }

    export function handleClick(event) {
        console.info('handleClick', event);
        let eventCard = event;
        const container = document.getElementById('component-container');
        renderComponent(container, {event: eventCard, scrollable: scrollable});
        scrollIntoView();
        scrollable = false;
    }

</script>

<svelte:window use:wheel={{scrollable}} />

<div class="paginated_cards_container">
    {#if totalCards > 0}
        <div class="cards">
            {#each cards.slice(0, itemsToShow) as card}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div class="event_card" on:click={() => handleClick(card)}>
                    <img src={card.imageURL} alt={card.title} class='event_card-img' />
                    <div class="event_card-text">
                        <h3 class="event_card-title">{card.title}</h3>
                        <p class="event_card-descr">{card.descriptionShort}</p>
                        <button on:click={() => handleClick(card)} class="btn-card gradient_span">
                            <span class="btn_innertext_secondary">{locale === "en" && "Details" || "Подробнее"}</span><span class="btn_arrow gradient_span"> ❯ </span>
                        </button>
                    </div>
                </div>
            {/each}
            {#if !cardsLeft}
                <div class="pagination">      
                    <button on:click={loadMore}>{locale === "en" && "Load more" || "Загрузить еще"}</button>
                </div>
            {/if}
        </div>
    {:else}
        <div class="no_cards">
            <p class="no_cards-p">
                {locale === "en" &&
                    "Report about past events will be published here soon!" ||
                    "Скоро здесь будет опубликован отчет о прошедших мероприятиях!"
                }  
            </p>
        </div>
    {/if}
</div>

<style>
    .pagination {
        display: block;
        width: 5rem;
        margin: auto;
        margin-top: 1.25rem;
    }

    button {
        margin: 0;
        padding: 0;
        width: 100%;
        cursor: pointer;
        background: none;
        border: none;
        outline: none;
        font-size: 0.625rem;

        background-color: #204A53;
        background-image: linear-gradient(to top, #094A6F, #64C8BD);
        background-size: 100%;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-text-fill-color: transparent;
    }

    .paginated_cards_container {
        display: flex;
        position: relative;
        flex-direction: column-reverse;
        align-content: space-between;
        width: 100%;
        min-height: 20rem;
    }

    .cards {
        margin-top: 1rem;
        margin-bottom: 2rem;
        display: block;
        /* min-height: 8.5rem; */
        height: auto;
    }

    .event_card {
        cursor: pointer;
        display: flex;
        flex-direction: row;
        width: 17.5rem;
        height: 8.5rem;
        border-radius: var(--border-radius);
        background-color: white;
        position: relative;
        border: 1px solid #eee;
        margin-bottom: 1.25rem;
    }


    .event_card-img {
        display: block;
        height: inherit;
        width: 9rem;
        border-top-left-radius: 1.25rem;
        border-bottom-left-radius: 1.25rem;
        object-fit: cover;
    }

    .event_card-text {
        position: relative;
        display: block;
        height: inherit;
        width: 8.5rem;
    }

    .event_card-title {
        display: inline-block;
        width: 7.3125rem;
        height: auto;
        color: black;
        font-family: var(--font-inter);
        font-size: 0.625rem;
        line-height: 0.75rem;
        margin-left: 0.75rem;
        margin-bottom: 0.5rem;
        margin-top: 1.5rem;
    }

    .event_card-descr {
        display: inline-block;
        width: 7.3125rem;
        max-height: 3rem;
        min-height: 2rem;
        margin-left: 0.75rem;
        font-family: var(--font-inter);
        font-size: .5rem;
        color: var(--dark-grey);
    }

    .btn-card {
        position: absolute;
        bottom: 1.25rem;
        left: 0.75rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 4.65rem;
        cursor: pointer;
        padding: 0;
        font-family: var(--font-inter);
        font-size: .5rem;
    }

    .no_cards {
        text-align: center;
        position: absolute;
        display: block;
        width: 15.625rem;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>