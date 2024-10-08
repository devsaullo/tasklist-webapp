import { task } from "../tasks/newTask.mjs";

/**
 * Atualiza os valores do controlador de dados da tarefa em tempo real conforme
 * o usuário digita ou seleciona valores nos inputs.
 * 
 * - Atribui o valor correspondente ao campo específico no `taskDataController`.
 * - Habilita o botão de criação de tarefa quando todos os campos estão preenchidos.
 * @param {HTMLElement} element - Espera receber o elemento para realizar a trocar de valores dos campos do mesmo.
*/

const emojiTypeTask = (value) => {
  let emoji = null;
  switch (value) {
    case "health":
      emoji = "🏥";
      break;
    case "sport":
      emoji = "🏟️";
      break;
    case "study":
      emoji = "📜";
      break;
    case "work":
      emoji = "🗃️";
      break;
    case "others":
      emoji = "📎";
      break;
    default:
      emoji = "❓";
      break;
  }
  return emoji;
}

export const modalChangedValues = (element) => {
  const { name, value } = element.target;
  switch (name) {
    case "taskName":
      task.setProp(name, value)
      break;
    case "taskDate":
      task.setProp(name, value)
      break;
    case "taskSchedule":
      task.setProp(name, value)
      break;
    case "taskCategory":
      task.setProp(name, { name: value, emoji: emojiTypeTask(value) })
      break;
    default:
      break;
  }
  if (task.getProp("taskName") && task.getProp("taskDate") && task.getProp("taskSchedule") && task.getProp("taskCategory")) {
    const createTaskButton = document.getElementById("app_btn_create_new_task");
    createTaskButton.disabled = false;
  }
};


