<script>
    import Air from './Air.svelte';
    import Ground from './Ground.svelte';
    import Water from './Water.svelte';
    import GoalsIcon1 from './GoalsIcon1.svelte';
    import GoalsIcon2 from './GoalsIcon2.svelte';
    import GoalsIcon3 from './GoalsIcon3.svelte';
    import GoalsIcon4 from './GoalsIcon4.svelte';
    import GoalsIcon5 from './GoalsIcon5.svelte';
    import GoalsIcon6 from './GoalsIcon6.svelte';
    import GoalsIcon7 from './GoalsIcon7.svelte';
    export let goalsIcon;
</script>

<div class="goals-icon">
    {#if goalsIcon === "Air"}
        <Air />
    {:else if goalsIcon === "Ground"}
        <Ground />
    {:else if goalsIcon === "Water"}
        <Water />
    {:else if goalsIcon === "goalsIcon1"}
        <GoalsIcon1 />
    {:else if goalsIcon === "goalsIcon2"}
        <GoalsIcon2 />
    {:else if goalsIcon === "goalsIcon3"}
        <GoalsIcon3 />
    {:else if goalsIcon === "goalsIcon4"}
        <GoalsIcon4 />
    {:else if goalsIcon === "goalsIcon5"}
        <GoalsIcon5 />
    {:else if goalsIcon === "goalsIcon6"}
        <GoalsIcon6 />
    {:else if goalsIcon === "goalsIcon7"}
        <GoalsIcon7 />
    {/if}
</div>

<style>
    .goals-icon {
        --icon-size: 2.5rem;
        --margin-top-bottom: 2.5rem;
    }

    .goals-icon {
        width: var(--icon-size);
        height: var(--icon-size);
        margin: var(--margin-top-bottom) 0;
    }

    @media (960px <= width < 1200px) {
        .goals-icon {
            --icon-size: 2.5rem;
            --margin-top-bottom: 2rem;
        }
    }

    @media (640px <= width < 960px) {
        .goals-icon {
            --icon-size: 2rem;
            --margin-top-bottom: 2rem;
        }
    }

    @media (480px <= width < 640px) {
        .goals-icon {
            --icon-size: 2rem;
            --margin-top-bottom: 1.25rem;
        }
    }

    @media (320px <= width < 480px) {
        .goals-icon {
            --icon-size: 10vw;
            --margin-top-bottom: 0.6rem;
        }
    }
</style>