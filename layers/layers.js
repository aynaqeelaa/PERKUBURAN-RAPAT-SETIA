var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_BingAerial_1 = new ol.layer.Tile({
            'title': 'Bing Aerial',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=1'
            })
        });
var format_KAWASANKUBUR_2 = new ol.format.GeoJSON();
var features_KAWASANKUBUR_2 = format_KAWASANKUBUR_2.readFeatures(json_KAWASANKUBUR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KAWASANKUBUR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KAWASANKUBUR_2.addFeatures(features_KAWASANKUBUR_2);
var lyr_KAWASANKUBUR_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KAWASANKUBUR_2, 
                style: style_KAWASANKUBUR_2,
                popuplayertitle: "KAWASAN KUBUR",
                interactive: true,
                title: '<img src="styles/legend/KAWASANKUBUR_2.png" /> KAWASAN KUBUR'
            });
var format_JALANRAYA_3 = new ol.format.GeoJSON();
var features_JALANRAYA_3 = format_JALANRAYA_3.readFeatures(json_JALANRAYA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALANRAYA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALANRAYA_3.addFeatures(features_JALANRAYA_3);
var lyr_JALANRAYA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALANRAYA_3, 
                style: style_JALANRAYA_3,
                popuplayertitle: "JALANRAYA",
                interactive: true,
                title: '<img src="styles/legend/JALANRAYA_3.png" /> JALANRAYA'
            });
var format_PAGARKONKRIT_4 = new ol.format.GeoJSON();
var features_PAGARKONKRIT_4 = format_PAGARKONKRIT_4.readFeatures(json_PAGARKONKRIT_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PAGARKONKRIT_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAGARKONKRIT_4.addFeatures(features_PAGARKONKRIT_4);
var lyr_PAGARKONKRIT_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PAGARKONKRIT_4, 
                style: style_PAGARKONKRIT_4,
                popuplayertitle: "PAGAR KONKRIT",
                interactive: true,
                title: '<img src="styles/legend/PAGARKONKRIT_4.png" /> PAGAR KONKRIT'
            });
var format_LONGKANGKONKRIT_5 = new ol.format.GeoJSON();
var features_LONGKANGKONKRIT_5 = format_LONGKANGKONKRIT_5.readFeatures(json_LONGKANGKONKRIT_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LONGKANGKONKRIT_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LONGKANGKONKRIT_5.addFeatures(features_LONGKANGKONKRIT_5);
var lyr_LONGKANGKONKRIT_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LONGKANGKONKRIT_5, 
                style: style_LONGKANGKONKRIT_5,
                popuplayertitle: "LONGKANG KONKRIT",
                interactive: true,
                title: '<img src="styles/legend/LONGKANGKONKRIT_5.png" /> LONGKANG KONKRIT'
            });
var format_PAPANTANDA_6 = new ol.format.GeoJSON();
var features_PAPANTANDA_6 = format_PAPANTANDA_6.readFeatures(json_PAPANTANDA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PAPANTANDA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAPANTANDA_6.addFeatures(features_PAPANTANDA_6);
var lyr_PAPANTANDA_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PAPANTANDA_6, 
                style: style_PAPANTANDA_6,
                popuplayertitle: "PAPAN TANDA",
                interactive: true,
                title: '<img src="styles/legend/PAPANTANDA_6.png" /> PAPAN TANDA'
            });
var format_LOTKUBURZONC_7 = new ol.format.GeoJSON();
var features_LOTKUBURZONC_7 = format_LOTKUBURZONC_7.readFeatures(json_LOTKUBURZONC_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOTKUBURZONC_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTKUBURZONC_7.addFeatures(features_LOTKUBURZONC_7);
var lyr_LOTKUBURZONC_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOTKUBURZONC_7, 
                style: style_LOTKUBURZONC_7,
                popuplayertitle: "LOT KUBUR ZON C",
                interactive: true,
                title: '<img src="styles/legend/LOTKUBURZONC_7.png" /> LOT KUBUR ZON C'
            });
