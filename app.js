const tg = window.Telegram.WebApp;

tg.ready();

document.getElementById('checkBtn').addEventListener('click', () => {
    tg.sendData(JSON.stringify({ action: 'check_cod' }));
    tg.showAlert("Запрос отправлен, ожидайте ответа!");
});

