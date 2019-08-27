describe('Registration Numbers function', function () {
    it('should be able to add any registration number to the list ', function () {
        let addToList = registrationNumbers();

        addToList.displayRegNumbers('TY 43533');
        addToList.displayRegNumbers('TR 45645');
        addToList.displayRegNumbers('VR 43533');
        assert.deepEqual(['TY 43533', 'TR 45645', 'VR 43533'], addToList.getList());
    });
    it('should be able to filter out "CA" registration if Cape Town is selected', function () {
        let addToList = registrationNumbers();

        addToList.displayRegNumbers('TY 43533');
        addToList.displayRegNumbers('CA 45645');
        addToList.displayRegNumbers('VK 43533');
        addToList.displayRegNumbers('CO 43533');
        assert.deepEqual(['CA 45645'], addToList.filterRegsOnTown('CA'));
    });
    it('should be able to filter out "CY" registration number if Bellville is selected', function () {
        let addToList = registrationNumbers();

        addToList.displayRegNumbers('CY 55887');
        addToList.displayRegNumbers('KL 56546');
        addToList.displayRegNumbers('CY 78965');
        addToList.displayRegNumbers('OP 54586');
        addToList.displayRegNumbers('CY 55887');
        assert.deepEqual(['CY 55887', 'CY 78965'], addToList.filterRegsOnTown('CY'));
    });
    it('should be able to filter out "CK" registration number if Malmesbury is selected ', function () {
        let addToList = registrationNumbers();

        addToList.displayRegNumbers('CK 55666');
        addToList.displayRegNumbers('CL 43533');
        addToList.displayRegNumbers('CK 43533');
        assert.deepEqual(['CK 55666', 'CK 43533'], addToList.filterRegsOnTown('CK'));
    });
    it('should not show the registration number if it has been already added to the list', function () {
        let addToList = registrationNumbers();

        addToList.displayRegNumbers('CK 55666');
        addToList.displayRegNumbers('CY 55887');
        addToList.displayRegNumbers('CY 55887');
        assert.deepEqual(['CY 55887'], addToList.filterRegsOnTown('CY 55887'));
    });
});
describe('Registration function messages', function () {
    it('Return a message when a registration number has been added', function () {
        var AddMessage = registrationNumbersTemplate();

        let message = AddMessage.regNumbersTemplate("CA 123 123")
        assert.equal("Successfully added!", message);
    });
    it('It should return an error message if there is nothing entered into the list', function () {
        var errorTest = registrationNumbersTemplate();

        errorTest.regNumbersTemplate("");
        assert.equal("Please add a registration number!", errorTest.regNumbersTemplate());
    });
    it('should be able to give an error message if there is an invalid input given', function () {
        let invalidError = registrationNumbersTemplate();

        var getError = invalidError.regNumbersTemplate('sdfgdggjhh');
        assert.equal("This is not valid dude!", getError);
    });
    it('It should return an error message if there is a duplication of registration numbers', function () {
        var errorTest = registrationNumbersTemplate();

        let message2 = errorTest.regNumbersTemplate("CA 123 123");
        let message = errorTest.regNumbersTemplate("CA 123 123")
        assert.equal("This already exists dude!", message);
    });
    
    it('should be able to give a message if there is no filtered data for that selected town', function () {
        let addToList = registrationNumbersTemplate();

        addToList.regNumbersTemplate('CA 55666');
        addToList.regNumbersTemplate('CL 43533');
        addToList.regNumbersTemplate('CL 43533');
        var filtered = addToList.filterRegstemplate('CK');
        assert.equal("No registration(s) yet!", filtered);
    });
    it('should not add the duplicated data but should be able to give filtered data for that selected town', function () {
        let filterTown = registrationNumbersTemplate();

        filterTown.regNumbersTemplate('CA 55666');
        filterTown.regNumbersTemplate('CL 43533');
        filterTown.regNumbersTemplate('CK 43533');
        filterTown.regNumbersTemplate('CK 43533');
        var filtered = filterTown.filterRegstemplate('CK');
        assert.deepEqual(['CK 43533'], filtered);
    });
   
});