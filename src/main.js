
d3.selectAll('.Ebola').on('mouseover',function(){
  d3.selectAll('.Ebola').classed('highlight',true);
  d3.select('#reserv_murci').classed('Ebola',true);
  var c = 'Democratic Republic of the Congo, Guinea, Sierra Leon, Liberia, Uganda, South Sudan, Gabon';
  c = c.split(",").map(function(d){return d.trim();});
  c.forEach(function(e){
    d3.select('path[data-admin="'+e+'"]').style("fill","red");
  });
});
d3.selectAll('.Marburgo').on('mouseover',function(){
  d3.selectAll('.Marburgo').classed('highlight',true);
  d3.select('#reserv_murci').classed('Marburgo',true);
  var c = 'Angola, Democratic Republic of the Congo, Uganda, Kenya, South Africa';
});
d3.selectAll('.Lassa').on('mouseover',function(){
  d3.selectAll('.Lassa').classed('highlight',true);
  d3.select('#reserv_rat').classed('Lassa',true);
  var c = 'Guinea , Sierra Leon, Liberia, Mali, Ivory Coast, Ghana, Togo, Benin, Nigeria, Burkina Faso';
});
d3.selectAll('.CongoCrimea').on('mouseover',function(){
  d3.selectAll('.CongoCrimea').classed('highlight',true);
  d3.select('#reserv_vaca').classed('CongoCrimea',true);
  var c = 'Mauritania, Mali, Senegal, Guinea, Burkina Faso, Benin, Nigeria, Central African Republic, Democratic Republic of the Congo, South Sudan,Sudan, Egypt, Uganda, Tanzania, Zimbabwe, Namibia, South Africa, Madagascar, Ethiopia, Croatia, Slovenia, Serbia, Bosnia, Albania, Bulgaria, Macedonia, Turkey, Ukraine,Turkmenistan, Uzbekistan, Kazakhstan, Afghanistan, Pakistan, Georgia, Azerbaijan, Iraq, Iran, Saudi Arabia, United Arab Emirates, Oman';
});
d3.selectAll('.ValleRift').on('mouseover',function(){
  d3.selectAll('.ValleRift').classed('highlight',true);
  d3.select('#reserv_ovella').classed('ValleRift',true);
  var c = '';
});
d3.selectAll('.MERS').on('mouseover',function(){
  d3.selectAll('.MERS').classed('highlight',true);
  d3.select('#reserv_camell').classed('MERS',true);
  d3.select('#reserv_murci').classed('MERS',true);
  var c = 'Iran, Jordan, Kuwait, Lebanon, Oman, Qatar, Saudi Arabia, United Arab Emirates, Yemen';
});
d3.selectAll('.SARS').on('mouseover',function(){
  d3.selectAll('.SARS').classed('highlight',true);
  d3.select('#reserv_geneta').classed('SARS',true);
  d3.select('#reserv_murci').classed('SARS',true);
  var c = 'Canada, China, Mongolia, Philippines, Vietnam'; //Falta Singapur
});
d3.selectAll('.Nipah').on('mouseover',function(){
  d3.selectAll('.Nipah').classed('highlight',true);
    d3.select('#reserv_murci').classed('Nipah',true);
    var c = 'Malaysia, Bangladesh'; //Falta Singapur
});
d3.selectAll('.Hendra').on('mouseover',function(){
  d3.selectAll('.Hendra').classed('highlight',true);
    d3.select('#reserv_murci').classed('Hendra',true);
    var c = 'Australia'; //Falta Singapur
});


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
});
d3.selectAll('.Lassa').on('mouseout',function(){
  d3.selectAll('.Lassa').classed('highlight',false);
  d3.select('#reserv_rat').classed('Lassa',false);
});
d3.selectAll('.CongoCrimea').on('mouseout',function(){
  d3.selectAll('.CongoCrimea').classed('highlight',false);
  d3.select('#reserv_vaca').classed('CongoCrimea',false);
});
d3.selectAll('.ValleRift').on('mouseout',function(){
  d3.selectAll('.ValleRift').classed('highlight',false);
  d3.select('#reserv_ovella').classed('ValleRift',false);
});
d3.selectAll('.MERS').on('mouseout',function(){
  d3.selectAll('.MERS').classed('highlight',false);
  d3.select('#reserv_camell').classed('MERS',false);
  d3.select('#reserv_murci').classed('MERS',false);
});
d3.selectAll('.SARS').on('mouseout',function(){
  d3.selectAll('.SARS').classed('highlight',false);
  d3.select('#reserv_geneta').classed('SARS',false);
  d3.select('#reserv_murci').classed('SARS',false);
});
d3.selectAll('.Nipah').on('mouseout',function(){
  d3.selectAll('.Nipah').classed('highlight',false);
    d3.select('#reserv_murci').classed('Nipah',false);
});
d3.selectAll('.Hendra').on('mouseout',function(){
  d3.selectAll('.Hendra').classed('highlight',false);
    d3.select('#reserv_murci').classed('Hendra',false);
});
