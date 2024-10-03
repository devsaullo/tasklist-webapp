import { modalStructure } from '../components/modalStucture.mjs'
import { createMsgStatus } from '../components/msgStructure.mjs'
const body = document.body;
const newTaskButton = document.getElementById('create_task');

// Lista de controle que contém as informações atuais passadas nos inputs.
let taskData = {
    name: null,
    date: null,
    schedule: null,
    category: null,
};

// Função que executa o fechamento do modal
const closeModal = (element) => {
    const modal  = element.children[0];
    gsap.to(getFirstClassName(modal), {opacity: 0, duration: 0.2})
    gsap.to(getFirstClassName(element), { opacity: 0, duration: 0.8 })
    setTimeout(() => {
        element.remove();
    }, 1000);
}

// Função na qual ela obtém a primeira classe do elemento passando no paremtro e retorna uma string formatada com a classe obtida.
const getFirstClassName = (element) => {
    return `.${element.classList[0]}`;
}

// Função para limpar os campos dos Inputs ou campos(valores) do Array.
// Parâmetros type: input || data && name: "Nome do campo"
const clearFields = (type, name) => {
    if (type === "input") {
        const taskFieldName = document.getElementById('task_name');
        const taskFieldDate = document.getElementById('task_date');
        const taskFieldSchedule = document.getElementById('task_schedule');
        const taskFieldCategory = document.getElementById('task_category');
        switch (name) {
            case "taskName":
                taskFieldName.value = null
                break;
            case "taskDate":
                taskFieldDate.value = null
                break;
            case "taskSchedule":
                taskFieldSchedule.value = null
                break;
            case "taskCategory":
                taskFieldCategory.value = "default"
                break;
            default:
                taskFieldName.value = null
                taskFieldDate.value = null
                taskFieldSchedule.value = null
                taskFieldCategory.value = "default"
                break;
        }
    }
    if (type === "data") {
        switch (name) {
            case "taskName":
                taskData.name = null
                break;
            case "taskDate":
                taskData.date = null
                break;
            case "taskSchedule":
                taskData.schedule = null
                break;
            case "taskCategories":
                taskData.category = "default"
                break;
            default:
                break;
        }
    }

}

// Função de criar uma nova tarefa para a lista de tarefas.
const createNewTask = async (element) => {
    // Verificação de tarefa com o mesmo nome, retorna um (boleano)
    const checkTaskExist = window.tasks.some((task) => task.name === taskData.name);
    const createTaskButton = document.getElementById('btn_create_new_task');
    // Desabilitando o botão.
    createTaskButton.disabled = true;
    console.log(checkTaskExist)
    // Condição para checar se é verdadeiro que já existe uma tarefa com o mesmo nome.
    if (checkTaskExist) {
        // Criação da mensagem de erro e atribuição de uma variavel a mesma.
        const msgErrorCreated = createMsgStatus(element, {
            content: `A tarefa <span style="font-weight: 500;">${taskData.name}</span> já existe!`,
            color: "red !important"
        })
        // Efeito de transição Fade in (GSAP) e aparição da mensagem.
        gsap.to(getFirstClassName(msgErrorCreated), { opacity: 1, duration: 1 });
        // Limpando os valores dos campos/lista
        clearFields("data", "taskName");
        clearFields("input", "taskName");
        // Efeitos de transição OUT (GSAP) com timeout || Remoção da mensagem com timeout
        console.log(getFirstClassName(msgErrorCreated))
        setTimeout(() => {
            gsap.to(getFirstClassName(msgErrorCreated), { opacity: 0, duration: 2 });
        }, 3000);
        setTimeout(() => {
            msgErrorCreated.remove()
        }, 3500);
        // Habibitando o botão para a próxima criação da tarefa
        createTaskButton.disabled = false;
        return;
    }
    // Mensagem criada com sucesso
    const msgCreatedSucess = createMsgStatus(element, {
        content: `A tarefa ${taskData.name} foi criada com sucesso`,
        color: "green !important"
    })
    // Efeitos de transição Fade In e Out (GSAP) com timeout || Remoção da mensagem com timeout
    gsap.to(getFirstClassName(msgCreatedSucess), { opacity: 1, duration: 1 });
    await new Promise((resolve) => {
        setTimeout(() => {
            gsap.to(getFirstClassName(msgCreatedSucess), { opacity: 0, duration: 2 });
            resolve()
        }, 3000);
    });
    msgCreatedSucess.remove()
    // Habilitando o botão para a próxima criação de tarefa
    createTaskButton.disabled = false;
    // Fazendo o push para o array principal da minha lista de tarefas, usando spread como cópia da lista de controle (taskData)
    window.tasks.push({ ...taskData })
    // Limpando todos os campos dos Inputs
    clearFields("input");
    // Reseta a lista de controle.
    taskData = { name: null, category: null, date: null, schedule: null }
    closeModal(element);
}

const modalChangedValues = async (e) => {
    const { name, value } = e.target; // Desestruração dos Inputs; 
    switch (name) {
        case "taskName":
            taskData.name = value
            break;
        case "taskDate":
            taskData.date = value
            break;
        case "taskSchedule":
            taskData.schedule = value
            break;
        case "taskCategories":
            taskData.category = value
            break;
        default:
            break;
    }
    if (taskData.name && taskData.date && taskData.category && taskData.schedule !== "") {
        const createTaskButton = document.getElementById('btn_create_new_task');
        createTaskButton.disabled = false;
    }
}

const submitModalData = ({ e, overlay }) => {
    e.preventDefault();
    console.log(window.tasks);
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
    modal.innerHTML = modalStructure();
    overlay.appendChild(modal);

    const closeButton = document.getElementById('close_button');
    const createTaskButton = document.getElementById('btn_create_new_task');

    gsap.to(getFirstClassName(overlay), { opacity: 1, duration: 0.2 })
    gsap.to(getFirstClassName(modal), { opacity: 1, duration: 0.8})
    createTaskButton.disabled = true;
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