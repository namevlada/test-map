var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr__1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Сумма температур почвы 10 > градусов',
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5746288.299159, 7563682.738619, 6644734.517880, 8783582.262429]
                            })
                        });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                interactive: false,
    title: 'Распаханность почв<br />\
    <img src="styles/legend/_2_0.png" /> 0 - 5 (очень слабо распаханные)<br />\
    <img src="styles/legend/_2_1.png" /> 5 - 10 (слабо распаханные)<br />\
    <img src="styles/legend/_2_2.png" /> 10 - 15 (средне распаханные)<br />\
    <img src="styles/legend/_2_3.png" /> 15 - 20 (сильно распаханные<br />\
    <img src="styles/legend/_2_4.png" /> 20 - 24 (очень сильно распаханные)<br />'
        });
var format_TM_3 = new ol.format.GeoJSON();
var features_TM_3 = format_TM_3.readFeatures(json_TM_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TM_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TM_3.addFeatures(features_TM_3);
var lyr_TM_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TM_3, 
                style: style_TM_3,
                interactive: false,
    title: 'TM<br />\
    <img src="styles/legend/TM_3_0.png" /> Районы по которым обследование почв не проводилось<br />\
    <img src="styles/legend/TM_3_1.png" /> Районы по которым проведено обследование почв<br />'
        });

lyr_ESRIGraylight_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr_TM_3.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr__1,lyr__2,lyr_TM_3];
lyr__2.set('fieldAliases', {});
lyr_TM_3.set('fieldAliases', {});
lyr__2.set('fieldImages', {});
lyr_TM_3.set('fieldImages', {});
lyr__2.set('fieldLabels', {});
lyr_TM_3.set('fieldLabels', {});
lyr_TM_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});