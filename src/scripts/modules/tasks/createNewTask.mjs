import { taskDataController } from "./newTask.mjs";
import { clearFields } from "../modal/clearFieldsModal.mjs";
import { createMsgStatus } from "../../components/msgStructure.mjs";
import { closeModal } from "../modal/closeModal.mjs";
import { getFirstClassName } from "../../utils/getFirstClassName.mjs";

/**
 * Cria uma nova tarefa e exibe mensagens de status.
 *
 * Esta função verifica se já existe uma tarefa com o mesmo nome.
 * Se a tarefa existir, exibe uma mensagem de erro e limpa os campos de entrada.
 * Caso contrário, cria a nova tarefa e exibe uma mensagem de sucesso.
 *
 * @param {HTMLElement} element - O elemento pai onde as mensagens de status serão exibidas.
 * @returns {Promise<void>} - Retorna uma Promise que se resolve quando a tarefa é criada ou quando a mensagem de erro é exibida.
*/

export const createNewTask = async (element) => {
  // Verificação de tarefa com o mesmo nome, retorna um (boleano)
  const checkTaskExist = window.tasks.some(
    (task) => task.name === taskDataController.name
  );

  const createTaskButton = document.getElementById("app_btn_create_new_task");
  // Desabilitando o botão.
  createTaskButton.disabled = true;

  // Condição para checar se é verdadeiro que já existe uma tarefa com o mesmo nome.
  if (checkTaskExist) {
    // Criação da mensagem de erro e atribuição de uma variável a mesma.
    const msgErrorCreated = createMsgStatus(element, {
      content: `A tarefa <span style="font-weight: 700;">${taskDataController.name}</span> já existe!`,
      color: "red",
    });
    // Efeito de transição Fade in (GSAP) e aparição da mensagem.
    gsap.to(getFirstClassName(msgErrorCreated), { opacity: 1, duration: 1 });
    // Limpando os valores dos campos/lista
    clearFields("data", "taskName");
    clearFields("input", "taskName");
    // Efeitos de transição OUT (GSAP) com timeout || Remoção da mensagem com promise e timeout
    await new Promise((resolve) => {
      setTimeout(() => {
        gsap.to(getFirstClassName(msgErrorCreated), {
          opacity: 0,
          duration: 1,
        });
        resolve();
      }, 3000);
    });
    setTimeout(() => {
      msgErrorCreated.remove();
    }, 6000);
    // Habilitando o botão para a próxima criação da tarefa
    createTaskButton.disabled = false;
    return;
  }

  // Mensagem criada com sucesso
  const msgCreatedSucess = createMsgStatus(element, {
    content: `A tarefa ${taskDataController.name} foi criada com sucesso`,
    color: "green",
  });
  // Efeitos de transição Fade In e Out (GSAP) com timeout || Remoção da mensagem com timeout
  gsap.to(getFirstClassName(msgCreatedSucess), { opacity: 1, duration: 1 });
  await new Promise((resolve) => {
    setTimeout(() => {
      gsap.to(getFirstClassName(msgCreatedSucess), { opacity: 0, duration: 1 });
      resolve();
    }, 2000);
  });
  setTimeout(() => {
    msgCreatedSucess.remove();
  }, 1000);
  // Habilitando o botão para a próxima criação de tarefa
  createTaskButton.disabled = false;

  // Fazendo o push para o array principal da minha lista de tarefas, usando spread como cópia da lista de controle (taskDataController)
  window.tasks.push({ ...taskDataController });

  // Limpando todos os campos dos Inputs
  clearFields("input");
  // Limpando todos os campos da lista de controle.
  clearFields("data");
  // Fechando o modal
  closeModal(element);
};
