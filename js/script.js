$(document).ready(function() {

window.onload = getLocation;
var geo = navigator.geolocation;
/* Where in the world are you? */

function getLocation() {       
    if( geo ) {    
        geo.getCurrentPosition( displayLocation );       
    } 
	else  { alert( "Oops, Geolocation API is not supported");        
   }     
}

    function displayLocation( position ) {         
        var latitude = position.coords.latitude;        
        var longitude = position.coords.longitude;            
        var div = document.getElementById( 'weather' );
    }

 navigator.geolocation.getCurrentPosition(function(position) {
    loadWeather(position.coords.latitude+','+position.coords.longitude); //load weather using your lat/lng coordinates
  });

$(document).ready(function() {
  loadWeather('Seattle',''); //@params location, woeid
});

function loadWeather(location, woeid) {
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: 'f',
    success: function(weather) {
    var curr = '<h2><i class="'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html = '<h2><i class="'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<h3>'+weather.city+', '+weather.region+'</h3>';
      html += '<h3 class="currently">'+weather.currently+'</h3>';
      html += '<h3>'+weather.alt.temp+'&deg;C</h3>';  
      $(".currentWeather").html(curr);
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}
});