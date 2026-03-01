import { Command } from "commander"
import { add, deleteTask, readAll, update, markDone, markInProgress } from "./src/commands/index.js"
import { checkJson } from "./src/utils/check-json.js"

checkJson();

const program = new Command();

program
  .name("Task tracker")
  .description("A simple task tracking application")
  .version("1.0.0");

program.command("add")
  .description("Add a new task")
  .argument("<task>", "The task to add")
  .action((task) => add(task));

program.command("delete")
  .description("Delete a task")
  .argument("<task>", "The task to delete")
  .action((taskId) => deleteTask(taskId));

program.command("update")
  .description("Update a task")
  .argument("<id>", "The id of the task to update")
  .argument("<description>", "The new description of the task")
  .action((id, description) => update(id, description));

program.command("list")
  .description("List all tasks")
  .argument("[status]", "Filter tasks by status (optional)")
  .action((status) => readAll(status));

program.command("mark-in-progress")
  .description("Mark a task as in progress")
  .argument("<id>", "The id of the task to mark as in progress")
  .action((id) => markInProgress(id));

program.command("mark-done")
  .description("Mark a task as done")
  .argument("<id>", "The id of the task to mark as done")
  .action((id) => markDone(id));

program.parse(process.argv);