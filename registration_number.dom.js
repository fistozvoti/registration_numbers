var displayBtn = document.querySelector(".addBtn");
var regElem = document.querySelector(".inputReg");
var showRegNums = document.querySelector(".filterBtn");
var radioBtns = document.querySelectorAll(".radios");
var outputField = document.querySelector(".displayOutputField");
var error = document.querySelector('.message');
var resetBtnElem = document.querySelector(".resetBtn");

function clearError() {
    setTimeout(function () {
        error.innerHTML = "";
    }, 2000);
}

var storeRegs = JSON.parse(localStorage.getItem('list'));
var factoryFunc = registrationNumbers(storeRegs);

window.addEventListener('DOMContentLoaded', (event) => {

    displayPlates(factoryFunc.getList());
});


function addRegistrations() {
    let result = factoryFunc.addnew(regElem.value.toUpperCase());
    if (result.isError) {
        colorDisplay('success', 'error');
        clearError();
        error.innerHTML = result.msg;
    } else {
        let regData = factoryFunc.getList();
        displayPlates(regData);
        localStorage.setItem('list', JSON.stringify(regData));
        colorDisplay('error', 'success');
        clearError();
        error.innerHTML = result.msg;
    }
}
function displayPlates(regArray) {
    outputField.innerHTML = '';
    for (let i = 0; i < regArray.length; i++) {
        const element = regArray[i];
        createElem(element);
    }
}
function createElem(regNumber) {
    var getStored = document.createElement("div");
    getStored.classList.add("plates");
    var newContent = document.createTextNode(regNumber);
    getStored.appendChild(newContent);
    outputField.appendChild(getStored);
}

function showFiltered() {
    let townTag = document.querySelector("input[name=radioBtns]:checked").value;
    displayPlates(factoryFunc.filterRegsOnTown(townTag));
}

function reset() {
    localStorage.removeItem('list');
    outputField.innerHTML = storeRegs;
    location.reload();
}

function colorDisplay(removeColor, addColor) {
    error.classList.remove(removeColor);
    error.classList.add(addColor);

}
displayBtn.addEventListener('click', addRegistrations);
showRegNums.addEventListener('click', showFiltered);
resetBtnElem.addEventListener('click', reset);