import { taskDataController } from "../tasks/newTask.mjs";
/**
 * Limpa os valores dos campos de entrada (inputs) ou do controlador de dados (Data Controller).
 * 
 * - Se `type` for "input", a função limpa os valores dos inputs no modal, podendo limpar
 *   um campo específico ou todos, dependendo do parâmetro `name`.
 * - Se `type` for "data", a função limpa os valores no `taskDataController`, com a mesma
 *   lógica de limpar um campo específico ou todos.
 * 
 * @param {"input"|"data"} type - Propriedade do campo, seja do input ou data (Data Controller)
 * @param {"taskName"|"taskDate"|"taskSchedule"|"taskCategory"|null} [name] - O nome do campo a ser limpo. Se `null` ou não especificado, todos os campos serão limpos.
 */

export const clearFields = (type, name) => {
  if (type === "input") {
    const taskFieldName = document.getElementById("task_name");
    const taskFieldDate = document.getElementById("task_date");
    const taskFieldSchedule = document.getElementById("task_schedule");
    const taskFieldCategory = document.getElementById("task_category");
    switch (name) {
      case "taskName":
        taskFieldName.value = null;
        break;
      case "taskDate":
        taskFieldDate.value = null;
        break;
      case "taskSchedule":
        taskFieldSchedule.value = null;
        break;
      case "taskCategory":
        taskFieldCategory.value = "default";
        break;
      default:
        taskFieldName.value = null;
        taskFieldDate.value = null;
        taskFieldSchedule.value = null;
        taskFieldCategory.value = "default";
        break;
    }
  }
  if (type === "data") {
    switch (name) {
      case "taskName":
        taskDataController.name = null;
        break;
      case "taskDate":
        taskDataController.date = null;
        break;
      case "taskSchedule":
        taskDataController.schedule = null;
        break;
      case "taskCategories":
        taskDataController.category = "default";
        break;
      default:
        break;
    }
  }
};