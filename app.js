document.getElementById('checkBtn').addEventListener('click', () => {
    tg.sendData(JSON.stringify({ action: 'check_cod' }));
    console.log("Данные отправлены:", JSON.stringify({ action: 'check_cod' }));
    alert("Запрос отправлен, ожидайте ответа!");
});
