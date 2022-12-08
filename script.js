// -------------------------- Element creator ----------------------------

let creator =(type,className,id,parentid) => {
    let element  = document.createElement(type);
    element.className = className;
    element.id = id;
    if(parentid) document.getElementById(parentid).append(element);
    else document.body.append(element);
    return element;
}

//--------------------------------------------------------------------------

creator("div","container-fluid","cdiv",0); // append to body
creator("div","row","crow","cdiv");




let formdiv  = creator("div","card col-sm-6","formdiv","crow");
formdiv.style.marginTop = "3%";


let title = creator("h1","card-title","title","formdiv")
title.innerHTML = "Form";
title.style.marginTop = '3%';

let description = creator("p","card-body","description","formdiv");
description.innerHTML ="DOM Manipulation with dom";

let form = creator("form","form","form","formdiv");

let fgroup = creator("div","form-group","form-group","form")

//----------------------------First Name----------------------------------------
let fnamelable = creator("label","form-label","fnamelable","form-group");
fnamelable.for = "first-name";
fnamelable.innerHTML ="First Name:"
let firstname = creator("input","form-control","first-name","form-group");
firstname.setAttribute('required', '');
firstname.placeholder = "John";

//-----------------------------Last Name------------------------------------------
let lnamelable = creator("label","form-label","lnamelable","form-group");
lnamelable.for = "first-name";
lnamelable.innerHTML ="Last Name:"
let lastname = creator("input","form-control","last-name","form-group");
lastname.setAttribute('required', '');
lastname.placeholder ="Doe";
//------------------------------ Gender ------------------------------------------
let genderlable = creator("label","form-label","genderlable","form-group");
genderlable.innerHTML ="Select Gender:";

let genderdiv = creator("div","mb-3","genderdiv","form-group");
genderdiv.style.marginLeft = "5%";

let gendermale = creator("input",0,"male","genderdiv");
gendermale.type ="radio";
gendermale.name = "genderradio";
gendermale.style.height ="10px";

let lableone = creator("label","form-label","lableone","genderdiv");
lableone.innerHTML ="Male";

creator("br",0,"tempbr","genderdiv");//break tag



let genderfemale = creator("input",0,"female","genderdiv");
genderfemale.type = "radio";
genderfemale.name = "genderradio";
genderfemale.style.height ="10px";

let labletwo = creator("label","form-label","labletwo","genderdiv");
labletwo.innerHTML ="Female";

//------------------------------ Address -----------------------------------------
let addresslabel = creator("label","form-label","addresslabel","form-group");
addresslabel.innerHTML ="Address:"
let address = creator("textarea","form-control","address","form-group");
address.setAttribute('required', '');
address.placeholder ="Door No. 0";

//---------------------------Pin code---------------------------------------------
let pincodelable = creator("label","form-label","pincodelable","form-group");
pincodelable.innerHTML ="Pincode:"
let pincode = creator("input","form-control","pincode","form-group");
pincode.type = 'text';
pincode.setAttribute('required', '');
pincode.placeholder ="123456";

//---------------------------- choice of food ---------------------------------------
let choice = creator("h6","card-text","choicename","form-group");
choice.innerHTML ="Choice of food <br>Please choose minimum 2";
choice.style.marginTop ="2%";

let choicediv = creator("div",0,"choicediv","form-group");
choicediv.style.marginLeft = "10%";


let food = ["Breakfast","Brunch","Lunch","Snacks","Dinner"];
for (let i in food){
    let temp = creator("input","form-check-input",food[i],"choicediv")
    temp.type = "checkbox";
    temp.name = "foods";

    let templable = creator("label","form-label",food[i]+"l","choicediv");
    templable.innerHTML = food[i];

    creator("br",0,0,"choicediv");
}

//------------------------------ state and country -------------------------------------
let statelable = creator("label","form-label","statelable","form-group");
statelable.innerHTML ="State:"
let state = creator("input","form-control","state","form-group");
state.type = 'text';
state.setAttribute('required', '');
state.placeholder ="TN";


let countrylable = creator("label","form-label","countrylable","form-group");
countrylable.innerHTML ="Country:"
let Country = creator("input","form-control","Country","form-group");
Country.type = 'text';
Country.setAttribute('required', '');
Country.placeholder ="IN";

//---------------------------Submit button ----------------------------------------------

let submit = creator("button","btn btn-primary","submit","form-group");
submit.innerHTML ="Submit";
submit.style.marginLeft = "30%";
submit.style.marginTop = "2%";

let collectvalues =()=>{
    let fname = document.getElementById("first-name").value;
    let lname = document.getElementById("last-name").value;
    let addres = document.getElementById("address").value;
    let pincode = document.getElementById("pincode").value;
    let choicefood = document.getElementsByName("foods");

    //check for checked boxes:
    let checkedchoice =[];
    for(let i in choicefood){
        if (choicefood[i].checked) {
                checkedchoice.push(choicefood[i].id);
        }
    }

    //check gender
    let genderbutton = document.getElementsByName("genderradio");
    let checkedGender =null;
    for(let i in genderbutton){
        if(genderbutton[i].checked){
            checkedGender = genderbutton[i].id;
        }
    }

    let state = document.getElementById("state").value;
    let country = document.getElementById("Country").value
    let array = [fname,lname,addres,pincode,checkedGender,checkedchoice.toString(),state,country];
    displaytable(array);
}

let clearvalues =() =>{
    document.getElementById("first-name").value = "";
    lname = document.getElementById("last-name").value="";
    document.getElementById("address").value="";
    document.getElementById("pincode").value="";
    let checked =document.getElementsByName("foods");
    document.getElementById("state").value="";
    country = document.getElementById("Country").value="";
    for(let i in checked){
        if(checked[i].checked){
            checked[i].checked =false;
        }
    }

    let genderbutton = document.getElementsByName("genderradio");    
    for(let i in genderbutton){
        if(genderbutton[i].checked){
            genderbutton[i].checked = false;
        }
    }

}

document.getElementById("submit").addEventListener('click',function(event){
    collectvalues();
    clearvalues();
    event.preventDefault();
}); 





//---------------------------Left Side --------------------------------------------------
let resultdiv  = creator("div","card col-sm-6","resultdiv","crow");
resultdiv.style.marginTop = "3%";

let resh = creator("h1","card-title","resh","resultdiv");
resh.innerHTML ="Results Table";
resh.style.marginTop = '3%';

//---------------------------- Table --------------------------------------------------

//Head
let table = creator("table","table","restable","resultdiv");
let thead = creator("thead","thead","thead","restable");
creator("tr",0,"rowone","thead");
let fields = ["First Name","Last Name","Address","Pincode","Gender","Food","State","Country"];
for(let i in fields){
    let temph = creator("th",0,fields[i],"rowone");
    temph.innerHTML =fields[i];
}

//Body
let tbody = creator("tbody","tbody","tbody","restable");
creator("tr",0,"tablerow","tbody");

let displaytable =(array) =>{
    for(let i =0;i<8;i++){
        let tempd = creator("td","td","","tablerow");
        tempd.innerHTML = array[i];
    }
}
