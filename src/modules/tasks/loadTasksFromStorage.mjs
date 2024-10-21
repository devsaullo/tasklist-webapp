import { loadTask } from "./loadTask.mjs";


export const loadTaskFromStorage = () => {
    let array = localStorage.getItem("array");
    if (array !== null) {
        const cookies = JSON.parse(array);
        window.tasks = [];
        for (const task of cookies) {
            const { name, date, schedule, category, id } = task;
            loadTask({ name, date, schedule, category, id });
            window.tasks.push({ name, date, schedule, category, id });
        }
        console.log(window.tasks)
    }
};
