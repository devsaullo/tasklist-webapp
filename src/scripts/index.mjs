import { darkToggleTheme } from './modules/darkTheme.mjs';
import { newTask } from './modules/newTask.mjs';

window.tasks = [];
darkToggleTheme();
newTask();