describe('Registration Numbers function', function () {
    it('should be able to add the supported Registration numbers to the list', function () {
        let addToList = registrationNumbers();

        addToList.addnew('CA 123 756');
        addToList.addnew('CY 777-980');
        addToList.addnew('CK 553 890');
        assert.deepEqual(['CA 123 756', 'CY 777-980', 'CK 553 890'], addToList.getList());
    });
    it('should be able to filter out "CA" registration if Cape Town is selected', function () {
        let filter3 = registrationNumbers();

        filter3.addnew('CK 654 798');
        filter3.addnew('CA 456-845');
        let filtered = filter3.filterRegsOnTown('CA')
        assert.deepEqual(['CA 456-845'], filtered);
    });
    
    it('should be able to filter out "CY" registration number if Bellville is selected', function () {
        let filter1 = registrationNumbers();

        filter1.addnew('CA 555-765')
        filter1.addnew('CY 789-865');
        filter1.addnew('CY 558-787');
        assert.deepEqual(['CY 789-865', 'CY 558-787'], filter1.filterRegsOnTown('CY'));
    });
    it('should be able to filter out "CK" registration number if Malmesbury is selected', function () {
        let filter1 = registrationNumbers();

        filter1.addnew('CA 555-765')
        filter1.addnew('CK 789-865');
        filter1.addnew('CK 558-787');
        assert.deepEqual(['CK 789-865', 'CK 558-787'], filter1.filterRegsOnTown('CK'));
    });
    it('should be able to give a message when there is a correct registration number entered', function () {
        let error3 = registrationNumbers();
       
        
        var errormsg = error3.addnew('CA 122 666');
        assert.deepEqual('Registration number added!', errormsg.msg );
    });
    
    it('should be able to give a message when there is an invalid format entered', function () {
        let error4 = registrationNumbers();

        
        let errormsg = error4.addnew('CK 43533');
        assert.deepEqual('Invalid Format!', errormsg.msg);
    });
    it('should not show the registration number if it has been already added to the list', function () {
        let filter2 = registrationNumbers();

        filter2.addnew('CY 558-287')
        var errormsg = filter2.addnew('CY 558-287');
        assert.deepEqual('Already exists!', errormsg.msg);
    });
    it('should be able to give a message when the add button is clicked but there is no registration number entered', function () {
        let filter2 = registrationNumbers();

        var errormsg = filter2.addnew('');
        assert.deepEqual('Please insert Registration number!', errormsg.msg);
    });
    it('should be able to give a message when there is an unsupported registration number entered', function () {
        let filter2 = registrationNumbers();

        var errormsg = filter2.addnew('CL 657-098');
        assert.deepEqual('Invalid Registration!', errormsg.msg);
    });
    
});
// describe('Registration function messages', function () {
//     it('Return a message when a registration number has been added', function () {
//         var AddMessage = registrationNumbersTemplate();

//         let message = AddMessage.regNumbersTemplate("CA 123 123")
//         assert.equal("Successfully added!", message);
//     });
//     it('It should return an error message if there is nothing entered into the list', function () {
//         var errorTest = registrationNumbersTemplate();

//         errorTest.regNumbersTemplate("");
//         assert.equal("Please add a registration number!", errorTest.regNumbersTemplate());
//     });
//     it('should be able to give an error message if there is an invalid input given', function () {
//         let invalidError = registrationNumbersTemplate();

//         var getError = invalidError.regNumbersTemplate('sdfgdggjhh');
//         assert.equal("This is not valid dude!", getError);
//     });
//     it('It should return an error message if there is a duplication of registration numbers', function () {
//         var errorTest = registrationNumbersTemplate();

//         let message2 = errorTest.regNumbersTemplate("CA 123 123");
//         let message = errorTest.regNumbersTemplate("CA 123 123")
//         assert.equal("This already exists dude!", message);
//     });
    
//     it('should be able to give a message if there is no filtered data for that selected town', function () {
//         let addToList = registrationNumbersTemplate();

//         addToList.regNumbersTemplate('CA 55666');
//         addToList.regNumbersTemplate('CL 43533');
//         addToList.regNumbersTemplate('CL 43533');
//         var filtered = addToList.filterRegstemplate('CK');
//         assert.equal("No registration(s) yet!", filtered);
//     });
//     it('should not add the duplicated data but should be able to give filtered data for that selected town', function () {
//         let filterTown = registrationNumbersTemplate();

//         filterTown.regNumbersTemplate('CA 55666');
//         filterTown.regNumbersTemplate('CL 43533');
//         filterTown.regNumbersTemplate('CK 43533');
//         filterTown.regNumbersTemplate('CK 43533');
//         var filtered = filterTown.filterRegstemplate('CK');
//         assert.deepEqual(['CK 43533'], filtered);
//     });
   
// });