export function readAllDone(existingTasks){
  console.log(existingTasks.tasks.filter(task => task.status === "completed"));
}