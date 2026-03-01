import {TaskSchema} from '../schema/task-schema.js';
import {readJson, writeJson} from '../utils/check-json.js';

export function add(task){
  const existingTasks = readJson();

  const newId = existingTasks.lastId + 1;

  const newTask = {
    id: newId,
    description: task,
  };

  const parsedTask = TaskSchema.parse(newTask);

  existingTasks.tasks.push(parsedTask);
  existingTasks.lastId = newId;

  writeJson(existingTasks);
  console.log(`Task "${parsedTask.description}" added successfully with ID: ${parsedTask.id}`);
}