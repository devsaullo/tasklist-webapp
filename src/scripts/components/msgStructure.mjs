const msgStructure = (content, color) => {
  return `
            <p><i class="fa-solid fa-circle-info" style="color: #272727 !important;"></i> Informação</p>
            <p style="color: ${color}">${content}</p>
        `;
};

export const createMsgStatus = (element, { content, color }) => {
  const msgContainer = document.createElement("div");
  msgContainer.className = "card_new_task_msg";
  msgContainer.innerHTML = msgStructure(content, color);
  element.appendChild(msgContainer);
  return msgContainer;
};