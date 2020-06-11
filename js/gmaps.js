var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -0.34, lng: -78.45},
        zoom: 14.59,
    });
    var img ="paciente.jpg";
    var marker = new google.maps.Marker({
        position: {lat:-0.3326, lng: -78.4345},
        map: map,
        icon:img,
        animation: google.maps.MapTypeId.HYBRID
    });
    var marker2 = new google.maps.Marker({
        position: {lat:-0.3376, lng: -78.4745},
        map: map,
        icon:img,
        animation: google.maps.MapTypeId.HYBRID
    });
    var marker3 = new google.maps.Marker({
        position: {lat:-0.3356, lng: -78.4545},
        map: map,
        icon:img,
        animation: google.maps.MapTypeId.HYBRID
    });
    var per= "persona.jpg";
    var marker4 = new google.maps.Marker({
        
        position: {lat:-0.3486, lng: -78.4415},
        map: map,
        icon:per,
        animation: google.maps.MapTypeId.HYBRID
    });
}

function findme(){
    var output = document.getElementById('map');
    function localizacion(position){
        var latitude = position.coords.latitude;
        var latitude = position.coords.longitude;
        
        output.innerHTML ="<p>Latitud:"+latitude+"<br>Longitud:"+longitud+"</p>";
        
    }
    function error(){
        output.innerHTML="<p>no se pudo obtener tu ubicacion";
    }
    navigator.geolocation.getCurrentPosition(localizacion,error);
    
}