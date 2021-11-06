//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////// ITEM GENERATION DIV ////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var toolBarTabSelect = document.getElementById("textchat-input");
var parentDiv = toolBarTabSelect.parentNode;

const randomOptionDiv = document.createElement("div");
//parentDiv.insertBefore(randomOptionDiv, toolBarTabSelect);

toolBarTabSelect.appendChild(randomOptionDiv);

//randomOptionDiv.style.backgroundColor = "black";
randomOptionDiv.style.width = "220px";


var textChatDiv = document.getElementById("textchat");

textChatDiv.style.height = parseInt( textChatDiv.style.height, 10) - 145 + "px";

window.addEventListener('resize', resizeChat);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////// DROP DOWN ITEM LIST /////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let optionItemArray = [
    "Item: Amulet, Armour, Ring or Weapon",
    "Item: Amulet",
    "Item: Armour",
    "Item: Ring",
    "Item: Weapon",
    "Amulet: Amber",
    "Amulet: Coral",
    "Amulet: Jade",
    "Amulet: Lapis",
    "Amulet: Onyx",
    "Amulet: Paua",
    "Armour: Cloth Boots",
    "Armour: Cloth Helm",
    "Armour: Cloth Robe",
    "Armour: Leather Armour",
    "Armour: Leather Boots",
    "Armour: Leather Helm",
    "Armour: Leather Shield",
    "Armour: Metal Boots",
    "Armour: Metal Helm",
    "Armour: Metal Plate",
    "Armour: Metal Shield",
    "Armour: Voodoo Charm",
    "Ring: Coral",
    "Ring: Iron",
    "Ring: Onyx",
    "Ring: Paua",
    "Weapon: Axe 1H",
    "Weapon: Axe 2H",
    "Weapon: Bow 2H",
    "Weapon: Claw 1H",
    "Weapon: Dagger 1H",
    "Weapon: Mace 1H",
    "Weapon: Mace 2H",
    "Weapon: Sceptre 1H",
    "Weapon: Spear 1H",
    "Weapon: Spear 2H",
    "Weapon: Stave 2H",
    "Weapon: Sword 1H",
    "Weapon: Sword 2H",
    "Weapon: Wand 1h"
];

var itemSelect = document.createElement("select");

for (var i=0; i < optionItemArray.length; i += 1) {

 var itemOption = document.createElement("option"),
     itemText = document.createTextNode(optionItemArray[i]);
     itemOption.appendChild(itemText);
     itemSelect.appendChild(itemOption);
}

randomOptionDiv.appendChild(itemSelect);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////// TIER SELECTION LIST /////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var tier = 1;

let optionTierArray = [
    "Tier: 1",
    "Tier: 2",
    "Tier: 3",
    "Tier: 4",
    "Tier: 5",
    "Tier: 6",
    "Tier: 7",
    "Tier: 8",
    "Tier: 9",
];

var tierSelect = document.createElement("select");

for (var i=0; i < optionTierArray.length; i += 1) {

 var tierOption = document.createElement("option"),
     tierText = document.createTextNode(optionTierArray[i]);
     tierOption.appendChild(tierText);
     tierSelect.appendChild(tierOption);
}

randomOptionDiv.appendChild(tierSelect);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////// SEND OPTION LIST /////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let optionSendArray = [
    "Option: Send Result to Chat",
    "Option: Send Result to Text"
];

var sendSelect = document.createElement("select");

for (var i=0; i < optionSendArray.length; i += 1) {

 var sendOption = document.createElement("option"),
     sendText = document.createTextNode(optionSendArray[i]);
     sendOption.appendChild(sendText);
     sendSelect.appendChild(sendOption);
}

randomOptionDiv.appendChild(sendSelect);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////// ITEM GENERATION BUTTON ///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var randomItemButton = document.createElement("input");
randomItemButton.setAttribute("type", "button");
randomItemButton.setAttribute("value", "RANDOM ITEM");
randomItemButton.setAttribute("name", "nome");

