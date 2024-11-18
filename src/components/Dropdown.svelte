<script>
    import ArrowUp from "./ArrowUp.svelte";
    export let data;
    export let text;

    let rotate = false;

    let isDropdownOpen = false;

    const handleDropdownClick = () => {
        isDropdownOpen = !isDropdownOpen;
    }

    const handleDropdownFocusLoss = ({ relatedTarget, currentTarget }) => {
        // use "focusout" event to ensure that we can close the dropdown when clicking outside or when we leave the dropdown with the "Tab" button
        if (relatedTarget instanceof HTMLElement && currentTarget.contains(relatedTarget)) 
        return isDropdownOpen = false; // check if the new focus target doesn't present in the dropdown tree (exclude ul\li padding area because relatedTarget, in this case, will be null) 
    }

</script>

<div class="dropdown">
    <button on:click={handleDropdownClick} class="btn btn-dropdown">
        {text}
        <ArrowUp rotate={!isDropdownOpen} />
    </button>
    <ul class={isDropdownOpen ? "dropdown-list" : 'hidden'}>
        {#each data as link}
            {#if link.id !== 1 && link.id !== 6}
                <li class="dropdown-item">
                    <a href={link.url} class="nav-link">{link.text}</a>
                </li>
            {/if}
        {/each}
    </ul>
</div>

<style>
    .dropdown {
        --dropdown-fs: 0.75rem;
        --btn-dropdown-width: 9rem;
        --btn-dropdown-height: 1rem;
        --dropdown-list-top: 2.45rem;
        --dropdown-list-left: -2rem;
        --dropdown-list-width: 12.875rem;
        --dropdown-list-height: 8rem;
        --dropdown-item-margin-bottom: 1rem;
        --dropdown-item-margin-left: 1.5625rem;
    }

    .hidden {
        display: none;
    }

    .dropdown {
        position: relative;
        color: var(--dark-grey);
    }

    .btn-dropdown {
        display: flex;
        align-items: center;
        height: var(--btn-dropdown-height);
        width: var(--btn-dropdown-width);
        justify-content: space-between;
        font-family: var(--font-inter);
        font-size: var(--dropdown-fs);
        color: var(--dark-grey);
        cursor: pointer;
        background: none;
    }

    .nav-link {
        text-decoration: none;
        color: var(--dark-grey);
    }

    .nav-link:hover,
    .nav-link:active {
        background: var(--gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .dropdown-list {
        list-style-type: none;
        font-family: var(--font-inter);
        font-size: var(--dropdown-fs);
        position: absolute;
        z-index: 10;
        top: var(--dropdown-list-top);
        left: var(--dropdown-list-left);
        background: var(--header-bg-color);
        border-bottom-left-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
        display: inline-block;
        width: var(--dropdown-list-width);
        height: var(--dropdown-list-height);
    }

    .dropdown-item {
        text-decoration: none;
        list-style-type: none;
        display: inline-block;
        margin-bottom: var(--dropdown-item-margin-bottom);
        margin-left: var(--dropdown-item-margin-left);
    }

    .dropdown-item:first-child {
        margin-top: .5rem;
    }

    @media (480px <= width < 640px) {
        .dropdown {
            --dropdown-fs: 0.625rem;
            --btn-dropdown-width: 7.5rem;
            --btn-dropdown-height: 0.8125rem;
            --dropdown-list-top: 1.75rem;
            --dropdown-list-left: -1.2rem;
            --dropdown-list-width: 9.8125rem;
            --dropdown-list-height: 7.625rem;
            --dropdown-item-margin-bottom: 1rem;
            --dropdown-item-margin-left: 0.8125rem;
        }
    }
</style>