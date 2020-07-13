var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Sitesprincipauxdeschorres_1 = new ol.format.GeoJSON();
var features_Sitesprincipauxdeschorres_1 = format_Sitesprincipauxdeschorres_1.readFeatures(json_Sitesprincipauxdeschorres_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sitesprincipauxdeschorres_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sitesprincipauxdeschorres_1.addFeatures(features_Sitesprincipauxdeschorres_1);
var lyr_Sitesprincipauxdeschorres_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sitesprincipauxdeschorres_1, 
                style: style_Sitesprincipauxdeschorres_1,
                interactive: true,
                title: '<img src="styles/legend/Sitesprincipauxdeschorres_1.png" /> Sites principaux de schorres'
            });
var format_Schorresetpolders_2 = new ol.format.GeoJSON();
var features_Schorresetpolders_2 = format_Schorresetpolders_2.readFeatures(json_Schorresetpolders_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Schorresetpolders_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Schorresetpolders_2.addFeatures(features_Schorresetpolders_2);
var lyr_Schorresetpolders_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Schorresetpolders_2, 
                style: style_Schorresetpolders_2,
                interactive: true,
    title: 'Schorres et polders<br />\
    <img src="styles/legend/Schorresetpolders_2_0.png" /> Naturel<br />\
    <img src="styles/legend/Schorresetpolders_2_1.png" /> Dépoldérisé<br />\
    <img src="styles/legend/Schorresetpolders_2_2.png" /> Endigué<br />\
    <img src="styles/legend/Schorresetpolders_2_3.png" /> Poldérisé<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Sitesprincipauxdeschorres_1.setVisible(false);lyr_Schorresetpolders_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Sitesprincipauxdeschorres_1,lyr_Schorresetpolders_2];
lyr_Sitesprincipauxdeschorres_1.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', 'NOM_M': 'Ensemble', 'Sum_SurfHA': 'Somme des surfaces de schorres non poldérisés (en ha)', });
lyr_Schorresetpolders_2.set('fieldAliases', {'ID_POLY': 'Id', 'CTXT': 'Contexte littoral', 'ETAT': 'État', 'ACT1': 'Activité 1', 'ACT2': 'Activité 2', 'NOM_COM': 'Commune', 'NOM_COM_M': 'Commune', 'INSEE_COM': 'Code INSEE Commune', 'INSEE_DEP': 'Département', 'INSEE_REG': 'Code INSEE région', 'CODE_EPCI': 'Code EPCI', 'SurfHA': 'Surface (en ha)', 'ENSEMBLE': 'Ensemble', });
lyr_Sitesprincipauxdeschorres_1.set('fieldImages', {'id': 'Hidden', 'Nom': 'Hidden', 'NOM_M': 'TextEdit', 'Sum_SurfHA': 'TextEdit', });
lyr_Schorresetpolders_2.set('fieldImages', {'ID_POLY': 'Hidden', 'CTXT': 'Hidden', 'ETAT': 'Hidden', 'ACT1': 'Hidden', 'ACT2': 'Hidden', 'NOM_COM': 'Hidden', 'NOM_COM_M': 'ValueMap', 'INSEE_COM': 'Hidden', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'Hidden', 'CODE_EPCI': 'Hidden', 'SurfHA': 'TextEdit', 'ENSEMBLE': 'TextEdit', });
lyr_Sitesprincipauxdeschorres_1.set('fieldLabels', {'id': 'no label', 'Nom': 'no label', 'NOM_M': 'header label', 'Sum_SurfHA': 'header label', });
lyr_Schorresetpolders_2.set('fieldLabels', {'ID_POLY': 'no label', 'CTXT': 'no label', 'ETAT': 'no label', 'ACT1': 'no label', 'ACT2': 'no label', 'NOM_COM': 'no label', 'NOM_COM_M': 'header label', 'INSEE_COM': 'no label', 'INSEE_DEP': 'header label', 'INSEE_REG': 'no label', 'CODE_EPCI': 'no label', 'SurfHA': 'header label', 'ENSEMBLE': 'header label', });
lyr_Schorresetpolders_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});