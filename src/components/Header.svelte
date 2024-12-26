<script>
    import { onMount } from 'svelte';
    import links from '../data/links.json';
	import BurgerMenu from './BurgerMenu.svelte';
    import Dropdown from './Dropdown.svelte';

    export let mainPage = false;
    let innerWidth = 0;
    let scrolled = 'false';
    onMount(() => {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            let currentPath = window.location.pathname;
            // For Netlify
                // mainPage ? currentPath : currentPath = currentPath.substring(0, window.location.pathname.length - 1);
            if (link.pathname === currentPath) {
                link.classList.add('gradient_span');
            }
        });

        const handleScroll = () => {
            let headerHeight = document.getElementById('main_header').offsetHeight;
            scrolled = window.scrollY > headerHeight; // Set to true if user has scrolled down
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll); // Cleanup
        };
    });

</script>

<svelte:window bind:innerWidth />

<header class='header {mainPage && !scrolled ? "" : "header_bg"}' id="main_header">
    <div class="header_container">
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
        <div class="mobile_nav">
            <a href="/" class="header-logo_tokenomika">
                <img src='/logos/tokenomika_logo.svg' class="header-logo_tokenomika" alt="tokenomika-logo"/>
            </a>
            <BurgerMenu links={links} />
        </div>
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
        width: 100vw;
        height: var(--header-height);
    }

    .header_container {
        z-index: 99;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: var(--header-width);
        position: fixed;
    }

    .header_bg {
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

        .header_bg {
            border-radius: 0;
        }

        .header-logo_tokenomika {
            margin-right: 1rem;
        }

        .nav-links {
            display: none;
        }

        .mobile_nav {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 3.8rem;
        }

        .dropdown-nav {
            display: none;
        }

    }
</style>
    