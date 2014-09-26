$(document).ready(function(){
	$('.desc').click(function(e){
		$('.container, .button-box, header, .holder').hide();
		$('#about').fadeIn('slow');
		e.preventDefault();
	})
	$('.x').click(function(e){
		$('#about').hide();
		$('.container, .button-box, header, .holder').fadeIn('slow');
		e.preventDefault();
	})
    $(".answer-getter").on("click", function(event) {
    event.preventDefault();
    $('#answer-getter').hide();
    console.log("Submit Button Clicked");
    getPhotos();
    $("#photos").fadeIn(2000);
	});

});


var getPhotos = function() {

  var result = $.ajax({
    url: "https://api.instagram.com/v1/tags/joking/media/recent?access_token=178445065.6c27c61.446d6cfa1bfa4246a27c2280f9cb6e76&callback=callbackFunction",
    dataType: "jsonp",
    cache: false,
    type: "GET",
  })
  
  .done(function(result){

    console.log("success!");

      for(var i = 0; i < 100; i++) {

      

     var showPhoto = function() {

          var photo = $("#fringe").clone();

          photo.attr('src', result.data[i].images.thumbnail.url);
          photo.attr('id', result.data[i].images.thumbnail.url);

          return photo;
        }


      $("#photos").append(showPhoto);
    }
  }

)

}




