(function() {
    var taskList = {
        templateUrl: "partials/taskList.template.html",
        controller: function(FormService) {
            var $ctrl = this;
            $ctrl.todoList = FormService.getTodos(); 
            $ctrl.removeItem = function(item) {
                FormService.removeTodo(item);

            }
            
        }
    }

    angular.module("app")
    .component("taskList", taskList);
})();