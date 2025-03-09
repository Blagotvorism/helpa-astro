<div class="carousel">
	<div class="slides" bind:this={siema}>
		<slot></slot>
	</div>
</div>

<style>

	h3 {
		font-weight: 400;
	}
	
	.carousel {
		width: 100%;
	}

	@media (480px <= width < 640px) {
		.carousel {
			width: inherit;
		}
	}

	@media (320px <= width < 480px) {
		.slides {
			display: flex;
			flex-direction: column;
		}
	}
</style>

<script>
	import Siema from 'siema';
	import { onMount } from 'svelte';
	
	export let perPage = 2;
	export let loop = true;
	export let duration = 200;
	export let easing = 'ease-out';
	export let startIndex = 0;
	export let draggable = true;
	export let multipleDrag = true;
	export let threshold = 20;
	export let rtl = false;
    export let siemaItems;
	export let theme;
	
	let siema;
	let slider;

	if(theme === 'img_slider') {
		perPage = 1;
	} else {
		perPage = siemaItems >= 2 ? perPage : siemaItems;
	}

    export function left () {
		slider.prev();
	}
	
	export function right () {
        slider.next();
	}
	
	onMount(() => {
		slider = new Siema({
			selector: siema,
			perPage: perPage,
			loop: loop,
  			duration: duration,
  			easing: easing,
  			startIndex: startIndex,
  			draggable: draggable,
 			multipleDrag: multipleDrag,
  			threshold: threshold,
  			rtl: rtl
		});
	});
	
</script>