(function() {
    function FormController(){
        var vm = this;
        vm.todoList = [];
        vm.removeItem = function(item) {
            vm.todoList.splice(item, 1);
        }
        vm.addItem = function (item){
            vm.todoList.push(item)
            document.getElementById("addToDo").value = ""
        }
        updateInfo = function (){
        }
    }
        angular
        .module("app")
        .controller("FormController", FormController)

    
})();