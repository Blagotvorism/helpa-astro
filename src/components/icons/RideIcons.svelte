<script>
    import RideGoal1 from './RideGoal1.svelte';
    import RideGoal2 from './RideGoal2.svelte';
    import RideGoal3 from './RideGoal3.svelte';
    import RideGoal4 from './RideGoal4.svelte';
    export let logoName;
</script>

<div class="logo">
    {#if logoName === 'rideGoal1'}
        <RideGoal1 />
    {:else if logoName === 'rideGoal2'}
        <RideGoal2 />
    {:else if logoName === 'rideGoal3'}
        <RideGoal3 />
    {:else if logoName === 'rideGoal4'}
        <RideGoal4 />
    {/if}
</div>

<style>
    .logo {
        --logo-size: 2.8rem;
        --logo-margin-bottom: 1.625rem;
    }

    .logo {
        display: block;
        width: var(--logo-size);
        height: var(--logo-size);
        margin-bottom: var(--logo-margin-bottom);
    }

    @media (960px <= width < 1200px) {
        .logo {
            --logo-size: 2.8rem;
            --logo-margin-bottom: 2rem;
        }
    }

    @media (640px <= width < 960px) {
        .logo {
            --logo-size: 2.5rem;
            --logo-margin-bottom: 2rem;
        }
    }

    @media (480px <= width < 640px) {
        .logo {
            --logo-size: 2.3rem;
            --logo-margin-bottom: 0;
        }
    }

    @media (320px <= width < 480px) {
        .logo {
            --logo-size: 10vw;
            --logo-margin-bottom: 5px;
        }
    }

</style>