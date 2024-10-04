import { modalStructure } from "../../components/modalStucture.mjs";
import { getFirstClassName } from "../../utils/getFirstClassName.mjs";
import { closeModal } from "../modal/closeModal.mjs";
import { modalChangedValues } from "../modal/modalChangedValues.mjs";
import { submitModalData } from "../modal/submitModalData.mjs";

/** 
 *Lista de controle que contém as informações atuais passadas nos inputs.
*/
export let taskDataController = {
  /** @type {string|null} - Nome da tarefa. */
  name: null,
  /** @type {string|null} - Data da tarefa. */
  date: null,
  /** @type {string|null} - Horário da tarefa. */
  schedule: null,
  /** @type {string|null} - Categoria da tarefa. */
  category: null,
};


/**
 * Cria e exibe um modal para a criação de uma nova tarefa.
 * 
 * Esta função configura o modal, adiciona os manipuladores de eventos 
 * para os campos de entrada e para o botão de fechar. Ela também anima a 
 * transição do modal quando exibido.
 */
const clickedBtnTask = () => {
  const overlay = document.createElement("div");
  const modal = document.createElement("form");


  overlay.classList.add("app_overlay");
  document.body.appendChild(overlay);
  modal.classList.add("app_modal_new_task");
  modal.innerHTML = modalStructure();
  overlay.appendChild(modal);
  modal.addEventListener("submit", (e) => submitModalData(e));

  const createTaskButton = modal.querySelector("#app_btn_create_new_task");
  createTaskButton.disabled = true;

  gsap.to(getFirstClassName(overlay), { opacity: 1, duration: 0.2 });
  gsap.to(getFirstClassName(modal), { opacity: 1, duration: 0.8 });

  const modalChildren = modal.querySelectorAll('input, select');
  modalChildren.forEach((child) => {
    child.addEventListener('input', (e) => modalChangedValues(e))
  });

  const closeButton = modal.querySelector("#close_button");
  closeButton.addEventListener("click", () => closeModal(overlay));
};

/**
 * Inicializa a criação de uma nova tarefa ao adicionar um manipulador de eventos 
 * ao botão de criação de tarefa.
 */
export const newTask = () => {
  document.getElementById("create_task").addEventListener("click", clickedBtnTask);
};