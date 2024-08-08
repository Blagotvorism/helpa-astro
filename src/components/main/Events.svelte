<script>
	import Carousel from './Carousel.svelte';
    import EventsTab from './EventsTab.svelte';
    import Modal from './Modal.svelte';
	import events from '../../data/events.json';
    let slider;
    let category;
    let cards;

    export function findCards(category) {
        category !== 'all' ? cards = events.filter(cards => cards.category === category).length : cards = events.length;
        return cards;
    }

</script>

<div class="cards_container">
    <EventsTab bind:category btnAction={slider} cards={cards} />
    <div class="event_cards">
        {#if findCards(category) !== 0}
            {#key category}
                <Carousel bind:this={slider} siemaItems={findCards(category)}>
                    {#if category === 'all'}
                        {#each events as event, index (index)}
                            <div class="event_card">
                                <img src={event.imageURL} alt={event.description} class='event_card-img' />
                                <div class="event_card-text">
                                    <h3 class="event_card-title">{event.title}</h3>
                                    <p class="event_card-descr">{event.description}</p>
                                    <button class="btn btn_text btn_event-link gradient_span"><span class="btn_innertext_secondary">Присоединиться</span><span class="btn_arrow gradient_span"> ❯ </span></button>
                                </div>
                            </div>
                        {/each}
                    {:else}
                        {#each events as event, index (index)}
                            {#if category === event.category}
                            <div class="event_card">
                                <img src={event.imageURL} alt={event.description} class='event_card-img' />
                                <div class="event_card-text">
                                    <h3 class="event_card-title">{event.title}</h3>
                                    <p class="event_card-descr">{event.description}</p>
                                    <button class="btn btn_text btn_event-link gradient_span"><span class="btn_innertext_secondary">Присоединиться</span><span class="btn_arrow gradient_span"> ❯ </span></button>
                                </div>
                            </div>
                            {/if}
                        {/each}
                    {/if}
                </Carousel>
            {/key}
        {:else}
            <div class="no_cards_container">
                <p class="no_cards">
                    Скоро здесь будет опубликован отчет о прошедших мероприятиях!
                </p>
            </div>
        {/if}
    </div>
</div>

<style>
    .cards_container {
        display: block;
        width: 70rem;
        height: 24.6rem;
    }

    .event_cards {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: inherit;
    }

    .no_cards_container {
        display: block;
        width: 23.75rem;
        margin: auto;
        margin-top: 6.875rem;
    }

    .no_cards {
        display: inline-block;
        width: inherit;
        text-align: center;
        font-size: 1.25rem;
        color: black;
        text-decoration: none;
    }
    
    .event_card {
        display: flex;
        flex-direction: row;
        width: 34.375rem;
        height: 18.125rem;
        border-radius: 1.875rem;
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
        background-color: white;
    }

    .event_card-img {
        display: block;
        height: inherit;
        width: 16.5625rem;
        border-top-left-radius: 1.875rem;
        border-bottom-left-radius: 1.875rem;
    }

    .event_card-text {
        display: block;
        height: inherit;
        width: 17.8125rem;
    }

    .event_card-title {
        display: inline-block;
        width: 15.375rem;
        height: 3rem;
        color: black;
        font-family: var(--font-inter);
        font-size: 1.4rem;
        line-height: 1.875rem;
        margin-left: 1.25rem;
        margin-bottom: 2.5rem;
        margin-top: 1.875rem;
    }

    .event_card-descr {
        display: inline-block;
        width: 15.375rem;
        height: 6.125rem;
        margin-left: 1.25rem;
        font-family: var(--font-inter);
        font-size: 1rem;
        color: var(--dark-grey);
    }

    .btn_event-link {
        padding: 0;
        margin-left: 1.25rem;
        margin-bottom: 2rem;
    }

    .btn_arrow {
        margin-left: .4rem;
        margin-top: 2px;
    }

</style>