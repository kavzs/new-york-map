$(function(){

	//center of New York Map
	let center = [40.730088145502236, -74.0207290649414];

	//statue circle
	let statueCenter = [40.69005915164754,-74.04687523841858];

	//behind the scene marker
	let map = L.map('map').setView(center,12);

	//mapbox style link
	let brightMap = L.tileLayer('https://api.mapbox.com/styles/v1/kavzs/cj6n2mgh70cnk2rmshmcy75xm/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2F2enMiLCJhIjoiY2o2bGdyZWFxMHJwNDMycGRlaHhodjBibyJ9.EVnDU1mjogJTMM0y1zYCOg').addTo(map);
	let darkMap = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2F2enMiLCJhIjoiY2o2bGdyZWFxMHJwNDMycGRlaHhodjBibyJ9.EVnDU1mjogJTMM0y1zYCOg');

	// //vicinity circle
	// L.circle(center,{
	// 					radius: 3000,
	// 					color: '#939AAB',
	// 					weight: 1,
	// 					fill: false
	// 				}).addTo(map);

	//statue circle
	L.circle(statueCenter,{
						radius: 2000,
						color: '#0476D9',
						weight: 1,
						
					}).addTo(map);


	let services = [
					{
						latlng:[40.70601833122571,-74.01394844055176],
						description:'Info Center',
						iconImage:'assets/info.svg'
					},
					{
						latlng:[40.748882568094636,-73.98468017578125],
						description:'Info Center',
						iconImage:'assets/info.svg'
					},
					{
						latlng:[40.80490912905829,-73.9651107788086],
						description:'Info Center',
						iconImage:'assets/info.svg'
					},
					{
						latlng:[40.74858996207507,-73.96815776824951],
						description:'Info Center',
						iconImage:'assets/info.svg'
					},
					{
						latlng:[40.64587084902795,-73.78460884094238],
						description:'John F. Kennedy International Airport',
						iconImage:'assets/airport.svg'
					},
					{
						latlng:[40.77303437973067,-73.86876583099365],
						description:'LaGuardia Airport',
						iconImage:'assets/airport.svg'
					},
					{
						latlng:[40.69316669224942,-74.17814254760742],
						description:'Newark International Airport',
						iconImage:'assets/airport.svg'
					}
				];

	let serviceGroup = L.layerGroup();
	_(services).each(function(service){
		let serviceIcon = L.icon({
									iconUrl:service.iconImage,
									iconSize:[30,30]
								});
		let marker = L.marker(service.latlng,{icon:serviceIcon});

		marker.bindPopup('<div>'+service.description+'</div>')

		serviceGroup.addLayer(marker);

	})










	//Landmarks

	let iconLandmarkGroup = L.layerGroup();
	let iconLandmarks = [
		{
			name:'Central Park Zoo',
			latlng:[40.767778,-73.9718335],
			iconImage:'assets/zoo.svg',

			popup:{
				className:'custom-popup',
				content:'<h1>Central Park Zoo</h1>',
				popImage:'<img src="assets/zooImage.svg" alt="">',
			}
		},
		{	name:'Times Square',
			latlng:[40.7582615,-73.988225],
			iconImage:'assets/city.svg',

			popup:{
				className:'custom-popup',
				content:'<h1>Times Sqaure</h1>',
				popImage:'<img src="assets/timeSquare.png" alt="">',
			}
		},
		{
			name:'Statue of Liberty',
			latlng:[40.69005915164754,-74.04687523841858],
			iconImage:'assets/statue.svg',

			popup:{
				className:'custom-popup',
				content:'<h1>Statue of Liberty</h1>',
				// text:'<p>blah blah blah</p>',
				popImage:'<img src="assets/square.png" alt="">',
			}
		},
		{
			name:'9/11 Memorial',
			latlng:[40.71174383259811,-74.01248931884766],
			iconImage:'assets/towers.svg',

			popup:{
				className:'custom-popup',
				content:'<h1>9/11 Memorial</h1>',
				popImage:'<img src="assets/towers.jpg" alt="">',	
			}
		},
		{
			name:'Metropolitan Museum',
			latlng:[40.77930656383335,-73.96373748779297],
			iconImage:'assets/museum.svg',

			popup:{
				className:'custom-popup',
				content:'<h1>Metropolitan Museum</h1>',
				popImage:'<img src="assets/museum.png" alt="">',
			}
		},
		{
			name:'Empire State Building',
			latlng:[40.746346606483826,-73.99472236633301],
			iconImage:'assets/empire.svg',

			popup:{
				className:'custom-popup',
				content:'<h1>Empire State building</h1>',
				popImage:'<img src="assets/empire.png" alt="">',

			}
		}
	];

	//landmarks to map
	_(iconLandmarks).each(function(iconLandmark){
		let icon = L.icon({
						iconUrl:iconLandmark.iconImage,
						iconSize:[30,30]
					});

		let marker = L.marker(iconLandmark.latlng,{icon:icon});

		let popup = L.popup({
			closeButton:false,
			closeOnClick:false,
			className:iconLandmark.popup.className,
			offset:[0,-20]
		})

		.setLatLng(iconLandmark.latlng)
		.setContent(iconLandmark.popup.content + iconLandmark.popup.popImage);
			

		marker.on('click',function(){
			if(map.hasLayer(popup)){

				map.closePopup(popup);
			}else{
				map.addLayer(popup);
			}

		});

		iconLandmarkGroup.addLayer(marker);

	});


	//polgon markers

	let landmarkGroup = L.layerGroup();

	let landmarks = [
	{
		name:'Central Park',
		latlngs:[
		[40.80044238741474,-73.9578366279602],
		[40.80031244134002,-73.95830869674681],
		[40.795861634714036,-73.96157026290894],
		[40.78024896519178,-73.9729642868042],
		[40.76853299147457,-73.9814829826355],
		[40.76789919751926,-73.98128986358643],
		[40.7646651291205,-73.97367238998413],
		[40.765217694667975,-73.9730715751648],
		[40.76502267205817,-73.97255659103394],
		[40.78523697038805,-73.95792245864868],
		[40.7965763828982,-73.94955396652222],
		[40.79701497456496,-73.94974708557127],
		[40.80044238741474,-73.9578366279602]],
		popup:{
			className:'polygon-popup',
			content:'<h4>Central Park</h4>',
			latlng:[40.80044238741474,-73.9578366279602]
		}		
	},
	{
		name:'Manhattan Bridge',
		latlngs:[
		[40.71493168249225,-73.99510860443115],
		[40.69934880275997,-73.98648262023926],
		[40.699478946289176,-73.98609638214111],
		[40.71502926732618,-73.99476528167725],
		[40.71493168249225,-73.99510860443115]],
		popup:{
			className:'polygon-popup',
			content:'<h4>Manhattan Bridge</h4>',
			latlng:[40.71493168249225,-73.99510860443115]
		}
	}
	// {
	// 	name:'Statue of Liberty',
	// 	latlngs:[
	// 	[40.69005915164754,-74.04687523841858],
	// 	[40.68932698747902,-74.0462476015091],
	// 	[40.68860295055691,-74.04477775096893],
	// 	[40.6885215976021,-74.04438078403471],
	// 	[40.68858261232754,-74.04396772384644],
	// 	[40.6887737914386,-74.04364049434662],
	// 	[40.6892090269438,-74.04350638389587],
	// 	[40.68967273267218,-74.04348492622375],
	// 	[40.69018117822685,-74.04386579990387],
	// 	[40.69055945920262,-74.04457926750183],
	// 	[40.69111264041909,-74.04601693153381],
	// 	[40.69112484289414,-74.04615104198456],
	// 	[40.69109637044885,-74.04618322849274],
	// 	[40.69103942552178,-74.04703080654144],
	// 	[40.690954008039874,-74.04719710350037],
	// 	[40.69082384785693,-74.04721856117249],
	// 	[40.69062453958409,-74.04706299304962],
	// 	[40.69057166177899,-74.04707908630371],
	// 	[40.6905106488748,-74.04703617095947],
	// 	[40.690425230715086,-74.04719173908234],
	// 	[40.69005915164754,-74.04687523841858]],
	// 	popup:{
	// 		className:'polygon-popup',
	// 		content:'<div>Statue of Liberty</div>',
	// 		latlng:[40.69005915164754,-74.04687523841858]
	// 	}
	// }
	];

	_(landmarks).each(function(landmark){

		
		let polygon = L.polygon(landmark.latlngs,{color:'#0476D9', weight:1});

		let popup = L.popup({
			closeButton:false,
			closeOnClick:false,
			className:landmark.popup.className,
			offset:[0,0]
		})
		.setLatLng(landmark.popup.latlng)
		.setContent(landmark.popup.content);


		polygon.on('click',function(){
			if(map.hasLayer(popup)){
				//hide it
				map.closePopup(popup);
			}else{
				//show it
				map.addLayer(popup);
			}
		});

		landmarkGroup.addLayer(polygon).addLayer(popup);
	});


	//layer control

	let baseLayers = {
	  'Morning':brightMap,
	  'Evening':darkMap,
	};
	let overlays = {
	    'Services': serviceGroup,
	    'Landmarks': iconLandmarkGroup,
	    'Destinations': landmarkGroup
	};

	L.control.layers(baseLayers, overlays).addTo(map);


});