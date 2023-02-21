let markerImageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/category.png';
let markers = [];
let map;

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

// 웹 페이지 로딩시 기본 설정
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

        map = new kakao.maps.Map(container, mapOptions);

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
function placesSearchCB(data, status, pagination){
    if (status === kakao.maps.services.Status.OK) {
        console.log(data);
        const searchPlace = data[0];
        map.setCenter(new kakao.maps.LatLng(searchPlace.y, searchPlace.x));
    }
    else{
        alert("장소 명칭이 정확하지 않습니다.\n다시 입력해주세요.")
    }
}
function searchArrInfo(event){

    if(event.type === 'keydown' && window.event.keyCode == 13){
        console.log(event.target.value);
        let ps = new kakao.maps.services.Places();
        ps.keywordSearch(event.target.value, placesSearchCB);
    }
}

function addEventListeners(){
    const addrSearchBox = document.querySelector("#search-box");
    const addrSearchButton = document.querySelector("#search-button");

    addrSearchBox.addEventListener('keydown', searchArrInfo);
}

console.log('hello world');
init();
addEventListeners();
