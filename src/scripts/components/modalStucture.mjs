export const modalStructure = () => {
    return (
        `
        <div class="card_new_task_options">
            <i id="close_button" class="fa-solid fa-xmark" onclick></i>
        </div>
        <div class="card_new_task_content">
            <div class="card_new_task_inputs">
                <div class="card_new_task_inputs_fields">
                    <label>Nome da Tarefa</label>
                    <input type="text" pattern="^[a-zA-Z0-9\s]*$" title="Apenas letras, números e espaços são permitidos." placeholder="O nome da sua tarefa..." name="taskName" id="task_name" required>
                </div>
                <div class="card_new_task_inputs_fields_data">
                    <div class="card_new_task_inputs_fields">
                        <label>Data</label>
                        <input type="date" name="taskDate" id="task_date" required>
                    </div>
                    <div class="card_new_task_inputs_fields">
                        <label>Horário</label>
                        <input type="time" name="taskSchedule" id="task_schedule" required>
                    </div>
                </div>
                <div class="card_new_task_inputs_fields">
                    <label>Categoria</label>
                    <select name="taskCategories" id="task_category" required>
                        <option value="default" selected disabled >Selecione uma opção</option>
                        <option value="sport">Esporte</option>
                        <option value="health">Saúde</option>
                        <option value="study">Estudo</option>
                        <option value="work">Trabalho</option>
                        <option value="others">Outros</option>
                    </select>
                </div>
            </div>
            </div>
            <button type="submit" id="btn_create_new_task" class="card_new_task_btn_create" disabled >Criar nova tarefa</button>
        </div>
`
    )
}