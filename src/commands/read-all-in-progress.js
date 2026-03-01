export function readAllInProgress(existingTasks){
  console.log(existingTasks.tasks.filter(task => task.status === "in_progress"));
}