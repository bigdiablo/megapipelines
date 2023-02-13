	

	/*START CONTACT MAP JS*/

			if ($('.map-canvas').length) {

				// Specify features and elements to define styles.

				var styles = [{

								"featureType": "administrative.country",

								"elementType": "geometry",

								"stylers": [

									{

										"visibility": "simplified"

									},

									{

										"hue": "#ff0000"

									}

								]

							}

						];



				var mapOptions = {

					center: new google.maps.LatLng(27.7710091, -82.6393239),

					zoom: 16,

					scrollwheel: false,

					panControl: true,

					mapTypeControl: false,

					streetViewControl: false,

					disableDefaultUI: false,

					zoomControl: true,

					disableDoubleClickZoom: false,

					fullscreenControl: false,

					styles: styles

				};

				var initMap = function() {

					var contactdata = $('#contact-map').data('content');

					var map = new google.maps.Map(document.getElementById("contact-map"), mapOptions);

					var bounds = new google.maps.LatLngBounds();

					var myIcon = new google.maps.MarkerImage("assets/img/map_pin.png", null, null, null, new google.maps.Size(50, 52));

					var marker = new google.maps.Marker({

						position: new google.maps.LatLng(27.7710091, -82.6393239),

						map: map,

						icon: myIcon

					});







				};

				initMap();

				google.maps.event.addDomListener(window, 'load resize', initMap);

			}



	   /*END CONTACT MAP JS*/