let markerImageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/category.png';
let markers = [];

function createMarkerImage(src, size, options) {
    let markerImage = new kakao.maps.MarkerImage(src, size, options);
    return markerImage;
}

function createMarker(position, image) {
    let marker = new kakao.maps.Marker({
        position: position,
        image: image
    });

    return marker;
}

// precondition: 웹 페이지 로딩시 기본 설정
function init() {
    let gpsOptions = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    function success(pos) {
        const crd = pos.coords;

        let currentLatitude;
        let currentLongitude;
        let latLng;

        currentLatitude = crd.latitude;
        currentLongitude = crd.longitude;
        latLng = new kakao.maps.LatLng(currentLatitude, currentLongitude);

        let container = document.getElementById('map');
        let mapOptions = {
            center: latLng,
            level: 3
        };

        let map = new kakao.maps.Map(container, mapOptions);

        let mapTypeControl = new kakao.maps.MapTypeControl();
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
        let zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

        let markerImage = new kakao.maps.MarkerImage('./img/current_poi.png', new kakao.maps.Size(35, 40));
        let marker = new kakao.maps.Marker({
            position: latLng,
            title: '내 위치',
            image: markerImage
        });

        let infowindow = new kakao.maps.InfoWindow({
            content: '<div style="width:150px;text-align:center;padding:6px 0;">내 위치</div>'
        });

        kakao.maps.event.addListener(marker, 'mouseover', function () {
            infowindow.open(map, marker);
        });

        kakao.maps.event.addListener(marker, 'mouseout', function () {
            infowindow.close();
        });
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