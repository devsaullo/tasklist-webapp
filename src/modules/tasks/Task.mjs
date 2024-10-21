/**
 * Classe que representa uma Tarefa.
 */
export class Task {
    #name;
    #date;
    #schedule;
    #category;

    /**
     * Cria uma Tarefa.
     * @param {string} name - O nome da tarefa.
     * @param {string} date - A data da tarefa.
     * @param {string} schedule - O horário da tarefa.
     * @param {Object} category - A categoria da tarefa.
     */
    constructor(name, date, schedule, category) {
        this.#name = name;
        this.#date = date;
        this.#schedule = schedule;
        this.#category = { ...category };
    }

    /**
     * Obtém uma propriedade da tarefa.
     * @param {string} prop - A propriedade a ser obtida ('taskName', 'taskDate', 'taskSchedule', 'taskCategory').
     * @returns {(string|Object)} O valor da propriedade, ou um objeto com todas as propriedades se nenhuma propriedade específica for fornecida.
     */
    getProp(prop) {
        switch (prop) {
            case "taskName":
                return this.#name;
            case "taskDate":
                return this.#date;
            case "taskSchedule":
                return this.#schedule;
            case "taskCategory":
                return { ...this.#category };
            default:
                return { name: this.#name, date: this.#date, schedule: this.#schedule, category: { ...this.#category } };
        }
    }

    /**
     * Define uma propriedade da tarefa.
     * @param {string} prop - A propriedade a ser definida ('taskName', 'taskDate', 'taskSchedule', 'taskCategory').
     * @param {string|Object} value - O novo valor para a propriedade.
     */
    setProp(prop, value) {
        switch (prop) {
            case "taskName":
                this.#name = value;
                break;
            case "taskDate":
                this.#date = value;
                break;
            case "taskSchedule":
                this.#schedule = value;
                break;
            case "taskCategory":
                this.#category = { ...value };
                break;
            default:
                console.error("Propriedades inválidas.");
                break;
        }
    }
}
