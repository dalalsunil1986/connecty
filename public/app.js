(function () {
  'use strict';

  var connecty = angular.module('connecty', []);

  angular.module('connecty').controller('MainController', MainController)

  function MainController($scope) {
    var vm = this;

    vm.error = null;
    vm.contact = {};
    vm.message = "Welcome to Connecty";
    vm.remove = remove;
    vm.save = save;

    vm.contacts = [
       {title: 'Mr', firstName: 'Givantha', lastName: 'Kalansuriya', mobile: '5131313123122'},
       {title: 'Mr', firstName: 'Saman', lastName: 'De Silva', mobile: '64565656565'},
       {title: 'Mr', firstName: 'Nimal', lastName: 'Perera', mobile: '323232222222'},
       {title: 'Mr', firstName: 'Kamal', lastName: 'Withanage', mobile: '234234234444'},
       {title: 'Mr', firstName: 'Sunil', lastName: 'Dias', mobile: '4534534534533'},
    ]

   // Remove existing contact
    function remove() {

    }

    // Add New contact
    function save() {
        if(vm.contact.title == null || vm.contact.firstName === '' || vm.contact.mobile == null || vm.contact.mobile === '') {
          return;
        }
        vm.contacts.push(vm.contact);
        vm.contact = {};
    }
  }
}());
