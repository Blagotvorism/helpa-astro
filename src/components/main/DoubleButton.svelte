<script>
	import TgSocial from "../icons/TgSocial.svelte";
	import XSocial from "../icons/XSocial.svelte";

    let showIcons = false; // Reactive variable to toggle button design

    function toggleButton() {
    showIcons = !showIcons; // Toggle the state
    }
</script>

<div class="split_btn">
    {#if showIcons}
      <!-- Button with icons -->
        <button class="button-with-icons" on:click={toggleButton}>
            <div class="icon-wrapper">
                <a href="https://t.me/astrowayhelpplanet" class="link"><TgSocial /></a>
            <div class="divider"></div>
                <a href="https://x.com/astrowayhelpa?s=21&t=z0b_ZLWUm1wnD88Rcah7Bg" class="link"><XSocial /></a>
            </div>
      </button>
    {:else}
      <!-- Button with text -->
      <button class="button-simple" on:click={toggleButton}>
        Присоединиться
      </button>
    {/if}
  </div>
  
  <style>
    .split_btn {
        --link-width: 16.6rem;
        --link-height: 3.5rem;
        --font-size-link: 1rem;
        --link-svg-hight: 2.5rem;
        --link-svg-width: 2.5rem;
    }

    .split_btn {
        height: var(--link-height);
        width: var(--link-width);
        border-radius: var(--border-radius);
        font-family: var(--font-inter);
    }

    .button-with-icons, .button-simple {
        height: 100%;
        width: 100%;
        border: 2px solid #64C8BD;
        /* border-image-source: linear-gradient(to top, rgba(9, 74, 111, 1), rgba(100, 200, 189, 1));
        border-image-slice: 1; */
        border-radius: var(--border-radius);
        font-family: var(--font-inter);
        font-size: var(--font-size-link);
        background: transparent;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    /* Button with text */
    .button-simple {
        background: transparent;
        color: black;
        cursor: pointer;
        transition: all 0.3s ease;
    }
  
    /* Button with icons */
    .button-with-icons {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
  
    .icon-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }

    .link {
        height: var(--link-svg-hight);
        width: var(--link-svg-width);
        margin: auto;
    }
  
    .divider {
      height: var(--link-height);
      width: 2px;
      background: linear-gradient(to top, rgba(9, 74, 111, 1), rgba(100, 200, 189, 1)); /* Divider color */
    }

    @media (640px <= width < 1200px) {
        .split_btn {
            --link-width: 13.4375rem;
            --link-height: 2.625rem;
            --font-size-link: 0.875rem;
            --link-svg-width: 2rem;
            --link-svg-hight: 2rem;
        }
    }

    @media (480px <= width < 640px) {
        .split_btn {
            --link-width: 13.0625rem;
            --link-height: 1.875rem;
            --font-size-link: 0.625rem;
            --link-svg-width: 1.5rem;
            --link-svg-hight: 1.5rem;
        }
    }

    @media (320px <= width < 480px) {
        .split_btn {
            --link-width: 8.125rem;
            --link-height: 1.875rem;
            --font-size-link: 0.625rem;
            --link-svg-width: 1.5rem;
            --link-svg-hight: 1.5rem;
        }
    }
  </style>