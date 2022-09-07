//Google Satellite
const m_color = new L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom:18,
    	minZoom: 5,
    	subdomains:['mt0'],
	attribution:
        "Maptiles by <a href='https://google.com/maps/' target='_blank'>GOOGLE</a>, under CC BY. Data by <a href='https://google.com' target='_blank'>Google</a> contributors, under ODbL.",
});

//ArcGIS Satellite
const m_mono = new L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution:
        "Maptiles by <a href='http://arcgis.com/' target='_blank'>ESRI ARCGIS</a>, under CC BY. Data by <a href='https://esri.com' target='_blank'>ESRI</a> contributors, ",
});

//Google Map
const m_map = new L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom:18,
    	minZoom: 5,
    	subdomains:['mt0'],
	attribution:
        "Maptiles by <a href='https://google.com/maps/' target='_blank'>GOOGLE</a>, under CC BY. Data by <a href='https://google.com' target='_blank'>Google</a> contributors, under ODbL.",
});

//MAP
const map = L.map('map', {
    center: [-7.7462927, 110.41071],
    zoom: 13,
    zoomControl: true,
    layers: [m_color],
	 fullscreenControl: true,
  fullscreenControlOptions: {
    position: 'topleft'
  }
});

//Pane Creation
map.createPane('order');

// This pane is above markers but below popups
map.getPane('order').style.zIndex = 650;

// Layers in this pane are non-interactive and do not obscure mouse/touch events
map.getPane('order').style.pointerEvents = 'none';

//Satellite Photo 1966
const o_std = new L.tileLayer('https://github.com/geo2004/Yogyakarta_July1966_SatellitePhoto/raw/main/Yogya_071966_1Meter/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://earthexplorer.usgs.gov">USGS EarthExplorer</a> contributors',
	pane: 'order'
});

//Satellite Imagery 2010
const t_pale = new L.tileLayer('https://github.com/geo2004/Yogyakarta_Historical_Aerial_Satellite_Imagery_Photographs_Collection/raw/main/Yogya_2010_quickbird/{z}/{x}/{y}.png', {
    attribution:
        "<a href='#' target='_blank'>Digital Globe</a>",
});

//GSI Ort
const t_ort = new L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/ort/{z}/{x}/{y}.jpg', {
    attribution:
        "<a href='http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html' target='_blank'>国土地理院</a>",
});


//BaseLayer
const Map_BaseLayer = {
    'Google Satellite': m_color,
    'ArcGIS Satellite': m_mono,
    'Google Map': m_map,
};

//AddLayer
const Map_AddLayer = {
    'Satellite Photo Corona July 1966': o_std,
    'Satellite Imagery Quickbird 2010': t_pale,
    'GSI Ort': t_ort,
};

//LayerControl
L.control
    .layers(Map_BaseLayer, Map_AddLayer, {
        collapsed: false,
    })
    .addTo(map);

//OpacityControl
L.control
    .opacity(Map_AddLayer, {
        label: 'Layers Opacity',
    })
    .addTo(map);

//ScaleControl
L.control.scale().addTo(map);
//NavBarControl
L.control.navbar().addTo(map);
//ZoomBoxControl
L.Control.boxzoom({ position:'topright' }).addTo(map);
//GeocodingControl
L.control.search({ position: 'topright' }).addTo(map);
