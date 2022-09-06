//Google Satellite
const m_color = new L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom:18,
    	minZoom: 5,
    	subdomains:['mt0'],
	attribution:
        "Maptiles by <a href='https://google.com/maps/' target='_blank'>GOOGLE</a>, under CC BY. Data by <a href='https://google.com' target='_blank'>Google</a> contributors, under ODbL.",
});

//ArcGIS Satellite
const m_mono = new L.tileLayer('https://tile.mierune.co.jp/mierune_mono/{z}/{x}/{y}.png', {
    attribution:
        "Maptiles by <a href='http://mierune.co.jp/' target='_blank'>MIERUNE</a>, under CC BY. Data by <a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> contributors, under ODbL.",
});

//Satellite Photo 1966
const o_std = new L.tileLayer('https://github.com/geo2004/Yogyakarta_July1966_SatellitePhoto/raw/main/Yogya_071966_1Meter/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://earthexplorer.usgs.gov">USGS EarthExplorer</a> contributors',
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

//MAP
const map = L.map('map', {
    center: [-7.7462927, 110.41071],
    zoom: 13,
    zoomControl: true,
    layers: [m_color],
});

//BaseLayer
const Map_BaseLayer = {
    'Google Satellite': m_color,
    'ArcGIS Satellite': m_mono,
};

//AddLayer
const Map_AddLayer = {
    'Satellite Photo July 1966': o_std,
    'GSI Pale': t_pale,
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