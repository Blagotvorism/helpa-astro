<script>
    export let rotate = false;
</script>

<div class={rotate ? 'arrowup rotate' : 'arrowup'}>
    <svg fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.5 0L6.53109 3.75H0.468911L3.5 0Z" fill={rotate ? '#898989' : 'url(#paint0_linear_1105_2490)'}/>
        <defs>
            <linearGradient id="paint0_linear_1105_2490" x1="3.5" y1="5" x2="3.5" y2="0" gradientUnits="userSpaceOnUse">
                <stop stop-color="#094A6F"/>
                <stop offset="1" stop-color="#64C8BD"/>
            </linearGradient>
        </defs>
    </svg>
</div>

<style>

    .arrowup {
        margin-top: 2px;
        width: 7px;
        height: 4px;
    }

    svg {
        width: inherit;
    }

    .rotate {
        transform: rotateX(180deg);
    }

    @media (480px <= width < 640px) {
        .arrowup {
            margin-top: 1px;
        }
    }

    @media (320px <= width < 480px) {
        .arrowup {
            margin-top: 0;
        }
    }
</style>