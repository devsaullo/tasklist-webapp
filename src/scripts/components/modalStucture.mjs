/**
 * Função que retorna a estrutura HTML do modal para criar uma nova tarefa.
 * 
 * - Contém um botão de fechar (`fa-xmark`) e campos de input para nome da tarefa, data, horário e categoria.
 * - Inclui validações básicas nos campos de texto e opções predefinidas no seletor de categoria.
 * - O botão de criação de tarefa está inicialmente desabilitado, sendo ativado quando os campos forem preenchidos corretamente.
 * 
 * @returns {string} - Retorna a string HTML do modal.
 */
export const modalStructure = () => {
    return (
        `
        <div class="app_modal_new_task_options">
            <i id="close_button" class="fa-solid fa-xmark"></i>
        </div>
        <section class="app_modal_new_task_content">
            <fieldset class="app_modal_new_task_inputs">
                <div class="app_modal_new_task_inputs_fields">
                    <label>Nome da Tarefa</label>
                    <input type="text" pattern="^[a-zA-Z0-9\s]*$" title="Apenas letras, números e espaços são permitidos." placeholder="O nome da sua tarefa..." name="taskName" id="task_name" required>
                </div>
                <div class="app_modal_new_task_inputs_fields_data">
                    <div class="app_modal_new_task_inputs_fields">
                        <label>Data</label>
                        <input type="date" name="taskDate" id="task_date" required>
                    </div>
                    <div class="app_modal_new_task_inputs_fields">
                        <label>Horário</label>
                        <input type="time" name="taskSchedule" id="task_schedule" required>
                    </div>
                </div>
                <div class="app_modal_new_task_inputs_fields">
                    <label>Categoria</label>
                    <select name="taskCategory" id="task_category" required>
                        <option value="default" selected disabled >Selecione uma opção</option>
                        <option value="sport">Esporte</option>
                        <option value="health">Saúde</option>
                        <option value="study">Estudo</option>
                        <option value="work">Trabalho</option>
                        <option value="others">Outros</option>
                    </select>
                </div>
            </fieldset>
            <button type="submit" id="app_btn_create_new_task" class="app_modal_new_task_btn_create" disabled >Criar nova tarefa</button>
        </section>
`
    )
}