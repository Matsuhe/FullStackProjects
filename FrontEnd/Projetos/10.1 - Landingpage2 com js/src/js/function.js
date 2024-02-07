window.onload = function () {
	async function initMap1() {
		//@ts-ignore
        const { Map } = await google.maps.importLibrary("maps");
		const cairo = { lat: 30.064742, lng: 31.249509 };
		const map = new google.maps.Map(document.getElementById("mapa"), {
			scaleControl: true,
			center: cairo,
			zoom: 12,
		});
		const infowindow = new google.maps.InfoWindow();
		
		var conteudo1 = '<p style="color:black;font-size:13px;">Endereço!</p>';
		infowindow.setContent(conteudo1);
		
		const marker = new google.maps.Marker({ map, position: cairo });
		
		marker.addListener("click", () => {
			infowindow.open(map, marker);
		});
	}
	
	// 2 metodo
	
	var map;
    async function initMap2() {
		var mapProp = {
			center: new google.maps.LatLng(-27.648598, -48.577423),
            scrollwheel: false,
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
            //mapTypeId: google.maps.MapTypeId.SATELLITE
        }
        map = new google.maps.Map(document.getElementById("mapa2"), mapProp);
    }
	
    function addMarker(lat,long,icon,content,click){
		var latLng={'lat':lat,'lng':long};
		
        var marker = new google.maps.Marker({
			position:latLng,
            map:map,
            icon:icon
        });
		
        var infoWindow = new google.maps.InfoWindow({
			content: content,
            maxWidth: 200,
            pixelOffset: new google.maps.Size(0,20)
        });
		
        if(click == true){
			google.maps.event.addListener(marker,'click',function(){
				infoWindow.open(map,marker);
            })
        }else{
			infoWindow.open(map,marker);
        }
    }
	
	initMap1();
    initMap2();
    var conteudo = '<p style="color:black;font-size:13px;">Endereço!</p>';
    addMarker(-27.616637,-48.5923228,'',conteudo,true);

	
};
