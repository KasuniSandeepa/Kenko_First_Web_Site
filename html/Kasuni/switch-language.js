
const language = {
    
}

//Executes when the toogle select dropdown changes
function ToggleLanguage()
{
	
    let dropdown = document.getElementById("cmbLanguages");
	let selectedvalue=dropdown.options[dropdown.selectedIndex].value;
	console.log(selectedvalue);
	//alert(selectedvalue);

    // If the checkbox is checked, display the output text
    if (dropdown.selected === true)
        switchToSinhala();
    else
        switchToEnglish();
}

function convertContentIntoSinhalaAndEnglish(contentArray, language)
{
    var languageIndex = 0;
    languageIndex = (language === "English" ? "1" : "2");
    for (var i = 0; i < contentArray.length; i++)
    {
        document.getElementById(contentArray[i][0]).innerHTML = contentArray[i][languageIndex];
    }
}

function switchToSinhala()
{
    convertContentIntoSinhalaAndEnglish(PatientDataIDAndContentList, "Sinhala");
}

function switchToEnglish()
{
    convertContentIntoSinhalaAndEnglish(PatientDataIDAndContentList, "English");
}

var PatientDataIDAndContentList=[
    ["lblSelectLanguage","Select Language","රෝගියාගේ තොරතුරු"],
    ["lblFirstName","First Name","රෝගියාගේ නම"],
    ["lblSelectLandType","Select Land Type","දිනය"],
    ["lblSelectMultipleCrops","Select Multiple Crops","වේලාව"],
    ["lblSelectArea","Select Area","හැඳුනුම්පත් අංකය"]
];
