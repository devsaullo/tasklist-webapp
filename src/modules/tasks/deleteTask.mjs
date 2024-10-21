const deleteTaskInArray = (taskId) => {
    let tempData = window.tasks;
    const taskIndex = tempData.findIndex((task) => task.id === taskId);
    console.log(taskIndex)
    if (taskIndex !== -1) {
        if (tempData.length === 1) {
            tempData.splice(taskIndex, 1);
            localStorage.setItem("array", JSON.stringify(tempData));
            location.reload();
            return;
        }
        tempData.splice(taskIndex, 1);
        localStorage.setItem("array", JSON.stringify(tempData));
    } else {
        return console.error(`Ocorreu um erro ao deletar a task com id: "${taskId}" `)
    }
}


export const deleteTask = (e) => {
    let task = e.closest('.container_pai');
    let taskId = task.getAttribute('data-id');
    deleteTaskInArray(taskId);
    task.remove();
}