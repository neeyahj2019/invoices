var name = "";
var where = "";
var address = "";
var city = "";
var nametwo = "";
var wheretwo = "";
var addresstwo = "";
var citytwo = "";

function createbutton(){
    
    document.getElementById("nameone").innerHTML = name;
    document.getElementById("nametwo").innerHTML = where;
    document.getElementById("namethree").innerHTML = address;
    document.getElementById("namefour").innerHTML = city;
}

function buttons(){
    document.getElementById("button").onclick = function(){
        
        name = document.getElementById("inputone").value;
        where = document.getElementById("inputtwo").value;
        address = document.getElementById("inputthree").value;
        city = document.getElementById("inputfour").value;
        createbutton();
}
}
buttons();

function createbuttons(){
    
    document.getElementById("nameonee").innerHTML = nametwo;
    document.getElementById("nametwoo").innerHTML = wheretwo;
    document.getElementById("namethreee").innerHTML = addresstwo;
    document.getElementById("namefourr").innerHTML = citytwo;
}

function buuttons(){
    document.getElementById("buuuttons").onclick = function(){
        
        nametwo = document.getElementById("inputtone").value;
        wheretwo = document.getElementById("inputttwo").value;
        addresstwo = document.getElementById("inputtthree").value;
        citytwo = document.getElementById("inputtfour").value;
        createbuttons();
    }
}
buuttons();

function myFunction() {
    var x = document.getElementById("test");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}