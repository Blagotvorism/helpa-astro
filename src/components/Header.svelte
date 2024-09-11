<script>
    import links from '../data/links.json';
	import BurgerMenu from './BurgerMenu.svelte';
    import Dropdown from './Dropdown.svelte';

    export let mainPage = false;
    let innerWidth = 0;

</script>

<svelte:window bind:innerWidth />

<header class={mainPage ? "header" : "header_bg"}>
    <div class="header">
        <a href="/" class="header-logo_main">
            <img src='/logos/logo-grey.svg' class="header-logo_main" alt="helpa-project-logo"/>
        </a>
        <nav class="nav-links">
            {#each links as link}
                <a href={link.url} class="nav-link">{link.text}</a>
            {/each}
        </nav>
        <nav class="dropdown-nav">
            <a href={links[0].url} class="nav-link">{links[0].text}</a>
            <Dropdown data={links} text='Направления помощи'/>
            <a href={links[5].url} class="nav-link">{links[5].text}</a>
        </nav>
        <a href="/" class="header-logo_tokenomika">
            <img src='/logos/tokenomika_logo.svg' class="header-logo_tokenomika" alt="tokenomika-logo"/>
        </a>
        <BurgerMenu links={links} />
    </div>
</header>

<style>
    header {
        --header-bg-color: rgba(255, 255, 255, 0.8);
        --header-width: var(--reduced-width);
        --header-height: 4.625rem;
        --nav-links-width: 58.25rem;
        --font-size: 0.875rem;
        --main-logo-width: 2.9375rem;
        --tokenomika-logo-width: 2.9375rem;
        --tokenomika-logo-height: 1.625rem;
    }
    
    .header {
        z-index: 99;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: var(--header-width);
        position: absolute;
        top: 1rem;
        left: 50%;
        transform: translateX(-50%);
    }

    .header_bg {
        z-index: 99;
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100vw;
        height: var(--header-height);
        background-color: var(--header-bg-color);
        border-bottom-right-radius: var(--border-radius);
    }

    .header-logo_main {
        display: block;
        width: var(--main-logo-width);
        height: var(--main-logo-width);
    }

    .header-logo_tokenomika {
        display: block;
        width: var(--tokenomika-logo-width);
        height: var(--tokenomika-logo-height);
    }

    .nav-links {
        width: var(--nav-links-width);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-self: center;
    }

    .nav-link {
        display: inline-block;
        font-family: var(--font-inter);
        font-size: var(--font-size);
        color: var(--dark-grey);
        text-decoration: none;
    }

    a {
        cursor: pointer;
    }

    .nav-link:hover, 
    .nav-link:active {
        background-color: var(--green);
        background-image: var(--gradient);
        background-size: 100%;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-text-fill-color: transparent;
    }

    .dropdown-nav {
        display: none;
    }

    .burger-menu_links {
        display: none;
    }

    @media (960px <= width < 1200px) {
        header {
            --header-width: var(--reduced-width);
            --header-height: 4.125rem;
            --nav-links-width: 48.1875rem;
            --font-size: 0.75rem;
            --main-logo-width: 2.25rem;
            --tokenomika-logo-width: 2.9375rem;
            --tokenomika-logo-height: 1.625rem;
        }
    }

    @media (640px <= width < 960px) {
        header {
            --header-width: var(--reduced-width);
            --header-height: 4.125rem;
            --nav-links-width: 48.1875rem;
            --font-size: 0.75rem;
            --main-logo-width: 2.25rem;
            --tokenomika-logo-width: 2.9375rem;
            --tokenomika-logo-height: 1.625rem;
        }

        .nav-links {
            display: none;
        }

        .dropdown-nav {
            width: var(--nav-links-width);
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
        }
    }

    @media (480px <= width < 640px) {
        header {
            --header-width: var(--reduced-width);
            --header-height: 2.6875rem;
            --nav-links-width: 48.1875rem;
            --font-size: 0.625rem;
            --main-logo-width: 1.5625rem;
            --tokenomika-logo-width: 1.3125rem;
            --tokenomika-logo-height: 1rem;
        }

        .header {
            top: 0.5rem;
        }

        .nav-links {
            display: none;
        }

        .dropdown-nav {
            width: var(--nav-links-width);
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
        }
    }

    @media (width < 480px) {
        header {
            --header-width: var(--reduced-width);
            --header-height: 2.9375rem;
            --main-logo-width: 1.5625rem;
            --tokenomika-logo-width: 1.3125rem;
            --tokenomika-logo-height: 1rem;
        }

        .header {
            top: 0.5rem;
            justify-content: start;
        }

        .header_bg {
            border-radius: 0;
        }

        .header-logo_main {
            margin-right: 11.875rem;
        }

        .header-logo_tokenomika {
            margin-right: 1rem;
        }

        .nav-links {
            display: none;
        }

        .dropdown-nav {
            display: none;
        }

    }
</style>
    