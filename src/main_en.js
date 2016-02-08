var data = [
  ["Ebola",70,'filoviridae','murcielago','Democratic Republic of the Congo, Guinea, Sierra Leon, Liberia, Uganda, South Sudan, Gabon','#DidYouKnow that Ebola is still among the 9 most feared emerging diseases?', 'FH', 'Spain, United States of America, Mali, Senegal, Nigeria, South Africa'],
  ["Marburgo",70,'filoviridae','murcielago','Angola, Democratic Republic of the Congo, Uganda, Kenya, South Africa','Marburg is a largely unknown virus of the same family than Ebola', 'FH', 'Germany, Republic of Serbia'],
  ["Lassa", 1,'arenaviridae','rata','Guinea , Sierra Leon, Liberia, Mali, Ivory Coast, Ghana, Togo, Benin, Nigeria, Burkina Faso','#DidYouKnow that 1 out of 5 infections with Lassa virus can lead to severe disease?', 'FH', ''],
  ["Congo-Crimea", 30,'bunyaviridae','vaca','Mauritania, Mali, Senegal, Guinea, Burkina Faso, Benin, Nigeria, Central African Republic, Democratic Republic of the Congo, South Sudan,Sudan, Egypt, Uganda, Tanzania, Zimbabwe, Namibia, South Africa, Madagascar, Ethiopia, Croatia, Slovenia, Serbia, Bosnia, Albania, Bulgaria, Macedonia, Turkey, Ukraine,Turkmenistan, Uzbekistan, Kazakhstan, Afghanistan, Pakistan, Georgia, Azerbaijan, Iraq, Iran, Saudi Arabia, United Arab Emirates, Oman','Crimean-Congo haemorrhagic fever is transmitted to people through ticks and cattle', 'FH', ''],
  ["Valle Rift", 1,'bunyaviridae','oveja','Namibia, South Africa, Zimbabwe, Mozambique, Zambia, Tanzania, Madagascar, Kenya, South Sudan, Sudan, Egypt, Mauritania, Senegal, Gambia, Saudi Arabia, Yemen','The Rift Valley virus mainly affects animals but can also infect humans', 'FH', ''],
  ["MERS", 40,'Coronavirus','camello,murcielago','Iran, Jordan, Kuwait, Lebanon, Oman, Qatar, Saudi Arabia, United Arab Emirates, Yemen','MERS, an emergent disease, is poorly contagious outside hospital settings', 'EAD', 'South Korea'],
  ["SARS", 10,'Coronavirus','murcielago,gineta','China','In 2003, a SARS outbreak infected 8,000 people and killed 800. No cases have been reported since', 'EAD', 'Canada, Mongolia, Philippines, Vietnam', ''], //Falta Singapur
  ["Nipah", 50,'Paramyxoviridae','murcielago','Malaysia, Bangladesh','Nipah causes mild disease in pigs but severe in humans. It turns up periodically in Bangladesh', 'E', ''], //Falta Singapur
  ["Hendra", 0,'Paramyxoviridae','murcielago','Australia','Hendra infections in humans have only been reported once. It was in 1994 in Australia', 'E', ''] //Falta Singapur
];

var general_tweet = 'The most feared pathogens: 9 diseases that could cause a major epidemic';

var url = "http://www.isglobal.org/en/healthisglobal/-/custom-blog-portlet/los-patogenos-mas-temidos-9-enfermedades-que-podrian-causar-una-gran-epidemia/";
var via = "ISGLOBALorg";


var clicked = '';
d3.select('.tweettxt').text(general_tweet+ " " + url + " via @" + via);
wrap(d3.select('.tweettxt'),225);
// d3.select('.tweetLink').attr('xlink:href','https://twitter.com/share?text='+encodeURIComponent(general_tweet)+'&via='+via+'&url='+url );
d3.select('.tweetLink').attr('xlink:href','https://twitter.com/share?url='+encodeURIComponent(url)+'&via='+encodeURIComponent(via)+'&text='+encodeURIComponent(general_tweet)+'');