randomItemButton.style.width = '210px'; // setting the width to 120px
randomItemButton.style.height = '20px'; // setting the height to 20px
randomItemButton.style.background = 'teal'; // setting the background color to teal
randomItemButton.style.color = 'white'; // setting the color to white
randomItemButton.style.fontSize = '15px'; // setting the font size to 15px

randomOptionDiv.appendChild(randomItemButton);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////// TEXT CHAT INJECTION /////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var textChatInput = document.getElementById("textchat-input");
var textArea = textChatInput.getElementsByClassName("ui-autocomplete-input")[0];
var textButton = textChatInput.getElementsByClassName("btn")[0];


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////// ITEM PARAMS /////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var item = "";
var itemType = ""; 
var weaponType = "";
var armourType = "";
var amuletType = "";
var ringType = "";
var rarityType = "";

randomItemButton.onclick = function() {

    /* Log button press */

    console.log("Random item button was pressed");

    /* Clear item parameters at start */

    item = "";
    itemType = ""; 
    weaponType = "";
    armourType = "";
    amuletType = "";
    ringType = "";
    rarityType = "";

    /* Get selected tier from drop down list */
    
    tier = tierSelect.value.slice(-1);

    /* Roll and set item */

    getItemType()
    getWeaponType();
    getArmourType();
    getAmuletType();
    getRingType();
    getRarityType();
    getModifierType();

    console.log("########################################################################################")
    console.log(item);
    console.log("########################################################################################")

    /* Paste item to roll 20 chat */

    textArea.value = "[RANDOM ITEM RESULT]" + "\n" + item;

    /* Fire send button if option is selected */

    if(sendSelect.value === "Option: Send Result to Chat") textButton.click();
}

function getSkillType() {

    var skillType = getRandomInt(14); 

    console.log("Roll skill type: ", skillType);

    switch(skillType) {
        case 1:
            skillType = "Athletics"
            break;
        case 2:
            skillType = "Endurance"
            break;
        case 3:
            skillType = "Survival"
            break;
        case 4:
            skillType = "Stealth"
            break;
        case 5:
            skillType = "Soul manipulation"
            break;
        case 6:
            skillType = "Manuever"
            break;
        case 7:
            skillType = "Initiative"
            break;
        case 8:
            skillType = "Perception"
            break;
        case 9:
            skillType = "Lore"
            break;
        case 10:
            skillType = "Soulcraft"
            break;
        case 11:
            skillType = "Negotiation"
            break;
        case 12:
            skillType = "Charm"
            break;
        case 13:
            skillType = "Intimidate"
            break;
        case 14:
            skillType = "Artiface"
            break;
    }

    return skillType;
}

function getRingModifierType() {

    if(ringType != "") {

        item += "\n     ";

        var modifierType = getRandomInt(100);
        console.log("Roll modifier type: ", modifierType); 

        switch(true) {
            case checkRollBetweenMinAndMax(1,23,modifierType):
                var skillType = getSkillType();
                var value = getRandomInt(6) + tier * 3 - 3;
                console.log("Roll skill value: ", value);
                item += skillType + " " + value + ".";
                console.log(skillType + " " + value + ".");
                break;
            case checkRollBetweenMinAndMax(24,40,modifierType):
                var lifeLeechRoll = getRandomInt(8);
                console.log("Roll life leech: ", lifeLeechRoll);
                item += "Life leech " + (tier * 4 - 4 + lifeLeechRoll) + ".";
                console.log("Life leech " + (tier * 4 - 4 + lifeLeechRoll) + ".");
                break;
            case checkRollBetweenMinAndMax(41,57,modifierType):
                var resistanceRoll = getRandomInt(4);
                console.log("Roll resistance: ", resistanceRoll);
                item += "Resistance " + (tier * 2 - 2 + resistanceRoll) + ".";
                console.log("Resistance " + (tier * 2 - 2 + resistanceRoll) + ".");
                break;
            case checkRollBetweenMinAndMax(58,74,modifierType):
                var lifeRoll1 = getRandomInt(10);
                var lifeRoll2 = getRandomInt(10);
                console.log("Roll life: ", lifeRoll1, lifeRoll2);
                item += "Life " + (tier * 10 - 10 + lifeRoll1 + lifeRoll2) + ".";
                console.log("Life " + (tier * 10 - 10 + lifeRoll1 + lifeRoll2) + ".");
                break;
            case checkRollBetweenMinAndMax(75,91,modifierType):
                var armourRoll = getRandomInt(4);
                console.log("Roll armour: ", armourRoll);
                item += "Armour " + (tier * 2 - 2 + armourRoll) + ".";
                console.log("Armour " + (tier * 2 - 2 + armourRoll) + ".");
                break;
            case checkRollBetweenMinAndMax(92,100,modifierType):
                item += "WAM " + tier + ".";
                console.log("WAM " + tier + ".");
                break;
        }
    }
}

