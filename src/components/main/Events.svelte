<script>
	import Carousel from './Carousel.svelte';
    import EventsTab from './EventsTab.svelte';
    import Modal from './Modal.svelte';
	import events from '../../data/events.json';
	import SelectDropDown from '../SelectDropDown.svelte';

    let slider;
    let category;
    let cards;
    let scrollable = true;
    let myComponent;

    export let locale;

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

    export function findCards(category) {
        category !== 'all' ? cards = events.filter(cards => cards.category === category).length : cards = events.length;
        return cards;
    }

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
        let eventCard = event;
        const container = document.getElementById('component-container');
        renderComponent(container, {event: eventCard, scrollable: scrollable});
        scrollIntoView();
        scrollable = false;
    }

</script>

<svelte:window use:wheel={{scrollable}} />

<div class="cards_container">
    <EventsTab locale={locale} bind:category btnAction={slider} cards={cards} />
    <SelectDropDown events={events} locale={locale}/>
    <div class="event_cards">
        {#if findCards(category) !== 0}
            {#key category}
                <Carousel bind:this={slider} siemaItems={findCards(category)}>
                    {#if category === 'all'}
                        {#each events as event, index (index)}
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <div class="event_card" on:click={() => handleClick(event)} role="button" tabindex="-1">
                                <div class="event_image">
                                    <img src={event.imageURL} alt={typeof(event.title) === 'string' ? event.title : event.title[locale]} class='event_card-img' />
                                </div>
                                <div class="event_card-text">
                                    <p class="event_card-title">{typeof(event.title) === 'string' ? event.title : event.title[locale]}</p>
                                    <p class="event_card-descr">{event.descriptionShort}</p>
                                    <button on:click={() => handleClick(event)} class="btn btn_text btn_event-link gradient_span">
                                        <span class="btn_innertext_secondary">{locale === "en" && "Details" || "Подробнее"}</span>
                                    <span class="btn_arrow gradient_span"> ❯ </span></button>
                                </div>
                            </div>
                        {/each}
                    {:else}
                        {#each events as event, index (index)}
                            {#if category === event.category}
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <div class="event_card" on:click={() => handleClick(event)} role="button" tabindex="-1">
                                <div class="event_image">
                                    <img src={event.imageURL} alt={typeof(event.title) === 'string' ? event.title : event.title[locale]} class='event_card-img' />
                                </div>
                                <div class="event_card-text">
                                    <p class="event_card-title">{typeof(event.title) === 'string' ? event.title : event.title[locale]}</p>
                                    <p class="event_card-descr">{event.descriptionShort}</p>
                                    <button on:click={() => handleClick(event)} class="btn btn_text btn_event-link gradient_span">
                                        <span class="btn_innertext_secondary">{locale === "en" && "Details" || "Подробнее"}</span><span class="btn_arrow gradient_span"> ❯ </span></button>
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
                    {locale === "en" &&
                        "Report about past events will be published here soon!" ||
                        "Скоро здесь будет опубликован отчет о прошедших мероприятиях!"
                    }
                    
                </p>
            </div>
        {/if}
    </div>
</div>

<style>

    h3 {
        font-weight: 400;
    }

    .cards_container {
        /* Container vars */
        --cards-container-width: var(--reduced-width);
        --cards-container-heigth: 30.85rem;
        --no-cards-container-width: 23.75rem;
        --no-cards-container-mt: 6.875rem;

        /* no cards vars */
        --no-cards-fs: 1.25rem;

        /* Event card vars */
        --event-card-width: 34.375rem;
        --event-card-heigth: 18.125rem;
        --event-card-img-width: 16.5625rem;
        --event-card-text-width: 17.8125rem;

        /* Event card title vars */
        --event-card-title-width: 15.375rem;
        --event-card-title-height: 3rem;
        --event-card-title-font-size: 1.5rem;
        --event-card-title-line-height: 1.875rem;
        --event-card-title-margin-left: 1.25rem;
        --event-card-title-margin-bottom: 2.5rem;
        --event-card-title-margin-top: 1.875rem;

        /* Event card descr vars */
        --event-card-descr-width: 15.375rem;
        --event-card-descr-height: 7.35rem;
        --event-card-descr-margin-left: 1.25rem;
        --event-card-descr-font-size: 1rem;

        /* button */
        --button-font-size: 0.875rem;
        --button-width: 4.6875rem;
        --button-ml: 1.25rem;
        --button-mb: 2rem;
    }

    .cards_container {
        position: relative;
        display: block;
        width: var(--cards-container-width);
        height: var(--cards-container-heigth);
    }

    .event_cards {
        cursor: pointer;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: inherit;
    }

    .no_cards_container {
        position: absolute;
        display: block;
        width: var(--no-cards-container-width);
        top: 75%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .no_cards {
        display: inline-block;
        width: inherit;
        text-align: center;
        font-size: var(--no-cards-fs);
        color: black;
        text-decoration: none;
    }
    
    .event_card {
        display: flex;
        flex-direction: row;
        width: var(--event-card-width);
        height: var(--event-card-heigth);
        border-radius: var(--border-radius);
        background-color: white;
        position: relative;
        border: 1px solid #eee;
        overflow: hidden;
    }

    .event_card-img,
    .event_image {
        display: block;
        height: inherit;
        width: var(--event-card-img-width);
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
        object-fit: cover;
        overflow: hidden;  
    }

    .event_card-img {
        transition: transform 0.5s;
    }

    .event_card:hover .event_card-img {
        transform: scale(1.1);
    }

    .event_card-text {
        display: block;
        height: inherit;
        width: var(--event-card-text-width);
    }

    .event_card-title {
        display: inline-block;
        width: var(--event-card-title-width);
        height: var(--event-card-title-height);
        color: black;
        font-family: var(--font-inter);
        font-size: var(--event-card-title-font-size);
        font-weight: 400 !important;
        line-height: var(--event-card-title-line-height);
        margin-left: var(--event-card-title-margin-left);
        margin-bottom: var(--event-card-title-margin-bottom);
        margin-top: var(--event-card-title-margin-top);
    }

    .event_card-descr {
        display: inline-block;
        width: var(--event-card-descr-width);
        height: var(--event-card-descr-height);
        margin-left: var(--event-card-descr-margin-left);
        font-family: var(--font-inter);
        font-size: var(--event-card-descr-font-size);
        color: var(--dark-grey);
    }

    .btn_event-link {
        cursor: pointer;
        padding: 0;
        margin-left: var(--button-ml);
        margin-bottom:  var(--button-mb);
    }

    .btn_arrow {
        margin-left: .4rem;
        margin-top: 2px;
    }

    .btn_innertext_secondary {
        font-family: var(--font-inter);
        font-size: var(--button-font-size);
    }

    @media (960px <= width < 1200px) {
        .cards_container {
            /* Container vars */
            --cards-container-width: var(--reduced-width);
            --cards-container-heigth: 26.25rem;
            --no-cards-container-width: 23.6875rem;
            --no-cards-container-mt: 9.375rem;

            /* no cards vars */
            --no-cards-fs: 1.25rem;

            /* Event card vars */
            --event-card-width: 28.125rem;
            --event-card-heigth: 14.875rem;
            --event-card-img-width: 13.5625rem;
            --event-card-text-width: 14.5625rem;

            /* Event card title vars */
            --event-card-title-width: 12.125rem;
            --event-card-title-height: auto;
            --event-card-title-font-size: 1.25rem;
            --event-card-title-line-height: 1.5rem;
            --event-card-title-margin-left: 1.1rem;
            --event-card-title-margin-bottom: 1.25rem;
            --event-card-title-margin-top: 1.5rem;

            /* Event card descr vars */
            --event-card-descr-width: 11.875rem;
            --event-card-descr-height: 5.75rem;
            --event-card-descr-margin-left: 1.1rem;
            --event-card-descr-font-size: 0.75rem;

            /* button */
            --button-font-size: 0.875rem;
            --button-width: 6.0625rem;
            --button-ml: 1.1rem;
            --button-mb: 1.75rem;
        }
    }

    @media (640px <= width < 960px) {
        .cards_container {
            /* Container vars */
            --cards-container-width: var(--reduced-width);
            --cards-container-heigth: 20.875rem;
            --no-cards-container-width: 23.75rem;
            --no-cards-container-mt: 9.375rem;

            /* no cards vars */
            --no-cards-fs: 1.25rem;

            /* Event card vars */
            --event-card-width: 18.625rem;
            --event-card-heigth: 10.8125rem;
            --event-card-img-width: 9rem;
            --event-card-text-width: calc(var(--event-card-width) - var(--event-card-img-width));

            /* Event card title vars */
            --event-card-title-width: 7.3125rem;
            --event-card-title-height: auto;
            --event-card-title-font-size: 0.75rem;
            --event-card-title-line-height: 1rem;
            --event-card-title-margin-left: 0.75rem;
            --event-card-title-margin-bottom: 0.625rem;
            --event-card-title-margin-top: 1.5rem;

            /* Event card descr vars */
            --event-card-descr-width: 8rem;
            --event-card-descr-height: 3.7rem;
            --event-card-descr-margin-left: 0.75rem;
            --event-card-descr-font-size: 0.625rem;

            /* button */
            --button-font-size: 0.625rem;
            --button-width: 4.6875rem;
            --button-ml: 0.75rem;
            --button-mb: 1rem;
        }
    }

    @media (480px <= width < 640px) {
        .cards_container {
            /* Container vars */
            --cards-container-width: 38.125rem;
            --cards-container-heigth: 18.375rem;
            --no-cards-container-width: 14.625rem;
            --no-cards-container-mt: 9.375rem;

            /* no cards vars */
            --no-cards-fs: 0.75rem;

            /* Event card vars */
            --event-card-width: 18.5625rem;
            --event-card-heigth: 10.8125rem;
            --event-card-img-width: 9rem;
            --event-card-text-width: calc(var(--event-card-width) - var(--event-card-img-width));

            /* Event card title vars */
            --event-card-title-width: 7.3125rem;
            --event-card-title-height: auto;
            --event-card-title-font-size: 0.75rem;
            --event-card-title-line-height: 1rem;
            --event-card-title-margin-left: 0.75rem;
            --event-card-title-margin-bottom: 0.625rem;
            --event-card-title-margin-top: 1.5rem;

            /* Event card descr vars */
            --event-card-descr-width: 8rem;
            --event-card-descr-height: 3.7rem;
            --event-card-descr-margin-left: 0.75rem;
            --event-card-descr-font-size: 0.625rem;

            /* button */
            --button-font-size: 0.625rem;
            --button-width: 4.6875rem;
            --button-ml: 0.75rem;
            --button-mb: 1rem;
        }

        .no_cards_container {
            position: absolute;
            display: block;
            width: var(--no-cards-container-width);
            top: 75%;
            left: 50%;
            transform: translate(-87.5%, -75%);
        }
    }

    @media (320px <= width < 480px) {
        .cards_container {
            /* Container vars */
            --cards-container-width: var(--reduced-width);
            --cards-container-heigth: 79.375vw;
            --no-cards-container-width: 73.125vw;
            --no-cards-container-mt: 9.375rem;

            /* no cards vars */
            --no-cards-fs: 3.75vw;

            /* Event card vars */
            --event-card-width: 92.8125vw;
            --event-card-heigth: 54.0625vw;
            --event-card-img-width: 45vw;
            --event-card-text-width: calc(var(--event-card-width) - var(--event-card-img-width));

            /* Event card title vars */
            --event-card-title-width: 36.5625vw;
            --event-card-title-height: auto;
            --event-card-title-font-size: 3.75vw;
            --event-card-title-line-height: 5vw;
            --event-card-title-margin-left: 3.75vw;
            --event-card-title-margin-bottom: 3.125vw;
            --event-card-title-margin-top: 7.5vw;

            /* Event card descr vars */
            --event-card-descr-width: 40vw;
            --event-card-descr-height: 18.5vw;
            --event-card-descr-margin-left: 3.75vw;
            --event-card-descr-font-size: 3.125vw;

            /* button */
            --button-font-size: 3.125vw;
            --button-width: 23.4375vw;
            --button-ml: 3.75vw;
            --button-mb: 5vw;
        }

        .cards_container {
            /* min-height: 20.75rem; */
            height: auto;
        }

        .event_cards {
            display: none;
        }

        .no_cards_container {
            position: absolute;
            display: block;
            width: var(--no-cards-container-width);
            top: 87.5%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
</style>