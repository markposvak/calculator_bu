body {
    font-family: 'Arial', sans-serif;
    background: #ffffff;
    color: #333;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    background: #ffffff;
    border-radius: 20px;
    padding: 30px;
    width: 90%;
    max-width: 400px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
    text-align: center; /* Центрируем текст */
}

h1 {
    margin-bottom: 20px;
    font-weight: 600;
    font-size: 24px;
    color: #333;
}

.input-group {
    margin-bottom: 20px;
    text-align: left; /* Текст label выравниваем по левому краю */
}

.input-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    color: #555;
}

.input-group input {
    width: 100%;
    padding: 12px;
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 10px;
    font-size: 16px;
    color: #333;
    outline: none;
    transition: border-color 0.3s ease;
    box-sizing: border-box; /* Учитываем padding в ширине */
}

.input-group input:focus {
    border-color: #ff6f61;
}

.result {
    margin-top: 20px;
    text-align: center;
}

.result p {
    margin: 10px 0;
    font-size: 18px;
    font-weight: 500;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
}

.result i {
    margin-right: 10px;
    font-size: 20px;
}

#xe_result, #insulin_result {
    color: #ff6f61;
    font-weight: bold;
    transition: opacity 0.3s ease;
}

.product-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
    justify-content: center; /* Центрируем кнопки */
}

.product-buttons button {
    background: linear-gradient(135deg, #ff6f61, #ff3b2f);
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 12px 15px;
    font-size: 14px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    flex: 1 1 calc(50% - 10px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.product-buttons button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}
