describe('Registration Numbers', function () {
    it('should be able to add any registration number to the list ', function () {
        let addToList = registrationNumbers();

        addToList.displayRegNumbers('TY 43533');
        addToList.displayRegNumbers('TR 45645');
        addToList.displayRegNumbers('VR 43533');
        addToList.displayRegNumbers('CA 43533');
        assert.deepEqual(['TY 43533', 'TR 45645', 'VR 43533', 'CA 43533'], addToList.getList());
    });
    it('should be able to add the "CA" registration number to the list', function () {
        let addToList = registrationNumbers();

        addToList.displayRegNumbers('TY 43533');
        addToList.displayRegNumbers('CA 45645');
        addToList.displayRegNumbers('VK 43533');
        addToList.displayRegNumbers('CO 43533');
        assert.deepEqual(['CA 45645'], addToList.setReg());
    });
    it('should be able to add the "CK" registration number to the list ', function () {
        let addToList = registrationNumbers();

        addToList.displayRegNumbers('CK 55666');
        addToList.displayRegNumbers('CL 43533');
        addToList.displayRegNumbers('CK 43533');
        assert.deepEqual([ 'CK 55666', 'CK 43533' ], addToList.setReg());
    });
    it('should be able to add the "CY" registration number to the list', function () {
        let addToList = registrationNumbers();

        addToList.displayRegNumbers('CY 55887');
        addToList.displayRegNumbers('KL 56546');
        addToList.displayRegNumbers('CY 78965');
        addToList.displayRegNumbers('OP 54586');
        addToList.displayRegNumbers('CY 55887');
        assert.deepEqual(['CY 55887','CY 78965', 'CY 55887'], addToList.setReg());
    });

});