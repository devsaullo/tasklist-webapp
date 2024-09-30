const container = document.body;
const newTaskButton = document.getElementById('create_task');

const clickedBtn = () => {
    const overlay = document.createElement('div');
    const card = document.createElement('div');
    overlay.classList.add('overlay');
    container.appendChild(overlay);
    card.classList.add('card_new_task');
    card.innerHTML = `
        <div class="card_new_task_options">
            <i class="fa-solid fa-xmark"></i>
        </div>
        <div class="card_new_task_content">
            <div class="card_new_task_inputs">
                <div>
                    <p>Nome da Tarefa</p>
                </div>
            </div>
            <button class="card_new_task_btn_create">Criar nova tarefa</button>
        </div>
    `
    overlay.appendChild(card);
}

export const newTask = () => {
    newTaskButton.addEventListener('click', clickedBtn);
}