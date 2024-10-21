import { switchTheme } from './utils/switchTheme.mjs';
import { newTask } from './modules/tasks/newTask.mjs';
import { loadTaskFromStorage } from './modules/tasks/loadTasksFromStorage.mjs';

// Array global que contém todas as listas de tarefas.
window.tasks = [];

// Função da inicialização de todo o ecossistema de interatividade do app da lista de tarefas
const initializeApp = () => {
    try {
        loadTaskFromStorage();
        document.addEventListener('DOMContentLoaded', () => {
            switchTheme();
            newTask();
        })
    } catch (error) {
        return console.error("Ocorreu um erro ao iniciar a interatividade: ", error)
    }
}

// Chamada da função initializeApp;
initializeApp();