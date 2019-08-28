var displayBtn = document.querySelector(".addBtn");
var regElem = document.querySelector(".inputReg");
var showRegNums = document.querySelector(".filterBtn");
var radioBtns = document.querySelectorAll(".radios");
var outputField = document.querySelector(".displayOutputField")
var error = document.querySelector('.message');
var resetBtnElem = document.querySelector(".resetBtn")

function clearError() {
    setTimeout(function () {
        error.innerHTML = "";
    }, 2000);
}

var storeRegs = JSON.parse(localStorage.getItem('list'))
var factoryFunc = registrationNumbers(storeRegs);

window.addEventListener('DOMContentLoaded', (event) => {
    
    displayPlates(factoryFunc.getList())
});


 function addRegistrations(){
    let result = factoryFunc.addnew(regElem.value.toUpperCase());
    if(result.isError){
        colorDisplay('success', 'error');
        clearError();
        error.innerHTML = result.msg;
    }else{
        let regData = factoryFunc.getList();
    displayPlates(regData);
    localStorage.setItem('list', JSON.stringify(regData));
    colorDisplay('error','success');
    clearError();
    error.innerHTML = result.msg;


    }
    
 }
function displayPlates(regArray){
    outputField.innerHTML = '';
    for (let i = 0; i < regArray.length; i++) {
        const element = regArray[i];
        createElem(element);
    }
}
 function createElem(regNumber){
    var getStored = document.createElement("div");
        getStored.classList.add("plates");
        var newContent = document.createTextNode(regNumber);
        getStored.appendChild(newContent);
        outputField.appendChild(getStored);
 }

function showFiltered(){
    let townTag = document.querySelector("input[name=radioBtns]:checked").value;
    console.log(townTag);
    displayPlates(factoryFunc.filterRegsOnTown(townTag))
}

function reset() {
        localStorage.removeItem('list');
        outputField.innerHTML = storeRegs;
        location.reload();
    }

 function colorDisplay(removeColor, addColor){
     error.classList.remove(removeColor)
     error.classList.add(addColor)
     
 }
displayBtn.addEventListener('click', addRegistrations);
showRegNums.addEventListener('click', showFiltered);
resetBtnElem.addEventListener('click', reset);


// displayBtn.addEventListener('click', displayReg);


// function displayReg() {

//     var input = setOutput.value.toUpperCase();

//     if (input === "" || input === undefined) {
//         clearError();
//         return error.innerHTML = "Please add a registration number!";
//     } 
//     else{
//         var reg = /^([A-Z]){2}\s([0-9]){3}\s([0-9]){3}/;
//         var regEx = reg.test(setOutput.value.toUpperCase());
//         var reg = /^([A-Z]){2}\s([0-9]){3}/;
//         var regEx1 = reg.test(setOutput.value.toUpperCase());
//         var reg = /^([a-z]){2}\s([0-9]){6}/;
//         var regEx2 = reg.test(setOutput.value.toUpperCase());

//         if (!regEx && !regEx1 && !regEx2) {
//         clearError();
//         return error.innerHTML = "This is not valid dude!";
//     }

//         let checkIfExists = factoryFunc.displayRegNumbers(input);

//         if (checkIfExists === true) {
//             clearError();
//             return error.innerHTML = "This already exists dude!"
//         }

//         localStorage.setItem('list', JSON.stringify(factoryFunc.getList()))
//         let list = factoryFunc.getList();
//         outputField.innerHTML = '';
//         for (var x = 0; x < list.length; x++) {
//             var getOutput = document.createElement("div");
//             getOutput.classList.add("plates")
//             var newContent = document.createTextNode(list[x]);
//             getOutput.appendChild(newContent)
//             outputField.appendChild(getOutput);
//         }
//         error.innerHTML = "";
//     }
// }


// function showReg() {
//     for (var i = 0; i < radioBtns.length; i++) {
//         if (radioBtns[i].checked) {
//             var radioValue = radioBtns[i].value;
//         }
//     }
//     var getFiltered = factoryFunc.filterRegsOnTown(radioValue)
//     localStorage.setItem('list', JSON.stringify(factoryFunc.getList()))
//     if (getFiltered.length == 0) {
//         clearError();
//         return outputField.innerHTML = "No registration(s) yet!";
//     }
//     else {
//         outputField.innerHTML = ""
//         error.innerHTML = "";
//         for (var x = 0; x < getFiltered.length; x++) {
//             var getOutput = document.createElement("div");
//             getOutput.classList.add("plates");
//             var newContent = document.createTextNode(getFiltered[x]);
//             getOutput.appendChild(newContent);
//             outputField.appendChild(getOutput);
//         }
//     }
// }
// function reset() {
//     localStorage.clear();
//     outputField.innerHTML = storeRegs;
//     location.reload();
// }

// showRegNums.addEventListener('click', showReg);
// displayBtn.addEventListener('click', displayReg);