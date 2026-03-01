export function readAllNotDone(existingTasks){
  console.log(existingTasks.tasks.filter(task => task.status === "pending"));
}