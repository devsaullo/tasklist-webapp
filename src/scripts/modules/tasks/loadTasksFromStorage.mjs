import { loadTask } from "../modules/tasks/loadTask.mjs";

const array = localStorage.getItem("array");

(() => {
    if (array != null) {
        const cookies = JSON.parse(array);
        for (const [i, task] of cookies.entries()) {
            console.log(i, task.length)
            const { name, date, schedule, category } = task;
            loadTask({ name, date, schedule, category });
        }
    }
})();
