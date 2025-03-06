<script>
    import { onMount } from 'svelte';
    //import links from '../data/links.json';
	import BurgerMenu from './BurgerMenu.svelte';
    import Dropdown from './Dropdown.svelte';
    import { getRelativeLocaleUrl } from 'astro:i18n';

    export let mainPage = false;
    export let locale;
    export let links;
    export let pathname;

    let innerWidth = 0;
    let scrolled = 'false';
    onMount(() => {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            let currentPath = window.location.pathname;
            // For Netlify
                // mainPage ? currentPath : currentPath = currentPath.substring(0, window.location.pathname.length - 1);
            if (link.pathname === currentPath || link.pathname + '-2' === currentPath) {
                link.classList.add('gradient_span');
            }
        });

        const handleScroll = () => {
            let headerHeight = document.getElementById('main_header').offsetHeight;
            scrolled = window.scrollY > headerHeight; // Set to true if user has scrolled down
        };
        //window.addEventListener('scroll', handleScroll);
        console.log('Current innerWidth:', innerWidth);
        console.log('Current path:', window.location.pathname);
        return () => {
            window.removeEventListener('scroll', handleScroll); // Cleanup
        };
    });

</script>

<!-- <svelte:window bind:innerWidth /> -->

<header class='header {mainPage && !scrolled ? "" : "header_bg"}' id="main_header">
    <div class="header_container">
        <a href={getRelativeLocaleUrl(locale, "/")} class="header-logo_main">
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
        <div class="mobile_nav">
            <a href={getRelativeLocaleUrl(locale, "/")} class="header-logo_tokenomika">
                <img src='/logos/tokenomika_logo.svg' class="header-logo_tokenomika" alt="tokenomika-logo"/>
            </a>            
        </div>
        <nav class="nav-lang-switch">
            <ul>
                <li class={locale === "ru" ? "selected" : ""}><a href={getRelativeLocaleUrl("ru", pathname)}>RU</a></li>
                <li class={locale === "en" ? "selected" : ""}><a href={getRelativeLocaleUrl("en", pathname)}>EN</a></li>
            </ul>
        </nav>
        <BurgerMenu links={links} />
    </div>
</header>

<style>
    header {
        --header-bg-color: rgba(255, 255, 255, 0.8);
        --header-width: var(--reduced-width);
        --header-height: 4.625rem;
        --nav-links-width: 58.25rem;
        --font-size: 14px;
        --main-logo-width: 2.9375rem;
        --tokenomika-logo-width: 2.9375rem;
        --tokenomika-logo-height: 1.625rem;
    }
    
    .header {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        z-index: 99;
        top: 0;
        left: 0;
        right: 0;
        height: var(--header-height);
        border-bottom-left-radius: 30px;
        border-bottom-right-radius: 30px;
    }

    .header_container {
        z-index: 99;
        display: flex;
        justify-content: space-between;
        align-items: center;
        left: 20px; right: 20px;
        position: absolute;
    }

    .header_bg {
        background-color: var(--header-bg-color);
        /* border-bottom-right-radius: var(--border-radius); */
    }

    .header-logo_main {
        display: block;
        width: var(--main-logo-width);
        height: var(--main-logo-width);
        flex: 1;
    }

    .header-logo_tokenomika {
        display: block;
        width: var(--tokenomika-logo-width);
        height: var(--tokenomika-logo-height);
    }

    .nav-links {
        /* width: var(--nav-links-width); */
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-self: center;
        flex: 1;
    }

    .nav-link {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: inline-block;
        font-family: var(--font-inter);
        font-size: var(--font-size);
        color: var(--dark-grey);
        text-decoration: none;
        white-space: nowrap;
    }

    .nav-lang-switch {
        position: relative;
        font-family: var(--font-inter);
        font-size: var(--font-size);
        margin-right: 20px;
    }

    .nav-lang-switch a {
        font-size: 12px;
        color: var(--dark-grey);
    }

    .nav-lang-switch .selected a {
        color: black;
    }

    .nav-lang-switch:after {
        content: "";
        display: block;
        position: absolute;
        left: 0; right: 0; top: 50%;
        height: 1px;
        background-color: var(--dark-grey);
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

    .mobile_nav {
        margin-right: 20px;
    }

    @media (960px <= width < 1200px) {
        header {
            --header-width: var(--reduced-width);
            --header-height: 4.125rem;
            --nav-links-width: 48.1875rem;
            --font-size: 12px;
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
            --font-size: 12px;
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
            --font-size: 10px;
            --main-logo-width: 1.5625rem;
            --tokenomika-logo-width: 1.3125rem;
            --tokenomika-logo-height: 1rem;
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
            justify-content: center;
        }

        .nav-links {
            display: none;
        }

        .dropdown-nav {
            display: none;
        }
    }

    @media (width >= 480px) {
        .header-logo_main {
            flex: initial;
        }
    }

    @media (width >= 960px) {
        .header-logo_main {
            margin-right: 50px;
        }
        .mobile_nav {
            margin-left: 20px;
        }
    }

    @media (width >= 1200px) {
        .header_container {
            width: 1200px;
            left: auto;
            right: auto;
        }        
    }
</style>
    