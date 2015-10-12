angular
    .module('myApp', [])
    .controller('myController', myController)
;

function myController() {
    var vm = this;
    vm.sevenDays = ['M', 'T', 'W', 'R', 'F', 'S'];
    vm.periods = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}