var format_LOTKUBURZONB_8 = new ol.format.GeoJSON();
var features_LOTKUBURZONB_8 = format_LOTKUBURZONB_8.readFeatures(json_LOTKUBURZONB_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOTKUBURZONB_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTKUBURZONB_8.addFeatures(features_LOTKUBURZONB_8);
var lyr_LOTKUBURZONB_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOTKUBURZONB_8, 
                style: style_LOTKUBURZONB_8,
                popuplayertitle: "LOT KUBUR ZON B",
                interactive: true,
                title: '<img src="styles/legend/LOTKUBURZONB_8.png" /> LOT KUBUR ZON B'
            });
var format_LOTKUBURZONA_9 = new ol.format.GeoJSON();
var features_LOTKUBURZONA_9 = format_LOTKUBURZONA_9.readFeatures(json_LOTKUBURZONA_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOTKUBURZONA_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTKUBURZONA_9.addFeatures(features_LOTKUBURZONA_9);
var lyr_LOTKUBURZONA_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOTKUBURZONA_9, 
                style: style_LOTKUBURZONA_9,
                popuplayertitle: "LOT KUBUR ZON A",
                interactive: true,
                title: '<img src="styles/legend/LOTKUBURZONA_9.png" /> LOT KUBUR ZON A'
            });
var format_BANGUNAN_10 = new ol.format.GeoJSON();
var features_BANGUNAN_10 = format_BANGUNAN_10.readFeatures(json_BANGUNAN_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNAN_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNAN_10.addFeatures(features_BANGUNAN_10);
var lyr_BANGUNAN_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANGUNAN_10, 
                style: style_BANGUNAN_10,
                popuplayertitle: "BANGUNAN",
                interactive: true,
                title: '<img src="styles/legend/BANGUNAN_10.png" /> BANGUNAN'
            });
var format_LOTZONKANAKKANAK_11 = new ol.format.GeoJSON();
var features_LOTZONKANAKKANAK_11 = format_LOTZONKANAKKANAK_11.readFeatures(json_LOTZONKANAKKANAK_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOTZONKANAKKANAK_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTZONKANAKKANAK_11.addFeatures(features_LOTZONKANAKKANAK_11);
var lyr_LOTZONKANAKKANAK_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOTZONKANAKKANAK_11, 
                style: style_LOTZONKANAKKANAK_11,
                popuplayertitle: "LOT ZON KANAK KANAK",
                interactive: true,
                title: '<img src="styles/legend/LOTZONKANAKKANAK_11.png" /> LOT ZON KANAK KANAK'
            });

