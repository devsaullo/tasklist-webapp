import { taskDataController } from "../tasks/newTask.mjs";

/**
 * Atualiza os valores do controlador de dados da tarefa em tempo real conforme
 * o usuário digita ou seleciona valores nos inputs.
 * 
 * - Atribui o valor correspondente ao campo específico no `taskDataController`.
 * - Habilita o botão de criação de tarefa quando todos os campos estão preenchidos.
 * @param {HTMLElement} element - Espera receber o elemento para realizar a trocar de valores dos campos do mesmo.
*/

export const modalChangedValues = (element) => {
  const { name, value } = element.target;
  switch (name) {
    case "taskName":
      taskDataController.name = value;
      break;
    case "taskDate":
      taskDataController.date = value;
      break;
    case "taskSchedule":
      taskDataController.schedule = value;
      break;
    case "taskCategories":
      taskDataController.category = value;
      break;
    default:
      break;
  }
  if (
    taskDataController.name &&
    taskDataController.date &&
    taskDataController.category &&
    taskDataController.schedule !== ""
  ) {
    const createTaskButton = document.getElementById("app_btn_create_new_task");
    createTaskButton.disabled = false;
  }
};


