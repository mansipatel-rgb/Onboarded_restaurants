var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_restaurant_listing_1 = new ol.format.GeoJSON();
var features_restaurant_listing_1 = format_restaurant_listing_1.readFeatures(json_restaurant_listing_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_restaurant_listing_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_restaurant_listing_1.addFeatures(features_restaurant_listing_1);
var lyr_restaurant_listing_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_restaurant_listing_1, 
                style: style_restaurant_listing_1,
                popuplayertitle: 'restaurant_listing',
                interactive: true,
                title: '<img src="styles/legend/restaurant_listing_1.png" /> restaurant_listing'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_restaurant_listing_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_restaurant_listing_1];
lyr_restaurant_listing_1.set('fieldAliases', {'Restaurant ID': 'Restaurant ID', 'Restaurant Name': 'Restaurant Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_restaurant_listing_1.set('fieldImages', {'Restaurant ID': 'Range', 'Restaurant Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_restaurant_listing_1.set('fieldLabels', {'Restaurant ID': 'inline label - visible with data', 'Restaurant Name': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', });
lyr_restaurant_listing_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});