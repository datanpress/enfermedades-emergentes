var clicked = '';
d3.selectAll('.Ebola').on('mouseover',function(){
  d3.selectAll('.Ebola').classed('highlight',true);
  d3.select('#reserv_murci').classed('Ebola',true);
  var c = 'Democratic Republic of the Congo, Guinea, Sierra Leon, Liberia, Uganda, South Sudan, Gabon';
  c = c.split(",").map(function(d){return d.trim();});
  c.forEach(function(e){
    d3.select('path[data-admin="'+e+'"]').style("fill","#36A9E1");
  });
});
d3.selectAll('.Marburgo').on('mouseover',function(){
  d3.selectAll('.Marburgo').classed('highlight',true);
  d3.select('#reserv_murci').classed('Marburgo',true);
  var c = 'Angola, Democratic Republic of the Congo, Uganda, Kenya, South Africa';
  c = c.split(",").map(function(d){return d.trim();});
  c.forEach(function(e){
    d3.select('path[data-admin="'+e+'"]').style("fill","#36A9E1");
  });
});
d3.selectAll('.Lassa').on('mouseover',function(){
  d3.selectAll('.Lassa').classed('highlight',true);
  d3.select('#reserv_rat').classed('Lassa',true);
  var c = 'Guinea , Sierra Leon, Liberia, Mali, Ivory Coast, Ghana, Togo, Benin, Nigeria, Burkina Faso';
  c = c.split(",").map(function(d){return d.trim();});
  c.forEach(function(e){
    d3.select('path[data-admin="'+e+'"]').style("fill","#36A9E1");
  });
});
d3.selectAll('.CongoCrimea').on('mouseover',function(){
  d3.selectAll('.CongoCrimea').classed('highlight',true);
  d3.select('#reserv_vaca').classed('CongoCrimea',true);
  var c = 'Mauritania, Mali, Senegal, Guinea, Burkina Faso, Benin, Nigeria, Central African Republic, Democratic Republic of the Congo, South Sudan,Sudan, Egypt, Uganda, Tanzania, Zimbabwe, Namibia, South Africa, Madagascar, Ethiopia, Croatia, Slovenia, Serbia, Bosnia, Albania, Bulgaria, Macedonia, Turkey, Ukraine,Turkmenistan, Uzbekistan, Kazakhstan, Afghanistan, Pakistan, Georgia, Azerbaijan, Iraq, Iran, Saudi Arabia, United Arab Emirates, Oman';
  c = c.split(",").map(function(d){return d.trim();});
  c.forEach(function(e){
    d3.select('path[data-admin="'+e+'"]').style("fill","#36A9E1");
  });
});
d3.selectAll('.ValleRift').on('mouseover',function(){
  d3.selectAll('.ValleRift').classed('highlight',true);
  d3.select('#reserv_ovella').classed('ValleRift',true);
  // var c = '';
  // c = c.split(",").map(function(d){return d.trim();});
  // c.forEach(function(e){
  //   d3.select('path[data-admin="'+e+'"]').style("fill","#36A9E1");
  // });
});
d3.selectAll('.MERS').on('mouseover',function(){
  d3.selectAll('.MERS').classed('highlight',true);
  d3.select('#reserv_camell').classed('MERS',true);
  d3.select('#reserv_murci').classed('MERS',true);
  var c = 'Iran, Jordan, Kuwait, Lebanon, Oman, Qatar, Saudi Arabia, United Arab Emirates, Yemen';
  c = c.split(",").map(function(d){return d.trim();});
  c.forEach(function(e){
    d3.select('path[data-admin="'+e+'"]').style("fill","#E30613");
  });
});
d3.selectAll('.SARS').on('mouseover',function(){
  d3.selectAll('.SARS').classed('highlight',true);
  d3.select('#reserv_geneta').classed('SARS',true);
  d3.select('#reserv_murci').classed('SARS',true);
  var c = 'Canada, China, Mongolia, Philippines, Vietnam'; //Falta Singapur
  c = c.split(",").map(function(d){return d.trim();});
  c.forEach(function(e){
    d3.select('path[data-admin="'+e+'"]').style("fill","#E30613");
  });
});
d3.selectAll('.Nipah').on('mouseover',function(){
  d3.selectAll('.Nipah').classed('highlight',true);
    d3.select('#reserv_murci').classed('Nipah',true);
    var c = 'Malaysia, Bangladesh'; //Falta Singapur
    c = c.split(",").map(function(d){return d.trim();});
    c.forEach(function(e){
      d3.select('path[data-admin="'+e+'"]').style("fill","#2FAC66");
    });
});
d3.selectAll('.Hendra').on('mouseover',function(){
  d3.selectAll('.Hendra').classed('highlight',true);
    d3.select('#reserv_murci').classed('Hendra',true);
    var c = 'Australia'; //Falta Singapur
    c = c.split(",").map(function(d){return d.trim();});
    c.forEach(function(e){
      d3.select('path[data-admin="'+e+'"]').style("fill","#2FAC66");
    });
});


//Mouseout

