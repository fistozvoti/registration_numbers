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
        let storing = compileHandlers({getTemplate: storage});
        displayField.innerHTML = storing;
});


 function addingRegistrations(){
    let results = getFactory.addnew(Input.value.toUpperCase());
    if(results.isError){
        colorDisplayOnTemps('success', 'error');
        tempsClearError();
        errorMessages.innerHTML = results.msg;
    }else{
        let gettingList = getFactory.getList();
    localStorage.setItem('array', JSON.stringify(gettingList));
    colorDisplayOnTemps('error','success');
    tempsClearError();
    errorMessages.innerHTML = results.msg;

        var collectData = {getTemplate: gettingList};
        var html = compileHandlers(collectData);
        displayField.innerHTML = html;
    }
 }

function showFiltered(){
    let radioValue = document.querySelector("input[name=radio]:checked").value;
    let getFiltered = getFactory.filterRegsOnTown(radioValue);

        var filterData = compileHandlers({getTemplate: getFiltered});
        displayField.innerHTML = filterData;
}

function resetter() {
    localStorage.removeItem('array');
    displayField.innerHTML = storage;
    location.reload();
    }

function colorDisplayOnTemps(removeColor, addColor){
     errorMessages.classList.remove(removeColor);
     errorMessages.classList.add(addColor);
 }
function tempsClearError() {
    setTimeout(function () {
        errorMessages.innerHTML = "";
    }, 2000);
}
display.addEventListener('click', addingRegistrations);
showRegs.addEventListener('click', showFiltered);
resetBtn.addEventListener('click', resetter);
