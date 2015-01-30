My Watershed Address Web App
============================

To Do
-----

- [x] Get Watershed data to proper format for display in OpenLayers3
	- [x] Determine correct projection
	- [x] Convert from shp to geojson
	- [x] Test
- [ ] Display shape data in OL
	- [ ] Make layers for each level of address
	- [ ] Determine and implement best method to transfer and store data
	- [ ] Distinct display styles for each layer
- [ ] Reactive map
	- [ ] clicking/touching layers makes name popover
	- [ ] reveal/hide layers
- [ ] Search for address
	- [ ] use node-geocoder to get lat-lon from address
	- [ ] use lat-lon to get watershed address
		- [ ] use lat-lon to determine shape intersections
- [ ] Social media share results
	- [ ] post link to "My Watershed Address!" on Facebook
	- [ ] post link to "My Watershed Address!" on Twitter
- [ ] Demo / Deployment
	- [ ] Live Tiles source
		- [ ] school server?
		- [ ] Ritchie?
		- [ ] purchase access to other source?
	- [ ] App server
		- [ ] school server?
		- [ ] Ritchie?
		- [ ] openshift?