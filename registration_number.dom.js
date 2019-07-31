var displayBtn = document.querySelector(".addBtn");
var setOutput = document.querySelector(".inputReg");
var showRegNums = document.querySelector(".showBtn");
var radioBtns = document.querySelector(".radios");

var factoryFunc = registrationNumbers();

function regNum(number) {
    var showList = document.createElement("li");
    showList.innerHTML = number;
    displayBtn.insertBefore(showList, displayBtn.appendChild[0]);
}

function displayReg() {

    // var outPut = setOutput.value.toUpperCase();

    // for (var i = 0; i < radioBtns.length; i++) {
    //     if (radioBtns[i].checked) {
    //         var radioBtnValue = radioBtns[i].value
    //     }
    // }

    // var result = factoryFunc.displayRegNumbers(outPut);

    // console.log(addReg);
    // var list = factoryFunc.getList();
    // var addReg = list.value;
    // regNum(addReg);
}


// window.addEventListener('load', function() {

// })
displayBtn.addEventListener('click', displayReg);
