$().ready(function() {
    $.getJSON("/tierlist.json", function(tierlistData){
        console.log(tierlistData);
    });
 });