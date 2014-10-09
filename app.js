$(document).ready(function(){
	/* When the Why Laugh button is clickes everything within container gets hidden and #about fades in */
	$('.desc').click(function(e){
		$('.container, .button-box, header, .holder').hide();
		$('#about').fadeIn('slow');
		e.preventDefault();
	})

	/* Close out button closes #about and fades in .container */

	$('.x').click(function(e){
		$('#about').hide();
		$('.container, .button-box, header, .holder').fadeIn('slow');
		e.preventDefault();
	})

	/* When <button> gets clicked, hides the button itself and fades in #photos */

    $(".answer-getter").on("click", function(event) {
    event.preventDefault();
    $('#answer-getter').hide();
    getGram();
    $("#photos").fadeIn(2000);
	});
});


var getGram = function() {

	/* var result makes a 'GET' ajax call to the IG API with data type being JSONP */

  var result = $.ajax({
    url: "https://api.instagram.com/v1/tags/LMFAO/media/recent?access_token=1524283766.3b32a5d.d3b28a0017d442f790f28a667effc75d&callback=callbackFunction",
    dataType: "jsonp",
    cache: false,
    type: "GET",
  })
  
  .done(function(result){

  	/* The function showGram goes through 20 images of IG and attributes src and an ID to the img in #laugh */ 

     for(var i = 0; i <= 20; i++) {

     	var showGram = function() {

          var photo = $("#laugh").clone();

          photo.attr('src', result.data[i].images.thumbnail.url);
          photo.attr('id', result.data[i].images.thumbnail.url);

          return photo;
        }

      /* Appends the photos from the IG API into #photos */
	$("#photos").append(showGram);
    }
  }
)
}




