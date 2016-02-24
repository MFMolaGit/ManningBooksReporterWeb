$(document).ready(function() {
    $.ajax({
		//url:"http://manningcatcherws-gevapps.rhcloud.com/gevapp/manningCatcher/offer/01-02-2016",
		url:"http://manningcatcherws-gevapps.rhcloud.com/gevapp/manningCatcher/list",
		//url: "http://rest-service.guides.spring.io/greeting",
		contentType: "application/json",
		//async: false,
		type: "GET",
		dataType: "json",
		//dataType: 'jsonp', //tipo de datos
     	//jsonpCallback: 'jsonCallback',
		//crossdomain: true,
		success: function(json) {
			alert(json);
		},
		error: function(jqXHR,textStatus,errorThrown) {
				alert("Status: " + textStatus + ", Error: " + errorThrown);
				//var err = eval("(" + xhr.responseText + ")");
				//alert(err.Message + ", Status: " + textStatus + ", Error: " + errorThrown);
				//$.growlUI('Error', err.Message, 20000);
				}
		/*success: function(data){        
     			alert(data);
				$('.code').append(data.id);
   				},
		error: function(data){
				alert("Error");
				}*/
    });
});

/*function callback(result){
	$('.code').append(result);
}*/
