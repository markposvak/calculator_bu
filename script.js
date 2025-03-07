let carbsPerXE = 10; // Углеводов в 1 ХЕ (по умолчанию 10 г)
let insulinPerXE = 2; // Инсулина на 1 ХЕ (по умолчанию 2 ЕД)

// Рассчитываем ХЕ и инсулин
function calculateXE() {
    const carbs = parseFloat(document.getElementById("carbs").value) || 0;
    const portion = parseFloat(document.getElementById("portion").value) || 0;

    if (carbs < 0 || portion < 0) {
        alert("Пожалуйста, введите положительные значения.");
        return;
    }

    const xe = (carbs * portion) / (100 * carbsPerXE);
    const insulin = Math.round(xe * insulinPerXE);
    document.getElementById("xe_result").textContent = xe.toFixed(1);
    document.getElementById("insulin_result").textContent = insulin;
}

// Устанавливаем углеводы при выборе продукта
function setCarbs(carbs) {
    document.getElementById("carbs").value = carbs;
    calculateXE();
}

// Валидация ввода
function validateInput(value) {
    return value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");
}

// Ограничиваем ввод только цифрами и точкой
document.getElementById("carbs").addEventListener("input", function (e) {
    e.target.value = validateInput(e.target.value);
});

document.getElementById("portion").addEventListener("input", function (e) {
    e.target.value = validateInput(e.target.value);
});

// Автоматический расчёт при изменении значений
document.getElementById("carbs").addEventListener("input", calculateXE);
document.getElementById("portion").addEventListener("input", calculateXE);
