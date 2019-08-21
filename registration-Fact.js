function registrationNumbersTemplate() {
    var regList = [];

    function regNumbersTemplate(list) {
        var checkIfExists = false;

        if (list === undefined || list === "") {
            return "Please add a registration number!"
        } else {
            for (var i = 0; i < regList.length; i++) {
                var regNum = regList[i];
                if (regNum === list) {
                    checkIfExists = true
                }
            }
            if (!checkIfExists) {
                regList.push(list);
                return "Successfully added!"
            } else {
                return "This already exists dude!";
            }
        }
    }

    function filterRegstemplate(town) {
        var filterdList = [];

        if (filterdList.length === 0) {
            return "No registration(s) yet!";
        }
            for (var i = 0; i < regList.length; i++) {
                var reg = regList[i];

                
                if (reg.startsWith(town)) {
                    filterdList.push(reg);
                }
                
            }
            return filterdList;
        }

    

    function getList() {
        return regList;
    }

    return {
        regNumbersTemplate,
        filterRegstemplate,
        getList
    }
}
