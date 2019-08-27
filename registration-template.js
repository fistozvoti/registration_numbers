var display = document.querySelector(".addingBtn");
var Input = document.querySelector(".inputHere");
var showRegs = document.querySelector(".filteringBtn");
var radio = document.querySelectorAll(".radioBtns");
var errorMessages = document.querySelector('.messages');
var resetBtn = document.querySelector(".resettingBtn");

var getHandlerbar = document.querySelector(".displayItHere").innerHTML;
var compileHandlers = Handlebars.compile(getHandlerbar);
var displayField = document.querySelector(".ShowPlates")




function tempClearError() {
    setTimeout(function () {
        errorMessages.innerHTML = "";
    }, 2000);
}


var storage = JSON.parse(localStorage.getItem('array'));
var getFactory = registrationNumbers(storage);


window.addEventListener('DOMContentLoaded', (event) => {

    var storing = compileHandlers({getTemplate: storage});
    displayField.innerHTML = storing;

});

function displayReg2() {
    var inputTemp = Input.value.toUpperCase();

    if (inputTemp === "" || inputTemp === undefined) {
        tempClearError();
        return errorMessages.innerHTML = "Please add a registration number!";
    }
    else {
        var reg = /^([A-Z]){2}\s([0-9]){3}\s([0-9]){3}/;
        var regEx = reg.test(Input.value.toUpperCase());
        var reg = /^([A-Z]){2}\s([0-9]){3}/;
        var regEx1 = reg.test(Input.value.toUpperCase());
        var reg = /^([a-z]){2}\s([0-9]){6}/;
        var regEx2 = reg.test(Input.value.toUpperCase());
        var reg = /^([A-Z]){2}\s([0-9]){3}-([0-9]){3}/;
        var regEx3 = reg.test(Input.value.toUpperCase());

        if (!regEx && !regEx1 && !regEx2 && !regEx3) {
            tempClearError();
            return errorMessages.innerHTML = "This is not valid dude!";
        }

        let ifExists = getFactory.displayRegNumbers(inputTemp);

        if (ifExists === true) {
            tempClearError();
            return errorMessages.innerHTML = "This already exists dude!"
        }

        localStorage.setItem('array', JSON.stringify(getFactory.getList()))
        let theList = getFactory.getList();
        displayField.innerHTML = '';
        
        var collectData = {getTemplate: theList};
        var html = compileHandlers(collectData);
        displayField.innerHTML = html;

        errorMessages.innerHTML = "";
    }
    
}


function showReg2() {
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            var radValue = radio[i].value;
        }
    }
    var filtered = getFactory.filterRegsOnTown(radValue)
    localStorage.setItem('array', JSON.stringify(getFactory.getList()))
    if (filtered.length == 0) {
        tempClearError();
        return displayField.innerHTML = "No registration(s) yet!";
    }
    else {
        displayField.innerHTML = ""
        errorMessages.innerHTML = "";
        
        var filterData = compileHandlers({getTemplate: filtered});
        displayField.innerHTML = filterData;
    }
}



function reset2() {
    localStorage.clear();
    displayField.innerHTML = storage;
    location.reload();
}
resetBtn.addEventListener('click', reset2);
showRegs.addEventListener('click', showReg2);
display.addEventListener('click', displayReg2);
