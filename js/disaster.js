function showDisasters(query){
		if(query){
			query = query.trim();
		}
}
$('body').on('click', '.disaster',function(){
	var address = "index1.html?" + (this.innerHTML.substring(1));
		console.log(address);
		window.location.href = address;
});
$('body').ready(function(){
	var query;
	getDisasters(query, function(data){
		var renderedHTML = renderDisasters(data);
		$("#disasters").html(renderedHTML);
	});
});


/*	$("#search").change(function(){
		showBooks($(this).val());
	});

	showBooks();

	$("#list_mode").click(function(){
		$(".list_content").show();
		$(".map_content").hide();
	})

	$("#map_mode").click(function(){
		$(".map_content").show();
		$(".list_content").hide();
	})

	loadMap();
});*/
/*
function loadMap(){
	var icons = {
	    marker: L.icon({
	      iconUrl: '/vLibrary/img/marker-icon.png',
	      iconRetinaUrl: '/vLibrary/img/marker-icon.png',
	      iconAnchor: [13.5, 17.5],
	      popupAnchor: [0, -11],
	    }),
	    red: L.icon({
	      iconUrl: '/vLibrary/img/red.png',
	      iconRetinaUrl: '/vLibrary/img/red.png',
	      iconSize: [15, 15],
	      iconAnchor: [5, 5],
	      popupAnchor: [0, -11],
	    }),
	    green: L.icon({
	      iconUrl: '/vLibrary/img/green.png',
	      iconRetinaUrl: '/vLibrary/img/green.png',
	      iconSize: [15, 15],
	      iconAnchor: [5, 5],
	      popupAnchor: [0, -11],
	    })
	}

	navigator.geolocation.getCurrentPosition(function(position){
		var map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 15);
		L.esri.basemapLayer('Streets').addTo(map);
		L.marker([position.coords.latitude, position.coords.longitude], {
	        icon: icons.marker
	    }).addTo(map);
		searchBook(null, function(books){
			for(var i=0; i<books.length; i++){
				if(books[i].status == 0){
					L.marker([books[i].lat, books[i].lon], {
				        icon: icons.red
				    }).addTo(map);
				}
				else{
					L.marker([books[i].lat, books[i].lon], {
				        icon: icons.green
				    }).addTo(map);
				}
			}
		});
	});
}
*/

function renderDisasters(disasters){
	var renderedHTML = "<div class='list-group'>";
	//renderedHTML+= "<li>Yo YO</li>";
	for(var i=0; i<disasters.length; i++){
		console.log(disasters[i]);
		var status = "<span class='label label-success' style='margin-left:10px;'>Available</span>";
		var btn = "<button class='btn btn-success pull-right' data-id='" + disasters[i].hashtag +"''>HashTag</button>";
		var newHTML = "<a class='list-group-item disaster' href='#'>"+disasters[i].hashtag+"</h4>";
		//newHTML = newHTML+"<p class='author'><b>Author</b>&nbsp;&nbsp;"+disasters[i].author+btn+"</p><div class='category'><b>Categories</b>&nbsp;&nbsp;"+disasters[i].catagory+"</div></a>";
		renderedHTML += newHTML;
	}
	/*
	for(var i=0; i<books.length; i++){
		if(books[i].status == 0){
			var status = "<span class='label label-danger' style='margin-left:10px;'>Taken</span>";
			var newHTML = "<a class='list-group-item book'><h4 class='title'>"+books[i].name+status+"</h4><p class='author'><b>Author</b>&nbsp;&nbsp;"+books[i].author+"</p><div class='category'><b>Categories</b>&nbsp;&nbsp;"+books[i].catagory+"</div></a>";
			renderedHTML += newHTML;
		}
	}*/
	renderedHTML += "</div>";
	return renderedHTML;
}
