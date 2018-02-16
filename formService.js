(function () {
    function FormService() {
        var createTodosObj = [];
        return {
            getTodos: getTodos,
            sendTodos: sendTodos
        }

        function getTodos(TodosObj) {
            createTodosObj = TodosObj;
 
            console.log(createTodosObj);
            

        }

        function sendTodos() {
            return createTodosObj;

        }
    }

    angular
        .module("app")
        .factory("FormService", FormService);

})();