d3.selectAll('.Ebola').on('mouseout',function(){
    d3.selectAll('.Ebola').classed('highlight',false);
    d3.select('#reserv_murci').classed('Ebola',false);
    var c = 'Democratic Republic of the Congo, Guinea, Sierra Leon, Liberia, Uganda, South Sudan, Gabon';
    c = c.split(",").map(function(d){return d.trim();});
    c.forEach(function(e){
      d3.select('path[data-admin="'+e+'"]').style("fill","none");
    });

});
d3.selectAll('.Marburgo').on('mouseout',function(){
  d3.selectAll('.Marburgo').classed('highlight',false);
  d3.select('#reserv_murci').classed('Marburgo',false);
  var c = 'Angola, Democratic Republic of the Congo, Uganda, Kenya, South Africa';
  c = c.split(",").map(function(d){return d.trim();});
  c.forEach(function(e){
    d3.select('path[data-admin="'+e+'"]').style("fill","none");
  });
});
d3.selectAll('.Lassa').on('mouseout',function(){
  d3.selectAll('.Lassa').classed('highlight',false);
  d3.select('#reserv_rat').classed('Lassa',false);
  var c = 'Guinea , Sierra Leon, Liberia, Mali, Ivory Coast, Ghana, Togo, Benin, Nigeria, Burkina Faso';
  c = c.split(",").map(function(d){return d.trim();});
  c.forEach(function(e){
    d3.select('path[data-admin="'+e+'"]').style("fill","none");
  });
});
d3.selectAll('.CongoCrimea').on('mouseout',function(){
  d3.selectAll('.CongoCrimea').classed('highlight',false);
  d3.select('#reserv_vaca').classed('CongoCrimea',false);
  var c = 'Mauritania, Mali, Senegal, Guinea, Burkina Faso, Benin, Nigeria, Central African Republic, Democratic Republic of the Congo, South Sudan,Sudan, Egypt, Uganda, Tanzania, Zimbabwe, Namibia, South Africa, Madagascar, Ethiopia, Croatia, Slovenia, Serbia, Bosnia, Albania, Bulgaria, Macedonia, Turkey, Ukraine,Turkmenistan, Uzbekistan, Kazakhstan, Afghanistan, Pakistan, Georgia, Azerbaijan, Iraq, Iran, Saudi Arabia, United Arab Emirates, Oman';
  c = c.split(",").map(function(d){return d.trim();});
  c.forEach(function(e){
    d3.select('path[data-admin="'+e+'"]').style("fill","none");
  });
});
d3.selectAll('.ValleRift').on('mouseout',function(){
  d3.selectAll('.ValleRift').classed('highlight',false);
  d3.select('#reserv_ovella').classed('ValleRift',false);
  // var c = '';
  // c = c.split(",").map(function(d){return d.trim();});
  // c.forEach(function(e){
  //   d3.select('path[data-admin="'+e+'"]').style("fill","none");
  // });
});
d3.selectAll('.MERS').on('mouseout',function(){
  d3.selectAll('.MERS').classed('highlight',false);
  d3.select('#reserv_camell').classed('MERS',false);
  d3.select('#reserv_murci').classed('MERS',false);
  var c = 'Iran, Jordan, Kuwait, Lebanon, Oman, Qatar, Saudi Arabia, United Arab Emirates, Yemen';
  c = c.split(",").map(function(d){return d.trim();});
  c.forEach(function(e){
    d3.select('path[data-admin="'+e+'"]').style("fill","none");
  });
});
d3.selectAll('.SARS').on('mouseout',function(){
  d3.selectAll('.SARS').classed('highlight',false);
  d3.select('#reserv_geneta').classed('SARS',false);
  d3.select('#reserv_murci').classed('SARS',false);
  var c = 'Canada, China, Mongolia, Philippines, Vietnam'; //Falta Singapur
  c = c.split(",").map(function(d){return d.trim();});
  c.forEach(function(e){
    d3.select('path[data-admin="'+e+'"]').style("fill","none");
  });
});
d3.selectAll('.Nipah').on('mouseout',function(){
  d3.selectAll('.Nipah').classed('highlight',false);
    d3.select('#reserv_murci').classed('Nipah',false);
    var c = 'Malaysia, Bangladesh'; //Falta Singapur
    c = c.split(",").map(function(d){return d.trim();});
    c.forEach(function(e){
      d3.select('path[data-admin="'+e+'"]').style("fill","none");
    });
});
d3.selectAll('.Hendra').on('mouseout',function(){
  d3.selectAll('.Hendra').classed('highlight',false);
    d3.select('#reserv_murci').classed('Hendra',false);
    var c = 'Australia'; //Falta Singapur
    c = c.split(",").map(function(d){return d.trim();});
    c.forEach(function(e){
      d3.select('path[data-admin="'+e+'"]').style("fill","none");
    });
});



//Afegeixo el mapa
d3.xml("world.svg",function(error, documentFragment) {

    if (error) {console.log(error); return;}

    var svgNode = documentFragment
                .getElementsByTagName("svg")[0];
    //use plain Javascript to extract the node
    var main_chart_svg = d3.select('g.map');
    main_chart_svg.node().appendChild(svgNode);
});

// function highlightClicked(malaltia){
//
// }
