(function () {
    var taskForm = {
        bindings: {


        },
        templateUrl: "partials/taskForm.template.html",
        controller: function (FormService) {
            var vm = this;
            vm.addItem = function (Todo) {
                FormService.getTodos(Todo)

            }
        }
    }


    angular.module("app")
        .component("taskForm", taskForm);
})();