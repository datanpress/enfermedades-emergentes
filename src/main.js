var data = [
  ["Ebola",70,'filoviridae','murcielago','Democratic Republic of the Congo, Guinea, Sierra Leon, Liberia, Uganda, South Sudan, Gabon'],
  ["Marburgo",70,'filoviridae','murcielago','Angola, Democratic Republic of the Congo, Uganda, Kenya, South Africa'],
  ["Lassa", 10,'arenaviridae','rata','Guinea , Sierra Leon, Liberia, Mali, Ivory Coast, Ghana, Togo, Benin, Nigeria, Burkina Faso'],
  ["Congo-Crimea", 50,'bunyaviridae','vaca','Mauritania, Mali, Senegal, Guinea, Burkina Faso, Benin, Nigeria, Central African Republic, Democratic Republic of the Congo, South Sudan,Sudan, Egypt, Uganda, Tanzania, Zimbabwe, Namibia, South Africa, Madagascar, Ethiopia, Croatia, Slovenia, Serbia, Bosnia, Albania, Bulgaria, Macedonia, Turkey, Ukraine,Turkmenistan, Uzbekistan, Kazakhstan, Afghanistan, Pakistan, Georgia, Azerbaijan, Iraq, Iran, Saudi Arabia, United Arab Emirates, Oman'],
  ["Valle Rift", 10,'bunyaviridae','oveja',''],
  ["MERS", 40,'Coronavirus','camello,murcielago','Iran, Jordan, Kuwait, Lebanon, Oman, Qatar, Saudi Arabia, United Arab Emirates, Yemen'],
  ["SARS", 10,'Coronavirus','murcielago,gineta','Canada, China, Mongolia, Philippines, Vietnam'], //Falta Singapur
  ["Nipah", 60,'Paramyxoviridae','murcielago','Malaysia, Bangladesh'], //Falta Singapur
  ["Hendra", 0,'Paramyxoviridae','murcielago','Australia'] //Falta Singapur
];


var clicked = '';
d3.selectAll('.bar').on('mouseover',highlight);
d3.selectAll('.bar').on('mouseout',remove_highlight);
d3.select('svg').on('click',function(){
  clicked ='';
  remove_highlight();
});
d3.selectAll('.bar').on('click',function(){
  d3.event.stopPropagation();
  // console.log(this)
  var self= this;
  data.forEach(function(d){
    var m = d[0].replace(/ /g,'').replace(/-/g,'');
    if( d3.select(self).classed(m) ){
      clicked=m;
    }
  });
});



function highlight(e){
  if(clicked !== ''){
    var prev_clicked = clicked;
    clicked = '';
    remove_highlight();
    clicked = prev_clicked;
  }
  e = typeof e !== 'undefined' ? e : null;  //Element seleccionat

  var self= this;
  data.forEach(function(d){
    var m;
    if(e===null){
      m = d[0].replace(/ /g,'').replace(/-/g,'');
    }else{
      m = e;
      self= d3.select('.bar.'+m).node();
    }
    if( d3.select(self).classed(m) && (e===null || e===d[0].replace(/ /g,'').replace(/-/g,'') )){
      d3.selectAll('.'+m).classed('highlight',true);
      var bitxos = d[3].split(',').map(function(e){return '#'+e;}).join(',');
      d3.selectAll(bitxos).classed(m,true);

      var c = d[4];
      var color = d3.select(self).style("fill");
      c = c.split(",").map(function(d){return d.trim();});
      c.forEach(function(e){
        d3.select('path[data-admin="'+e+'"]').style("fill",color);
      });
      // }
    }
  });
}

function remove_highlight(){
  // over = typeof e !== 'undefined' ? over : null;  //Element seleccionat
  // console.log(over)
  // var self= this;
  d3.selectAll('.bar').classed('highlight',false);
  d3.selectAll('.label').classed('highlight',false);
  d3.selectAll('g.map path[data-admin]').style('fill','none');
  data.forEach(function(d){
    var m = d[0].replace(/ /g,'').replace(/-/g,'');
    var bitxos = d[3].split(',').map(function(e){return '#'+e;}).join(',');
    d3.selectAll(bitxos).classed(m,false);
  });
  //   if( d3.select(self).classed(m) ){
  //     d3.selectAll('.'+m).classed('highlight',false);
  //     var bitxos = d[3].split(',').map(function(e){return '#'+e;}).join(',');
  //     d3.selectAll(bitxos).classed(m,false);
  //
  //     //deselecciono els països
  //     var c = d[4];
  //     var color = d3.select(self).style("fill");
  //     c = c.split(",").map(function(d){return d.trim();});
  //     c.forEach(function(e){
  //       d3.select('path[data-admin="'+e+'"]').style("fill","none");
  //     });
  //   }
  // });

  if(clicked!==''){
    // console.log('Hi ha clicat:'+clicked)
    highlight(clicked);
  }
}


//Afegeixo el mapa
d3.xml("world.svg",function(error, documentFragment) {

    if (error) {console.log(error); return;}

    var svgNode = documentFragment
                .getElementsByTagName("svg")[0];
    //use plain Javascript to extract the node
    var main_chart_svg = d3.select('g.map');
    main_chart_svg.node().appendChild(svgNode);
});
