var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_MyRaster_1 = new ol.layer.Tile({
    source: new ol.source.XYZ({
        url: 'tiles/{z}/{x}/{y}.png',  // path to your tiles folder
        minZoom: 8,
        maxZoom: 14,
        attributions: 'Bryan Masika | SpatialNova'
    }),
    title: "My Raster Layer",  // name shown in layer switcher
    visible: true,             // shows by default
    opacity: 1.0
});
var format_Wards_Dar_es_Salaam_2022_102_1 = new ol.format.GeoJSON();
var features_Wards_Dar_es_Salaam_2022_102_1 = format_Wards_Dar_es_Salaam_2022_102_1.readFeatures(json_Wards_Dar_es_Salaam_2022_102_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wards_Dar_es_Salaam_2022_102_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wards_Dar_es_Salaam_2022_102_1.addFeatures(features_Wards_Dar_es_Salaam_2022_102_1);
var lyr_Wards_Dar_es_Salaam_2022_102_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wards_Dar_es_Salaam_2022_102_1, 
                style: style_Wards_Dar_es_Salaam_2022_102_1,
                popuplayertitle: 'Wards_Dar_es_Salaam_2022_102',
                interactive: true,
                title: '<img src="styles/legend/Wards_Dar_es_Salaam_2022_102_1.png" /> Wards_Dar_es_Salaam_2022_102'
            });
var format_Roads2_2 = new ol.format.GeoJSON();
var features_Roads2_2 = format_Roads2_2.readFeatures(json_Roads2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads2_2.addFeatures(features_Roads2_2);
var lyr_Roads2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads2_2, 
                style: style_Roads2_2,
                popuplayertitle: 'Roads2',
                interactive: true,
                title: '<img src="styles/legend/Roads2_2.png" /> Roads2'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_MyRaster_1.setVisible(true);lyr_Wards_Dar_es_Salaam_2022_102_1.setVisible(true);lyr_Roads2_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_MyRaster_1,lyr_Wards_Dar_es_Salaam_2022_102_1,lyr_Roads2_2];
lyr_Wards_Dar_es_Salaam_2022_102_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'reg_code': 'reg_code', 'reg_name': 'reg_name', 'dist_code': 'dist_code', 'dist_name': 'dist_name', 'counc_code': 'counc_code', 'counc_name': 'counc_name', 'ward_code': 'ward_code', 'ward_name': 'ward_name', 'Popn': 'Popn', 'Area(km2)': 'Area(km2)', 'Pop_dens': 'Pop_dens', });
lyr_Roads2_2.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'barrier': 'barrier', 'oneway': 'oneway', 'railway': 'railway', 'bridge': 'bridge', 'surface': 'surface', 'layer': 'layer', 'aeroway': 'aeroway', 'highway': 'highway', 'name': 'name', 'parking': 'parking', 'width': 'width', 'public_tra': 'public_tra', 'tunnel': 'tunnel', 'smoothness': 'smoothness', 'operator': 'operator', 'building': 'building', 'capacity': 'capacity', });
lyr_Wards_Dar_es_Salaam_2022_102_1.set('fieldImages', {'OBJECTID_1': '', 'OBJECTID': '', 'reg_code': '', 'reg_name': '', 'dist_code': '', 'dist_name': '', 'counc_code': '', 'counc_name': '', 'ward_code': '', 'ward_name': '', 'Popn': '', 'Area(km2)': '', 'Pop_dens': '', });
lyr_Roads2_2.set('fieldImages', {'osm_id': '', 'osm_type': '', 'amenity': '', 'barrier': '', 'oneway': '', 'railway': '', 'bridge': '', 'surface': '', 'layer': '', 'aeroway': '', 'highway': '', 'name': '', 'parking': '', 'width': '', 'public_tra': '', 'tunnel': '', 'smoothness': '', 'operator': '', 'building': '', 'capacity': '', });
lyr_Wards_Dar_es_Salaam_2022_102_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'reg_code': 'no label', 'reg_name': 'no label', 'dist_code': 'no label', 'dist_name': 'no label', 'counc_code': 'no label', 'counc_name': 'no label', 'ward_code': 'no label', 'ward_name': 'no label', 'Popn': 'inline label - always visible', 'Area(km2)': 'no label', 'Pop_dens': 'no label', });
lyr_Roads2_2.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'barrier': 'no label', 'oneway': 'no label', 'railway': 'no label', 'bridge': 'no label', 'surface': 'no label', 'layer': 'no label', 'aeroway': 'no label', 'highway': 'no label', 'name': 'no label', 'parking': 'no label', 'width': 'no label', 'public_tra': 'no label', 'tunnel': 'no label', 'smoothness': 'no label', 'operator': 'no label', 'building': 'no label', 'capacity': 'no label', });
lyr_Roads2_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
