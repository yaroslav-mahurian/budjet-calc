var controller = (function (budgetCtrl, uiCtrl) {



    var setupEventListeners = function () {
        var DOM = uiCtrl.getDOMStrings();
        document.querySelector(DOM.form).addEventListener("submit", ctrlAddItem);

    };


    // Ф-ция срабатыватывающая при отправки формы 
    function ctrlAddItem(event) {
        event.preventDefault();
        console.log("fired!!!!!!!");

        // 1. Получить данные из формы
        var input = uiCtrl.getInput();

        // Проверка что поля не пустые
        if (input.description != "" && !isNaN(input.value) && input.value > 0) {
            // 2. Добавить полученные данные в модель
            var newItem = budgetCtrl.addItem(input.type, input.description, input.value);
            budgetCtrl.test();

            // 3. Добавить запись в UI
            uiCtrl.renderListItem(newItem, input.type);
            uiCtrl.clearFields();
            generateTestData.init();

            // 4. Посчитать бюджет 

            // 5. Отобразить в UI.
        }

    } // endIf

    return {
        init: function () {
            console.log("App started :)");
            setupEventListeners();
        }
    };


})(modelController, viewController);

controller.init();