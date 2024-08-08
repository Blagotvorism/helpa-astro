<script>
    import Carousel from "./Carousel.svelte";
    import CloseBtn from "../CloseBtn.svelte";
    import ArrowButton from "../ArrowButton.svelte";

    export let event;
    export let btnAction;

    let rotate = true;
</script>

<div class="modal">
    <button class="close_btn" >
        <CloseBtn />
    </button>
    <div class="modal_text">
        <h2>2024</h2>
        <p class="modal_text">2024 год наше сообщество продолжило организацию костюмированных массовых заездов. На каждом мероприятии примерно 40%-60% новых людей, что не может не радовать и говорит о популяризации нашими силами катания в обществе единомышленников и друзей, которых они находят в наших рядах. В эпоху индивидуализма и популяризации методов удаленного взаимодействия индивидов, очень важно чувствовать себя частью чего-то большего, социального. Ведь на самом деле мы живём в социуме, где почти каждый не чувствует себя его частью. Появление таких сообществ решает эту проблематику и улучшает психологическое здоровье в условиях современных реалий. </p>
        <a href="/" classes="link link_text">
            <span class="link-innertext-secondary">Присоединиться</span>
        </a>
    </div>
    <div class="modal_slider">
        <div class="slider_container">
            <ArrowButton rotate={rotate} theme='round' />
            <ArrowButton rotate={!rotate} theme='round' />
        </div>
    </div>
</div>

<style>
    .modal {
        display: flex;
        flex-direction: row;
        position: absolute;
        z-index: 1000;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 58.125rem;
        height: 33.5rem;
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
        top: 1rem;
        right: 1rem;
        
    }

    .modal_text {
        display: block;
        width: 25.375rem;
        height: 26.4375rem;
    }

    h2 {
        font-family: var(--font-lulo-bold);
        font-size: 3.125rem;
        color: var(--gradient);
    }

    p {
        font-size: 1rem;
        color: --dark-grey;
        font-family: var(--font-inter);
        display: inline-block;
        width: inherit;
        max-height: 18.75rem;
    }

    a {
        --primary-color: #64C8BD;
        --link-width: 16.6rem;
        --link-height: 3.5rem;
        --square-size: 3.6rem;
        --text-gap: 0.625rem;
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
        width: auto;
        display: flex;
        gap: var(--text-gap);
        justify-content: space-between;
        font-size: 0.875rem;
        background: var(--gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .modal_slider {
        display: block;
        width: 25rem;
        height: 21.125rem;
    }

    .slider_container {
        display: flex;
        justify-content: space-between;
        width: 8.25rem;
    }
</style>