function getAmuletModifierType() {

    if(amuletType != "") {

        item += "\n     ";

        var modifierType = getRandomInt(100);
        console.log("Roll modifier type: ", modifierType); 

        switch(true) {
            case checkRollBetweenMinAndMax(1,23,modifierType):
                var skillType = getSkillType();
                var value = getRandomInt(6) + tier * 3 - 3;
                console.log("Roll skill value: ", value);
                item += skillType + " " + value + ".";
                console.log(skillType + " " + value + ".");
                break;
            case checkRollBetweenMinAndMax(24,33,modifierType):
                item += "Reduce enemy Stun Threshold speed by " + tier + ".";
                console.log("Reduce enemy Stun Threshold speed by " + tier + ".");
                break;
            case checkRollBetweenMinAndMax(34,43,modifierType):
                item += "Increase damage against shocked enemies for you and allies by " + tier + " WAM.";
                console.log("Increase damage against shocked enemies for you and allies by " + tier + " WAM.");
                break;
            case checkRollBetweenMinAndMax(44,53,modifierType):
                var lifeLeechRoll = getRandomInt(8);
                console.log("Roll life leech: ", lifeLeechRoll);
                item += "Life leech " + (tier * lifeLeechRoll) + ".";
                console.log("Life leech " + (tier * lifeLeechRoll) + ".");
                break;
            case checkRollBetweenMinAndMax(54,63,modifierType):
                item += "Mana leech " + tier + ".";
                console.log("Mana leech " + tier + ".");
                break;
            case checkRollBetweenMinAndMax(64,73,modifierType):
                var armourRoll = getRandomInt(4);
                console.log("Roll armour: ", armourRoll);
                item += "Armour " + (tier * 2 - 2 + armourRoll) + ".";
                console.log("Armour " + (tier * 2 - 2 + armourRoll) + ".");
                break;
            case checkRollBetweenMinAndMax(74,83,modifierType):
                var lifeRoll1 = getRandomInt(10);
                var lifeRoll2 = getRandomInt(10);
                console.log("Roll life: ", lifeRoll1, lifeRoll2);
                item += "Life " + (tier * 10 - 10 + lifeRoll1 + lifeRoll2) + ".";
                console.log("Life " + (tier * 10 - 10 + lifeRoll1 + lifeRoll2) + ".");
                break;
            case checkRollBetweenMinAndMax(84,93,modifierType):
                item += "Increase critical strike damage by " + tier + ".";
                console.log("Increase critical strike damage by " + tier + ".");
                break;
            case checkRollBetweenMinAndMax(94,100,modifierType):
                item += "WAM " + tier + ".";
                console.log("WAM " + tier + ".");
                break;
        }
    }
}

