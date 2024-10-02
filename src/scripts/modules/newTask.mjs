const body = document.body;
const newTaskButton = document.getElementById('create_task');

let taskData = {
    name: null,
    date: null,
    schedule: null,
    category: null,
};

const modalTranstions = (name, element, className) => {
    if (name === 'in') {
        element.classList.add(className);
    }
    if (name === 'out') {
        element.classList.add(className);
    }
}

const closeModal = (element) => {
    modalTranstions('out', element, 'out')
    setTimeout(() => {
        element.remove();
    }, 300);
}

const createNewTask = (element) => {
    const checkTaskExist = window.tasks.some((task) => task.name === taskData.name);
    if (checkTaskExist) {
        taskData.name = "";
        const taskFieldName = document.getElementById('task_name');
        taskFieldName.value = "";
        return alert("Esta task já existe");
    }
    window.tasks.push({ ...taskData })
    taskData = { name: null, category: null, date: null, schedule: null }
    closeModal(element);
}

const modalStructure = `
        <div class="card_new_task_options">
            <i id="close_button" class="fa-solid fa-xmark" onclick></i>
        </div>
        <div class="card_new_task_content">
            <div class="card_new_task_inputs">
                <div class="card_new_task_inputs_fields">
                    <label>Nome da Tarefa</label>
                    <input type="text" placeholder="O nome da sua tarefa..." name="taskName" id="task_name" required>
                </div>
                <div class="card_new_task_inputs_fields_data">
                    <div class="card_new_task_inputs_fields">
                        <label>Data</label>
                        <input type="date" name="taskDate" id="task_date" required>
                    </div>
                    <div class="card_new_task_inputs_fields">
                        <label>Horário</label>
                        <input type="time" name="taskSchedule" id="task_schedule" required>
                    </div>
                </div>
                <div class="card_new_task_inputs_fields">
                    <label>Categoria</label>
                    <select name="taskCategories" id="task_category" required>
                        <option value="default" selected disabled >Selecione uma opção</option>
                        <option value="esporte">Esporte</option>
                        <option value="saude">Saúde</option>
                        <option value="estudo">Estudo</option>
                        <option value="trabalho">Trabalho</option>
                        <option value="outros">Outros</option>
                    </select>
                </div>
            </div>
            </div>
            <button type="submit" id="btn_create_new_task" class="card_new_task_btn_create">Criar nova tarefa</button>
        </div>
`;


const modalChangedValues = (e) => {
    const { name, value } = e.target; // Desestruração dos Inputs; 
    switch (name) {
        case "taskName":
            taskData.name = value
            console.log(value)
            break;
        case "taskDate":
            taskData.date = value
            break;
        case "taskSchedule":
            console.log("horario " + value)
            taskData.schedule = value
            break;
        case "taskCategories":
            console.log("categoria " + value)
            taskData.category = value
            break;
        default:
            break;
    }
}

const submitModalData = ({ e, overlay }) => {
    e.preventDefault();
    console.log(window.tasks)
    try {
        createNewTask(overlay);
    } catch (error) {
        console.log('deu erro')
    }
}

const clickedBtnTask = () => {
    const overlay = document.createElement('div');
    const modal = document.createElement('form');

    overlay.classList.add('overlay');
    body.appendChild(overlay);
    modal.classList.add('card_new_task');
    modal.innerHTML = modalStructure;
    overlay.appendChild(modal);

    const closeButton = document.getElementById('close_button');
    const createTaskButton = document.getElementById('btn_create_new_task');

    setTimeout(() => {
        modalTranstions('in', overlay, 'in');
    }, 10);

    const taskFieldName = document.getElementById('task_name');
    const taskFieldDate = document.getElementById('task_date');
    const taskFieldSchedule = document.getElementById('task_schedule');
    const taskFieldCategory = document.getElementById('task_category');

    taskFieldName.addEventListener('input', (e) => modalChangedValues(e));
    taskFieldDate.addEventListener('input', (e) => modalChangedValues(e));
    taskFieldSchedule.addEventListener('input', (e) => modalChangedValues(e));
    taskFieldCategory.addEventListener('input', (e) => modalChangedValues(e));

    closeButton.addEventListener('click', () => closeModal(overlay));
    modal.addEventListener('submit', (e) => submitModalData({ e, overlay }));
}



export const newTask = () => {
    newTaskButton.addEventListener('click', clickedBtnTask);
}