$().ready(function() {
    console.log("js is ready");
    $.getJSON("https://narumichan.github.io/energydrinks/tierlist.json", function(tierlistData){
        console.log(tierlistData);
    });
 });