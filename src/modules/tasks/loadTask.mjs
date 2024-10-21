import { taskStructure } from "../../components/taskStructure.mjs";
import { deleteTask } from "./deleteTask.mjs";

const main = document.querySelector('main');
const section = main.querySelector('section');

const convertName = (nameTask) => {
    let name = null;
    switch (nameTask.toLowerCase()) {
        case "health":
            name = "Saúde";
            break;
        case "sport":
            name = "Esporte";
            break;
        case "study":
            name = "Estudo";
            break;
        case "work":
            name = "Trabalho";
            break;
        case "others":
            name = "Outros";
            break;
        default:
            name = "Indefinido";
            break;
    }
    return name;
}
export const loadTask = (item) => {
    const { name, category, date, schedule, id } = item
    const ctnMaster = document.querySelector('.controller');
    if (ctnMaster) {
        if (ctnMaster.children.length >= 3) {
            ctnMaster.classList.add('ativo');
        } else if (ctnMaster.classList.contains('ativo')) {
            ctnMaster.classList.remove('ativo')
        }

        const container = document.createElement('div');
        container.classList.add('container_pai');
        container.setAttribute('data-id', id);
        container.innerHTML = taskStructure();
        const task_info = container.querySelectorAll('.task_ctn_info p');
        const task_infos = container.querySelectorAll('.task_ctn_info p > span');
        const task_subctn_info = container.querySelectorAll('.task_content p');
        const task_delete_btn = container.querySelector('.deleteTaskIcon');
        task_info[0].textContent = name
        task_infos[0].textContent = category.emoji;
        task_infos[1].textContent = convertName(category.name);
        task_subctn_info[0].textContent = `Data: ${date}.`
        task_subctn_info[1].textContent = `Horário: ${schedule} horas.`
        task_delete_btn.onclick = (e) => deleteTask(e.srcElement);
        ctnMaster.appendChild(container);
        return;
    }
    const container = document.createElement('div');
    const newCtnMaster = document.createElement('div');
    container.classList.add('container_pai');
    container.setAttribute('data-id', id);
    newCtnMaster.classList.add('controller');
    main.classList.add('actived')
    container.innerHTML = taskStructure();
    section.innerHTML = "";
    const task_delete_btn = container.querySelector('.deleteTaskIcon');
    const task_info = container.querySelectorAll('.task_ctn_info p');
    const task_infos = container.querySelectorAll('.task_ctn_info p > span');
    const task_subctn_info = container.querySelectorAll('.task_content p');
    task_info[0].textContent = name
    task_infos[0].textContent = category.emoji;
    task_infos[1].textContent = convertName(category.name);
    task_subctn_info[0].textContent = `Data: ${date}.`
    task_subctn_info[1].textContent = `Horário: ${schedule} horas.`
    task_delete_btn.onclick = (e) => deleteTask(e.srcElement);
    section.classList.add('list_tasks');
    section.appendChild(newCtnMaster);
    newCtnMaster.appendChild(container);
}