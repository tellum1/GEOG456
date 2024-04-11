var yearBefore ='2012'
var yearAfter = '2020'

var datasetBefore = ee.ImageCollection('USDA/NAIP/DOQQ')
                  .filter(ee.Filter.bounds(geometry))
                  .filter(ee.Filter.date(yearBefore + '-01-01', yearBefore + '-12-31'));

var datasetAfter = ee.ImageCollection('USDA/NAIP/DOQQ')
                 .filter(ee.Filter.bounds(geometry))
                 .filter(ee.Filter.date(yearAfter + '-01-01', yearAfter + '-12-31'));

 var befImage = datasetBefore.select(['R', 'G', 'B'])
 var befImage = befImage.median().clip(geometry);

 var aftImage = datasetAfter.select(['R', 'G', 'B'])
 var aftImage = aftImage.median().clip(geometry);

 var trueColorVis = {
    min: 0,
    max: 255,
  };

Map.setCenter(-79.05274, 35.91272, 15);
Map.addLayer(aftImage, trueColorVis, yearAfter);
Map.addLayer(befImage, trueColorVis, yearBefore);





