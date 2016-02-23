var ContactPage = function () {

    return {

        //Basic Map
        initMap: function () {
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
                    title: 'XXXXX'
                });
            });
        },

        //Panorama Map
        initPanorama: function () {
            var panorama;
            $(document).ready(function () {
                panorama = GMaps.createPanorama({
                    el: '#panorama',
                    lat: 22.556909,
                    lng: 88.357357
                });
            });
        }

    };
}();