
// $(function(){
//     $('#get-set-list').on('click', function getSetlists() {
//         $.getJSON('https://api.phish.net/v3/setlists/latest/?apikey=788C91866CF5717C4484&callback=?',
//             function callback(json) {
//                 $('#setlist').append("<div id=\"pnetsetlist\">");
//                 for(i=0;i<json.response.data.length;i++) {
//                     var n = json.response.data[i];
//                     $('#tiph').append("<h3>"+n.short_date+" <a href=\"http://phish.net/setlists/"+n.permalink+".html\">"+n.venue+"</a></h3><p class='pnetsl'>"+n.setlistdata+"</p>");
//                     if(n.setlistnotes.replace(/^\s+|\s+$/g,"")!='') { ('#setlist').append("<p class='pnetsn' style=\"font-size:10px;\">" + n.setlistnotes + "</p>"); }
//                 }
//                 $('#setlist').append("</div>");
//             }
// 	    );
//      });

//     $('#get-random').on('click', function getSetlists() {
        
//         $('#random').toggleClass('d-none');
//     });
//     $('#get-random').on('click', $.get("https://api.phish.net/v3/setlists/random?apikey=788C91866CF5717C4484&callback=phishnet.setlist", function getSetlists() {
//         $('#random').toggleClass('d-none');
//     }));
    
	


// });