'use strict';

var booksterDataFiles = ['lotr-book1.json', 'karlson.json', 'dandelion-wine.json'];

booksterDataFiles.forEach(function (dataFileName) {

  d3.json('/../../../../../../assets/data/bookster/' + dataFileName, function ( error, data ) {
    var bkstr = window.bookster(data, dataFileName.split('.')[0]);
    bkstr.squares(document.getElementById(dataFileName.split('.')[0] + '-bookster'));
    bkstr.treemaps(document.getElementById(dataFileName.split('.')[0] + '-treemap'), 1, [1]);

    bkstr.linechart(document.getElementById(dataFileName.split('.')[0] + '-linechart'));

    bkstr.piecharts(document.getElementById(dataFileName.split('.')[0] + '-piechart'), 1, [1]);
    bkstr.piecharts(document.getElementById(dataFileName.split('.')[0] + '-piecharts-per-chunks'), 9, [3, 3, 3]);
  //   var treemapData = preProcessDataForTreemap(data);
  //   var booksterDiv = d3.select("#"+dataFileName.split('.')[0]+'-bookster');

  //   data.forEach(function ( sentimentWordPair ) {
  //     booksterDiv.append("div").attr('class', 'b'+sentimentWordPair[0]).attr('title', sentimentWordPair[1]);
  //   });

  //   var div = d3.select("#"+dataFileName.split('.')[0]+'-treemap').append("div")
  //   .style("position", "relative")
  //   .style("width", (width + margin.left + margin.right) + "px")
  //   .style("height", (height + margin.top + margin.bottom) + "px")
  //   .style("left", margin.left + "px")
  //   .style("top", margin.top + "px");

  //   var node = div.datum(treemapData).selectAll(".node"+dataFileName.split('.')[0])
  //   .data(treemap.nodes)
  // .enter().append("div")
  //   .attr("class", "node")
  //   .call(position)
  //   .style("background", function(d) { return d.children ? colors[d.sentiment] : null; })
  //   .text(function(d) { return d.children ? null : d.sentiment; });
  });
  

});