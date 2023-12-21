const KURUNEGALA_GN_DIVISION_LIST = 'GN_Divisions_List/Kurunegala - GN Divisions.txt';


function SetDistricts() {

    DeleteAllDistricts();
    let province_dropdown = document.getElementById("landProvince");
    let district_dropdown = document.getElementById("landDistrict");
    let selectedProvince = province_dropdown.value;
    console.log(selectedProvince);

    let districts = [];
    if (selectedProvince == "Western") {
        districts = new Array("Colombo", "Kaluthara", "Gampaha");
    }else if(selectedProvince == "Central"){
        districts = new Array("Kandy","Matale" ,"Nuwaraeliya");
    }else if(selectedProvince == "Southern"){
        districts = new Array("Galle","Hambantota" ,"Matara");
    }else if(selectedProvince == "Eastern"){
        districts = new Array("Ampara","Batticaloa" ,"Trincomalee");
    }else if(selectedProvince == "Northern "){
        districts = new Array("Jaffna","Kilinochchi" ,"Mannar","Mullativu","Vavuniya" ,"Alambil");
    }else if(selectedProvince == "North Central"){
        districts = new Array("Anuradhapura","Polonnaruwa");
    }else if(selectedProvince == "North Western "){
        districts = new Array("Kurunagala","Puttalam");
    }else if(selectedProvince == "Sabaragamuwa"){
        districts = new Array("Kegalle","Rathnapura");
    }else if(selectedProvince == "Uva"){
        districts = new Array("Badulla","Monaragala");
    }

    for (let i = 0; i < districts.length; ++i) {
        AddOption(district_dropdown, districts[i], districts[i]);
    }
}

function AddOption(selectbox,text,value )
{
    if(value == "Select"){
        let optn = document.createElement("OPTION");
        optn.text = text;
        optn.value = value;
        optn.disabled
        optn.selected
        optn.hidden
        selectbox.options.add(optn);
    }else {
        let optn = document.createElement("OPTION");
        optn.text = text;
        optn.value = value;
        selectbox.options.add(optn);
    }
}

function DeleteAllDistricts() {
    let listBox = document.getElementById("landDistrict");
    listBox.options.length = 0;
    AddOption(listBox,"Select a District","Select");
    return false;
}
let divisions = new Array();

function SetGNDivisions() {

    DeleteAllDivisions();
    let district_dropdown = document.getElementById("landDistrict");
    let selectedDistrict = district_dropdown.value;

    if (selectedDistrict == "Kurunagala") {
        ReadDivisionFile(KURUNEGALA_GN_DIVISION_LIST)
    }else if(selectedDistrict == "Kaluthara"){

    }else if(selectedDistrict == "Gampaha"){

    }
}

function DeleteAllDivisions() {
    let listBox = document.getElementById("landGNDivision");
    listBox.options.length = 0;
    return false;
}

function ShowInDropDown(divisions){
    let divisions_dropdown = document.getElementById("landGNDivision");
    for (let i = 0; i < divisions.length; ++i) {
        console.log(divisions.length)
        AddOption(divisions_dropdown, divisions[i], divisions[i]);
    }
}

function SaveDivisions(data){
    divisions = data.split('\n');
    console.log(divisions.length)
    ShowInDropDown(divisions);
}

function ReadDivisionFile(file)
{
    const fileUrl = file // provide file location
    fetch(fileUrl)
        .then( r => r.text() )
        .then( t => SaveDivisions(t))
}




