<script>
    export let rotate;
    export let btnAction;
    export let cards;
    export let theme;
    export let url;

    let leftAction = cards !==0 && rotate;
</script>

{#if theme === 'round'}
    <button class='btn btn-round' on:click={leftAction ? btnAction.left : btnAction.right}>
        <svg class:rotate={rotate} fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <linearGradient id="btn" gradientUnits="userSpaceOnUse" x1=".0005" x2="19.9922" y1="10.0014" y2="10.0014">
                <stop offset="0" stop-color="#094a6f"/>
                <stop offset="1" stop-color="#64c8bd"/>
            </linearGradient>
            <path d="m11.1838 19.5166 8.3334-8.3333c.1517-.1585.2706-.3454.35-.55.1667-.4058.1667-.86088 0-1.26665-.0794-.20459-.1983-.39149-.35-.55l-8.3334-8.333333c-.1554-.155398-.3398-.278665-.5429-.362766-.203-.0841004-.4206-.12738694-.6404-.12738694-.44384 0-.8695.17631294-1.18334.49015294-.31383.313839-.49015.739493-.49015 1.183333s.17632.86949.49015 1.18333l5.50004 5.48334h-12.65003c-.44203 0-.865956.17559-1.178517.48815s-.48815327.73648-.48815327 1.17851c0 .44202.17559227.86592.48815327 1.17852s.736487.4881 1.178517.4881h12.65003l-5.50004 5.4834c-.15621.1549-.2802.3393-.36481.5424-.08462.2031-.12818.4209-.12818.6409s.04356.4379.12818.641c.08461.2031.2086.3874.36481.5423.15494.1563.33928.2803.54238.3649s.42094.1281.64096.1281c.22 0 .4379-.0435.641-.1281s.3874-.2086.5423-.3649z" fill="url(#btn)"/>
        </svg>
    </button>
{:else}
    <a class='link link_square link_about_card' href={url} aria-label='ссылка' >
        <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <linearGradient id="btn1" gradientUnits="userSpaceOnUse" x1=".0005" x2="19.9922" y1="10.0014" y2="10.0014">
                <stop offset="0" stop-color="#094a6f"/>
                <stop offset="1" stop-color="#64c8bd"/>
            </linearGradient>
            <path d="m11.1838 19.5166 8.3334-8.3333c.1517-.1585.2706-.3454.35-.55.1667-.4058.1667-.86088 0-1.26665-.0794-.20459-.1983-.39149-.35-.55l-8.3334-8.333333c-.1554-.155398-.3398-.278665-.5429-.362766-.203-.0841004-.4206-.12738694-.6404-.12738694-.44384 0-.8695.17631294-1.18334.49015294-.31383.313839-.49015.739493-.49015 1.183333s.17632.86949.49015 1.18333l5.50004 5.48334h-12.65003c-.44203 0-.865956.17559-1.178517.48815s-.48815327.73648-.48815327 1.17851c0 .44202.17559227.86592.48815327 1.17852s.736487.4881 1.178517.4881h12.65003l-5.50004 5.4834c-.15621.1549-.2802.3393-.36481.5424-.08462.2031-.12818.4209-.12818.6409s.04356.4379.12818.641c.08461.2031.2086.3874.36481.5423.15494.1563.33928.2803.54238.3649s.42094.1281.64096.1281c.22 0 .4379-.0435.641-.1281s.3874-.2086.5423-.3649z" fill="url(#btn1)"/>
        </svg>
    </a>
{/if}



<style>
    .rotate {
        transform: rotate(180deg);
    }

    button:hover svg path,
    .link:hover svg path {
        fill: white;
    }

    .btn-round {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 4rem;
        height: 4rem;
        border: none;
        border-radius: 50%;
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
        background-color: white;
    }

    .btn-round:hover,
    .btn-round:active {
        background: var(--gradient);
    }

    .link_about_card {
        position: absolute;
        right: 0;
        bottom: 0;
        z-index: 10;
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

    .link_square {
        border-radius: 1rem 0 1.875rem 0;
        width: 3.6rem;;
        height: 3.6rem;;
        background-color: white;
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
    }

    .link_square:hover,
    .link_square:active {
        background: var(--gradient);
    }

    @media (960px <= width < 1200px) {
        .btn-round {
            width: 3.25rem;
            height: 3.25rem;
        }

        svg {
            width: 1rem;
            height: 1rem;
        }
    }

    @media (640px <= width < 960px) {
        .btn-round {
            width: 3.25rem;
            height: 3.25rem;
        }

        svg {
            width: 1rem;
            height: 1rem;
        }
    }

    @media (480px <= width < 640px) {
        .btn-round {
            width: 2.1875rem;
            height: 2.1875rem;
        }

        .link_square {
            width: 2.8125rem;
            height: 2.8125rem;
        }

        svg {
            width: .75rem;
            height: 0.75rem;
        }
    }

    @media (320px <= width < 480px) {
        .btn-round {
            width: 2.1875rem;
            height: 2.1875rem;
        }

        .link_square {
            width: 2.8125rem;
            height: 2.8125rem;
        }

        svg {
            width: .75rem;
            height: .75rem;
        }
    }

</style>