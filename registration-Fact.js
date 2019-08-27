function registrationNumbersTemplate() {
    var regList = [];

    function regNumbersTemplate(list) {
        var checkIfExists = false;

        var reg = /^([A-Z]){2}\s([0-9]){3}\s([0-9]){3}/;
        var regEx = reg.test(list);
        var reg = /^([A-Z]){2}\s([0-9]){3}/;
        var regEx1 = reg.test(list);
        var reg = /^([a-z]){2}\s([0-9]){6}/;
        var regEx2 = reg.test(list);

        

        if (list === undefined || list === "") {
            return "Please add a registration number!"
        }
        else if (!regEx && !regEx1 && !regEx2) {
            return "This is not valid dude!";
        }
         else {

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

        for (var i = 0; i < regList.length; i++) {
            var reg = regList[i];

            if (reg.startsWith(town)) {
                filterdList.push(reg);
            }
        }
        if (filterdList.length == 0) {
            return "No registration(s) yet!";
        } else {
            return filterdList;
        }

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