function getArmourAndShieldModifierType() {

    if(armourType != "") {

        item += "\n     ";

        var modifierType = getRandomInt(100);
        console.log("Roll modifier type: ", modifierType); 

        switch(true) {
            case checkRollBetweenMinAndMax(1,23,modifierType):
                var skillType = getSkillType();
                var value = getRandomInt(6) + tier * 3 - 3;
                console.log("Roll skill value: ", value);
                item += skillType + " " + value + ".";
                console.log(skillType + " " + value + ".");
                break;
            case checkRollBetweenMinAndMax(24,39,modifierType):
                var thresholdRoll1 = getRandomInt(10);
                var thresholdRoll2 = getRandomInt(10);
                var thresholdRoll3 = getRandomInt(10);
                console.log("Roll increased threshold: ", thresholdRoll1, thresholdRoll2, thresholdRoll3);
                item += "Increased threshold " + (tier * 15 - 15 + thresholdRoll1 + thresholdRoll2 + thresholdRoll3) + ".";
                console.log("Increased threshold " + (tier * 15 - 15 + thresholdRoll1 + thresholdRoll2 + thresholdRoll3) + ".");
                break;
            case checkRollBetweenMinAndMax(40,60,modifierType):
                var resistanceRoll = getRandomInt(4);
                console.log("Roll resistance: ", resistanceRoll);
                item += "Resistance " + (tier * 2 - 2 + resistanceRoll) + ".";
                console.log("Resistance " + (tier * 2 - 2 + resistanceRoll) + ".");
                break;
            case checkRollBetweenMinAndMax(61,81,modifierType):
                var lifeRoll1 = getRandomInt(10);
                var lifeRoll2 = getRandomInt(10);
                console.log("Roll life: ", lifeRoll1, lifeRoll2);
                item += "Life " + (tier * 10 - 10 + lifeRoll1 + lifeRoll2) + ".";
                console.log("Life " + (tier * 10 - 10 + lifeRoll1 + lifeRoll2) + ".");
                break;
            case checkRollBetweenMinAndMax(82,100,modifierType):
                switch(armourType) {
                    case 1:
                    case 6:
                    case 12:
                        var esRoll1 = getRandomInt(10);
                        var esRoll2 = getRandomInt(10);
                        console.log("Roll energy shield: ", esRoll1, esRoll2);
                        item += "ES " + (tier * 10 - 10 + esRoll1 + esRoll2) + ".";
                        console.log("ES " + (tier * 10 - 10 + esRoll1 + esRoll2) + ".");
                        break;
                    case 2:
                    case 5:
                    case 11:
                        var resistanceRoll = getRandomInt(4);
                        console.log("Roll resistance: ", resistanceRoll);
                        item += "Resistance " + (tier * 2 - 2 + resistanceRoll) + ".";
                        console.log("Resistance " + (tier * 2 - 2 + resistanceRoll) + ".");
                        break;
                    case 3:
                    case 4:
                    case 10:
                        var armourRoll = getRandomInt(4);
                        console.log("Roll armour: ", armourRoll);
                        item += "Armour " + (tier * 2 - 2 + armourRoll) + ".";
                        console.log("Armour " + (tier * 2 - 2 + armourRoll) + ".");
                        break;
                    case 7:
                    case 8:
                    case 9:
                        var speedRoll = getRandomInt(4);
                        console.log("Roll speed: ", speedRoll);
                        item += "Speed " + (tier * 2 - 2 + speedRoll) + ".";
                        console.log("Speed " + (tier * 2 - 2 + speedRoll) + ".");
                        break;
                }
                break;
        }
    }
}

