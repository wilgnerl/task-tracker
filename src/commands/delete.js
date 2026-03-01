import {readJson, writeJson} from '../utils/check-json.js';

export function deleteTask(taskId){
  const existingTasks = readJson();
  
  const taskIndex = existingTasks.tasks.findIndex(task => task.id === parseInt(taskId));

  if (taskIndex === -1) {
    console.log(`Task with ID ${taskId} not found.`);
    return;
  }

  const deletedTask = existingTasks.tasks.splice(taskIndex, 1)[0];
  writeJson(existingTasks);
  console.log(`Task "${deletedTask.description}" with ID ${deletedTask.id} deleted successfully.`);
}