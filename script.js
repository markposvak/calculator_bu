let carbsPerXE = 10; // Углеводов в 1 ХЕ (по умолчанию 10 г)
let insulinPerXE = 2; // Инсулина на 1 ХЕ (по умолчанию 2 ЕД)

// Рассчитываем ХЕ и инсулин
function calculateXE() {
    const carbs = parseFloat(document.getElementById("carbs").value) || 0;
    const portion = parseFloat(document.getElementById("portion").value) || 0;
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

// Открываем pop-up настроек
function openSettings() {
    document.getElementById("settingsPopup").style.display = "flex";
    document.getElementById("carbsPerXE").value = carbsPerXE;
    document.getElementById("insulinPerXE").value = insulinPerXE;
}

// Закрываем pop-up настроек
function closeSettings() {
    document.getElementById("settingsPopup").style.display = "none";
}

// Сохраняем настройки
function saveSettings() {
    carbsPerXE = parseFloat(document.getElementById("carbsPerXE").value);
    insulinPerXE = parseFloat(document.getElementById("insulinPerXE").value);
    closeSettings();
    calculateXE(); // Пересчитываем результаты
}

// Ограничиваем ввод только цифрами и точкой
document.getElementById("carbs").addEventListener("input", function (e) {
    e.target.value = e.target.value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");
});

document.getElementById("portion").addEventListener("input", function (e) {
    e.target.value = e.target.value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");
});

// Автоматический расчёт при изменении значений
document.getElementById("carbs").addEventListener("input", calculateXE);
document.getElementById("portion").addEventListener("input", calculateXE);

// Закрываем pop-up при клике вне окна
window.addEventListener("click", function (e) {
    if (e.target === document.getElementById("settingsPopup")) {
        closeSettings();
    }
});