function getWeaponOnlyModifierType() {

    if(weaponType != "") {

        item += "\n     ";

        var modifierType = getRandomInt(100); 
        console.log("Roll modifier type: ", modifierType);
        
        switch(true) {
            case checkRollBetweenMinAndMax(1,23,modifierType):
                var skillType = getSkillType();
                var value = getRandomInt(6) + tier * 3 - 3;
                console.log("Roll skill value: ", value);
                item += skillType + " " + value + ".";
                console.log(skillType + " " + value + ".");
                break;
            case checkRollBetweenMinAndMax(24,36,modifierType):
                item += "Increase Threshold effect duration by 1 round.";
                console.log("Increase Threshold effect duration by 1 round.");
                break;
            case checkRollBetweenMinAndMax(37,48,modifierType):
                var damageRoll = getRandomInt(4);
                console.log("Roll damage: ", damageRoll);
                item += "Damage " + (tier * 2 - 2 + damageRoll) + ".";
                console.log("Damage " + (tier * 2 - 2 + damageRoll) + ".");
                break;
            case checkRollBetweenMinAndMax(49,61,modifierType):
                var lowerEnemyThresholdRoll = getRandomInt(10);
                console.log("Roll lower enemy threshold: ", lowerEnemyThresholdRoll);
                item += "Lower enemy threshold by " + (tier * 5 - 5 + lowerEnemyThresholdRoll) + ".";
                console.log("Lower enemy threshold by " + (tier * 5 - 5 + lowerEnemyThresholdRoll) + ".");
                break;
            case checkRollBetweenMinAndMax(62,74,modifierType):
                var lifeLeechRoll = getRandomInt(8);
                console.log("Roll life leech: ", lifeLeechRoll);
                item += "Life leech " + (tier * 4 - 4 + lifeLeechRoll) + ".";
                console.log("Life leech " + (tier * 4 - 4 + lifeLeechRoll) + ".");
                break;
            case checkRollBetweenMinAndMax(75,87,modifierType):
                item += "Mana leech " + tier + ".";
                console.log("Mana leech " + tier + ".");
                break;
            case checkRollBetweenMinAndMax(88,100,modifierType):
                item += "WAM " + tier + ".";
                console.log("WAM " + tier + ".");
                break;
        }
    }
}

function getModifierType() {

    if(rarityType < 8) {
        
        getWeaponOnlyModifierType();
        getArmourAndShieldModifierType();
        getAmuletModifierType();
        getRingModifierType();

        switch(weaponType) {
            case 2:
            case 3:
            case 5:
            case 7:
            case 9:
            case 13:
                getWeaponOnlyModifierType();
                break;
        }

    } else {
        getWeaponOnlyModifierType();
        getWeaponOnlyModifierType();
        getArmourAndShieldModifierType();
        getArmourAndShieldModifierType();
        getAmuletModifierType();
        getAmuletModifierType();
        getRingModifierType();
        getRingModifierType();
        
        switch(weaponType) {
            case 2:
            case 3:
            case 5:
            case 7:
            case 9:
            case 13:
                getWeaponOnlyModifierType();
                getWeaponOnlyModifierType();
                break;
        }
    }
}

function getRarityType() {
    
    item += "\n";

    rarityType = getRandomInt(10);
    console.log("Roll rarity type: ", rarityType); 

    if(rarityType == 10){
        item += "[Signature]";
        console.log("[Signature]");
    } else if(rarityType < 8) {
        item += "[Magic]";
        console.log("[Magic]");
    } else {
        item += "[Rare]";
        console.log("[Rare]");
    }
}

function getRingType() {
    
    if(ringType != "") {

        item += "\n     ";

        var ringString = "";

        switch(ringType) {
            case 1: ringString = "Coral: Life " + tier * 10 + ".";
                break;
            case 2: ringString = "Paua: Mana " + tier * 2 + ".";
                break;
            case 3: ringString = "Iron: WAM " + tier * 1 + ".";
                break;
            case 4: ringString = "Onyx: Resistance " + tier * 2 + ".";
                break;
        }

        console.log(ringString);
        item += ringString;
    }
}

function getAmuletType() {
    
    if(amuletType != "") {

        item += "\n     ";

        var amuletString = "";

        switch(amuletType) {
            case 1:
                amuletString = "Onyx: Resistance " + tier * 2 + ".";
                break;
            case 2:
                amuletString = "Lapis: INT " + tier * 5 + ".";
                break;
            case 3:
                amuletString = "Amber: STR " + tier * 5 + ".";
                break;
            case 4:
                amuletString = "Jade: DEX " + tier * 5 + ".";
                break;
            case 5:
                amuletString = "Coral: Life " + tier * 10 + ".";
                break;
            case 6:
                amuletString = "Paua: Mana " + tier * 2 + ".";
                break;
        }

        console.log(amuletString);
        item += amuletString;
    }
}


