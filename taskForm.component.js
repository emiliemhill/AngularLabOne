(function() {
    var taskForm = {
        bindings: {


        },
        templateUrl: "partials/taskForm.template.html",
        controller: function(FormService) {
            var $ctrl = this;
            $ctrl.todoList = ["hi", "hello"];
            $ctrl.addItem = function (Todo){
                FormService.getTodos(Todo)
                // $ctrl.todoList.push(Todo)
                
            }
        }
    }


    angular.module("app")
    .component("taskForm", taskForm);
})();