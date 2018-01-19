var container = document.querySelector('#scroll2');
		var text = container.querySelector('.scroll__text2');
		var steps = text.querySelectorAll('.step2');

		// initialize the scrollama
		var scroller = scrollama();

		// scrollama event handlers
		function handleStepEnter(response) {
			// response = { element, direction, index }
			console.log(response);
			// add to color to current step
			response.element.classList.add('is-active');
		}

		function handleStepExit(response) {
			// response = { element, direction, index }
			console.log(response);
			// remove color from current step
			response.element.classList.remove('is-active');
		}

		function init() {
			// set random padding for different step heights (not required)
			steps.forEach(function (step) {
				var v = 50 + Math.floor(window.innerHeight / 6);
				step.style.padding = v + 'px 0px';
			});

			// 1. setup the scroller with the bare-bones options
			// this will also initialize trigger observations
			// 3. bind scrollama event handlers (this can be chained like below)
			scroller.setup({
				step: '.scroll__text2 .step2',
				debug: true,
			})
				.onStepEnter(handleStepEnter)
				.onStepExit(handleStepExit);

			// setup resize event
			window.addEventListener('resize', scroller.resize);
		}

		// kick things off
		init();