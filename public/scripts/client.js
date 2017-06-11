console.log('JS linked');

// creating new angular module named 'myApp'
var myApp = angular.module('myApp', []);

// adding a controller to the app
myApp.controller('AngController', function() {
  console.log('NG linked'); //make sure angular is linked properly // NG will log in console once linked in HTMl
  var vm = this; // creating two-way bind - connecting js and html
  vm.userArray = [];
  vm.addUser = function() {
    console.log('in addInput()');
    //get user input
    //place into a new object
    //push into array
    var newUser = {
      firstName: vm.firstNameIn,
      lastName: vm.lastNameIn,
      idNumber: vm.idNumberIn,
      jobTitle: vm.jobTitleIn,
      annualSalary: vm.annualSalaryIn
    }; // end object
    console.log(newUser);
    vm.userArray.push(newUser);
    console.log(vm.userArray);

    // function to calculate average of salaries
    vm.calcAverage = function() {
      var av = 0;
      var i = 0;
      for (i = 0; i < vm.userArray.length; i++) {
        av += vm.userArray[i].annualSalary;
      }
      return '$' + av/12;
    }; // end calcAverage

    vm.calcAverage();

    // clear input fields after info is stored in array and displayed on DOM
    vm.firstNameIn='';
    vm.lastNameIn='';
    vm.idNumberIn='';
    vm.jobTitleIn='';
    vm.annualSalaryIn='';
  }; // end addUser
}); // end controller
