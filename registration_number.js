function registrationNumbers() {
    var regList = [];

    function displayRegNumbers(list) {
        regList.push(list);
    }

    function setReg() {
    var filterdList = [];

        for (var i = 0; i < regList.length; i++) {
             var reg = regList[i];

            if (reg.startsWith('CA')) {
                filterdList.push(reg);
            }
            else if (reg.startsWith('CY')) {
                filterdList.push(reg);
            }
            else if (reg.startsWith('CK')) {
                filterdList.push(reg);
            }
        }

        return filterdList;
    }

    function getList() {
        return regList;
    }

    return {
        displayRegNumbers,
        setReg,
        getList
    }
}