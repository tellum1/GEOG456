// need to create a geometry, otherwise this won't work!
var dataset = ee.ImageCollection('USDA/NAIP/DOQQ')
                  .filter(ee.Filter.date('2017-01-01', '2018-12-31'));
var trueColor = dataset.select(['R','G','B']).median().clip(geometry);
var trueColorVis = {
  min: 0,
  max: 255,
};
var unc = trueColor.median().clip(geometry)
Map.setCenter(-79.03922, 35.90058, 15);
Map.addLayer(trueColor, trueColorVis, 'True Color');