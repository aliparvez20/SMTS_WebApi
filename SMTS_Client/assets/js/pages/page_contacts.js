var ContactPage = function () {

    return {
        
    	//Basic Map
        initMap: function () {
<<<<<<< HEAD
            var map;
            $(document).ready(function () {
                map = new GMaps({
                    div: '#map',
                    scrollwheel: false,
                    lat: 22.556909,
                    lng: 88.357357
                });

                var marker = map.addMarker({
                    lat: 22.556909,
                    lng: 88.357357,
                    title: 'Sandhan ManPower and Training Solution'
                });
            });
=======
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
				scrollwheel: false,				
				lat: 40.748866,
				lng: -73.988366
			  });
			  
			  var marker = map.addMarker({
				lat: 40.748866,
				lng: -73.988366,
	            title: 'Company, Inc.'
		       });
			});
>>>>>>> origin/master
        },

        //Panorama Map
        initPanorama: function () {
		    var panorama;
		    $(document).ready(function(){
		      panorama = GMaps.createPanorama({
		        el: '#panorama',
		        lat : 40.748866,
		        lng : -73.988366
		      });
		    });
		}        

    };
}();