function registrationNumbers() {
    var regList = [];

    function displayRegNumbers(list) {
        let found = false;

        if (regList.length == 0) {
            regList.push(list);
            return found;
        }
        else if (regList.length >= 1) {
            for (var i = 0; i < regList.length; i++) {
                var regNum = regList[i];
                if (regNum === list) {
                    found = true;
                    return found;
                }
            }
            if (!found) {
                regList.push(list);
                found = false;
                return found;
            }
        }
    }


    function filterRegsOnTown(town) {
        var filterdList = [];
        for (var i = 0; i < regList.length; i++) {
            var reg = regList[i];

            if (reg.startsWith(town)) {
                filterdList.push(reg);
            }
            else if (reg.startsWith(town)) {
                filterdList.push(reg);
            }
            else if (reg.startsWith(town)) {
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
        filterRegsOnTown,
        getList
    }
}
