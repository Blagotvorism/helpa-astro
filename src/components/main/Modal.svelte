<script>
    import Carousel from "./Carousel.svelte";
    import CloseBtn from "../CloseBtn.svelte";
    import ArrowButton from "../ArrowButton.svelte";
    import { createEventDispatcher } from 'svelte';
    import {get_current_component} from 'svelte/internal';
    const THISComponent = get_current_component();
    const dispatch = createEventDispatcher();

    function destroySelf(){
        disabledScroll = false;
        THISComponent.$destroy();
        dispatch('disabledScroll', { disabledScroll });
    }

    export let event;
    export let slider;
    export let disabledScroll;

    let rotate = true;
</script>

<div class="modal-backdrop">
    <div class="modal" id="modal">
        <button class="close_btn" on:click={() => (destroySelf())}>
            <CloseBtn />
        </button>
        <div class="modal_text">
            <h2 class="gradient_span">{event.year}</h2>
            <p class="modal_descr">{event.descriptionFull}</p>
            <a href={event.link} class="link link_text btn_event-link gradient_span">
                <span class="btn_innertext_secondary">Подробнее о направлении</span>
                <span class="btn_arrow gradient_span"> ❯ </span>
            </a>
        </div>
        <div class="modal_slider">
            <div class="img_slider">
                <Carousel bind:this={slider} siemaItems={event.sliderImages.length} theme='img_slider'>
                    {#each event.sliderImages as sliderImg}
                        <img src={sliderImg} alt="event" class='slider_img'/>
                    {/each}
                </Carousel>
            </div>
            <div class="slider_container">
                <ArrowButton rotate={rotate} theme='round' btnAction={slider} cards={event.sliderImages.length} />
                <ArrowButton rotate={!rotate} theme='round' btnAction={slider} cards={event.sliderImages.length} />
            </div>
        </div>
    </div>
</div>

<style>
    .modal-backdrop {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
    }
    .modal {
        background-color: rgba(255, 255, 255, 1);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        position: absolute;
        z-index: 1001;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 58.125rem;
        height: 33.5rem;
        box-shadow: var(--box-shadow);
        border-radius: var(--border-radius);
    }

    button, button:focus{
        outline: none;
        background: transparent;
        border: none;
    }

    button:active{
        outline: none;
        background: transparent;
        border: none;
    }

    .close_btn {
        cursor: pointer;
        width: 1.875rem;
        height: 1.875rem;
        position: absolute;
        top: 1.875rem;
        right: 1.875rem;
    }

    .modal_text {
        display: block;
        width: 25.375rem;
        height: 26.4375rem;
        margin-left: 3.125rem;
        margin-top: 3.5rem;
    }

    h2 {
        font-family: var(--font-lulo-bold);
        font-size: 3.125rem;
    }

    p {
        display: block;
        font-size: 1rem;
        color: var(--dark-grey);
        font-family: var(--font-inter);
        display: inline-block;
        width: 25rem;
        height: 18.75rem;
        margin: 1.25rem 0;
    }

    .link {
        cursor: pointer;
        font-family: var(--font-inter);
        font-size: 1rem;
        color: black;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .link_text {
        margin: 0;
        padding: 0;
        height: auto;
        width: 12.5rem;
        display: flex;
        gap: var(--text-gap);
        justify-content: space-between;
        font-size: 0.875rem;
    }

    .modal_slider {
        display: block;
        width: 25rem;
        height: 21.125rem;
        margin-right: 3.25rem;
        margin-top: 9.2rem;
    }

    .img_slider {
        display: block;
        max-width: 25rem;
        height: 15.625rem;
        margin-bottom: 1.625rem;
    }

    .slider_img {
        display: block;
        height: 15.625rem;
        width: auto;
        max-width: 25rem;
        object-fit: cover;
        border-radius: var(--border-radius);
        margin: 0 auto;
    }

    .slider_container {
        display: flex;
        justify-content: space-between;
        width: 8.75rem;
        margin: 0 auto;
    }
</style>