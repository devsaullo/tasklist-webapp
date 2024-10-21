import { createNewTask } from "../tasks/createTask.mjs";

/**
 * Lida com o envio do formulário de criação de uma nova tarefa.
 * 
 * - Impede o comportamento padrão de envio do formulário.
 * - Tenta criar uma nova tarefa usando `createNewTask(overlay)`.
 * - Lança um erro caso algo dê errado.
 * @param {Event} event - Elemento do form, espera capturar o evento do formulário.
 * @param {Object} params - Parâmetros passados dentro do Objeto
 * @param {HTMLElement} params.element - Elemento pai, espera receber o Overlay.
 */

export const modalDataSubmitted = (event) => {
  event.preventDefault();
  const overlay = event.currentTarget.closest(".app_overlay");
  if (event.defaultPrevented) {
    try {
      createNewTask(overlay);
    } catch (error) {
      throw Error("Occurred error in a creating new task: ", error);
    }
  } else {
    throw Error("Occurred error in prevent default Form");
  }
};