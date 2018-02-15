(function() {
    var taskList = {
        bindings: {
            todoList: "<"

        },
        templateUrl: "partials/taskList.template.html",
        controller: function() {
            var $ctrl = this;
            $ctrl.removeItem = function(item) {
                $ctrl.todoList.splice(item, 1);
            }
            
        }
    }

    angular.module("app")
    .component("taskList", taskList);
})();