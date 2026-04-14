// 1. Массив данных для инпутов (в твоем стиле!)
const inputsData = [
    {tag: "input", type: "text", placeholder: "First name"},
    {tag: "input", type: "text", placeholder: "Last name"},
    // Особый элемент для телефона с флагом
    {tag: "phone", placeholder: "Phone number"}, 
    {tag: "input", type: "email", placeholder: "Email address"},
    {tag: "select", placeholder: "Select an occasion", options: ["Birthday", "Anniversary"]},
    {tag: "textarea", placeholder: "Add a special request"}
];

// 2. Отрисовка инпутов
const windowInputsList = document.getElementById('window_left_inputs');

windowInputsList.innerHTML = inputsData.map(item => {
    if (item.tag === "input") {
        return `<input class="window_input" type="${item.type}" placeholder="${item.placeholder}">`;
    } 
    else if (item.tag === "phone") {
        return `
            <div style="display: flex; gap: 10px;">
                <select class="window_input" style="width: 70px;"><option>🇪🇸</option></select>
                <input class="window_input" type="tel" placeholder="${item.placeholder}" style="flex: 1;">
            </div>
        `;
    }
    else if (item.tag === "select") {
        return `
            <select class="window_input">
                <option value="" disabled selected>${item.placeholder}</option>
                ${item.options.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
            </select>
        `;
    }
    else if (item.tag === "textarea") {
        return `<textarea class="window_input" placeholder="${item.placeholder}"></textarea>`;
    }
}).join('');

// 3. Логика окна
const windowOverlay = document.getElementById('windowOverlay');
const openBtn = document.getElementById('openWindowBtn');
const closeBtn = document.getElementById('closeWindowBtn');
const confirmBtn = document.getElementById('confirmBtn');

// Открыть
openBtn.addEventListener('click', () => {
    windowOverlay.style.display = 'flex';
});

// Закрыть (по крестику или кнопке подтверждения)
[closeBtn, confirmBtn].forEach(btn => {
    btn.addEventListener('click', () => {
        windowOverlay.style.display = 'none';
    });
});

// Закрыть по клику на темный фон
window.addEventListener('click', (e) => {
    if (e.target === windowOverlay) {
        windowOverlay.style.display = 'none';
    }
});

// 4. Таймер 5:00
let time = 5 * 60;
const timerEl = document.getElementById('timer');
setInterval(() => {
    if (time > 0) {
        time--;
        let min = Math.floor(time / 60);
        let sec = time % 60;
        timerEl.textContent = `${min}:${sec < 10 ? '0' : ''}${sec}`;
    }
}, 1000);