function getArmourType() {

    if(armourType != "") {

        item += "\n     ";

        var armourString = "";

        switch(armourType) {
            case 1: armourString = "Cloth robe: ES 20.";
                break;
            case 2: armourString = "Leather armour: Resistance 4.";
                break;
            case 3: armourString = "Metal plate: Armour 6, Maneuver -2, Athletics -2.";
                break;
            case 4: armourString = "Metal shield: Armour " + tier * 6 + ", Maneuver -2, Athletics -2.";
                break;
            case 5: armourString = "Leather shield: Resistance " + tier * 6 + ".";
                break;
            case 6: armourString = "Voodoo charm shield: ES " + tier * 20 + ", Maneuver -2, Athletics -2.";
                break;
            case 7: armourString = "Metal boots: Armour 2.";
                break;
            case 8: armourString = "Leather boots: Resistance 2.";
                break;
            case 9: armourString = "Cloth boots: ES 10.";
                break;
            case 10: armourString = "Metal helm: Armour 2.";
                break;
            case 11: armourString = "Leather helm: Resistance 2.";
                break;
            case 12: armourString = "Cloth helm: ES 10.";
                break;
        }

        console.log(armourString);
        item += armourString;
    } 
}

function getWeaponType() {

    if(weaponType != "") {

        item += "\n     ";

        var weaponString = "";

        switch(weaponType) {
            case 1: weaponString = "Axe 1H: WAM " + tier * 1 + ", Add 1 bonus damage per WAM.";
                break;
            case 2: weaponString = "Axe 2H: WAM " + tier * 3 + ", Add 1 bonus damage per WAM.";
                break;
            case 3: weaponString = "Stave 2H: WAM " + tier * 3 + ", Add 1 to Block.";
                break;
            case 4: weaponString = "Mace 1H: WAM " + tier * 1 + ", Reduce enemy threshold by " + tier * 8 + ".";
                break;
            case 5: weaponString = "Mace 2H: WAM " + tier * 3 + ", Reduce enemy threshold by " + tier * 8 + ".";
                break;
            case 6: weaponString = "Sword 1H: WAM " + tier * 1 + ", Inrease critical strike range by 1.";
                break;
            case 7: weaponString = "Sword 2H: WAM " + tier * 3 + ", Inrease critical strike range by 1.";
                break;
            case 8: weaponString = "Dagger 1H: WAM " + tier * 1 + ", Inrease critical strike range by 1.";
                break;
            case 9: weaponString = "Bow 2H: WAM " + tier * 3 + ", Lucky on initiative rolls.";
                break;
            case 10: weaponString = "Claw 1H: WAM " + tier * 1 + ", Life leech " + tier * 4 + ".";
                break;
            case 11: weaponString = "Sceptre 1H: WAM " + tier * 1 + ", Increase duration of elemental threshold effects by 1.";
                break;
            case 12: weaponString = "Wand 1H: WAM " + tier * 1 + ", Mana " + tier * 2 + ", Convert all damage to an element of your choice.";
                break;
            case 13: weaponString = "Spear 1H: WAM " + tier * 1 + ", Lucky with all maneuver and athletics rolls.";
                break;
            case 14: weaponString = "Spear 2H: WAM " + tier * 3 + ", Lucky with all maneuver and athletics rolls.";
                break;
        }

        console.log(weaponString);
        item += weaponString;
    } 
}

function getItemType() {

    itemType = getRandomInt(4); 

    overrideItemType();

    console.log("Roll item type: ", itemType);

    switch(itemType) {
        case 1:    
            weaponType = getRandomInt(13);
            overrideWeaponType();
            item += "[Weapon]";
            console.log("[Weapon]");
            console.log("Roll weapon type: ", weaponType);
            break;
        case 2:
            armourType = getRandomInt(12);
            overrideArmourType();
            item += "[Armour]";
            console.log("[Armour]");
            console.log("Roll armour type: ", armourType);
            break;
        case 3:
            amuletType = getRandomInt(6);
            overrideAmuletType();
            item += "[Amulet]";
            console.log("[Amulet]");
            console.log("Roll amulet type: ", amuletType);
            break;
        case 4:
            ringType = getRandomInt(4);
            overrideRingType();
            item += "[Ring]";
            console.log("[Ring]");
            console.log("Roll ring type: ", ringType);
            break;
    }
}

