$(document).ready(function() {

  var apiKey = 'aae8f7ca1c396e60b15d9adce0b1f34b';
  var apiUrl ='https://api.flickr.com/services/rest/';
  
  var buildPhoto = function (photo) {
    return 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg';
  }

  var searchFlickr = function() {
    $.ajax({
      method: 'get',
      url: apiUrl,
      dataType: "jsonp",
      jsonp: "jsoncallback",
      data: {
        api_key: apiKey,
        method: 'flickr.photos.search',
        text: 'ramen', 
        format: 'json'
      }
    }).done(function(data) {
      console.log(data)
      $.each( data.photos.photo, function( i, photo ) {
        var theimage = buildPhoto(photo)
        $( "<img>" ).attr( "src", theimage).appendTo( "#images" );
        $( ".images" ).click(function() {
          $( ".images" ).fadeIn( "slow", function() {
          });
        });
        if ( i === 4 ) {
          return false;
        }
      });
    });
    console.log("hello!")
  };

      searchFlickr();

}); 
