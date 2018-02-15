(function() {
    var taskForm = {
        bindings: {


        },
        templateUrl: "partials/taskForm.template.html",
        controller: function() {
            var $ctrl = this;
            $ctrl.todoList = ["hi", "hello"];
            $ctrl.addItem = function (item){
                $ctrl.todoList.push(item)
                $ctrl.item = ""
            }
        }
    }


    angular.module("app")
    .component("taskForm", taskForm);
})();