function checkRollBetweenMinAndMax(min, max, roll) {

    if(roll < min) return false;
    if(roll > max) return false;

    return true;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

function overrideItemType() {

    if(itemSelect.value === "Item: Amulet, Armour, Ring or Weapon") return;
    else if(itemSelect.value.includes("Weapon")) itemType = 1;
    else if(itemSelect.value.includes("Armour")) itemType = 2;
    else if(itemSelect.value.includes("Amulet")) itemType = 3;
    else if(itemSelect.value.includes("Ring")) itemType = 4;
}

function overrideWeaponType() {

    switch(itemSelect.value) {
        case "Weapon: Axe 1H":
            weaponType = 1;
            break;
        case "Weapon: Axe 2H":
            weaponType = 2;
            break;
        case "Weapon: Stave 2H":
            weaponType = 3;
            break;
        case "Weapon: Mace 1H":
            weaponType = 4;
            break;
        case "Weapon: Mace 2H":
            weaponType = 5;
            break;
        case "Weapon: Sword 1H":
            weaponType = 6;
            break;
        case "Weapon: Sword 2H":
            weaponType = 7;
            break;
        case "Weapon: Dagger 1H":
            weaponType = 8;
            break;
        case "Weapon: Bow 2H":
            weaponType = 9;
            break;
        case "Weapon: Claw 1H":
            weaponType = 10;
            break;
        case "Weapon: Sceptre 1H":
            weaponType = 11;
            break;
        case "Weapon: Wand 1h":
            weaponType = 12;
            break;
        case "Weapon: Spear 1H":
            weaponType = 13;
            break;
        case "Weapon: Spear 2H":
            weaponType = 14;
            break;
    }
}

function overrideArmourType() {

    switch(itemSelect.value) {
        case "Armour: Cloth Robe":
            armourType = 1;
            break;
        case "Armour: Leather Armour":
            armourType = 2;
            break;
        case "Armour: Metal Plate":
            armourType = 3;
            break;
        case "Armour: Metal Shield":
            armourType = 4;
            break;
        case "Armour: Leather Shield":
            armourType = 5;
            break;
        case "Armour: Voodoo Charm":
            armourType = 6;
            break;
        case "Armour: Metal Boots":
            armourType = 7;
            break;
        case "Armour: Leather Boots":
            armourType = 8;
            break;
        case "Armour: Cloth Boots":
            armourType = 9;
            break;
        case "Armour: Metal Helm":
            armourType = 10;
            break;
        case "Armour: Leather Helm":
            armourType = 11;
            break;
        case "Armour: Cloth Helm":
            armourType = 12;
            break;
    }
}

function overrideAmuletType() {

    switch(itemSelect.value) {
        case "Amulet: Onyx":
            amuletType = 1;
            break;
        case "Amulet: Lapis":
            amuletType = 2;
            break;
        case "Amulet: Amber":
            amuletType = 3;
            break;
        case "Amulet: Jade":
            amuletType = 4;
            break;
        case "Amulet: Coral":
            amuletType = 5;
            break;
        case "Amulet: Paua":
            amuletType = 6;
            break;
    }   
}

function overrideRingType() {

    switch(itemSelect.value) {
        case "Ring: Coral":
            ringType = 1;
            break;
        case "Ring: Paua":
            ringType = 2;
            break;
        case "Ring: Iron":
            ringType = 3;
            break;
        case "Ring: Onyx":
            ringType = 4;
            break;  
    }
}

function resizeChat() {
    
    textChatDiv.style.height = parseInt( textChatDiv.style.height, 10) - 145 + "px";
}