/**
 * Estrutura a mensagem de status com um ícone e conteúdo.
 * 
 * @param {string} content - O conteúdo da mensagem.
 * @param {string} color - A cor do texto e do borda da mensagem.
 * @returns {string} - Retorna uma string HTML com a estrutura da mensagem.
 */

const msgStructure = (content, color) => {
  return (`
            <p><i class="fa-solid fa-circle-info" style="color: #272727 !important;"></i> Informação</p>
            <p style="color: ${color}">${content}</p>
        `);
};

/**
 * Cria um contêiner de mensagem de status e o adiciona a um elemento pai.
 * 
 * - Cria um elemento `div` para exibir uma mensagem de status.
 * - A mensagem tem um conteúdo customizado e uma cor definida.
 * - A borda inferior do contêiner é colorida de acordo com o parâmetro `color`.
 * - O contêiner é adicionado ao elemento pai fornecido.
 * 
 * @param {HTMLElement} element - O elemento pai ao qual o contêiner será adicionado.
 * @param {Object} params - Objeto contendo o conteúdo da mensagem e a cor.
 * @param {string} params.content - O texto da mensagem de status.
 * @param {string} params.color - A cor da mensagem e da borda.
 * @returns {HTMLElement} - O contêiner da mensagem criada.
 */

export const createMsgStatus = (element, { content, color }) => {
  const msgContainer = document.createElement("div");
  msgContainer.className = "app_modal_new_task_msg";
  msgContainer.innerHTML = msgStructure(content, color);
  msgContainer.style.borderBottom = `4px solid ${color}`
  element.appendChild(msgContainer);
  return msgContainer;
};