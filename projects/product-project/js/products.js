/* global $ */

$(document).ready(function() {
	// ALL YOUR CODE GOES BELOW HERE //
    $.getJSON('./data/product.json', function(data) {
        
    })
    .fail(function() { console.log('Something went wrong with getJSON!'); });
	// ALL YOUR CODE GOES ABOVE HERE //
});