import { modalStructure } from "../../components/modalStucture.mjs";
import { getFirstClassName } from "../../helpers/getFirstClassName.mjs";
import { closeModal } from "../modal/closeModal.mjs";
import { modalChangedValues } from "../modal/modalChangedValues.mjs";
import { modalDataSubmitted } from "../modal/modalDataSubmitted.mjs";
import { Task } from "./Task.mjs";

/**
 * Instância da classe Task que contém toda a estrutura das tarefas.
 */
export const task = new Task();

/**
 * Cria e exibe um modal para a criação de uma nova tarefa.
 * 
 * Esta função configura o modal, adiciona os manipuladores de eventos 
 * para os campos de entrada e para o botão de fechar. Ela também anima a 
 * transição do modal quando exibido.
 */

const isButtonClicked = () => {
  const overlay = document.createElement("div");
  const modal = document.createElement("form");

  overlay.classList.add("app_overlay");
  document.body.appendChild(overlay);
  modal.classList.add("app_modal_new_task");
  modal.innerHTML = modalStructure();
  overlay.appendChild(modal);
  modal.addEventListener("submit", (event) => modalDataSubmitted(event));

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
  document.getElementById("create_task").addEventListener("click", isButtonClicked);
};