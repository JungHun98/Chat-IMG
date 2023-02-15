var markerImageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/category.png';

function createMarkerImage(src, size, options) {
    var markerImage = new kakao.maps.MarkerImage(src, size, options);
    return markerImage;
}

function createMarker(position, image) {
    var marker = new kakao.maps.Marker({
        position: position,
        image: image
    });

    return marker;
}

function init() {
    var gpsOptions = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    function success(pos) {
        const crd = pos.coords;

        var currentLatitude;
        var currentLongitude;
        var latLng;

        currentLatitude = crd.latitude;
        currentLongitude = crd.longitude;
        latLng = new kakao.maps.LatLng(currentLatitude, currentLongitude);

        var container = document.getElementById('map');
        var mapOptions = {
            center: latLng,
            level: 3
        };

        var map = new kakao.maps.Map(container, mapOptions);

        var mapTypeControl = new kakao.maps.MapTypeControl();
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
        var zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

        var markerImage = new kakao.maps.MarkerImage('./img/current_poi.png', new kakao.maps.Size(35, 40));
        var marker = new kakao.maps.Marker({
            position: latLng,
            title: '내 위치',
            image: markerImage
        });

        // kakao.maps.event.addListener(marker, 'mouseover', function () {
        //     infowindow.open(map, marker);
        // });

        // kakao.maps.event.addListener(marker, 'mouseout', function () {
        //     infowindow.close();
        // });
        marker.setMap(map);
    }

    function error(err) {
        alert(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, gpsOptions);
}

(function () {
    console.log('hello world');
    init();
})();