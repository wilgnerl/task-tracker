import {readJson} from "../utils/check-json.js";
import {readAllDone} from "./read-all-done.js";
import {readAllInProgress} from "./read-all-in-progress.js";
import {readAllNotDone} from "./read-all-not-done.js";  

export function readAll(status){
  const existingTasks = readJson();

  if (existingTasks.tasks.length === 0) {
    console.log('No tasks found.');
    return;
  }

  if(status){
    if(status === "completed"){
      return readAllDone(existingTasks);
    } else if(status === "in_progress"){
      return readAllInProgress(existingTasks);
    } else if(status === "pending"){
      return readAllNotDone(existingTasks);
    }
  }


  console.log(existingTasks.tasks);
}
  