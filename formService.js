(function () {
    function FormService() {
        var tasks = [];
        return {
            pushToDo: pushToDo,
            getTodos: getTodos,
            removeToDo: removeTodo
        }

        function pushToDo(TodoText) {
            console.log(tasks);
            console.log(tasks);
            tasks.push(TodoText);
            console.log(tasks);


        }

        function getTodos() {
            return tasks;

        }
        function removeTodo(Todo) {
            var array = items;
            var index = array.indexOf(Todo);
            array.splice(index, 1);
        }
    }

    angular
        .module("app")
        .factory("FormService", FormService);

})();