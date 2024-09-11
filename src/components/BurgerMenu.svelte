<script>
    import BurgerMenuLogo from "./BurgerMenuLogo.svelte";
import Cancel from "./Cancel.svelte";
    export let links;
    let isMenuOpen = false;

    const handleClick = () => {
        isMenuOpen = !isMenuOpen;
    }

</script>

<div class="burger-menu">
    <button class="burger-menu_btn" on:click={handleClick}>
        {#if isMenuOpen}
            <Cancel />
        {:else}
            <BurgerMenuLogo />
        {/if}
    </button>
    <div class={isMenuOpen ? 'burger-links' : 'burger-links hidden'}>
        <ul class="burger-menu_links-1">
            {#each links as link}
                {#if link.id === 1 || link.id === 2 || link.id === 3}
                    <li class="dropdown-item" style="text-decoration: none;">
                        <a href={link.url} class="nav-link noDecoration" style="text-decoration: none;">{link.text}</a>
                    </li>
                {/if}
            {/each}
        </ul>
        <ul class="burger-menu_links-2">
            {#each links as link}
                {#if link.id !== 1 && link.id !== 2 && link.id !== 3}
                    <li class="dropdown-item" style="text-decoration: none;">
                        <a href={link.url} class="nav-link noDecoration" style="text-decoration: none;">{link.text}</a>
                    </li>
                {/if}
            {/each}
        </ul>
    </div>
</div>

<style>
    .burger-menu {
        display: none;
    }

    button {
        background: none;
        cursor: pointer;
    }

    .burger-links {
        display: flex;
        position: absolute;
        z-index: 10;
        top: 2.435rem;
        left: calc((-100vw + var(--reduced-width)) / 2);
        width: 100vw;
        height: 8rem;
        background-color: rgba(255, 255, 255, 0.8);
        border-bottom-left-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
    }

    .burger-menu_links-1,
    .burger-menu_links-2 {
        display: block;
        margin-top: 1rem;
    }

    .burger-menu_links-1 {
        margin-left: calc((100vw - var(--reduced-width)) / 2);
        width: 9.5rem;
    }

    .burger-menu_links-2 {
        margin-right: calc((100vw - var(--reduced-width)) / 2);
        width: 9.6rem;
    }

    .dropdown-item {
        list-style-type: none;
        margin-bottom: 0.75rem;
    }

    .nav-link {
        font-family: var(--font-inter);
        font-size: 0.625rem;
        text-decoration: none;
    }

    @media (width < 480px) {
        .burger-menu {
            display: block;
        }

        .hidden {
            display: none;
        }
    }
</style>