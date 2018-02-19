(function () {
    function FormService() {
        var createTodosObj = [];
        return {
            getTodos: getTodos,
            sendTodos: sendTodos
        }

        function getTodos(TodosObj) {
            createTodosObj = TodosObj;
            createTodosObj.push(TodosObj);
            console.log(createTodosObj);
            

        }

        function sendTodos() {
            return createTodosObj;

        }
        function removeTodos(Todos ){
            var array = items;
            var index = array.indexOf(Todos);
            array.splice(index, 1);
        }
    }

    angular
        .module("app")
        .factory("FormService", FormService);

})();