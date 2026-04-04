$().ready(function() {
    console.log("doc is ready");
    $.getJSON("https://narumichan.github.io/energydrinks/tierlist.json", function(tierlistData){
        console.log(tierlistData);

        const tierlistDiv = $("#compactTierlistDiv");
        tierlistDiv.empty();

        tierlistDiv.append($("<table></table>"));
        const tierlistTable = $("#compactTierlistDiv>table");
        
        $.each(tierlistData["tiers"], function(i, tier){
            tierlistTable.append($("<tr></tr>"));
            let tierRow = tierlistTable.find($(`tr:nth-child(${i+1})`));
            //let tierRow = $(`#compactTierlistDiv tr:nth-child(${i+1})`);

            tierRow.append($("<td class='tier'></td>").text(`${tier["tierName"]}`));
            
            $.each(tier["drinks"], function(j, drink){
                tierRow.append($("<td class='drinkCell'></td>"));
                let drinkCell = tierRow.find($(`td:nth-child(${j+2})`));
                drinkCell.append($(`<img src='${drink["image"]}'>`))
            });
        });


    });
 });