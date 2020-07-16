$(function () {


	// Range slider noUiSlisder  https://refreshless.com/nouislider/
	var rangeSlider = document.getElementById('range');

	noUiSlider.create(rangeSlider, {
		start: [1000, 4000],
		connect: true,
		step: 10,
		range: {
			'min': 0,
			'max': 5000
		},
		format: wNumb({
			decimals: 0,
		})
	});


	var rangeValueOne = $('#range-value-1'),
			rangeValueTwo = $('#range-value-2');

	rangeSlider.noUiSlider.on('update', function( values, handle ) {
		rangeValueOne.val(values[0]);
		rangeValueTwo.val(values[1]);
	});


});