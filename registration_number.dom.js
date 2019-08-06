var displayBtn = document.querySelector(".addBtn");
var setOutput = document.querySelector(".inputReg");
var showRegNums = document.querySelector(".filterBtn");
var radioBtns = document.querySelectorAll(".radios");
var outputField = document.querySelector(".displayOutputField")
var error = document.querySelector('.message');

function clearError() {
	setTimeout(function () {
		error.innerHTML = "";
	}, 2000);
}

var storeRegs = JSON.parse(localStorage.getItem('list'))
var factoryFunc = registrationNumbers(storeRegs);

function displayReg() {
    
    var ouput = setOutput.value.toUpperCase();

    if (ouput === "" || ouput === undefined) {
        clearError();
        return error.innerHTML = "Please add a registration number!"
    } else {
        var reg = /^([A-Z]){2}\s([0-9]){3}\s([0-9]){3}/;
        var regEx = reg.test(setOutput.value.toUpperCase());
        if(!regEx){
            clearError();
            return error.innerHTML = "This is not valid dude!"
        }
        factoryFunc.displayRegNumbers(ouput);
        localStorage.setItem('list', JSON.stringify(factoryFunc.getList()))
        let list = factoryFunc.getList();
        outputField.innerHTML = '';
        for (var x = 0; x < list.length; x++) {
            var getOutput = document.createElement("div");
            getOutput.classList.add("plates")
            var newContent = document.createTextNode(list[x]);
            getOutput.appendChild(newContent)
            outputField.appendChild(getOutput);
        };
        error.innerHTML = "";
    }

   
}


function showReg() {
    for (var i = 0; i < radioBtns.length; i++) {
        if (radioBtns[i].checked) {
            var radioValue = radioBtns[i].value;
        }
    }
    var getFiltered = factoryFunc.filterRegsOnTown(radioValue)
    localStorage.setItem('list', JSON.stringify(factoryFunc.getList()))
    if (getFiltered.length == 0) {
        clearError();
        return outputField.innerHTML = "No registration(s) for this Town yet!";
    }
    else {
        outputField.innerHTML = ""
        error.innerHTML = "";
        for (var x = 0; x < getFiltered.length; x++) {
            var getOutput = document.createElement("div");
            getOutput.classList.add("plates")
            var newContent = document.createTextNode(getFiltered[x]);
            getOutput.appendChild(newContent)
            outputField.appendChild(getOutput);
    }
    };

}
showRegNums.addEventListener('click', showReg)
displayBtn.addEventListener('click', displayReg);