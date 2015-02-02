var polygons = [
	{
		data  : {
						name : 'subregion',
						url : '../data/SubRegion_MoreSimple_4326.geojson',
						enabled: true
				},
		style : {
						color : "#f00",
					    opacity: 0.2,
					    fillColor : "#f00",
					    fillOpacity : 0.15
				}
	    
     },
	{
	    data  : {
	    				name : 'basin',
						url : '../data/Basin_MoreSimple_4326.geojson',
						enabled: true
				},
		style : {
						color : "#0f0",
					    opacity: 0.2,
					    fillColor : "#0f0",
					    fillOpacity : 0.15
				}
     },
	{
	    data  : {
	    				name : 'subbasin',
						url : '../data/SubBasin_MoreSimple_4326.geojson',
						enabled: true
				},
		style : {
						color : "#00f",
					    opacity: 0.2,
					    fillColor : "#00f",
					    fillOpacity : 0.15
				}
     },
	{
		data  : {
						name : 'watershed',
						url : '../data/Watershed_MoreSimple_4326.geojson',
						enabled: false
				},
		style : {
						color : "#ff0",
					    opacity: 0.2,
					    fillColor : "#ff0",
					    fillOpacity : 0.15
				}
	 },
	{
		data  : {
						name : 'subwatershed',
						url : '../data/SubWatershed_MoreSimple_4326.geojson',
						enabled: false
				},
		style : {
						color : "#0ff",
					    opacity: 0.2,
					    fillColor : "#0ff",
					    fillOpacity : 0.15
				}
	 }
]