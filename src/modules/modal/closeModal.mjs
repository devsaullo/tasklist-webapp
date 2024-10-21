import { getFirstClassName } from "../../helpers/getFirstClassName.mjs";

/**
 * Fecha o modal aplicando animações de opacidade e removendo o elemento da DOM.
 * 
 * - Anima o modal e seu contêiner com GSAP para alterar a opacidade.
 * - Remove o elemento da DOM após um timeout de 1 segundo.
 * @param {HTMLElement} element - Espera receber o elemento pai para fechar o modal.
 */
export const closeModal = (element) => {
  const modal = element.children[0];
  gsap.to(getFirstClassName(modal), { opacity: 0, duration: 0.2 });
  gsap.to(getFirstClassName(element), { opacity: 0, duration: 0.8 });
  setTimeout(() => {
    element.remove();
  }, 1000);
};
