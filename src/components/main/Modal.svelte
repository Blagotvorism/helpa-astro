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
    export let locale;

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
            <a href={event.link} class="link link_text btn_event-link gradient_span arrow-cap">
                {locale === "en" && "More about the activity" || "Подробнее о направлении"}
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
        /* Modal */
        --modal-width: 58.125rem;
        --modal-height: 33.5rem;
        /* Close BTN */
        --close-btn-width: 1.875rem;
        --close-btn-height: 1.875rem;
        --close-btn-top: 1.875rem;
        --close-btn-right: 1.875rem;
        /* Text */
        --modal-text-width: 25.375rem;
        --modal-text-height: 26.4375rem;
        --modal-text-margin-left: 3.125rem;
        --modal-text-margin-top: 3.5rem;
        /* Fonts */
        --heading-font-size: 3.125rem;
        --p-font-size: 1rem;
        --link-font-size: .875rem;
        /* Description */
        --modal-descr-width: 25rem;
        --modal-descr-height: 18.75rem;
        --modal-descr-margin: 1.25rem 0;
        /* Link */
        --link-width: 12.5rem;

        /* Slider */
        --slider-width: 25rem;
        --slider-height: 21.125rem;
        --slider-margin-right: 3.25rem;
        --slider-margin-top: 9.2rem;
        /* IMG_SLIDER CONTAINER*/
        --img-slider-max-width: 25rem;
        --img-slider-height: 15.625rem;
        --img-slider-margin-bottom: 1.625rem;
        /* IMAGE */
        --image-height: 15.625rem;
        --image-width: auto;
        --image-max-width: 25rem;
        --image-margin: 0 auto;
        /* SLIDER Container */
        --slider-container-width: 8.75rem;
        --slider-container-margin: 0 auto;
    }

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
        width: var(--modal-width);
        height: var(--modal-height);
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
        width: var(--close-btn-width);
        height: var(--close-btn-height);
        position: absolute;
        top: var(--close-btn-top);
        right: var(--close-btn-right);
    }

    .modal_text {
        display: block;
        width: var(--modal-text-width);
        height: var(--modal-text-height);
        margin-left: var(--modal-text-margin-left);
        margin-top: var(--modal-text-margin-top);
    }

    h2 {
        font-family: var(--font-lulo-bold);
        font-size: var(--heading-font-size);
    }

    p {
        font-size: var(--p-font-size);
        color: var(--dark-grey);
        font-family: var(--font-inter);
        display: inline-block;
        width: var(--modal-descr-width);
        height: var(--modal-descr-height);
        margin: var(--modal-descr-margin);
    }

    .link_text {
        margin: 0;
        padding: 0;
        height: auto;
        justify-content: space-between;
        cursor: pointer;
        font-family: var(--font-inter);
        font-size: var(--link-font-size);
        color: black;
        align-items: center;
    }

    .modal_slider {
        display: block;
        width: var(--slider-width);
        height: var(--slider-height);
        margin-right: var(--slider-margin-right);
        margin-top: var(--slider-margin-top);
    }

    .img_slider {
        display: block;
        max-width: var(--img-slider-max-width);
        height: var(--img-slider-height);
        margin-bottom: var(--img-slider-margin-bottom);
    }

    .slider_img {
        display: block;
        height: var(--image-height);
        width: auto;
        max-width: var(--image-max-width);
        object-fit: cover;
        border-radius: var(--border-radius);
        margin: var(--image-margin);
    }

    .slider_container {
        display: flex;
        justify-content: space-between;
        width: var(--slider-container-width);
        margin: var(--slider-container-margin);
    }

    @media (960px <= width < 1200px) {
        .modal-backdrop {
            /* Modal */
            --modal-width: 47.625rem;
            --modal-height: 26.3125rem;
            /* Close BTN */
            --close-btn-width: 1rem;
            --close-btn-height: 1rem;
            --close-btn-top: 1.75rem;
            --close-btn-right: 1.75rem;
            /* Text */
            --modal-text-width: 20.3125rem;
            --modal-text-height: 20.5625rem;
            --modal-text-margin-left: 3rem;
            --modal-text-margin-top: 2.75rem;
            /* Fonts */
            --heading-font-size: 2.5rem;
            --p-font-size: 0.75rem;
            --link-font-size: 0.875rem;
            /* Description */
            --modal-descr-width: 20.3125rem;
            --modal-descr-height: 13.125rem;
            --modal-descr-margin: 1.25rem 0;
            /* Link */
            --link-width: 12.6875rem;

            /* Slider */
            --slider-width: 20.4375rem;
            --slider-height: 16.375rem;
            --slider-margin-right: 2.625rem;
            --slider-margin-top: 7rem;
            /* IMG_SLIDER CONTAINER*/
            --img-slider-max-width: 20.4375rem;
            --img-slider-height: 12.1875rem;
            --img-slider-margin-bottom: 1rem;
            /* IMAGE */
            --image-height: 12.1875rem;
            --image-width: auto;
            --image-max-width: 20.4375rem;
            --image-margin: 0 auto;
            /* SLIDER Container */
            --slider-container-width: 7.1875rem;
            --slider-container-margin: 0 auto;
        }
    }

    @media (640px <= width < 960px) {
        .modal-backdrop {
            /* Modal */
            --modal-width: 28rem;
            --modal-height: 42.6875rem;
            /* Close BTN */
            --close-btn-width: 1rem;
            --close-btn-height: 1rem;
            --close-btn-top: 1.375rem;
            --close-btn-right: 1.375rem;
            /* Text */
            --modal-text-width: 23rem;
            --modal-text-height: 18.5rem;
            --modal-text-margin-left: 3rem;
            --modal-text-margin-top: 3rem;
            /* Fonts */
            --heading-font-size: 2.5rem;
            --p-font-size: 0.75rem;
            --link-font-size: 0.875rem;
            /* Description */
            --modal-descr-width: 23rem;
            --modal-descr-height: 12.1875rem;
            --modal-descr-margin: 1rem 0;
            /* Link */
            --link-width: 12.6875rem;

            /* Slider */
            --slider-width: 23rem;
            --slider-height: 16.375rem;
            --slider-margin-right: 0;
            --slider-margin-top: 0;
            /* IMG_SLIDER CONTAINER*/
            --img-slider-max-width: 23rem;
            --img-slider-height: 12.1875rem;
            --img-slider-margin-bottom: 1rem;
            /* IMAGE */
            --image-height: 12.1875rem;
            --image-width: auto;
            --image-max-width: 23rem;
            --image-margin: 0 auto;
            /* SLIDER Container */
            --slider-container-width: 7.1875rem;
            --slider-container-margin: 0 auto;
        }

        .modal {
            flex-direction: column;
        }

        .modal_text {
            height: auto;
            height: var(--modal-text-height);
        }

        .modal_descr {
            height: auto;
            max-height: var(--modal-descr-height);
        }

        .modal_slider {
            margin-left: var(--modal-text-margin-left);
            margin-bottom: 2.625rem;
        }

        .slider_img {
            object-fit: contain;
            border-radius: var(--border-radius);
        }
    }

    @media (480px <= width < 640px) {
        .modal-backdrop {
            /* Modal */
            --modal-width: 27.5rem;
            --modal-height: 17rem;
            /* Close BTN */
            --close-btn-width: 1rem;
            --close-btn-height: 1rem;
            --close-btn-top: 1.1rem;
            --close-btn-right: 1.5rem;
            /* Text */
            --modal-text-width: 11.5rem;
            --modal-text-height: 14.375rem;
            --modal-text-margin-left: 1.625rem;
            --modal-text-margin-top: 1.25rem;
            /* Fonts */
            --heading-font-size: 1rem;
            --p-font-size: 0.5rem;
            --link-font-size: 0.625rem;
            /* Description */
            --modal-descr-width: 11.5rem;
            --modal-descr-height: 10rem;
            --modal-descr-margin: 0.75rem 0;
            /* Link */
            --link-width: 9.4375rem;

            /* Slider */
            --slider-width: 11.75rem;
            --slider-height: 12.375rem;
            --slider-margin-right: 1.375rem;
            --slider-margin-top: 3.125rem;
            /* IMG_SLIDER CONTAINER*/
            --img-slider-max-width: 11.75rem;
            --img-slider-height: 9.5rem;
            --img-slider-margin-bottom: 0.75rem;
            /* IMAGE */
            --image-height: 9.5rem;
            --image-width: auto;
            --image-max-width: 11.75rem;
            --image-margin: 0 auto;
            --border-radius: 20px;
            /* SLIDER Container */
            --slider-container-width: 5rem;
            --slider-container-margin: 0 auto;
        }
    }

    @media (320px <= width < 480px) {
        .modal-backdrop {
            /* Modal */
            --modal-width: 17.5rem;
            --modal-height: 27.125rem;
            /* Close BTN */
            --close-btn-width: 1rem;
            --close-btn-height: 1rem;
            --close-btn-top: 1.25rem;
            --close-btn-right: 1.5rem;
            /* Text */
            --modal-text-width: 14.25rem;
            --modal-text-height: 11.5625rem;
            --modal-text-margin-left: 1.625rem;
            --modal-text-margin-top: 1.25rem;
            /* Fonts */
            --heading-font-size: 1rem;
            --p-font-size: 0.5rem;
            --link-font-size: 0.625rem;
            /* Description */
            --modal-descr-width: 14.25rem;
            --modal-descr-height: 14.25rem;
            --modal-descr-margin: 0.625rem 0;
            /* Link */
            --link-width: 9.4375rem;

            /* Slider */
            --slider-width: 14.25rem;
            --slider-height: 11.75rem;
            --slider-margin-right: 0;
            --slider-margin-top: 0;
            /* IMG_SLIDER CONTAINER*/
            --img-slider-max-width: 14.25rem;
            --img-slider-height: 8.8125rem;
            --img-slider-margin-bottom: 0.75rem;
            /* IMAGE */
            --image-height: 8.8125rem;
            --image-width: auto;
            --image-max-width: 14.25rem;
            --image-margin: 0 auto;
            --border-radius: 20px;
            /* SLIDER Container */
            --slider-container-width: 5.0625rem;
            --slider-container-margin: 0 auto;
        }

        .modal {
            flex-direction: column;
        }

        .modal_text {
            height: auto;
            height: var(--modal-text-height);
        }

        .modal_descr {
            height: auto;
            max-height: var(--modal-descr-height);
        }

        .modal_slider {
            margin-left: var(--modal-text-margin-left);
            margin-bottom: 1.25rem;
        }

        .slider_img {
            object-fit: cover;
            border-radius: var(--border-radius);
        }
    }
</style>