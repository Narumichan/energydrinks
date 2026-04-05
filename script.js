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
        $("#drinkNotesHeading").after($("<div id='drinkNotes'></div>"));
        const drinkNotes = $("div#drinkNotes");
        const tierlistTable = $("#compactTierlistDiv>table");
        
        let drinkIndex = 0;
        $.each(tierlistData["tiers"], function(i, tier){
            tierlistTable.append($("<tr></tr>"));
            let tierRow = tierlistTable.find($(`tr:nth-child(${i+1})`));

            tierRow.append($("<td class='tier'></td>").text(`${tier["tierName"]}`));
            
            $.each(tier["drinks"], function(j, drink){
                drinkIndex++;
                let drinkNoteId = drink["image"].replace("images/","").replace(".png","");
                //console.log(drinkIndex)
                //console.log(`${tier["tierName"]} : ${drink["name"]}`);
                tierRow.append($(`<td class='drinkCell'></td>`));
                let drinkCell = tierRow.find($(`td:nth-child(${j+2})`));
                drinkCell.append(`<a href='#${drinkNoteId}'></a>`);
                drinkCell.find("a").append($(`<img src='${drink["image"]}'>`));


                drinkNotes.append($(`<div id='${drinkNoteId}' class='drinkNote'></div>`));
                let drinkNote = drinkNotes.find($(`.drinkNote:nth-child(${drinkIndex})`));
                drinkNote.append($(`<img src='${drink["image"]}'>`));
                drinkNote.append($('<div class="drinkData"></div>'));
                let noteData = drinkNote.find($("div"));
                noteData.append($("<h3></h3>").text(drink["name"]));
                noteData.append($("<p></p>").text(drink["notes"]));
            });
        });

    });
 });