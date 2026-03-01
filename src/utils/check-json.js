import fs from "node:fs"
import {JSON_FILE} from "./const.js"
import {ContentSchema} from '../schema/task-schema.js';

function readJson() {
  const jsonFile = fs.readFileSync(JSON_FILE, "utf-8");
  return JSON.parse(jsonFile);
}

function writeJson(data) {
  fs.writeFileSync(JSON_FILE, JSON.stringify(data, null, 2), "utf-8");
}

function checkJson() {
  try {
    readJson();
    console.log("Initialization check: JSON file is valid.\n");
  } catch (error) {
    if (error.code === "ENOENT") {
      console.warn("JSON file not found. Creating a new one.");
      
      writeJson(ContentSchema.parse({}))
    } else {
      console.error("Error reading JSON file:", error);
    }
  }
}

export {checkJson, readJson, writeJson}