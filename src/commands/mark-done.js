import {readJson, writeJson} from '../utils/check-json.js';

export function markDone(id) {
  const existingTasks = readJson();

  if (existingTasks.tasks.length === 0) {
    console.log('No tasks found.');
    return;
  }

  const taskIndex = existingTasks.tasks.findIndex(task => task.id === parseInt(id));

  if (taskIndex === -1) {
    console.log(`Task with id ${id} not found.`);
    return;
  }

  existingTasks.tasks[taskIndex].status = "completed";
  writeJson(existingTasks);
  console.log(`Task with id ${id} updated to status completed.`);
}