lyr_OSMStandard_0.setVisible(true);lyr_BingAerial_1.setVisible(true);lyr_KAWASANKUBUR_2.setVisible(true);lyr_JALANRAYA_3.setVisible(true);lyr_PAGARKONKRIT_4.setVisible(true);lyr_LONGKANGKONKRIT_5.setVisible(true);lyr_PAPANTANDA_6.setVisible(true);lyr_LOTKUBURZONC_7.setVisible(true);lyr_LOTKUBURZONB_8.setVisible(true);lyr_LOTKUBURZONA_9.setVisible(true);lyr_BANGUNAN_10.setVisible(true);lyr_LOTZONKANAKKANAK_11.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_BingAerial_1,lyr_KAWASANKUBUR_2,lyr_JALANRAYA_3,lyr_PAGARKONKRIT_4,lyr_LONGKANGKONKRIT_5,lyr_PAPANTANDA_6,lyr_LOTKUBURZONC_7,lyr_LOTKUBURZONB_8,lyr_LOTKUBURZONA_9,lyr_BANGUNAN_10,lyr_LOTZONKANAKKANAK_11];
lyr_KAWASANKUBUR_2.set('fieldAliases', {'qc_id': 'qc_id', 'kawasan': 'kawasan', });
lyr_JALANRAYA_3.set('fieldAliases', {'qc_id': 'qc_id', 'jalan': 'jalan', });
lyr_PAGARKONKRIT_4.set('fieldAliases', {'qc_id': 'qc_id', 'pagar': 'pagar', });
lyr_LONGKANGKONKRIT_5.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', });
lyr_PAPANTANDA_6.set('fieldAliases', {'qc_id': 'qc_id', 'jnis tanda': 'jnis tanda', });
lyr_LOTKUBURZONC_7.set('fieldAliases', {'lot': 'lot', 'NAMA': 'NAMA', 'TARIKH KEMATIAN': 'TARIKH KEMATIAN', 'JANTINA': 'JANTINA', });
lyr_LOTKUBURZONB_8.set('fieldAliases', {'lot': 'lot', 'NAMA': 'NAMA', 'TARIKH KEMATIAN': 'TARIKH KEMATIAN', 'JANTINA': 'JANTINA', });
lyr_LOTKUBURZONA_9.set('fieldAliases', {'lot': 'lot', 'NAMA': 'NAMA', 'TARIKH KEMATIAN': 'TARIKH KEMATIAN', 'JANTINA': 'JANTINA', });
lyr_BANGUNAN_10.set('fieldAliases', {'qc_id': 'qc_id', 'jenis bang': 'jenis bang', });
lyr_LOTZONKANAKKANAK_11.set('fieldAliases', {'lot': 'lot', 'NAMA': 'NAMA', 'TARIKH KEMATIAN': 'TARIKH KEMATIAN', 'JANTINA': 'JANTINA', });
lyr_KAWASANKUBUR_2.set('fieldImages', {'qc_id': '', 'kawasan': '', });
lyr_JALANRAYA_3.set('fieldImages', {'qc_id': '', 'jalan': '', });
lyr_PAGARKONKRIT_4.set('fieldImages', {'qc_id': '', 'pagar': '', });
lyr_LONGKANGKONKRIT_5.set('fieldImages', {'qc_id': '', 'id': '', });
lyr_PAPANTANDA_6.set('fieldImages', {'qc_id': '', 'jnis tanda': '', });
lyr_LOTKUBURZONC_7.set('fieldImages', {'lot': 'TextEdit', 'NAMA': 'TextEdit', 'TARIKH KEMATIAN': 'TextEdit', 'JANTINA': 'TextEdit', });
lyr_LOTKUBURZONB_8.set('fieldImages', {'lot': 'TextEdit', 'NAMA': 'TextEdit', 'TARIKH KEMATIAN': 'TextEdit', 'JANTINA': 'TextEdit', });
lyr_LOTKUBURZONA_9.set('fieldImages', {'lot': 'TextEdit', 'NAMA': 'TextEdit', 'TARIKH KEMATIAN': 'TextEdit', 'JANTINA': 'TextEdit', });
lyr_BANGUNAN_10.set('fieldImages', {'qc_id': '', 'jenis bang': '', });
lyr_LOTZONKANAKKANAK_11.set('fieldImages', {'lot': 'TextEdit', 'NAMA': 'TextEdit', 'TARIKH KEMATIAN': 'TextEdit', 'JANTINA': 'TextEdit', });
lyr_KAWASANKUBUR_2.set('fieldLabels', {'qc_id': 'no label', 'kawasan': 'no label', });
lyr_JALANRAYA_3.set('fieldLabels', {'qc_id': 'no label', 'jalan': 'no label', });
lyr_PAGARKONKRIT_4.set('fieldLabels', {'qc_id': 'no label', 'pagar': 'no label', });
lyr_LONGKANGKONKRIT_5.set('fieldLabels', {'qc_id': 'no label', 'id': 'no label', });
lyr_PAPANTANDA_6.set('fieldLabels', {'qc_id': 'no label', 'jnis tanda': 'no label', });
lyr_LOTKUBURZONC_7.set('fieldLabels', {'lot': 'inline label - visible with data', 'NAMA': 'inline label - visible with data', 'TARIKH KEMATIAN': 'inline label - visible with data', 'JANTINA': 'inline label - visible with data', });
lyr_LOTKUBURZONB_8.set('fieldLabels', {'lot': 'inline label - visible with data', 'NAMA': 'inline label - visible with data', 'TARIKH KEMATIAN': 'inline label - visible with data', 'JANTINA': 'inline label - visible with data', });
lyr_LOTKUBURZONA_9.set('fieldLabels', {'lot': 'inline label - visible with data', 'NAMA': 'inline label - visible with data', 'TARIKH KEMATIAN': 'inline label - visible with data', 'JANTINA': 'inline label - visible with data', });
lyr_BANGUNAN_10.set('fieldLabels', {'qc_id': 'no label', 'jenis bang': 'no label', });
lyr_LOTZONKANAKKANAK_11.set('fieldLabels', {'lot': 'inline label - visible with data', 'NAMA': 'inline label - visible with data', 'TARIKH KEMATIAN': 'inline label - visible with data', 'JANTINA': 'inline label - visible with data', });
lyr_LOTZONKANAKKANAK_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});