d3.selectAll('.bar').on('mouseover',highlight);
d3.selectAll('.virus').on('mouseover',highlight);
d3.selectAll('.bar').on('mouseout',remove_highlight);
d3.selectAll('.virus').on('mouseout',remove_highlight);
d3.select('svg').on('click',function(){
  clicked ='';
  remove_highlight();
});
d3.selectAll('.tweetLink').on('click',function(){
  d3.event.stopPropagation();
  ga('send', 'event', 'Click', 'tweetLink', d3.select(this).attr('xlink:href'));
});
d3.selectAll('.bar').on('click',function(){
  d3.event.stopPropagation();
  // console.log(this)
  var self= this;
  data.forEach(function(d){
    var m = d[0].replace(/ /g,'').replace(/-/g,'');
    if( d3.select(self).classed(m) ){
      clicked=m;
      ga('send', 'event', 'Click', 'bar', m);
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
  data.forEach(function(d,i){
    var m;
    if(e===null){
      m = d[0].replace(/ /g,'').replace(/-/g,'');
    }else{
      m = e;
      self= d3.select('.bar.'+m).node();
    }
    if( d3.select(self).classed(m) && (e===null || e===d[0].replace(/ /g,'').replace(/-/g,'') )){
      ga('send', 'event', 'Hover', 'bar', m);
      d3.selectAll('.'+m).classed('highlight',true);
      var bitxos = d[3].split(',').map(function(e){return '#'+e;}).join(',');
      d3.selectAll(bitxos).classed(m,true);

      //Choose color
      if (d[1]==0){
        var color = '#2FAC66';
      }else{
        var color = d3.select(self).style("fill");
      }
      //legend
      d3.select('.tipo'+d[6]).style('fill',color);

      //Selecciono el mapa
      var c = d[4];
      c = c.split(",").map(function(d){return d.trim();});
      c.forEach(function(e){
        d3.select('path[data-admin="'+e+'"]').style("fill",color);
      });

      //Seleccio de no locals
      var c = d[7];
      if (c.length>0){
        var pattern = "url(#"+d[6]+"pattern)";
        d3.select('#localtrans').style("visibility", "visible");
        d3.select('#localtrans').select("rect").style("fill", pattern);
        c = c.split(",").map(function(d){return d.trim();});
        c.forEach(function(e){
          d3.select('path[data-admin="'+e+'"]').style("fill", pattern);
        });
      }else{
        d3.select('#localtrans').style("visibility", "hidden");
      }

      //Canvio tweet text
      d3.select('.tweettxt').text(d[5]+ " " + url + " via @" + via);
      wrap(d3.select('.tweettxt'),225);
      // d3.select('.tweetLink').attr('xlink:href','http://twitter.com/share?url=""&text='+d[5] );
      d3.select('.tweetLink').attr('xlink:href','https://twitter.com/share?url='+encodeURIComponent(url)+'&via='+encodeURIComponent(via)+'&text='+encodeURIComponent(d[5])+'');
      var percent = d[1]+'%';
      if (percent==='0%'){
        percent = '?';
      }
      d3.select('svg')
        .append('text')
        .text(percent)
        .classed('percentatge', true)
        .attr('x', 148+d[1]*1.3)
        .attr('y', 124+23.1*i)
        .style('font-weight', 'bold')
        .style('fill', color)
        .style('pointer-events', "none")
        .style('font-size', '8px');
      // console.log(wrap([d[5]], 200));
      // d3.select('svg').append(foreignObject)

    }
  });
}

function remove_highlight(){
  d3.select('#localtrans').style("visibility", "hidden")
  d3.selectAll('.percentatge').remove();
  d3.selectAll('.bar').classed('highlight',false);
  d3.selectAll('.label').classed('highlight',false);
  d3.selectAll('.tipo').style('fill', null);
  d3.selectAll('g.map path[data-admin]').style('fill',null);
  data.forEach(function(d){
    var m = d[0].replace(/ /g,'').replace(/-/g,'');
    var bitxos = d[3].split(',').map(function(e){return '#'+e;}).join(',');
    d3.selectAll(bitxos).classed(m,false);
  });

  if(clicked!==''){
    // console.log('Hi ha clicat:'+clicked)
    highlight(clicked);
  }else{
    d3.select('.tweettxt').text(general_tweet+ " " + url + " via @" + via);
    wrap(d3.select('.tweettxt'),225);
    // d3.select('.tweetLink').attr('xlink:href','http://twitter.com/share?text='+general_tweet );
    d3.select('.tweetLink').attr('xlink:href','https://twitter.com/share?url='+encodeURIComponent(url)+'&via='+encodeURIComponent(via)+'&text='+encodeURIComponent(general_tweet)+'');
  }
}

function wrap(text, width) {
  text.each(function() {
    var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        // lineHeight = 1.1, // ems
        lineHeight = 1, // ems
        y = text.attr("y"),
        dy = parseFloat(text.attr("dy")),
        tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        // tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
        tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", lineHeight + "em").text(word);

      }

    }
  });
}

//Afegeixo el mapa
d3.xml("world.svg",function(error, documentFragment) {

    if (error) {console.log(error); return;}

    var svgNode = documentFragment
                .getElementsByTagName("svg")[0];
    //use plain Javascript to extract the node
    var main_chart_svg = d3.select('g.map');
    main_chart_svg.node().appendChild(svgNode);
    main_chart_svg.node().appendChild(svgNode);
});
