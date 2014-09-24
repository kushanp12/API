$(document).ready(function(){
	$('.answer-getter').submit(function(e){
		$('.scroll').show();
		var query = $(this).find("input[name='tags']").val();
		getRelated(query);
		e.preventDefault();
	});
});


var showSimilar = function(similar){
	
	var result = $('.scroll .result').clone();

	// Set the question properties in result
	var similarName = result.find('.name');
	similarName.text(similar.name);

	// set the date asked property in result
	var similarType = result.find('.type');
	similarType.text(similar.type);

	// set the #views for question property in result
	var similarInfo = result.find('.info');
	similarInfo.text(similar.info);

};

function createCORSRequest(method, url){
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr){
        // XHR has 'withCredentials' property only if it supports CORS
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined"){ // if IE use XDR
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
}

var getRelated = function(query){

	createCORSRequest('get', 'http://www.tastekid.com/ask/ws');

	var request = {
		f: 'theexc5458', 
		k: 'ntdhmzg2mtm4',
		q: query,
		verbose: '1',
		format: 'XML'
	};

	var result = $.ajax({
			url: 'http://www.tastekid.com/ask/ws',
			data: request,
			dataType: 'XML',
			type: 'GET',
			crossDomain: true
		})
	.done(function(result){
		$.each(result.items, function(i, item) {
			var question = showSimilar(item);
			$('.results').append(question);
		});
	})
};