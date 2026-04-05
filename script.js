$().ready(function() {
    console.log("doc is ready");
    $.getJSON("https://narumichan.github.io/energydrinks/tierlist.json", function(tierlistData){
        console.log(tierlistData);

        const generalTipsList = $("#generalTips>ul");
        generalTipsList.empty();
        $.each(tierlistData["advice"], function(i,text){
            generalTipsList.append($("<li></li>").text(text));
        });



        const tierlistDiv = $("#compactTierlistDiv");
        tierlistDiv.empty();

        tierlistDiv.append($("<table></table>"));
        tierlistDiv.after($("<div id='drinkNotes'></div>"));
        const drinkNotes = $("div#drinkNotes");
        const tierlistTable = $("#compactTierlistDiv>table");
        
        let drinkIndex = 0;
        $.each(tierlistData["tiers"], function(i, tier){
            tierlistTable.append($("<tr></tr>"));
            let tierRow = tierlistTable.find($(`tr:nth-child(${i+1})`));

            tierRow.append($("<td class='tier'></td>").text(`${tier["tierName"]}`));
            
            $.each(tier["drinks"], function(j, drink){
                drinkIndex++;
                //console.log(drinkIndex)
                //console.log(`${tier["tierName"]} : ${drink["name"]}`);
                tierRow.append($("<td class='drinkCell'></td>"));
                let drinkCell = tierRow.find($(`td:nth-child(${j+2})`));
                drinkCell.append($(`<img src='${drink["image"]}'>`));


                drinkNotes.append($("<div class='drinkNote'></div>"));
                let drinkNote = drinkNotes.find($(`.drinkNote:nth-child(${drinkIndex})`));
                drinkNote.append($(`<img src='${drink["image"]}'>`));
                drinkNote.append($('<p></p>').text(drink["notes"]));
            });
        });

    });
 });