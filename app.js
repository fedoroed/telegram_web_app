const tg = window.Telegram.WebApp;

tg.ready();

document.getElementById('checkBtn').addEventListener('click', () => {
    tg.sendData(JSON.stringify({ action: 'check_cod' }));
    alert("Запрос отправлен, ожидайте ответа!");
});
